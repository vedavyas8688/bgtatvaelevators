import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { AboutBengaluruSection, AboutCareSection, AboutCtaSection, AboutDesignSection, AboutEngineeringSection, AboutExpertiseSection, AboutHeroSection, AboutIntroductionSection, AboutPartnershipSection, AboutStorySection } from '../components/sections/about'

export default function About() {
  return <main className="min-h-screen bg-white text-[#2D4F6E]"><SiteNavbar /><AboutHeroSection /><AboutIntroductionSection /><AboutStorySection /><AboutDesignSection /><AboutExpertiseSection /><AboutEngineeringSection /><AboutBengaluruSection /><AboutPartnershipSection /><AboutCareSection /><AboutCtaSection /><SiteFooter /></main>
}
