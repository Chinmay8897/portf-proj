#!/bin/bash

echo "🚀 Setting up Contact Form Email Integration..."

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Installing..."
    npm install -g supabase
fi

# Check if we're in a Supabase project
if [ ! -f "supabase/config.toml" ]; then
    echo "📁 Initializing Supabase project..."
    supabase init
    echo "⚠️  Please run 'supabase link --project-ref YOUR_PROJECT_ID' manually"
    echo "   Find your project ID in Supabase Dashboard → Settings → General"
    exit 1
fi

# Deploy the edge function
echo "📤 Deploying email function..."
supabase functions deploy send-contact-email

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Run the SQL from 'supabase-table-setup.sql' in your Supabase SQL Editor"
echo "2. Get a Resend API key from resend.com"
echo "3. Add RESEND_API_KEY to Supabase Edge Functions environment variables"
echo "4. Test your contact form!"
echo ""
echo "📖 Full instructions: COMPLETE_EMAIL_SETUP.md"