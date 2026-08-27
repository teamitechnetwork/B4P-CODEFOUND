import { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, Minus, Plus, Search, Sparkles, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { programRegions } from '@/data/programs';

type NavItem = { name: string; href: string; children?: NavItem[] };
type NavGroup = { name: string; items: NavItem[] };
type SocialNetwork = 'facebook' | 'instagram' | 'linkedin' | 'youtube' | 'whatsapp';

const socialLinks: { name: string; href: string; network: SocialNetwork }[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/b4pcodefound.cause', network: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/b4pcodefound', network: 'instagram' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/b4pcodefound', network: 'linkedin' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCag6wU4HaGZlBqbcG6kWThg', network: 'youtube' },
  { name: 'WhatsApp', href: 'https://whatsapp.com/channel/0029VbBYo7T7dmeaJIfdBT1b', network: 'whatsapp' },
];

const searchItems = [
  { title: 'About B4P CODEFOUND', href: '/about-us', description: 'Our mission, founder story, values, and where we work.', keywords: 'mission founder values history peace community development organization' },
  { title: 'What We Do', href: '/what-we-do', description: 'Explore our peacebuilding, economic development, and community initiatives.', keywords: 'what we do peacebuilding economic development empowerment services community' },
  { title: 'Global Programs', href: '/programs/global', description: 'Programs advancing African-led leadership and collective action.', keywords: 'global international africa leadership advocacy women youth programs' },
  { title: 'USA Programs', href: '/programs/usa', description: 'Local programs and diaspora-facing initiatives in the United States.', keywords: 'usa united states ohio columbus diaspora community programs' },
  { title: 'Liberia Programs', href: '/programs/liberia', description: 'Peacebuilding and community-development programs across Liberia.', keywords: 'liberia gbarnga bong county women youth development programs' },
  { title: 'B4P Services', href: '/services', description: 'Fiscal sponsorship, nonprofit capacity building, and business development.', keywords: 'services fiscal sponsorship nonprofit capacity building business consulting' },
  { title: 'Columbus Women Connect', href: '/columbus-women-connect', description: 'A multicultural network where women connect, learn, and lead.', keywords: 'columbus women connect cwc ohio women network leadership' },
  { title: 'Volunteer with B4P', href: '/become-a-volunteer', description: 'Share your time and skills with B4P CODEFOUND.', keywords: 'volunteer volunteering help serve contribute community' },
  { title: 'Internships', href: '/internship', description: 'Learn alongside B4P through a mission-led internship.', keywords: 'internship student placement learning experience' },
  { title: 'Jobs at B4P', href: '/jobs', description: 'Explore current and future opportunities to join the team.', keywords: 'jobs careers work employment hiring opportunity' },
  { title: 'Make a Donation', href: '/make-a-donation', description: 'Support African-led peacebuilding and community development.', keywords: 'donate donation give support fundraising mission' },
  { title: 'Contact B4P', href: '/contact', description: 'Contact the team, offices, and support channels.', keywords: 'contact email phone address office support' },
];

function SocialIcon({ network }: { network: SocialNetwork }) {
  const paths: Record<SocialNetwork, React.ReactNode> = {
    facebook: <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5H17V3.7c-.4-.1-1.3-.2-2.4-.2-2.4 0-4 1.5-4 4.1v2.3H8v3.1h2.6v8h3Z" />,
    instagram: <><rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5.2" /><circle cx="12" cy="12" r="4.1" /><circle cx="17.6" cy="6.6" r="1" fill="currentColor" stroke="none" /></>,
    linkedin: <><rect x="4" y="9.2" width="3.2" height="10.4" /><circle cx="5.6" cy="5.7" r="1.8" fill="currentColor" stroke="none" /><path d="M10 19.6V9.2h3.1v1.4c.5-.9 1.6-1.8 3.4-1.8 3.1 0 3.7 2 3.7 4.8v6h-3.2v-5.3c0-1.3 0-2.7-1.8-2.7s-2.1 1.3-2.1 2.6v5.4H10Z" /></>,
    youtube: <path d="M21 8.2a2.9 2.9 0 0 0-2-2C17.2 5.7 12 5.7 12 5.7s-5.2 0-7 .5a2.9 2.9 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 15.8a2.9 2.9 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.9 2.9 0 0 0 2-2 29 29 0 0 0 .5-3.8 29 29 0 0 0-.5-3.8ZM10 15.3V8.7l5.5 3.3-5.5 3.3Z" />,
    whatsapp: <path d="M12 3.2a8.7 8.7 0 0 0-7.4 13.3L3.5 20.8l4.5-1.1A8.7 8.7 0 1 0 12 3.2Zm0 15.8a7.1 7.1 0 0 1-3.6-1l-.3-.2-2.7.7.7-2.6-.2-.3A7.2 7.2 0 1 1 12 19Zm3.9-5.4c-.2-.1-1.3-.6-1.5-.6-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.6-3-3-.1-.2 0-.3.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3 0-.4l-.6-1.4c-.1-.4-.3-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.7 2.7 4.2 3.7.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[network]}
    </svg>
  );
}

