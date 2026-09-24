import { useEffect } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { CabinStylesSection, ElevatorComparisonSection, ElevatorsHeroSection, ElevatorSupportSection, ElevatorTypeSelectorSection } from '../components/sections/elevators'

export default function Elevators() {
  useEffect(() => {
    if (!window.location.hash) return undefined

    const scrollToDestination = () => {
      const destination = document.querySelector(window.location.hash)
      destination?.scrollIntoView({ block: 'start' })
    }

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToDestination)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return <main className="elevators-page min-h-screen bg-white text-[#0F2B45]"><SiteNavbar /><ElevatorsHeroSection /><ElevatorTypeSelectorSection /><ElevatorComparisonSection /><CabinStylesSection /><ElevatorSupportSection /><SiteFooter /></main>
}
