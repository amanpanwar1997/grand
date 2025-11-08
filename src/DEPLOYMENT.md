# 🚀 DEPLOYMENT GUIDE

**Complete deployment instructions for Inchtomilez Digital Marketing website**

**Version:** 3.2.0  
**Status:** ✅ Production Ready

---

## 📋 PRE-DEPLOYMENT CHECKLIST

**Before deploying, ensure:**

- [ ] All dependencies installed: `npm install`
- [ ] Build completes: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] No TypeScript errors: `npm run type-check`
- [ ] All pages load correctly
- [ ] Forms work correctly
- [ ] Images load correctly
- [ ] SEO meta tags present
- [ ] No console errors

---

## 🎯 DEPLOYMENT OPTIONS

### **1. Vercel (Recommended)**
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ Free SSL
- ✅ Fastest setup (2 minutes)

### **2. Hostinger**
- ✅ Shared hosting
- ✅ Manual upload
- ✅ cPanel access

### **3. Other Platforms**
- Netlify
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront

---

## 🔷 OPTION 1: VERCEL DEPLOYMENT

**Best for: Automatic deployments, modern workflows**

### **Step 1: Prepare GitHub Repository**

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "deploy: Production ready"

# Add remote (replace with your URL)
git remote add origin https://github.com/yourusername/inchtomilez.git

# Push
git push -u origin main
```

---

### **Step 2: Connect to Vercel**

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in with GitHub**
3. **Click "New Project"**
4. **Import your repository**
5. **Vercel auto-detects settings:**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

---

### **Step 3: Configure (Optional)**

**Environment Variables:** (if needed)
- Go to Project Settings > Environment Variables
- Add any API keys or secrets

**Custom Domain:**
- Go to Project Settings > Domains
- Add your custom domain
- Update DNS records

---

### **Step 4: Deploy**

1. **Click "Deploy"**
2. **Wait 2-3 minutes**
3. **Done! Your site is live** 🎉

**Automatic deployments:**
- Every `git push` triggers a new deployment
- Preview deployments for pull requests
- Instant rollbacks available

---

### **Vercel Configuration File**

**Already included: `vercel.json`**

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🟠 OPTION 2: HOSTINGER DEPLOYMENT

**Best for: Traditional hosting, shared servers**

### **Step 1: Build Locally**

```bash
# Clean install (recommended)
npm run clean:all
npm install

# Build for production
npm run build

# Verify build
npm run preview
# Test at http://localhost:4173
```

**This creates a `dist/` folder with all production files.**

---

### **Step 2: Prepare Files**

**What to upload:**
```
dist/
├── index.html
├── assets/
│   ├── js/
│   ├── css/
│   └── images/
├── sitemap.xml
├── robots.txt
├── manifest.json
└── (all other files from dist/)
```

**Do NOT upload:**
- `node_modules/`
- `src/`
- `components/`
- `package.json`
- `vite.config.ts`
- `.git/`

---

### **Step 3: Upload to Hostinger**

**Method A: File Manager (Web Interface)**

1. **Login to Hostinger control panel**
2. **Go to File Manager**
3. **Navigate to `public_html/`**
4. **Delete default files (if any)**
5. **Upload all files from `dist/` folder**
6. **Wait for upload to complete**

---

**Method B: FTP Client (FileZilla)**

1. **Get FTP credentials:**
   - Host: ftp.yourdomain.com
   - Username: your-username
   - Password: your-password
   - Port: 21

2. **Connect with FileZilla:**
   - File > Site Manager > New Site
   - Enter credentials
   - Connect

3. **Upload files:**
   - Navigate to `public_html/`
   - Upload all files from `dist/`
   - Overwrite existing files

---

### **Step 4: Configure Hostinger**

**Set Document Root:**
1. Go to Hosting > Manage
2. Find "Document Root" or "Website Root"
3. Set to `/public_html` (or folder where you uploaded)

**Enable HTTPS:**
1. Go to SSL/TLS
2. Enable "Force HTTPS"
3. Install free SSL certificate

**Configure Redirects:**

Create `.htaccess` file in `public_html/`:

```apache
# SPA Redirect
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### **Step 5: Test Deployment**

1. **Visit your domain:**
   - https://yourdomain.com
   - Check homepage loads

2. **Test navigation:**
   - Click all menu items
   - Check all pages load

3. **Test direct URLs:**
   - Visit https://yourdomain.com/about
   - Should load (not 404)

4. **Check mobile:**
   - Open on phone
   - Test responsiveness

5. **Check console:**
   - Open DevTools (F12)
   - Look for errors

---

## 🔵 OPTION 3: OTHER PLATFORMS

### **Netlify:**

