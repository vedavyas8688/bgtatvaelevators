import { LuArrowDown } from 'react-icons/lu'

export default function AboutHeroSection() {
  return (
    <section className="grid min-h-screen bg-[#F5F3EC] pt-[96px] text-[#0F2B45] lg:h-[100svh] lg:min-h-[700px] lg:grid-cols-[.88fr_1.12fr] lg:overflow-hidden">
      <div className="flex min-h-0 flex-col justify-between px-[clamp(28px,7vw,110px)] py-[clamp(34px,5vh,68px)]">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[.22em] text-[#0F2B45]">BG Tatva · Bengaluru</p>
        <div className="my-[clamp(24px,4vh,48px)]">
          <h1 className="m-0 text-[clamp(56px,6.4vw,98px)] font-medium leading-[.86] tracking-[-.06em]">Made for<br />the way<br /><em className="font-light text-[#0F2B45]">you move.</em></h1>
          <p className="mb-0 mt-7 max-w-[560px] text-[16px] leading-[1.68] text-[#0F2B45]">Elevators considered as part of the architecture, supported by a Bengaluru team that stays close from first plan to everyday use.</p>
        </div>
        <a href="#about-introduction" className="inline-flex w-fit items-center gap-3 text-[12px] font-semibold uppercase tracking-[.12em]">Discover our approach <LuArrowDown /></a>
      </div>
      <figure className="relative m-3 ml-0 min-h-[520px] overflow-hidden rounded-[34px] lg:min-h-0 max-lg:m-3">
        <img src="/images/social-elevator-3.webp" alt="Panoramic elevator in a contemporary Bengaluru home" className="size-full object-cover" />
        <figcaption className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-3 text-[11px] backdrop-blur-md">Architecture · Movement · Care</figcaption>
      </figure>
    </section>
  )
}
