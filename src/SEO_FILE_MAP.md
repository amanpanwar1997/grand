# 🗺️ SEO FILE MAP - VISUAL GUIDE

**Where everything is located**

---

## 📊 FILE HIERARCHY

```
📦 Inchtomilez Project
│
├── 🎯 PRIMARY SEO FILES (Edit these 90% of the time)
│   │
│   ├── 📄 /utils/seoConfig.tsx ⭐⭐⭐
│   │   └── ✅ MOST IMPORTANT - Edit page titles, descriptions, keywords, H1s
│   │
│   ├── 📄 /components/data/blogData.tsx ⭐⭐⭐
│   │   └── ✅ Edit all blog posts (224 posts)
│   │
│   ├── 📄 /public/sitemap-pages.xml ⭐⭐
│   │   └── Edit main pages sitemap
│   │
│   ├── 📄 /public/sitemap-services.xml ⭐⭐
│   │   └── Edit services sitemap
│   │
│   ├── 📄 /public/sitemap-blogs-new.xml ⭐⭐
│   │   └── Edit blogs sitemap (224 posts)
│   │
│   └── 📄 /public/robots.txt ⭐
│       └── Edit crawler rules
│
├── 🔧 SECONDARY SEO FILES (Edit occasionally)
│   │
│   ├── 📄 /utils/structuredData.tsx ⭐
│   │   └── Edit schema markup (Organization, LocalBusiness, etc.)
│   │
│   ├── 📄 /index.html
│   │   └── Global SEO defaults, company info, geo tags
│   │
│   └── 📄 /public/og-image.jpg
│       └── Default Open Graph social preview image
│
├── ⚙️ SYSTEM FILES (Rarely edit)
│   │
│   ├── 📄 /components/SEOHead.tsx
│   │   └── SEO component logic (auto-generates meta tags)
│   │
│   ├── 📄 /utils/dynamicBlogMeta.tsx
│   │   └── Auto-generates blog meta tags
│   │
│   └── 📄 /public/manifest.json
│       └── PWA settings (name, description, icons)
│
└── 📚 DOCUMENTATION (You are here!)
    │
    ├── 📄 /SEO_EDITING_GUIDE.md ⭐⭐⭐
    │   └── Complete FAQ-based guide (all questions answered)
    │
    ├── 📄 /SEO_QUICK_REFERENCE.md ⭐⭐
    │   └── Quick reference card (common edits)
    │
    ├── 📄 /SEO_FILE_MAP.md ⭐
    │   └── This file (visual file structure)
    │
    └── 📄 /guidelines/Guidelines.md
        └── Design system + SEO quick start
```

---

## 🎯 WHAT CONTROLS WHAT?

### **PAGE SEO (Title, Description, Keywords, H1)**

```
/utils/seoConfig.tsx
    ↓
Controls ALL pages:
    • Homepage (/)
    • About (/about)
    • Services (/services)
    • Individual Services (/services/digital-marketing)
    • Industries (/industries)
    • Individual Industries (/industries/healthcare)
    • Blogs main (/blogs)
    • Contact (/contact)
    • FAQs (/faqs)
```

**Example from seoConfig.tsx:**

```tsx
export const SEO_CONFIG = {
  '/': {
    title: 'Inchtomilez Digital Marketing...',
    description: 'DIGITAL MARKETING | IT SOLUTIONS...',
    keywords: ['digital marketing', 'Indore', ...],
    h1: 'Transform Your Business...',
  },
  '/about': {
    title: 'Read Us | Trusted...',
    description: 'Meet the team...',
    keywords: ['best digital marketing agency', ...],
    h1: 'About Inchtomilez...',
  },
  // ... 30+ more pages
};
```

---

### **BLOG POST SEO**

```
/components/data/blogData.tsx
    ↓
Controls ALL blog posts (224):
    • Individual blog pages (/blogs/seo/blog-title)
    • Blog titles
    • Blog descriptions
    • Blog keywords
    • Blog authors
    • Blog images
    • Blog content
```

