# 📚 COMPLETE SEO EDITING GUIDE - FAQ FORMAT

**Project:** Inchtomilez Digital Marketing Agency  
**Status:** ✅ **COMPREHENSIVE GUIDE**  
**Last Updated:** November 8, 2025

---

## 📋 TABLE OF CONTENTS

1. [Quick Start - Change SEO in 30 Seconds](#-quick-start)
2. [Page Titles - Where & How](#1-how-do-i-change-page-titles)
3. [Meta Descriptions](#2-how-do-i-change-meta-descriptions)
4. [Keywords](#3-how-do-i-change-keywords)
5. [H1 Headings](#4-how-do-i-change-h1-headings)
6. [Open Graph Images](#5-how-do-i-change-open-graph-og-images)
7. [Structured Data/Schema](#6-how-do-i-change-structured-dataschema)
8. [Individual Blog Posts](#7-how-do-i-change-seo-for-blog-posts)
9. [Global SEO (All Pages)](#8-how-do-i-change-global-seo-settings)
10. [Sitemaps](#9-how-do-i-update-sitemaps)
11. [Robots.txt](#10-how-do-i-edit-robotstxt)
12. [Canonical URLs](#11-how-do-i-change-canonical-urls)
13. [Author Information](#12-how-do-i-add-author-information)
14. [noindex Pages](#13-how-do-i-noindex-a-page)
15. [Social Media Preview](#14-how-do-i-control-social-media-previews)
16. [Local SEO (Geographic)](#15-how-do-i-change-local-seo-settings)
17. [Search Verification](#16-how-do-i-add-google-search-console-verification)
18. [Advanced Tips](#-advanced-seo-tips)

---

## 🚀 QUICK START

### **Want to change SEO for ANY page in 30 seconds?**

**File:** `/utils/seoConfig.tsx`

**Example:**

```tsx
'/about': {
  title: 'Your New Title',           // ← Change this
  description: 'Your new description',  // ← Change this
  keywords: ['keyword1', 'keyword2'],   // ← Change this
  h1: 'Your New H1 Heading',         // ← Change this
  // Done! ✅
},
```

**That's it!** One file controls all SEO. Keep reading for detailed explanations.

---

## 1️⃣ HOW DO I CHANGE PAGE TITLES?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Location in File:**

```tsx
export const SEO_CONFIG: Record<string, PageSEOConfig> = {
  
  '/': {
    title: 'Inchtomilez Digital Marketing And Advertising Agency', // ← CHANGE THIS
    // ... other fields
  },
  
  '/about': {
    title: 'Read Us | Trusted Digital Marketing And Advertising Agency', // ← CHANGE THIS
    // ... other fields
  },
  
  '/services': {
    title: '12 Core Marketing Services - SEO, PPC, Branding & More | Indore', // ← CHANGE THIS
    // ... other fields
  },
  
  // ... more pages
};
```

### **What You Need to Know:**

| Field | What It Does | Max Length | Best Practices |
|-------|--------------|------------|----------------|
| `title` | Browser tab title + Google search result title | 50-60 chars | Include primary keyword + brand name |

### **Example Changes:**

```tsx
// ❌ BAD - Too generic
title: 'About Us'

// ✅ GOOD - Descriptive + Keywords
title: 'About Inchtomilez - Award-Winning Digital Marketing Agency in Indore'

// ✅ EXCELLENT - Keywords + Location + USP
title: 'About Us | 7 Years of Marketing Excellence in Indore, MP'
```

### **Special Notes:**

- ✅ Title automatically appends ` | Inchtomilez Digital Marketing & Advertising Agency` (see SEOHead.tsx line 36)
- ✅ You can include the brand name yourself to control placement
- ✅ For homepage, use full brand name
- ✅ For other pages, use descriptive title

### **After Editing:**

```bash
# Save file
# Deploy
git add utils/seoConfig.tsx
git commit -m "feat: update page titles"
git push origin main
```

---

## 2️⃣ HOW DO I CHANGE META DESCRIPTIONS?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Location in File:**

```tsx
'/': {
  title: '...',
  description: 'DIGITAL MARKETING | IT SOLUTIONS | Advertisments | Branding', // ← CHANGE THIS
  // ... other fields
},

'/about': {
  title: '...',
  description: 'Meet the team behind Indore\'s most innovative digital marketing agency...', // ← CHANGE THIS
  // ... other fields
},
```

### **What You Need to Know:**

| Field | What It Does | Max Length | Best Practices |
|-------|--------------|------------|----------------|
| `description` | Shown in Google search results below title | 150-160 chars | Include keywords, CTA, USP |

### **Example Changes:**

```tsx
// ❌ BAD - Too short, no keywords
description: 'We are a marketing agency.'

// ✅ GOOD - Keywords + Value Proposition
description: 'Leading digital marketing agency in Indore. Expert SEO, PPC, social media, branding & web development. 7+ years experience. Free consultation.'

// ✅ EXCELLENT - Keywords + Numbers + CTA + Location
description: 'Indore\'s #1 digital marketing agency. 500+ clients, 7 years experience. Expert SEO, PPC, branding & web design. Get free consultation today!'
```

### **Pro Tips:**

- ✅ Include 1-2 primary keywords
- ✅ Add numbers (social proof)
- ✅ Include location (Indore, MP)
- ✅ Add a CTA (call, consult, learn)
- ✅ Make it compelling to click

### **After Editing:**

Same as titles - save, commit, deploy.

---

## 3️⃣ HOW DO I CHANGE KEYWORDS?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Location in File:**

```tsx
'/': {
  title: '...',
  description: '...',
  keywords: [
    // Primary keywords
    'digital marketing agency In Indore',  // ← CHANGE THESE
    'advertising company Indore',           // ← CHANGE THESE
    // LSI keywords
    'integrated marketing solutions',       // ← CHANGE THESE
    // Local keywords
    'Indore',                              // ← CHANGE THESE
    'Madhya Pradesh',                       // ← CHANGE THESE
  ],
  // ... other fields
},
```

### **Keyword Types:**

| Type | Example | Purpose |
|------|---------|---------|
| Primary | 'digital marketing agency Indore' | Main search terms |
| LSI (Related) | 'integrated marketing solutions' | Related terms Google expects |
| Long-tail | 'best SEO services for small business' | Specific, low competition |
| Local | 'Indore', 'Madhya Pradesh', 'MP' | Geographic targeting |
| Brand | 'Inchtomilez' | Brand recognition |

### **Example Changes:**

```tsx
keywords: [
  // Primary (most important)
  'digital marketing agency Indore',
  'best marketing agency MP',
  
  // Services
  'SEO services Indore',
  'PPC management',
  'social media marketing',
  
  // LSI (related terms)
  'integrated marketing solutions',
  'full-service advertising',
  'brand development',
  
  // Long-tail (specific)
  'affordable digital marketing Indore',
  'small business marketing services',
  
  // Local
  'Indore',
  'Madhya Pradesh',
  'Vijay Nagar',
  'Central India',
  
  // Brand
  'Inchtomilez',
],
```

### **Keyword Research Tools:**

- Google Keyword Planner
- Ubersuggest
- AnswerThePublic
- Google Search suggestions
- Competitor analysis

### **Best Practices:**

- ✅ 10-15 keywords per page
- ✅ Mix of primary, LSI, long-tail
- ✅ Include location keywords
- ✅ Don't keyword stuff
- ✅ Focus on user intent

---

## 4️⃣ HOW DO I CHANGE H1 HEADINGS?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Location in File:**

```tsx
'/': {
  title: '...',
  description: '...',
  keywords: [...],
  h1: 'Transform Your Business with Digital Marketing Excellence', // ← CHANGE THIS
  // ... other fields
},
```

### **What Is H1?**

The main heading on the page - most important for SEO after title tag.

### **How It's Used:**

Pages automatically use this H1:

```tsx
// In HomePage.tsx (line 18)
const seo = useSEO(); // Auto-loads SEO config

// Then (somewhere in JSX):
<h1 className="text-[30px] font-medium">{seo.h1}</h1>
```

### **Example Changes:**

```tsx
// ❌ BAD - Generic, no keywords
h1: 'Welcome to Our Website'

// ✅ GOOD - Keywords + Value
h1: 'Digital Marketing Agency in Indore - Drive Growth'

// ✅ EXCELLENT - Keywords + Location + Benefit
h1: 'Transform Your Indore Business with Award-Winning Digital Marketing'
```

### **H1 Best Practices:**

- ✅ One H1 per page (automatically enforced)
- ✅ Include primary keyword
- ✅ Make it compelling
- ✅ 30-70 characters
- ✅ Different from title tag (but related)
- ✅ Describe page content accurately

### **Current H1s in Your Site:**

```tsx
Homepage: 'Transform Your Business with Digital Marketing Excellence'
About: 'About Inchtomilez - Your Trusted Marketing Partner'
Services: 'Comprehensive Digital Marketing Services'
Contact: 'Contact Us - Get Free Consultation'
// ... etc
```

---

## 5️⃣ HOW DO I CHANGE OPEN GRAPH (OG) IMAGES?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Location in File:**

```tsx
'/about': {
  title: '...',
  description: '...',
  keywords: [...],
  h1: '...',
  ogType: 'website',              // ← Type of content
  ogImage: '/about-og-image.jpg', // ← CHANGE THIS (optional)
  // ... other fields
},
```

### **What Are OG Images?**

The image shown when sharing your page on:
- Facebook
- LinkedIn
- WhatsApp
- Slack
- etc.

### **Default OG Image:**

If you don't specify `ogImage`, uses: `/og-image.jpg` (global default)

### **How to Add Custom OG Images:**

**Step 1:** Create image (1200x630px recommended)

**Step 2:** Upload to `/public/`

```
/public/
├── og-image.jpg              # Global default ✅
├── about-og-image.jpg        # About page
├── services-og-image.jpg     # Services page
└── contact-og-image.jpg      # Contact page
```

**Step 3:** Add to seoConfig:

```tsx
'/about': {
  title: '...',
  description: '...',
  ogImage: '/about-og-image.jpg', // ← Add this
},

'/services': {
  title: '...',
  description: '...',
  ogImage: '/services-og-image.jpg', // ← Add this
},
```

### **OG Image Specifications:**

| Property | Value |
|----------|-------|
| Recommended size | 1200x630px |
| Aspect ratio | 1.91:1 |
| Max file size | < 1MB |
| Format | JPG, PNG |
| Text readability | Large, clear text |
| Safe zone | Avoid text in outer 10% |

### **OG Types:**

```tsx
ogType: 'website'  // Default (most pages)
ogType: 'article'  // Blog posts
ogType: 'service'  // Service pages
ogType: 'product'  // Product pages
```

### **Testing OG Images:**

- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

---

## 6️⃣ HOW DO I CHANGE STRUCTURED DATA/SCHEMA?

### **Answer:** Two files:
1. `/utils/seoConfig.tsx` (assign schema to pages)
2. `/utils/structuredData.tsx` (edit schema content)

### **Quick Method - Assign Schema to Pages:**

**File:** `/utils/seoConfig.tsx`

```tsx
'/': {
  title: '...',
  description: '...',
  schema: 'website',  // ← Uses websiteSchema from structuredData.tsx
},

'/about': {
  title: '...',
  description: '...',
  schema: 'organization',  // ← Uses organizationSchema
},

'/contact': {
  title: '...',
  description: '...',
  schema: 'localBusiness',  // ← Uses localBusinessSchema
},

'/services/digital-marketing': {
  title: '...',
  description: '...',
  schema: 'service',  // ← Auto-generates service schema
},
```

### **Available Schema Types:**

| Schema Type | When to Use | Example Pages |
|-------------|-------------|---------------|
| `'website'` | Homepage, main pages | /, /blogs |
| `'organization'` | About, company info | /about, /contact |
| `'localBusiness'` | Contact, location | /contact |
| `'service'` | Service pages | /services/* |
| `'article'` | Blog posts | /blogs/* |
| Custom object | Special needs | See below |

### **Advanced - Edit Schema Content:**

**File:** `/utils/structuredData.tsx`

```tsx
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inchtomilez Digital Marketing & Advertising Agency", // ← CHANGE
  "alternateName": "Inchtomilez",                              // ← CHANGE
  "url": "https://www.inchtomilez.com",                        // ← CHANGE
  "logo": "https://www.inchtomilez.com/logo.png",              // ← CHANGE
  "description": "Premium digital marketing agency...",         // ← CHANGE
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indore",      // ← CHANGE
    "addressRegion": "MP",            // ← CHANGE
    "addressCountry": "IN"            // ← CHANGE
  },
  // ... more fields
};
```

### **Custom Schema Example:**

```tsx
'/services/digital-marketing': {
  title: '...',
  description: '...',
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Inchtomilez"
    },
    "areaServed": "Indore, Madhya Pradesh",
    "description": "Expert digital marketing services..."
  },
},
```

### **Testing Structured Data:**

- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

---

## 7️⃣ HOW DO I CHANGE SEO FOR BLOG POSTS?

### **Answer:** Edit individual blog post files

### **Method 1: Dynamic SEO (Recommended)**

**File:** `/components/pages/BlogDetailPage.tsx`

This file uses dynamic SEO based on blog data:

```tsx
const seo = useSEO({
  title: `${blog.title} | Inchtomilez Blog`,  // ← Uses blog title
  description: blog.metaDescription,          // ← Uses blog description
  keywords: blog.keywords,                     // ← Uses blog keywords
  h1: blog.title,                             // ← Uses blog title as H1
  ogType: 'article',                          // ← Article type
  author: 'Inchtomilez Team',                 // ← Author
});
```

### **Where Blog Data Comes From:**

**File:** `/components/data/blogData.tsx`

```tsx
export const blogPosts = [
  {
    id: '1',
    title: 'How to Rank #1 on Google in 2024',           // ← CHANGE
    metaDescription: 'Complete guide to SEO...',          // ← CHANGE
    keywords: ['SEO', 'Google ranking', 'tips'],         // ← CHANGE
    slug: 'how-to-rank-1-google-2024',                   // ← CHANGE
    category: 'seo',                                     // ← CHANGE
    excerpt: 'Learn proven strategies...',                // ← CHANGE
    content: 'Full blog content here...',                // ← CHANGE
    image: '/blog-images/seo-ranking.jpg',               // ← CHANGE
    author: 'Inchtomilez Team',                          // ← CHANGE
    publishDate: '2024-11-08',                           // ← CHANGE
    readTime: '12 min',                                  // ← CHANGE
  },
  // ... 224 more posts
];
```

### **Adding a New Blog Post:**

**Step 1:** Add to blogData.tsx:

```tsx
{
  id: '225',  // ← Next ID
  title: 'Your New Blog Title',
  metaDescription: 'Your SEO description (150-160 chars)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  slug: 'your-new-blog-title',  // URL-friendly
  category: 'seo',  // or 'ppc', 'social-media', etc.
  excerpt: 'Short summary for listings',
  content: 'Full blog post content...',
  image: '/blog-images/your-image.jpg',
  author: 'Your Name',
  publishDate: '2024-11-08',
  readTime: '10 min',
},
```

**Step 2:** Save and deploy!

### **Blog SEO Best Practices:**

- ✅ Title: 50-60 characters, include keyword
- ✅ Meta description: 150-160 characters
- ✅ Keywords: 5-10 relevant terms
- ✅ Slug: Short, descriptive, lowercase
- ✅ Image: Optimized, with alt text
- ✅ Content: 1000+ words for SEO
- ✅ Internal links: Link to other pages

---

## 8️⃣ HOW DO I CHANGE GLOBAL SEO SETTINGS?

### **Answer:** Edit `/index.html`

### **Global Settings in index.html:**

**File:** `/index.html`

```html
<!-- Lines 12-14: Primary Meta Tags -->
<title>Inchtomilez Digital Marketing And Advertising Agency</title>  <!-- ← CHANGE -->
<meta name="title" content="Inchtomilez Digital Marketing..." />     <!-- ← CHANGE -->
<meta name="description" content="DIGITAL MARKETING | IT..." />      <!-- ← CHANGE -->

<!-- Lines 24-28: Local SEO (Geographic) -->
<meta name="geo.region" content="IN-MP" />           <!-- ← CHANGE if different location -->
<meta name="geo.placename" content="Indore" />       <!-- ← CHANGE -->
<meta name="geo.position" content="22.7196;75.8577" />  <!-- ← CHANGE coordinates -->

<!-- Line 34: Base URL -->
<link rel="canonical" href="https://www.inchtomilez.com/" />  <!-- ← CHANGE domain -->

<!-- Line 38: Theme Color -->
<meta name="theme-color" content="#eab308" />  <!-- ← CHANGE brand color -->

<!-- Lines 54-74: Open Graph (Social Media) -->
<meta property="og:url" content="https://www.inchtomilez.com/" />  <!-- ← CHANGE -->
<meta property="og:title" content="Inchtomilez..." />               <!-- ← CHANGE -->
<meta property="og:image" content="https://www.inchtomilez.com/og-image.jpg" />  <!-- ← CHANGE -->

<!-- Lines 117-156: Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inchtomilez Digital Marketing & Advertising Agency",  <!-- ← CHANGE -->
  "url": "https://www.inchtomilez.com",                         <!-- ← CHANGE -->
  "logo": "https://www.inchtomilez.com/logo.png",               <!-- ← CHANGE -->
  // ... more fields to change
}
</script>
```

### **What to Update in index.html:**

| Field | Location (Line) | What It Does |
|-------|----------------|--------------|
| Site title | 12 | Default page title |
| Description | 14 | Default description |
| Canonical URL | 22 | Your domain |
| Theme color | 38 | Browser theme (mobile) |
| OG image | 60 | Default social image |
| Company name | 122 | Organization schema |
| Logo URL | 125 | Company logo |
| Address | 127-131 | Business address |
| Social links | 138-142 | Social media URLs |

### **Important Notes:**

- ⚠️ These are GLOBAL defaults
- ⚠️ Individual pages override these (via SEOHead component)
- ⚠️ Only edit if changing company name, domain, or location

---

## 9️⃣ HOW DO I UPDATE SITEMAPS?

### **Answer:** Sitemaps are in `/public/` directory

### **Your Sitemap Files:**

```
/public/
├── sitemap.xml              # Main sitemap index ✅
├── sitemap-index.xml        # Sitemap index (all sitemaps)
├── sitemap-pages.xml        # Main pages (home, about, contact)
├── sitemap-services.xml     # Service pages
├── sitemap-blogs-new.xml    # Blog posts (224 posts)
```

### **Editing Main Sitemap:**

**File:** `/public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.inchtomilez.com/sitemap-pages.xml</loc>  <!-- ← CHANGE domain -->
    <lastmod>2024-11-07</lastmod>                             <!-- ← CHANGE date -->
  </sitemap>
  <sitemap>
    <loc>https://www.inchtomilez.com/sitemap-services.xml</loc>
    <lastmod>2024-11-07</lastmod>
  </sitemap>
  <!-- ... more sitemaps -->
</sitemapindex>
```

### **Editing Page Sitemap:**

**File:** `/public/sitemap-pages.xml`

```xml
<url>
  <loc>https://www.inchtomilez.com/</loc>  <!-- ← CHANGE URL -->
  <lastmod>2024-11-07</lastmod>            <!-- ← CHANGE date when updated -->
  <changefreq>daily</changefreq>           <!-- ← How often page changes -->
  <priority>1.0</priority>                 <!-- ← Importance (0.0-1.0) -->
</url>

<url>
  <loc>https://www.inchtomilez.com/about</loc>
  <lastmod>2024-11-07</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### **Sitemap Priority Guide:**

| Page Type | Priority | Change Frequency |
|-----------|----------|------------------|
| Homepage | 1.0 | daily |
| Main pages | 0.8 | weekly |
| Services | 0.8 | monthly |
| Industries | 0.7 | monthly |
| Blog posts | 0.6 | monthly |
| Categories | 0.7 | weekly |

### **After Editing Sitemaps:**

**Step 1:** Deploy changes

```bash
git add public/sitemap*.xml
git commit -m "chore: update sitemaps"
git push origin main
```

**Step 2:** Submit to search engines

- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters

**Step 3:** Test sitemap

- Validate: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Check: https://yourdomain.com/sitemap.xml

---

## 🔟 HOW DO I EDIT ROBOTS.TXT?

### **Answer:** Edit `/public/robots.txt`

### **File:** `/public/robots.txt`

```txt
# Robots.txt for Inchtomilez Digital Marketing & Advertising Agency
# Updated: November 7, 2024

# Allow all search engines
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.inchtomilez.com/sitemap.xml  # ← CHANGE domain
Sitemap: https://www.inchtomilez.com/sitemap-pages.xml
Sitemap: https://www.inchtomilez.com/sitemap-services.xml
Sitemap: https://www.inchtomilez.com/sitemap-blogs-new.xml

# Block specific paths (if needed)
# Disallow: /admin/
# Disallow: /private/

# Crawl delay (optional, 1 second)
# Crawl-delay: 1
```

### **Common Robots.txt Directives:**

| Directive | Example | What It Does |
|-----------|---------|--------------|
| `User-agent` | `User-agent: Googlebot` | Target specific bot |
| `Allow` | `Allow: /` | Allow crawling |
| `Disallow` | `Disallow: /admin/` | Block crawling |
| `Sitemap` | `Sitemap: /sitemap.xml` | Point to sitemap |
| `Crawl-delay` | `Crawl-delay: 1` | Slow down crawler |

### **Examples:**

**Block admin section:**

```txt
User-agent: *
Disallow: /admin/
Disallow: /dashboard/
Allow: /
```

**Block specific bot:**

```txt
User-agent: BadBot
Disallow: /

User-agent: *
Allow: /
```

**Different rules per bot:**

```txt
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Crawl-delay: 2
Allow: /
```

### **Testing Robots.txt:**

- Google Search Console: Robots Testing Tool
- Check: https://yourdomain.com/robots.txt

---

## 1️⃣1️⃣ HOW DO I CHANGE CANONICAL URLS?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Location in File:**

```tsx
'/about': {
  title: '...',
  description: '...',
  canonical: 'https://www.inchtomilez.com/about',  // ← Add this (optional)
},
```

### **When to Use Custom Canonical:**

| Scenario | Canonical URL |
|----------|---------------|
| Default (most pages) | Automatic (current URL) |
| Duplicate content | Point to original page |
| Multiple URLs for same page | Point to preferred URL |
| HTTP + HTTPS versions | Point to HTTPS |
| www vs non-www | Point to preferred version |

### **Example:**

```tsx
// Page accessible via multiple URLs
'/services': {
  canonical: 'https://www.inchtomilez.com/services',  // Preferred URL
},

// Duplicate content - point to original
'/blog/seo-tips-2024': {
  canonical: 'https://www.inchtomilez.com/blogs/seo/seo-tips-2024',  // Original
},
```

### **Automatic Canonicals:**

If you don't specify `canonical`, it's automatically set to current URL:

```tsx
// SEOHead.tsx line 35
const fullUrl = canonical || `${baseUrl}${location.pathname}`;
```

---

## 1️⃣2️⃣ HOW DO I ADD AUTHOR INFORMATION?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Location in File:**

```tsx
'/about': {
  title: '...',
  description: '...',
  author: 'Inchtomilez Team',  // ← Add this
},
```

### **For Blog Posts:**

**File:** `/components/data/blogData.tsx`

```tsx
{
  id: '1',
  title: 'Blog Title',
  author: 'John Doe',  // ← CHANGE author name
  // ... other fields
},
```

### **Author Meta Tag:**

Automatically added by SEOHead component:

```html
<meta name="author" content="Inchtomilez Team" />
<meta property="article:author" content="Inchtomilez Team" />
```

### **Multiple Authors:**

```tsx
// In seoConfig
author: 'John Doe, Jane Smith',

// Or in blog data
author: 'Marketing Team',
```

---

## 1️⃣3️⃣ HOW DO I NOINDEX A PAGE?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Location in File:**

```tsx
'/private-page': {
  title: '...',
  description: '...',
  noindex: true,  // ← Add this to prevent indexing
},
```

### **What noindex Does:**

Adds to page:

```html
<meta name="robots" content="noindex, nofollow" />
```

### **When to Use noindex:**

- ✅ Thank you pages
- ✅ Internal search results
- ✅ Login/register pages
- ✅ Duplicate content
- ✅ Test pages
- ✅ Admin sections

### **Example:**

```tsx
'/thank-you': {
  title: 'Thank You',
  description: 'Thank you for contacting us',
  noindex: true,  // Don't index this page
},

'/search-results': {
  title: 'Search Results',
  description: 'Search results page',
  noindex: true,  // Don't index search results
},
```

### **Default Behavior:**

If `noindex` is not specified or `false`:

```html
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
```

---

## 1️⃣4️⃣ HOW DO I CONTROL SOCIAL MEDIA PREVIEWS?

### **Answer:** Edit `/utils/seoConfig.tsx`

### **Social Media = Open Graph Tags:**

```tsx
'/services': {
  title: 'Our Services',                    // ← Used for og:title
  description: 'Expert marketing services',  // ← Used for og:description
  ogType: 'service',                        // ← Type of content
  ogImage: '/services-og-image.jpg',        // ← Social preview image
},
```

### **What Each Platform Uses:**

| Platform | Uses |
|----------|------|
| Facebook | og:title, og:description, og:image |
| LinkedIn | og:title, og:description, og:image |
| Twitter | twitter:title (falls back to og:title), twitter:image |
| WhatsApp | og:title, og:description, og:image |
| Slack | og:title, og:description, og:image |

### **Custom Twitter Settings:**

Currently uses same as OG. To customize, edit `/components/SEOHead.tsx` lines 74-77:

```tsx
// Current (uses same as OG)
updateMetaTag('twitter:title', fullTitle);
updateMetaTag('twitter:description', description);

// Custom Twitter
updateMetaTag('twitter:title', 'Custom Twitter Title');
updateMetaTag('twitter:description', 'Custom Twitter description');
```

### **Testing Social Previews:**

- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/
- Twitter: https://cards-dev.twitter.com/validator

### **Social Image Best Practices:**

- ✅ Size: 1200x630px
- ✅ Format: JPG or PNG
- ✅ File size: < 1MB
- ✅ Text: Large, readable
- ✅ Branding: Include logo
- ✅ Test on mobile: Ensure readability

---

## 1️⃣5️⃣ HOW DO I CHANGE LOCAL SEO SETTINGS?

### **Answer:** Edit `/index.html` (global) or `/components/SEOHead.tsx` (per page)

### **Global Local SEO (All Pages):**

**File:** `/index.html` lines 24-28

```html
<!-- Geo Tags (Local SEO) -->
<meta name="geo.region" content="IN-MP" />              <!-- ← Country-State code -->
<meta name="geo.placename" content="Indore" />          <!-- ← City name -->
<meta name="geo.position" content="22.7196;75.8577" />  <!-- ← Latitude;Longitude -->
<meta name="ICBM" content="22.7196, 75.8577" />         <!-- ← Lat, Long (legacy) -->
```

### **Per-Page Local SEO:**

Automatically applied by SEOHead component (lines 159-162):

```tsx
updateMetaTag('geo.region', 'IN-MP');
updateMetaTag('geo.placename', 'Indore');
updateMetaTag('geo.position', '22.7196;75.8577');
updateMetaTag('ICBM', '22.7196, 75.8577');
```

### **To Change Location:**

**Step 1:** Get coordinates:

Go to: https://www.latlong.net/

Search your city, copy coordinates.

**Step 2:** Update geo tags:

```html
<!-- For Mumbai, Maharashtra -->
<meta name="geo.region" content="IN-MH" />
<meta name="geo.placename" content="Mumbai" />
<meta name="geo.position" content="19.0760;72.8777" />
<meta name="ICBM" content="19.0760, 72.8777" />
```

### **Region Codes:**

| State | Code |
|-------|------|
| Madhya Pradesh | IN-MP |
| Maharashtra | IN-MH |
| Delhi | IN-DL |
| Karnataka | IN-KA |
| Tamil Nadu | IN-TN |
| Gujarat | IN-GJ |

Full list: https://en.wikipedia.org/wiki/ISO_3166-2:IN

### **Local Business Schema:**

**File:** `/utils/structuredData.tsx`

```tsx
export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "name": "Inchtomilez...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",  // ← CHANGE
    "addressLocality": "Indore",             // ← CHANGE
    "addressRegion": "MP",                   // ← CHANGE
    "postalCode": "452001",                  // ← CHANGE
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.7196,   // ← CHANGE
    "longitude": 75.8577   // ← CHANGE
  },
  "telephone": "+91-XXXXXXXXXX",  // ← CHANGE
};
```

---

## 1️⃣6️⃣ HOW DO I ADD GOOGLE SEARCH CONSOLE VERIFICATION?

### **Answer:** Edit `/components/SEOHead.tsx` or add to `/index.html`

### **Method 1: Via SEOHead Component (Dynamic)**

**File:** `/components/SEOHead.tsx` line 136

```tsx
googleVerification.setAttribute('content', 'PLACEHOLDER_ADD_YOUR_VERIFICATION_CODE');
// ↑ CHANGE to your verification code
```

**Step 1:** Get verification code from Google Search Console:

1. Go to: https://search.google.com/search-console
2. Add property (your domain)
3. Choose "HTML tag" verification method
4. Copy the code (e.g., `ABC123XYZ456`)

**Step 2:** Update SEOHead.tsx:

```tsx
googleVerification.setAttribute('content', 'ABC123XYZ456');  // ← Your code
```

### **Method 2: Via index.html (Static)**

**File:** `/index.html`

Add after line 19:

```html
<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

### **Other Search Engines:**

**Bing Verification:**

```html
<meta name="msvalidate.01" content="YOUR_BING_CODE" />
```

**Yandex Verification:**

```html
<meta name="yandex-verification" content="YOUR_YANDEX_CODE" />
```

**All in SEOHead.tsx (lines 141-156):**

```tsx
// Bing (line 145)
bingVerification.setAttribute('content', 'YOUR_BING_CODE');

// Yandex (line 154)
yandexVerification.setAttribute('content', 'YOUR_YANDEX_CODE');
```

---

## 🎯 ADVANCED SEO TIPS

### **1. Breadcrumbs (Auto-Generated)**

Your site automatically generates breadcrumb schema:

```tsx
// In SEOHead component (lines 192-212)
breadcrumb: [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'SEO', url: '/services/seo' }
]
```

**To add breadcrumbs to a page:**

```tsx
const seo = useSEO({
  breadcrumb: [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]
});
```

---

### **2. Pagination SEO**

Automatically handled by SEOHead for paginated content:

```tsx
// Auto-detects /page/2, /page/3, etc.
// Adds prev/next links automatically (lines 215-241)
```

---

### **3. Multiple Languages (Future)**

To add multilingual SEO, update `/index.html` lines 107-109:

```html
<link rel="alternate" hreflang="en" href="https://www.inchtomilez.com/" />
<link rel="alternate" hreflang="hi" href="https://www.inchtomilez.com/hi/" />  <!-- Hindi -->
<link rel="alternate" hreflang="x-default" href="https://www.inchtomilez.com/" />
```

---

### **4. Rich Results**

Your site supports:

- ✅ Organization schema (About page)
- ✅ Local Business schema (Contact page)
- ✅ Breadcrumb schema (All pages)
- ✅ Article schema (Blog posts)
- ✅ Service schema (Service pages)

Test: https://search.google.com/test/rich-results

---

### **5. Core Web Vitals**

Already optimized:

- ✅ Lazy loading images
- ✅ Code splitting
- ✅ Optimized fonts
- ✅ Minified assets
- ✅ Lenis smooth scroll

---

## 📊 COMPLETE FILE REFERENCE

### **Files You'll Edit for SEO:**

| File | What It Controls | Frequency |
|------|------------------|-----------|
| `/utils/seoConfig.tsx` | Page titles, descriptions, keywords, H1s | ✅ Most common |
| `/components/data/blogData.tsx` | Blog post SEO | When adding blogs |
| `/utils/structuredData.tsx` | Schema markup | Rarely |
| `/public/sitemap*.xml` | Sitemaps | Monthly |
| `/public/robots.txt` | Crawler rules | Rarely |
| `/index.html` | Global defaults | Rarely |
| `/components/SEOHead.tsx` | SEO component logic | Almost never |

---

## ✅ QUICK CHECKLIST

### **For New Page:**

- [ ] Add to `/utils/seoConfig.tsx`
- [ ] Set title (50-60 chars)
- [ ] Set description (150-160 chars)
- [ ] Add 10-15 keywords
- [ ] Set H1 heading
- [ ] Choose og:type
- [ ] Add og:image (optional)
- [ ] Choose schema type
- [ ] Add to sitemap
- [ ] Test on live site
- [ ] Submit to Google Search Console

### **For Blog Post:**

- [ ] Add to `/components/data/blogData.tsx`
- [ ] Set title (keyword-rich)
- [ ] Write meta description
- [ ] Add 5-10 keywords
- [ ] Set slug (URL-friendly)
- [ ] Add featured image
- [ ] Write 1000+ words
- [ ] Add internal links
- [ ] Test social preview
- [ ] Submit to search engines

---

## 🚀 DEPLOYMENT WORKFLOW

### **After Editing SEO:**

```bash
# 1. Save your changes

# 2. Test locally
npm run dev
# Visit http://localhost:5173
# Check page titles, descriptions

# 3. Commit changes
git add .
git commit -m "feat: update SEO for [page name]"

# 4. Push to deploy
git push origin main

# 5. Wait for Vercel deployment (2-3 min)

# 6. Verify on live site
# Check meta tags: Right-click → Inspect → <head>

# 7. Test with tools
# - Google Rich Results Test
# - Facebook Debugger
# - Twitter Card Validator

# 8. Submit to search engines
# - Google Search Console
# - Bing Webmaster Tools
```

---

## 🎯 PRIORITY GUIDE

### **High Priority (Do First):**

1. ✅ Homepage SEO (`/`)
2. ✅ Main service pages
3. ✅ Contact page
4. ✅ About page
5. ✅ Sitemap submission

### **Medium Priority:**

6. ✅ Individual service pages
7. ✅ Industry pages
8. ✅ Blog category pages
9. ✅ OG images
10. ✅ Structured data

### **Low Priority:**

11. ✅ Individual blog posts (224)
12. ✅ Advanced schema
13. ✅ Breadcrumbs
14. ✅ Pagination SEO

---

## 📞 SUPPORT

### **If You Need Help:**

1. Check this guide first
2. Review `/guidelines/Guidelines.md`
3. Test with SEO tools (listed above)
4. Check browser console for errors
5. Verify with Google Search Console

### **Common Issues:**

| Issue | Solution |
|-------|----------|
| SEO not updating | Clear cache, hard refresh (Ctrl+Shift+R) |
| Wrong title showing | Check seoConfig.tsx, verify route |
| Social preview wrong | Update ogImage, test with debugger |
| Page not in sitemap | Add to sitemap-pages.xml |
| Not indexed | Submit to Search Console, check robots.txt |

---

**Status:** ✅ **COMPLETE GUIDE READY**  
**Coverage:** 🎯 **100% of SEO Elements**  
**Difficulty:** 🟢 **Easy to Follow**

---

**🎉 YOU NOW HAVE COMPLETE CONTROL OVER YOUR SITE'S SEO!** ✅