const programNavItems: NavItem[] = [
  {
    name: 'Global',
    href: '/programs/global',
    children: [
      { name: 'Explore Global Programs', href: '/programs/global' },
      ...programRegions.global.programs.map((program) => ({ name: program.title, href: `/programs/global/${program.slug}` })),
    ],
  },
  {
    name: 'USA',
    href: '/programs/usa',
    children: [
      { name: 'Explore USA Programs', href: '/programs/usa' },
      ...programRegions.usa.programs.map((program) => ({ name: program.title, href: `/programs/usa/${program.slug}` })),
    ],
  },
  {
    name: 'Liberia',
    href: '/programs/liberia',
    children: [
      { name: 'Explore Liberia Programs', href: '/programs/liberia' },
      ...programRegions.liberia.programs.map((program) => ({ name: program.title, href: `/programs/liberia/${program.slug}` })),
    ],
  },
];

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
      { name: 'What We Do', href: '/what-we-do' },
      { name: 'Peacebuilding', href: '/peacebuilding-program' },
      { name: 'Economic Development & Empowerment', href: '/economic-development-program' },
      { name: 'Services', href: '/services' },
      { name: 'Fiscal Sponsorship', href: '/services' },
      { name: 'Nonprofit Capacity Building', href: '/services' },
      { name: 'Business Development', href: '/services' },
      { name: 'Columbus Women Connect', href: '/columbus-women-connect' },
    ],
  },
  {
    name: 'Programs',
    items: programNavItems,
  },
  {
    name: 'Subsidiaries',
    items: [
      {
        name: 'B4P CODEFOUND Liberia',
        href: '/programs/liberia',
        children: [
          { name: 'Explore Liberia programs', href: '/programs/liberia' },
          { name: 'Contact B4P CODEFOUND', href: '/contact' },
        ],
      },
      {
        name: 'Bong County Women and Youth Development Cooperation (BWYDC)',
        href: '/#field-stories',
        children: [
          { name: 'Building Young Women, Driving Change', href: '/#field-stories' },
          { name: 'Contact B4P CODEFOUND', href: '/contact' },
        ],
      },
      {
        name: 'Columbus Women Connect (CWC)',
        href: '/columbus-women-connect',
        children: [
          { name: 'Visit Columbus Women Connect', href: '/columbus-women-connect' },
          { name: 'Join the movement', href: '/columbus-women-connect#join' },
        ],
      },
    ],
  },
  {
    name: 'Work With Us',
    items: [
      { name: 'Become a Volunteer', href: '/become-a-volunteer' },
      { name: 'Internship', href: '/internship' },
      { name: 'Jobs', href: '/jobs' },
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openSubgroup, setOpenSubgroup] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const isHome = location === '/';
  const isHeroHeader = isHome && !isScrolled;
  const searchResults = useMemo(() => {
    const terms = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return searchItems.slice(0, 5);

    return searchItems
      .map((item) => {
        const text = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();
        const score = terms.reduce((total, term) => total + (text.includes(term) ? 1 : 0), 0);
        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(({ item }) => item);
  }, [searchQuery]);

  const closeMenu = (restoreFocus = false) => {
    setIsMenuOpen(false);
    setOpenGroup(null);
    setOpenSubgroup(null);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  const closeSearch = (restoreFocus = false) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    if (restoreFocus) {
      window.requestAnimationFrame(() => searchButtonRef.current?.focus());
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
    closeSearch();
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

  useEffect(() => {
    if (!isSearchOpen) return;

    const timeout = window.setTimeout(() => searchInputRef.current?.focus(), 50);
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeSearch(true);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isSearchOpen]);

  return (
    <>
      <div className={`site-header-shell ${isHeroHeader ? 'site-header-shell--hero' : ''}`}>
        <div className="site-topbar">
          <div className="container site-topbar__inner">
              <span className="site-topbar__message">Peacebuilding · Community Development · Collective Action</span>
              <div className="site-topbar__right">
                <a className="site-topbar__email" href="mailto:management@b4pcodefound.org">management@b4pcodefound.org</a>
                <div className="site-topbar__socials" aria-label="Follow B4P CODEFOUND">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`B4P CODEFOUND on ${social.name}`}>
                      <SocialIcon network={social.network} />
                    </a>
                  ))}
                </div>
                <button
                  type="button"
                  className="site-topbar__search"
                  onClick={() => setIsSearchOpen(true)}
                  ref={searchButtonRef}
                  aria-expanded={isSearchOpen}
                  aria-controls="site-search-dialog"
                >
                  <Sparkles size={14} aria-hidden="true" />
                  <span>AI Search</span>
                </button>
              </div>
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

      {isSearchOpen && (
        <div className="site-search-layer" role="presentation">
          <button type="button" className="site-search-layer__backdrop" aria-label="Close AI search" onClick={() => closeSearch(true)} />
          <section id="site-search-dialog" className="site-search" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
            <div className="site-search__heading">
              <div>
                <span><Sparkles size={15} aria-hidden="true" /> AI site search</span>
                <h2 id="site-search-title">Ask B4P</h2>
                <p>Use your own words to find the page, program, or opportunity you need.</p>
              </div>
              <button type="button" aria-label="Close AI search" onClick={() => closeSearch(true)}>
                <X size={21} aria-hidden="true" />
              </button>
            </div>
            <label className="site-search__input">
              <Search size={19} aria-hidden="true" />
              <span className="sr-only">Search B4P CODEFOUND</span>
              <input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Try “women’s leadership in Liberia”"
              />
            </label>
            <p className="site-search__hint">{searchQuery ? 'Best matches' : 'Suggested places to start'}</p>
            <div className="site-search__results">
              {searchResults.length ? searchResults.map((result) => (
                <a key={result.href} href={result.href} onClick={() => closeSearch()}>
                  <strong>{result.title}</strong>
                  <span>{result.description}</span>
                </a>
              )) : (
                <div className="site-search__empty">
                  <strong>No close match yet.</strong>
                  <span>Try a program area, place, or opportunity such as “volunteer,” “Liberia,” or “donate.”</span>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

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
                  onClick={() => {
                    setOpenGroup(openGroup === group.name ? null : group.name);
                    setOpenSubgroup(null);
                  }}
                  aria-expanded={openGroup === group.name}
                >
                  {group.name}
                  {openGroup === group.name ? <Minus size={17} aria-hidden="true" /> : <Plus size={17} aria-hidden="true" />}
                </button>
                {openGroup === group.name && (
                  <div className="site-drawer__submenu">
                    {group.items.map((item, itemIndex) => {
                      const subgroupKey = `${group.name}-${itemIndex}-${item.name}`;
                      if (!item.children) {
                        return <a key={subgroupKey} href={item.href} onClick={() => closeMenu()}>{item.name}</a>;
                      }

                      return (
                        <div className="site-drawer__nested-group" key={subgroupKey}>
                          <button
                            type="button"
                            className="site-drawer__nested-trigger"
                            onClick={() => setOpenSubgroup(openSubgroup === subgroupKey ? null : subgroupKey)}
                            aria-expanded={openSubgroup === subgroupKey}
                          >
                            {item.name}
                            {openSubgroup === subgroupKey ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
                          </button>
                          {openSubgroup === subgroupKey && (
                            <div className="site-drawer__nested-submenu">
                              {item.children.map((child) => (
                                <a key={`${subgroupKey}-${child.name}`} href={child.href} onClick={() => closeMenu()}>{child.name}</a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
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