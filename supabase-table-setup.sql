-- Step 1: Create the contact_messages table
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

-- Step 2: Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policy to allow anyone to insert (for contact form)
CREATE POLICY "Allow public contact form submissions"
ON public.contact_messages FOR INSERT
WITH CHECK (true);

-- Step 4: Create policy for authenticated users to read (for admin)
CREATE POLICY "Allow authenticated users to read contact messages"
ON public.contact_messages FOR SELECT
USING (auth.role() = 'authenticated');

-- Step 5: Create index for better performance
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
ON public.contact_messages(created_at DESC);

-- Step 6: Create index for status filtering
CREATE INDEX IF NOT EXISTS contact_messages_status_idx
ON public.contact_messages(status);