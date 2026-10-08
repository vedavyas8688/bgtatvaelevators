import { useEffect, useState } from "react";
import { LuArrowRight, LuMenu, LuX } from "react-icons/lu";
import { openContactModal } from "./ContactModal";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Elevators", "/elevators"],
  ["Projects", "/projects"],
  ["FAQs", "/faq"],
  ["Blogs", "/blog"],
  ["Contact", "/contact"],
];

export default function SiteNavbar() {
  const path = window.location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const active = (href) => {
    if (href === "/") return path === "/";
    if (href === "/blog") return path.startsWith("/blog");
    return path.startsWith(href);
  };

  return (
    <nav
      className={`site-navbar ${menuOpen ? "is-menu-open" : ""}`}
      aria-label="Primary navigation"
    >
      <a href="/" className="site-navbar-logo">
        <img src="/images/bg-tatva-logo-flat.png" alt="BG Tatva Elevators" />
      </a>
      <div className="site-navbar-links">
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            aria-current={active(href) ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
      <button
        type="button"
        className="site-navbar-cta editorial-cta"
        onClick={openContactModal}
      >
        <span className="site-navbar-cta-label">Get a Quote</span>
        <span aria-hidden="true">
          <LuArrowRight />
        </span>
      </button>
      <button
        className="site-navbar-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <LuX /> : <LuMenu />}
      </button>
      <div className="site-navbar-mobile" id="mobile-navigation">
        <span className="site-navbar-mobile-label">Navigation</span>
        <div>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-current={active(href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <LuArrowRight aria-hidden="true" />
            </a>
          ))}
        </div>
        <button
          type="button"
          className="site-navbar-mobile-cta editorial-cta"
          onClick={() => {
            setMenuOpen(false);
            openContactModal();
          }}
        >
          Get a Quote <LuArrowRight aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}
