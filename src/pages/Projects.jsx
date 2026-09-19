import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { ProjectLibrarySection, ProjectsApproachSection, ProjectsCtaSection, ProjectsHeroSection } from '../components/sections/ProjectsPageSections'

export default function Projects() {
  return <main className="projects-page min-h-screen bg-white text-[#0F2B45]"><SiteNavbar /><ProjectsHeroSection /><ProjectLibrarySection /><ProjectsApproachSection /><ProjectsCtaSection /><SiteFooter /></main>
}
