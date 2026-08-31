import { type MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Menu, Search, Sparkles, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { programRegions } from '@/data/programs';
import { SocialLinks } from '@/components/layout/SocialLinks';

type NavItem = { name: string; href: string; children?: NavItem[] };
type NavGroup = { name: string; items: NavItem[] };
type MobilePanel = { title: string; items: NavItem[] };

const searchItems = [
  { title: 'About B4P CODEFOUND', href: '/about-us', description: 'Our mission, founder story, values, and where we work.', keywords: 'mission founder values history peace community development organization' },
  { title: 'The Director’s Corner', href: '/the-directors-corner', description: 'A message from Founder and Executive Director Lindora Kolu Howard-Diawara.', keywords: 'director founder lindora howard diawara leadership message' },
  { title: 'What We Do', href: '/what-we-do', description: 'Explore our peacebuilding, economic development, and community initiatives.', keywords: 'what we do peacebuilding economic development empowerment services community' },
  { title: 'Global Programs', href: '/programs/global', description: 'Programs advancing African-led leadership and collective action.', keywords: 'global international africa leadership advocacy women youth programs' },
  { title: 'USA Programs', href: '/programs/usa', description: 'Local programs and diaspora-facing initiatives in the United States.', keywords: 'usa united states ohio columbus diaspora community programs' },
  { title: 'Liberia Programs', href: '/programs/liberia', description: 'Peacebuilding and community-development programs across Liberia.', keywords: 'liberia gbarnga bong county women youth development programs' },
  { title: 'B4P CODEFOUND Services', href: '/services', description: 'Fiscal sponsorship, nonprofit capacity building, and business development.', keywords: 'services fiscal sponsorship nonprofit capacity building business consulting' },
  { title: 'Columbus Women Connect', href: '/columbus-women-connect', description: 'A multicultural network where women connect, learn, and lead.', keywords: 'columbus women connect cwc ohio women network leadership' },
  { title: 'Volunteer with B4P', href: '/become-a-volunteer', description: 'Share your time and skills with B4P CODEFOUND.', keywords: 'volunteer volunteering help serve contribute community' },
  { title: 'Internships', href: '/internship', description: 'Learn alongside B4P CODEFOUND through a mission-led internship.', keywords: 'internship student placement learning experience' },
  { title: 'Jobs at B4P CODEFOUND', href: '/jobs', description: 'Explore current and future opportunities to join the team.', keywords: 'jobs careers work employment hiring opportunity' },
  { title: 'Partner with B4P', href: '/partner-with-us', description: 'Explore partnership opportunities with B4P CODEFOUND.', keywords: 'partner partnership sponsorship collaboration organization support' },
  { title: 'Events & Gatherings', href: '/events', description: 'Find upcoming invitations and explore B4P CODEFOUND event stories across Liberia and the diaspora.', keywords: 'events gatherings conference diaspora gala forum CSW Liberia upcoming planning' },
  { title: 'International Days', href: '/international-days', description: 'Use meaningful observances as openings for community-led action.', keywords: 'international days calendar peace education women youth culture community' },
  { title: 'Make a Donation', href: '/make-a-donation', description: 'Support African-led peacebuilding and community development.', keywords: 'donate donation give support fundraising mission' },
  { title: 'Contact B4P CODEFOUND', href: '/contact', description: 'Contact the team, offices, and support channels.', keywords: 'contact email phone address office support' },
  { title: 'FAQs', href: '/faqs', description: 'Find clear answers about B4P CODEFOUND, our work, and ways to connect.', keywords: 'faq frequently asked questions answers information support' },
];

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
      { name: 'FAQs', href: '/faqs' },
      { name: 'Events & Gatherings', href: '/events' },
      { name: 'International Days', href: '/international-days' },
    ],
  },
  {
    name: 'What We Do',
    items: [
      { name: 'What We Do', href: '/what-we-do' },
      { name: 'Peacebuilding', href: '/peacebuilding-program' },
      { name: 'Economic Development & Empowerment', href: '/economic-development-program' },
      {
        name: 'Programs',
        href: '/programs',
        children: programNavItems,
      },
      {
        name: 'Services',
        href: '/services',
        children: [
          { name: 'Fiscal Sponsorship', href: '/services/fiscal-sponsorship' },
          { name: 'Nonprofit Capacity Building', href: '/services/nonprofit-capacity-building' },
          { name: 'Business Development', href: '/services/business-development' },
        ],
      },
      { name: 'Columbus Women Connect', href: '/columbus-women-connect' },
    ],
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
      { name: 'Partner with us', href: '/partner-with-us' },
    ],
  },
  {
    name: 'Shop Now',
    items: [
      { name: 'Store', href: '/shop' },
      { name: 'Cart', href: '/cart' },
      { name: 'My Account', href: '/my-account' },
    ],
  },
];

