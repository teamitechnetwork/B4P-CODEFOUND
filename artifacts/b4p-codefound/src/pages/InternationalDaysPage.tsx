import { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ExternalLink,
  Filter,
  Link2,
  ListFilter,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type DayCategory = 'Peacebuilding' | 'Women & girls' | 'Youth & education' | 'Culture & inclusion' | 'Collective action';

type InternationalDay = {
  date: string;
  month: string;
  day: string;
  title: string;
  category: DayCategory;
  description: string;
  planningPrompt: string;
  unescoUrl: string;
  featured?: boolean;
};

const unescoCalendarUrl = 'https://www.unesco.org/en/days/list';

const internationalDays: InternationalDay[] = [
  {
    date: '24 January',
    month: 'January',
    day: '24',
    title: 'International Day of Education',
    category: 'Youth & education',
    description: 'A moment to make learning visible as a right, a pathway to agency, and a foundation for peaceful communities.',
    planningPrompt: 'Host a listening circle with young people about the education they need to lead well.',
    unescoUrl: 'https://www.unesco.org/days/education?hub=180536',
    featured: true,
  },
  {
    date: '11 February',
    month: 'February',
    day: '11',
    title: 'International Day of Women and Girls in Science',
    category: 'Women & girls',
    description: 'Celebrate the women and girls making knowledge, technology, and possibility more open to everyone.',
    planningPrompt: 'Invite a local woman working in science, technology, or agriculture to share her route into the field.',
    unescoUrl: 'https://www.unesco.org/days/women-girls-science?hub=180536',
  },
  {
    date: '13 February',
    month: 'February',
    day: '13',
    title: 'World Radio Day',
    category: 'Collective action',
    description: 'Use the reach of radio to open conversation, share trusted information, and bring more voices into public life.',
    planningPrompt: 'Partner with a community station for a short series on local solutions and lived experience.',
    unescoUrl: 'https://www.unesco.org/days/world-radio?hub=180536',
  },
  {
    date: '8 March',
    month: 'March',
    day: '08',
    title: 'International Women’s Day',
    category: 'Women & girls',
    description: 'A day to recognize women’s leadership and turn commitments to equality into practical next steps.',
    planningPrompt: 'Map the women leaders already shaping your community, then ask what support would help them go further.',
    unescoUrl: 'https://www.unesco.org/days/women?hub=180536',
    featured: true,
  },
  {
    date: '21 March',
    month: 'March',
    day: '21',
    title: 'World Poetry Day',
    category: 'Culture & inclusion',
    description: 'Make room for language, memory, and imagination as tools for connection across generations and borders.',
    planningPrompt: 'Collect poems, proverbs, or short reflections from community members and share them in a public reading.',
    unescoUrl: 'https://www.unesco.org/days/poetry?hub=180536',
  },
  {
    date: '23 April',
    month: 'April',
    day: '23',
    title: 'World Book and Copyright Day',
    category: 'Youth & education',
    description: 'Celebrate the stories and ideas that help communities understand one another and imagine a fairer future.',
    planningPrompt: 'Create a pop-up reading room with books by African authors and a conversation about whose stories are carried forward.',
    unescoUrl: 'https://www.unesco.org/days/world-book-and-copyright?hub=180536',
  },
  {
    date: '21 May',
    month: 'May',
    day: '21',
    title: 'World Day for Cultural Diversity',
    category: 'Culture & inclusion',
    description: 'Honor the many ways communities create, remember, gather, and solve problems together.',
    planningPrompt: 'Build a shared table, exhibition, or story map that makes the cultures in your community visible.',
    unescoUrl: 'https://www.unesco.org/days/cultural-diversity-dialogue-development?hub=180536',
    featured: true,
  },
  {
    date: '12 August',
    month: 'August',
    day: '12',
    title: 'International Youth Day',
    category: 'Youth & education',
    description: 'Put young people at the center of the agenda, not at the edge of the room.',
    planningPrompt: 'Give young people the brief, the budget, and the microphone to design one response to a local priority.',
    unescoUrl: 'https://www.unesco.org/days/youth?hub=180536',
  },
  {
    date: '23 August',
    month: 'August',
    day: '23',
    title: 'Remembrance of the Slave Trade and its Abolition',
    category: 'Culture & inclusion',
    description: 'Remember the history of resistance and abolition while connecting memory to dignity, freedom, and justice today.',
    planningPrompt: 'Work with local historians, artists, or elders to create a remembrance moment grounded in place.',
    unescoUrl: 'https://www.unesco.org/days/slave-trade-remembrance?hub=180536',
  },
  {
    date: '8 September',
    month: 'September',
    day: '08',
    title: 'International Literacy Day',
    category: 'Youth & education',
    description: 'Make literacy a shared responsibility and celebrate the everyday knowledge that helps people participate fully.',
    planningPrompt: 'Pair learners with peer mentors for a practical literacy session rooted in work, health, or civic life.',
    unescoUrl: 'https://www.unesco.org/days/literacy?hub=180536',
  },
  {
    date: '21 September',
    month: 'September',
    day: '21',
    title: 'International Day of Peace',
    category: 'Peacebuilding',
    description: 'Pause, listen, and practice the patient work of peace — in households, neighborhoods, institutions, and across borders.',
    planningPrompt: 'Host a peace table where people name one tension, one hope, and one action they can carry together.',
    unescoUrl: 'https://www.unesco.org/days/peace?hub=180536',
    featured: true,
  },
  {
    date: '5 October',
    month: 'October',
    day: '05',
    title: 'World Teachers’ Day',
    category: 'Youth & education',
    description: 'Recognize educators as community builders and make space to talk about the conditions that help teaching thrive.',
    planningPrompt: 'Ask teachers what would make their classrooms more welcoming, safe, and useful for every learner.',
    unescoUrl: 'https://www.unesco.org/days/teachers?hub=180536',
  },
  {
    date: '10 November',
    month: 'November',
    day: '10',
    title: 'World Science Day for Peace and Development',
    category: 'Peacebuilding',
    description: 'Connect scientific thinking with public trust, sustainable development, and the shared work of building peace.',
    planningPrompt: 'Turn a local challenge into a question young people can investigate with a mentor and share back to the community.',
    unescoUrl: 'https://www.unesco.org/days/science-peace-development?hub=180536',
  },
  {
    date: '3 December',
    month: 'December',
    day: '03',
    title: 'International Day of Persons with Disabilities',
    category: 'Culture & inclusion',
    description: 'Move beyond awareness toward access, leadership, and belonging in every community space.',
    planningPrompt: 'Audit one community gathering with disabled participants and make the next invitation more accessible by design.',
    unescoUrl: 'https://www.unesco.org/days/international-day-persons-disabilities?hub=180536',
  },
];

const categories: Array<'All moments' | DayCategory> = [
  'All moments',
  'Peacebuilding',
  'Women & girls',
  'Youth & education',
  'Culture & inclusion',
  'Collective action',
];

const months = ['All months', ...Array.from(new Set(internationalDays.map((item) => item.month)))];

function downloadPlanningBrief(savedDays: InternationalDay[]) {
  const selected = savedDays.length ? savedDays : internationalDays;
  const content = [
    'B4P CODEFOUND · INTERNATIONAL DAYS PLANNING BRIEF',
    '',
    'Moments to turn into meaningful community programming:',
    '',
    ...selected.map((item) => `${item.date} — ${item.title}\nCategory: ${item.category}\nPlanning prompt: ${item.planningPrompt}`),
    '',
    'Source calendar: UNESCO International Days',
    unescoCalendarUrl,
  ].join('\n\n');
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'b4p-international-days-planning-brief.txt';
  link.click();
  URL.revokeObjectURL(url);
}

export default function InternationalDaysPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All moments');
  const [activeMonth, setActiveMonth] = useState('All months');
  const [query, setQuery] = useState('');
  const [savedTitles, setSavedTitles] = useState<string[]>([]);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const filteredDays = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return internationalDays.filter((item) => {
      const matchesCategory = activeCategory === 'All moments' || item.category === activeCategory;
      const matchesMonth = activeMonth === 'All months' || item.month === activeMonth;
      const matchesQuery = !normalizedQuery
        || `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesMonth && matchesQuery;
    });
  }, [activeCategory, activeMonth, query]);

  const savedDays = internationalDays.filter((item) => savedTitles.includes(item.title));
  const toggleSaved = (title: string) => {
    setSavedTitles((current) => current.includes(title)
      ? current.filter((savedTitle) => savedTitle !== title)
      : [...current, title]);
  };

  return (
    <div className="international-days-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="international-days-hero">
          <div className="page-container international-days-hero__inner">
            <div className="international-days-hero__copy">
              <span className="international-days-kicker">
                <Sparkles size={15} aria-hidden="true" />
                A community programming calendar
              </span>
              <h1>
                Make a day<br />
                <em>matter.</em>
              </h1>
              <p>
                A curated guide to UNESCO International Days that can help
                African-led peacebuilding, education, inclusion, and collective
                action find a moment in the calendar — and a place in community.
              </p>
              <div className="international-days-hero__actions">
                <a className="international-days-primary-link" href="#calendar">
                  Explore the calendar <ArrowDownRight size={18} aria-hidden="true" />
                </a>
                <a className="international-days-text-link" href="#how-to-use">
                  How to use this guide <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="international-days-hero__art" aria-label="A visual timeline showing selected months and community themes">
              <div className="international-days-hero__art-grid" aria-hidden="true" />
              <div className="international-days-hero__art-orbit international-days-hero__art-orbit--one" aria-hidden="true" />
              <div className="international-days-hero__art-orbit international-days-hero__art-orbit--two" aria-hidden="true" />
              <div className="international-days-hero__art-center">
                <span>01</span>
                <strong>the year<br /><em>is full of openings</em></strong>
              </div>
              <div className="international-days-hero__art-note international-days-hero__art-note--top">
                <span>24</span>
                <small>Jan</small>
              </div>
              <div className="international-days-hero__art-note international-days-hero__art-note--right">
                <span>21</span>
                <small>Sep</small>
              </div>
              <div className="international-days-hero__art-note international-days-hero__art-note--bottom">
                <span>05</span>
                <small>Oct</small>
              </div>
              <p className="international-days-hero__art-caption">Calendar as invitation · Action as practice</p>
            </div>
          </div>
        </section>

        <section id="how-to-use" className="international-days-intro">
          <div className="page-container international-days-intro__layout">
            <div>
              <span className="international-days-section-kicker">The point is not the post</span>
              <h2>Use the date<br /><em>to open a door.</em></h2>
            </div>
            <div className="international-days-intro__copy">
              <p>
                International Days give us a shared language. The meaningful work
                begins when that language becomes a listening session, a classroom
                conversation, a radio segment, a policy ask, or a new relationship.
              </p>
              <div className="international-days-intro__steps">
                <span><strong>01</strong> Notice a moment</span>
                <span><strong>02</strong> Invite the people closest to it</span>
                <span><strong>03</strong> Choose one useful next step</span>
              </div>
            </div>
          </div>
        </section>

        <section id="calendar" className="international-days-calendar">
          <div className="page-container">
            <div className="international-days-calendar__header">
              <div>
                <span className="international-days-section-kicker">The curated calendar</span>
                <h2>Small dates.<br /><em>Big invitations.</em></h2>
              </div>
              <div className="international-days-calendar__header-note">
                <span className="international-days-calendar__count">{filteredDays.length.toString().padStart(2, '0')}</span>
                <p>moments selected for<br />community-led work</p>
              </div>
            </div>

            <div className="international-days-controls" aria-label="Filter international days">
              <div className="international-days-search">
                <label htmlFor="international-days-search">Search the calendar</label>
                <div>
                  <ListFilter size={17} aria-hidden="true" />
                  <input
                    id="international-days-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search by theme or day"
                  />
                  {query && (
                    <button type="button" aria-label="Clear search" onClick={() => setQuery('')}>
                      <X size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
              <div className="international-days-select">
                <label htmlFor="international-days-month">Browse by month</label>
                <div>
                  <CalendarDays size={17} aria-hidden="true" />
                  <select id="international-days-month" value={activeMonth} onChange={(event) => setActiveMonth(event.target.value)}>
                    {months.map((month) => <option key={month}>{month}</option>)}
                  </select>
                </div>
              </div>
              <button
                type="button"
                className={`international-days-planner-button ${isPlannerOpen ? 'is-active' : ''}`}
                onClick={() => setIsPlannerOpen((open) => !open)}
                aria-expanded={isPlannerOpen}
              >
                <Star size={17} aria-hidden="true" />
                My planning list <span>{savedTitles.length.toString().padStart(2, '0')}</span>
              </button>
            </div>

            <div className="international-days-filter-row" role="group" aria-label="Browse by theme">
              <Filter size={15} aria-hidden="true" />
              {categories.map((category) => (
                <button
                  type="button"
                  className={activeCategory === category ? 'is-active' : ''}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {isPlannerOpen && (
              <aside className="international-days-planner" aria-label="My planning list">
                <div>
                  <span className="international-days-section-kicker">Your planning list</span>
                  <h3>{savedDays.length ? 'Keep these moments close.' : 'Start building your year.'}</h3>
                  <p>
                    {savedDays.length
                      ? 'Save the dates that could become a meaningful gathering, conversation, or campaign.'
                      : 'Select a day below to collect the moments that belong in your community calendar.'}
                  </p>
                </div>
                <div className="international-days-planner__actions">
                  <button type="button" onClick={() => downloadPlanningBrief(savedDays)}>
                    Download planning brief <ArrowDownRight size={16} aria-hidden="true" />
                  </button>
                  {savedDays.length > 0 && (
                    <button type="button" className="international-days-planner__clear" onClick={() => setSavedTitles([])}>
                      Clear list
                    </button>
                  )}
                </div>
              </aside>
            )}

            {filteredDays.length > 0 ? (
              <div className="international-days-list">
                {filteredDays.map((item, index) => {
                  const isSaved = savedTitles.includes(item.title);
                  return (
                    <article className={`international-day-card ${item.featured ? 'international-day-card--featured' : ''}`} key={item.title}>
                      <div className="international-day-card__date">
                        <span>{item.month.slice(0, 3)}</span>
                        <strong>{item.day}</strong>
                        <small>{String(index + 1).padStart(2, '0')}</small>
                      </div>
                      <div className="international-day-card__body">
                        <div className="international-day-card__topline">
                          <span>{item.category}</span>
                          {item.featured && <b>Worth a closer look</b>}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="international-day-card__prompt">
                          <span>Try this</span>
                          <p>{item.planningPrompt}</p>
                        </div>
                        <div className="international-day-card__footer">
                          <a href={item.unescoUrl} target="_blank" rel="noreferrer">
                            UNESCO calendar <ExternalLink size={14} aria-hidden="true" />
                          </a>
                          <button type="button" className={isSaved ? 'is-saved' : ''} onClick={() => toggleSaved(item.title)} aria-pressed={isSaved}>
                            {isSaved ? <Check size={15} aria-hidden="true" /> : <Star size={15} aria-hidden="true" />}
                            {isSaved ? 'Saved to list' : 'Save for planning'}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="international-days-empty" role="status">
                <span><Filter size={21} aria-hidden="true" /></span>
                <h3>No moments match those filters.</h3>
                <p>Try another theme, month, or search phrase to find a useful opening.</p>
                <button type="button" onClick={() => { setActiveCategory('All moments'); setActiveMonth('All months'); setQuery(''); }}>
                  Reset the calendar <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            )}

            <div className="international-days-source">
              <Link2 size={16} aria-hidden="true" />
              <p>Dates and observances are drawn from UNESCO’s International Days calendar. Always confirm current details before publishing a public programme.</p>
              <a href={unescoCalendarUrl} target="_blank" rel="noreferrer">Visit UNESCO <ExternalLink size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="international-days-cta">
          <div className="page-container international-days-cta__inner">
            <div>
              <span className="international-days-section-kicker">Bring it home</span>
              <h2>A date becomes powerful<br />when people <em>recognize themselves in it.</em></h2>
            </div>
            <div className="international-days-cta__copy">
              <p>Planning an awareness moment, school activity, community dialogue, or public campaign? B4P CODEFOUND can help you connect the occasion to locally led work.</p>
              <a href="/partner-with-us">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}