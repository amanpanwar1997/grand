import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, Award, Megaphone, Globe, Shield, Users, BarChart3, Search, Target, Zap, Mail, MessageSquare, Video, MapPin, Star, Clock, Phone } from 'lucide-react';
import { SEOHead } from '../SEOHead';
import { useSEO } from '../../utils/seoConfig';
import { StructuredData, organizationSchema, getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from '../../utils/structuredData';

export function ServiceDetailPage() {
  const { slug } = useParams();

  const getServiceContent = () => {
    const services: Record<string, any> = {
      'digital-marketing': {
        title: 'Digital Marketing Services',
        metaDescription: 'Grow your business with smart, honest & result-driven digital marketing. SEO, PPC, Social Media, Content Marketing & more.',
        
        // SECTION 1: HERO
        hero: {
          headline: 'Grow Your Business With Smart, Honest & Result-Driven Digital Marketing',
          subheadline: 'We help brands get visible, trusted, and chosen online with strategies built for long-term growth, better engagement, and meaningful results.',
          badges: ['More Visibility', 'More Trust', 'More Customers'],
          description: 'If you want marketing that feels structured, smart, and sustainable — you're in the right place.',
        },

        // SECTION 2: TRUST BAR
        trustBar: [
          '100+ Brands Supported',
          'Multi-Industry Experience',
          'Transparent Reporting',
          'Strategy + Execution in One Place',
          'Customer-First Approach',
        ],

        // SECTION 3: ALL SERVICES OVERVIEW
        servicesOverview: {
          title: 'All Digital Growth Services Under One Roof',
          services: [
            {
              icon: Search,
              title: 'Visibility & SEO',
              items: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'GMB Growth', 'Content SEO'],
            },
            {
              icon: Target,
              title: 'Paid Advertising',
              items: ['Google Ads', 'Meta Ads', 'YouTube Ads', 'Shopping Ads', 'Retargeting'],
            },
            {
              icon: Users,
              title: 'Social Media Growth',
              items: ['Content Planning', 'Design & Creatives', 'Reels & Video', 'Community Management'],
            },
            {
              icon: Globe,
              title: 'Website & Conversions',
              items: ['Landing Pages', 'UI/UX Optimization', 'Funnel Building', 'CRO'],
            },
            {
              icon: Zap,
              title: 'Automation & CRM',
              items: ['Email Marketing', 'WhatsApp Marketing', 'CRM Setup', 'Chat Automation'],
            },
            {
              icon: Award,
              title: 'Brand & Reputation',
              items: ['Brand Strategy', 'ORM', 'Reviews', 'Influencer Collaboration'],
            },
            {
              icon: BarChart3,
              title: 'Analytics & Insights',
              items: ['Tracking Setup', 'GA4', 'Dashboards', 'Monthly Insights'],
            },
          ],
        },

        // SECTION 4: WHY BUSINESSES NEED HELP
        whyNeedHelp: {
          title: 'Why Businesses Look for Digital Help',
          description: 'Because having a business online is not enough anymore.',
          points: [
            'Seen by the right people',
            'Trusted enough to be shortlisted',
            'Easy to choose from',
            'Worth coming back to',
          ],
          conclusion: 'That is exactly what we build with you.',
        },

        // SECTION 5: OUR APPROACH
        approach: {
          title: 'Our Approach',
          dontBelieve: [
            'Random posting',
            'One-size-fits-all plans',
            'Confusing analytics without meaning',
          ],
          believe: [
            'Understanding your business goal',
            'Making marketing simple and structured',
            'Focusing on efforts that bring outcomes',
            'Sharing progress clearly and honestly',
          ],
        },

        // SECTION 6: HOW WE SUPPORT GROWTH
        supportGrowth: {
          title: 'How We Support Your Growth',
          steps: [
            { title: 'Build Visibility', description: 'where your audience searches' },
            { title: 'Create Engagement', description: 'with meaningful content' },
            { title: 'Generate Enquiries', description: 'through smart campaigns' },
            { title: 'Improve Conversions', description: 'using data & optimization' },
            { title: 'Track & Improve', description: 'month by month' },
          ],
          tagline: 'A smooth, stress-free, impact-focused system.',
        },

        // SECTIONS 7-20: INDIVIDUAL SERVICES
        individualServices: [
          {
            title: 'SEO (Search Engine Optimization)',
            subtitle: 'Becomes your long-term source of quality traffic.',
            icon: Search,
            benefits: [
              'Cleaner website structure',
              'Better rankings for relevant searches',
              'Content aligned with customer intent',
              'Improved local and map visibility',
            ],
          },
          {
            title: 'Local SEO & Google Business',
            subtitle: 'Ideal for businesses that want customers nearby.',
            icon: MapPin,
            benefits: [
              'Strong Google Business Profile',
              'Local search visibility',
              'More calls, visits, and enquiries',
            ],
          },
          {
            title: 'Google Ads',
            subtitle: 'Designed for faster reach and filtered audience targeting.',
            icon: Target,
            benefits: [
              'Budget used efficiently',
              'Search-based customer targeting',
              'Continuous performance improvement',
            ],
          },
          {
            title: 'Meta Ads (Facebook + Instagram)',
            subtitle: 'Used to introduce, engage, and convert your audience.',
            icon: Users,
            benefits: [
              'Interest & behavior targeting',
              'Creative ad storytelling',
              'Measured outcomes, clear tracking',
            ],
          },
          {
            title: 'YouTube & Video Ads',
            subtitle: 'To build familiarity and trust through visuals.',
            icon: Video,
            benefits: [
              'Meaningful video messaging',
              'Connect with the right viewer group',
              'Strengthen brand recall',
            ],
          },
          {
            title: 'Social Media Management',
            subtitle: 'Not just posting — building ongoing engagement.',
            icon: MessageSquare,
            benefits: [
              'Monthly content planning',
              'Professional creatives',
              'Audience interaction',
              'Trend-aligned approach',
            ],
          },
          {
            title: 'Content Creation',
            subtitle: 'Content that represents your brand clearly and confidently.',
            icon: Award,
            benefits: [
              'Posts, reels, carousels, captions',
              'Brand-focused communication',
              'Designed for real engagement',
            ],
          },
          {
            title: 'Email Marketing',
            subtitle: 'To nurture, educate, and reconnect with your audience.',
            icon: Mail,
            benefits: [
              'Automated email journeys',
              'Personalized communication',
              'Higher repeat engagement',
            ],
          },
          {
            title: 'WhatsApp & SMS Marketing',
            subtitle: 'Because direct communication still works best.',
            icon: MessageSquare,
            benefits: [
              'Quick updates',
              'Offers & reminders',
              'Higher open rates',
            ],
          },
          {
            title: 'Landing Pages & Funnels',
            subtitle: 'Pages built to guide visitors toward enquiry or purchase.',
            icon: Globe,
            benefits: [
              'Clear messaging',
              'Simple user flow',
              'Action-focused layout',
            ],
          },
          {
            title: 'Conversion Optimization',
            subtitle: 'Helping more of your visitors take action.',
            icon: TrendingUp,
            benefits: [
              'Behavior tracking',
              'Page improvements',
              'A/B testing when needed',
            ],
          },
          {
            title: 'Automation & CRM',
            subtitle: 'Less manual work, more customer care.',
            icon: Zap,
            benefits: [
              'Automated follow-ups',
              'Better lead management',
              'Faster response cycles',
            ],
          },
          {
            title: 'Online Reputation',
            subtitle: 'Building trust where it matters most.',
            icon: Shield,
            benefits: [
              'Review management',
              'Positive digital presence',
              'Brand credibility support',
            ],
          },
          {
            title: 'Influencer Support',
            subtitle: 'Collaborations that feel natural and aligned.',
            icon: Users,
            benefits: [
              'Relevant creator partnerships',
              'Authentic audience reach',
              'Brand right-fit approach',
            ],
          },
          {
            title: 'Analytics & Insights',
            subtitle: 'Simple, clear, useful reporting.',
            icon: BarChart3,
            benefits: [
              'Monthly performance overview',
              'What worked & what next',
              'Insights you can understand and trust',
            ],
          },
        ],

        // SECTION 21: WHAT YOU CAN EXPECT
        expectations: {
          title: 'What You Can Expect',
          subtitle: 'Not hype. Just realistic outcomes from consistent work:',
          outcomes: [
            'Better reach among the right audience',
            'More relevant enquiries',
            'Stronger brand trust',
            'Steady growth month on month',
            'Clear visibility into progress',
          ],
        },

        // SECTION 22: WHO THIS WORKS FOR
        idealFor: {
          title: 'Who This Works Best For',
          subtitle: 'Businesses that:',
          criteria: [
            'Want structured digital growth',
            'Prefer transparency',
            'Care about long-term results',
            'Want a dependable marketing partner',
          ],
        },

        // SECTION 23: CLOSING MESSAGE
        closingMessage: {
          title: 'Let's Build It Right',
          message: 'Digital growth is not about being loud. It's about being present, reliable, visible, and chosen.',
          tagline: 'We help you do that step by step — confidently and consistently.',
        },
      },

      // ADVERTISING SERVICE
      'advertising': {
        title: 'Advertising Services',
        metaDescription: 'Multi-channel advertising that delivers results. Google Ads, Meta Ads, LinkedIn, YouTube & more with transparent ROI tracking.',
        
        hero: {
          headline: 'Reach The Right People At The Right Time With Smart Advertising',
          subheadline: 'We help businesses generate quality leads and sales through well-planned, budget-efficient ad campaigns across Google, Meta, LinkedIn, and YouTube.',
          badges: ['Fast Results', 'Clear ROI', 'Expert Management'],
          description: 'If you want ads that work, not just ads that run — you're in the right place.',
        },

        trustBar: [
          '100+ Campaigns Managed',
          'Certified Ad Specialists',
          'Multi-Platform Expertise',
          'Daily Optimization',
          'Transparent Reporting',
        ],

        servicesOverview: {
          title: 'Complete Advertising Solutions',
          services: [
            {
              icon: Search,
              title: 'Google Ads',
              items: ['Search Ads', 'Display Ads', 'Shopping Ads', 'Performance Max', 'YouTube Ads'],
            },
            {
              icon: Users,
              title: 'Meta Advertising',
              items: ['Facebook Ads', 'Instagram Ads', 'Stories & Reels', 'Messenger Ads', 'Retargeting'],
            },
            {
              icon: Target,
              title: 'LinkedIn Ads',
              items: ['Sponsored Content', 'InMail', 'Lead Gen Forms', 'B2B Targeting', 'Account-Based Marketing'],
            },
            {
              icon: Video,
              title: 'Video Advertising',
              items: ['YouTube Ads', 'TikTok Ads', 'Instagram Reels', 'Facebook Video', 'Connected TV'],
            },
            {
              icon: TrendingUp,
              title: 'Remarketing',
              items: ['Website Visitors', 'Cart Abandoners', 'Email Lists', 'Dynamic Product Ads', 'Cross-Platform'],
            },
            {
              icon: Award,
              title: 'Creative Production',
              items: ['Ad Copywriting', 'Graphic Design', 'Video Production', 'A/B Testing', 'Landing Pages'],
            },
            {
              icon: BarChart3,
              title: 'Performance Tracking',
              items: ['Conversion Setup', 'ROI Tracking', 'Attribution', 'Real-Time Dashboards', 'Monthly Reports'],
            },
          ],
        },

        whyNeedHelp: {
          title: 'Why Advertising Matters',
          description: 'Organic reach takes time. When you need results faster:',
          points: [
            'Target specific audiences precisely',
            'Control your budget and spending',
            'Get measurable results quickly',
            'Scale what works profitably',
          ],
          conclusion: 'That's where strategic advertising becomes essential.',
        },

        approach: {
          title: 'Our Advertising Philosophy',
          dontBelieve: [
            'Set it and forget it campaigns',
            'Wasting budget on unqualified traffic',
            'Creative guesswork without testing',
          ],
          believe: [
            'Understanding your customer journey',
            'Testing, measuring, and optimizing daily',
            'Budget efficiency over vanity metrics',
            'Clear communication and honest reporting',
          ],
        },

        supportGrowth: {
          title: 'How We Run Your Campaigns',
          steps: [
            { title: 'Understand Goals', description: 'target audience & budget' },
            { title: 'Build Campaign', description: 'ad creatives & targeting setup' },
            { title: 'Launch & Monitor', description: 'track performance daily' },
            { title: 'Optimize Continuously', description: 'improve results week by week' },
            { title: 'Scale Winners', description: 'grow what works profitably' },
          ],
          tagline: 'Professional advertising management that respects your budget.',
        },

        individualServices: [
          {
            title: 'Google Search Ads',
            subtitle: 'Capture high-intent customers searching for your solutions.',
            icon: Search,
            benefits: [
              'Target specific search terms',
              'Appear above organic results',
              'Pay only for clicks',
              'Track every conversion',
            ],
          },
          {
            title: 'Google Shopping Ads',
            subtitle: 'For e-commerce businesses selling products online.',
            icon: Target,
            benefits: [
              'Product images in search results',
              'Price and availability shown',
              'Higher conversion rates',
              'Automated inventory sync',
            ],
          },
          {
            title: 'Display Advertising',
            subtitle: 'Build awareness across millions of websites.',
            icon: Globe,
            benefits: [
              'Visual banner ads',
              'Audience targeting',
              'Remarketing to visitors',
              'Cost-effective reach',
            ],
          },
          {
            title: 'Facebook & Instagram Ads',
            subtitle: 'Engage users where they spend most of their time.',
            icon: Users,
            benefits: [
              'Detailed audience targeting',
              'Visual storytelling',
              'Stories and Reels ads',
              'Engagement and conversions',
            ],
          },
          {
            title: 'LinkedIn Advertising',
            subtitle: 'Perfect for B2B companies targeting professionals.',
            icon: Target,
            benefits: [
              'Job title targeting',
              'Company and industry filters',
              'Lead gen forms',
              'Professional audience',
            ],
          },
          {
            title: 'YouTube Advertising',
            subtitle: 'Reach engaged viewers with video storytelling.',
            icon: Video,
            benefits: [
              'In-stream video ads',
              'Bumper ads (6 seconds)',
              'Discovery ads',
              'Detailed demographics',
            ],
          },
          {
            title: 'Remarketing Campaigns',
            subtitle: 'Reconnect with people who already know you.',
            icon: TrendingUp,
            benefits: [
              'Website visitors retargeting',
              'Cart abandonment recovery',
              'Email list targeting',
              'Higher conversion rates',
            ],
          },
          {
            title: 'Ad Creative Production',
            subtitle: 'Professional creatives that stop scrolling.',
            icon: Award,
            benefits: [
              'Compelling copywriting',
              'Eye-catching designs',
              'Video production',
              'A/B testing',
            ],
          },
          {
            title: 'Conversion Tracking',
            subtitle: 'Know exactly what's working.',
            icon: BarChart3,
            benefits: [
              'Pixel installation',
              'Event tracking',
              'ROI measurement',
              'Attribution modeling',
            ],
          },
        ],

        expectations: {
          title: 'What You Can Expect',
          subtitle: 'Realistic outcomes from professional ad management:',
          outcomes: [
            'Qualified leads within first few weeks',
            'Clear understanding of cost per acquisition',
            'Weekly performance updates',
            'Continuous optimization for better results',
            'Transparent ROI tracking',
          ],
        },

        idealFor: {
          title: 'Who This Works Best For',
          subtitle: 'Businesses that:',
          criteria: [
            'Need results faster than organic growth',
            'Have a clear product or service offer',
            'Want measurable, trackable outcomes',
            'Are ready to invest in growth',
          ],
        },

        closingMessage: {
          title: 'Let's Make Your Ad Budget Work Harder',
          message: 'Good advertising isn't about spending more. It's about spending smarter.',
          tagline: 'We help you reach the right people, with the right message, at the right cost.',
        },
      },

      // BRANDING SERVICE
      'branding': {
        title: 'Branding & Identity Services',
        metaDescription: 'Build a brand that stands out and stays remembered. Logo design, brand strategy, visual identity & complete brand guidelines.',
        
        hero: {
          headline: 'Build A Brand That Feels Right, Looks Professional & Stays Remembered',
          subheadline: 'We help businesses create clear, consistent, and professional brand identities that build trust and recognition in their market.',
          badges: ['Strategic Positioning', 'Visual Identity', 'Brand Guidelines'],
          description: 'If you want a brand that represents you properly — you're in the right place.',
        },

        trustBar: [
          '100+ Brands Created',
          '7+ Years Experience',
          'Full Ownership of Assets',
          'Trademark Support',
          'Revision-Friendly Process',
        ],

        servicesOverview: {
          title: 'Complete Branding Solutions',
          services: [
            {
              icon: Award,
              title: 'Brand Strategy',
              items: ['Market Research', 'Positioning', 'Target Audience', 'Competitor Analysis', 'Value Proposition'],
            },
            {
              icon: Target,
              title: 'Logo Design',
              items: ['Multiple Concepts', 'Vector Files', 'Color Variations', 'Icon & Wordmark', 'All Formats'],
            },
            {
              icon: Users,
              title: 'Visual Identity',
              items: ['Color Palette', 'Typography', 'Design Elements', 'Patterns', 'Photography Style'],
            },
            {
              icon: Shield,
              title: 'Brand Guidelines',
              items: ['Usage Rules', 'Do\'s & Don\'ts', 'Color Codes', 'Typography System', 'Application Examples'],
            },
            {
              icon: Globe,
              title: 'Brand Collateral',
              items: ['Business Cards', 'Letterheads', 'Email Signatures', 'Presentations', 'Marketing Materials'],
            },
            {
              icon: MessageSquare,
              title: 'Brand Voice',
              items: ['Tone of Voice', 'Messaging', 'Taglines', 'Brand Story', 'Communication Guidelines'],
            },
            {
              icon: Zap,
              title: 'Brand Launch',
              items: ['Go-to-Market', 'Internal Rollout', 'Training', 'Asset Delivery', 'Ongoing Support'],
            },
          ],
        },

        whyNeedHelp: {
          title: 'Why Branding Matters',
          description: 'Your brand is how people remember and choose you.',
          points: [
            'Stand out in crowded markets',
            'Build instant credibility',
            'Command better pricing',
            'Create lasting customer loyalty',
          ],
          conclusion: 'A strong brand is your most valuable long-term asset.',
        },

        approach: {
          title: 'Our Branding Process',
          dontBelieve: [
            'Logo design without strategy',
            'Generic templates and shortcuts',
            'Ignoring your business goals',
          ],
          believe: [
            'Strategy before design',
            'Understanding your market deeply',
            'Creating something timeless, not trendy',
            'Full transparency and collaboration',
          ],
        },

        supportGrowth: {
          title: 'How We Build Your Brand',
          steps: [
            { title: 'Discovery', description: 'understand your business & vision' },
            { title: 'Strategy', description: 'positioning & differentiation' },
            { title: 'Design', description: 'visual identity creation' },
            { title: 'Refinement', description: 'feedback & perfection' },
            { title: 'Delivery', description: 'assets & guidelines' },
          ],
          tagline: 'A thoughtful, collaborative process from start to finish.',
        },

        individualServices: [
          {
            title: 'Brand Strategy & Positioning',
            subtitle: 'The foundation of everything else.',
            icon: Target,
            benefits: [
              'Market research & analysis',
              'Target audience definition',
              'Competitive positioning',
              'Unique value proposition',
            ],
          },
          {
            title: 'Logo Design',
            subtitle: 'Your visual identity cornerstone.',
            icon: Award,
            benefits: [
              'Multiple design concepts',
              'Unlimited revisions',
              'Vector source files',
              'All format variations',
            ],
          },
          {
            title: 'Visual Identity System',
            subtitle: 'Complete design language for consistency.',
            icon: Users,
            benefits: [
              'Color palette system',
              'Typography hierarchy',
              'Design elements & patterns',
              'Application examples',
            ],
          },
          {
            title: 'Brand Guidelines',
            subtitle: 'Your brand rulebook for consistency.',
            icon: Shield,
            benefits: [
              'Comprehensive documentation',
              'Usage rules & examples',
              'Do\'s and don\'ts',
              'Team training support',
            ],
          },
          {
            title: 'Business Collateral',
            subtitle: 'Professional materials that represent you well.',
            icon: Globe,
            benefits: [
              'Business card design',
              'Letterhead templates',
              'Email signature',
              'Presentation templates',
            ],
          },
          {
            title: 'Brand Voice & Messaging',
            subtitle: 'How you communicate matters.',
            icon: MessageSquare,
            benefits: [
              'Tone of voice definition',
              'Key messaging pillars',
              'Tagline development',
              'Brand story crafting',
            ],
          },
          {
            title: 'Social Media Branding',
            subtitle: 'Consistent presence across platforms.',
            icon: Users,
            benefits: [
              'Profile images',
              'Cover designs',
              'Story templates',
              'Post templates',
            ],
          },
          {
            title: 'Packaging Design',
            subtitle: 'For product-based businesses.',
            icon: Target,
            benefits: [
              'Product packaging',
              'Label design',
              'Box and bottle design',
              'Print-ready files',
            ],
          },
          {
            title: 'Rebranding Services',
            subtitle: 'When it's time to evolve your brand.',
            icon: TrendingUp,
            benefits: [
              'Brand audit',
              'Transition strategy',
              'Asset recreation',
              'Migration support',
            ],
          },
          {
            title: 'Trademark Support',
            subtitle: 'Protect your brand legally.',
            icon: Shield,
            benefits: [
              'Trademark search',
              'Filing assistance',
              'Legal documentation',
              'Registration guidance',
            ],
          },
        ],

        expectations: {
          title: 'What You Can Expect',
          subtitle: 'Realistic outcomes from professional branding:',
          outcomes: [
            'A brand that feels authentic to your business',
            'Professional identity that builds instant credibility',
            'Clear guidelines for consistent application',
            'All source files and full ownership',
            'Support during implementation',
          ],
        },

        idealFor: {
          title: 'Who This Works Best For',
          subtitle: 'Businesses that:',
          criteria: [
            'Want to stand out professionally',
            'Value long-term brand equity',
            'Need clarity and consistency',
            'Are ready to invest in their image',
          ],
        },

        closingMessage: {
          title: 'Let's Build Your Brand Right',
          message: 'Your brand is more than a logo. It's how people feel about your business.',
          tagline: 'We help you create that feeling — clearly, professionally, and memorably.',
        },
      },

      // WEBSITE DEVELOPMENT SERVICE
      'website-development': {
        title: 'Website & App Development',
        metaDescription: 'Fast, secure, conversion-focused websites that work perfectly on all devices. Custom development, e-commerce, apps & more.',
        
        hero: {
          headline: 'Websites That Load Fast, Look Great & Actually Help Your Business Grow',
          subheadline: 'We build professional, mobile-friendly websites designed to convert visitors into customers — with speed, security, and ongoing support.',
          badges: ['Fast Loading', 'Mobile-First', 'Conversion-Focused'],
          description: 'If you want a website that works as hard as you do — you're in the right place.',
        },

        trustBar: [
          '60+ Websites Built',
          '<2s Load Time',
          'Mobile-Optimized',
          '12 Months Support',
          'Full Code Ownership',
        ],

        servicesOverview: {
          title: 'Complete Web Development Solutions',
          services: [
            {
              icon: Globe,
              title: 'Business Websites',
              items: ['Corporate Sites', 'Service Websites', 'Portfolio Sites', 'Landing Pages', 'Multi-Page Sites'],
            },
            {
              icon: Target,
              title: 'E-commerce Stores',
              items: ['Shopify', 'WooCommerce', 'Product Catalogs', 'Payment Integration', 'Inventory Management'],
            },
            {
              icon: Users,
              title: 'UI/UX Design',
              items: ['Wireframing', 'Visual Design', 'User Research', 'Prototyping', 'Usability Testing'],
            },
            {
              icon: Zap,
              title: 'Speed & Performance',
              items: ['Image Optimization', 'Code Minification', 'CDN Setup', 'Caching', 'Core Web Vitals'],
            },
            {
              icon: Search,
              title: 'SEO-Optimized',
              items: ['Clean Code', 'Schema Markup', 'Meta Tags', 'XML Sitemaps', 'Technical SEO'],
            },
            {
              icon: Shield,
              title: 'Security & Hosting',
              items: ['SSL Certificate', 'Firewall', 'Regular Backups', 'Malware Protection', 'Hosting Setup'],
            },
            {
              icon: MessageSquare,
              title: 'Support & Maintenance',
              items: ['12 Months Free', 'Updates', 'Bug Fixes', 'Content Changes', 'Technical Support'],
            },
          ],
        },

        whyNeedHelp: {
          title: 'Why Your Website Matters',
          description: 'Your website is often the first impression of your business.',
          points: [
            'Fast loading builds trust',
            'Mobile-friendly reaches everyone',
            'Clear design guides actions',
            'SEO-optimized attracts visitors',
          ],
          conclusion: 'A professional website is an investment that pays back consistently.',
        },

        approach: {
          title: 'Our Development Philosophy',
          dontBelieve: [
            'Slow, bloated websites',
            'Mobile-unfriendly designs',
            'Vendor lock-in with proprietary code',
          ],
          believe: [
            'Speed and performance first',
            'Mobile-first responsive design',
            'Clean code you fully own',
            'Ongoing support and training',
          ],
        },

        supportGrowth: {
          title: 'How We Build Your Website',
          steps: [
            { title: 'Planning', description: 'goals, features & structure' },
            { title: 'Design', description: 'wireframes & visual mockups' },
            { title: 'Development', description: 'coding & functionality' },
            { title: 'Testing', description: 'quality assurance & fixes' },
            { title: 'Launch & Support', description: 'deployment & training' },
          ],
          tagline: 'A transparent, collaborative process with clear milestones.',
        },

        individualServices: [
          {
            title: 'Custom Website Design',
            subtitle: 'Tailored to your brand and business goals.',
            icon: Globe,
            benefits: [
              'Unique design, not templates',
              'Brand-aligned visuals',
              'Conversion-focused layouts',
              'Professional appearance',
            ],
          },
          {
            title: 'E-commerce Development',
            subtitle: 'Sell products online seamlessly.',
            icon: Target,
            benefits: [
              'Product catalog management',
              'Shopping cart & checkout',
              'Payment gateway integration',
              'Inventory management',
            ],
          },
          {
            title: 'Mobile App Development',
            subtitle: 'Native and cross-platform apps.',
            icon: Users,
            benefits: [
              'iOS & Android apps',
              'React Native / Flutter',
              'App store submission',
              'Push notifications',
            ],
          },
          {
            title: 'Speed Optimization',
            subtitle: 'Fast loading for better user experience.',
            icon: Zap,
            benefits: [
              'Image compression',
              'Code optimization',
              'CDN implementation',
              '90+ PageSpeed scores',
            ],
          },
          {
            title: 'SEO-Optimized Development',
            subtitle: 'Built to rank on search engines.',
            icon: Search,
            benefits: [
              'Clean semantic code',
              'Schema markup',
              'Meta tags setup',
              'XML sitemaps',
            ],
          },
          {
            title: 'WordPress Development',
            subtitle: 'Easy-to-manage CMS websites.',
            icon: Globe,
            benefits: [
              'Custom themes',
              'Plugin integration',
              'WooCommerce setup',
              'Training included',
            ],
          },
          {
            title: 'Landing Page Design',
            subtitle: 'High-converting single-page sites.',
            icon: Target,
            benefits: [
              'Clear messaging',
              'Strong call-to-action',
              'Lead capture forms',
              'A/B testing ready',
            ],
          },
          {
            title: 'Website Security',
            subtitle: 'Protect your site and customer data.',
            icon: Shield,
            benefits: [
              'SSL certificate',
              'Firewall setup',
              'Regular backups',
              'Security monitoring',
            ],
          },
          {
            title: 'Payment Integration',
            subtitle: 'Accept payments securely online.',
            icon: Target,
            benefits: [
              'Stripe, Razorpay, PayPal',
              'UPI integration',
              'Secure checkout',
              'PCI compliance',
            ],
          },
          {
            title: 'Website Maintenance',
            subtitle: 'Keep your site running smoothly.',
            icon: Shield,
            benefits: [
              '12 months free support',
              'Regular updates',
              'Bug fixes',
              'Content changes',
            ],
          },
        ],

        expectations: {
          title: 'What You Can Expect',
          subtitle: 'Realistic outcomes from professional development:',
          outcomes: [
            'Fast-loading, mobile-friendly website',
            'Clear, conversion-focused design',
            'Full ownership of code and assets',
            '12 months of free support',
            'Training to manage your site',
          ],
        },

        idealFor: {
          title: 'Who This Works Best For',
          subtitle: 'Businesses that:',
          criteria: [
            'Need a professional online presence',
            'Want to convert visitors into customers',
            'Value speed and mobile experience',
            'Want ongoing support and updates',
          ],
        },

        closingMessage: {
          title: 'Let's Build Your Digital Home',
          message: 'A great website isn't just about looking good. It's about working well and growing your business.',
          tagline: 'We build websites that do both — professionally and reliably.',
        },
      },
    };

    return services[slug || 'digital-marketing'];
  };

  const service = getServiceContent();
  
  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[30px] font-medium mb-4">Service Not Found</h1>
          <Link to="/services" className="text-yellow-500 hover:text-yellow-400">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const seoData = useSEO(`/services/${slug}`);

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={service.metaDescription}
        keywords={seoData.keywords?.join(', ') || ''}
        canonicalUrl={`https://inchtomilez.in/services/${slug}`}
      />

      <StructuredData schema={organizationSchema} />
      <StructuredData schema={getWebPageSchema(
        service.title,
        service.metaDescription,
        `https://inchtomilez.in/services/${slug}`
      )} />

      <div className="min-h-screen bg-black text-white">
        {/* SECTION 1: HERO */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-[15px] text-gray-400 hover:text-yellow-500 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <h1 className="text-[30px] md:text-[42px] font-medium mb-6 max-w-4xl leading-tight">
              {service.hero.headline}
            </h1>

            <p className="text-[17px] text-gray-300 mb-6 max-w-3xl leading-relaxed">
              {service.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {service.hero.badges.map((badge: string, index: number) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 text-[14px] bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20"
                >
                  <CheckCircle className="w-4 h-4" />
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-[16px] text-white mb-8 max-w-2xl">
              👉 {service.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+919669988666"
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call: +91 96699 88666
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              >
                Get Your Growth Plan
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: TRUST BAR */}
        <section className="py-8 border-y border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {service.trustBar.map((item: string, index: number) => (
                <div key={index} className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <span className="text-[14px] text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: ALL SERVICES OVERVIEW (BENTO GRID) */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black to-black/50">
          <div className="container mx-auto px-6">
            <h2 className="text-[28px] font-bold mb-12 text-center">
              {service.servicesOverview.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {service.servicesOverview.services.map((item: any, index: number) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="text-[18px] font-medium mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((service: string, idx: number) => (
                        <li key={idx} className="text-[14px] text-gray-400 flex items-start gap-2">
                          <span className="text-yellow-500 mt-1">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY BUSINESSES NEED HELP */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[28px] font-bold mb-4">
                {service.whyNeedHelp.title}
              </h2>
              <p className="text-[17px] text-gray-300 mb-8">
                {service.whyNeedHelp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {service.whyNeedHelp.points.map((point: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              <p className="text-[17px] font-medium text-white">
                {service.whyNeedHelp.conclusion}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR APPROACH */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black/50 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[28px] font-bold mb-12 text-center">
                {service.approach.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Don't Believe */}
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                  <h3 className="text-[18px] font-medium mb-4 text-red-400">
                    We don't believe in:
                  </h3>
                  <ul className="space-y-3">
                    {service.approach.dontBelieve.map((item: string, index: number) => (
                      <li key={index} className="text-[15px] text-gray-400 flex items-start gap-2">
                        <span className="text-red-400">❌</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Believe */}
                <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                  <h3 className="text-[18px] font-medium mb-4 text-green-400">
                    We believe in:
                  </h3>
                  <ul className="space-y-3">
                    {service.approach.believe.map((item: string, index: number) => (
                      <li key={index} className="text-[15px] text-gray-400 flex items-start gap-2">
                        <span className="text-green-400">✅</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW WE SUPPORT GROWTH */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-[28px] font-bold mb-12">
                {service.supportGrowth.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                {service.supportGrowth.steps.map((step: any, index: number) => (
                  <div key={index} className="relative">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold mb-4 mx-auto">
                        {index + 1}
                      </div>
                      <h3 className="text-[16px] font-medium mb-2">{step.title}</h3>
                      <p className="text-[13px] text-gray-400">{step.description}</p>
                    </div>
                    {index < service.supportGrowth.steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-yellow-500/30" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[17px] text-gray-300 italic">
                {service.supportGrowth.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* SECTIONS 7-20: INDIVIDUAL SERVICES */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black to-black/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.individualServices.map((item: any, index: number) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/20 transition-all"
                    >
                      <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                      <h3 className="text-[20px] font-medium mb-2">{item.title}</h3>
                      <p className="text-[15px] text-gray-400 mb-4">{item.subtitle}</p>
                      <ul className="space-y-2">
                        {item.benefits.map((benefit: string, idx: number) => (
                          <li key={idx} className="text-[14px] text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 21: WHAT YOU CAN EXPECT */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[28px] font-bold mb-4">
                {service.expectations.title}
              </h2>
              <p className="text-[16px] text-gray-400 mb-8">
                {service.expectations.subtitle}
              </p>

              <div className="grid grid-cols-1 gap-4 text-left">
                {service.expectations.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                    <span className="text-[20px]">🎯</span>
                    <span className="text-[15px] text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 22: WHO THIS WORKS FOR */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black/50 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[28px] font-bold mb-4">
                {service.idealFor.title}
              </h2>
              <p className="text-[16px] text-gray-400 mb-8">
                {service.idealFor.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.idealFor.criteria.map((criterion: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-gray-300">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 23: CLOSING MESSAGE */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[28px] font-bold mb-6">
                {service.closingMessage.title}
              </h2>
              <p className="text-[17px] text-gray-300 mb-4 leading-relaxed">
                {service.closingMessage.message}
              </p>
              <p className="text-[17px] text-white font-medium">
                {service.closingMessage.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 24: FINAL CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-black to-black/50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[24px] font-bold mb-6">
                If you want a clear, supportive, results-focused partner:
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919669988666"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 96699 88666
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  Request Your Growth Plan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 25: FOOTER NOTE */}
        <section className="py-8 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <p className="text-[14px] text-gray-400">
              {service.title} | SEO • Ads • Social • Web • Automation
            </p>
            <p className="text-[13px] text-gray-500 mt-2">
              Helping brands grow responsibly and effectively.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
