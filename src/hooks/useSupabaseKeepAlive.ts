import { useEffect } from 'react'
import { keepAliveService } from '@/lib/supabase'

/**
 * Custom hook to manage Supabase keep-alive functionality
 * Prevents Supabase project from being paused due to inactivity
 */
export const useSupabaseKeepAlive = () => {
  useEffect(() => {
    // Start the keep-alive service when the component mounts
    keepAliveService.start()

    // Cleanup: Stop the service when the component unmounts
    return () => {
      keepAliveService.stop()
    }
  }, [])

  // Handle page visibility changes to pause/resume when tab is hidden/visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Don't stop the service when tab is hidden to maintain activity
        console.log('Tab hidden - keeping Supabase service active')
      } else {
        // Ensure service is running when tab becomes visible
        console.log('Tab visible - ensuring Supabase service is active')
        keepAliveService.start()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Handle browser window closing/refreshing
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Keep the service running even when closing the tab
      // The service will continue in other open tabs
      console.log('Page unloading - Supabase keep-alive continues in other tabs')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])
}