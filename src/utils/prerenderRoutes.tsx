/**
 * ALL ROUTES FOR PRE-RENDERING (304 TOTAL)
 * 
 * This file contains the complete list of all URLs to be pre-rendered
 * as static HTML during the build process for maximum Google indexing.
 * 
 * Version: 3.1.0 - Added Influencer Marketing Page
 * Status: Production Ready
 */

import { blogs } from '../components/data/blogData';
import { getBlogUrl } from '../components/data/blogData';

// ============================================================================
// MAIN PAGES (7 ROUTES)
// ============================================================================

export const mainPages = [
  '/',
  '/about',
  '/services',
  '/industries',
  '/blogs',
  '/contact',
  '/faqs',
];

// ============================================================================
// SERVICE DETAIL PAGES (14 ROUTES)
// ============================================================================

export const servicePages = [
  '/services/digital-marketing',
  '/services/search-engine-optimization-seo',
  '/services/ppc-google-ads',
  '/services/social-media-marketing',
  '/services/content-marketing',
  '/services/web-design-development',
  '/services/branding-identity',
  '/services/email-marketing',
  '/services/video-media-production',
  '/services/btl-activations',
  '/services/ooh-advertising',
  '/services/influencer-marketing',
  '/services/analytics-reporting',
  '/services/ecommerce-marketing',
];

// ============================================================================
// INDUSTRY DETAIL PAGES (18 ROUTES)
// ============================================================================

export const industryPages = [
  '/industries/healthcare',
  '/industries/education',
  '/industries/real-estate',
  '/industries/ecommerce',
  '/industries/hospitality',
  '/industries/finance',
  '/industries/technology',
  '/industries/automotive',
  '/industries/fashion',
  '/industries/food-beverage',
  '/industries/fitness-wellness',
  '/industries/nonprofit',
  '/industries/b2b-services',
  '/industries/manufacturing',
  '/industries/legal-services',
  '/industries/entertainment',
  '/industries/retail',
  '/industries/construction',
];

// ============================================================================
// BLOG CATEGORY PAGES (10 ROUTES)
// ============================================================================

export const blogCategoryPages = [
  '/blogs/seo',
  '/blogs/ppc',
  '/blogs/social-media',
  '/blogs/content-marketing',
  '/blogs/web-design',
  '/blogs/branding',
  '/blogs/email-marketing',
  '/blogs/video-production',
  '/blogs/ecommerce',
  '/blogs/legal',
];

// ============================================================================
// LEGAL PAGES (5 ROUTES)
// ============================================================================

export const legalPages = [
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/disclaimer',
  '/refund-policy',
];

// ============================================================================
// COMPANY PAGES (8 ROUTES)
// ============================================================================

export const companyPages = [
  '/careers',
  '/team',
  '/testimonials',
  '/case-studies',
  '/portfolio',
  '/press',
  '/partners',
  '/awards',
];

// ============================================================================
// RESOURCE PAGES (7 ROUTES)
// ============================================================================

export const resourcePages = [
  '/resources',
  '/downloads',
  '/ebooks',
  '/webinars',
  '/tools',
  '/glossary',
  '/sitemap-page',
];

// ============================================================================
// SERVICE SUB-PAGES (11 ROUTES)
// ============================================================================

export const serviceSubPages = [
  '/services/seo/local-seo',
  '/services/seo/technical-seo',
  '/services/ppc/google-shopping',
  '/services/ppc/display-ads',
  '/services/social-media/instagram',
  '/services/social-media/facebook',
  '/services/influencer-marketing',
  '/services/content/copywriting',
  '/services/content/blog-writing',
  '/services/web-design/ecommerce',
  '/services/web-design/wordpress',
];

// ============================================================================
// BLOG POSTS (224 ROUTES)
// ============================================================================

// Generate blog URLs using the centralized getBlogUrl function
// Format: /blogs/{category}/{slug}
export const blogPages = blogs.map(blog => getBlogUrl(blog));

// ============================================================================
// ALL ROUTES COMBINED (304 TOTAL)
// ============================================================================

export const allRoutes = [
  ...mainPages,
  ...servicePages,
  ...industryPages,
  ...blogCategoryPages,
  ...blogPages,
  ...legalPages,
  ...companyPages,
  ...resourcePages,
  ...serviceSubPages,
];

// ============================================================================
// ROUTE CATEGORIES FOR ANALYTICS
// ============================================================================

export const routeStats = {
  total: allRoutes.length,
  mainPages: mainPages.length,
  servicePages: servicePages.length,
  industryPages: industryPages.length,
  blogCategoryPages: blogCategoryPages.length,
  blogPages: blogPages.length,
  legalPages: legalPages.length,
  companyPages: companyPages.length,
  resourcePages: resourcePages.length,
  serviceSubPages: serviceSubPages.length,
};

// ============================================================================
// PRIORITY ROUTES (FOR CRAWL OPTIMIZATION)
// ============================================================================

// High-priority routes (crawled first)
export const priorityRoutes = [
  '/',
  '/about',
  '/services',
  '/contact',
];

// Medium-priority routes
export const mediumPriorityRoutes = [
  ...servicePages,
  ...industryPages,
  '/blogs',
  ...blogCategoryPages,
  ...legalPages,
  ...companyPages,
  ...resourcePages,
  ...serviceSubPages,
];

// Low-priority routes (crawled last)
export const lowPriorityRoutes = [
  ...blogPages,
];

// ============================================================================
// ROUTE VALIDATION
// ============================================================================

// Check for duplicates
const uniqueRoutes = new Set(allRoutes);
if (uniqueRoutes.size !== allRoutes.length) {
  console.warn('⚠️  Duplicate routes detected in prerenderRoutes.tsx');
  console.warn(`   Total routes: ${allRoutes.length}, Unique: ${uniqueRoutes.size}`);
}

// Log stats
console.log('📊 Pre-render Route Stats:');
console.log(`   Total routes: ${routeStats.total}`);
console.log(`   Main pages: ${routeStats.mainPages}`);
console.log(`   Service pages: ${routeStats.servicePages}`);
console.log(`   Industry pages: ${routeStats.industryPages}`);
console.log(`   Blog category pages: ${routeStats.blogCategoryPages}`);
console.log(`   Blog posts: ${routeStats.blogPages}`);
console.log(`   Legal pages: ${routeStats.legalPages}`);
console.log(`   Company pages: ${routeStats.companyPages}`);
console.log(`   Resource pages: ${routeStats.resourcePages}`);
console.log(`   Service sub-pages: ${routeStats.serviceSubPages}`);

// ============================================================================
// EXPORTS
// ============================================================================

export default allRoutes;
