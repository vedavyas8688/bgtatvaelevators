import { useState } from 'react'
import { LuArrowUpRight, LuChevronsLeftRight, LuGauge, LuShieldCheck, LuSparkles } from 'react-icons/lu'

const benefits = [
  { icon: LuGauge, title: 'Smoother performance', text: 'Renewed controls and motion systems.' },
  { icon: LuShieldCheck, title: 'Current safety', text: 'Upgrades planned around today’s standards.' },
  { icon: LuSparkles, title: 'A considered interior', text: 'A cabin expression suited to the building.' },
]

export default function ModernisationCompareSection() {
  const [position, setPosition] = useState(52)

  return (
    <section className="home-modernisation" aria-labelledby="modernisation-title">
      <div className="home-modernisation__heading">
        <div>
          <p className="home-addition-kicker">Modernisation, made visible</p>
          <h2 id="modernisation-title">Renew what matters. Refine what people experience.</h2>
        </div>
        <p>Move the control to compare an ageing cabin with a quieter, safer and more resolved elevator environment.</p>
      </div>

      <div className="home-modernisation__layout">
        <div className="home-compare" style={{ '--compare-position': `${position}%` }}>
          <img className="home-compare__image" src="/images/modernisation-before-premium.webp" alt="Dated beige elevator cabin before modernisation" />
          <div className="home-compare__after">
            <img className="home-compare__image" src="/images/modernisation-after-premium.webp" alt="Premium walnut, ivory and bronze elevator cabin after modernisation" />
          </div>
          <span className="home-compare__label home-compare__label--before">Before</span>
          <span className="home-compare__label home-compare__label--after">After</span>
          <div className="home-compare__divider" aria-hidden="true">
            <LuChevronsLeftRight />
          </div>
          <input
            aria-label="Compare elevator before and after modernisation"
            className="home-compare__range"
            type="range"
            min="8"
            max="92"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
          />
        </div>

        <aside className="home-modernisation__benefits" aria-label="Modernisation benefits">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div className="home-modernisation__benefit" key={title}>
              <Icon aria-hidden="true" />
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
          <a className="home-addition-link home-addition-link--light" href="/elevators?type=modernisation#elevator-types">
            Explore modernisation <LuArrowUpRight aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  )
}
