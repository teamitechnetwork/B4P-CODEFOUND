import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';
import './_group.css';

const groups = [
  {
    name: 'About Us',
    eyebrow: 'The people behind the work',
    description: 'Meet the leaders, values, and stories shaping B4P CODEFOUND.',
    items: ['About Us', 'Our Impact', 'The Director’s Corner', 'The Board', 'Management Team', 'Advisory Council', 'Our Core Values', 'Where We Work', 'Theory of Change', 'FAQs', 'Events & Gatherings', 'International Days'],
  },
  {
    name: 'What We Do',
    eyebrow: 'Our work in motion',
    description: 'Discover the programs and services turning collective action into progress.',
    items: ['What We Do', 'Peacebuilding', 'Economic Development & Empowerment', 'Programs', 'Services', 'Columbus Women Connect'],
  },
  {
    name: 'Subsidiaries',
    eyebrow: 'Our wider network',
    description: 'Explore the initiatives and community networks growing alongside B4P.',
    items: ['B4P CODEFOUND Liberia', 'Bong County Women and Youth Development Cooperation', 'Columbus Women Connect'],
  },
  {
    name: 'Work With Us',
    eyebrow: 'Move the mission forward',
    description: 'Bring your time, talent, or partnership to work that lasts.',
    items: ['Become a Volunteer', 'Internship', 'Jobs', 'Partner with us'],
  },
  {
    name: 'Shop Now',
    eyebrow: 'Carry the mission with you',
    description: 'Support B4P CODEFOUND through our store and member experiences.',
    items: ['Store', 'Cart', 'My Account'],
  },
];

export function ModernDesktopMenus() {
  const [openGroup, setOpenGroup] = useState('About Us');
  const activeGroup = groups.find((group) => group.name === openGroup) ?? groups[0];

  return (
    <div className="header-redesign">
      <div className="header-redesign__topbar">
        <span>Peacebuilding · Economic Development · Collective Action</span>
        <span>management@b4pcodefound.org</span>
      </div>
      <header className="header-redesign__header">
        <div className="header-redesign__brand">
          <div className="header-redesign__brand-mark">B4P</div>
          <div>
            <strong>CODEFOUND</strong>
            <small>African-led action</small>
          </div>
        </div>
        <nav className="header-redesign__nav" aria-label="Desktop navigation preview">
          {groups.map((group) => {
            const isOpen = group.name === openGroup;
            return (
              <div className={`header-redesign__group ${isOpen ? 'is-open' : ''}`} key={group.name}>
                <button
                  className="header-redesign__trigger"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? '' : group.name)}
                >
                  {group.name}
                  <ChevronDown size={13} aria-hidden="true" />
                </button>
                {isOpen && (
                  <section className="header-redesign__panel" aria-label={`${group.name} menu`}>
                    <div className="header-redesign__links">
                      {activeGroup.items.map((item) => (
                        <a className="header-redesign__link" href="#preview" key={item}>
                          <span>{item}</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            );
          })}
        </nav>
        <a className="header-redesign__donate" href="#donate">Donate</a>
      </header>
    </div>
  );
}