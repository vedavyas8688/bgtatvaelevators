import { LuBuilding2, LuDraftingCompass, LuHandshake, LuPalette, LuRuler, LuUserRound } from 'react-icons/lu'

const partners = [
  [LuUserRound, 'Homeowners', 'Vision and everyday needs'],
  [LuDraftingCompass, 'Architects', 'Space and architectural intent'],
  [LuPalette, 'Interior designers', 'Material and atmosphere'],
  [LuRuler, 'Consultants', 'Technical coordination'],
  [LuBuilding2, 'Builders', 'Execution and site readiness'],
]

export default function AboutPartnershipSection() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-center bg-[#F8F7F1] px-[clamp(18px,4vw,62px)] py-[clamp(34px,4vw,58px)] text-[#0F2B45]">
      <header className="mx-auto mb-6 flex w-full max-w-[1440px] items-end justify-between gap-8 max-md:flex-col max-md:items-start">
        <div><p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">Built through collaboration</p><h2 className="mb-0 mt-3 text-[clamp(34px,3.5vw,52px)] font-medium leading-none tracking-[-.035em]">One project. One shared direction.</h2></div>
        <p className="m-0 max-w-[480px] text-[14px] leading-[1.7] text-[#0F2B45]">Clear roles and connected decisions keep the original intent intact from the first conversation to handover.</p>
      </header>

      <div className="mx-auto grid max-w-[1440px] gap-4 lg:grid-cols-[1.08fr_.92fr]">
        <article className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[36px] bg-[#0F2B45] p-[clamp(32px,5vw,64px)] text-white max-md:min-h-[520px]">
          <div className="relative flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full bg-[#EB9B34] text-[#0F2B45]"><LuHandshake className="size-6" /></span><span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#EB9B34]">Collaboration works when</span></div>
          <h3 className="relative m-0 max-w-[680px] text-[clamp(40px,3.8vw,60px)] font-medium leading-[.98] tracking-[-.045em]">Different expertise moves in one clear direction.</h3>
          <div className="relative grid items-end gap-6 border-t border-white/15 pt-6 sm:grid-cols-[1fr_180px]">
            <p className="m-0 max-w-[500px] text-[14px] leading-[1.7] text-white/60">We keep design, engineering and delivery in the same conversation, protecting the project’s intent from planning through handover.</p>
            <figure className="m-0 h-[105px] overflow-hidden rounded-[16px]"><img src="/images/social-elevator-2.webp" alt="Elevator detail representing collaborative project delivery" loading="lazy" className="size-full object-cover" /></figure>
          </div>
        </article>

        <div className="overflow-hidden rounded-[36px] border border-[#EB9B34]/30 bg-[#F5F3EC] px-[clamp(24px,4vw,48px)]">
          {partners.map(([Icon, title, contribution], index) => (
            <article key={title} className={`group grid min-h-[104px] grid-cols-[48px_1fr] items-center gap-5 ${index ? 'border-t border-[#0F2B45]/10' : ''}`}>
              <span className="grid size-11 place-items-center rounded-full bg-[#F8F7F1] text-[#0F2B45] transition-colors group-hover:bg-[#EB9B34] group-hover:text-[#0F2B45]"><Icon className="size-5" /></span>
              <div><h3 className="m-0 text-[20px] font-medium">{title}</h3><p className="mb-0 mt-1 text-[12px] text-[#0F2B45]">{contribution}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
