# 🚀 Deployment Guide for Celestial Calendar

## 📋 Pre-Deployment Checklist

### 1. **Environment Variables**
Make sure you have these set up in your production environment:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key

# Email Configuration (optional)
RESEND_API_KEY=your_resend_api_key

# Production URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. **Database Setup**
- Run the SQL scripts in `supabase-setup.sql` on your Supabase database
- Set up Row Level Security policies
- Configure Supabase Storage buckets for eBooks

### 3. **Stripe Production Setup**
- Switch from test keys to live keys
- Set up webhook endpoints pointing to your domain
- Create products with the correct price IDs:
  - `price_ebook_499` for $4.99 ebooks
  - `price_moons_embrace` for $5.99 ebook

---

## 🌐 Option 1: Vercel (Recommended)

### **Step 1: Connect to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### **Step 2: Configure Environment Variables**
1. Go to your Vercel dashboard
2. Navigate to your project → Settings → Environment Variables
3. Add all the environment variables listed above

### **Step 3: Custom Domain**
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update your DNS records as instructed

### **Step 4: Automatic Deployments**
- Connect your GitHub repository to Vercel
- Every push to main branch will auto-deploy

---

## 🌐 Option 2: Netlify

### **Step 1: Deploy to Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### **Step 2: Configure Environment Variables**
1. Go to Netlify dashboard → Site settings → Environment variables
2. Add all environment variables

### **Step 3: Custom Domain**
1. Go to Domain management in Netlify
2. Add your custom domain
3. Update DNS records

---

## 🐳 Option 3: Docker (Custom Server)

### **Step 1: Build Docker Image**
```bash
# Build the image
docker build -t celestial-calendar .

# Run the container
docker run -p 3000:3000 -e NODE_ENV=production celestial-calendar
```

### **Step 2: Docker Compose (Recommended)**
Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
      - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
      - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
    restart: unless-stopped
```

### **Step 3: Deploy with Docker Compose**
```bash
docker-compose up -d
```

---

## 🌐 Option 4: Traditional Hosting (VPS)

### **Step 1: Server Setup**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
npm install -g pm2
```

### **Step 2: Deploy Application**
```bash
# Clone your repository
git clone your-repo-url
cd your-project

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "celestial-calendar" -- start
pm2 save
pm2 startup
```

### **Step 3: Nginx Configuration**
Create `/etc/nginx/sites-available/celestial-calendar`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### **Step 4: SSL with Let's Encrypt**
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com
```

---

## 🔧 Post-Deployment Configuration

### 1. **Update Stripe Webhooks**
- Go to Stripe Dashboard → Webhooks
- Add endpoint: `https://yourdomain.com/api/webhook`
- Select events: `checkout.session.completed`, `payment_intent.succeeded`

### 2. **Test the Application**
- Visit your domain
- Test the eBook purchase flow
- Verify downloads work correctly
- Check email functionality

### 3. **Monitor Performance**
- Set up monitoring (Vercel Analytics, Google Analytics)
- Monitor error logs
- Set up uptime monitoring

---

## 🛠️ Troubleshooting

### **Common Issues:**

1. **Environment Variables Not Working**
   - Double-check all variables are set correctly
   - Restart the application after adding variables

2. **Stripe Payments Failing**
   - Verify you're using live keys (not test keys)
   - Check webhook endpoints are correct
   - Test with Stripe's test cards first

3. **Database Connection Issues**
   - Verify Supabase URL and keys
   - Check Row Level Security policies
   - Ensure database is accessible from your domain

4. **File Upload Issues**
   - Verify Supabase Storage bucket permissions
   - Check CORS settings in Supabase

---

## 📞 Support

If you encounter issues:
1. Check the application logs
2. Verify all environment variables are set
3. Test locally with production environment variables
4. Check the browser console for errors

---

## 🎯 Next Steps After Deployment

1. **SEO Optimization**
   - Add meta tags
   - Set up Google Search Console
   - Create a sitemap

2. **Analytics**
   - Set up Google Analytics
   - Track conversions and sales

3. **Backup Strategy**
   - Set up database backups
   - Backup uploaded files

4. **Security**
   - Enable HTTPS
   - Set up security headers
   - Regular security updates

Happy deploying! 🌟 