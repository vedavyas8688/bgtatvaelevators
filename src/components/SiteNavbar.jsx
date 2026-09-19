import { useState } from 'react'
import { LuArrowRight, LuMenu, LuX } from 'react-icons/lu'

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
  const [menuOpen, setMenuOpen] = useState(false)

  const active = (href) => {
    if (href === '/') return path === '/'
    if (href === '/blog') return path.startsWith('/blog')
    return path.startsWith(href)
  }

  return (
    <nav className={`site-navbar ${menuOpen ? 'is-menu-open' : ''}`} aria-label="Primary navigation">
      <a href="/" className="site-navbar-logo"><img src="/images/bg-tatva-logo-transparent.png" alt="BG Tatva Elevators" /></a>
      <div className="site-navbar-links">
        {links.map(([label, href]) => <a key={label} href={href} aria-current={active(href) ? 'page' : undefined}>{label}</a>)}
      </div>
      <a href="/contact" className="site-navbar-cta"><span className="site-navbar-cta-label">Get a Quote</span><span aria-hidden="true"><LuArrowRight /></span></a>
      <button className="site-navbar-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <LuX /> : <LuMenu />}
      </button>
      <div className="site-navbar-mobile" id="mobile-navigation">
        <span className="site-navbar-mobile-label">Navigation</span>
        <div>
          {links.map(([label, href]) => <a key={label} href={href} aria-current={active(href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}<LuArrowRight aria-hidden="true" /></a>)}
        </div>
        <a href="/contact" className="site-navbar-mobile-cta" onClick={() => setMenuOpen(false)}>Get a Quote <LuArrowRight aria-hidden="true" /></a>
      </div>
    </nav>
  )
}
