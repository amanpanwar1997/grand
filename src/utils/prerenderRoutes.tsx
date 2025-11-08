/**
 * ALL ROUTES FOR PRE-RENDERING (261 TOTAL)
 * 
 * This file contains the complete list of all URLs to be pre-rendered
 * as static HTML by react-snap during the build process.
 * 
 * Version: 1.0.0 - Maximum SEO Optimization
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
// BLOG POSTS (224 ROUTES)
// ============================================================================

// Generate blog URLs using the centralized getBlogUrl function
// Format: /blogs/{category}/{slug}
export const blogPages = blogs.map(blog => getBlogUrl(blog));

// ============================================================================
// ALL ROUTES COMBINED (261 TOTAL)
// ============================================================================

export const allRoutes = [
  ...mainPages,
  ...servicePages,
  ...industryPages,
  ...blogPages,
];

// ============================================================================
// ROUTE CATEGORIES FOR ANALYTICS
// ============================================================================

export const routeStats = {
  total: allRoutes.length,
  mainPages: mainPages.length,
  servicePages: servicePages.length,
  industryPages: industryPages.length,
  blogPages: blogPages.length,
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
];

// Low-priority routes (crawled last)
export const lowPriorityRoutes = [
  '/blogs',
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
console.log(`   Blog posts: ${routeStats.blogPages}`);

// ============================================================================
// EXPORTS
// ============================================================================

export default allRoutes;
