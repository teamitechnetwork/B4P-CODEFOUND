import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';

type NavItem = { name: string; href: string };
type NavGroup = { name: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    name: 'About Us',
    items: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Our Impact', href: '/about' },
      { name: 'The Director’s Corner', href: '/the-directors-corner' },
      { name: 'The Board', href: '/the-board' },
      { name: 'Management Team', href: '/the-management-team' },
      { name: 'Advisory Council', href: '/advisory-council' },
      { name: 'Our Core Values', href: '/our-core-values' },
      { name: 'Where We Work', href: '/where-we-work' },
      { name: 'Theory of Change', href: '/theory-of-change' },
    ],
  },
  {
    name: 'What We Do',
    items: [
      { name: 'Peacebuilding Program', href: '/peacebuilding-program' },
      { name: 'Economic Development Program', href: '/economic-development-program' },
      { name: 'Youth and Civic Engagement', href: '/youth-and-civic-engagement' },
      { name: 'Liberian Organizations and Community Assessment (LOCA)', href: '/liberian-organizations-and-community-assessment-loca' },
      { name: 'Liberia-Diaspora Dialogues', href: '/liberia-diaspora-dialogues' },
      { name: 'Events & Conferences', href: '/events-and-conferences' },
      { name: 'Resources', href: '/resources' },
    ],
  },
  {
    name: 'Work With Us',
    items: [
      { name: 'Become a Volunteer', href: '/become-a-volunteer' },
      { name: 'Internship', href: '/internship' },
      { name: 'Jobs', href: '/jobs' },
      { name: 'Careers', href: '/careers' },
      { name: 'Vendor Registration', href: '/vendor-register' },
      { name: 'Application', href: '/application' },
      { name: 'Request for Quote', href: '/request-quote' },
    ],
  },
  {
    name: 'Shop Now',
    items: [
      { name: 'Shop', href: '/shop' },
      { name: 'Store Listing', href: '/store-listing' },
      { name: 'Cart', href: '/cart' },
      { name: 'Checkout', href: '/checkout' },
      { name: 'My Account', href: '/my-account' },
      { name: 'My Orders', href: '/my-orders' },
      { name: 'Product Subscription', href: '/dashboard/product-subscription' },
    ],
  },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const isHome = location === '/';
  const isHeroHeader = isHome && !isScrolled;

  const closeMenu = (restoreFocus = false) => {
    setIsMenuOpen(false);
    setOpenGroup(null);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle('has-site-drawer-open', isMenuOpen);
    return () => document.body.classList.remove('has-site-drawer-open');
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const focusableSelector = 'a[href], button:not([disabled])';
    const focusDrawer = () => drawerRef.current?.querySelector<HTMLElement>('.site-drawer__close')?.focus();
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const timeout = window.setTimeout(focusDrawer, 50);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={`site-header-shell ${isHeroHeader ? 'site-header-shell--hero' : ''}`}>
        <div className="site-topbar">
          <div className="container site-topbar__inner">
            <span>Peacebuilding · Community Development · Collective Action</span>
            <a href="mailto:management@b4pcodefound.org">management@b4pcodefound.org</a>
          </div>
        </div>
        <header className="site-header">
          <div className="container site-header__inner">
            <a href="/" className="site-header__brand" onClick={() => closeMenu()} aria-label="B4P CODEFOUND home">
              <img src="/brand/b4p-favicon.png" alt="" />
            </a>
            <div className="site-header__utilities">
              <a href="/make-a-donation" className="site-header__donate" onClick={() => closeMenu()}>Donate</a>
              <button
                type="button"
                className="site-header__menu-button"
                onClick={() => setIsMenuOpen((open) => !open)}
                ref={menuButtonRef}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation-drawer"
              >
                <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
                {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      <button
        type="button"
        className={`site-drawer__backdrop ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Close navigation menu"
        onClick={() => closeMenu(true)}
        tabIndex={-1}
      />

      <aside
        id="site-navigation-drawer"
        className={`site-drawer ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Site navigation"
        aria-hidden={!isMenuOpen}
        ref={drawerRef}
      >
        <div className="site-drawer__header">
          <a href="/" className="site-drawer__brand" onClick={() => closeMenu()} aria-label="B4P CODEFOUND home">
            <img src="/brand/b4p-favicon.png" alt="" />
          </a>
          <button type="button" onClick={() => closeMenu(true)} className="site-drawer__close" aria-label="Close navigation menu">
            <X size={23} aria-hidden="true" />
          </button>
        </div>

        <div className="site-drawer__body">
          <a href="/" className="site-drawer__home" onClick={() => closeMenu()}>Home</a>
          <nav>
            {navGroups.map((group) => (
              <div className="site-drawer__group" key={group.name}>
                <button
                  type="button"
                  onClick={() => setOpenGroup(openGroup === group.name ? null : group.name)}
                  aria-expanded={openGroup === group.name}
                >
                  {group.name}
                  <ChevronDown size={17} className={openGroup === group.name ? 'rotate-180' : ''} aria-hidden="true" />
                </button>
                {openGroup === group.name && (
                  <div className="site-drawer__submenu">
                    {group.items.map((item) => (
                      <a key={item.href} href={item.href} onClick={() => closeMenu()}>{item.name}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a href="/contact" className="site-drawer__home" onClick={() => closeMenu()}>Contact</a>
        </div>

        <div className="site-drawer__footer">
          <p>Support African-led peacebuilding and economic development.</p>
          <a href="/make-a-donation" onClick={() => closeMenu()}>Make a donation</a>
          <a href="mailto:management@b4pcodefound.org?subject=Become%20a%20B4P%20partner" onClick={() => closeMenu()}>Become a partner</a>
        </div>
      </aside>
    </>
  );
}