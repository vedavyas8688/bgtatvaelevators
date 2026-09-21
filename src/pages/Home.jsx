import SiteFooter from '../components/SiteFooter'
import {
  AboutSection,
  ArchitectResourcesSection,
  AutoGallerySection,
  ElevatorExplorerSection,
  HeroSection,
  InsightsSection,
  InstagramSection,
  LifestyleSection,
  MetricsSection,
  ModernisationCompareSection,
  ServicesSection,
  SignatureProjectSection,
} from '../components/sections/home'

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <AutoGallerySection />
      <AboutSection />
      <ServicesSection />
      <SignatureProjectSection />
      <ModernisationCompareSection />
      <ElevatorExplorerSection />
      <ArchitectResourcesSection />
      <LifestyleSection />
      <MetricsSection />
      <InsightsSection />
      <InstagramSection />
      <SiteFooter />
    </main>
  )
}
