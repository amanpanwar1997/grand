// Utility to generate blog sitemap with all 224 properly-named blogs
// Run this to regenerate sitemap after blog title updates

import { getAllBlogTopics, getBlogUrl } from '../components/data/blogData';

export function generateBlogSitemapXML(): string {
  const baseUrl = 'https://inchtomilez.com';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  const topics = getAllBlogTopics();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
  <!-- Blog Main Page -->
  <url>
    <loc>${baseUrl}/blogs</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

`;

  // Group by category for organization
  const categories = [
    'SEO & Local SEO',
    'PPC & Google Ads',
    'Social Media Marketing',
    'Content Marketing',
    'Web Design & Development',
    'Branding & Creative',
    'Email Marketing',
    'Video & Media Production',
    'Analytics & Reporting',
    'E-commerce Marketing'
  ];

  categories.forEach(category => {
    const categoryTopics = topics.filter(t => t.category === category);
    
    if (categoryTopics.length > 0) {
      xml += `  <!-- ${category} Articles (${categoryTopics.length} posts) -->\n`;
      
      categoryTopics.forEach(topic => {
        const url = getBlogUrl(topic);
        const priority = topic.featured ? '0.8' : topic.trending ? '0.75' : '0.7';
        
        xml += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
      });
      
      xml += '\n';
    }
  });

  xml += '</urlset>';
  
  return xml;
}

// Generate and log the sitemap (for copy-paste into sitemap file)
if (typeof window === 'undefined') {
  console.log(generateBlogSitemapXML());
}

export default generateBlogSitemapXML;
