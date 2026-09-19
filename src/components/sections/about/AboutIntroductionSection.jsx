export default function AboutIntroductionSection() {
  return (
    <section id="about-introduction" className="scroll-mt-[104px] bg-white px-[clamp(24px,7vw,110px)] py-[clamp(70px,7vw,110px)] text-[#0F2B45]">
      <div className="mx-auto grid max-w-[1420px] gap-14 lg:grid-cols-[.36fr_1fr]">
        <p className="m-0 pt-3 text-[11px] font-semibold uppercase tracking-[.2em] text-[#0F2B45]">What we believe</p>
        <div>
          <h2 className="m-0 max-w-[1050px] text-[clamp(42px,5vw,76px)] font-medium leading-[1.04] tracking-[-.045em]">An elevator should feel resolved before the doors even open.</h2>
          <div className="mt-10 grid gap-7 border-t border-[#F5F3EC] pt-7 md:grid-cols-2">
            <p className="m-0 text-[16px] leading-[1.75] text-[#0F2B45]">That means planning it with the building—not placing it into whatever space remains. Position, proportion and movement all begin with the architecture.</p>
            <p className="m-0 text-[16px] leading-[1.75] text-[#0F2B45]">It also means balancing visual character with dependable engineering, clear operation and support that continues after handover.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
