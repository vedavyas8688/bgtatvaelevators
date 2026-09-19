export default function AboutStorySection() {
  return (
    <section className="grid bg-[#2D4F6E] text-white lg:grid-cols-[1.15fr_.85fr]">
      <figure className="m-0 min-h-[660px] overflow-hidden max-lg:min-h-[500px]"><img src="/images/elevator-lobby-luxe.png" alt="Elevator integrated into a premium architectural lobby" loading="lazy" className="size-full object-cover" /></figure>
      <div className="flex flex-col justify-center px-[clamp(28px,7vw,105px)] py-[clamp(65px,7vw,105px)]">
        <span className="text-[72px] font-medium leading-none text-[#D5B17A]">10<sup className="text-[28px]">+</sup></span>
        <p className="mb-0 mt-3 text-[11px] uppercase tracking-[.18em] text-white/45">Years of experience</p>
        <h2 className="mb-0 mt-10 text-[clamp(42px,4.3vw,66px)] font-medium leading-[1] tracking-[-.04em]">Experience taught us where attention matters.</h2>
        <p className="mb-0 mt-7 text-[16px] leading-[1.8] text-white/65">In the coordination others overlook. In the sound of a closing door. In the light reflected from a control panel. And in being available when the building needs support.</p>
        <div className="mt-9 grid grid-cols-2 gap-8 border-t border-white/15 pt-7"><div><strong className="text-[36px] font-medium">150+</strong><p className="mt-2 text-[12px] text-white/50">Projects completed</p></div><div><strong className="text-[36px] font-medium">120+</strong><p className="mt-2 text-[12px] text-white/50">Spaces transformed</p></div></div>
      </div>
    </section>
  )
}
