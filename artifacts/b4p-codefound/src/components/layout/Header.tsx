import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

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
      {
        name: 'Liberian Organizations and Community Assessment (LOCA)',
        href: '/liberian-organizations-and-community-assessment-loca',
      },
      { name: 'Liberia-Diaspora Dialogues', href: '/liberia-diaspora-dialogues' },
      { name: 'Events & Conferences', href: '/events-and-conferences' },
      { name: 'Events / Programs', href: '/our-events' },
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
      { name: 'Dashboard', href: '/dashboard' },
    ],
  },
];

function closeOnNavigation(
  event: React.MouseEvent<HTMLAnchorElement>,
  close: () => void,
) {
  if (event.currentTarget.getAttribute('href')?.startsWith('#')) {
    event.preventDefault();
    document
      .getElementById(event.currentTarget.getAttribute('href')!.slice(1))
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  close();
}

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const isHome = location === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <header
      className={`site-header ${
        isHome && !isScrolled ? 'site-header--transparent' : ''
      }`}
    >
      <div className="container site-header__inner">
        <a href="/" className="site-header__brand" onClick={closeMenus}>
          <img src="/brand/b4p-favicon.png" alt="B4P CODEFOUND logo" />
          <span>
            B4P
            <strong>CODEFOUND</strong>
          </span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Primary navigation">
          <a href="/" onClick={closeMenus}>Home</a>
          {navGroups.map((group) => (
            <div
              className="site-nav__group"
              key={group.name}
              onMouseEnter={() => setOpenGroup(group.name)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button
                type="button"
                className="site-nav__trigger"
                aria-expanded={openGroup === group.name}
                onClick={() =>
                  setOpenGroup(openGroup === group.name ? null : group.name)
                }
              >
                {group.name}
                <ChevronDown size={14} aria-hidden="true" />
              </button>
              {openGroup === group.name && (
                <div className="site-nav__dropdown">
                  {group.items.map((item) => (
                    <a key={item.href} href={item.href} onClick={closeMenus}>
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/contact" onClick={closeMenus}>Contact</a>
        </nav>

        <div className="site-header__actions">
          <Button asChild variant="outline" className="site-header__partner">
            <a
              href="mailto:management@b4pcodefound.org?subject=Become%20a%20B4P%20partner"
              onClick={closeMenus}
            >
              Become a Partner
            </a>
          </Button>
          <Button asChild className="site-header__donate">
            <a href="/make-a-donation" onClick={closeMenus}>Donate Now</a>
          </Button>
        </div>

        <button
          type="button"
          className="site-header__menu-button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`site-nav--mobile ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <a href="/" onClick={(event) => closeOnNavigation(event, closeMenus)}>Home</a>
        {navGroups.map((group) => (
          <div className="site-nav__mobile-group" key={group.name}>
            <button
              type="button"
              onClick={() =>
                setOpenGroup(openGroup === group.name ? null : group.name)
              }
            >
              {group.name}
              <ChevronDown
                size={16}
                className={openGroup === group.name ? 'rotate-180' : ''}
                aria-hidden="true"
              />
            </button>
            {openGroup === group.name && (
              <div className="site-nav__mobile-submenu">
                {group.items.map((item) => (
                  <a key={item.href} href={item.href} onClick={closeMenus}>
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href="/contact" onClick={closeMenus}>Contact</a>
        <div className="site-nav__mobile-actions">
          <Button asChild variant="outline">
            <a href="mailto:management@b4pcodefound.org?subject=Become%20a%20B4P%20partner" onClick={closeMenus}>
              Become a Partner
            </a>
          </Button>
          <Button asChild className="site-header__donate">
            <a href="/make-a-donation" onClick={closeMenus}>Donate Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}