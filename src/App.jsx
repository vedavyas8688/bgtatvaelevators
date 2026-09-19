import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Projects from './pages/Projects'
import Elevators from './pages/Elevators'
import About from './pages/About'
import Privacy from './pages/Privacy'

export default function App() {
  if (window.location.pathname === '/blog/elevators-modern-architecture') return <BlogDetail />
  if (window.location.pathname.startsWith('/contact')) return <Contact />
  if (window.location.pathname.startsWith('/faq')) return <Faq />
  if (window.location.pathname.startsWith('/projects')) return <Projects />
  if (window.location.pathname.startsWith('/elevators')) return <Elevators />
  if (window.location.pathname.startsWith('/about')) return <About />
  if (window.location.pathname.startsWith('/privacy')) return <Privacy />
  return window.location.pathname.startsWith('/blog') ? <Blog /> : <Home />
}
