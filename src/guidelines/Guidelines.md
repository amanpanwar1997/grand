# Inchtomilez Design System Guidelines

**Version:** 3.2.0  
**Status:** ✅ **PRODUCTION READY**  
**Last Updated:** November 8, 2025

---

## 📚 QUICK NAVIGATION

| Topic | Description |
|-------|-------------|
| [Typography](#-typography-system) | Font sizes, weights, hierarchy |
| [Colors](#-color-system) | Black/White/Yellow palette |
| [Spacing](#-spacing-system) | Gap, padding, margins |
| [Components](#-key-components) | BentoGrid2, OutlinedText, etc. |
| [Styling Rules](#-styling-rules) | Important guidelines |
| [SEO Guide](#-seo-quick-reference) | How to edit SEO (see `/SEO_EDITING_GUIDE.md`) |
| [Favicon & Branding](#-favicon--branding) | Logo, favicon, Open Graph images |
| [Hero Video Background](#-hero-video-background) | How to change/add background video |

---

## 🎯 TYPOGRAPHY SYSTEM

**Font Family:** Raleway (400, 500, 600, 700)

### **Desktop Hierarchy:**

| Element | Size | Weight | Line Height | Special |
|---------|------|--------|-------------|---------|
| **H1** | 30px (1.875rem) | 500 | 1.3 | None |
| **H2** | 22px (1.375rem) | 700 | 1.3 | **Auto-gradient** |
| **H3** | 22px (1.375rem) | 500 | 1.4 | None |
| **H4** | 18px (1.125rem) | 500 | 1.4 | None |
| **Body** | 15px (0.9375rem) | 400 | 1.6 | None |
| **Small** | 13px (0.8125rem) | 400 | 1.6 | None |
| **Button** | 15px (0.9375rem) | 600 | 1.5 | None |

### **Mobile Hierarchy (≤768px):**

| Element | Size | Weight |
|---------|------|--------|
| **H1** | 26px | 500 |
| **H2** | 20px | 700 |
| **H3** | 20px | 500 |
| **H4** | 16px | 500 |
| **Body** | 14px | 400 |

### **Usage Examples:**

```tsx
// ✅ Explicit sizing (overrides component defaults)
<h1 className="text-[30px] font-medium">Main Heading</h1>
<h2 className="text-[22px] font-bold">Section Title</h2>
<p className="text-[15px] font-normal">Body text</p>

// ✅ Responsive
<h1 className="text-[26px] md:text-[30px] font-medium">Responsive</h1>
```

---

## 🎨 COLOR SYSTEM

### **Primary Palette:**

```css
--color-black: #000000;        /* Background */
--color-white: #ffffff;        /* Text */
--color-yellow: #eab308;       /* Accent (yellow-500) */
--color-grey: #737373;         /* Muted (gray-500) */
```

### **Usage:**

```tsx
// ✅ Standard colors
<div className="bg-black text-white">
  <span className="text-yellow-500">Accent</span>
  <span className="text-gray-400">Muted</span>
</div>

// ✅ Animated gradient (auto on H2)
<h2 className="text-gradient">Gradient Text</h2>

// ✅ Glass effects
<div className="glass">Semi-transparent</div>
<div className="glass-strong">Deep glass</div>
<div className="glass-yellow">Yellow tint</div>
```

---

## 📐 SPACING SYSTEM

### **Standard Scale:**

| Class | Size | Usage |
|-------|------|-------|
| `gap-4` | 16px | Compact spacing |
| `gap-6` | 24px | **Default grid gap** |
| `gap-10` | 40px | Large grid gap (BentoGrid) |
| `p-4` | 16px | Small padding |
| `p-6` | 24px | **Card padding** |
| `p-8` | 32px | Section padding (mobile) |
| `p-12` | 48px | Section padding (desktop) |
| `py-16` | 64px | Section vertical (mobile) |
| `py-24` | 96px | Section vertical (desktop) |

### **Usage:**

```tsx
// ✅ Standard section
<section className="py-16 md:py-24">
  <div className="container mx-auto px-6">
    <div className="grid gap-6">
      {/* Content */}
    </div>
  </div>
</section>

// ✅ Card
<div className="glass-card p-6 gap-4">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

---

## 🧱 KEY COMPONENTS

### **1. BentoGrid2**
**Location:** `/components/layout/BentoGrid2.tsx`

**Two Modes:**
- **Asymmetric:** Advanced 8-column grid for services/features
- **Uniform:** Simple equal columns for stats/teams

```tsx
// Asymmetric mode (services)
<BentoGrid2 
  cards={services}
  mode="asymmetric"
  showBadges={true}
  ariaLabel="Our services"
/>

// Uniform mode (stats)
<BentoGrid2 
  cards={stats}
  mode="uniform"
  columns={4}
  ariaLabel="Company statistics"
/>
```

---

### **2. OutlinedText**
**Location:** `/components/ui/OutlinedText.tsx`

Large outlined background text with scroll-reveal animations.

```tsx
<OutlinedText 
  text="INNOVATION"
  direction="left"      // left | right
  delay={0}             // Animation delay (ms)
  stopPosition={25}     // Stop distance from edge (%)
  parallax={true}       // Enable parallax
  parallaxSpeed={0.3}   // Parallax speed (0-1)
/>
```

---

### **3. Navigation**
**Location:** `/components/Navigation.tsx`

Responsive navigation with mobile menu.

**Features:**
- ✅ Desktop: Horizontal menu
- ✅ Mobile: Hamburger menu
- ✅ Glassmorphism background
- ✅ Smooth transitions

---

### **4. Footer**
**Location:** `/components/Footer.tsx`

Multi-column footer with links.

**Features:**
- ✅ 4 columns (desktop)
- ✅ 2 columns (tablet)
- ✅ 1 column (mobile)
- ✅ Social media links

---

### **5. WhatsAppButton**
**Location:** `/components/ui/WhatsAppButton.tsx`

Floating WhatsApp chat button in bottom-left corner.

**Features:**
- ✅ Links to WhatsApp: +91-9669988666
- ✅ Glassmorphism design
- ✅ Pulse animation to draw attention
- ✅ Expands on hover to show "Chat with us"
- ✅ Smooth Motion animations
- ✅ Mobile responsive
- ✅ Always visible on all pages

**Usage:**
```tsx
// Already added to App.tsx - appears globally
<WhatsAppButton />
```

---

### **6. SEOHead**
**Location:** `/components/SEOHead.tsx`

SEO meta tags component using React Helmet.

```tsx
<SEOHead 
  title="Page Title"
  description="Page description"
  keywords="keyword1, keyword2"
  canonicalUrl="/page-url"
/>
```

---

## 🎭 STYLING RULES

### **❗ IMPORTANT: Override Component Defaults**

**Always explicitly set styling to override component defaults:**

```tsx
// ❌ BAD - Relies on component defaults
<h1>Heading</h1>
<div className="gap-4">Grid</div>

// ✅ GOOD - Explicit overrides
<h1 className="text-[30px] font-medium">Heading</h1>
<div className="gap-6 grid grid-cols-2 md:grid-cols-4">Grid</div>
```

### **Typography Rules:**
- ✅ Always specify font size: `text-[30px]`
- ✅ Always specify weight: `font-medium`
- ✅ H2 gets auto-gradient (no classes needed)
- ✅ Use yellow for highlights: `text-yellow-500`

### **Spacing Rules:**
- ✅ Default gap: `gap-6` (24px)
- ✅ Card padding: `p-6` (24px)
- ✅ Section padding: `py-16 md:py-24`
- ✅ BentoGrid gap: `gap-10` (40px)

### **Color Rules:**
- ✅ Background: `bg-black`
- ✅ Text: `text-white`
- ✅ Accent: `text-yellow-500`
- ✅ Muted: `text-gray-400`

---

## 🎨 UTILITY CLASSES

### **Glass Effects:**
```css
.glass              /* Semi-transparent glass */
.glass-strong       /* Deep glass with strong blur */
.glass-card         /* Glass card with padding */
.glass-yellow       /* Yellow-tinted glass */
.glass-purple       /* Purple-tinted glass */
.glass-blue         /* Blue-tinted glass */
```

### **Text Effects:**
```css
.text-gradient      /* White to yellow gradient */
.text-muted         /* Gray-400 color */
.text-accent        /* Yellow-500 color */
```

### **Containers:**
```css
.safe-container     /* Max 1280px, responsive padding */
.container          /* Standard container */
```

---

## 🌐 DESIGN PRINCIPLES

### **1. Color Scheme:**
- Black backgrounds (`#000`)
- White/silver text (`#fff`, `#f4f4f4`)
- Yellow accents (`#eab308`)

### **2. Glassmorphism:**
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders (10% white opacity)

### **3. Grid Pattern:**
- Ultra-subtle 2% opacity
- 50px grid cells
- Fixed attachment
- Global in `globals.css`

### **4. Dark Grey Glow:**
- Dual-layer glow system
- Inner 20px + outer 40px blur
- 8-15% opacity
- Hover enhancement (30% brighter)

---

## 🏗️ PAGE STRUCTURE

### **Standard Layout:**

```tsx
<div className="min-h-screen bg-black text-white">
  <Navigation />
  
  <main>
    {/* Hero Section */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-[30px] font-medium mb-6">
          Page Title
        </h1>
        <p className="text-[15px] font-normal text-gray-400">
          Description text
        </p>
      </div>
    </section>

    {/* Content Sections */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Content */}
      </div>
    </section>
  </main>

  <Footer />
</div>
```

---

## 📱 RESPONSIVE DESIGN

### **Breakpoints:**

```css
/* Mobile-first approach */
sm:   640px   /* Small devices */
md:   768px   /* Tablets */
lg:   1024px  /* Desktops */
xl:   1280px  /* Large desktops */
2xl:  1536px  /* Extra large */
```

### **Usage:**

```tsx
// ✅ Mobile-first responsive
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-4 
  gap-6
">
  {/* Content */}
</div>

// ✅ Responsive typography
<h1 className="
  text-[26px] 
  md:text-[30px] 
  font-medium
">
  Responsive Heading
</h1>
```

---

## ⚡ PERFORMANCE

### **Best Practices:**

1. **Lazy Loading:**
   ```tsx
   const BlogPage = lazy(() => import('./pages/BlogPage'));
   ```

2. **Image Optimization:**
   - Use WebP format
   - Lazy load images
   - Responsive images

3. **Code Splitting:**
   - Automatic with Vite
   - Route-based splitting
   - Component-based splitting

4. **Animation Performance:**
   - Use CSS transforms (GPU-accelerated)
   - Prefer Motion/React for complex animations
   - Use Lenis for smooth scroll

---

## 🎯 QUICK REFERENCE

### **Common Patterns:**

```tsx
// Section with heading
<section className="py-16 md:py-24 bg-black">
  <div className="container mx-auto px-6">
    <h2 className="text-[22px] font-bold mb-6">Section Title</h2>
    <p className="text-[15px] text-gray-400 mb-8">Description</p>
    {/* Content */}
  </div>
</section>

// Card with glass effect
<div className="glass-card p-6">
  <h3 className="text-[22px] font-medium mb-4">Card Title</h3>
  <p className="text-[15px] text-gray-400">Card content</p>
</div>

// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(item => (
    <div key={item.id} className="glass p-6">
      {/* Item content */}
    </div>
  ))}
</div>

// Button
<button className="
  bg-yellow-500 
  text-black 
  px-6 
  py-3 
  text-[15px] 
  font-semibold 
  rounded-lg 
  hover:bg-yellow-400 
  transition-colors
">
  Click Me
</button>
```

---

## 📊 COMPONENT STATUS

| Component | Status | Location |
|-----------|--------|----------|
| Navigation | ✅ Ready | `/components/Navigation.tsx` |
| Footer | ✅ Ready | `/components/Footer.tsx` |
| SEOHead | ✅ Ready | `/components/SEOHead.tsx` |
| WhatsAppButton | ✅ Ready | `/components/ui/WhatsAppButton.tsx` |
| BentoGrid2 | ✅ Ready | `/components/layout/BentoGrid2.tsx` |
| OutlinedText | ✅ Ready | `/components/ui/OutlinedText.tsx` |
| OceanWaves | ✅ Ready | `/components/ui/OceanWaves.tsx` |
| LenisScroll | ✅ Ready | `/components/ui/LenisScroll.tsx` |
| AnimatedSection | ✅ Ready | `/components/ui/AnimatedSection.tsx` |

---

## ✅ CHECKLIST

**Before creating new components:**

- [ ] Use explicit font sizing: `text-[30px]`
- [ ] Use explicit font weight: `font-medium`
- [ ] Use explicit colors: `text-white`, `bg-black`
- [ ] Use explicit spacing: `gap-6`, `p-6`
- [ ] Override component defaults
- [ ] Test mobile responsiveness
- [ ] Verify glassmorphism effects
- [ ] Check animation performance

---

## 🔍 SEO QUICK REFERENCE

### **Need to Change SEO?**

**📚 Complete Guide:** See `/SEO_EDITING_GUIDE.md` for detailed instructions.

### **Quick Edits:**

| What to Change | File to Edit | Location |
|----------------|--------------|----------|
| **Page titles** | `/utils/seoConfig.tsx` | Line 70+ (SEO_CONFIG) |
| **Meta descriptions** | `/utils/seoConfig.tsx` | Same file |
| **Keywords** | `/utils/seoConfig.tsx` | Same file |
| **H1 headings** | `/utils/seoConfig.tsx` | Same file |
| **Blog post SEO** | `/components/data/blogData.tsx` | Entire file |
| **Sitemaps** | `/public/sitemap*.xml` | Multiple files |
| **Robots.txt** | `/public/robots.txt` | Entire file |
| **Global SEO** | `/index.html` | Lines 12-156 |
| **Schema/Structured** | `/utils/structuredData.tsx` | Entire file |

### **Example - Change About Page SEO:**

**File:** `/utils/seoConfig.tsx`

```tsx
'/about': {
  title: 'About Us | Award-Winning Marketing Agency',    // ← Edit
  description: 'Leading digital marketing agency...',    // ← Edit
  keywords: ['marketing agency', 'Indore', 'SEO'],      // ← Edit
  h1: 'About Inchtomilez - Your Partner',               // ← Edit
  ogImage: '/about-og-image.jpg',                       // ← Edit
},
```

**📖 For detailed instructions, troubleshooting, and examples:**  
👉 **See `/SEO_EDITING_GUIDE.md`**

---

## 🎨 FAVICON & BRANDING

### **Current Favicon Setup:**

**Status:** ✅ **SVG Favicon Active**

**Files:**
- `/public/favicon.svg` - Main SVG favicon (modern browsers)
- `/index.html` (line 45) - Favicon reference

**Design:**
- Black background (#000000)
- Yellow "I" letter (#eab308) in Raleway Bold
- 512x512 viewBox
- Scalable vector format

### **How to Change Favicon:**

**File:** `/public/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#000000"/>
  <text 
    x="256" 
    y="330" 
    text-anchor="middle" 
    font-family="Raleway, Arial, sans-serif" 
    font-size="420" 
    font-weight="700" 
    fill="#eab308"
  >
    I  <!-- ← Change this letter -->
  </text>
</svg>
```

### **⚠️ Missing PWA Icons:**

The manifest.json references PWA icons that don't exist yet:
- `/pwa/icon-72x72.png`
- `/pwa/icon-96x96.png`
- `/pwa/icon-128x128.png`
- `/pwa/icon-144x144.png`
- `/pwa/icon-152x152.png`
- `/pwa/icon-192x192.png`
- `/pwa/icon-384x384.png`
- `/pwa/icon-512x512.png`

**Impact:** PWA install prompt won't show proper icons on mobile devices.

**To Create PWA Icons:**
1. Design a 512x512px icon (same design as favicon)
2. Use online tool: https://realfavicongenerator.net/
3. Upload your icon
4. Download generated icons
5. Place in `/public/pwa/` folder
6. Or see `/FAVICON_SETUP_GUIDE.md` for detailed instructions

---

## 🎬 HERO VIDEO BACKGROUND

### **Current Setup:**

**File:** `/components/pages/HomePage.tsx`  
**Line:** 378

```tsx
<VideoBackground 
  src="/videos/hero-video.mp4"  // ← Change video URL here
  overlayOpacity={0.7}           // ← Adjust darkness (0-1)
  startTime={9}                  // ← Start time in seconds
/>
```

### **How to Change Video:**

**Option 1: Use Local Video**
1. Create folder: `/public/videos/`
2. Add video: `/public/videos/hero-video.mp4`
3. Deploy

**Option 2: Use External URL**
```tsx
<VideoBackground 
  src="https://example.com/your-video.mp4"
  overlayOpacity={0.7}
  startTime={0}
/>
```

### **Video Specifications:**

| Property | Recommended |
|----------|-------------|
| **Format** | MP4 (H.264) |
| **Resolution** | 1920x1080 or 1280x720 |
| **Duration** | 15-30 seconds (loops) |
| **File Size** | < 5 MB |
| **Frame Rate** | 30fps |
| **Audio** | None (muted) |

### **VideoBackground Props:**

```tsx
interface VideoBackgroundProps {
  src: string;              // Video URL (required)
  overlayOpacity?: number;  // 0-1, default 0.6 (darkness)
  fallbackImage?: string;   // Backup image if video fails
  startTime?: number;       // Start at X seconds
  className?: string;       // Additional CSS classes
}
```

### **Component Features:**
- ✅ Auto-plays muted (mobile-safe)
- ✅ Loops seamlessly
- ✅ Pauses when not visible (performance)
- ✅ Graceful fallback to black background
- ✅ Dark overlay for text readability
- ✅ Responsive on all devices

**Component Location:** `/components/ui/VideoBackground.tsx`

---

## 🖼️ OPEN GRAPH IMAGE

### **Status:** ⚠️ **MISSING - Required for Social Sharing**

**Issue:** When sharing URLs on Facebook/LinkedIn/WhatsApp, it shows "Created with Figma" text.

**Solution:** Create og-image.jpg

**File Needed:** `/public/og-image.jpg`

**Specifications:**
- Size: 1200 x 630 pixels (exact)
- Format: JPG or PNG
- Max size: < 1 MB
- Design: Black background, your logo, yellow accents

**Complete Guide:** See `/OG_IMAGE_SETUP.md` for detailed instructions.

**Quick Fix:**
1. Create image (1200x630px) using Canva
2. Save as `/public/og-image.jpg`
3. Deploy
4. Test: https://developers.facebook.com/tools/debug/

---

**Status:** ✅ **DESIGN SYSTEM COMPLETE**  
**Version:** 3.2.0  
**Last Updated:** November 8, 2025
