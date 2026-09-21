import { LuBuilding2, LuHouse, LuMoveUp, LuRuler, LuSparkles } from 'react-icons/lu'

export default function ProjectsApproachSection() {
  const stats = [
    ['150+', 'Completed projects', LuBuilding2],
    ['10+', 'Years of experience', LuMoveUp],
    ['120+', 'Bengaluru spaces transformed', LuSparkles],
  ]

  const steps = [
    ['01', 'Discover the space', 'We understand the building, its circulation and the experience the elevator needs to create.', LuHouse],
    ['02', 'Define the system', 'Capacity, travel, shaft planning and technology are aligned with the architecture.', LuRuler],
    ['03', 'Design every detail', 'Materials, doors, controls and lighting become one clear design language.', LuSparkles],
    ['04', 'Install and care', 'Installation, testing, handover and long-term service are managed locally.', LuMoveUp],
  ]

  return (
    <>
      <section className="projects-stats grid grid-cols-3 bg-[#0F2B45] text-white" aria-label="Company statistics">
        {stats.map(([value, label, Icon], index) => (
          <article
            key={label}
            className={`flex min-h-[150px] flex-col justify-center px-3 py-6 sm:px-6 md:min-h-[270px] md:px-[clamp(30px,6vw,90px)] md:py-14 ${index < 2 ? 'border-r border-white/15' : ''}`}
          >
            <Icon className="size-5 text-[#EB9B34] md:size-6" />
            <strong className="mt-4 text-[30px] font-medium leading-none sm:text-[36px] md:mt-7 md:text-[clamp(46px,5vw,72px)]">{value}</strong>
            <span className="mt-2 max-w-[180px] text-[10px] leading-[1.4] text-white/70 sm:text-[12px] md:mt-3 md:text-[14px]">{label}</span>
          </article>
        ))}
      </section>

      <section className="projects-approach grid gap-[clamp(44px,9vw,140px)] bg-[#F5F3EC] px-[clamp(20px,7vw,110px)] py-[clamp(64px,10vw,150px)] lg:grid-cols-[.8fr_1.2fr]">
        <header className="self-start lg:sticky lg:top-[116px]">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#0F2B45]">How we deliver</p>
          <h2 className="mb-0 mt-4 text-[clamp(34px,5vw,76px)] font-medium leading-[.98] tracking-[-.04em] max-sm:text-[31px]">From first drawing<br />to final journey.</h2>
          <p className="mb-0 mt-6 max-w-[520px] text-[15px] leading-[1.7] text-[#0F2B45] md:mt-7 md:text-[16px]">A Bengaluru-based team coordinating technical, architectural and service decisions from beginning to end.</p>
        </header>

        <div className="border-t border-[#EB9B34]">
          {steps.map(([number, title, copy, Icon]) => (
            <article key={number} className="grid grid-cols-[34px_1fr] gap-x-3 gap-y-2 border-b border-[#EB9B34] py-7 sm:grid-cols-[56px_1fr_auto] sm:gap-6 sm:py-9">
              <b className="pt-1 text-[10px] text-[#EB9B34] sm:text-[11px] sm:text-[#0F2B45]">{number}</b>
              <div className="min-w-0">
                <h3 className="m-0 text-[21px] font-medium leading-[1.15] sm:text-[25px]">{title}</h3>
                <p className="mb-0 mt-3 max-w-[620px] text-[13px] leading-[1.65] text-[#0F2B45] sm:text-[14px] sm:leading-[1.7]">{copy}</p>
              </div>
              <Icon className="size-6 text-[#0F2B45] max-sm:hidden" />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
