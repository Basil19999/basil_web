/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Linkedin, 
  Phone, 
  ExternalLink, 
  Code2, 
  Layout, 
  Search, 
  BarChart3, 
  Wrench, 
  GraduationCap,
  Briefcase,
  ChevronRight,
  Globe,
  Zap,
  ArrowUpRight,
  MousePointer2,
  MapPin,
  AtSign,
  Menu,
  X
} from 'lucide-react';
import { cn } from './lib/utils';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CONTACT_INFO = {
  name: "Basil Thomas",
  phone: "+91-9741884072",
  email: "basilt9009@gmail.com",
  linkedin: "https://www.linkedin.com/in/basil-thomas-513b46209",
  location: "Mangalore, India"
};

const EXPERIENCE = [
  {
    company: "MRR Technology Solutions",
    role: "WordPress CMS Developer & Marketing Specialist",
    period: "2023 – 2026",
    location: "Mangalore",
    sections: [
      {
        title: "Web Development & CMS Management",
        points: [
          "Technical Excellence: Engineered and maintained high-performance WordPress ecosystems, ensuring 100% alignment with UX/UI standards and brand guidelines.",
          "SEO-Centric Architecture: Implemented site structures optimized for crawlability and indexing, focusing on technical SEO, schema markup, and seamless redirects."
        ]
      },
      {
        title: "Digital Marketing & Performance Tracking",
        points: [
          "Data-Driven Strategy: Architected end-to-end tracking solutions using Google Tag Manager and GA4, creating custom event triggers to capture high-value conversion data.",
          "Campaign Optimization: Managed full-funnel Google Ads accounts, consistently improving Lead Quality Scores and reducing CPL through rigorous A/B testing and audience refinement.",
          "Marketing Automation: Executed complex email lifecycles, utilizing list segmentation and quality-assurance testing to drive engagement across digital touchpoints."
        ]
      },
      {
        title: "Analytics & Stakeholder Management",
        points: [
          "Visual Reporting: Developed automated performance dashboards in Looker Studio, translating raw data into actionable growth insights for stakeholders.",
          "Cross-Functional Leadership: Acted as the technical bridge between marketing goals and web execution, streamlining workflows and resolving complex site issues."
        ]
      }
    ]
  },
  {
    company: "Teleperformance",
    role: "Dot net Developer",
    period: "2022 – 2023",
    location: "Chennai",
    sections: [
      {
        title: "Core Development",
        points: [
          "Backend functionality development using C# and .NET core",
          "Collaborative debugging and performance profiling",
          "Agile development in enterprise-scale environments"
        ]
      }
    ]
  }
];

const SKILLS = {
  core: ["WordPress", "SEO Infrastructure", "GA4 / GTM", "Google Ads", "Looker Studio"],
  dev: ["HTML5", "CSS3", "PHP", ".NET", "JavaScript"],
  tools: ["Excel", "GMass", "Envato", "Hosting Platforms"]
};

