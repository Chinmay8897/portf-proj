import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Create formatted email content
    const emailContent = {
      to: ['adityasaichinmay@gmail.com'],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                .content { background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #495057; }
                .value { margin-left: 10px; }
                .message-box { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px; }
                .footer { margin-top: 20px; padding: 10px; text-align: center; color: #6c757d; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2 style="margin: 0; color: #007bff;">🚀 New Contact Form Submission</h2>
                    <p style="margin: 5px 0 0 0; color: #6c757d;">Received from your portfolio website</p>
                </div>

                <div class="content">
                    <div class="field">
                        <span class="label">👤 Name:</span>
                        <span class="value">${name}</span>
                    </div>

                    <div class="field">
                        <span class="label">📧 Email:</span>
                        <span class="value">${email}</span>
                    </div>

                    <div class="field">
                        <span class="label">📋 Subject:</span>
                        <span class="value">${subject}</span>
                    </div>

                    <div class="field">
                        <span class="label">💬 Message:</span>
                        <div class="message-box">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <p>Sent on ${new Date().toLocaleString('en-US', {
                      timeZone: 'Asia/Kolkata',
                      dateStyle: 'full',
                      timeStyle: 'medium'
                    })}</p>
                    <p>To reply, simply respond to ${email}</p>
                </div>
            </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
Reply to: ${email}
      `,
      reply_to: email
    }

    // Send email using Resend (you'll need to get a Resend API key)
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

    if (!RESEND_API_KEY) {
      console.log('Email content prepared:', emailContent)
      return new Response(
        JSON.stringify({ success: true, message: 'Contact form logged (email service not configured)' }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@your-domain.com>', // You'll need to verify a domain
        ...emailContent
      }),
    })

    if (emailResponse.ok) {
      const emailData = await emailResponse.json()
      return new Response(
        JSON.stringify({ success: true, emailId: emailData.id }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    } else {
      const errorText = await emailResponse.text()
      console.error('Resend API error:', errorText)
      throw new Error(`Email service error: ${errorText}`)
    }

  } catch (error: any) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process contact form', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})