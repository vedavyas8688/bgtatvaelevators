import { LuArrowRight, LuFacebook, LuInstagram, LuMail, LuTwitter } from 'react-icons/lu'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><img src="/images/bg-tatva-logo-transparent.png" alt="BG Tatva Elevators" /></div>
      <div className="footer-main">
        <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
          <p className="newsletter-kicker">Stay informed</p>
          <h2>Elevator ideas,<br />delivered thoughtfully.</h2>
          <p className="newsletter-copy">Receive design inspiration, product updates and practical guidance for creating better vertical experiences.</p>
          <label className="newsletter-field"><LuMail aria-hidden="true" /><input type="email" placeholder="Your email address" aria-label="Email address" /><button type="submit" aria-label="Subscribe"><span aria-hidden="true"><LuArrowRight /></span></button></label>
          <div className="social-links"><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><LuFacebook /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><LuInstagram /></a><a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X"><LuTwitter /></a></div>
        </form>
        <div className="footer-links">
          <h2>Elevating spaces with design,<br />comfort and confidence.</h2>
          <div className="footer-columns">
            <div><h3>Explore</h3><a href="/#home">Home</a><a href="/about">About Us</a><a href="/#services">Our Services</a><a href="/faq">FAQs</a><a href="/blog">Blogs</a><a href="/contact">Contact Us</a></div>
            <div><h3>Elevator Solutions</h3><a href="/elevators#elevator-types">Home Elevators</a><a href="/elevators#elevator-types">Cabin Design</a><a href="/elevators#elevator-types">Maintenance</a><a href="/elevators#elevator-types">Modernisation</a></div>
            <div><h3>Say Hello</h3><a href="mailto:info@bgtatva.com">info@bgtatva.com</a><h3>Speak With Us</h3><a href="tel:+919876543210">+91 98765 43210</a></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><span>&copy; 2026 BG Tatva Elevators. All rights reserved.</span><span>Designed by <a href="https://hirolainfotech.com/" target="_blank" rel="noreferrer">Hirola InfoTech Solutions Pvt Ltd.</a></span></div>
    </footer>
  )
}
