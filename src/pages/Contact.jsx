import { useState } from 'react'
import { LuArrowRight, LuCheck, LuChevronDown, LuClock, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'

const FiArrowUpRight = LuArrowRight
const FiCheck = LuCheck
const FiChevronDown = LuChevronDown
const FiClock = LuClock
const FiMail = LuMail
const FiMapPin = LuMapPin
const FiPhone = LuPhone

const projectTypes = ['Home Elevator', 'Commercial', 'Modernisation', 'Cabin Design']
const faqs = [
  ['How early should we involve BG Tatva?', 'Ideally, speak with us during architectural planning. Early coordination helps optimise the shaft, structure, circulation, finishes and services before construction decisions become fixed.'],
  ['Can you work with our architect or interior designer?', 'Yes. We regularly collaborate with architects, consultants and interior studios to make the elevator feel like a considered part of the overall project.'],
  ['Do you modernise existing elevators?', 'Yes. We can review existing systems and recommend targeted upgrades for performance, controls, safety, doors, lighting and cabin finishes.'],
  ['What happens after we submit an inquiry?', 'Our team reviews the project details and contacts you for a short discovery conversation. We then arrange a site review or design consultation where appropriate.'],
]

export default function Contact() {
  const [selectedType, setSelectedType] = useState('Home Elevator')
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <SiteNavbar />

      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p>Begin a conversation</p>
          <h1>Let’s move<br /><em>ideas upward.</em></h1>
          <span>Tell us where you are going. We’ll help shape an elevator experience that feels effortless, refined and entirely at home in your space.</span>
          <a href="#inquiry">Discuss your project <span aria-hidden="true"><LuArrowRight /></span></a>
        </div>
        <figure><img src="/images/social-elevator-3.png" alt="Panoramic glass elevator inside a double-height residence" /><figcaption><span>Residential · Panoramic</span><b>Designed around the architecture</b></figcaption></figure>
      </section>

      <section id="inquiry" className="contact-inquiry">
        <header><p>Project inquiry</p><h2>Tell us about<br />your vision.</h2><span>A few thoughtful details help our team understand your project and prepare a useful first conversation.</span></header>
        <form onSubmit={submit}>
          {submitted ? (
            <div className="contact-success"><i><FiCheck /></i><h3>Thank you.</h3><p>Your project brief is ready for our team. We’ll be in touch shortly.</p><button type="button" onClick={() => setSubmitted(false)}>Send another inquiry</button></div>
          ) : (
            <>
              <div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Email address<input required type="email" name="email" placeholder="name@company.com" /></label></div>
              <div className="form-row"><label>Phone number<input name="phone" type="tel" placeholder="+91" /></label><label>Project location<input name="location" placeholder="City, State" /></label></div>
              <fieldset><legend>What can we help with?</legend><div className="project-types">{projectTypes.map((type) => <button key={type} type="button" className={selectedType === type ? 'selected' : ''} onClick={() => setSelectedType(type)}>{type}{selectedType === type && <FiCheck />}</button>)}</div></fieldset>
              <label>Tell us about the project<textarea required name="message" placeholder="Project type, building stage, number of floors, preferred timeline or anything else useful…" /></label>
              <div className="form-submit"><p>By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.</p><button type="submit">Send inquiry <span aria-hidden="true"><FiArrowUpRight /></span></button></div>
            </>
          )}
        </form>
      </section>

      <section className="contact-direct" aria-label="Direct contact options">
        <article><FiPhone /><p>Speak with us</p><a href="tel:+919876543210">+91 98765 43210</a><span>Monday–Saturday, 9:30 AM–6:30 PM</span></article>
        <article><FiMail /><p>Write to us</p><a href="mailto:info@bgtatva.com">info@bgtatva.com</a><span>We usually respond within one business day.</span></article>
        <article><FiMapPin /><p>Visit the studio</p><strong>Bengaluru, Karnataka</strong><span>Serving projects across Bengaluru by appointment.</span></article>
      </section>

      <section className="contact-process">
        <header><p>What happens next</p><h2>A considered process,<br />from first call to final detail.</h2></header>
        <div>{[['01', 'Discover', 'We learn about your building, priorities, design language and practical requirements.'], ['02', 'Define', 'Our team aligns the right elevator system, spatial needs, performance and finish direction.'], ['03', 'Design', 'We coordinate technical planning and cabin details with your architect and project team.'], ['04', 'Deliver', 'Installation, commissioning and ongoing care are managed with clarity and attention.']].map(([number, title, copy]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="contact-visit">
        <figure><img src="/images/social-elevator-1.png" alt="Bronze residential elevator beside a bright lounge" loading="lazy" /></figure>
        <div><p>Personal consultation</p><h2>See materials.<br />Explore possibilities.</h2><span>Schedule a focused design discussion with our team. Review finishes, understand system choices and leave with a clearer direction for your project.</span><ul><li><FiClock /> 45–60 minute consultation</li><li><FiMapPin /> In studio or at your project site</li></ul><a href="mailto:info@bgtatva.com?subject=Design consultation">Request a consultation <span aria-hidden="true"><FiArrowUpRight /></span></a></div>
      </section>

      <section className="contact-faq">
        <header><p>Common questions</p><h2>Before we begin.</h2></header>
        <div>{faqs.map(([question, answer], index) => <article key={question} className={openFaq === index ? 'open' : ''}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><FiChevronDown /></button><div><p>{answer}</p></div></article>)}</div>
      </section>

      <section className="contact-final"><p>Ready when you are</p><h2>Every remarkable journey<br />starts with a conversation.</h2><a href="#inquiry">Start yours <span aria-hidden="true"><FiArrowUpRight /></span></a></section>

      <SiteFooter />
    </main>
  )
}
