# Contact Form Setup Instructions

## Overview
The contact form now saves submissions to Supabase and can send email notifications to `adityasaichinmay@gmail.com`.

## Setup Steps

### 1. Create Supabase Table
Run the SQL in `supabase-setup.sql` in your Supabase SQL editor:

```sql
-- This will create the contact_messages table with proper security policies
```

### 2. Deploy Supabase Edge Function (Optional for email notifications)
If you want email notifications, deploy the edge function:

```bash
supabase functions deploy send-contact-email
```

### 3. Configure Environment Variables
In your Supabase project settings, set these environment variables:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

For email notifications (optional):
- `WEBHOOK_URL`: A webhook URL (like Zapier) to handle email sending

## How It Works

1. **Form Submission**: User fills out the contact form
2. **Supabase Storage**: Form data is saved to the `contact_messages` table
3. **Email Notification**: (Optional) An email is sent to `adityasaichinmay@gmail.com`
4. **User Feedback**: User sees success message

## Viewing Messages

You can view contact form submissions in your Supabase dashboard:
1. Go to your Supabase project
2. Navigate to "Table Editor"
3. Select the "contact_messages" table
4. View all submissions with timestamps

## Email Integration Options

### Option 1: Webhook (Recommended)
Set up a Zapier webhook that receives the form data and sends an email.

### Option 2: Direct Email Service
Modify the edge function to use:
- SendGrid
- Mailgun
- Resend
- AWS SES

### Option 3: Simple Notification
The current setup logs submissions - you can check Supabase logs or the database directly.

## Testing

1. Fill out the contact form on your website
2. Check the Supabase `contact_messages` table for the new entry
3. If email is configured, check `adityasaichinmay@gmail.com` for notifications

## Security

- The table has Row Level Security enabled
- Anyone can insert (for form submissions)
- Only authenticated users can read (for you to view messages)
- All form data is validated before saving