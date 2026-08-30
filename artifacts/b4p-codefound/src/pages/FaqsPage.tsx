import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown, Mail, MessageCircleQuestion, Search } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type FaqCategory = 'About B4P' | 'Programs & places' | 'Get involved';

type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
};

const faqItems: FaqItem[] = [
  {
    id: 'what-is-b4p',
    category: 'About B4P',
    question: 'What is B4P CODEFOUND?',
    answer:
      'B4P CODEFOUND is an African-led nonprofit and social enterprise advancing peacebuilding, community development, women’s leadership, and collective action. Our work connects local leadership with relationships and learning across Liberia, the United States, and beyond.',
    links: [{ label: 'Read about B4P CODEFOUND', href: '/about-us' }],
  },
  {
    id: 'what-we-do',
    category: 'About B4P',
    question: 'What does B4P CODEFOUND work on?',
    answer:
      'Our work brings together peacebuilding, economic development, women and girls’ leadership, youth and civic engagement, governance, and community-led opportunity. We also offer fiscal sponsorship, nonprofit capacity building, and business development services for mission-aligned work.',
    links: [{ label: 'Explore what we do', href: '/what-we-do' }],
  },
  {
    id: 'where-work',
    category: 'Programs & places',
    question: 'Where does B4P CODEFOUND work?',
    answer:
      'B4P CODEFOUND connects communities across Liberia, the United States, and global networks. Our public program directories make it easier to explore work by region, including Liberia, USA, and global programs.',
    links: [
      { label: 'Where we work', href: '/where-we-work' },
      { label: 'Browse programs', href: '/what-we-do' },
    ],
  },
  {
    id: 'program-areas',
    category: 'Programs & places',
    question: 'How can I learn about a specific program?',
    answer:
      'Start with the program directory and choose Global, USA, or Liberia. Each program page explains the focus of that work and provides the next useful place to learn more.',
    links: [
      { label: 'Global programs', href: '/programs/global' },
      { label: 'USA programs', href: '/programs/usa' },
      { label: 'Liberia programs', href: '/programs/liberia' },
    ],
  },
  {
    id: 'columbus-women-connect',
    category: 'Programs & places',
    question: 'What is Columbus Women Connect?',
    answer:
      'Columbus Women Connect is a multicultural network helping women connect, lead, advocate, and thrive across cultures and generations in Columbus and beyond.',
    links: [{ label: 'Visit Columbus Women Connect', href: '/columbus-women-connect' }],
  },
  {
    id: 'volunteer',
    category: 'Get involved',
    question: 'How can I volunteer with B4P CODEFOUND?',
    answer:
      'You can share your time and skills through B4P CODEFOUND’s volunteer pathway. The volunteer page is the best starting point for current information about how to contribute.',
    links: [{ label: 'Explore volunteering', href: '/become-a-volunteer' }],
  },
  {
    id: 'partnership',
    category: 'Get involved',
    question: 'How can my organization partner with B4P CODEFOUND?',
    answer:
      'B4P CODEFOUND works with partners connected to African-led peacebuilding, community development, and collective action. Visit the partnership page to explore ways to connect around shared work.',
    links: [{ label: 'Partner with B4P CODEFOUND', href: '/partner-with-us' }],
  },
  {
    id: 'donate',
    category: 'Get involved',
    question: 'How can I support the work financially?',
    answer:
      'You can support B4P CODEFOUND’s peacebuilding, women’s leadership, youth opportunity, and community development work through the donation page.',
    links: [{ label: 'Make a donation', href: '/make-a-donation' }],
  },
  {
    id: 'contact',
    category: 'Get involved',
    question: 'How can I contact B4P CODEFOUND?',
    answer:
      'For questions about programs, partnerships, volunteering, donations, or community-led peacebuilding, contact the team through the contact page or email management@b4pcodefound.org. The organization also lists an Ohio phone line at +1 380-206-1631.',
    links: [
      { label: 'Contact the team', href: '/contact' },
      { label: 'Email management', href: 'mailto:management@b4pcodefound.org' },
    ],
  },
];

