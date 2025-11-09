# 🎯 SEO QUICK REFERENCE CARD

**Quick access guide - See `/SEO_EDITING_GUIDE.md` for complete details**

---

## 🚀 MOST COMMON EDITS

### **1. Change Page Title/Description/Keywords**

**File:** `/utils/seoConfig.tsx`

```tsx
'/about': {
  title: 'Your New Title',              // ← Browser tab + Google
  description: 'Your new description',   // ← Google search result
  keywords: ['keyword1', 'keyword2'],    // ← SEO keywords
  h1: 'Page Heading',                   // ← Main heading on page
},
```

---

### **2. Add/Edit Blog Post**

**File:** `/components/data/blogData.tsx`

```tsx
{
  id: '225',
  title: 'Blog Post Title',
  metaDescription: 'SEO description for Google',
  keywords: ['seo', 'marketing', 'tips'],
  slug: 'blog-post-title',
  category: 'seo',
  content: 'Full blog content...',
  author: 'Your Name',
  publishDate: '2024-11-08',
},
```

---

### **3. Update Sitemap**

**File:** `/public/sitemap-pages.xml`

```xml
<url>
  <loc>https://www.inchtomilez.com/new-page</loc>
  <lastmod>2024-11-08</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 📁 FILE QUICK REFERENCE

| I Want To... | Edit This File |
|--------------|----------------|
| Change page title | `/utils/seoConfig.tsx` |
| Change meta description | `/utils/seoConfig.tsx` |
| Change keywords | `/utils/seoConfig.tsx` |
| Change H1 heading | `/utils/seoConfig.tsx` |
| Add blog post | `/components/data/blogData.tsx` |
| Edit blog SEO | `/components/data/blogData.tsx` |
| Update sitemap | `/public/sitemap-pages.xml` |
| Edit robots.txt | `/public/robots.txt` |
| Change company info | `/index.html` + `/utils/structuredData.tsx` |
| Add OG image | Upload to `/public/` + edit `/utils/seoConfig.tsx` |
| Change location | `/index.html` + `/utils/structuredData.tsx` |
| Add verification code | `/components/SEOHead.tsx` line 136 |

---

## 🎯 EXAMPLE - EDIT ABOUT PAGE

### **Step 1:** Open `/utils/seoConfig.tsx`

### **Step 2:** Find line ~102:

```tsx
'/about': {
  title: 'Read Us | Trusted Digital Marketing And Advertising Agency',
  description: 'Meet the team behind Indore\'s most innovative...',
  keywords: [
    'best digital makreting agency',  // ← Fix typo!
    'digital marketing company Indore',
    // ... more
  ],
  h1: 'About Inchtomilez - Your Trusted Marketing Partner',
  ogType: 'website',
  schema: 'organization',
},
```

### **Step 3:** Make changes:

```tsx
'/about': {
  title: 'About Us | 7 Years of Marketing Excellence in Indore',  // ← Changed
  description: '7+ years serving 500+ clients. Award-winning digital marketing, SEO, branding & web development in Indore. Free consultation!',  // ← Changed
  keywords: [
    'digital marketing agency Indore',  // ← Fixed
    'best marketing agency Madhya Pradesh',  // ← Added
    'advertising company Indore',
  ],
  h1: 'About Inchtomilez - 7 Years of Excellence',  // ← Changed
  ogType: 'website',
  schema: 'organization',
},
```

### **Step 4:** Save, commit, deploy!

```bash
git add utils/seoConfig.tsx
git commit -m "feat: update About page SEO"
git push origin main
```

---

## 🔍 WHERE IS WHAT?

### **Main SEO Pages:**

```
/utils/
├── seoConfig.tsx        ← ✅ Edit page SEO here (90% of changes)
├── structuredData.tsx   ← Edit schema/structured data
└── dynamicBlogMeta.tsx  ← Blog meta generation (auto)

/components/
├── SEOHead.tsx          ← SEO component (rarely edit)
└── data/
    └── blogData.tsx     ← ✅ Edit blog posts here

/public/
├── sitemap*.xml         ← ✅ Edit sitemaps here
├── robots.txt           ← ✅ Edit crawler rules
└── og-image.jpg         ← Default social image