**Example from blogData.tsx:**

```tsx
export const blogPosts = [
  {
    id: '1',
    title: 'How to Rank #1 on Google',        // ← Page title
    metaDescription: 'Complete SEO guide...',  // ← Meta description
    keywords: ['SEO', 'Google ranking'],       // ← Keywords
    slug: 'how-to-rank-1-google',              // ← URL slug
    category: 'seo',                           // ← Category
    content: 'Full article content...',        // ← Article content
    author: 'Inchtomilez Team',               // ← Author
    image: '/blog-images/seo.jpg',            // ← Featured image
  },
  // ... 224 more posts
];
```

---

### **SITEMAPS**

```
/public/
    ├── sitemap.xml (main index) ──┐
    ├── sitemap-index.xml          ├─► Points to all sitemaps
    ├── sitemap-pages.xml ─────────┤
    ├── sitemap-services.xml ──────┤
    └── sitemap-blogs-new.xml ─────┘
```

**What each controls:**

| File | Pages Included | URLs |
|------|---------------|------|
| `sitemap.xml` | Index (points to other sitemaps) | 1 |
| `sitemap-index.xml` | Same as sitemap.xml | 1 |
| `sitemap-pages.xml` | Main pages (Home, About, Services, etc.) | ~20 |
| `sitemap-services.xml` | Service detail pages | 14 |
| `sitemap-blogs-new.xml` | All blog posts | 224 |
| **Total** | | **~260 URLs** |

---

### **STRUCTURED DATA / SCHEMA**

```
/utils/structuredData.tsx
    ↓
Exports pre-built schemas:
    • organizationSchema (About, Contact)
    • localBusinessSchema (Contact)
    • websiteSchema (Homepage, Blogs)
    • articleSchema (Blog posts - auto)
    • serviceSchema (Services - auto)
```

**Then assigned in seoConfig.tsx:**

```tsx
'/about': {
  schema: 'organization',  // ← Uses organizationSchema
},

'/contact': {
  schema: 'localBusiness',  // ← Uses localBusinessSchema
},
```

---

### **GLOBAL SEO (All Pages)**

```
/index.html
    ↓
Sets global defaults:
    • Default page title
    • Default description
    • Company name
    • Logo URL
    • Social media links
    • Geographic location (Indore)
    • Theme color (#eab308)
    • Favicon
```

**Important lines in index.html:**

```html
Line 12:  <title>Inchtomilez Digital Marketing...</title>
Line 14:  <meta name="description" content="..." />
Line 22:  <link rel="canonical" href="..." />
Line 38:  <meta name="theme-color" content="#eab308" />
Line 60:  <meta property="og:image" content="/og-image.jpg" />
Line 122: Organization Schema (JSON-LD)
Line 159: LocalBusiness Schema (JSON-LD)
```

---

### **ROBOTS.TXT**

```
/public/robots.txt
    ↓
Controls search engine crawlers:
    • Allow/disallow rules
    • Sitemap locations
    • Crawl delays
    • Per-bot rules
```

**Current configuration:**

```txt
User-agent: *
Allow: /

Sitemap: https://www.inchtomilez.com/sitemap.xml
Sitemap: https://www.inchtomilez.com/sitemap-pages.xml
Sitemap: https://www.inchtomilez.com/sitemap-services.xml
Sitemap: https://www.inchtomilez.com/sitemap-blogs-new.xml
```

---

## 🔄 HOW IT ALL WORKS TOGETHER

### **Example: About Page (`/about`)**