1. **Connect GitHub:**
   - Go to [netlify.com](https://netlify.com)
   - Import repository

2. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy:**
   - Click deploy
   - Wait 2-3 minutes

**Redirects:** Create `dist/_redirects`:
```
/*    /index.html   200
```

---

### **Cloudflare Pages:**

1. **Connect GitHub:**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Import repository

2. **Configure:**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output: `dist`

3. **Deploy:**
   - Click deploy
   - Wait 2-3 minutes

---

### **GitHub Pages:**

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Configure:**
   - Go to repository Settings > Pages
   - Source: gh-pages branch

---

## 🔧 POST-DEPLOYMENT

### **1. Verify Deployment**

**Check these URLs:**
```
https://yourdomain.com/
https://yourdomain.com/about
https://yourdomain.com/services
https://yourdomain.com/industries
https://yourdomain.com/blog
https://yourdomain.com/contact
```

---

### **2. Test Performance**

**Tools:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Targets:**
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

---

### **3. Submit to Search Engines**

**Google:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing:**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site
3. Submit sitemap

**IndexNow:**
- Already integrated in the website
- Automatic submissions on content changes

---

### **4. Monitor Deployment**

**Vercel:**
- Deployments tab shows status
- Logs available for debugging
- Analytics included

**Hostinger:**
- Check server logs in cPanel
- Monitor uptime
- Check resource usage

---

## 🐛 DEPLOYMENT TROUBLESHOOTING

### **Build fails on Vercel/Netlify:**

**Check build logs:**
- Look for error messages
- Common issues:
  - Missing dependencies
  - TypeScript errors
  - Environment variables

**Fix:**
```bash
# Test build locally first
npm run clean
npm install
npm run build

# If successful, push:
git add .
git commit -m "fix: Build issues"
git push origin main
```

---

### **404 errors on page refresh:**

**Cause:** SPA routing not configured

**Vercel/Netlify:** Already handled by `vercel.json`

**Hostinger:** Add `.htaccess` (see above)

**GitHub Pages:** Not recommended for SPAs

---

### **Blank page after deployment:**

**Causes:**
1. Wrong base URL
2. Assets not loading
3. JavaScript errors

**Fix:**
1. **Check console (F12)**
2. **Check Network tab**
3. **Verify assets load**

**If using subdirectory:**
```typescript
// vite.config.ts
export default defineConfig({
  base: '/subdirectory/',
  // ...
})
```

---

### **Slow loading:**

**Optimize:**
1. **Enable compression** (gzip/brotli)
2. **Enable caching** (see .htaccess)
3. **Use CDN** (Vercel includes this)
4. **Optimize images** (WebP format)

---

## 📊 DEPLOYMENT COMPARISON

| Feature | Vercel | Hostinger | Netlify | GitHub Pages |
|---------|--------|-----------|---------|--------------|
| **Setup Time** | 2 min | 10 min | 2 min | 5 min |
| **Auto Deploy** | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes |
| **CDN** | ✅ Global | ⚠️ Limited | ✅ Global | ✅ Global |
| **SSL** | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| **Custom Domain** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Serverless** | ✅ Yes | ❌ No | ✅ Yes | ❌ No |
| **Cost** | Free tier | Paid | Free tier | Free |
| **Best For** | Modern apps | Traditional | JAMstack | Static sites |

---

## ✅ FINAL CHECKLIST

**Before going live:**

- [ ] Build completes without errors
- [ ] All pages accessible
- [ ] Forms work correctly
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SSL enabled (HTTPS)
- [ ] Custom domain configured
- [ ] Sitemap submitted
- [ ] Analytics setup (optional)
- [ ] Performance tested (>90 score)
- [ ] SEO meta tags present
- [ ] Favicon present
- [ ] 404 page works

---

## 🎯 RECOMMENDED WORKFLOW

### **Development:**
```bash
npm run dev
# Make changes
# Test locally
```

### **Pre-deployment:**
```bash
npm run type-check
npm run build
npm run preview
# Test production build locally
```

### **Deployment:**
```bash
git add .
git commit -m "feat: New feature"
git push origin main
# Auto-deploys on Vercel/Netlify
```

---

## 📚 ADDITIONAL RESOURCES

**Documentation:**
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Hostinger Tutorials](https://www.hostinger.com/tutorials/)
- [Netlify Docs](https://docs.netlify.com/)

**Tools:**
- [Vercel CLI](https://vercel.com/docs/cli)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)
- [FileZilla](https://filezilla-project.org/)

---

**Your site is ready to deploy!** 🚀

**Questions? Check [README.md](./README.md) for more information.**

---

**Last Updated:** November 7, 2025  
**Version:** 3.2.0  
**Status:** ✅ Production Ready
