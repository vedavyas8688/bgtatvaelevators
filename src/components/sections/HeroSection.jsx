import { LuPlay } from 'react-icons/lu'
import SiteNavbar from '../SiteNavbar'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[720px] w-full overflow-hidden bg-brand-charcoal lg:min-h-screen">
      <img src="/images/hero-background.png" alt="Glass elevator in a contemporary architectural atrium" fetchPriority="high" className="absolute inset-0 h-full w-full object-fill" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(45,79,110,.96)_0%,rgba(45,79,110,.72)_31%,rgba(0,0,0,.08)_63%,rgba(45,79,110,.2)_100%)]" />
      <SiteNavbar />

      <div className="absolute left-[5.7%] top-[29.5%] z-10">
        <div className="max-w-[560px]">
          <h1 className="font-display text-[clamp(4.2rem,5.7vw,6rem)] font-medium leading-[.87] tracking-[-.035em] text-brand-white">
            <span className="block">An</span>
            <span className="block py-[.1em] text-brand-gold">elevated</span>
            <span className="block whitespace-nowrap">way of life.</span>
          </h1>
          <p className="mt-8 max-w-[330px] text-[17px] leading-[1.45] text-brand-white/80">More than movement —<br />an experience that inspires<br />every day.</p>
          <div className="mt-9 flex items-center gap-4 text-brand-white">
            <span className="grid size-[60px] place-items-center rounded-full border border-brand-gold text-brand-white" aria-hidden="true">
              <LuPlay className="ml-1 size-5" />
            </span>
            <span className="text-[16px]">Play Video</span>
          </div>
        </div>
      </div>
    </section>
  )
}
