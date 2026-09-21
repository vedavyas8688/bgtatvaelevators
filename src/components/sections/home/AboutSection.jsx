import { useState } from 'react'
import { aboutTabs } from '../../../data/aboutData'
import { LuArrowRight } from 'react-icons/lu'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('history')
  const activeContent = aboutTabs.find((tab) => tab.id === activeTab)

  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <p className="about-vertical" id="about-title">About</p>

      <div className="about-panel">
        <div className="about-tabs" role="tablist" aria-label="About BG Tatva">
          {aboutTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls="about-copy"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p id="about-copy" role="tabpanel" className="about-copy" key={activeTab}>
          {activeContent.text}
        </p>

        <a className="about-action" href="/about" aria-label="Discover more about BG Tatva">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="about-circle" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs>
            <text>
              <textPath href="#about-circle" startOffset="25%" textAnchor="middle">MORE ABOUT US</textPath>
              <textPath href="#about-circle" startOffset="75%" textAnchor="middle">MORE ABOUT US</textPath>
            </text>
          </svg>
          <LuArrowRight className="about-action-arrow" aria-hidden="true" />
        </a>
      </div>

      <figure className="about-image">
        <img src="/images/cabin-ivory.webp" alt="Refined BG Tatva elevator interior" loading="lazy" />
      </figure>
    </section>
  )
}
