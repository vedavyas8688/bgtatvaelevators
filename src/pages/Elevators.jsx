import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { CabinStylesSection, ElevatorComparisonSection, ElevatorsHeroSection, ElevatorSupportSection, ElevatorTypeSelectorSection } from '../components/sections/ElevatorsPageSections'

export default function Elevators() {
  return <main className="elevators-page min-h-screen bg-white text-[#0F2B45]"><SiteNavbar /><ElevatorsHeroSection /><ElevatorTypeSelectorSection /><ElevatorComparisonSection /><CabinStylesSection /><ElevatorSupportSection /><SiteFooter /></main>
}
