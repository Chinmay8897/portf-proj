import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not configured')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

// Keep-alive service to prevent Supabase project from pausing
export class SupabaseKeepAlive {
  private intervalId: NodeJS.Timeout | null = null
  private readonly PING_INTERVAL = 25 * 60 * 1000 // 25 minutes

  start() {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase not configured, keep-alive service not started')
      return
    }

    console.log('Starting Supabase keep-alive service...')

    // Initial ping
    this.ping()

    // Set up recurring pings
    this.intervalId = setInterval(() => {
      this.ping()
    }, this.PING_INTERVAL)
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
      console.log('Supabase keep-alive service stopped')
    }
  }

  private async ping() {
    try {
      // Simple query to keep the database active
      // This creates a minimal health check table if it doesn't exist
      const { data, error } = await supabase
        .from('health_check')
        .select('id')
        .limit(1)

      if (error && error.code === 'PGRST116') {
        // Table doesn't exist, create it
        await this.createHealthCheckTable()
        return
      }

      if (error) {
        console.warn('Supabase keep-alive ping failed:', error.message)
        return
      }

      console.log('Supabase keep-alive ping successful', new Date().toISOString())
    } catch (error) {
      console.warn('Supabase keep-alive error:', error)
    }
  }

  private async createHealthCheckTable() {
    try {
      // Create a simple health check table
      const { error } = await supabase.rpc('create_health_check_table')

      if (error) {
        console.warn('Could not create health_check table:', error.message)
        // Try alternative approach - just query any existing table
        await this.alternativePing()
      } else {
        console.log('Health check table created successfully')
      }
    } catch (error) {
      console.warn('Error creating health check table:', error)
      await this.alternativePing()
    }
  }

  private async alternativePing() {
    try {
      // Alternative: Query Supabase system tables or use auth
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.warn('Alternative ping failed:', error.message)
      } else {
        console.log('Alternative Supabase ping successful', new Date().toISOString())
      }
    } catch (error) {
      console.warn('Alternative ping error:', error)
    }
  }
}

export const keepAliveService = new SupabaseKeepAlive()