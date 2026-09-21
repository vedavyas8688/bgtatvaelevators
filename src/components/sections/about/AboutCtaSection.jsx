import { LuArrowUpRight, LuMapPin } from 'react-icons/lu'

export default function AboutCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F3EC] px-[clamp(18px,4vw,64px)] py-[clamp(74px,8vw,126px)] text-[#0F2B45]">
      <div className="relative mx-auto max-w-[1460px]">
        <header className="mx-auto flex max-w-[1160px] flex-col items-center text-center">
          <div className="flex flex-col items-center">
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[.22em] text-[#EB9B34]">A considered beginning</p>
            <h2 className="mb-0 mt-5 max-w-[1100px] text-[clamp(46px,6vw,88px)] font-medium leading-[.94] tracking-[-.055em] [text-wrap:balance]">
              Bring the next journey <em className="font-light text-[#EB9B34]">into focus.</em>
            </h2>
          </div>
          <p className="mb-0 mt-7 max-w-[690px] text-[clamp(15px,1.25vw,18px)] leading-[1.75] text-[#0F2B45]/70">
            Share the building, the people and the ambition with our Bengaluru team. We will help shape a clear path from the first drawing onward.
          </p>
        </header>

        <div className="relative mt-[clamp(42px,5vw,72px)]">
          <figure className="relative m-0 min-h-[clamp(430px,52vw,690px)] overflow-hidden rounded-[clamp(24px,3vw,38px)] border border-[#0F2B45]/10 bg-[#091F33]">
            <img
              src="/images/social-elevator-5.png"
              alt="Panoramic glass elevator designed as part of a refined Bengaluru interior"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,43,69,.02)_30%,rgba(15,43,69,.28)_62%,rgba(15,43,69,.88)_100%)]" />
            <figcaption className="absolute bottom-8 left-7 max-w-[520px] text-white sm:bottom-12 sm:left-12 lg:max-w-[48%]">
              <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">Designed together</span>
              <strong className="mt-3 block text-[clamp(25px,2.8vw,42px)] font-medium leading-[1.08] tracking-[-.035em] text-white [text-shadow:0_2px_20px_rgba(4,20,34,.55)]">One clear direction, from architecture to arrival.</strong>
            </figcaption>
          </figure>

          <aside className="relative z-10 mx-3 -mt-5 rounded-[26px] border border-white/10 bg-[#0F2B45] p-7 text-white shadow-[0_28px_70px_rgba(4,20,34,.24)] sm:mx-7 sm:p-9 lg:absolute lg:bottom-9 lg:right-9 lg:m-0 lg:w-[430px] lg:p-11">
            <div className="flex items-center gap-3 border-b border-white/15 pb-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#EB9B34] text-[#0F2B45]"><LuMapPin aria-hidden="true" /></span>
              <div>
                <small className="block text-[9px] font-semibold uppercase tracking-[.18em] text-white/55">Based in Bengaluru</small>
                <strong className="mt-1 block text-[14px]">Consultation, delivery and care</strong>
              </div>
            </div>
            <h3 className="mb-0 mt-7 text-[clamp(27px,2.3vw,37px)] font-medium leading-[1.08] tracking-[-.035em]">Begin with a useful conversation.</h3>
            <p className="mb-0 mt-4 text-[14px] leading-[1.65] text-white/70">Tell us where your project stands. We will bring the right design and technical questions to the table.</p>
            <a href="/contact" className="editorial-cta editorial-cta--light mt-7">Plan your project <span aria-hidden="true"><LuArrowUpRight /></span></a>
          </aside>
        </div>
      </div>
    </section>
  )
}
