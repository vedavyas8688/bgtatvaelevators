import { useMemo, useRef, useState } from 'react'
import { defaultDesign, doors, finishes, lightStyles, lightTemperatures, panels, presets } from '../../data/elevatorOptions'

const tabs = [
  { id: 'finishes', label: 'Finishes' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'doors', label: 'Doors' },
  { id: 'panels', label: 'Panels' },
]

const findName = (items, id) => items.find((item) => item.id === id)?.name

function Choice({ active, onClick, children, swatch }) {
  return (
    <button type="button" className={`editorial-choice ${active ? 'is-active' : ''}`} aria-pressed={active} onClick={onClick}>
      {swatch && <span className="editorial-swatch" style={{ background: swatch }} />}
      <span>{children}</span>
    </button>
  )
}

export default function DesignElevatorSection() {
  const [tab, setTab] = useState('finishes')
  const [design, setDesign] = useState({ ...defaultDesign, doorsOpen: undefined })
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const sectionRef = useRef(null)
  const finish = finishes.find((item) => item.id === design.finish) ?? finishes[0]
  const light = lightTemperatures.find((item) => item.id === design.temperature) ?? lightTemperatures[0]
  const update = (key, value) => setDesign((current) => ({ ...current, [key]: value }))

  const summary = useMemo(() => [
    findName(finishes, design.finish),
    findName(lightTemperatures, design.temperature),
    findName(lightStyles, design.lightStyle),
    findName(doors, design.door),
    findName(panels, design.panel),
  ], [design])

  const applyPreset = (preset) => setDesign({ ...preset, doorsOpen: undefined })

  return (
    <section ref={sectionRef} className="elevator-editorial" aria-labelledby="design-title">
      <div className="editorial-controls">
        <div className="editorial-heading">
          <p className="editorial-kicker">Design your elevator</p>
          <h2 id="design-title">Make it <em>unmistakably</em> yours.</h2>
          <p>Explore materials, lighting, and details to create an elevator that feels uniquely yours.</p>
        </div>

        <div className="editorial-presets" aria-label="Starting designs">
          {presets.map((preset) => <button key={preset.name} onClick={() => applyPreset(preset)}>{preset.name}</button>)}
        </div>

        <div className="editorial-tabs" role="tablist" aria-label="Design categories">
          {tabs.map((item) => <button key={item.id} role="tab" aria-selected={tab === item.id} onClick={() => setTab(item.id)}>{item.label}</button>)}
        </div>

        <div className="editorial-options" role="tabpanel">
          {tab === 'finishes' && <div className="finish-choices">{finishes.map((item) => <Choice key={item.id} active={design.finish === item.id} onClick={() => update('finish', item.id)} swatch={item.swatch}>{item.name}</Choice>)}</div>}
          {tab === 'lighting' && <div className="option-groups"><div><span className="option-label">Temperature</span><div className="simple-choices">{lightTemperatures.map((item) => <Choice key={item.id} active={design.temperature === item.id} onClick={() => update('temperature', item.id)}>{item.name}</Choice>)}</div></div><div><span className="option-label">Light source</span><div className="simple-choices">{lightStyles.map((item) => <Choice key={item.id} active={design.lightStyle === item.id} onClick={() => update('lightStyle', item.id)}>{item.name}</Choice>)}</div></div><label className="editorial-range"><span>Brightness</span><output>{design.brightness}%</output><input type="range" min="20" max="100" value={design.brightness} onChange={(event) => update('brightness', Number(event.target.value))} /></label></div>}
          {tab === 'doors' && <div className="simple-choices large">{doors.map((item) => <Choice key={item.id} active={design.door === item.id} onClick={() => update('door', item.id)}>{item.name}</Choice>)}</div>}
          {tab === 'panels' && <div className="simple-choices large">{panels.map((item) => <Choice key={item.id} active={design.panel === item.id} onClick={() => update('panel', item.id)}>{item.name}</Choice>)}</div>}
        </div>

        <div className="editorial-footer">
          <div className="editorial-summary"><span>Current design</span><p>{summary.join(' · ')}</p><small>Available finishes and features depend on the elevator model.</small></div>
          <div className="editorial-actions"><button onClick={() => setDesign({ ...defaultDesign, doorsOpen: undefined })}>Reset</button><button onClick={() => sectionRef.current?.requestFullscreen?.()}>Fullscreen</button><button className="editorial-primary" onClick={() => setInquiryOpen(true)}>Inquire about this design</button></div>
        </div>
      </div>

      <div className="editorial-preview" style={{ '--preview-light': light.tint, '--preview-level': design.brightness / 100 }}>
        {finishes.map((item) => <img key={item.id} src={item.image} alt={`${item.name} elevator interior`} className={item.id === design.finish ? 'is-visible' : ''} />)}
        <div className="preview-light" />
        <div className="preview-caption"><span>{finish.name}</span><small>{light.name} light · {design.brightness}%</small></div>
      </div>

      {inquiryOpen && <div className="editorial-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onMouseDown={(event) => event.target === event.currentTarget && setInquiryOpen(false)}><form onSubmit={(event) => { event.preventDefault(); setInquiryOpen(false) }}><button type="button" className="modal-close" onClick={() => setInquiryOpen(false)} aria-label="Close">×</button><p className="editorial-kicker">Selected configuration</p><h3 id="inquiry-title">Inquire about this design</h3><p>{summary.join(' · ')}</p><input required aria-label="Name" placeholder="Your name" /><input required type="email" aria-label="Email" placeholder="Email address" /><textarea readOnly aria-label="Selected configuration" value={summary.join(' · ')} /><button className="editorial-primary" type="submit">Send inquiry</button></form></div>}
    </section>
  )
}
