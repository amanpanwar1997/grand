import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogType?: 'website' | 'article' | 'service' | 'product';
  ogImage?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, any>;
  breadcrumb?: Array<{ name: string; url: string }>;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogType = 'website',
  ogImage = '/og-image.jpg',
  author,
  publishedTime,
  modifiedTime,
  structuredData,
  breadcrumb,
  noindex = false,
}: SEOHeadProps) {
  const location = useLocation();
  const baseUrl = 'https://www.inchtomilez.com';
  const fullUrl = canonical || `${baseUrl}${location.pathname}`;
  const fullTitle = title && title.includes('Inchtomilez') ? title : `${title || 'Inchtomilez'} | Inchtomilez Digital Marketing & Advertising Agency`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description);
    }
    if (keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }
    if (author) {
      updateMetaTag('author', author);
    }

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    if (description) {
      updateMetaTag('og:description', description, true);
    }
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('og:site_name', 'Inchtomilez Digital Marketing & Advertising Agency', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    if (description) {
      updateMetaTag('twitter:description', description);
    }
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

    // Article-specific tags
    if (ogType === 'article') {
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
      if (author) {
        updateMetaTag('article:author', author, true);
      }
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Robots meta - Optimized for maximum crawlability (or noindex if specified)
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    const robotsContent = noindex 
      ? 'noindex, nofollow' 
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    robotsTag.setAttribute('content', robotsContent);

    // Googlebot specific
    let googlebotTag = document.querySelector('meta[name="googlebot"]');
    if (!googlebotTag) {
      googlebotTag = document.createElement('meta');
      googlebotTag.setAttribute('name', 'googlebot');
      document.head.appendChild(googlebotTag);
    }
    googlebotTag.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Bingbot specific
    let bingbotTag = document.querySelector('meta[name="bingbot"]');
    if (!bingbotTag) {
      bingbotTag = document.createElement('meta');
      bingbotTag.setAttribute('name', 'bingbot');
      document.head.appendChild(bingbotTag);
    }
    bingbotTag.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Google Site Verification (placeholder - user should add their verification code)
    let googleVerification = document.querySelector('meta[name="google-site-verification"]');
    if (!googleVerification) {
      googleVerification = document.createElement('meta');
      googleVerification.setAttribute('name', 'google-site-verification');
      googleVerification.setAttribute('content', 'PLACEHOLDER_ADD_YOUR_VERIFICATION_CODE');
      document.head.appendChild(googleVerification);
    }

    // Bing Site Verification (placeholder - user should add their verification code)
    let bingVerification = document.querySelector('meta[name="msvalidate.01"]');
    if (!bingVerification) {
      bingVerification = document.createElement('meta');
      bingVerification.setAttribute('name', 'msvalidate.01');
      bingVerification.setAttribute('content', 'PLACEHOLDER_ADD_YOUR_VERIFICATION_CODE');
      document.head.appendChild(bingVerification);
    }

    // Yandex Site Verification (placeholder)
    let yandexVerification = document.querySelector('meta[name="yandex-verification"]');
    if (!yandexVerification) {
      yandexVerification = document.createElement('meta');
      yandexVerification.setAttribute('name', 'yandex-verification');
      yandexVerification.setAttribute('content', 'PLACEHOLDER_ADD_YOUR_VERIFICATION_CODE');
      document.head.appendChild(yandexVerification);
    }

    // Geo tags for local SEO
    updateMetaTag('geo.region', 'IN-MP');
    updateMetaTag('geo.placename', 'Indore');
    updateMetaTag('geo.position', '22.7196;75.8577');
    updateMetaTag('ICBM', '22.7196, 75.8577');

    // Rating (safe for all audiences)
    updateMetaTag('rating', 'general');

    // Referrer policy
    updateMetaTag('referrer', 'no-referrer-when-downgrade');

    // Viewport (ensure it exists)
    let viewportTag = document.querySelector('meta[name="viewport"]');
    if (!viewportTag) {
      viewportTag = document.createElement('meta');
      viewportTag.setAttribute('name', 'viewport');
      viewportTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewportTag);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        structuredDataScript.setAttribute('data-dynamic', 'true');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

    // Breadcrumb Structured Data
    if (breadcrumb && breadcrumb.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      };

      let breadcrumbScript = document.querySelector('script[type="application/ld+json"][data-breadcrumb="true"]');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-breadcrumb', 'true');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }

    // Alternate links for pagination (if needed)
    const currentPath = location.pathname;
    const pageMatch = currentPath.match(/\/page\/(\d+)/);
    if (pageMatch) {
      const currentPage = parseInt(pageMatch[1]);
      const basePath = currentPath.replace(/\/page\/\d+/, '');

      // Previous page
      if (currentPage > 1) {
        let prevLink = document.querySelector('link[rel="prev"]');
        if (!prevLink) {
          prevLink = document.createElement('link');
          prevLink.setAttribute('rel', 'prev');
          document.head.appendChild(prevLink);
        }
        const prevUrl = currentPage === 2 ? basePath : `${basePath}/page/${currentPage - 1}`;
        prevLink.setAttribute('href', `${baseUrl}${prevUrl}`);
      }

      // Next page
      let nextLink = document.querySelector('link[rel="next"]');
      if (!nextLink) {
        nextLink = document.createElement('link');
        nextLink.setAttribute('rel', 'next');
        document.head.appendChild(nextLink);
      }
      nextLink.setAttribute('href', `${baseUrl}${basePath}/page/${currentPage + 1}`);
    }

  }, [fullTitle, description, keywords, fullUrl, ogType, ogImage, author, publishedTime, modifiedTime, structuredData, breadcrumb, baseUrl, location.pathname, noindex]);

  return null;
}
