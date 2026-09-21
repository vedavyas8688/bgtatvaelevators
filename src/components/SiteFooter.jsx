import { LuArrowRight, LuFacebook, LuInstagram, LuMail, LuTwitter } from 'react-icons/lu'

export default function SiteFooter() {
  const subscribe = (event) => {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email')
    const subject = encodeURIComponent('BG Tatva newsletter subscription')
    const body = encodeURIComponent(`Please add ${email} to the BG Tatva Elevators newsletter.`)
    window.location.href = `mailto:info@bgtatva.com?subject=${subject}&body=${body}`
  }

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a href="/" aria-label="BG Tatva Elevators home">
          <img src="/images/bg-tatva-logo-transparent.webp" alt="BG Tatva Elevators" />
        </a>
      </div>

      <div className="footer-main">
        <form className="newsletter" onSubmit={subscribe}>
          <p className="newsletter-kicker">Stay informed</p>
          <h2>Elevator ideas,<br />delivered thoughtfully.</h2>
          <p className="newsletter-copy">Receive design inspiration, product updates and practical guidance for creating better vertical experiences.</p>
          <label className="newsletter-field">
            <LuMail aria-hidden="true" />
            <input required name="email" type="email" placeholder="Your email address" aria-label="Email address" />
            <button type="submit" aria-label="Subscribe by email"><span aria-hidden="true"><LuArrowRight /></span></button>
          </label>
          <div className="social-links">
            <a href="https://www.facebook.com/bgtatvaelevators" target="_blank" rel="noreferrer" aria-label="BG Tatva Elevators on Facebook"><LuFacebook /></a>
            <a href="https://www.instagram.com/bgtatvaelevators/" target="_blank" rel="noreferrer" aria-label="BG Tatva Elevators on Instagram"><LuInstagram /></a>
            <a href="https://x.com/bgtatvaelevators" target="_blank" rel="noreferrer" aria-label="BG Tatva Elevators on X"><LuTwitter /></a>
          </div>
        </form>

        <div className="footer-links">
          <h2>Elevating spaces with design,<br />comfort and confidence.</h2>
          <div className="footer-columns">
            <div>
              <h3>Explore</h3>
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/elevators">Elevators</a>
              <a href="/projects">Projects</a>
              <a href="/faq">FAQs</a>
              <a href="/blog">Blogs</a>
              <a href="/contact">Contact Us</a>
            </div>
            <div>
              <h3>Elevator Solutions</h3>
              <a href="/elevators?type=home#elevator-types">Home Elevators</a>
              <a href="/elevators?type=panoramic#elevator-types">Panoramic Elevators</a>
              <a href="/elevators?type=commercial#elevator-types">Commercial Elevators</a>
              <a href="/elevators#cabin-design">Cabin Design</a>
              <a href="/elevators?type=modernisation#elevator-types">Modernisation</a>
              <a href="/elevators#maintenance">Maintenance</a>
            </div>
            <div>
              <h3>Say Hello</h3>
              <a href="mailto:info@bgtatva.com">info@bgtatva.com</a>
              <h3>Speak With Us</h3>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 BG Tatva Elevators. All rights reserved.</span>
        <span>Designed by <a href="https://hirolainfotech.com/" target="_blank" rel="noreferrer">Hirola InfoTech Solutions Pvt Ltd.</a></span>
      </div>
    </footer>
  )
}
