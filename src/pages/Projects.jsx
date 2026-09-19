import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { ProjectLibrarySection, ProjectsApproachSection, ProjectsCtaSection, ProjectsHeroSection } from '../components/sections/ProjectsPageSections'

export default function Projects() {
  return <main className="min-h-screen bg-white text-[#172e3b]"><SiteNavbar /><ProjectsHeroSection /><ProjectLibrarySection /><ProjectsApproachSection /><ProjectsCtaSection /><SiteFooter /></main>
}
