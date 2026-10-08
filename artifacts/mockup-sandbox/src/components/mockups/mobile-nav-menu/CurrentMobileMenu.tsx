import { ChevronRight, X } from "lucide-react";
import "./_group.css";

const navGroupNames = [
  "About Us",
  "What We Do",
  "Subsidiaries",
  "Work With Us",
  "Shop Now",
];

export function CurrentMobileMenu() {
  return (
    <div className="mobile-nav-preview">
      <aside className="site-drawer is-open" aria-label="Site navigation">
        <div className="site-drawer__header">
          <a className="site-drawer__brand" href="#home" aria-label="B4P CODEFOUND home">
            <img src="/__mockup/images/b4p-logo-clean.png" alt="B4P CODEFOUND" />
          </a>
          <button className="site-drawer__close" type="button" aria-label="Close navigation">
            <X size={20} strokeWidth={2} />
          </button>
        </div>
        <div className="site-drawer__body">
          <a className="site-drawer__home" href="#home">
            Home
          </a>
          <nav className="site-drawer__top-level" aria-label="Main navigation">
            {navGroupNames.map((name) => (
              <button className="site-drawer__menu-row" key={name} type="button">
                <span>{name}</span>
                <ChevronRight aria-hidden="true" />
              </button>
            ))}
          </nav>
          <a className="site-drawer__home" href="#contact">
            Contact
          </a>
        </div>
        <div className="site-drawer__footer">
          <p>Support African-led peacebuilding and economic development.</p>
          <a href="#donate">Make a donation</a>
          <a href="#partner">Become a partner</a>
        </div>
      </aside>
    </div>
  );
}