const CAPABILITIES = [
  { 
    icon: Layout, 
    title: "CMS Architecture", 
    desc: "Building and maintaining custom WordPress websites with a focus on speed, responsive design, scalability, and smooth user experience. Skilled in theme customization, plugin integration, and basic PHP development to create business-focused websites.", 
    skills: ["WordPress", "Theme Logic", "PHP"] 
  },
  { 
    icon: BarChart3, 
    title: "Marketing Data", 
    desc: "Experienced in implementing Google Tag Manager (GTM) and Google Analytics 4 (GA4) for accurate conversion tracking, event tracking, and user behavior analysis. Skilled in creating marketing reports using Looker Studio for data-driven decision making.", 
    skills: ["GTM", "GA4", "Looker Studio"] 
  },
  { 
    icon: Search, 
    title: "Search Dominance", 
    desc: "Specialized in on-page SEO, technical SEO, and website optimization to improve search engine rankings, website visibility, and organic traffic growth. Experienced in schema implementation, keyword optimization, and performance enhancement.", 
    skills: ["Technical SEO", "Schema", "Keyword Opt"] 
  },
  { 
    icon: Zap, 
    title: "Digital Advertising", 
    desc: "Hands-on experience in managing Google Ads campaigns, including search campaigns, conversion optimization, audience targeting, and lead generation strategies to maximize ROI and business growth.", 
    skills: ["Google Ads", "ROI", "Lead Gen"] 
  },
  { 
    icon: AtSign, 
    title: "Email & Outreach", 
    desc: "Knowledgeable in email marketing and outreach campaigns using tools like GMass for customer engagement, lead nurturing, and promotional communication.", 
    skills: ["Email Marketing", "GMass", "Outreach"] 
  },
  { 
    icon: Globe, 
    title: "Web & Hosting Management", 
    desc: "Experienced in managing web hosting platforms, website maintenance, backups, domain configurations, and ensuring website security and uptime.", 
    skills: ["Hosting", "Security", "DNS"] 
  },
  { 
    icon: Wrench, 
    title: "Development Tools", 
    desc: "Proficient with tools and platforms including WordPress, HTML, CSS, basic PHP, Excel, GA4, Google Tag Manager, Looker Studio, GMass, Envato Elements, and hosting management tools.", 
    skills: ["WordPress", "HTML/CSS", "GTM/GA4"] 
  }
];

