import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Projects from './pages/Projects'
import Elevators from './pages/Elevators'
import About from './pages/About'
import Privacy from './pages/Privacy'
import SeoMetadata from './components/SeoMetadata'
import { getSeoPageKey } from './data/seoData'

export default function App() {
  const path = window.location.pathname
  const seoPageKey = getSeoPageKey(path)
  let page = <Home />

  if (path === '/blog/elevators-modern-architecture') page = <BlogDetail />
  else if (path.startsWith('/contact')) page = <Contact />
  else if (path.startsWith('/faq')) page = <Faq />
  else if (path.startsWith('/projects')) page = <Projects />
  else if (path.startsWith('/elevators')) page = <Elevators />
  else if (path.startsWith('/about')) page = <About />
  else if (path.startsWith('/privacy')) page = <Privacy />
  else if (path.startsWith('/blog')) page = <Blog />

  return (
    <>
      <SeoMetadata pageKey={seoPageKey} />
      {page}
    </>
  )
}
