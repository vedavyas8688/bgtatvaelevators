import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { CabinStylesSection, ElevatorComparisonSection, ElevatorsHeroSection, ElevatorSupportSection, ElevatorTypeSelectorSection } from '../components/sections/ElevatorsPageSections'

export default function Elevators() {
  return <main className="min-h-screen bg-white text-[#172e3b]"><SiteNavbar /><ElevatorsHeroSection /><ElevatorTypeSelectorSection /><ElevatorComparisonSection /><CabinStylesSection /><ElevatorSupportSection /><SiteFooter /></main>
}
