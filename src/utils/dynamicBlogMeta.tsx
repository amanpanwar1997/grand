/**
 * Dynamic Blog Metadata Generator
 * Automatically generates titles, descriptions, and SEO metadata from blog slugs
 * for both existing and future blog pages
 */

/**
 * Convert slug to human-readable title
 * Examples:
 * - "seo-topic-17" → "SEO Topic 17"
 * - "link-building-guide" → "Link Building Guide"
 * - "best-ppc-roi" → "Best PPC ROI"
 */
export function slugToTitle(slug: string): string {
  if (!slug) return '';
  
  // Decode percent-encoding
  let decoded = decodeURIComponent(slug);
  
  // Replace dashes and underscores with spaces
  let words = decoded.replace(/[-_]/g, ' ').trim();
  
  // Split into words
  let wordArray = words.split(/\s+/);
  
  // List of acronyms to keep uppercase
  const acronyms = new Set([
    'SEO', 'PPC', 'ROI', 'API', 'HTML', 'CSS', 'JS', 'URL', 'CTA', 'CMS',
    'SEM', 'SMM', 'GMB', 'UX', 'UI', 'B2B', 'B2C', 'KPI', 'AI', 'ML',
    'CRO', 'CPM', 'CPC', 'CTR', 'SERP', 'GMB', 'FAQ', 'PDF', 'JSON', 'XML'
  ]);
  
  // Capitalize each word, preserving acronyms
  wordArray = wordArray.map(word => {
    const upperWord = word.toUpperCase();
    
    // Check if it's a known acronym
    if (acronyms.has(upperWord)) {
      return upperWord;
    }
    
    // Regular title case
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  
  return wordArray.join(' ');
}

/**
 * Generate SEO-friendly meta description from title
 */
export function generateMetaDescription(title: string, category?: string): string {
  const baseDescription = `${title} — Expert insights and actionable strategies for digital marketing success.`;
  
  if (category) {
    const categoryText = category.toLowerCase();
    return `${title} — Comprehensive guide to ${categoryText}. Learn proven strategies and best practices from industry experts at Inchtomilez.`;
  }
  
  return baseDescription;
}

/**
 * Generate keywords from slug and category
 */
export function generateKeywords(slug: string, category?: string): string[] {
  const title = slugToTitle(slug);
  const words = title.split(' ').filter(w => w.length > 3); // Skip short words
  
  const keywords = [
    title,
    ...words,
    'digital marketing',
    'Inchtomilez',
  ];
  
  if (category) {
    keywords.push(category);
    keywords.push(`${category} guide`);
  }
  
  return Array.from(new Set(keywords)); // Remove duplicates
}

/**
 * Generate full page title with site name
 */
export function generatePageTitle(title: string, siteName: string = 'Inchtomilez'): string {
  return `${title} | ${siteName}`;
}

/**
 * Generate canonical URL from slug and category
 */
export function generateCanonicalUrl(category: string, slug: string, baseUrl: string = 'https://inchtomilez.com'): string {
  return `${baseUrl}/blogs/${category}/${slug}`;
}

/**
 * Complete blog metadata generator
 * Returns all metadata needed for a blog page
 */
export interface BlogMetadata {
  title: string;
  pageTitle: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  h1: string;
}

export function generateBlogMetadata(
  slug: string,
  category: string,
  baseUrl: string = 'https://inchtomilez.com'
): BlogMetadata {
  const title = slugToTitle(slug);
  const pageTitle = generatePageTitle(title);
  const description = generateMetaDescription(title, category);
  const keywords = generateKeywords(slug, category);
  const canonicalUrl = generateCanonicalUrl(category, slug, baseUrl);
  
  return {
    title,
    pageTitle,
    description,
    keywords,
    canonicalUrl,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonicalUrl,
    h1: title,
  };
}

/**
 * Extract category name from slug
 * Examples:
 * - "seo" → "SEO & Local SEO"
 * - "social-media" → "Social Media Marketing"
 */
export function categorySlugToName(categorySlug: string): string {
  const mappings: Record<string, string> = {
    'seo': 'SEO & Local SEO',
    'paid-advertising': 'Paid Advertising & PPC',
    'social-media': 'Social Media Marketing',
    'content-marketing': 'Content Marketing & Copywriting',
    'email-marketing': 'Email Marketing & Automation',
    'analytics': 'Analytics & Data Insights',
    'e-commerce': 'E-commerce & Online Stores',
    'branding': 'Branding & Creative Design',
    'web-development': 'Web Development & Tech',
    'growth-hacking': 'Growth Hacking & Conversion',
  };
  
  return mappings[categorySlug] || slugToTitle(categorySlug);
}

/**
 * Validate if a slug is safe and well-formed
 */
export function isValidSlug(slug: string): boolean {
  // Allow letters, numbers, dashes, and underscores
  const slugPattern = /^[a-z0-9-_]+$/i;
  return slugPattern.test(slug) && slug.length > 0 && slug.length <= 200;
}

/**
 * Sanitize user input to create valid slug
 */
export function sanitizeToSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')          // Replace spaces with dashes
    .replace(/[^a-z0-9-_]/g, '')   // Remove invalid characters
    .replace(/-+/g, '-')           // Collapse multiple dashes
    .replace(/^-|-$/g, '');        // Remove leading/trailing dashes
}

/**
 * Generate structured data (JSON-LD) for blog post
 */
export function generateBlogStructuredData(
  metadata: BlogMetadata,
  publishDate?: string,
  modifiedDate?: string,
  author: string = 'Inchtomilez Team'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: metadata.title,
    description: metadata.description,
    url: metadata.canonicalUrl,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://inchtomilez.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Inchtomilez',
      url: 'https://inchtomilez.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://inchtomilez.com/logo.png',
      },
    },
    datePublished: publishDate || new Date().toISOString(),
    dateModified: modifiedDate || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': metadata.canonicalUrl,
    },
    keywords: metadata.keywords.join(', '),
  };
}