export function Header() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobilePath, setMobilePath] = useState<MobilePanel[]>([]);
  const [desktopOpenGroup, setDesktopOpenGroup] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDialogRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
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
    setMobilePath([]);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  const enterMobilePanel = (title: string, items: NavItem[]) => {
    setMobilePath((path) => [...path, { title, items }]);
  };

  const leaveMobilePanel = () => {
    setMobilePath((path) => path.slice(0, -1));
  };

  const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/events') {
      event.preventDefault();
      setLocation('/events');
    }
    closeMenu();
  };

  const closeSearch = (restoreFocus = false) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    if (restoreFocus) {
      window.requestAnimationFrame(() => searchButtonRef.current?.focus());
    }
  };

  const focusSearchBoundary = (boundary: 'first' | 'last') => {
    const focusable = Array.from(
      searchDialogRef.current?.querySelectorAll<HTMLElement>(
        'input:not([disabled]), a[href], button:not([disabled])',
      ) ?? [],
    );
    const target = boundary === 'first' ? focusable[0] : focusable[focusable.length - 1];
    target?.focus();
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
    setDesktopOpenGroup(null);
  }, [location]);

  useEffect(() => {
    if (!desktopOpenGroup) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node)) {
        setDesktopOpenGroup(null);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [desktopOpenGroup]);

  useEffect(() => {
    document.body.classList.toggle('has-site-drawer-open', isMenuOpen);
    return () => document.body.classList.remove('has-site-drawer-open');
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle('has-site-search-open', isSearchOpen);
    return () => document.body.classList.remove('has-site-search-open');
  }, [isSearchOpen]);

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

    const inertTargets = Array.from(
      document.querySelectorAll<HTMLElement>('main, footer, .site-header-shell, .site-drawer, .site-drawer__backdrop'),
    );
    inertTargets.forEach((target) => {
      target.inert = true;
    });

    const timeout = window.setTimeout(() => searchInputRef.current?.focus(), 50);
    const focusableSelector = 'input:not([disabled]), a[href], button:not([disabled])';
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeSearch(true);
        return;
      }

      if (event.key !== 'Tab' || !searchDialogRef.current) return;
      const focusable = Array.from(searchDialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
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

    document.addEventListener('keydown', handleKeydown);
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', handleKeydown);
      inertTargets.forEach((target) => {
        target.inert = false;
      });
    };
  }, [isSearchOpen]);

  return (
    <>
      <div className={`site-header-shell ${isHeroHeader ? 'site-header-shell--hero' : ''}`}>
        <div className="site-topbar">
          <div className="container site-topbar__inner">
              <span className="site-topbar__message">Peacebuilding · Economic Development · Collective Action</span>
              <div className="site-topbar__right">
                <a className="site-topbar__email" href="mailto:management@b4pcodefound.org">management@b4pcodefound.org</a>
                <SocialLinks className="site-topbar__socials" />
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
              <img src="/brand/b4p-logo-clean.png" alt="B4P CODEFOUND" />
            </a>
            <nav className="site-desktop-nav" aria-label="Primary navigation" ref={desktopNavRef}>
              {navGroups.map((group) => {
                const isOpen = desktopOpenGroup === group.name;
                const panelId = `desktop-nav-${group.name.toLowerCase().replaceAll(' ', '-')}`;
                return (
                  <div
                    className={`site-desktop-nav__group ${isOpen ? 'is-open' : ''}`}
                    key={group.name}
                    onMouseEnter={() => setDesktopOpenGroup(group.name)}
                    onMouseLeave={() => setDesktopOpenGroup((current) => current === group.name ? null : current)}
                    onFocus={() => setDesktopOpenGroup(group.name)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                        setDesktopOpenGroup((current) => current === group.name ? null : current);
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setDesktopOpenGroup(isOpen ? null : group.name)}
                    >
                      <span>{group.name}</span>
                      <ChevronDown size={14} aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <div
                        id={panelId}
                        className={`site-desktop-nav__panel site-desktop-nav__panel--${group.name.toLowerCase().replaceAll(' ', '-')}`}
                      >
                        {group.items.map((item) => (
                          <div className="site-desktop-nav__item" key={item.name}>
                            <a
                              href={item.href}
                              className={item.children ? 'site-desktop-nav__item-title' : undefined}
                              onClick={(event) => {
                                if (item.href === '/events') {
                                  event.preventDefault();
                                  setLocation('/events');
                                }
                                setDesktopOpenGroup(null);
                              }}
                            >
                              {item.name}
                            </a>
                            {item.children && (
                              <div className="site-desktop-nav__children">
                                {item.children.map((child) => (
                                  <a
                                    href={child.href}
                                    key={child.name}
                                    onClick={(event) => {
                                      if (child.href === '/events') {
                                        event.preventDefault();
                                        setLocation('/events');
                                      }
                                      setDesktopOpenGroup(null);
                                    }}
                                  >
                                    {child.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
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
          <button
            type="button"
            className="site-search-layer__backdrop"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => closeSearch(true)}
          />
          <section
            id="site-search-dialog"
            className="site-search"
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-search-title"
            ref={searchDialogRef}
          >
            <span
              className="site-search__focus-sentinel"
              tabIndex={0}
              aria-hidden="true"
              onFocus={() => focusSearchBoundary('last')}
            />
            <div className="site-search__heading">
              <div>
                <span><Sparkles size={15} aria-hidden="true" /> AI site search</span>
                 <h2 id="site-search-title">Ask B4P CODEFOUND</h2>
                <p>Use your own words to find the page, program, or opportunity you need.</p>
              </div>
              <button
                type="button"
                aria-label="Close AI search"
                onClick={() => closeSearch(true)}
                onKeyDown={(event) => {
                  if (event.key === 'Tab' && event.shiftKey) {
                    event.preventDefault();
                    focusSearchBoundary('last');
                  }
                }}
              >
                <X size={21} aria-hidden="true" />
              </button>
            </div>
            <div className="site-search__input-wrapper">
              <div className="site-search__ring" aria-hidden="true" />
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
            </div>
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
            <span
              className="site-search__focus-sentinel"
              tabIndex={0}
              aria-hidden="true"
              onFocus={() => focusSearchBoundary('first')}
            />
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
            <img src="/brand/b4p-logo-clean.png" alt="B4P CODEFOUND" />
          </a>
          <button type="button" onClick={() => closeMenu(true)} className="site-drawer__close" aria-label="Close navigation menu">
            <X size={23} aria-hidden="true" />
          </button>
        </div>

        <div className="site-drawer__body">
          {mobilePath.length === 0 ? (
            <>
              <a href="/" className="site-drawer__home" onClick={() => closeMenu()}>Home</a>
              <nav className="site-drawer__top-level" aria-label="Mobile primary navigation">
                {navGroups.map((group) => (
                  <button
                    type="button"
                    className="site-drawer__menu-row"
                    key={group.name}
                    onClick={() => enterMobilePanel(group.name, group.items)}
                  >
                    <span>{group.name}</span>
                    <ChevronRight size={23} aria-hidden="true" />
                  </button>
                ))}
              </nav>
              <a href="/contact" className="site-drawer__home" onClick={() => closeMenu()}>Contact</a>
            </>
          ) : (
            (() => {
              const panel = mobilePath[mobilePath.length - 1];
              return (
                <div className="site-drawer__panel-view">
                  <button
                    type="button"
                    className="site-drawer__back"
                    onClick={leaveMobilePanel}
                    aria-label={`Back from ${panel.title}`}
                  >
                    <ChevronLeft size={22} aria-hidden="true" />
                    <span>Back</span>
                  </button>
                  <h2 className="site-drawer__panel-title">{panel.title}</h2>
                  <nav className="site-drawer__panel-nav" aria-label={`${panel.title} navigation`}>
                    {panel.items.map((item) => (
                      item.children ? (
                        <button
                          type="button"
                          className="site-drawer__menu-row site-drawer__menu-row--child"
                          key={item.name}
                          onClick={() => enterMobilePanel(item.name, item.children ?? [])}
                        >
                          <span>{item.name}</span>
                          <ChevronRight size={22} aria-hidden="true" />
                        </button>
                      ) : (
                        <a
                          className="site-drawer__panel-link"
                          key={item.name}
                          href={item.href}
                          onClick={(event) => handleMobileLinkClick(event, item.href)}
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </nav>
                </div>
              );
            })()
          )}
        </div>

        <div className="site-drawer__footer">
          <p>Support African-led peacebuilding and economic development.</p>
          <a href="/make-a-donation" onClick={() => closeMenu()}>Make a donation</a>
          <a href="/partner-with-us" onClick={() => closeMenu()}>Become a partner</a>
        </div>
      </aside>
    </>
  );
}