# 📧 Complete Email Setup Guide for Contact Form

## 🎯 **What This Will Do**
When someone submits your contact form, it will:
1. ✅ Save the message to Supabase database
2. ✅ Send a beautifully formatted email to `adityasaichinmay@gmail.com`
3. ✅ Include all form details (name, email, subject, message)
4. ✅ Allow you to reply directly to the sender

---

## 📋 **Step 1: Set Up Database Table**

### 1.1 Open Supabase Dashboard
- Go to [supabase.com](https://supabase.com)
- Login and select your project
- Click **"SQL Editor"** in the left sidebar

### 1.2 Create the Table
- Click **"New Query"**
- Copy and paste this SQL code:

```sql
-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status TEXT DEFAULT 'new',
    email_sent BOOLEAN DEFAULT FALSE
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for contact form)
CREATE POLICY "Allow public contact form submissions"
ON public.contact_messages FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to read (for you to view messages)
CREATE POLICY "Allow authenticated users to read contact messages"
ON public.contact_messages FOR SELECT
USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
ON public.contact_messages(created_at DESC);

CREATE INDEX IF NOT EXISTS contact_messages_status_idx
ON public.contact_messages(status);
```

### 1.3 Execute the SQL
- Click the **"Run"** button
- You should see "Success. No rows returned"
- Go to **"Table Editor"** → you should now see `contact_messages` table

---

## 📋 **Step 2: Set Up Email Function**

### 2.1 Install Supabase CLI
```bash
npm install -g supabase
```

### 2.2 Initialize Supabase (if not done already)
```bash
cd your-project-folder
supabase init
```

### 2.3 Link to Your Project
```bash
supabase link --project-ref YOUR_PROJECT_ID
```
*Find your project ID in Supabase Dashboard → Settings → General*

### 2.4 Deploy the Email Function
```bash
supabase functions deploy send-contact-email
```

---

## 📋 **Step 3: Set Up Email Service (Resend)**

### 3.1 Create Resend Account
- Go to [resend.com](https://resend.com)
- Sign up for free account
- Go to **"API Keys"** section
- Create new API key

### 3.2 Add API Key to Supabase
- In Supabase Dashboard → **"Settings"** → **"Edge Functions"**
- Click **"Add Environment Variable"**
- Name: `RESEND_API_KEY`
- Value: Your Resend API key
- Click **"Save"**

### 3.3 Verify Domain (Optional but Recommended)
- In Resend dashboard → **"Domains"**
- Add your domain (e.g., `yourportfolio.com`)
- Follow DNS setup instructions
- **OR** use Resend's shared domain for testing

---

## 📋 **Step 4: Test the Setup**

### 4.1 Test Form Submission
1. Fill out your contact form
2. Click "Send Message"
3. Check for success message

### 4.2 Verify Database Entry
- Go to Supabase → **"Table Editor"** → `contact_messages`
- You should see the new submission

### 4.3 Check Email Delivery
- Check `adityasaichinmay@gmail.com`
- Look for email with subject "Portfolio Contact: [subject]"

---

## 🔧 **Troubleshooting**

### If Database Errors:
```bash
# Check if table exists
SELECT * FROM contact_messages LIMIT 1;
```

### If Function Errors:
```bash
# View function logs
supabase functions logs send-contact-email
```

### If Email Not Received:
1. Check Resend dashboard for delivery status
2. Check spam folder
3. Verify API key is set correctly
4. Try with verified domain

---

## 📊 **Viewing Contact Messages**

### Option 1: Supabase Dashboard
- Go to **"Table Editor"** → `contact_messages`
- View all submissions with timestamps

### Option 2: Create Admin Panel (Advanced)
```sql
-- View recent messages
SELECT name, email, subject, created_at
FROM contact_messages
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🎨 **Email Format Preview**

Your emails will look like this:

```
🚀 New Contact Form Submission
Received from your portfolio website

👤 Name: [Visitor Name]
📧 Email: [visitor@email.com]
📋 Subject: [Their Subject]
💬 Message:
[Their message content]

Sent on: [Date and Time in IST]
To reply, simply respond to visitor@email.com
```

---

## ⚡ **Quick Commands Summary**

```bash
# 1. Run SQL in Supabase Dashboard (copy from supabase-table-setup.sql)
# 2. Deploy function
supabase functions deploy send-contact-email

# 3. Set environment variable in Supabase Dashboard:
# RESEND_API_KEY = your_resend_api_key

# 4. Test the form!
```

---

## 🎉 **Success Checklist**

- ✅ Database table created
- ✅ RLS policies configured
- ✅ Edge function deployed
- ✅ Resend API key added
- ✅ Domain verified (optional)
- ✅ Form tested successfully
- ✅ Email received at adityasaichinmay@gmail.com

**Your contact form is now fully functional!** 🚀