import { useState } from 'react'
import { LuArrowRight, LuChevronDown, LuMail, LuMessageCircle } from 'react-icons/lu'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'

const faqs = [
  ['Which type of elevator is right for my home?', 'The right system depends on available space, travel height, expected usage, design priorities and site conditions. We begin with the architecture and recommend a solution that balances comfort, performance and long-term serviceability.'],
  ['How much space does a home elevator require?', 'Space requirements vary by elevator type, capacity and door configuration. Compact residential systems can be planned efficiently, but the shaft, pit and overhead should always be coordinated with your architect and our technical team.'],
  ['Can an elevator be added to an existing house?', 'Yes. Many existing homes can accommodate an elevator internally or through an external shaft. A site assessment helps us identify the most practical position while protecting circulation, daylight and the character of the home.'],
  ['When should BG Tatva join the project?', 'Ideally, involve us during concept or early architectural planning. Early coordination gives your team more freedom to optimise the shaft, landings, structure, services and cabin design before construction decisions become fixed.'],
  ['Do you work with architects and interior designers?', 'Yes. We regularly coordinate with architects, structural consultants, MEP teams and interior designers. We provide the technical information and finish guidance required to integrate the elevator cleanly into the wider project.'],
  ['How long does an elevator project take?', 'Timelines depend on the selected system, customisation, civil readiness and project location. After the design and technical scope are confirmed, we provide a clear programme covering approvals, production, installation and commissioning.'],
  ['What cabin finishes can I choose?', 'Options may include timber veneers, decorative laminates, metal finishes, glass, stone-inspired panels, mirrors, custom lighting and coordinated flooring. Our team helps create a balanced palette suited to the building.'],
  ['Can the elevator match my interior design?', 'Absolutely. Door surrounds, cabin walls, ceilings, lighting, handrails and controls can be coordinated with the architectural language of your space so the elevator feels considered rather than added later.'],
  ['Are panoramic glass elevators available?', 'Yes. Panoramic elevators can create a light, visually connected experience in homes, hospitality spaces and commercial buildings. Their feasibility depends on structure, heat exposure, privacy and the intended view.'],
  ['What safety features are included?', 'Systems are configured with appropriate door interlocks, emergency communication, alarm functions, backup operation and other safety provisions required for the selected application and applicable standards.'],
  ['What happens during a power failure?', 'Depending on the system, an automatic rescue device or backup power arrangement can move the cabin to a designated floor and open the doors safely. We explain the exact emergency operation during handover.'],
  ['How often does an elevator need maintenance?', 'Preventive maintenance should be scheduled regularly according to the system, usage and operating environment. Consistent service improves reliability, identifies wear early and protects the quality of the passenger experience.'],
  ['Do you provide maintenance after installation?', 'Yes. We provide ongoing service support and can recommend a maintenance plan suited to the elevator, building type and expected frequency of use.'],
  ['Can you modernise an older elevator?', 'Yes. Modernisation may include controls, drives, doors, fixtures, lighting, safety systems and cabin finishes. We first assess the existing equipment and recommend upgrades with clear performance and design benefits.'],
  ['How do I begin a project with BG Tatva?', 'Share your location, building type, number of floors, current construction stage and any drawings available. Our team will review the information and arrange a focused discovery conversation or site visit.'],
  ['What is the difference between a home and commercial elevator?', 'Home elevators are designed around residential usage, comfort and compact integration. Commercial elevators typically serve higher traffic, different capacities and more demanding operational and regulatory requirements.'],
  ['How many people can a residential elevator carry?', 'Capacity depends on the chosen model and available shaft dimensions. We recommend capacity based on daily use, family needs, accessibility requirements and the number of floors served.'],
  ['Can an elevator accommodate a wheelchair?', 'Yes. Accessibility should be planned from the start, including cabin dimensions, door width, landing clearances, control heights and approach routes. We coordinate these details with the project team.'],
  ['Does a home elevator need a machine room?', 'Not always. Many contemporary systems use machine-room-less configurations, while other solutions have different equipment requirements. We select the approach that best suits the building and maintenance access.'],
  ['Is a pit always required?', 'Pit depth varies by technology and application. Some solutions use a shallow pit, while others require more depth. Confirming this early prevents structural conflicts and helps maintain clean floor transitions.'],
  ['How much overhead space is needed?', 'Overhead requirements depend on travel, speed, drive type and cabin configuration. Our technical drawings provide the exact dimension needed before structural work is finalised.'],
  ['Can I choose the elevator door style?', 'Yes. Door configuration, opening direction, finish and surrounding portal can be selected within the technical limits of the system. We help coordinate doors with each landing.'],
  ['How quiet is a residential elevator?', 'A well-selected, correctly installed and maintained elevator should operate smoothly and quietly. Structural isolation, equipment choice and precise installation all contribute to acoustic comfort.'],
  ['How energy efficient are modern elevators?', 'Modern drive systems, LED lighting, standby modes and efficient controls can reduce energy use considerably. The most suitable solution is selected according to travel, load and usage patterns.'],
  ['Can the cabin lighting be customised?', 'Yes. Options can include perimeter lighting, downlights, illuminated panels and different colour temperatures. We use light to improve comfort, material depth and visual clarity without glare.'],
  ['Can I use my own flooring inside the cabin?', 'In many cases, project flooring can be coordinated with the cabin, subject to weight, thickness, slip resistance and installation requirements. This should be confirmed before production.'],
  ['What information is needed for an initial proposal?', 'Helpful information includes plans, sections, floor-to-floor heights, project location, building use, preferred capacity, design references and the expected construction timeline.'],
  ['Do you handle installation and commissioning?', 'Yes. Our scope can include technical coordination, installation, testing, commissioning and handover. The exact responsibilities and site-readiness requirements are defined clearly before work begins.'],
  ['What should be ready before installation?', 'The shaft, pit, overhead, openings, electrical supply, access and surrounding civil works must meet the approved drawings. We provide readiness guidance and coordinate checks before mobilisation.'],
  ['How can I schedule a consultation?', 'Use our contact page, email info@bgtatva.com or call our team. Tell us a little about the project and we will arrange the most useful next step, whether that is a design meeting or site review.'],
]

