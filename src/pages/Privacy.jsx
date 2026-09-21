import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { PrivacyContentSection } from '../components/sections/privacy'

export default function Privacy() {
  return (
    <main className="privacy-page min-h-screen bg-[#F8F7F1] text-[#0F2B45]">
      <SiteNavbar />
      <PrivacyContentSection />
      <SiteFooter />
    </main>
  )
}
