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
    description: 'SEO, PPC, SMM, Google Ads, Meta Ads, Branding, Print Media, Radio, Graphics, Animation, Advertising, Website Development, Political Campaigns',
    keywords: [
      // Primary
      'digital marketing agency In Indore',
      'advertising company Indore',
      'best marketing agency Madhya Pradesh',
      // LSI
      'Best Digital Marketing Services In Indore',
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
    h1: 'Best Digital Marketing Agency In Indore',
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
    h1: 'About Inchtomilez - Digital Marketing & Advertising Agency',
    ogType: 'website',
    schema: 'organization',
  },

  // --------------------------------------------------------------------------
  // SERVICES PAGES
  // --------------------------------------------------------------------------
  '/services': {
    title: 'Digital Marketing, Advertising, IT, Media, Branding & More',
    description: 'Complete digital marketing services in Indore: SEO, PPC, social media, branding, web development, content marketing, and more. Custom solutions for every business need.',
    keywords: [
      // Primary
      'digital marketing services Indore',
      'advertising services',
      'marketing solutions',
      'Social Media Markeitng Services',
      // LSI
      'complete digital marketing services ',
      'digtial marketing services in indore',
      'Digital Marketing full-service agency',
      // Local
      'Indore marketing services',
      'MP advertising',
      'local business marketing',
    ],
    h1: 'Comprehensive Digital Marketing Services',
    ogType: 'website',
    schema: 'service',
  },

  // SEO SERVICES
  '/services/search-engine-optimization-seo': {
    title: 'SEO Services in Indore - Rank #1 on Google | Expert SEO Agency',
    description: 'Top-rated SEO services in Indore. Drive organic traffic, rank higher on Google, and dominate search results. Technical SEO, local SEO, and comprehensive optimization strategies.',
    keywords: [
      'SEO services Indore',
      'search engine optimization',
      'SEO company Indore',
      'Google ranking',
      'organic traffic',
      'local SEO Indore',
      'technical SEO',
      'on-page SEO',
      'off-page SEO',
      'SEO expert Indore',
      'Indore SEO agency',
      'MP SEO services',
      'best SEO company',
    ],
    h1: 'Professional SEO Services in Indore',
    ogType: 'service',
    schema: 'service',
  },

  // PPC & GOOGLE ADS
  '/services/ppc-google-ads': {
    title: 'PPC & Google Ads Management in Indore - Certified Experts',
    description: 'Expert PPC and Google Ads management in Indore. Maximize ROI with strategic campaigns, lower CPC, and higher conversions. Google Ads certified professionals.',
    keywords: [
      'PPC services Indore',
      'Google Ads management',
      'paid advertising',
      'Google Ads expert',
      'PPC management',
      'search ads',
      'display ads',
      'remarketing',
      'Google Ads Indore',
      'PPC agency',
      'Indore Google Ads',
      'MP PPC services',
    ],
    h1: 'PPC & Google Ads Management Services',
    ogType: 'service',
    schema: 'service',
  },

  // SOCIAL MEDIA MARKETING
  '/services/social-media-marketing': {
    title: 'Social Media Marketing in Indore - Instagram, Facebook & More',
    description: 'Results-driven social media marketing in Indore. Grow your brand on Instagram, Facebook, LinkedIn, Twitter, and YouTube. Strategic content, ads, and community management.',
    keywords: [
      'social media marketing Indore',
      'Instagram marketing',
      'Facebook advertising',
      'social media management',
      'LinkedIn marketing',
      'Twitter marketing',
      'social media ads',
      'content creation',
      'SMM Indore',
      'social media agency',
      'Indore social media',
      'MP social marketing',
    ],
    h1: 'Social Media Marketing Services',
    ogType: 'service',
    schema: 'service',
  },

  // CONTENT MARKETING
  '/services/content-marketing': {
    title: 'Content Marketing Services in Indore - Blogs, Videos & More',
    description: 'Strategic content marketing in Indore. Create compelling blogs, videos, infographics, and ebooks that engage audiences and drive conversions.',
    keywords: [
      'content marketing Indore',
      'blog writing services',
      'content creation',
      'video content',
      'infographic design',
      'content strategy',
      'SEO content',
      'copywriting',
      'content marketing agency',
      'Indore content services',
      'MP content marketing',
    ],
    h1: 'Content Marketing Services',
    ogType: 'service',
    schema: 'service',
  },

  // BRANDING & IDENTITY
  '/services/branding-identity': {
    title: 'Branding & Identity Services in Indore - Logo, Brand Strategy',
    description: 'Professional branding and identity services in Indore. Create memorable brand identities, logos, guidelines, and strategies that resonate with your audience.',
    keywords: [
      'branding agency Indore',
      'brand identity design',
      'logo design Indore',
      'brand strategy',
      'visual identity',
      'brand guidelines',
      'rebranding services',
      'brand development',
      'Indore branding company',
      'MP logo design',
      'creative branding',
    ],
    h1: 'Branding & Identity Services',
    ogType: 'service',
    schema: 'service',
  },

  // VIDEO & MEDIA PRODUCTION
  '/services/video-media-production': {
    title: 'Video & Media Production in Indore - Corporate, Marketing Videos',
    description: 'Professional video and media production in Indore. Create stunning corporate videos, product demos, commercials, and social media content.',
    keywords: [
      'video production Indore',
      'media production',
      'corporate video',
      'product video',
      'commercial production',
      'video marketing',
      'photography services',
      'videography',
      'Indore video production',
      'MP media services',
    ],
    h1: 'Video & Media Production Services',
    ogType: 'service',
    schema: 'service',
  },

  // WEB DESIGN & DEVELOPMENT
  '/services/web-design-development': {
    title: 'Web Design & Development in Indore - Custom Websites & Apps',
    description: 'Expert web design and development in Indore. Build responsive, high-performance websites, ecommerce stores, and custom web applications.',
    keywords: [
      'web design Indore',
      'web development Indore',
      'website design services',
      'custom website',
      'responsive web design',
      'ecommerce development',
      'UI UX design',
      'website development company',
      'Indore web developer',
      'MP web design',
    ],
    h1: 'Web Design & Development Services',
    ogType: 'service',
    schema: 'service',
  },

  // DIGITAL MARKETING
  '/services/digital-marketing': {
    title: 'Digital Marketing Services in Indore - Complete 360° Solutions',
    description: 'Comprehensive digital marketing services in Indore. SEO, PPC, social media, content marketing, email campaigns, and analytics. Complete 360° digital solutions.',
    keywords: [
      'digital marketing services Indore',
      'digital marketing agency',
      '360 marketing',
      'online marketing',
      'internet marketing',
      'performance marketing',
      'digital strategy',
      'Indore digital marketing',
      'MP marketing agency',
    ],
    h1: 'Complete Digital Marketing Services',
    ogType: 'service',
    schema: 'service',
  },

  // EMAIL MARKETING
  '/services/email-marketing': {
    title: 'Email Marketing Services in Indore - Campaigns & Automation',
    description: 'Professional email marketing services in Indore. Create high-converting email campaigns, newsletters, and automated sequences that drive sales.',
    keywords: [
      'email marketing Indore',
      'email campaigns',
      'newsletter design',
      'marketing automation',
      'email marketing services',
      'drip campaigns',
      'email strategy',
      'Indore email marketing',
      'MP email services',
    ],
    h1: 'Email Marketing Services',
    ogType: 'service',
    schema: 'service',
  },

  // ECOMMERCE MARKETING
  '/services/ecommerce-marketing': {
    title: 'eCommerce Marketing in Indore - Shopify, WooCommerce & More',
    description: 'Specialized ecommerce marketing in Indore. Grow online sales with SEO, PPC, email marketing, and conversion optimization for Shopify, WooCommerce, and custom stores.',
    keywords: [
      'ecommerce marketing Indore',
      'online store marketing',
      'Shopify marketing',
      'WooCommerce SEO',
      'ecommerce SEO',
      'product listing ads',
      'shopping ads',
      'conversion optimization',
      'Indore ecommerce',
      'MP online marketing',
    ],
    h1: 'eCommerce Marketing Services',
    ogType: 'service',
    schema: 'service',
  },

  // ANALYTICS & REPORTING
  '/services/analytics-reporting': {
    title: 'Analytics & Reporting Services in Indore - Data-Driven Insights',
    description: 'Comprehensive analytics and reporting services in Indore. Track performance, measure ROI, and gain actionable insights with Google Analytics, dashboards, and custom reports.',
    keywords: [
      'analytics services Indore',
      'Google Analytics',
      'marketing analytics',
      'performance tracking',
      'data analysis',
      'ROI measurement',
      'custom dashboards',
      'marketing reports',
      'Indore analytics',
      'MP data services',
    ],
    h1: 'Analytics & Reporting Services',
    ogType: 'service',
    schema: 'service',
  },

  // BTL ACTIVATIONS
  '/services/btl-activations': {
    title: 'BTL Activations in Indore - Brand Events & Experiential Marketing',
    description: 'Below-the-line activation services in Indore. Create memorable brand experiences through events, exhibitions, mall activations, and experiential marketing campaigns.',
    keywords: [
      'BTL activations Indore',
      'event marketing',
      'experiential marketing',
      'brand activations',
      'mall activations',
      'trade shows',
      'product sampling',
      'brand events',
      'Indore events',
      'MP activations',
    ],
    h1: 'BTL Activations & Experiential Marketing',
    ogType: 'service',
    schema: 'service',
  },

  // OOH ADVERTISING
  '/services/ooh-advertising': {
    title: 'OOH Advertising in Indore - Billboards, Transit & Outdoor Media',
    description: 'Out-of-home advertising services in Indore. Create impactful billboard, transit, and digital outdoor campaigns that capture attention across the city.',
    keywords: [
      'OOH advertising Indore',
      'outdoor advertising',
      'billboard advertising',
      'transit ads',
      'digital billboards',
      'street advertising',
      'outdoor media',
      'hoarding ads',
      'Indore billboards',
      'MP outdoor ads',
    ],
    h1: 'Out-of-Home (OOH) Advertising Services',
    ogType: 'service',
    schema: 'service',
  },

  // INFLUENCER MARKETING
  '/services/influencer-marketing': {
    title: 'Influencer Marketing in Indore - Instagram, YouTube Influencers',
    description: 'Strategic influencer marketing in Indore. Connect with Instagram, YouTube, and local influencers to amplify your brand reach and drive authentic engagement.',
    keywords: [
      'influencer marketing Indore',
      'Instagram influencers',
      'YouTube influencers',
      'influencer campaigns',
      'brand collaborations',
      'influencer outreach',
      'social media influencers',
      'micro influencers',
      'Indore influencer marketing',
      'MP influencer agency',
    ],
    h1: 'Influencer Marketing Services',
    ogType: 'service',
    schema: 'service',
  },

  // --------------------------------------------------------------------------
  // SERVICE SUB-PAGES (11 Specialized Services)
  // --------------------------------------------------------------------------

  // SEO SUB-SERVICES
  '/services/seo/local-seo': {
    title: 'Local SEO Services in Indore - Rank in Google Maps & Local Search',
    description: 'Expert local SEO services in Indore. Dominate Google Maps, local search results, and Google My Business. Get more local customers with proven local SEO strategies.',
    keywords: [
      'local SEO Indore',
      'local SEO services',
      'Google Maps ranking',
      'Google My Business optimization',
      'local search optimization',
      'local citations',
      'Indore local SEO',
      'near me searches',
      'local business SEO',
      'MP local SEO',
    ],
    h1: 'Local SEO Services in Indore',
    ogType: 'service',
    schema: 'service',
  },

  '/services/seo/technical-seo': {
    title: 'Technical SEO Services in Indore - Site Speed, Core Web Vitals',
    description: 'Advanced technical SEO services in Indore. Optimize site speed, Core Web Vitals, crawlability, indexing, and technical performance for higher Google rankings.',
    keywords: [
      'technical SEO Indore',
      'technical SEO services',
      'Core Web Vitals',
      'site speed optimization',
      'crawl optimization',
      'schema markup',
      'structured data',
      'XML sitemap',
      'Indore technical SEO',
      'MP SEO expert',
    ],
    h1: 'Technical SEO Services',
    ogType: 'service',
    schema: 'service',
  },

  // PPC SUB-SERVICES
  '/services/ppc/google-shopping': {
    title: 'Google Shopping Ads in Indore - Product Listing Ads & Shopping Campaigns',
    description: 'Expert Google Shopping Ads management in Indore. Maximize product visibility with optimized shopping campaigns, product feeds, and merchant center management.',
    keywords: [
      'Google Shopping Ads',
      'product listing ads',
      'shopping campaigns',
      'Google Merchant Center',
      'product feed optimization',
      'shopping ads Indore',
      'ecommerce PPC',
      'product ads',
      'Indore shopping ads',
      'MP Google Shopping',
    ],
    h1: 'Google Shopping Ads Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/ppc/display-ads': {
    title: 'Display Advertising in Indore - Banner Ads & Remarketing Campaigns',
    description: 'Strategic display advertising services in Indore. Create eye-catching banner ads, remarketing campaigns, and display network ads that drive conversions.',
    keywords: [
      'display advertising Indore',
      'banner ads',
      'display network',
      'remarketing campaigns',
      'retargeting ads',
      'visual advertising',
      'Google Display Ads',
      'programmatic advertising',
      'Indore display ads',
      'MP banner advertising',
    ],
    h1: 'Display Advertising Services',
    ogType: 'service',
    schema: 'service',
  },

  // SOCIAL MEDIA SUB-SERVICES
  '/services/social-media/instagram': {
    title: 'Instagram Marketing in Indore - Grow Followers & Drive Engagement',
    description: 'Professional Instagram marketing services in Indore. Grow followers, increase engagement, create stunning content, run Instagram ads, and build your brand presence.',
    keywords: [
      'Instagram marketing Indore',
      'Instagram advertising',
      'Instagram growth',
      'Instagram content creation',
      'Instagram ads',
      'influencer marketing',
      'social media management',
      'Indore Instagram marketing',
      'MP Instagram ads',
    ],
    h1: 'Instagram Marketing Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/social-media/facebook': {
    title: 'Facebook Marketing in Indore - Ads, Page Management & Growth',
    description: 'Expert Facebook marketing services in Indore. Run high-converting Facebook ads, manage business pages, grow followers, and engage your audience effectively.',
    keywords: [
      'Facebook marketing Indore',
      'Facebook advertising',
      'Facebook ads',
      'Facebook page management',
      'social media marketing',
      'Meta ads',
      'Facebook campaigns',
      'Indore Facebook marketing',
      'MP Facebook ads',
    ],
    h1: 'Facebook Marketing Services',
    ogType: 'service',
    schema: 'service',
  },

  // CONTENT SUB-SERVICES
  '/services/content/copywriting': {
    title: 'Professional Copywriting Services in Indore - Web, Ads & Sales Copy',
    description: 'Expert copywriting services in Indore. Create persuasive website copy, ad copy, sales letters, email copy, and content that converts visitors into customers.',
    keywords: [
      'copywriting services Indore',
      'professional copywriter',
      'web copywriting',
      'ad copywriting',
      'sales copy',
      'content writing',
      'SEO copywriting',
      'persuasive writing',
      'Indore copywriter',
      'MP copywriting services',
    ],
    h1: 'Professional Copywriting Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/content/blog-writing': {
    title: 'Blog Writing Services in Indore - SEO Blogs & Article Writing',
    description: 'Professional blog writing services in Indore. Create SEO-optimized blog posts, articles, and content that ranks on Google and engages your audience.',
    keywords: [
      'blog writing services Indore',
      'article writing',
      'blog post writing',
      'SEO blog writing',
      'content creation',
      'blog writers',
      'article writers',
      'Indore blog writing',
      'MP content services',
    ],
    h1: 'Blog Writing Services',
    ogType: 'service',
    schema: 'service',
  },

  // WEB DEVELOPMENT SUB-SERVICES
  '/services/web-design/ecommerce': {
    title: 'eCommerce Development in Indore - Shopify, WooCommerce, Custom Stores',
    description: 'Expert ecommerce development services in Indore. Build high-converting online stores with Shopify, WooCommerce, or custom ecommerce solutions.',
    keywords: [
      'ecommerce development Indore',
      'Shopify development',
      'WooCommerce development',
      'online store development',
      'ecommerce website',
      'shopping cart development',
      'custom ecommerce',
      'Indore ecommerce developer',
      'MP online store',
    ],
    h1: 'eCommerce Development Services',
    ogType: 'service',
    schema: 'service',
  },

  '/services/web-design/wordpress': {
    title: 'WordPress Development in Indore - Custom Themes & Plugins',
    description: 'Professional WordPress development services in Indore. Build custom WordPress websites, themes, plugins, and optimized solutions for businesses and blogs.',
    keywords: [
      'WordPress development Indore',
      'WordPress developer',
      'custom WordPress',
      'WordPress themes',
      'WordPress plugins',
      'WordPress website',
      'WP development',
      'Indore WordPress developer',
      'MP WordPress services',
    ],
    h1: 'WordPress Development Services',
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

  '/industries/technology': {
    title: 'Technology Marketing in Indore - SaaS, IT & Software Solutions',
    description: 'Technology marketing services in Indore. Drive growth for SaaS, IT services, and software companies with specialized B2B and B2C strategies.',
    keywords: [
      'technology marketing Indore',
      'SaaS marketing',
      'IT services marketing',
      'software company marketing',
      'tech startup marketing',
      'B2B technology marketing',
      'Indore tech marketing',
      'MP software marketing',
      'startup growth',
    ],
    h1: 'Technology & SaaS Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/ecommerce': {
    title: 'E-Commerce Marketing in Indore - Online Store Growth Strategies',
    description: 'E-commerce marketing services in Indore. Increase sales for online stores, marketplaces, and D2C brands with conversion optimization and customer acquisition.',
    keywords: [
      'ecommerce marketing Indore',
      'online store marketing',
      'D2C marketing',
      'marketplace optimization',
      'ecommerce SEO',
      'conversion optimization',
      'Indore ecommerce services',
      'MP online store marketing',
      'product page optimization',
    ],
    h1: 'E-Commerce Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/finance': {
    title: 'Finance Marketing in Indore - Banks, NBFC & Fintech Solutions',
    description: 'Financial services marketing in Indore. Compliant marketing strategies for banks, NBFCs, insurance, fintech, and investment firms.',
    keywords: [
      'finance marketing Indore',
      'banking marketing',
      'fintech marketing',
      'NBFC marketing',
      'insurance marketing',
      'financial services advertising',
      'Indore finance marketing',
      'MP banking marketing',
      'compliant financial advertising',
    ],
    h1: 'Finance & Banking Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/hospitality': {
    title: 'Hospitality Marketing in Indore - Hotels, Restaurants & Tourism',
    description: 'Hospitality marketing services in Indore. Increase bookings and orders for hotels, resorts, restaurants, cafes, and cloud kitchens.',
    keywords: [
      'hospitality marketing Indore',
      'hotel marketing',
      'restaurant marketing',
      'cafe marketing',
      'tourism marketing',
      'food delivery marketing',
      'Indore hotel marketing',
      'MP restaurant marketing',
      'booking optimization',
    ],
    h1: 'Hospitality & Tourism Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/automotive': {
    title: 'Automotive Marketing in Indore - Dealerships & Service Centers',
    description: 'Automotive marketing services in Indore. Drive test drives, bookings, and service appointments for dealerships, service centers, and accessories.',
    keywords: [
      'automotive marketing Indore',
      'car dealership marketing',
      'auto service marketing',
      'vehicle marketing',
      'test drive campaigns',
      'automotive advertising',
      'Indore auto marketing',
      'MP car dealership marketing',
      'service booking optimization',
    ],
    h1: 'Automotive Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/fashion': {
    title: 'Fashion Marketing in Indore - Clothing, Jewelry & Retail Brands',
    description: 'Fashion marketing services in Indore. Grow clothing brands, jewelry, accessories, and lifestyle products with social commerce and e-commerce strategies.',
    keywords: [
      'fashion marketing Indore',
      'clothing brand marketing',
      'jewelry marketing',
      'retail marketing',
      'fashion ecommerce',
      'lifestyle brand marketing',
      'Indore fashion marketing',
      'MP apparel marketing',
      'social commerce fashion',
    ],
    h1: 'Fashion & Retail Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/legal': {
    title: 'Legal Marketing in Indore - Law Firms & Corporate Legal Services',
    description: 'Legal services marketing in Indore. Professional content marketing and lead generation for law firms, corporate legal services, and compliance consultants.',
    keywords: [
      'legal marketing Indore',
      'law firm marketing',
      'lawyer marketing',
      'legal SEO',
      'attorney marketing',
      'legal content marketing',
      'Indore law firm marketing',
      'MP legal services marketing',
      'professional legal advertising',
    ],
    h1: 'Legal Services Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/manufacturing': {
    title: 'Manufacturing Marketing in Indore - B2B Industrial Solutions',
    description: 'Manufacturing marketing services in Indore. B2B marketing and lead generation for industrial manufacturing, suppliers, and distributors.',
    keywords: [
      'manufacturing marketing Indore',
      'industrial marketing',
      'B2B manufacturing marketing',
      'factory marketing',
      'supplier marketing',
      'industrial SEO',
      'Indore manufacturing marketing',
      'MP industrial marketing',
      'B2B lead generation',
    ],
    h1: 'Manufacturing & Industrial Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/agriculture': {
    title: 'Agriculture Marketing in Indore - Agritech & Farming Solutions',
    description: 'Agriculture marketing services in Indore. Rural and urban market strategies for agritech, farming equipment, organic products, and food processing.',
    keywords: [
      'agriculture marketing Indore',
      'agritech marketing',
      'farming equipment marketing',
      'organic products marketing',
      'food processing marketing',
      'rural marketing',
      'Indore agriculture marketing',
      'MP farming marketing',
      'agribusiness marketing',
    ],
    h1: 'Agriculture & Agritech Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/logistics': {
    title: 'Logistics Marketing in Indore - Shipping & Supply Chain Solutions',
    description: 'Logistics marketing services in Indore. SEO and digital marketing for shipping, courier services, warehousing, and supply chain companies.',
    keywords: [
      'logistics marketing Indore',
      'shipping company marketing',
      'courier service marketing',
      'warehousing marketing',
      'supply chain marketing',
      'transportation marketing',
      'Indore logistics marketing',
      'MP shipping marketing',
      'delivery service marketing',
    ],
    h1: 'Logistics & Supply Chain Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/construction': {
    title: 'Construction Marketing in Indore - Builders & Contractors',
    description: 'Construction marketing services in Indore. Project lead generation and brand building for builders, contractors, interior designers, and architects.',
    keywords: [
      'construction marketing Indore',
      'builder marketing',
      'contractor marketing',
      'interior design marketing',
      'architecture marketing',
      'construction lead generation',
      'Indore construction marketing',
      'MP builder marketing',
      'project marketing',
    ],
    h1: 'Construction & Architecture Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/retail': {
    title: 'Retail Marketing in Indore - Local Stores & Franchise Businesses',
    description: 'Retail marketing services in Indore. Local SEO and foot traffic generation for brick-and-mortar stores, franchises, and local shops.',
    keywords: [
      'retail marketing Indore',
      'local store marketing',
      'franchise marketing',
      'brick and mortar marketing',
      'local SEO retail',
      'foot traffic generation',
      'Indore retail marketing',
      'MP store marketing',
      'local business marketing',
    ],
    h1: 'Retail Store Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/energy': {
    title: 'Energy Marketing in Indore - Solar, Renewables & Utilities',
    description: 'Energy sector marketing in Indore. B2B lead generation for solar, renewable energy, energy consultants, and utility companies.',
    keywords: [
      'energy marketing Indore',
      'solar marketing',
      'renewable energy marketing',
      'utility marketing',
      'energy consulting marketing',
      'green energy marketing',
      'Indore energy marketing',
      'MP solar marketing',
      'sustainable energy marketing',
    ],
    h1: 'Energy & Renewables Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/non-profit': {
    title: 'Non-Profit Marketing in Indore - NGO & Charity Solutions',
    description: 'Non-profit marketing services in Indore. Donor engagement and awareness campaigns for NGOs, charities, foundations, and social enterprises.',
    keywords: [
      'nonprofit marketing Indore',
      'NGO marketing',
      'charity marketing',
      'foundation marketing',
      'donor engagement',
      'cause marketing',
      'Indore NGO marketing',
      'MP charity marketing',
      'social enterprise marketing',
    ],
    h1: 'Non-Profit & NGO Marketing Solutions',
    ogType: 'website',
    schema: 'service',
  },

  '/industries/sports': {
    title: 'Sports Marketing in Indore - Gyms, Clubs & Fitness Centers',
    description: 'Sports and fitness marketing in Indore. Membership growth and community building for gyms, sports clubs, fitness coaches, and wellness centers.',
    keywords: [
      'sports marketing Indore',
      'fitness marketing',
      'gym marketing',
      'sports club marketing',
      'fitness coach marketing',
      'wellness center marketing',
      'Indore gym marketing',
      'MP sports marketing',
      'membership marketing',
    ],
    h1: 'Sports & Fitness Marketing Solutions',
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

  // --------------------------------------------------------------------------
  // COMPANY PAGES
  // --------------------------------------------------------------------------
  '/team': {
    title: 'Meet Our Team - Digital Marketing Experts in Indore',
    description: 'Meet the passionate team behind Inchtomilez. 50+ marketing experts, designers, developers, and strategists dedicated to your success.',
    keywords: [
      'marketing team Indore',
      'digital marketing experts',
      'agency team',
      'marketing professionals',
      'Indore agency team',
      'MP marketing experts',
    ],
    h1: 'Meet Our Team',
    ogType: 'website',
    schema: 'organization',
  },

  '/testimonials': {
    title: 'Client Success Stories & Reviews - Real Results from Real Businesses',
    description: '96+ satisfied clients share their success stories. Read authentic testimonials and case studies from businesses that grew with our digital marketing services.',
    keywords: [
      'client testimonials',
      'customer reviews',
      'success stories',
      'case studies',
      'client feedback',
      'agency reviews Indore',
      'marketing results',
      'client satisfaction',
    ],
    h1: 'Client Success Stories',
    ogType: 'website',
    schema: 'organization',
  },

  '/case-studies': {
    title: 'Digital Marketing Case Studies - Proven Results & ROI',
    description: 'Detailed case studies showcasing real results, strategies, and ROI. Learn how we helped businesses achieve 200%+ growth through digital marketing.',
    keywords: [
      'marketing case studies',
      'digital marketing results',
      'campaign success stories',
      'ROI case studies',
      'marketing proof',
      'real results',
      'Indore case studies',
    ],
    h1: 'Digital Marketing Case Studies',
    ogType: 'website',
    schema: 'organization',
  },

  '/portfolio': {
    title: 'Portfolio of Excellence - Our Best Work & Client Projects',
    description: 'Explore our portfolio of successful projects across industries. See designs, campaigns, websites, and marketing materials we have created for clients.',
    keywords: [
      'marketing portfolio',
      'agency work',
      'client projects',
      'design portfolio',
      'campaign examples',
      'Indore portfolio',
    ],
    h1: 'Portfolio of Excellence',
    ogType: 'website',
    schema: 'organization',
  },

  '/careers': {
    title: 'Careers at Inchtomilez - Join Our Marketing Team in Indore',
    description: 'Join India\'s fastest-growing digital marketing agency. Explore career opportunities for marketers, designers, developers, and strategists in Indore.',
    keywords: [
      'marketing jobs Indore',
      'digital marketing careers',
      'agency jobs',
      'marketing positions',
      'Indore careers',
      'MP marketing jobs',
    ],
    h1: 'Join Our Team',
    ogType: 'website',
    schema: 'organization',
  },

  '/press': {
    title: 'Press & Media - News, Coverage & Industry Recognition',
    description: 'Latest press releases, media coverage, and industry recognition. Stay updated with Inchtomilez news and achievements.',
    keywords: [
      'press releases',
      'media coverage',
      'agency news',
      'industry recognition',
      'marketing news Indore',
    ],
    h1: 'Press & Media',
    ogType: 'website',
    schema: 'organization',
  },

  '/partners': {
    title: 'Our Strategic Partners - Google, Meta & Technology Partnerships',
    description: 'Official partnerships with Google, Meta, and leading technology providers. Industry certifications and strategic alliances that benefit your business.',
    keywords: [
      'marketing partners',
      'Google Partner',
      'Meta Partner',
      'agency certifications',
      'technology partnerships',
      'Indore certified agency',
    ],
    h1: 'Our Strategic Partners',
    ogType: 'website',
    schema: 'organization',
  },

  '/awards': {
    title: 'Awards & Recognition - Industry Excellence & Achievements',
    description: 'Celebrating excellence in digital marketing. Our awards reflect commitment to delivering exceptional results for clients across India.',
    keywords: [
      'marketing awards',
      'agency recognition',
      'industry awards',
      'marketing excellence',
      'Indore awards',
    ],
    h1: 'Awards & Recognition',
    ogType: 'website',
    schema: 'organization',
  },

  // --------------------------------------------------------------------------
  // RESOURCE PAGES
  // --------------------------------------------------------------------------
  '/resources': {
    title: 'Free Marketing Resources - Templates, Guides & Tools',
    description: 'Access our comprehensive library of free digital marketing resources. Templates, guides, tools, and expert insights to grow your business.',
    keywords: [
      'marketing resources',
      'free templates',
      'marketing guides',
      'digital marketing tools',
      'Indore marketing resources',
    ],
    h1: 'Free Marketing Resources',
    ogType: 'website',
    schema: 'website',
  },

  '/downloads': {
    title: 'Free Downloads - Marketing Templates, Checklists & Guides',
    description: 'Download ready-to-use marketing templates, checklists, and guides. Professionally designed resources to accelerate your marketing efforts.',
    keywords: [
      'marketing downloads',
      'free templates',
      'marketing checklists',
      'downloadable guides',
      'marketing resources',
    ],
    h1: 'Free Downloads',
    ogType: 'website',
    schema: 'website',
  },

  '/ebooks': {
    title: 'Free Marketing eBooks - In-Depth Guides & Expert Insights',
    description: 'In-depth guides covering every aspect of digital marketing. Learn from industry experts with our comprehensive eBooks.',
    keywords: [
      'marketing ebooks',
      'free guides',
      'digital marketing books',
      'expert insights',
      'marketing education',
    ],
    h1: 'Free Marketing eBooks',
    ogType: 'website',
    schema: 'website',
  },

  '/webinars': {
    title: 'Free Marketing Webinars - Live Training & Expert Sessions',
    description: 'Join live training sessions with industry experts. Learn cutting-edge strategies, ask questions, and network with other marketers.',
    keywords: [
      'marketing webinars',
      'free training',
      'live sessions',
      'expert webinars',
      'digital marketing training',
    ],
    h1: 'Free Marketing Webinars',
    ogType: 'website',
    schema: 'website',
  },

  '/tools': {
    title: 'Free Marketing Tools - SEO, Analytics & Performance Tools',
    description: 'Powerful online tools to analyze, optimize, and improve your digital marketing performance. All free to use.',
    keywords: [
      'marketing tools',
      'free tools',
      'SEO tools',
      'analytics tools',
      'performance tools',
    ],
    h1: 'Free Marketing Tools',
    ogType: 'website',
    schema: 'website',
  },

  '/glossary': {
    title: 'Marketing Glossary - Terms, Definitions & Acronyms Explained',
    description: 'Comprehensive dictionary of digital marketing terms, acronyms, and definitions. Your guide to understanding marketing jargon.',
    keywords: [
      'marketing glossary',
      'marketing terms',
      'digital marketing definitions',
      'marketing dictionary',
      'SEO terms',
    ],
    h1: 'Marketing Glossary',
    ogType: 'website',
    schema: 'website',
  },

  // --------------------------------------------------------------------------
  // LEGAL PAGES
  // --------------------------------------------------------------------------
  '/privacy': {
    title: 'Privacy Policy - How We Protect Your Data | Inchtomilez',
    description: 'Our privacy policy explains how we collect, use, and protect your personal information. GDPR compliant and transparent data practices.',
    keywords: [
      'privacy policy',
      'data protection',
      'GDPR compliance',
      'personal information',
    ],
    h1: 'Privacy Policy',
    ogType: 'website',
    schema: 'website',
    noindex: false,
  },

  '/terms': {
    title: 'Terms of Service - Usage Terms & Conditions | Inchtomilez',
    description: 'Terms of service governing the use of our website and services. Clear, fair terms for all clients and visitors.',
    keywords: [
      'terms of service',
      'terms and conditions',
      'usage terms',
      'service agreement',
    ],
    h1: 'Terms of Service',
    ogType: 'website',
    schema: 'website',
    noindex: false,
  },

  '/cookies': {
    title: 'Cookie Policy - How We Use Cookies | Inchtomilez',
    description: 'Our cookie policy explains how we use cookies and similar technologies to improve your experience on our website.',
    keywords: [
      'cookie policy',
      'cookies usage',
      'website cookies',
      'tracking technologies',
    ],
    h1: 'Cookie Policy',
    ogType: 'website',
    schema: 'website',
    noindex: false,
  },

  '/disclaimer': {
    title: 'Disclaimer - Important Information About Our Services | Inchtomilez',
    description: 'Important information about our services, limitations, and no-guarantee policy. Read before engaging our services.',
    keywords: [
      'disclaimer',
      'service disclaimer',
      'important information',
      'limitations',
    ],
    h1: 'Disclaimer',
    ogType: 'website',
    schema: 'website',
    noindex: false,
  },

  '/refund': {
    title: 'Refund & Cancellation Policy - Fair Terms | Inchtomilez',
    description: 'Fair and transparent refund terms for our digital marketing services. Clear cancellation policy and refund conditions.',
    keywords: [
      'refund policy',
      'cancellation policy',
      'refund terms',
      'service refunds',
    ],
    h1: 'Refund & Cancellation Policy',
    ogType: 'website',
    schema: 'website',
    noindex: false,
  },

  // --------------------------------------------------------------------------
  // UTILITY PAGES
  // --------------------------------------------------------------------------
  '/sitemap': {
    title: 'HTML Sitemap - Complete Site Structure | Inchtomilez',
    description: 'Browse our complete site structure. Find all pages, services, resources, and content easily in one organized location.',
    keywords: [
      'sitemap',
      'site structure',
      'page directory',
      'site navigation',
    ],
    h1: 'Sitemap',
    ogType: 'website',
    schema: 'website',
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