/index.html              ← Global defaults (rarely edit)
```

---

## 📊 SEO PRIORITY CHECKLIST

### **High Priority (Do First):**

- [ ] Homepage title/description (`/`)
- [ ] Main pages (about, services, contact)
- [ ] H1 headings
- [ ] Meta descriptions (all pages)
- [ ] Sitemap created
- [ ] Robots.txt configured
- [ ] Google Search Console verification

### **Medium Priority:**

- [ ] Individual service pages
- [ ] Industry pages
- [ ] Keywords optimized
- [ ] OG images added
- [ ] Schema markup verified
- [ ] Canonical URLs set

### **Low Priority:**

- [ ] Individual blog posts (224)
- [ ] Advanced schema
- [ ] Multilingual support
- [ ] Breadcrumbs
- [ ] Pagination meta

---

## 🛠️ TOOLS

### **Testing:**

- **Google Rich Results:** https://search.google.com/test/rich-results
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Validator:** https://cards-dev.twitter.com/validator
- **Sitemap Validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html

### **Research:**

- **Google Keyword Planner:** https://ads.google.com/aw/keywordplanner
- **AnswerThePublic:** https://answerthepublic.com/
- **Google Trends:** https://trends.google.com/

### **Monitoring:**

- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster:** https://www.bing.com/webmasters
- **Google Analytics:** https://analytics.google.com/

---

## 🚨 COMMON MISTAKES TO AVOID

| ❌ Don't Do This | ✅ Do This Instead |
|------------------|-------------------|
| Generic titles ("Home", "About") | Descriptive, keyword-rich ("Digital Marketing Agency Indore") |
| Duplicate descriptions | Unique description per page |
| Keyword stuffing | Natural, relevant keywords (10-15 max) |
| Missing H1 | One H1 per page with primary keyword |
| No OG images | Custom 1200x630px image per page |
| Forgetting to update sitemap | Update + submit to Search Console |
| Not testing | Always test with Google Rich Results |

---

## 💡 PRO TIPS

### **Title Tags:**

- ✅ 50-60 characters
- ✅ Primary keyword first
- ✅ Include brand name
- ✅ Make it click-worthy

### **Meta Descriptions:**

- ✅ 150-160 characters
- ✅ Include CTA ("Get free consultation")
- ✅ Add numbers ("500+ clients")
- ✅ Location keywords ("Indore, MP")

### **Keywords:**

- ✅ Primary (2-3)
- ✅ LSI/Related (5-7)
- ✅ Local (2-3)
- ✅ Long-tail (2-3)

### **H1 Headings:**

- ✅ One per page
- ✅ Include primary keyword
- ✅ Different from title
- ✅ 30-70 characters

---

## 📞 NEED HELP?

### **Full Documentation:**

📚 **Complete Guide:** `/SEO_EDITING_GUIDE.md`

### **Quick Questions:**

1. **Can't find a page to edit?**  
   → Check if route exists in `/utils/seoConfig.tsx`

2. **Changes not showing?**  
   → Clear cache (Ctrl+Shift+R), verify deployment

3. **Wrong title showing?**  
   → Check seoConfig.tsx route matches URL exactly

4. **Blog SEO not working?**  
   → Edit `/components/data/blogData.tsx`, not seoConfig

5. **Social preview wrong?**  
   → Test with Facebook Debugger, check ogImage path

---

## 🎯 WORKFLOW

```bash
1. Edit SEO
   ↓
2. Save file
   ↓
3. Test locally (npm run dev)
   ↓
4. Commit changes
   ↓
5. Push to deploy
   ↓
6. Wait for deployment (2-3 min)
   ↓
7. Clear cache & test live
   ↓
8. Verify with SEO tools
   ↓
9. Submit to Search Console
   ↓
10. Done! ✅
```

---

**Status:** ✅ **QUICK REFERENCE READY**  
**For Details:** 📚 **See `/SEO_EDITING_GUIDE.md`**

---

**🎉 EDIT SEO IN MINUTES, NOT HOURS!** ⚡