```
1. User visits: https://www.inchtomilez.com/about
        ↓
2. AboutPage.tsx loads:
   const seo = useSEO(); // Auto-loads SEO
        ↓
3. useSEO() hook (from seoConfig.tsx):
   - Reads route: '/about'
   - Finds config in SEO_CONFIG['/about']
   - Returns title, description, keywords, h1, schema
        ↓
4. Page renders:
   <SEOHead {...seo.meta} />  ← Sets meta tags
   <h1>{seo.h1}</h1>          ← Sets heading
        ↓
5. SEOHead component:
   - Updates document.title
   - Adds meta description
   - Adds keywords
   - Adds Open Graph tags
   - Adds Twitter Card tags
   - Adds schema (organizationSchema)
   - Sets canonical URL
        ↓
6. Result in browser:
   <head>
     <title>Read Us | Trusted... | Inchtomilez</title>
     <meta name="description" content="Meet the team..." />
     <meta name="keywords" content="best digital marketing..." />
     <meta property="og:title" content="..." />
     <script type="application/ld+json">
       { organizationSchema }
     </script>
   </head>
   <body>
     <h1>About Inchtomilez - Your Trusted Partner</h1>
   </body>
```

---

### **Example: Blog Post**

```
1. User visits: /blogs/seo/how-to-rank-1-google
        ↓
2. BlogDetailPage.tsx loads:
   - Finds blog by slug in blogData.tsx
   - Gets: title, metaDescription, keywords, author, etc.
        ↓
3. Uses dynamic SEO:
   const seo = useSEO({
     title: `${blog.title} | Inchtomilez Blog`,
     description: blog.metaDescription,
     keywords: blog.keywords,
     ogType: 'article',
   });
        ↓
4. Renders:
   <SEOHead {...seo.meta} />
   <h1>{blog.title}</h1>
   <article>{blog.content}</article>
        ↓
5. Result:
   - Title: "How to Rank #1 on Google | Inchtomilez Blog"
   - Description: From blog.metaDescription
   - Keywords: From blog.keywords
   - Schema: Article schema (auto-generated)
```

---

## 📍 DECISION TREE: "WHICH FILE DO I EDIT?"

```
START: What do you want to change?
    │
    ├─► Page title/description/keywords/H1?
    │   └─► Edit: /utils/seoConfig.tsx
    │
    ├─► Blog post content/SEO?
    │   └─► Edit: /components/data/blogData.tsx
    │
    ├─► Add page to sitemap?
    │   └─► Edit: /public/sitemap-pages.xml
    │
    ├─► Change company info (name, address)?
    │   ├─► Edit: /index.html (lines 122-156)
    │   └─► Edit: /utils/structuredData.tsx
    │
    ├─► Change location (city, coordinates)?
    │   ├─► Edit: /index.html (lines 24-28)
    │   └─► Edit: /utils/structuredData.tsx
    │
    ├─► Block crawlers or change rules?
    │   └─► Edit: /public/robots.txt
    │
    ├─► Change social preview image?
    │   ├─► Upload: /public/your-image.jpg
    │   └─► Edit: /utils/seoConfig.tsx (ogImage)
    │
    ├─► Add Google verification code?
    │   └─► Edit: /components/SEOHead.tsx (line 136)
    │
    └─► Advanced schema changes?
        └─► Edit: /utils/structuredData.tsx
```

---

## 🎨 VISUAL FILE CONNECTIONS

