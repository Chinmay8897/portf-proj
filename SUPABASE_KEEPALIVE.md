# Supabase Keep-Alive Configuration

This project includes an automatic keep-alive mechanism to prevent your Supabase project from being paused due to inactivity.

## Setup Instructions

### 1. Configure Environment Variables

Create or update your `.env.local` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 2. Get Your Supabase Credentials

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Go to `Settings` > `API`
4. Copy the following:
   - **Project URL** → Use as `VITE_SUPABASE_URL`
   - **Project API keys** > **anon/public** → Use as `VITE_SUPABASE_ANON_KEY`

### 3. How It Works

The keep-alive service:
- **Automatically starts** when your app loads
- **Pings every 25 minutes** to maintain database activity
- **Uses minimal resources** with lightweight health checks
- **Handles errors gracefully** with fallback mechanisms
- **Works across multiple tabs** - if one tab is open, the service continues

### 4. Monitoring

Check your browser's developer console for keep-alive logs:
- `Starting Supabase keep-alive service...`
- `Supabase keep-alive ping successful [timestamp]`

### 5. Important Notes

- **Free Tier Limitation**: Supabase pauses projects after ~7 days of inactivity
- **Keep-Alive Frequency**: Pings every 25 minutes to stay well within activity requirements
- **Minimal Impact**: Uses simple queries that don't affect your database quota significantly
- **Browser Dependent**: Only works when your portfolio site is open in a browser tab

### 6. Alternative Solutions

If you need guaranteed uptime without browser dependency:
1. **Upgrade to Supabase Pro** ($25/month) - no pausing
2. **Set up external monitoring** (e.g., UptimeRobot, cron jobs)
3. **Use GitHub Actions** with scheduled workflows

### 7. Troubleshooting

If the keep-alive isn't working:
1. Check that environment variables are set correctly
2. Verify Supabase credentials in your dashboard
3. Check browser console for error messages
4. Ensure your Supabase project is not already paused

---

**Note**: This solution requires your portfolio website to be visited regularly. For production applications requiring guaranteed uptime, consider upgrading to Supabase Pro tier.