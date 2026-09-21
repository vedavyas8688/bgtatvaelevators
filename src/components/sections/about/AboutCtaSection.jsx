import { LuArrowUpRight, LuMapPin } from 'react-icons/lu'

export default function AboutCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F3EC] px-4 py-14 text-[#0F2B45] sm:px-[clamp(18px,4vw,64px)] sm:py-[clamp(74px,8vw,126px)]">
      <div className="relative mx-auto max-w-[1460px]">
        <header className="mx-auto flex max-w-[1160px] flex-col items-start text-left sm:items-center sm:text-center">
          <div className="flex flex-col items-start sm:items-center">
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[.22em] text-[#EB9B34]">A considered beginning</p>
            <h2 className="mb-0 mt-4 max-w-[1100px] text-[40px] font-medium leading-[.96] tracking-[-.05em] [text-wrap:balance] sm:mt-5 sm:text-[clamp(46px,6vw,88px)] sm:leading-[.94]">
              Bring the next journey <em className="font-light text-[#EB9B34]">into focus.</em>
            </h2>
          </div>
          <p className="mb-0 mt-5 max-w-[690px] text-[14px] leading-[1.65] text-[#0F2B45]/75 sm:mt-7 sm:text-[clamp(15px,1.25vw,18px)] sm:leading-[1.75]">
            Share the building, the people and the ambition with our Bengaluru team. We will help shape a clear path from the first drawing onward.
          </p>
        </header>

        <div className="relative mt-8 sm:mt-[clamp(42px,5vw,72px)]">
          <figure className="relative m-0 min-h-[410px] overflow-hidden rounded-[22px] border border-[#0F2B45]/10 bg-[#091F33] sm:min-h-[clamp(430px,52vw,690px)] sm:rounded-[clamp(24px,3vw,38px)]">
            <img
              src="/images/social-elevator-5.png"
              alt="Panoramic glass elevator designed as part of a refined Bengaluru interior"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,43,69,.02)_30%,rgba(15,43,69,.28)_62%,rgba(15,43,69,.88)_100%)]" />
            <figcaption className="absolute inset-x-5 bottom-6 max-w-[520px] text-white sm:inset-x-auto sm:bottom-12 sm:left-12 lg:max-w-[48%]">
              <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">Designed together</span>
              <strong className="mt-2 block text-[27px] font-medium leading-[1.06] tracking-[-.035em] text-white [text-shadow:0_2px_20px_rgba(4,20,34,.55)] sm:mt-3 sm:text-[clamp(25px,2.8vw,42px)] sm:leading-[1.08]">One clear direction, from architecture to arrival.</strong>
            </figcaption>
          </figure>

          <aside className="relative z-10 mx-0 -mt-2 rounded-[22px] border border-[#EB9B34]/35 bg-[#0F2B45] p-6 text-white shadow-[0_24px_60px_rgba(4,20,34,.2)] sm:mx-7 sm:-mt-5 sm:rounded-[26px] sm:p-9 lg:absolute lg:bottom-9 lg:right-9 lg:m-0 lg:w-[430px] lg:p-11">
            <div className="flex items-center gap-3 border-b border-white/20 pb-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#EB9B34] text-[#0F2B45]"><LuMapPin aria-hidden="true" /></span>
              <div>
                <small className="block text-[9px] font-semibold uppercase tracking-[.18em] text-white/55">Based in Bengaluru</small>
                <strong className="mt-1 block text-[14px]">Consultation, delivery and care</strong>
              </div>
            </div>
            <h3 className="mb-0 mt-6 text-[28px] font-medium leading-[1.06] tracking-[-.035em] sm:mt-7 sm:text-[clamp(27px,2.3vw,37px)] sm:leading-[1.08]">Begin with a useful conversation.</h3>
            <p className="mb-0 mt-4 text-[13px] leading-[1.65] text-white/75 sm:text-[14px]">Tell us where your project stands. We will bring the right design and technical questions to the table.</p>
            <a href="/contact" className="editorial-cta editorial-cta--light mt-6 sm:mt-7">Plan your project <span aria-hidden="true"><LuArrowUpRight /></span></a>
          </aside>
        </div>
      </div>
    </section>
  )
}
