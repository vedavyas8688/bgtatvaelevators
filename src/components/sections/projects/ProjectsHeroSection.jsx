import { LuArrowRight } from 'react-icons/lu'

export default function ProjectsHeroSection() {
  return (
    <>
      <section className="bg-[#F5F3EC] px-[clamp(20px,5vw,76px)] pb-[clamp(70px,8vw,120px)] pt-[150px]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-x-[clamp(48px,7vw,110px)] gap-y-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-x-[clamp(44px,6vw,90px)]">
          <div>
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#0F2B45]">Selected work · Bengaluru</p>
            <h1 className="mb-0 mt-5 max-w-[950px] text-[clamp(64px,8vw,124px)] font-medium leading-[.84] tracking-[-.06em] lg:max-w-none lg:text-[clamp(60px,5.6vw,92px)] lg:leading-[.9] lg:tracking-[-.055em]">
              <span className="block lg:whitespace-nowrap">Spaces transformed.</span>
              <em className="mt-2 block font-light text-[#0F2B45] lg:mt-3 lg:whitespace-nowrap">Journeys elevated.</em>
            </h1>
          </div>
          <div className="max-w-[520px] lg:max-w-[480px] lg:justify-self-end">
            <p className="m-0 text-[17px] leading-[1.7] text-[#0F2B45]">Explore elevators supplied across Bengaluru, shaped around local homes, commercial spaces and the people who use them.</p>
            <a href="#project-library" className="editorial-cta mt-7">View all projects <span aria-hidden="true"><LuArrowRight /></span></a>
          </div>
        </div>
      </section>

      <section className="relative min-h-[720px] overflow-hidden bg-[#0F2B45] max-md:min-h-[620px]">
        <img src="/images/social-elevator-3.webp" alt="Panoramic glass elevator in a contemporary Bengaluru residence" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,43,69,.84),rgba(15,43,69,.18)_70%)]" />
        <div className="relative z-10 flex min-h-[720px] max-w-[720px] flex-col justify-end px-[clamp(24px,7vw,110px)] py-[clamp(50px,7vw,100px)] text-white max-md:min-h-[620px]">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">Featured · Bengaluru residence</p>
          <h2 className="mb-0 mt-4 text-[clamp(48px,6vw,88px)] font-medium leading-[.94] tracking-[-.045em]">A lift at the heart of the home.</h2>
          <p className="mb-0 mt-6 max-w-[590px] text-[16px] leading-[1.7] text-white/80">A panoramic elevator turns vertical movement into a transparent architectural feature while keeping every level visually connected.</p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <span className="rounded-full border border-white/35 px-4 py-2 text-[11px]">4 stops</span>
            <span className="rounded-full border border-white/35 px-4 py-2 text-[11px]">Panoramic glass</span>
            <span className="rounded-full border border-white/35 px-4 py-2 text-[11px]">Private residence</span>
          </div>
        </div>
      </section>
    </>
  )
}
