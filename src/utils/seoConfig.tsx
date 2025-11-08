/**
 * ============================================================================
 * CENTRALIZED SEO CONFIGURATION SYSTEM v1.0
 * ============================================================================
 * 
 * ONE FILE TO CONTROL ALL PAGE SEO
 * 
 * Update titles, descriptions, keywords, H1 tags, schema, and OG images
 * for ANY page from this single location.
 * 
 * Benefits:
 * - ✅ All SEO in one place - Update any page in seconds
 * - ✅ Visual overview - See all SEO at a glance
 * - ✅ Type-safe - Auto-complete for all routes
 * - ✅ H1 management - Centralized heading control
 * - ✅ Schema auto-apply - Correct schema per page type
 * - ✅ No prop drilling - Pages auto-load SEO by route
 * 
 * Usage:
 * ```tsx
 * import { useSEO } from '../utils/seoConfig';
 * 
 * const seo = useSEO(); // Auto-loads SEO for current route
 * return (
 *   <>
 *     <SEOHead {...seo.meta} />
 *     <h1>{seo.h1}</h1>
 *   </>
 * );
 * ```
 * 
 * ⚠️ IMPORTANT: All SEO values copied from existing seoKeywords.tsx
 * NO changes to actual content - only reorganized for easier management
 * ============================================================================
 */

import { useLocation } from 'react-router-dom';
import { organizationSchema, localBusinessSchema, websiteSchema } from './structuredData';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface PageSEOConfig {
  // Meta Tags
  title: string;
  description: string;
  keywords: string[];
  
  // H1 Tag (for consistency)
  h1: string;
  
  // Open Graph
  ogType?: 'website' | 'article' | 'service' | 'product';
  ogImage?: string;
  
  // Schema (auto-applied)
  schema?: 'organization' | 'localBusiness' | 'website' | 'article' | 'service' | Record<string, any>;
  
  // Additional Meta
  author?: string;
  canonical?: string;
  noindex?: boolean;
}

// ============================================================================
// MASTER SEO DATABASE - ALL PAGES
// ============================================================================

