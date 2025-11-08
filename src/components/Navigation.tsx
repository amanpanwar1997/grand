import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Megaphone, Gauge, Palette, Code, Smartphone, Image, Video, Users, Briefcase, LayoutGrid, Radio, Package, Building2, GraduationCap, Home, ShoppingCart, Cpu, DollarSign, Hotel, Car, Shirt, Scale, Factory, Wheat, Truck, Hammer, Store, Zap, Heart, Trophy, Lightbulb, Sparkles, TrendingUp, Star, FileText, BookOpen, Newspaper, HelpCircle, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoAvatar from 'figma:asset/90948f9aa2b6ab5b4d89fb6e1fa928039c1588d3.png';
import logoText from 'figma:asset/291b7319b5121f776c225ad4d66462f7385e5e1e.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileResourcesOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mega menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesDropdownOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Services categorized by type
  const serviceCategories = [
    {
      name: 'Digital Marketing',
      services: [
        { name: 'Digital Marketing', slug: 'digital-marketing', icon: Megaphone, badge: 'Popular', featured: true },
        { name: 'Advertising', slug: 'advertising', icon: Gauge, featured: true },
        { name: 'Product Marketing', slug: 'product-marketing', icon: Package },
      ]
    },
    {
      name: 'Creative & Branding',
      services: [
        { name: 'Branding', slug: 'branding', icon: Palette, badge: 'Core', featured: true },
        { name: 'Graphic Design & Creative', slug: 'graphic-design', icon: Image },
        { name: 'Creative Campaigns', slug: 'creative-campaigns', icon: Lightbulb, badge: 'NEW' },
      ]
    },
    {
      name: 'Development',
      services: [
        { name: 'Website & App Development', slug: 'website-development', icon: Code, featured: true },
        { name: 'Software Development', slug: 'software-development', icon: Smartphone },
      ]
    },
    {
      name: 'Media & Production',
      services: [
        { name: 'Media Production', slug: 'media-production', icon: Video, featured: true },
        { name: 'OOH Advertising', slug: 'ooh-advertising', icon: LayoutGrid, badge: 'Core' },
        { name: 'Radio & Newspapers', slug: 'radio-newspapers', icon: Radio },
      ]
    },
    {
      name: 'Events & Campaigns',
      services: [
        { name: 'BTL Activations', slug: 'btl-activations', icon: Users, badge: 'NEW', featured: true },
        { name: 'Political Campaigns', slug: 'political-campaigns', icon: Briefcase },
        { name: 'Public Relations', slug: 'public-relations', icon: Users },
      ]
    }
  ];

  // All services flattened for mobile
  const allServices = serviceCategories.flatMap(cat => cat.services);

  // Industries grouped by sector
  const industryCategories = [
    {
      name: 'Business & Professional',
      industries: [
        { name: 'Technology', slug: 'technology', icon: Cpu, featured: true },
        { name: 'Finance', slug: 'finance', icon: DollarSign, featured: true },
        { name: 'Legal', slug: 'legal', icon: Scale },
        { name: 'Real Estate', slug: 'real-estate', icon: Home },
      ]
    },
    {
      name: 'Consumer & Retail',
      industries: [
        { name: 'E-Commerce', slug: 'ecommerce', icon: ShoppingCart, featured: true },
        { name: 'Fashion & Retail', slug: 'fashion', icon: Shirt },
        { name: 'Retail', slug: 'retail', icon: Store },
        { name: 'Hospitality', slug: 'hospitality', icon: Hotel },
      ]
    },
    {
      name: 'Healthcare & Education',
      industries: [
        { name: 'Healthcare', slug: 'healthcare', icon: Heart, featured: true },
        { name: 'Education', slug: 'education', icon: GraduationCap },
        { name: 'Sports & Fitness', slug: 'sports', icon: Trophy },
      ]
    },
    {
      name: 'Industrial & Manufacturing',
      industries: [
        { name: 'Manufacturing', slug: 'manufacturing', icon: Factory },
        { name: 'Construction', slug: 'construction', icon: Hammer },
        { name: 'Agriculture', slug: 'agriculture', icon: Wheat },
        { name: 'Energy', slug: 'energy', icon: Zap },
        { name: 'Logistics', slug: 'logistics', icon: Truck },
        { name: 'Automotive', slug: 'automotive', icon: Car },
      ]
    },
    {
      name: 'Other Sectors',
      industries: [
        { name: 'Non-Profit', slug: 'non-profit', icon: Heart },
      ]
    }
  ];

  // All industries flattened for mobile
  const allIndustries = industryCategories.flatMap(cat => cat.industries);

  // Resources menu
  const resources = [
    { name: 'Blog', path: '/blogs', icon: BookOpen, description: 'Expert insights & guides', featured: true },
    { name: 'FAQs', path: '/faqs', icon: HelpCircle, description: 'Common questions answered' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isDropdownActive = (basePath: string) => {
    return location.pathname.startsWith(basePath);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/98 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/5' 
          : 'bg-black/95 backdrop-blur-md'
      }`}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Brand Identity (Avatar + TO Logo) */}
          <Link to="/" className="flex items-center gap-3 relative z-50">
            <img 
              src={logoAvatar}
              alt="Inchtomilez"
              className="h-10"
            />
            <img 
              src={logoText}
              alt="Inchtomilez"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation - Premium floating pills */}
          <div className="hidden lg:flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 bg-white/5 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/10">
              {/* Home */}
              {navLinks.filter(link => link.path === '/').map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group px-3 py-1.5 rounded-full transition-all duration-200"
                >
                  <span className={`relative z-10 text-[0.9375rem] font-normal transition-colors duration-200 ${
                    isActive(link.path) ? 'text-black' : 'text-white/80 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-yellow-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>
              ))}

              {/* About */}
              {navLinks.filter(link => link.path === '/about').map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group px-3 py-1.5 rounded-full transition-all duration-200"
                >
                  <span className={`relative z-10 text-[0.9375rem] font-normal transition-colors duration-200 ${
                    isActive(link.path) ? 'text-black' : 'text-white/80 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-yellow-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>
              ))}

              {/* Services Mega Menu */}
              <div 
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="relative group px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-1">
                    <Link
                      to="/services"
                      className={`relative z-10 text-[0.9375rem] font-normal transition-colors duration-200 ${
                        isDropdownActive('/services') ? 'text-black' : 'text-white/80 group-hover:text-white'
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      Services
                    </Link>
                    <ChevronDown 
                      className={`w-3 h-3 transition-all duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      } ${isDropdownActive('/services') ? 'text-black' : 'text-white/80 group-hover:text-white'}`} 
                    />
                  </div>
                  {isDropdownActive('/services') && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-yellow-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </div>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        style={{ top: '4rem' }}
                      />
                      
                      {/* Advanced Mega Menu - Services */}
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[900px] z-50"
                      >
                        <div className="bg-black/98 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 overflow-hidden">
                          {/* Header */}
                          <div className="px-4 py-2.5 border-b border-white/10">
                            <Link
                              to="/services"
                              className="group flex items-center justify-between"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="text-[0.9375rem] font-normal text-white">Our Services</h3>
                              </div>
                              <div className="flex items-center gap-1.5 text-yellow-500 group-hover:gap-2 transition-all duration-200">
                                <span className="text-[0.9375rem] font-normal">View All</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </div>
                            </Link>
                          </div>

                          {/* Categories Grid */}
                          <div className="grid grid-cols-3 gap-4 p-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {serviceCategories.map((category, idx) => (
                              <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="space-y-2"
                              >
                                <h4 className="text-[0.8125rem] font-normal text-yellow-500 uppercase tracking-wide px-2">
                                  {category.name}
                                </h4>
                                <div className="space-y-0.5">
                                  {category.services.map((service) => {
                                    const IconComponent = service.icon;
                                    return (
                                      <Link
                                        key={service.slug}
                                        to={`/services/${service.slug}`}
                                        className={`group flex items-start gap-2 px-2 py-1.5 rounded-lg transition-all duration-200 ${
                                          service.featured 
                                            ? 'hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/20' 
                                            : 'hover:bg-white/5'
                                        }`}
                                        onClick={() => setServicesDropdownOpen(false)}
                                      >
                                        <div className={`mt-0.5 ${service.featured ? 'text-yellow-500' : 'text-white/40 group-hover:text-yellow-500'} transition-colors duration-200`}>
                                          <IconComponent className="w-3.5 h-3.5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-1.5">
                                            <span className={`text-[0.9375rem] font-normal ${
                                              service.featured ? 'text-white' : 'text-white/70'
                                            } group-hover:text-yellow-500 transition-colors duration-200`}>
                                              {service.name}
                                            </span>
                                            {service.badge && (
                                              <span className={`px-1.5 py-0.5 rounded text-[0.625rem] font-normal shrink-0 ${
                                                service.badge === 'NEW' ? 'bg-green-500 text-black' :
                                                service.badge === 'Core' ? 'bg-yellow-500 text-black' :
                                                service.badge === 'Popular' ? 'bg-blue-500 text-white' :
                                                'bg-white/20 text-white'
                                              }`}>
                                                {service.badge}
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Footer CTA */}
                          <div className="px-4 py-2.5 border-t border-white/10">
                            <div className="flex items-center justify-between text-[0.8125rem]">
                              <p className="text-white/60 font-normal">
                                Need help choosing? <Link to="/contact" className="text-yellow-500 hover:text-yellow-400 font-normal">Contact us</Link>
                              </p>
                              <div className="flex items-center gap-1.5 text-white/40">
                                <Sparkles className="w-3 h-3" />
                                <span className="font-normal">14 Premium Services</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Mega Menu */}
              <div 
                ref={industriesRef}
                className="relative"
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
              >
                <div className="relative group px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-1">
                    <Link
                      to="/industries"
                      className={`relative z-10 text-[0.9375rem] font-normal transition-colors duration-200 ${
                        isDropdownActive('/industries') ? 'text-black' : 'text-white/80 group-hover:text-white'
                      }`}
                      onClick={() => setIndustriesDropdownOpen(false)}
                    >
                      Industries
                    </Link>
                    <ChevronDown 
                      className={`w-3 h-3 transition-all duration-200 ${
                        industriesDropdownOpen ? 'rotate-180' : ''
                      } ${isDropdownActive('/industries') ? 'text-black' : 'text-white/80 group-hover:text-white'}`} 
                    />
                  </div>
                  {isDropdownActive('/industries') && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-yellow-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </div>

                <AnimatePresence>
                  {industriesDropdownOpen && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        style={{ top: '4rem' }}
                      />
                      
                      {/* Advanced Mega Menu - Industries */}
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[800px] z-50"
                      >
                        <div className="bg-black/98 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 overflow-hidden">
                          {/* Header */}
                          <div className="px-4 py-2.5 border-b border-white/10">
                            <Link
                              to="/industries"
                              className="group flex items-center justify-between"
                              onClick={() => setIndustriesDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="text-[0.9375rem] font-normal text-white">Industries We Serve</h3>
                              </div>
                              <div className="flex items-center gap-1.5 text-yellow-500 group-hover:gap-2 transition-all duration-200">
                                <span className="text-[0.9375rem] font-normal">View All</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </div>
                            </Link>
                          </div>

                          {/* Categories Grid - 2 columns for industries */}
                          <div className="grid grid-cols-2 gap-4 p-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {industryCategories.map((category, idx) => (
                              <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="space-y-2"
                              >
                                <h4 className="text-[0.8125rem] font-normal text-yellow-500 uppercase tracking-wide px-2">
                                  {category.name}
                                </h4>
                                <div className="space-y-0.5">
                                  {category.industries.map((industry) => {
                                    const IconComponent = industry.icon;
                                    return (
                                      <Link
                                        key={industry.slug}
                                        to={`/industries/${industry.slug}`}
                                        className={`group flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-200 ${
                                          industry.featured 
                                            ? 'hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/20' 
                                            : 'hover:bg-white/5'
                                        }`}
                                        onClick={() => setIndustriesDropdownOpen(false)}
                                      >
                                        <div className={`${industry.featured ? 'text-yellow-500' : 'text-white/40 group-hover:text-yellow-500'} transition-colors duration-200`}>
                                          <IconComponent className="w-3.5 h-3.5" />
                                        </div>
                                        <span className={`text-[0.9375rem] font-normal ${
                                          industry.featured ? 'text-white' : 'text-white/70'
                                        } group-hover:text-yellow-500 transition-colors duration-200`}>
                                          {industry.name}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Footer CTA */}
                          <div className="px-4 py-2.5 border-t border-white/10">
                            <div className="flex items-center justify-between text-[0.8125rem]">
                              <p className="text-white/60 font-normal">
                                Don't see your industry? <Link to="/contact" className="text-yellow-500 hover:text-yellow-400 font-normal">We can help</Link>
                              </p>
                              <div className="flex items-center gap-1.5 text-white/40">
                                <Building2 className="w-3 h-3" />
                                <span className="font-normal">18 Industry Sectors</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Mega Menu */}
              <div 
                ref={resourcesRef}
                className="relative"
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <div className="relative group px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-1">
                    <span className={`relative z-10 text-[0.9375rem] font-normal transition-colors duration-200 ${
                      isDropdownActive('/blogs') || isDropdownActive('/faqs') ? 'text-black' : 'text-white/80 group-hover:text-white'
                    }`}>
                      Resources
                    </span>
                    <ChevronDown 
                      className={`w-3 h-3 transition-all duration-200 ${
                        resourcesDropdownOpen ? 'rotate-180' : ''
                      } ${isDropdownActive('/blogs') || isDropdownActive('/faqs') ? 'text-black' : 'text-white/80 group-hover:text-white'}`} 
                    />
                  </div>
                  {(isDropdownActive('/blogs') || isDropdownActive('/faqs')) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-yellow-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </div>

                <AnimatePresence>
                  {resourcesDropdownOpen && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        style={{ top: '4rem' }}
                      />
                      
                      {/* Compact Resources Menu */}
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[400px] z-50"
                      >
                        <div className="bg-black/98 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 overflow-hidden">
                          {/* Header */}
                          <div className="px-4 py-2.5 border-b border-white/10">
                            <h3 className="text-[0.9375rem] font-normal text-white">Resources</h3>
                          </div>

                          {/* Resources List */}
                          <div className="p-3 space-y-1">
                            {resources.map((resource, idx) => {
                              const IconComponent = resource.icon;
                              return (
                                <motion.div
                                  key={resource.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <Link
                                    to={resource.path}
                                    className={`group flex items-start gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 ${
                                      resource.featured 
                                        ? 'bg-yellow-500/5 hover:bg-yellow-500/10 border border-yellow-500/20 hover:border-yellow-500/30' 
                                        : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                                    }`}
                                    onClick={() => setResourcesDropdownOpen(false)}
                                  >
                                    <div className={`mt-0.5 ${resource.featured ? 'text-yellow-500' : 'text-white/40 group-hover:text-yellow-500'} transition-colors duration-200`}>
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-1.5">
                                        <span className="text-[0.9375rem] font-normal text-white group-hover:text-yellow-500 transition-colors duration-200">
                                          {resource.name}
                                        </span>
                                        {resource.featured && (
                                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        )}
                                      </div>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-yellow-500 transition-all duration-200 mt-0.5" />
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact CTA */}
              <Link
                to="/contact"
                className="relative group ml-1"
              >
                <div className="px-4 py-1.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-normal text-[0.9375rem] transition-all duration-200 hover:scale-105 flex items-center gap-1.5">
                  <Phone className="w-3 h-3" />
                  <span>Contact</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[60] p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} className="text-yellow-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-6 max-h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
                {/* Regular Nav Links */}
                <div className="space-y-1 mb-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-3 px-4 rounded-xl text-sm transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-black bg-yellow-500 font-bold'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Services Dropdown */}
                <div className="mb-4">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm transition-all duration-200 ${
                      isDropdownActive('/services')
                        ? 'text-black bg-yellow-500/20 font-bold border border-yellow-500/30'
                        : 'text-white/80 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Services</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          <Link
                            to="/services"
                            className="flex items-center gap-2 py-2.5 px-3 text-xs text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-all duration-150 font-bold border border-yellow-500/20"
                          >
                            <ArrowRight className="w-3 h-3" />
                            <span>View All Services</span>
                          </Link>
                          {allServices.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="flex items-center gap-2.5 py-2.5 px-3 text-xs text-white/70 hover:text-yellow-500 hover:bg-yellow-500/5 rounded-lg transition-all duration-150"
                              >
                                <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="flex-1">{service.name}</span>
                                {service.badge && (
                                  <span className={`px-1.5 py-0.5 rounded text-[0.625rem] font-bold ${
                                    service.badge === 'NEW' ? 'bg-green-500 text-black' :
                                    service.badge === 'Core' ? 'bg-yellow-500 text-black' :
                                    service.badge === 'Popular' ? 'bg-blue-500 text-white' :
                                    'bg-white/20 text-white'
                                  }`}>
                                    {service.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Industries Dropdown */}
                <div className="mb-4">
                  <button
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm transition-all duration-200 ${
                      isDropdownActive('/industries')
                        ? 'text-black bg-yellow-500/20 font-bold border border-yellow-500/30'
                        : 'text-white/80 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>Industries</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileIndustriesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          <Link
                            to="/industries"
                            className="flex items-center gap-2 py-2.5 px-3 text-xs text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-all duration-150 font-bold border border-yellow-500/20"
                          >
                            <ArrowRight className="w-3 h-3" />
                            <span>View All Industries</span>
                          </Link>
                          {allIndustries.map((industry) => {
                            const IconComponent = industry.icon;
                            return (
                              <Link
                                key={industry.slug}
                                to={`/industries/${industry.slug}`}
                                className="flex items-center gap-2.5 py-2.5 px-3 text-xs text-white/70 hover:text-yellow-500 hover:bg-yellow-500/5 rounded-lg transition-all duration-150"
                              >
                                <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                                <span>{industry.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Resources Dropdown */}
                <div className="mb-4">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm transition-all duration-200 ${
                      isDropdownActive('/blogs') || isDropdownActive('/faqs')
                        ? 'text-black bg-yellow-500/20 font-bold border border-yellow-500/30'
                        : 'text-white/80 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Resources</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileResourcesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileResourcesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          {resources.map((resource) => {
                            const IconComponent = resource.icon;
                            return (
                              <Link
                                key={resource.path}
                                to={resource.path}
                                className={`flex items-center gap-2.5 py-2.5 px-3 text-xs hover:text-yellow-500 rounded-lg transition-all duration-150 ${
                                  resource.featured 
                                    ? 'text-white bg-yellow-500/10 hover:bg-yellow-500/15 border border-yellow-500/20' 
                                    : 'text-white/70 hover:bg-yellow-500/5'
                                }`}
                              >
                                <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                                <span>{resource.name}</span>
                                {resource.featured && (
                                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 ml-auto" />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Contact CTA */}
                <Link
                  to="/contact"
                  className="block"
                >
                  <div className="py-3 px-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm transition-all duration-200 text-center flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Contact Us</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(234, 179, 8, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(234, 179, 8, 0.7);
        }
      `}</style>
    </nav>
  );
}