```
┌─────────────────────────────────────────────────────────────┐
│                    USER VISITS PAGE                         │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│              React Router Loads Page Component              │
│  (HomePage, AboutPage, BlogDetailPage, ServiceDetailPage)   │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│             Page calls: const seo = useSEO()                │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
         ┌─────────────┴─────────────┐
         ↓                           ↓
┌──────────────────┐        ┌──────────────────┐
│ /utils/          │        │ /components/     │
│ seoConfig.tsx    │        │ data/            │
│                  │        │ blogData.tsx     │
│ • Page titles    │        │                  │
│ • Descriptions   │        │ • Blog titles    │
│ • Keywords       │        │ • Blog meta      │
│ • H1 headings    │        │ • Blog content   │
│ • Schema type    │        │ • Authors        │
└─────────┬────────┘        └─────────┬────────┘
          ↓                           ↓
┌─────────────────────────────────────────────────────────────┐
│              SEO Data Merged & Returned                     │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│            Page renders: <SEOHead {...seo.meta} />          │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│         SEOHead Component (/components/SEOHead.tsx)         │
│                                                             │
│  1. Updates document.title                                  │
│  2. Adds meta tags (description, keywords)                  │
│  3. Adds Open Graph tags (for social)                       │
│  4. Adds Twitter Card tags                                  │
│  5. Adds structured data (schema)                           │
│  6. Sets canonical URL                                      │
│  7. Adds geo tags (location)                                │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
         ┌─────────────┴─────────────┐
         ↓                           ↓
┌──────────────────┐        ┌──────────────────┐
│ /utils/          │        │ /index.html      │
│ structuredData   │        │                  │
│                  │        │ • Global schema  │
│ • Organization   │        │ • Default meta   │
│ • LocalBusiness  │        │ • Company info   │
│ • Website        │        │ • Geo tags       │
└──────────────────┘        └──────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│              FINAL HTML <head> GENERATED                    │
│                                                             │
│  <title>Page Title | Inchtomilez</title>                    │
│  <meta name="description" content="..." />                  │
│  <meta name="keywords" content="..." />                     │
│  <meta property="og:title" content="..." />                 │
│  <script type="application/ld+json">{ schema }</script>     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 MOST COMMON WORKFLOW

### **Scenario: Change About Page SEO**

```
1. Open: /utils/seoConfig.tsx
   ↓
2. Find: '/about': { ... }  (around line 102)
   ↓
3. Edit:
   title: 'Your New Title',
   description: 'Your new description',
   keywords: ['keyword1', 'keyword2'],
   h1: 'Your New H1',
   ↓
4. Save file
   ↓
5. Commit & deploy:
   git add utils/seoConfig.tsx
   git commit -m "feat: update About page SEO"
   git push origin main
   ↓
6. Wait 2-3 minutes for Vercel deployment
   ↓
7. Test on live site
   ↓
8. Verify with Google Rich Results Test
   ↓
9. Done! ✅
```

---

## 📚 DOCUMENTATION FILES

### **Which guide to read?**

```
Need quick edit?
    ↓
📄 /SEO_QUICK_REFERENCE.md
    • Common edits
    • File locations
    • Quick examples
    • 5-minute guide

Need detailed instructions?
    ↓
📄 /SEO_EDITING_GUIDE.md
    • Complete FAQ (16 questions)
    • Step-by-step guides
    • Troubleshooting
    • Best practices
    • 30-minute read

Need to understand file structure?
    ↓
📄 /SEO_FILE_MAP.md (This file!)
    • Visual diagrams
    • File connections
    • Decision trees
    • What controls what

Need design system + SEO basics?
    ↓
📄 /guidelines/Guidelines.md
    • Design system
    • Component usage
    • SEO quick reference
    • Complete guidelines
```

---

## 🎯 KEY TAKEAWAYS

### **80/20 Rule - Most Common Files:**

1. **`/utils/seoConfig.tsx`** ⭐⭐⭐
   - 80% of your SEO edits will be here
   - Controls ALL page titles, descriptions, keywords, H1s

2. **`/components/data/blogData.tsx`** ⭐⭐
   - 15% - All blog post SEO
   - 224 blog posts controlled here

3. **Everything else** ⭐
   - 5% - Sitemaps, robots.txt, schema, etc.

### **Remember:**

- ✅ One file per task (seoConfig for pages, blogData for blogs)
- ✅ Changes are automatic (no manual meta tag editing)
- ✅ Type-safe (auto-complete in VS Code)
- ✅ Centralized (all SEO in 2 main files)
- ✅ Deploy to apply (changes apply on next deployment)

---

**Status:** ✅ **COMPLETE FILE MAP**  
**For Details:** 📚 **See `/SEO_EDITING_GUIDE.md`**

---

**🎉 NOW YOU KNOW EXACTLY WHERE EVERYTHING IS!** 🗺️
