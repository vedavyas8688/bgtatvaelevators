import { LuArrowRight } from 'react-icons/lu'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Elevators', '/elevators'],
  ['Projects', '/projects'],
  ['FAQs', '/faq'],
  ['Blogs', '/blog'],
  ['Contact', '/contact'],
]

export default function SiteNavbar() {
  const path = window.location.pathname

  const active = (href) => {
    if (href === '/') return path === '/'
    if (href === '/blog') return path.startsWith('/blog')
    return path.startsWith(href)
  }

  return (
    <nav className="site-navbar" aria-label="Primary navigation">
      <a href="/" className="site-navbar-logo"><img src="/images/bg-tatva-logo-transparent.png" alt="BG Tatva Elevators" /></a>
      <div className="site-navbar-links">
        {links.map(([label, href]) => <a key={label} href={href} aria-current={active(href) ? 'page' : undefined}>{label}</a>)}
      </div>
      <a href="/contact" className="site-navbar-cta">Get a Quote <span aria-hidden="true"><LuArrowRight /></span></a>
    </nav>
  )
}
