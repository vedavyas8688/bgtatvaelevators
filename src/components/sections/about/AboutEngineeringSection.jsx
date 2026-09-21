const steps = [
  ['01', 'Listen', 'Understand the building, people and priorities before recommending a system.'],
  ['02', 'Coordinate', 'Align shaft, structure, services and finishes with architects and contractors.'],
  ['03', 'Execute', 'Install and commission with disciplined checks and clear site communication.'],
  ['04', 'Support', 'Protect performance through responsive Bengaluru-based maintenance.'],
]

export default function AboutEngineeringSection() {
  return (
    <section className="bg-white px-[clamp(18px,7vw,110px)] pb-[clamp(48px,5vw,76px)] pt-6 text-[#0F2B45]">
      <header className="mx-auto max-w-[850px] text-center">
        <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#0F2B45] sm:text-[11px]">
          The engineering behind ease
        </p>
        <h2 className="mb-0 mt-4 text-[clamp(36px,4.7vw,72px)] font-medium leading-[1] tracking-[-.04em]">
          Quiet confidence,
          <br />
          built into the process.
        </h2>
      </header>

      <div className="mx-auto mt-8 max-w-[1200px] border-t border-[#EB9B34]">
        {steps.map(([number, title, copy], index) => {
          const numberOnRight = index % 2 === 1

          return (
            <article key={number} className="border-b border-[#EB9B34]">
              <div className={`grid min-h-[150px] items-center gap-4 py-6 sm:hidden ${numberOnRight ? 'grid-cols-[1fr_48px]' : 'grid-cols-[48px_1fr]'}`}>
                <span
                  className={`flex size-11 items-center justify-center rounded-full border border-[#EB9B34] bg-[#F8F7F1] text-[10px] font-semibold tracking-[.12em] text-[#0F2B45] ${numberOnRight ? 'col-start-2' : 'col-start-1'}`}
                  aria-hidden="true"
                >
                  {number}
                </span>
                <div className={`${numberOnRight ? 'col-start-1 row-start-1 pr-2' : 'col-start-2 row-start-1 pl-1'}`}>
                  <h3 className="m-0 text-[21px] font-medium leading-tight">{title}</h3>
                  <p className="mb-0 mt-2 text-[13px] leading-[1.65] text-[#0F2B45]">{copy}</p>
                </div>
              </div>

              <div className="hidden items-center gap-6 py-8 sm:grid sm:grid-cols-[80px_.55fr_1fr]">
                <b className="text-[11px] text-[#0F2B45]">{number}</b>
                <h3 className="m-0 text-[24px] font-medium">{title}</h3>
                <p className="m-0 max-w-[600px] text-[15px] leading-[1.7] text-[#0F2B45]">{copy}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