const categories: Array<'All' | FaqCategory> = ['All', 'About B4P', 'Programs & places', 'Get involved'];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [query, setQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['what-is-b4p']);

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return faqItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const searchableText = `${item.question} ${item.answer} ${item.category}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  const toggleItem = (id: string) => {
    setOpenIds((current) => (current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]));
  };

  const expandVisible = () => {
    setOpenIds((current) => Array.from(new Set([...current, ...visibleItems.map((item) => item.id)])));
  };

  const collapseAll = () => setOpenIds([]);

  return (
    <div className="faqs-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="faqs-hero" aria-labelledby="faqs-title">
          <div className="page-container faqs-hero__inner">
            <div className="faqs-hero__copy">
              <span className="faqs-kicker"><MessageCircleQuestion size={15} aria-hidden="true" /> A clear place to start</span>
              <h1 id="faqs-title" data-testid="heading-faq-title">Questions are part of the work.</h1>
              <p data-testid="text-faq-intro">
                Find straightforward answers about B4P CODEFOUND, our programs, the places we work,
                and ways to join the circle of support.
              </p>
              <a className="faqs-hero__link" href="#faq-list" data-testid="link-faq-browse">
                Browse the answers <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="faqs-hero__index" aria-label="FAQ overview">
              <span className="faqs-hero__index-number">09</span>
              <span className="faqs-hero__index-label">questions,<br />kept useful</span>
              <span className="faqs-hero__index-rule" aria-hidden="true" />
              <p>About the work · Places · Participation</p>
            </div>
          </div>
        </section>

        <section className="faqs-content" id="faq-list" aria-labelledby="faq-list-title">
          <div className="page-container">
            <div className="faqs-content__intro">
              <div>
                <span className="faqs-section-kicker">Frequently asked questions</span>
                <h2 id="faq-list-title">Find your way in.</h2>
              </div>
              <p>
                If your question is not here, the team is ready to listen. These answers point to
                the public information currently available across the B4P CODEFOUND site.
              </p>
            </div>

            <div className="faqs-toolbar">
              <label className="faqs-search">
                <Search size={17} aria-hidden="true" />
                <span className="sr-only">Search frequently asked questions</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search the questions"
                  data-testid="input-faq-search"
                />
              </label>
              <div className="faqs-categories" aria-label="Filter frequently asked questions">
                {categories.map((category) => (
                  <button
                    type="button"
                    className={activeCategory === category ? 'is-active' : ''}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    data-testid={`button-faq-filter-${category.toLowerCase().replaceAll(' ', '-')}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="faqs-view-actions">
                <button type="button" onClick={expandVisible} data-testid="button-faq-expand-all">Expand all</button>
                <span aria-hidden="true">/</span>
                <button type="button" onClick={collapseAll} data-testid="button-faq-collapse-all">Collapse</button>
              </div>
            </div>

            <div className="faqs-list" aria-live="polite">
              {visibleItems.length ? visibleItems.map((item, index) => {
                const isOpen = openIds.includes(item.id);
                const answerId = `faq-answer-${item.id}`;
                return (
                  <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.id} data-testid={`faq-item-${item.id}`}>
                    <button
                      type="button"
                      className="faq-item__trigger"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      data-testid={`button-faq-${item.id}`}
                    >
                      <span className="faq-item__number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="faq-item__question">{item.question}</span>
                      <ChevronDown size={21} aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <div className="faq-item__answer" id={answerId} role="region" aria-labelledby={`button-faq-${item.id}`}>
                        <div className="faq-item__answer-inner">
                          <span className="faq-item__category">{item.category}</span>
                          <p data-testid={`text-faq-answer-${item.id}`}>{item.answer}</p>
                          {item.links && (
                            <div className="faq-item__links">
                              {item.links.map((link) => (
                                <a href={link.href} key={link.href} data-testid={`link-faq-${item.id}-${link.label.toLowerCase().replaceAll(' ', '-')}`}>
                                  {link.label}
                                  <ArrowRight size={15} aria-hidden="true" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                );
              }) : (
                <div className="faqs-empty" data-testid="text-faq-empty">
                  <Search size={22} aria-hidden="true" />
                  <h3>No answer matched that search.</h3>
                  <p>Try a different word, or return to all questions.</p>
                  <button type="button" onClick={() => { setQuery(''); setActiveCategory('All'); }} data-testid="button-faq-reset">
                    Show all questions
                  </button>
                </div>
              )}
            </div>

            <aside className="faqs-contact" aria-labelledby="faqs-contact-title">
              <div className="faqs-contact__mark" aria-hidden="true"><Mail size={22} /></div>
              <div>
                <span className="faqs-section-kicker">Still wondering?</span>
                <h2 id="faqs-contact-title">Let’s continue the conversation.</h2>
                <p>Reach the B4P CODEFOUND team with a question about the work or a way to contribute.</p>
              </div>
              <a href="/contact" data-testid="link-faq-contact">Get in touch <ArrowRight size={16} aria-hidden="true" /></a>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}