const PROJECTS = [
  {
    title: "Lloyds Solutions",
    type: "SEO & Infrastructure",
    year: "'25",
    description: "Executed an end-to-end Technical and On-Page SEO strategy to improve search engine visibility, crawlability, and user experience.",
    tags: ["Technical SEO", "Schema Markup", "Core Web Vitals"],
    details: [
      {
        label: "On-Page & Content",
        text: "Conducted deep keyword research to update metadata and revamp site content for high search intent alignment."
      },
      {
        label: "Technical Architecture",
        text: "Managed indexing via robots.txt and XML sitemaps, building a strategic internal linking structure."
      },
      {
        label: "Structured Data",
        text: "Deployed custom schema markup to enhance rich snippet eligibility and entity understanding."
      },
      {
        label: "Site Audits",
        text: "Performed comprehensive audits to identify and resolve critical errors and configure Google sitelinks."
      },
      {
        label: "Performance",
        text: "Optimized Core Web Vitals and page speed metrics for enhanced mobile and desktop UX."
      }
    ]
  },
  {
    title: "Tripzzie",
    type: "Digital Launch",
    year: "'24",
    description: "Led the complete digital launch for Tripzzie, transforming a new domain into a fully optimized, high-performance travel platform.",
    tags: ["Search Growth", "Development", "Performance"],
    details: [
      {
        label: "Full-Scale Development",
        text: "Orchestrated the entire launch process: domain configuration, DNS management, and building a responsive site from the ground up."
      },
      {
        label: "Search Engineering",
        text: "Implemented a 'Technical First' SEO strategy with sitemaps, robots.txt, and custom Schema Markup for rich snippets."
      },
      {
        label: "Performance & UX",
        text: "Optimized Core Web Vitals and page speed metrics to ensure a seamless booking experience for all users."
      },
      {
        label: "Analytics Ecosystem",
        text: "Architected a comprehensive tracking suite using GTM, GA4, and Microsoft Clarity to monitor behavior and conversion funnels."
      },
      {
        label: "Content Strategy",
        text: "Executed targeted on-page SEO including keyword mapping, meta-data optimization, and internal link silos."
      }
    ]
  },
  {
    title: "Waterz",
    type: "Platform Engineering",
    year: "'24",
    description: "Built and launched the complete digital infrastructure for Waterz.in, focusing on high-speed performance and a data-driven SEO strategy.",
    tags: ["Infrastructure", "Data SEO", "Performance"],
    details: [
      {
        label: "Platform Engineering",
        text: "Managed the full development lifecycle: domain acquisition, DNS configuration, and building a responsive website from scratch."
      },
      {
        label: "Search Optimization (SEO)",
        text: "Engineered a crawl-efficient site structure with optimized sitemaps, robots.txt, and advanced indexing management."
      },
      {
        label: "Rich Search Presence",
        text: "Deployed custom structured data (Schema) and optimized for Google sitelinks to maximize SERP real estate."
      },
      {
        label: "Performance & Speed",
        text: "Fine-tuned server-side and front-end assets to achieve high page speed scores and a seamless user experience."
      },
      {
        label: "Advanced Analytics",
        text: "Implemented a full-stack tracking ecosystem including GTM, GA4, and Microsoft Clarity to capture user behavior."
      }
    ]
  },
  {
    title: "Goa Adventure Spot",
    type: "Maritime Digital Setup",
    year: "'24",
    description: "Directed the complete digital setup for Goa Adventure Spot, a luxury maritime service. I transformed a new domain into a high-speed, SEO-optimized platform designed for high-intent lead generation.",
    tags: ["Luxury Maritime", "Lead Generation", "SEO Engineering"],
    details: [
      {
        label: "Platform Architecture",
        text: "Managed the end-to-end launch, including domain/DNS configuration and custom website development from the ground up to ensure a premium brand experience."
      },
      {
        label: "Advanced Schema",
        text: "Developed and deployed custom structured data (Schema) to secure rich snippets and enhance search visibility."
      },
      {
        label: "Technical SEO",
        text: "Optimized site crawlability through precision management of XML sitemaps, robots.txt, and Google indexing."
      },
      {
        label: "Performance",
        text: "Executed rigorous page speed enhancements to ensure rapid load times, reducing bounce rates for mobile users."
      },
      {
        label: "Behavioral Analytics",
        text: "Architected a robust tracking ecosystem using GTM, GA4, and Microsoft Clarity to analyze user behavior."
      }
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-brand-bg relative overflow-x-hidden tech-grid selection:bg-brand-blue/30 selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-4 rounded-2xl">
          <div className="flex items-center group cursor-default">
            <span className="font-display font-bold text-white tracking-tighter uppercase">Basil Thomas</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Experience', 'Skills', 'Projects'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 hover:text-brand-blue transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="hidden sm:flex items-center gap-2 px-6 py-2 bg-brand-accent text-brand-cream font-bold rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-brand-bg transition-colors"
            >
              Email Me
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 text-white hover:text-brand-blue transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-28 left-6 right-6 glass-panel rounded-2xl p-8 md:hidden z-50"
            >
              <div className="flex flex-col gap-6">
                {['Experience', 'Skills', 'Projects'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-display font-bold uppercase tracking-widest text-white hover:text-brand-blue transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <hr className="border-white/10" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between w-full px-6 py-4 bg-brand-accent text-brand-cream font-bold rounded-xl text-sm uppercase tracking-widest"
                >
                  Email Me
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 lg:px-20 pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <div>
              <span className="micro-label mb-6 inline-block bg-brand-blue/10 px-3 py-1 rounded-full">Available for New Projects</span>
              <h1 className="text-6xl md:text-8xl lg:text-[10vw] leading-[0.9] tracking-tighter uppercase mb-12">
                Digital <br />
                <span className="text-brand-blue italic">Growth</span> <br />
                Specialist.
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div className="flex flex-col gap-8">
                <p className="text-2xl md:text-2xl text-white font-light leading-relaxed max-w-xl">
                  Building high-converting <span className="text-white font-medium">WordPress ecosystems</span> and 
                  data-driven marketing infrastructures that turn browsers into buyers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-brand-blue transition-colors flex items-center gap-2">
                    View My Work <ChevronRight className="w-4 h-4" />
                  </a>
                  <div className="flex items-center gap-3 px-6 py-4 glass-panel rounded-xl">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    <span className="text-xs font-mono uppercase tracking-widest font-bold">Mangalore, IN</span>
                  </div>
                </div>
              </div>

              <div className="flex md:justify-end gap-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                <div className="flex flex-col gap-2">
                  <span className="text-white">Expertise</span>
                  <span>Development</span>
                  <span>Ads Management</span>
                  <span>SEO Ops</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white">Industry</span>
                  <span>E-Commerce</span>
                  <span>SaaS</span>
                  <span>CMS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competencies Section */}
        <section id="skills" className="px-6 lg:px-20 py-16 md:py-32 bg-brand-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="micro-label mb-4 block">Core Toolkit</span>
              <h2 className="text-4xl md:text-6xl tracking-tight">Specialized Capabilities.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CAPABILITIES.map((item, i) => (
                <div
                  key={i}
                  className="p-10 glass-panel rounded-3xl group border border-white/10 transition-all hover:border-brand-blue/50 flex flex-col"
                >
                  <item.icon className="w-10 h-10 text-brand-blue mb-8 transition-transform group-hover:scale-110" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/80 text-base md:text-sm leading-relaxed mb-10 flex-grow">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {item.skills.map(s => (
                      <span key={s} className="px-3 py-1 bg-brand-bg/90 border border-brand-blue/20 rounded-full text-[10px] font-mono uppercase tracking-widest text-brand-blue font-bold shadow-lg transition-all hover:bg-brand-blue hover:text-brand-bg">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 lg:px-20 py-16 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20">
              <span className="micro-label mb-6 block">Career Path</span>
              <h2 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter uppercase font-black leading-none whitespace-nowrap">
                Professional <span className="text-brand-blue italic">Journey.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {EXPERIENCE.map((job, idx) => (
                <div 
                  key={idx}
                  className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-10 glass-panel rounded-[2rem] hover:bg-brand-blue/5 transition-all"
                >
                  <div className="lg:col-span-3">
                    <span className="font-mono text-xs text-brand-blue mb-2 block font-bold">{job.period}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.company}</h3>
                    <p className="text-white/60 font-mono text-[10px] uppercase tracking-widest">{job.location}</p>
                  </div>
                  <div className="lg:col-span-9">
                    <h4 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">{job.role}</h4>
                    <div className="space-y-10">
                      {job.sections.map((section, si) => (
                        <div key={si} className="space-y-4">
                          <h5 className="text-white font-mono text-[11px] uppercase tracking-widest font-black flex items-center gap-2">
                            <span className="w-8 h-px bg-brand-blue/30" />
                            {section.title}
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.points.map((p, pi) => (
                              <div key={pi} className="flex gap-4 group/item pl-4 border-l border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0 transition-transform group-hover/item:scale-150" />
                                <p className="text-base text-white/80 leading-relaxed">{p}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Grid */}
        <section id="projects" className="px-6 lg:px-20 py-16 md:pb-32 bg-brand-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-16 md:mb-32">
              <div>
                <span className="micro-label mb-4 block">Case Studies</span>
                <h2 className="text-5xl md:text-7xl tracking-tighter mb-8 text-white">Selected <br /> <span className="text-brand-blue italic">Productions.</span></h2>
              </div>
              <p className="text-xl text-white font-light leading-relaxed">
                Transforming complex technical requirements into elegant, high-performing 
                digital solutions for businesses across diverse sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {PROJECTS.map((project, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col p-12 glass-panel rounded-[3rem] hover:border-brand-blue/30 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-8 h-8 text-brand-blue" />
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-3 py-1 rounded bg-brand-blue/10 text-brand-blue text-[10px] font-mono font-bold tracking-widest">{project.year}</span>
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gray-500">{project.type}</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-white leading-tight">{project.title}</h3>
                  <p className="text-white/80 text-xl leading-relaxed mb-10">{project.description}</p>
                  
                  {project.details && project.details.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 mb-12">
                      {project.details.map((detail, di) => (
                        <div key={di} className="flex gap-4 items-start border-l border-brand-blue/30 pl-4 py-1">
                          <div className="flex flex-col">
                            <span className="inline-block px-2 py-0.5 bg-brand-bg/60 rounded text-[9px] font-mono text-brand-blue uppercase tracking-widest font-black mb-1">{detail.label}</span>
                            <p className="text-base text-white/70 leading-snug">{detail.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5 mt-auto">
                    {project.tags.map(t => (
                      <span key={t} className="text-[9px] uppercase font-mono font-black tracking-widest px-4 py-1 border border-brand-blue/20 bg-brand-bg/80 rounded-full text-brand-blue shadow-sm">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Contact */}
        <section className="px-6 lg:px-20 py-16 md:py-40 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <span className="micro-label mb-10 block">Academic Foundation</span>
              <div className="space-y-6">
                <div className="p-10 glass-panel rounded-[2.5rem] relative group">
                  <GraduationCap className="absolute -bottom-6 -right-6 w-32 h-32 text-brand-blue opacity-[0.03] transition-opacity group-hover:opacity-10" />
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Masters in Computer Applications</h3>
                  <p className="text-brand-blue font-mono text-sm uppercase tracking-widest font-bold mb-10">St. Joseph Engineering College</p>
                  <div className="flex items-center justify-between text-xs font-mono text-white/60 uppercase tracking-widest">
                    <span>2020 – 2022</span>
                    <span>Mangalore, India</span>
                  </div>
                </div>

                <div className="p-10 glass-panel rounded-[2.5rem] relative group">
                  <GraduationCap className="absolute -bottom-6 -right-6 w-32 h-32 text-brand-blue opacity-[0.03] transition-opacity group-hover:opacity-10" />
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Bachelor of Computer Applications</h3>
                  <p className="text-brand-blue font-mono text-sm uppercase tracking-widest font-bold mb-10">SDM Degree College</p>
                  <div className="flex items-center justify-between text-xs font-mono text-white/60 uppercase tracking-widest">
                    <span>2017 – 2020</span>
                    <span>Ujire, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="micro-label mb-6 block">Communication</span>
              <h2 className="text-5xl md:text-7xl tracking-tighter mb-12 uppercase italic font-black">
                Ready to <br /> <span className="text-brand-blue">Scale?</span>
              </h2>
              
              <div className="space-y-4">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-between p-8 glass-panel rounded-2xl border border-white/5 transition-all group">
                  <div className="flex items-center gap-6">
                    <Mail className="w-8 h-8 text-brand-accent" />
                    <div>
                      <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Drop an email</p>
                      <p className="text-xl font-bold text-white">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-brand-blue" />
                </a>

                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-8 glass-panel rounded-2xl border border-white/5 transition-all group">
                  <div className="flex items-center gap-6">
                    <Linkedin className="w-8 h-8 text-brand-blue" />
                    <div>
                      <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Connect on LinkedIn</p>
                      <p className="text-xl font-bold text-white">Career Network</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-brand-blue" />
                </a>

                <a href="https://wa.me/919741884072" target="_blank" rel="noreferrer" className="flex items-center justify-between p-8 glass-panel rounded-2xl border border-white/5 transition-all group">
                  <div className="flex items-center gap-6">
                    <Phone className="w-8 h-8 text-brand-blue" />
                    <div>
                      <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Chat on WhatsApp</p>
                      <p className="text-xl font-bold text-white">Direct Message</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-brand-blue" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="px-6 lg:px-20 py-8 border-t border-white/5 bg-brand-bg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em] font-bold">© 2026 Basil Thomas. Performance Portfolio.</span>
            <div className="flex gap-10 text-[10px] font-mono text-white/70 uppercase tracking-[0.2em] font-bold">
              <a href="#hero" className="hover:text-brand-blue transition-colors">Top</a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-blue transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

