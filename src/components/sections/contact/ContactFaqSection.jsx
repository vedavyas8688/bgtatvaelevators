import { useState } from 'react'
import { LuArrowUpRight, LuChevronDown } from 'react-icons/lu'

const faqs = [
  ['How early should we involve BG Tatva?', 'Ideally, speak with us during architectural planning. Early coordination helps optimise the shaft, structure, circulation, finishes and services before construction decisions become fixed.'],
  ['Can you work with our architect or interior designer?', 'Yes. We regularly collaborate with architects, consultants and interior studios to make the elevator feel like a considered part of the overall project.'],
  ['Do you modernise existing elevators?', 'Yes. We can review existing systems and recommend targeted upgrades for performance, controls, safety, doors, lighting and cabin finishes.'],
  ['What happens after we submit an inquiry?', 'Our team reviews the project details and contacts you for a short discovery conversation. We then arrange a site review or design consultation where appropriate.'],
]

export default function ContactFaqSection() {
  const [openFaq, setOpenFaq] = useState(0)
  return <section className="contact-faq"><header><p>Common questions</p><h2>Before we begin.</h2><a className="editorial-cta" href="/faq">View all FAQs <span aria-hidden="true"><LuArrowUpRight /></span></a></header><div>{faqs.map(([question, answer], index) => <article key={question} className={openFaq === index ? 'open' : ''}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><LuChevronDown /></button><div><p>{answer}</p></div></article>)}</div></section>
}
