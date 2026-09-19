import HeroSection from '../components/sections/HeroSection'
import AutoGallerySection from '../components/sections/AutoGallerySection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import ElevatorExplorerSection from '../components/sections/ElevatorExplorerSection'
import EditorialSections from '../components/sections/EditorialSections'
import SiteFooter from '../components/SiteFooter'

export default function Home() {
  return <main><HeroSection /><AutoGallerySection /><AboutSection /><ServicesSection /><ElevatorExplorerSection /><EditorialSections /><SiteFooter /></main>
}