export default function Faq() {
  const [visibleCount, setVisibleCount] = useState(15)
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <main className="min-h-screen bg-[#f8f7f1] text-[#172e3b]">
      <SiteNavbar />

      <section className="flex min-h-[620px] flex-col items-center justify-center bg-[linear-gradient(180deg,#f8f7ef_0%,#eef1ec_100%)] px-6 pb-[90px] pt-[150px] text-center max-md:min-h-[560px] max-sm:min-h-[500px] max-sm:px-5 max-sm:pb-[70px] max-sm:pt-[125px]">
        <p className="mb-[18px] text-[11px] font-semibold uppercase tracking-[.2em] text-[#9c653f]">BG Tatva knowledge centre</p>
        <h1 className="m-0 text-[clamp(62px,7vw,108px)] font-medium leading-[.9] tracking-[-.055em] max-sm:text-[54px]">Questions, answered<br /><em className="font-light text-[#9c653f]">with clarity.</em></h1>
        <span className="mt-[30px] max-w-[650px] text-[18px] leading-[1.65] text-[#59666a] max-sm:text-[15px]">Practical guidance for planning, designing and caring for a refined elevator experience.</span>
      </section>

      <section className="grid gap-[clamp(60px,9vw,150px)] bg-white px-[clamp(24px,7vw,110px)] py-[130px] lg:grid-cols-[minmax(300px,.72fr)_minmax(0,1.28fr)] max-lg:gap-[60px] max-lg:py-[90px] max-sm:gap-[50px] max-sm:px-[18px] max-sm:py-[72px]" aria-labelledby="faq-title">
        <aside className="self-start lg:sticky lg:top-[116px]">
          <p className="mb-[18px] text-[11px] font-semibold uppercase tracking-[.2em] text-[#9c653f]">Frequently asked questions</p>
          <h2 id="faq-title" className="m-0 max-w-[560px] text-[clamp(48px,5vw,76px)] font-medium leading-[.98] tracking-[-.045em] max-lg:max-w-[700px] max-sm:text-[43px]">Everything you need to move forward.</h2>
          <span className="mt-7 block max-w-[500px] text-[16px] leading-[1.75] text-[#59666a] max-lg:max-w-[650px]">Explore answers about planning, design, installation, safety and long-term care. If your question is more specific, our team is ready to help.</span>
          <a className="mt-[34px] inline-flex items-center gap-[10px] rounded-full bg-[#2d4f6e] px-[21px] py-[14px] text-[13px] font-semibold text-white" href="/contact">Ask our team <span aria-hidden="true"><LuArrowRight /></span></a>
        </aside>

        <div className="border-t border-[#c9d0ce]">
          {faqs.slice(0, visibleCount).map(([question, answer], index) => (
            <article className="border-b border-[#c9d0ce]" key={question}>
              <button className="flex w-full items-center justify-between gap-[30px] border-0 bg-transparent py-[30px] text-left text-[#172e3b] max-sm:gap-4 max-sm:py-6" type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} aria-expanded={openIndex === index}>
                <span className="flex items-start gap-[22px] text-[20px] font-medium leading-[1.35] max-sm:gap-3 max-sm:text-[17px]"><small className="min-w-[26px] pt-[5px] text-[10px] tracking-[.08em] text-[#9c653f]">{String(index + 1).padStart(2, '0')}</small>{question}</span>
                <i className={`grid size-[38px] flex-none place-items-center rounded-full border not-italic max-sm:size-[34px] ${openIndex === index ? 'border-[#d5b17a] bg-[#d5b17a]' : 'border-[#bec7c4]'}`}><LuChevronDown className={`size-[17px] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} /></i>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><p className={`m-0 ml-12 min-h-0 max-w-[720px] overflow-hidden text-[15px] leading-[1.75] text-[#59666a] max-sm:ml-[38px] max-sm:text-[14px] ${openIndex === index ? 'pb-[30px]' : ''}`}>{answer}</p></div>
            </article>
          ))}

          {visibleCount < faqs.length && (
            <button className="mx-auto mt-[46px] flex items-center gap-[11px] rounded-full border border-[#2d4f6e] bg-transparent px-6 py-[15px] text-[13px] font-semibold text-[#172e3b] transition-colors hover:bg-[#2d4f6e] hover:text-white" type="button" onClick={() => setVisibleCount(faqs.length)}>
              Load 15 more questions <span aria-hidden="true"><LuArrowRight /></span>
            </button>
          )}
        </div>
      </section>

      <section className="flex min-h-[500px] flex-col items-center justify-center bg-[#d5b17a] px-6 py-20 text-center max-sm:min-h-[430px]">
        <LuMessageCircle className="size-[34px]" aria-hidden="true" />
        <p className="mb-[14px] mt-6 text-[11px] font-semibold uppercase tracking-[.18em]">Still have a question?</p>
        <h2 className="m-0 text-[clamp(50px,6vw,86px)] font-medium leading-none max-sm:text-[46px]">Let’s talk about your project.</h2>
        <a className="mt-[34px] inline-flex items-center gap-[10px] rounded-full bg-[#172e3b] px-[22px] py-[14px] text-white" href="mailto:info@bgtatva.com"><LuMail className="size-[17px]" /> info@bgtatva.com</a>
      </section>

      <SiteFooter />
    </main>
  )
}
