import { useEffect, useRef, useState } from "react";
import { LuArrowRight, LuCheck, LuX } from "react-icons/lu";

export const openContactModal = () => {
  window.dispatchEvent(new CustomEvent("open-contact-modal"));
};

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef(null);
  const firstInputRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let popupTimer;
    const open = () => {
      window.clearTimeout(popupTimer);
      triggerRef.current = document.activeElement;
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-contact-modal", open);
    popupTimer = window.setTimeout(open, 10000);

    return () => {
      window.clearTimeout(popupTimer);
      window.removeEventListener("open-contact-modal", open);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const close = () => {
      setIsOpen(false);
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();

      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'button, input, textarea, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => firstInputRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const closeModal = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <div className="contact-modal" role="presentation">
      <button
        className="contact-modal__backdrop"
        type="button"
        aria-label="Close contact form"
        onClick={closeModal}
      />
      <section
        ref={dialogRef}
        className="contact-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          className="contact-modal__close"
          type="button"
          aria-label="Close contact form"
          onClick={closeModal}
        >
          <LuX aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="contact-modal__success" aria-live="polite">
            <span><LuCheck aria-hidden="true" /></span>
            <h2 id="contact-modal-title">Thank you.</h2>
            <p>Your message is ready for our team. We&apos;ll be in touch shortly.</p>
            <button type="button" onClick={closeModal}>Close</button>
          </div>
        ) : (
          <>
            <header>
              <p>Start a conversation</p>
              <h2 id="contact-modal-title">Get in touch</h2>
              <span>Share a few details and our Bengaluru team will contact you.</span>
            </header>
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <div className="contact-modal__row">
                <label>
                  <span>Your name</span>
                  <input ref={firstInputRef} name="name" autoComplete="name" required placeholder="Full name" />
                </label>
                <label>
                  <span>Email address</span>
                  <input name="email" type="email" autoComplete="email" required placeholder="name@example.com" />
                </label>
              </div>
              <div className="contact-modal__row">
                <label>
                  <span>Phone number</span>
                  <input name="phone" type="tel" autoComplete="tel" placeholder="+91" />
                </label>
                <label>
                  <span>Location</span>
                  <input name="location" autoComplete="address-level2" placeholder="City, State" />
                </label>
              </div>
              <label>
                <span>How can we help?</span>
                <textarea name="message" required placeholder="Tell us about your building, project stage or requirement." />
              </label>
              <div className="contact-modal__actions">
                <small>We&apos;ll only use these details to respond to your inquiry.</small>
                <button type="submit">
                  Send inquiry <LuArrowRight aria-hidden="true" />
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
