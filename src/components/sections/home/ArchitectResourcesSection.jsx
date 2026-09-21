import { LuArrowUpRight, LuBoxes, LuClipboardCheck, LuFileText, LuRuler } from 'react-icons/lu'

const resources = [
  { icon: LuRuler, label: 'Planning', title: 'Shaft and space review', detail: 'Pit, overhead, landings and core dimensions.' },
  { icon: LuFileText, label: 'Coordination', title: 'Drawing alignment', detail: 'Architecture, structure and services resolved together.' },
  { icon: LuBoxes, label: 'Specification', title: 'Material direction', detail: 'Cabin, doors and finishes shaped as one palette.' },
  { icon: LuClipboardCheck, label: 'Readiness', title: 'Pre-installation check', detail: 'A clear review before equipment reaches the site.' },
]

export default function ArchitectResourcesSection() {
  return (
    <section className="home-resources" aria-labelledby="resources-title">
      <div className="home-resources__inner">
        <article className="home-resources__content">
          <p className="home-addition-kicker">For architects and project teams</p>
          <h2 id="resources-title">Better coordination begins before the shaft is built.</h2>
          <p>Bring us into the conversation early. We help align structure, movement, materials and site readiness so the elevator fits the project cleanly.</p>
          <a className="home-addition-link home-addition-link--light" href="/contact">Request a planning review <LuArrowUpRight aria-hidden="true" /></a>
        </article>
        <div className="home-resources__documents" aria-label="Project planning resources">
          <div className="home-resources__sheet home-resources__sheet--back" aria-hidden="true" />
          <div className="home-resources__sheet">
            <div className="home-resources__sheet-head"><span>Project coordination set</span></div>
            {resources.map(({ icon: Icon, label, title, detail }) => <a href="/contact" className="home-resources__row" key={title}><span className="home-resources__row-icon"><Icon aria-hidden="true" /></span><span className="home-resources__row-copy"><small>{label}</small><strong>{title}</strong><p>{detail}</p></span></a>)}
          </div>
        </div>
      </div>
    </section>
  )
}
