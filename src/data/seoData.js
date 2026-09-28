export const siteSeo = {
  siteName: 'BG Tatva Elevators',
  siteUrl: 'https://bgtatva.com',
  locale: 'en_IN',
  defaultImage: '/images/hero-background.webp',
  themeColor: '#0F2B45',
  lastModified: '2026-09-28',
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
    title: 'Elevator Company in Bengaluru | BG Tatva Elevators',
    description: 'BG Tatva Elevators brings 31+ years of experience and 2,700+ lifts to home, commercial, panoramic and goods elevator projects with smart safety technology.',
    priority: 1,
    changeFrequency: 'weekly',
  },
  about: {
    path: '/about',
    title: '31+ Years in Elevator Engineering | BG Tatva',
    description: 'Learn about BG Tatva Elevators: 31+ years of lift experience, 2,700+ installations, safety-led engineering, intelligent controls and customer support.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  elevators: {
    path: '/elevators',
    title: 'Home, Commercial & Goods Lifts | BG Tatva Elevators',
    description: 'Explore BG Tatva elevators with UCM protection, ARD, IoT monitoring, app access, disc brakes, payloads up to 5 tonnes and speeds up to 3 m/s.',
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
    image: '/images/unique/social-elevator-3-61f15eff.webp',
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