export const SEO_CONFIG: Record<string, PageSEOConfig> = {
  
  // --------------------------------------------------------------------------
  // HOME PAGE
  // --------------------------------------------------------------------------
  '/': {
    title: 'Inchtomilez Digital Marketing And Advertising Agency',
    description: 'DIGITAL MARKETING | IT SOLUTIONS | Advertisments | Branding',
    keywords: [
      // Primary
      'digital marketing agency In Indore',
      'advertising company Indore',
      'best marketing agency Madhya Pradesh',
      // LSI
      'integrated marketing solutions',
      'creative advertising services',
      'brand development',
      'digital strategy',
      // Local
      'Indore',
      'Madhya Pradesh',
      'MP',
      'Vijay Nagar',
      'Central India',
    ],
    h1: 'Transform Your Business with Digital Marketing Excellence',
    ogType: 'website',
    schema: 'website',
  },

  // --------------------------------------------------------------------------
  // ABOUT PAGE
  // --------------------------------------------------------------------------
  '/about': {
    title: 'Read Us | Trusted Digital Marketing And Advertising Agency',
    description: 'Meet the team behind Indore\'s most innovative digital marketing agency. 10+ years of experience, 500+ clients, and proven results in SEO, advertising, and brand growth.',
    keywords: [
      // Primary
      'best digital makreting agency',
      'digital marketing company Indore',
      'advertising services in indore',
      // LSI
      'marketing expertise',
      'creative professionals',
      'agency culture',
      'client success stories',
      // Local
      'Indore based agency',
      'Madhya Pradesh marketing',
      'local expertise',
    ],
    h1: 'About Inchtomilez - Your Trusted Marketing Partner',
    ogType: 'website',
    schema: 'organization',
  },

  // --------------------------------------------------------------------------
  // SERVICES PAGES
  // --------------------------------------------------------------------------
  '/services': {
    title: '12 Core Marketing Services - SEO, PPC, Branding & More | Indore',
    description: 'Complete digital marketing services in Indore: SEO, PPC, social media, branding, web development, content marketing, and more. Custom solutions for every business need.',
    keywords: [
      // Primary
      'digital marketing services Indore',
      'advertising services',
      'marketing solutions',
      // LSI
      'comprehensive marketing',
      'integrated services',
      'full-service agency',
      // Local
      'Indore marketing services',
      'MP advertising',
      'local business marketing',
    ],
    h1: 'Comprehensive Digital Marketing Services',
    ogType: 'website',
    schema: 'service',
  },

  '/services/digital-marketing': {
    title: 'Digital Marketing Services in Indore - SEO, PPC, Social Media',
    description: 'Expert digital marketing services in Indore. Drive growth with SEO, PPC, social media, content marketing, and analytics. Get measurable ROI and top rankings.',
    keywords: [
      'digital marketing services Indore',
      'SEO services Indore',
      'PPC management',
      'search engine optimization',
      'paid advertising',
      'social media marketing',
      'content marketing',
      'email campaigns',
      'Indore SEO company',
      'local digital marketing',
      'MP SEO services',
    ],
    h1: 'Digital Marketing Services in Indore',
    ogType: 'service',
    schema: 'service',
  },

  '/services/advertising': {
    title: 'Advertising Agency in Indore - Creative Campaigns That Convert',
    description: 'Full-service advertising agency in Indore. Create impactful campaigns across digital, print, OOH, and broadcast. Drive brand awareness and conversions.',
    keywords: [
      'advertising agency Indore',
      'ad campaigns',
      'media buying',
      'creative advertising',
      'multi-channel campaigns',
      'brand advertising',
      'performance marketing',
      'Indore advertising',
      'local ad agency',
      'MP advertising services',
    ],
    h1: 'Professional Advertising Services in Indore',
    ogType: 'service',
    schema: 'service',
  },

  '/services/branding': {
    title: 'Branding Agency in Indore - Logo, Identity & Strategy',
    description: 'Professional branding services in Indore. Create memorable brand identities, logos, and strategies that resonate with your audience and stand out.',
    keywords: [
      'branding agency Indore',
      'brand identity design',
      'logo design Indore',
      'brand strategy',
      'visual identity',
      'brand guidelines',
      'rebranding',
      'Indore branding company',
      'MP logo design',
      'local brand development',
    ],
    h1: 'Branding & Strategy Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/website-development': {
    title: 'Website & App Development in Indore - Custom Solutions',
    description: 'Expert website and app development in Indore. Build responsive, high-performance websites, ecommerce stores, and mobile apps that drive results.',
    keywords: [
      'web development Indore',
      'website design Indore',
      'ecommerce development',
      'responsive websites',
      'mobile apps',
      'UI UX design',
      'custom web solutions',
      'Indore web developer',
      'website company MP',
      'local web design',
    ],
    h1: 'Website & App Development Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/software-development': {
    title: 'Custom Software Development in Indore - Enterprise Solutions',
    description: 'Professional software development services in Indore. Build scalable custom software, SaaS platforms, and enterprise applications tailored to your needs.',
    keywords: [
      'software development Indore',
      'custom software',
      'SaaS development',
      'enterprise solutions',
      'API integration',
      'cloud applications',
      'software consulting',
      'Indore software company',
      'MP tech solutions',
      'local developers',
    ],
    h1: 'Custom Software Development Solutions',
    ogType: 'service',
    schema: 'service',
  },

  '/services/graphic-design': {
    title: 'Graphic Design Services in Indore - Creative Visual Solutions',
    description: 'Professional graphic design services in Indore. Create stunning graphics, animations, print materials, and digital assets that elevate your brand.',
    keywords: [
      'graphic design Indore',
      'creative design services',
      'visual design',
      'print design',
      'digital graphics',
      'animation',
      'illustration',
      'Indore graphic designer',
      'MP design services',
      'creative agency Indore',
    ],
    h1: 'Professional Graphic Design Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/media-production': {
    title: 'Video Production & Photography in Indore - Professional Media',
    description: 'Expert video production and photography in Indore. Create compelling visual content for marketing, events, products, and corporate communications.',
    keywords: [
      'video production Indore',
      'photography services',
      'media production',
      'corporate videos',
      'product photography',
      'event coverage',
      'post-production',
      'Indore videographer',
      'MP video production',
      'local media services',
    ],
    h1: 'Video Production & Photography Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/public-relations': {
    title: 'Public Relations Agency in Indore - Media & Reputation',
    description: 'Strategic PR services in Indore. Build positive media relations, manage reputation, and create compelling narratives that enhance brand credibility.',
    keywords: [
      'PR agency Indore',
      'public relations services',
      'media relations',
      'press releases',
      'crisis management',
      'reputation management',
      'media outreach',
      'Indore PR firm',
      'MP public relations',
      'local media connections',
    ],
    h1: 'Public Relations & Media Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/political-campaigns': {
    title: 'Political Campaign Management in Indore - Winning Strategies',
    description: 'Expert political campaign management in Indore. Data-driven strategies for voter outreach, digital advocacy, and election success in MP.',
    keywords: [
      'political campaign management',
      'election strategy',
      'political consulting',
      'voter outreach',
      'campaign strategy',
      'digital advocacy',
      'political advertising',
      'Indore political consultant',
      'MP campaign management',
      'local elections',
    ],
    h1: 'Political Campaign Management Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/ooh-advertising': {
    title: 'OOH Advertising in Indore - Billboards & Outdoor Media',
    description: 'Out-of-home advertising services in Indore. Create impactful billboard, transit, and experiential campaigns that capture attention across the city.',
    keywords: [
      'OOH advertising Indore',
      'outdoor advertising',
      'billboard advertising',
      'transit ads',
      'street furniture',
      'digital billboards',
      'experiential marketing',
      'Indore billboards',
      'MP outdoor ads',
      'local OOH campaigns',
    ],
    h1: 'Out-of-Home (OOH) Advertising Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/radio-newspapers': {
    title: 'Radio & Newspaper Advertising in Indore - Traditional Media',
    description: 'Traditional media advertising in Indore. Effective radio spots, newspaper ads, and magazine placements that reach your local audience.',
    keywords: [
      'radio advertising Indore',
      'newspaper ads',
      'traditional media',
      'radio spots',
      'print advertising',
      'media buying',
      'broadcast advertising',
      'Indore radio ads',
      'MP newspaper advertising',
      'local media buying',
    ],
    h1: 'Radio & Newspaper Advertising Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/product-marketing': {
    title: 'Product Marketing in Indore - Launch & Growth Strategies',
    description: 'Strategic product marketing services in Indore. Launch products successfully with positioning, go-to-market strategies, and growth marketing.',
    keywords: [
      'product marketing',
      'product launch',
      'go-to-market strategy',
      'product positioning',
      'market research',
      'competitive analysis',
      'growth marketing',
      'Indore product launch',
      'MP market strategy',
      'local product marketing',
    ],
    h1: 'Product Marketing & Launch Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/btl-activations': {
    title: 'BTL Activations in Indore - Events & Experiential Marketing',
    description: 'Below-the-line activation services in Indore. Create memorable brand experiences through events, exhibitions, and experiential marketing campaigns.',
    keywords: [
      'BTL activations Indore',
      'event marketing',
      'experiential marketing',
      'brand activations',
      'mall activations',
      'trade shows',
      'product sampling',
      'Indore events',
      'MP activations',
      'local experiential',
    ],
    h1: 'BTL Activations & Experiential Marketing',
    ogType: 'service',
    schema: 'service',
  },

  // --------------------------------------------------------------------------
  // INDUSTRIES PAGES
  // --------------------------------------------------------------------------
  '/industries': {
    title: '18 Industries We Serve - Expert Marketing for Every Sector',
    description: 'Specialized marketing solutions for 18+ industries in Indore. Healthcare, education, real estate, ecommerce, technology, and more with proven results.',
    keywords: [
      'industry-specific marketing',
      'vertical marketing solutions',
      'specialized marketing',
      'healthcare marketing',
      'education marketing',
      'real estate marketing',
      'Indore industries',
      'MP business sectors',
      'local market expertise',
    ],
    h1: 'Industries We Serve',
    ogType: 'website',
    schema: 'organization',
  },

  '/industries/healthcare': {
    title: 'Healthcare Marketing in Indore - Hospitals, Clinics & Medical',
    description: 'Specialized healthcare marketing in Indore. Drive patient acquisition for hospitals, clinics, and medical practices with HIPAA-compliant strategies.',
    keywords: [
      'healthcare marketing Indore',
      'hospital marketing',
      'medical practice marketing',
      'patient acquisition',
      'healthcare SEO',
      'medical advertising',
      'Indore hospital marketing',
      'MP healthcare advertising',
      'clinic marketing',
    ],
    h1: 'Healthcare Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/education': {
    title: 'Education Marketing in Indore - Schools & Coaching Institutes',
    description: 'Education marketing services in Indore. Increase student enrollment for schools, colleges, and coaching institutes with targeted strategies.',
    keywords: [
      'education marketing Indore',
      'school marketing',
      'coaching institute marketing',
      'student enrollment',
      'education SEO',
      'institute branding',
      'Indore school marketing',
      'MP education ads',
      'coaching center promotion',
    ],
    h1: 'Education Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/real-estate': {
    title: 'Real Estate Marketing in Indore - Property & Builder Promotion',
    description: 'Real estate marketing services in Indore. Generate quality leads for properties, developments, and real estate businesses with proven strategies.',
    keywords: [
      'real estate marketing Indore',
      'property marketing',
      'builder promotion',
      'real estate leads',
      'property SEO',
      'real estate advertising',
      'Indore property marketing',
      'MP real estate ads',
      'local builder promotion',
    ],
    h1: 'Real Estate Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  // --------------------------------------------------------------------------
  // BLOG PAGES
  // --------------------------------------------------------------------------
  '/blogs': {
    title: '224+ Marketing Insights & Resources - Expert Guides & Tips',
    description: 'Expert digital marketing blog with 224+ comprehensive guides. Learn SEO, PPC, social media, content marketing, and proven strategies for business growth.',
    keywords: [
      'digital marketing blog',
      'marketing insights',
      'SEO tips',
      'marketing strategies',
      'industry trends',
      'best practices',
      'Indore marketing tips',
      'local SEO guides',
      'MP business advice',
    ],
    h1: 'Marketing Insights & Resources',
    ogType: 'website',
    schema: 'website',
  },

  // --------------------------------------------------------------------------
  // CONTACT PAGE
  // --------------------------------------------------------------------------
  '/contact': {
    title: 'Contact Inchtomilez - Get Free Marketing Consultation in Indore',
    description: 'Contact India\'s leading digital marketing agency in Indore. Get free consultation, custom proposals, and expert advice. Call, email, or visit our office today.',
    keywords: [
      'contact digital marketing agency',
      'marketing consultation Indore',
      'get quote',
      'free consultation',
      'marketing proposal',
      'agency contact',
      'Indore office address',
      'MP marketing agency contact',
      'local consultation',
    ],
    h1: 'Contact Us - Get Free Consultation',
    ogType: 'website',
    schema: 'organization',
  },

  // --------------------------------------------------------------------------
  // FAQs PAGE
  // --------------------------------------------------------------------------
  '/faqs': {
    title: 'FAQs - Digital Marketing & Advertising Questions Answered',
    description: 'Frequently asked questions about digital marketing, SEO, advertising, pricing, and our services. Get expert answers from Indore\'s leading agency.',
    keywords: [
      'digital marketing FAQ',
      'marketing questions',
      'agency FAQ',
      'common questions',
      'marketing answers',
      'service information',
      'Indore marketing FAQ',
      'local agency questions',
    ],
    h1: 'Frequently Asked Questions',
    ogType: 'website',
    schema: 'organization',
  },
};

// ============================================================================
// ROUTE MATCHING UTILITIES
// ============================================================================

/**
 * Find SEO config for current route
 * Supports exact matches and dynamic routes (services/:slug, industries/:slug)
 */
function findSEOConfig(pathname: string): PageSEOConfig | null {
  // Exact match first
  if (SEO_CONFIG[pathname]) {
    return SEO_CONFIG[pathname];
  }

  // Dynamic route matching
  // Match /services/:slug
  if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    const serviceRoute = `/services/${slug}`;
    if (SEO_CONFIG[serviceRoute]) {
      return SEO_CONFIG[serviceRoute];
    }
  }

  // Match /industries/:slug
  if (pathname.startsWith('/industries/')) {
    const slug = pathname.replace('/industries/', '');
    const industryRoute = `/industries/${slug}`;
    if (SEO_CONFIG[industryRoute]) {
      return SEO_CONFIG[industryRoute];
    }
  }

  // Match /blogs/:category/:slug (use main blogs config)
  if (pathname.startsWith('/blogs/') && pathname !== '/blogs') {
    return SEO_CONFIG['/blogs']; // Return main blogs config for individual posts
  }

  return null;
}

// ============================================================================
// REACT HOOK - AUTO-LOAD SEO BY ROUTE
// ============================================================================

export interface SEOData {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogType: 'website' | 'article' | 'service' | 'product';
    ogImage?: string;
    structuredData?: Record<string, any>;
    author?: string;
    canonical?: string;
    noindex?: boolean;
  };
  h1: string;
}

/**
 * React hook to automatically load SEO config for current route
 * 
 * @param overrides - Optional overrides for specific pages (e.g., blog posts)
 * @returns SEO data (meta + h1)
 * 
 * @example
 * ```tsx
 * // Auto-load from route
 * const seo = useSEO();
 * 
 * // Override for blog post
 * const seo = useSEO({
 *   title: `${blog.title} | Inchtomilez Blog`,
 *   description: blog.description,
 *   h1: blog.title
 * });
 * ```
 */
export function useSEO(overrides?: Partial<PageSEOConfig>): SEOData {
  const location = useLocation();
  const pathname = location.pathname;

  // Find SEO config for route
  const config = findSEOConfig(pathname) || SEO_CONFIG['/'];

  // Apply overrides if provided
  const finalConfig: PageSEOConfig = {
    ...config,
    ...overrides,
  };

  // Get schema based on config
  let structuredData: Record<string, any> | undefined;
  if (finalConfig.schema) {
    if (finalConfig.schema === 'organization') {
      structuredData = organizationSchema;
    } else if (finalConfig.schema === 'localBusiness') {
      structuredData = localBusinessSchema;
    } else if (finalConfig.schema === 'website') {
      structuredData = websiteSchema;
    } else if (typeof finalConfig.schema === 'object') {
      structuredData = finalConfig.schema;
    }
  }

  return {
    meta: {
      title: finalConfig.title,
      description: finalConfig.description,
      keywords: finalConfig.keywords,
      ogType: finalConfig.ogType || 'website',
      ogImage: finalConfig.ogImage,
      structuredData,
      author: finalConfig.author,
      canonical: finalConfig.canonical,
      noindex: finalConfig.noindex || false,
    },
    h1: finalConfig.h1,
  };
}

// ============================================================================
// HELPER FUNCTIONS (BACKWARD COMPATIBILITY)
// ============================================================================

/**
 * Get SEO config for a specific route
 * @param route - Route path (e.g., '/services', '/about')
 */
export function getSEOConfig(route: string): PageSEOConfig | null {
  return SEO_CONFIG[route] || null;
}

/**
 * Get all routes with SEO config
 */
export function getAllSEORoutes(): string[] {
  return Object.keys(SEO_CONFIG);
}

/**
 * Check if route has SEO config
 */
export function hasSEOConfig(route: string): boolean {
  return !!findSEOConfig(route);
}
