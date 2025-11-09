# 🖼️ OPEN GRAPH IMAGE SETUP

**Issue:** "Created with Figma" showing in social previews  
**Solution:** Add proper Open Graph image  
**Status:** ⚠️ **ACTION REQUIRED**

---

## 🎯 THE PROBLEM

When sharing your website URL (www.inchtomilez.com), social platforms show:
- ❌ "Created with Figma" text
- ❌ Generic placeholder
- ❌ Unprofessional appearance

**Why?**
- Missing or broken `/public/og-image.jpg` file
- Social platforms (Facebook, LinkedIn, WhatsApp) need this image

---

## ✅ THE SOLUTION

Create and upload a professional Open Graph image.

---

## 📐 IMAGE SPECIFICATIONS

### **Required:**

| Property | Value |
|----------|-------|
| **Filename** | `og-image.jpg` |
| **Location** | `/public/og-image.jpg` |
| **Size** | **1200 x 630 pixels** (exact) |
| **Format** | JPG or PNG |
| **Max file size** | < 1 MB (preferably < 500 KB) |
| **Aspect ratio** | 1.91:1 |

### **Design Guidelines:**

| Element | Recommendation |
|---------|---------------|
| **Background** | Black (#000000) - matches brand |
| **Logo** | Large, centered or left-aligned |
| **Text** | Company name + tagline |
| **Colors** | Black + White + Yellow (#eab308) |
| **Font** | Raleway (bold) |
| **Safe zone** | Keep important content 100px from edges |

---

## 🎨 DESIGN OPTIONS

### **Option 1: Use Canva (Easiest - 5 minutes)**

**Step 1:** Go to Canva
- Visit: https://www.canva.com/
- Sign up (free account)

**Step 2:** Create design
- Search: "Facebook Post" or "Open Graph"
- Or use custom size: 1200 x 630 px

**Step 3:** Design your image
```
Background: Black (#000000)
Add your logo (centered)
Add text: "Inchtomilez Digital Marketing & Advertising Agency"
Add tagline: "DIGITAL MARKETING | IT SOLUTIONS | Branding"
Use yellow accent (#eab308) for highlights
```

**Step 4:** Download
- Format: JPG
- Quality: High
- Filename: `og-image.jpg`

**Step 5:** Upload
- Place in: `/public/og-image.jpg`

---

### **Option 2: Use Figma (Professional - 10 minutes)**

**Step 1:** Create frame
```
Width: 1200px
Height: 630px
Background: #000000 (black)
```

**Step 2:** Add elements
```
1. Your logo (centered or left)
2. Company name (Raleway Bold, 72px, white)
3. Tagline (Raleway Regular, 36px, #eab308)
4. Optional: Stats (7+ Years, 500+ Clients)
```

**Step 3:** Export
```
Format: JPG (or PNG)
Scale: 1x
Filename: og-image.jpg
```

**Step 4:** Upload
- Place in: `/public/og-image.jpg`

---

### **Option 3: Use Template (Quick - 2 minutes)**

**Download a template:**
1. Search: "Open Graph image template 1200x630"
2. Download template
3. Customize with your branding
4. Export as JPG
5. Upload to `/public/og-image.jpg`

---

### **Option 4: Hire Designer (Best - 1 day)**

**Fiverr/Upwork:**
1. Search: "Open Graph image design"
2. Brief: 1200x630px, black background, yellow accents
3. Provide: Logo, company name, tagline
4. Receive: Professional design
5. Upload to `/public/og-image.jpg`

---

## 🎨 DESIGN TEMPLATE

### **Layout Example:**

```
┌────────────────────────────────────────────────────────┐
│  (Black Background #000000)                             │
│                                                         │
│   [Your Logo]                                           │
│                                                         │
│   Inchtomilez                                           │
│   Digital Marketing & Advertising Agency                │
│   ───────────────                                       │
│   DIGITAL MARKETING | IT SOLUTIONS | Branding           │
│                                                         │
│   ✓ 7+ Years Experience                                 │
│   ✓ 500+ Clients Served                                 │
│   ✓ Award-Winning Campaigns                             │
│                                                         │
│   www.inchtomilez.com                                   │
└────────────────────────────────────────────────────────┘
     1200px x 630px
```

### **Color Scheme:**

```css
Background: #000000 (Black)
Primary Text: #FFFFFF (White)
Accent: #eab308 (Yellow)
Subtle: #737373 (Gray)
```

### **Typography:**

```
Heading: Raleway Bold, 72px, White
Subheading: Raleway SemiBold, 36px, Yellow
Body: Raleway Regular, 24px, Gray
```

---

## 📁 FILE PLACEMENT

### **Correct location:**

```
/public/
├── og-image.jpg  ← Upload here ✅
├── favicon.svg
├── manifest.json
└── ...
```

### **After uploading:**

```bash
# Verify file exists
ls public/og-image.jpg

# Should show:
# public/og-image.jpg

# Check file size
du -h public/og-image.jpg

# Should be < 1 MB
```

---

## 🚀 DEPLOYMENT

### **After creating the image:**

**Step 1:** Upload to `/public/og-image.jpg`

**Step 2:** Commit and deploy
```bash
git add public/og-image.jpg
git commit -m "feat: add Open Graph image for social sharing"
git push origin main
```

**Step 3:** Wait for Vercel deployment (2-3 minutes)

**Step 4:** Clear social media cache

---

## 🧪 TESTING

### **Test 1: Facebook Debugger**

1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: https://www.inchtomilez.com
3. Click: "Scrape Again" (clears cache)
4. Verify: Your image shows correctly

### **Test 2: LinkedIn Post Inspector**

1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: https://www.inchtomilez.com
3. Click: "Inspect"
4. Verify: Your image shows

### **Test 3: Twitter Card Validator**

1. Go to: https://cards-dev.twitter.com/validator
2. Enter: https://www.inchtomilez.com
3. Click: "Preview card"
4. Verify: Your image shows

### **Test 4: WhatsApp Preview**

1. Open WhatsApp (mobile or web)
2. Paste: https://www.inchtomilez.com
3. Send to yourself
4. Verify: Your image shows in preview

---

## ❓ TROUBLESHOOTING

### **Issue: Image not showing**

**Solution 1:** Clear cache
```bash
# Facebook Debugger → "Scrape Again"
# LinkedIn Inspector → "Inspect" again
# Wait 5-10 minutes
```

**Solution 2:** Verify file path
```bash
# Should be accessible at:
https://www.inchtomilez.com/og-image.jpg

# Test in browser (paste URL)
```

**Solution 3:** Check file size
```bash
# Must be < 1 MB
# Compress if needed: https://tinyjpg.com/
```

**Solution 4:** Verify dimensions
```bash
# Must be exactly 1200 x 630 px
# Check in image editor
```

---

### **Issue: Old "Created with Figma" still showing**

**Solution:**
1. Upload new og-image.jpg
2. Deploy to production
3. Use Facebook Debugger → "Scrape Again"
4. Use LinkedIn Inspector → "Inspect"
5. Clear browser cache
6. Wait 10-15 minutes
7. Test again

---

### **Issue: Image looks blurry**

**Solution:**
1. Use exact dimensions: 1200 x 630 px
2. Export at 100% quality
3. Don't use JPG compression > 80%
4. Or use PNG format

---

## 📊 CURRENT STATUS

### **✅ Already Fixed:**

- [x] Updated meta descriptions (more compelling)
- [x] Enhanced Open Graph tags
- [x] Added og:image:secure_url
- [x] Added og:image:type
- [x] Updated Twitter Card tags
- [x] Updated manifest.json description

### **⚠️ You Need To Do:**

- [ ] Create og-image.jpg (1200x630px)
- [ ] Upload to `/public/og-image.jpg`
- [ ] Deploy to production
- [ ] Test with social media debuggers
- [ ] Clear social media caches

---

## 🎯 QUICK START

### **Fastest Method (5 minutes):**

1. **Go to Canva:** https://www.canva.com/
2. **Search:** "Facebook Post Template"
3. **Customize:**
   - Background: Black
   - Add your logo
   - Add text: "Inchtomilez Digital Marketing & Advertising Agency"
   - Use yellow (#eab308) for accents
4. **Download:** As JPG (1200x630px)
5. **Upload:** To `/public/og-image.jpg`
6. **Deploy:**
   ```bash
   git add public/og-image.jpg
   git commit -m "feat: add OG image"
   git push origin main
   ```
7. **Test:** Facebook Debugger (scrape again)
8. **Done!** ✅

---

## 💡 PRO TIPS

### **Make it stand out:**

- ✅ Use high contrast (black background, white text)
- ✅ Include your logo prominently
- ✅ Add social proof (7+ years, 500+ clients)
- ✅ Use yellow accent sparingly for impact
- ✅ Keep text readable at small sizes
- ✅ Test on mobile (preview looks smaller)

### **Avoid:**

- ❌ Too much text
- ❌ Small fonts
- ❌ Low contrast
- ❌ Cluttered design
- ❌ Text near edges
- ❌ File size > 1 MB

---

## 📝 CHECKLIST

### **Before deploying:**

- [ ] Image is exactly 1200 x 630 px
- [ ] File size is < 1 MB
- [ ] Format is JPG or PNG
- [ ] Filename is `og-image.jpg`
- [ ] Located in `/public/` directory
- [ ] Looks good on black background
- [ ] Text is readable
- [ ] Logo is visible
- [ ] Matches brand colors

### **After deploying:**

- [ ] Tested with Facebook Debugger
- [ ] Tested with LinkedIn Inspector
- [ ] Tested with Twitter Validator
- [ ] Cleared all caches
- [ ] Verified on production URL
- [ ] Shared link in WhatsApp (tested)
- [ ] "Created with Figma" is gone ✅

---

## 🎨 EXAMPLE DESIGNS

### **Simple (Minimal):**
```
Black background
Centered logo
"Inchtomilez" in white (large)
"Digital Marketing & Advertising Agency" in yellow
```

### **Detailed (Informative):**
```
Black background
Logo (left side)
Company name + tagline (right side)
3 bullet points (services/stats)
Website URL (bottom)
```

### **Bold (Impact):**
```
Black background
Large "INCHTOMILEZ" text (outlined)
Yellow accent line
"Transform Your Business" tagline
Minimal, modern design
```

---

## 🔗 USEFUL TOOLS

### **Design:**
- Canva: https://www.canva.com/
- Figma: https://www.figma.com/
- Adobe Express: https://www.adobe.com/express/

### **Templates:**
- Social Sizes: https://www.socialsizes.io/
- OG Image: https://www.opengraph.xyz/

### **Compression:**
- TinyJPG: https://tinyjpg.com/
- Squoosh: https://squoosh.app/

### **Testing:**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Inspector: https://www.linkedin.com/post-inspector/
- Twitter Validator: https://cards-dev.twitter.com/validator
- Meta Tags Preview: https://metatags.io/

---

**Status:** ⚠️ **WAITING FOR OG IMAGE**  
**Priority:** 🔴 **HIGH - Required for professional appearance**  
**Time to Create:** ⏱️ **5-10 minutes**

---

**🎉 ONCE YOU ADD THE IMAGE, "CREATED WITH FIGMA" WILL BE GONE!** ✅
