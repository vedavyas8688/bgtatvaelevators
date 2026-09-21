import { LuArrowRight, LuClock, LuMapPin } from 'react-icons/lu'

export default function ContactVisitSection() {
  return <section className="contact-visit"><figure><img src="/images/social-elevator-1.webp" alt="Bronze residential elevator beside a bright lounge" loading="lazy" /></figure><div><p>Personal consultation</p><h2>See materials.<br />Explore possibilities.</h2><span>Schedule a focused design discussion with our team. Review finishes, understand system choices and leave with a clearer direction for your project.</span><ul><li><LuClock /> 45–60 minute consultation</li><li><LuMapPin /> In studio or at your project site</li></ul><a className="editorial-cta" href="mailto:info@bgtatva.com?subject=Design consultation">Request a consultation <span aria-hidden="true"><LuArrowRight /></span></a></div></section>
}
