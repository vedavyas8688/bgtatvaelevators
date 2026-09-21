import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'

export default function ContactDirectSection() {
  return (
    <section className="contact-direct" aria-label="Direct contact options">
      <article>
        <a className="contact-direct__hit" href="tel:+919876543210" aria-label="Call BG Tatva Elevators at +91 98765 43210" />
        <LuPhone aria-hidden="true" />
        <p>Speak with us</p>
        <strong>+91 98765 43210</strong>
        <span>Monday-Saturday, 9:30 AM-6:30 PM</span>
      </article>
      <article>
        <a className="contact-direct__hit" href="mailto:info@bgtatva.com" aria-label="Email BG Tatva Elevators at info@bgtatva.com" />
        <LuMail aria-hidden="true" />
        <p>Write to us</p>
        <strong>info@bgtatva.com</strong>
        <span>We usually respond within one business day.</span>
      </article>
      <article>
        <a
          className="contact-direct__hit"
          href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+Karnataka"
          target="_blank"
          rel="noreferrer"
          aria-label="View BG Tatva Elevators location in Bengaluru on Google Maps"
        />
        <LuMapPin aria-hidden="true" />
        <p>Visit the studio</p>
        <strong>Bengaluru, Karnataka</strong>
        <span>Serving projects across Bengaluru by appointment.</span>
      </article>
    </section>
  )
}
