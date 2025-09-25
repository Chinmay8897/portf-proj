-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the contact form)
CREATE POLICY "Allow contact form submissions" ON contact_messages
FOR INSERT WITH CHECK (true);

-- Create policy to allow reading for authenticated users (for you to view messages)
CREATE POLICY "Allow reading contact messages for authenticated users" ON contact_messages
FOR SELECT USING (auth.role() = 'authenticated');

-- Create an index on created_at for better performance
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages(created_at DESC);