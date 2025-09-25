import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { to, name, email, subject, message } = await req.json()

    // Validate required fields
    if (!to || !name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // For now, we'll use a simple webhook to send emails
    // You can integrate with SendGrid, Mailgun, or any other email service

    // Alternatively, send a notification to a webhook service like Zapier
    const webhookUrl = Deno.env.get('WEBHOOK_URL')

    if (webhookUrl) {
      const webhookData = {
        to,
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      }

      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })

      if (webhookResponse.ok) {
        return new Response(
          JSON.stringify({ success: true, message: 'Email sent successfully' }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }
    }

    // If no webhook configured, just log the contact form submission
    console.log('Contact form submission:', {
      to,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Contact form submission logged successfully'
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})