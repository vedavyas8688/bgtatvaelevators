import { useRef, useState } from 'react'
import { LuArrowUpRight, LuPause, LuPlay } from 'react-icons/lu'
import SiteNavbar from '../../SiteNavbar'

export default function HeroSection() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      try {
        await video.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
      return
    }

    video.pause()
    setIsPlaying(false)
  }

  const loopBeforeOutro = () => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration)) return

    if (video.currentTime >= video.duration - 3) {
      video.currentTime = 0
      void video.play()
    }
  }

  return (
    <section id="home" className="home-hero relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-brand-charcoal">
      <img
        src="/images/hero-background.png"
        alt="Glass elevator in a contemporary architectural atrium"
        fetchPriority="high"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        src="/videos/elevator-hero.mp4"
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        onTimeUpdate={loopBeforeOutro}
        onEnded={loopBeforeOutro}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,43,69,.96)_0%,rgba(15,43,69,.72)_31%,rgba(15,43,69,.08)_63%,rgba(15,43,69,.2)_100%)]" />
      <SiteNavbar />

      <div className="absolute left-[5.7%] top-[29.5%] z-10">
        <div className="max-w-[560px]">
          <h1 className="font-display text-[clamp(4.2rem,5.7vw,6rem)] font-medium leading-[.87] tracking-[-.035em] text-brand-white">
            <span className="block">An</span>
            <span className="block py-[.1em] text-brand-gold">elevated</span>
            <span className="block whitespace-nowrap">way of life.</span>
          </h1>
          <p className="mt-8 max-w-[330px] text-[17px] leading-[1.45] text-brand-white/80">More than movement —<br />an experience that inspires<br />every day.</p>
          <div className="home-hero__actions mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 text-brand-white">
            <button type="button" className="group flex items-center gap-4" onClick={toggleVideo} aria-pressed={isPlaying}>
              <span className="home-hero__play-icon grid size-[60px] shrink-0 place-items-center rounded-full border border-brand-gold text-brand-white transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-blue">
                {isPlaying ? <LuPause className="size-5" aria-hidden="true" /> : <LuPlay className="ml-1 size-5" aria-hidden="true" />}
              </span>
              <span className="text-[16px]">{isPlaying ? 'Pause Video' : 'Play Video'}</span>
            </button>
            <a href="/contact" className="home-hero__contact group inline-flex min-h-[50px] items-center gap-3 rounded-full bg-brand-gold px-6 py-3 text-[15px] font-semibold text-brand-blue transition-colors duration-300 hover:bg-brand-white">
              <span>Contact Us</span>
              <LuArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="home-hero__baseline absolute inset-x-[5.7%] bottom-0 z-10 h-px bg-brand-white/35" aria-hidden="true">
        <span className="block h-px w-[28%] bg-brand-gold" />
      </div>
    </section>
  )
}
