# EmailJS Setup Guide for Contact Form

This guide explains how to set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the setup instructions for your chosen provider
5. **Important**: Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Set up the template with these variables:

### Template Content:
```html
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Reply-To: {{reply_to}}

Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### Template Variables to include:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email address

4. **Important**: Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123xyz`)
3. Copy this key

## Step 5: Update Environment Variables

Update your `.env` file with your EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit a test message
4. Check your email for the received message

## Email Flow

1. **Primary**: EmailJS sends email directly to your inbox
2. **Fallback 1**: If EmailJS fails, tries Supabase Edge Function
3. **Fallback 2**: If both fail, opens user's default email client with pre-filled message

## Troubleshooting

### Common Issues:

1. **EmailJS 403 Error**: Check your public key and make sure your domain is allowed
2. **Gmail Issues**: Make sure you've authorized EmailJS in your Gmail security settings
3. **Template Not Found**: Verify your template ID is correct
4. **Service Not Found**: Verify your service ID is correct

### Testing Tips:

- Test with different email addresses
- Check your spam/junk folder
- Verify all template variables are working
- Test the fallback mechanisms

## Security Notes

- EmailJS public key is safe to expose in client-side code
- Never expose your private EmailJS keys
- Consider setting up domain restrictions in EmailJS dashboard
- Rate limiting is handled by EmailJS automatically

## Support

If you encounter issues:
1. Check EmailJS dashboard for error logs
2. Review browser console for error messages
3. Test each fallback mechanism individually
4. Contact EmailJS support if needed

---

Your contact form now has reliable email delivery with multiple fallback options!