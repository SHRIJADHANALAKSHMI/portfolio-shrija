# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Prerequisites

- A production build: `npm run build`
- A GitHub account and repository
- An account on your chosen deployment platform

## Deployment Options

### 1. **Netlify** (Recommended - Easiest)

#### Option A: GitHub Integration (Automatic Deployments)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [https://netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Authorize GitHub
   - Select your repository
   - Click "Deploy site"

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (in environment variables)

4. **Custom Domain** (Optional)
   - Go to Site settings
   - Domain management
   - Add custom domain
   - Follow DNS configuration steps

#### Option B: Manual Upload

1. **Build your project**

   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Drag and drop the `dist` folder onto Netlify
   - Your site will be deployed instantly

### 2. **Vercel**

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Or use GitHub Integration**
   - Go to [https://vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

### 3. **GitHub Pages**

1. **Update vite.config.js**

   ```javascript
   export default {
     base: "/portfolio/", // if deploying to /portfolio
     // ... rest of config
   };
   ```

2. **Build the project**

   ```bash
   npm run build
   ```

3. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Build for GitHub Pages"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository settings
   - Scroll to "GitHub Pages"
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Click "Save"

5. **Your site will be at**
   ```
   https://yourusername.github.io/portfolio
   ```

### 4. **AWS S3 + CloudFront**

1. **Create S3 bucket**
   - Go to AWS S3 console
   - Create new bucket (name: your-domain.com)
   - Enable static website hosting
   - Upload `dist` folder contents

2. **Set up CloudFront**
   - Create distribution
   - Set S3 bucket as origin
   - Configure cache behaviors
   - Set index.html as default root object

3. **Configure domain**
   - Update Route 53 or domain registrar DNS
   - Point to CloudFront distribution

### 5. **Firebase Hosting**

1. **Install Firebase CLI**

   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**

   ```bash
   firebase init
   ```

   - Select Hosting
   - Public directory: `dist`

3. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### 6. **Heroku** (Legacy - Not recommended for static sites)

1. **Create Procfile**

   ```
   web: node server.js
   ```

2. **Deploy**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

## Post-Deployment

### 1. **Set Custom Domain**

For most platforms:

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Point domain to your hosting platform
3. Enable HTTPS (automatic on most platforms)

### 2. **SSL Certificate**

- Netlify: Automatic (Let's Encrypt)
- Vercel: Automatic
- GitHub Pages: Automatic for \*.github.io domains
- AWS: Use ACM
- Firebase: Automatic

### 3. **SEO Optimization**

1. **Update meta tags in index.html**

   ```html
   <meta name="description" content="Your portfolio description" />
   <meta name="keywords" content="web developer, portfolio" />
   ```

2. **Create sitemap.xml**

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourdomain.com</loc>
       <lastmod>2024-01-01</lastmod>
     </url>
   </urlset>
   ```

3. **Submit to Google Search Console**
   - Go to Google Search Console
   - Add property
   - Verify ownership
   - Submit sitemap

### 4. **Analytics**

Add Google Analytics:

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to your site

### 5. **Performance Optimization**

- Enable gzip compression (automatic)
- Set up CDN caching (automatic on most platforms)
- Minify CSS/JS (Vite does this)
- Optimize images (use modern formats)

## Environment Variables

For sensitive data:

1. Copy `.env.example` to `.env.local`
2. Add your values
3. Access with `import.meta.env.VITE_*`

Example:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod --dir=dist
```

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Blank Page After Deploy

1. Check browser console for errors
2. Verify `base` path in vite.config.js
3. Check that all assets are loading
4. Clear browser cache (Ctrl+Shift+Del)

### CORS Issues

1. Add CORS headers in netlify.toml
2. Configure API endpoints properly
3. Use environment variables for URLs

### Performance Issues

1. Analyze build with `npm run build`
2. Check bundle size
3. Enable compression
4. Optimize images
5. Use CDN for static assets

## Monitoring

### Uptime Monitoring

- Use services like UptimeRobot
- Monitor your domain regularly
- Get alerts on downtime

### Error Tracking

- Set up Sentry for error tracking
- Monitor user issues
- Track performance metrics

## Backup & Recovery

1. **Keep GitHub up to date**

   ```bash
   git push origin main
   ```

2. **Backup important files**
   - Resume
   - Project descriptions
   - Contact information

3. **Test deployment regularly**
   - Make small changes
   - Deploy to test
   - Verify functionality

## Security Best Practices

1. ✅ Use HTTPS everywhere
2. ✅ Keep dependencies updated
3. ✅ Don't expose API keys
4. ✅ Use environment variables
5. ✅ Enable security headers
6. ✅ Regular security audits

## Frequently Asked Questions

**Q: How do I update my portfolio after deployment?**
A: Push changes to GitHub, and automatic deployment will trigger.

**Q: How do I use a custom domain?**
A: Update your domain's DNS records to point to your hosting platform.

**Q: Is there a cost?**
A: Netlify and Vercel offer free tier. More features may require paid plans.

**Q: How do I add a contact form backend?**
A: Use services like EmailJS, Formspree, or Netlify Forms.

## Support

For issues with specific platforms:

- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

Happy deploying! 🎉
