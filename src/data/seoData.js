export const siteSeo = {
  siteName: 'BG Tatva Elevators',
  siteUrl: 'https://bgtatva.com',
  locale: 'en_IN',
  defaultImage: '/images/hero-background.webp',
  themeColor: '#0F2B45',
  lastModified: '2026-09-21',
  business: {
    name: 'BG Tatva Elevators',
    email: 'info@bgtatva.com',
    telephone: '+91 98765 43210',
    city: 'Bengaluru',
    region: 'Karnataka',
    country: 'IN',
  },
}

export const seoPages = {
  home: {
    path: '/',
    title: 'Premium Elevators in Bengaluru | BG Tatva Elevators',
    description: 'Discover premium home, panoramic and commercial elevators designed, supplied and supported by BG Tatva Elevators across Bengaluru.',
    priority: 1,
    changeFrequency: 'weekly',
  },
  about: {
    path: '/about',
    title: 'About BG Tatva Elevators | Bengaluru Elevator Specialists',
    description: 'Meet the Bengaluru team shaping refined elevator experiences through thoughtful design, technical coordination and dependable local support.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  elevators: {
    path: '/elevators',
    title: 'Elevator Solutions in Bengaluru | BG Tatva Elevators',
    description: 'Explore home elevators, panoramic lifts, commercial elevators and modernisation solutions tailored for Bengaluru buildings and lifestyles.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  projects: {
    path: '/projects',
    title: 'Elevator Projects in Bengaluru | BG Tatva Elevators',
    description: 'View considered residential, panoramic and commercial elevator projects coordinated by BG Tatva Elevators across Bengaluru.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  faq: {
    path: '/faq',
    title: 'Elevator FAQs | BG Tatva Elevators Bengaluru',
    description: 'Find clear answers about elevator planning, design, installation, modernisation, maintenance and project coordination in Bengaluru.',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  blog: {
    path: '/blog',
    title: 'Elevator Design Insights | BG Tatva Elevators',
    description: 'Read practical insights on elevator design, architecture, materials, technology, modernisation and vertical mobility from BG Tatva Elevators.',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  blogDetail: {
    path: '/blog/elevators-modern-architecture',
    title: 'Elevators in Modern Architecture | BG Tatva Elevators',
    description: 'Learn how thoughtful elevator planning, materials, lighting and long-term performance can strengthen modern architectural spaces.',
    image: '/images/social-elevator-3.webp',
    type: 'article',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  contact: {
    path: '/contact',
    title: 'Contact BG Tatva Elevators | Bengaluru',
    description: 'Discuss your elevator project with BG Tatva Elevators in Bengaluru. Request a consultation for home, commercial or modernisation requirements.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy | BG Tatva Elevators',
    description: 'Read how BG Tatva Elevators collects, uses and protects information shared through project enquiries and website communication.',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
}

export function getSeoPageKey(pathname) {
  if (pathname === seoPages.blogDetail.path) return 'blogDetail'
  if (pathname.startsWith('/contact')) return 'contact'
  if (pathname.startsWith('/faq')) return 'faq'
  if (pathname.startsWith('/projects')) return 'projects'
  if (pathname.startsWith('/elevators')) return 'elevators'
  if (pathname.startsWith('/about')) return 'about'
  if (pathname.startsWith('/privacy')) return 'privacy'
  if (pathname.startsWith('/blog')) return 'blog'
  return 'home'
}
