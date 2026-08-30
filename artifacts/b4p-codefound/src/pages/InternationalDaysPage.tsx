import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Filter,
  Link2,
  ListFilter,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { analyticsEvents, trackEvent } from '@/lib/analytics';

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

type UnescoObservance = {
  date: string;
  month: string;
  title: string;
  url: string;
};

type UnescoSeed = [month: string, date: string, title: string, url: string];

const unescoObservanceSeed: UnescoSeed[] = [
  ['January', '14 Jan', 'World Logic Day', 'https://www.unesco.org/days/world-logic?hub=180536'],
  ['January', '24 Jan', 'International Day of Education', 'https://www.unesco.org/days/education?hub=180536'],
  ['January', '24 Jan', 'World Day for African and Afrodescendant Culture', 'https://www.unesco.org/days/african-culture?hub=180536'],
  ['January', '25 Jan', 'International Day of Women in Multilateralism', 'https://www.unesco.org/days/women-multilateralism?hub=180536'],
  ['January', '27 Jan', 'International Day of Commemoration in Memory of the Victims of the Holocaust', 'https://www.unesco.org/days/holocaust-remembrance?hub=180536'],
  ['February', '11 Feb', 'International Day of Women and Girls in Science', 'https://www.unesco.org/days/women-girls-science?hub=180536'],
  ['February', '13 Feb', 'World Radio Day', 'https://www.unesco.org/days/world-radio?hub=180536'],
  ['February', '21 Feb', 'International Mother Language Day', 'https://www.unesco.org/days/mother-language?hub=180536'],
  ['March', '04 Mar', 'World Engineering Day for Sustainable Development', 'https://www.unesco.org/days/engineering-sustainable-development?hub=180536'],
  ['March', '08 Mar', 'International Women’s Day', 'https://www.unesco.org/days/women?hub=180536'],
  ['March', '14 Mar', 'International Day of Mathematics', 'https://www.unesco.org/days/mathematics?hub=180536'],
  ['March', '19 Mar', 'International Day for Digital Learning', 'https://www.unesco.org/days/digital-learning?hub=180536'],
  ['March', '20 Mar', 'International Francophonie Day', 'https://www.unesco.org/days/francophonie?hub=180536'],
  ['March', '21 Mar', 'International Day for the Elimination of Racial Discrimination', 'https://www.unesco.org/days/racial-discrimination-elimination?hub=180536'],
  ['March', '21 Mar', 'World Day for Glaciers', 'https://www.unesco.org/days/world-glaciers?hub=180536'],
  ['March', '21 Mar', 'International Day of Nowruz', 'https://www.unesco.org/international-day-nowruz?hub=180536'],
  ['March', '21 Mar', 'World Poetry Day', 'https://www.unesco.org/days/poetry?hub=180536'],
  ['March', '22 Mar', 'World Water Day', 'https://www.unesco.org/days/world-water?hub=180536'],
  ['April', '05 Apr', 'International Day of Conscience', 'https://www.unesco.org/days/conscience-day?hub=180536'],
  ['April', '06 Apr', 'International Day of Sport for Development and Peace', 'https://www.unesco.org/days/sport-development-and-peace?hub=180536'],
  ['April', '07 Apr', 'International Day of Reflection on the 1994 Genocide against the Tutsi in Rwanda', 'https://www.unesco.org/days/tutsi-genocide?hub=180536'],
  ['April', '15 Apr', 'World Art Day', 'https://www.unesco.org/days/world-art?hub=180536'],
  ['April', '23 Apr', 'World Book and Copyright Day', 'https://www.unesco.org/days/world-book-and-copyright?hub=180536'],
  ['April', '25 Apr', 'International Day for Small Island Developing States', 'https://www.unesco.org/days/sids?hub=180536'],
  ['April', '30 Apr', 'International Jazz Day', 'https://www.unesco.org/international-jazz-day?hub=180536'],
  ['May', '03 May', 'World Press Freedom Day', 'https://www.unesco.org/days/press-freedom?hub=180536'],
  ['May', '05 May', 'World Portuguese Language Day', 'https://www.unesco.org/days/portuguese-language?hub=180536'],
  ['May', '05 May', 'African World Heritage Day', 'https://www.unesco.org/days/african-world-heritage?hub=180536'],
  ['May', '16 May', 'International Day of Living Together in Peace', 'https://www.unesco.org/days/living-together-peace?hub=180536'],
  ['May', '16 May', 'International Day of Light', 'https://www.unesco.org/days/light?hub=180536'],
  ['May', '20 May', 'World Metrology Day', 'https://www.unesco.org/days/metrology?hub=180536'],
  ['May', '21 May', 'World Day for Cultural Diversity for Dialogue and Development', 'https://www.unesco.org/days/cultural-diversity-dialogue-development?hub=180536'],
  ['May', '22 May', 'International Day for Biological Diversity', 'https://www.unesco.org/days/biological-diversity?hub=180536'],
  ['June', '05 Jun', 'World Environment Day', 'https://www.unesco.org/days/environment?hub=180536'],
  ['June', '08 Jun', 'World Oceans Day', 'https://www.unesco.org/days/oceans?hub=180536'],
  ['June', '17 Jun', 'World Day to Combat Desertification and Drought', 'https://www.unesco.org/days/desertification-drought-combat?hub=180536'],
  ['July', '07 Jul', 'Kiswahili Language Day', 'https://www.unesco.org/days/kiswahili-language?hub=180536'],
  ['July', '18 Jul', 'Nelson Mandela International Day', 'https://www.unesco.org/days/nelson-mandela?hub=180536'],
  ['July', '26 Jul', 'International Day for the Conservation of the Mangrove Ecosystem', 'https://www.unesco.org/days/mangrove-ecosystem-conservation?hub=180536'],
  ['August', '09 Aug', 'International Day of the World’s Indigenous Peoples', 'https://www.unesco.org/international-day-worlds-indigenous-peoples?hub=180536'],
  ['August', '12 Aug', 'International Youth Day', 'https://www.unesco.org/days/youth?hub=180536'],
  ['August', '21 Aug', 'International Day for Underwater Cultural Heritage', 'https://www.unesco.org/days/underwater-cultural-heritage?hub=180536'],
  ['August', '23 Aug', 'International Day for the Remembrance of the Slave Trade and its Abolition', 'https://www.unesco.org/days/slave-trade-remembrance?hub=180536'],
  ['September', '08 Sep', 'International Literacy Day', 'https://www.unesco.org/days/literacy?hub=180536'],
  ['September', '09 Sept', 'International Day to Protect Education from Attack', 'https://www.unesco.org/days/protect-education-attack?hub=180536'],
  ['September', '13 Sept', 'International Day for Caves and Karst', 'https://www.unesco.org/days/caves-and-karst?hub=180536'],
  ['September', '15 Sept', 'International Day of Democracy', 'https://www.unesco.org/days/democracy?hub=180536'],
  ['September', '20 Sept', 'International Day of University Sport', 'https://www.unesco.org/days/university-sport?hub=180536'],
  ['September', '21 Sept', 'International Day of Peace', 'https://www.unesco.org/days/peace?hub=180536'],
  ['September', '28 Sept', 'International Day for Universal Access to Information', 'https://www.unesco.org/days/universal-access-information?hub=180536'],
  ['October', '05 Oct', 'World Teachers’ Day', 'https://www.unesco.org/days/teachers?hub=180536'],
  ['October', '06 Oct', 'International Geodiversity Day', 'https://www.unesco.org/days/geodiversity?hub=180536'],
  ['October', '11 Oct', 'International Day of the Girl', 'https://www.unesco.org/days/girl-child?hub=180536'],
  ['October', '13 Oct', 'International Day for Disaster Risk Reduction', 'https://www.unesco.org/days/disaster-risk-reduction?hub=180536'],
  ['October', '17 Oct', 'International Day of the Intangible Cultural Heritage', 'https://www.unesco.org/days/intangible-heritage?hub=180536'],
  ['October', '17 Oct', 'International Day for the Eradication of Poverty', 'https://www.unesco.org/days/poverty-eradication?hub=180536'],
  ['October', '27 Oct', 'World Day for Audiovisual Heritage', 'https://www.unesco.org/days/audiovisual-heritage?hub=180536'],
  ['October', '29 Oct', 'World Coding Day', 'https://www.unesco.org/days/coding?hub=180536'],
  ['November', '02 Nov', 'International Day to End Impunity for Crimes against Journalists', 'https://www.unesco.org/days/end-impunity?hub=180536'],
  ['November', '03 Nov', 'International Day for Biosphere Reserves', 'https://www.unesco.org/days/biosphere-reserves?hub=180536'],
  ['November', '05 Nov', 'World Day of Romani Language', 'https://www.unesco.org/days/romani-language?hub=180536'],
  ['November', '05 Nov', 'World Tsunami Awareness Day', 'https://www.unesco.org/days/tsunami-awareness?hub=180536'],
  ['November', '06 Nov', 'International Day against Violence and Bullying at School, including Cyberbullying', 'https://www.unesco.org/days/against-school-violence-and-bullying?hub=180536'],
  ['November', '10 Nov', 'World Science Day for Peace and Development', 'https://www.unesco.org/days/science-peace-development?hub=180536'],
  ['November', '14 Nov', 'International Day against Illicit Trafficking in Cultural Property', 'https://www.unesco.org/days/against-illicit-trafficking?hub=180536'],
  ['November', '16 Nov', 'International Day for Tolerance', 'https://www.unesco.org/days/tolerance?hub=180536'],
  ['November', '18 Nov', 'International Day of Islamic Art', 'https://www.unesco.org/international-day-islamic-art?hub=180536'],
  ['November', '20 Nov', 'World Philosophy Day', 'https://www.unesco.org/days/philosophy?hub=180536'],
  ['November', '25 Nov', 'International Day for the Elimination of Violence against Women', 'https://www.unesco.org/days/elimination-violence-against-women?hub=180536'],
  ['November', '26 Nov', 'World Olive Tree Day', 'https://www.unesco.org/days/world-olive-tree?hub=180536'],
  ['November', '27 Nov', 'International Day of Engagement in Science for Sustainable Development', 'https://www.unesco.org/days/engagement-science-sustainable-development?hub=180536'],
  ['November', '29 Nov', 'International Day of Solidarity with the Palestinian People', 'https://www.unesco.org/days/international-day-solidarity-palestinian-people?hub=180536'],
  ['December', '01 Dec', 'World AIDS Day', 'https://www.unesco.org/days/world-aids?hub=180536'],
  ['December', '02 Dec', 'World Futures Day', 'https://www.unesco.org/days/world-futures?hub=180536'],
  ['December', '03 Dec', 'International Day of Persons with Disabilities', 'https://www.unesco.org/days/international-day-persons-disabilities?hub=180536'],
  ['December', '10 Dec', 'Human Rights Day', 'https://www.unesco.org/days/human-rights?hub=180536'],
  ['December', '18 Dec', 'International Migrants Day', 'https://www.unesco.org/days/international-migrants?hub=180536'],
  ['December', '18 Dec', 'World Arabic Language Day', 'https://www.unesco.org/world-arabic-language-day?hub=180536'],
];

const unescoObservances: UnescoObservance[] = unescoObservanceSeed.map(([month, date, title, url]) => ({
  month,
  date,
  title,
  url,
}));
const unescoMonths = Array.from(new Set(unescoObservances.map((item) => item.month)));

function slugifyObservance(title: string) {
  return title
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export type CalendarObservance = UnescoObservance & {
  slug: string;
};

export const calendarObservances: CalendarObservance[] = unescoObservances.map((item) => ({
  ...item,
  slug: slugifyObservance(item.title),
}));

export const calendarMonths = unescoMonths;

export function getCalendarObservance(slug: string) {
  return calendarObservances.find((item) => item.slug === slug);
}

export function getCalendarObservanceHref(title: string) {
  const normalizedTitle = title.toLowerCase().replace(/[’']/g, '');
  const item = calendarObservances.find((observance) => {
    const normalizedObservance = observance.title.toLowerCase().replace(/[’']/g, '');
    return normalizedObservance === normalizedTitle
      || normalizedObservance.includes(normalizedTitle)
      || normalizedTitle.includes(normalizedObservance);
  });
  return item ? `/international-days/${item.slug}` : '/international-days';
}

export type CalendarCategory =
  | 'Peace & dialogue'
  | 'Women & girls'
  | 'Youth & learning'
  | 'Culture & belonging'
  | 'Environment & future'
  | 'Media & information'
  | 'Rights & access';

export function getCalendarCategory(title: string): CalendarCategory {
  const lowerTitle = title.toLowerCase();
  if (/(women|girl|gender|multilateralism)/.test(lowerTitle)) return 'Women & girls';
  if (/(education|literacy|language|teacher|school|youth|university|coding|digital learning|mathematics|engineering|science)/.test(lowerTitle)) return 'Youth & learning';
  if (/(environment|ocean|water|glacier|mangrove|biodiversity|desertification|geodiversity|biosphere|olive tree|tsunami)/.test(lowerTitle)) return 'Environment & future';
  if (/(radio|press|journalist|information|audiovisual)/.test(lowerTitle)) return 'Media & information';
  if (/(peace|tolerance|democracy|human rights|discrimination|violence|slavery|slave|holocaust|genocide|solidarity|conscience|living together)/.test(lowerTitle)) return 'Peace & dialogue';
  if (/(disabilit|access|poverty|sport|metrology|future|migrants)/.test(lowerTitle)) return 'Rights & access';
  return 'Culture & belonging';
}

export function getCalendarGuidance(title: string, category: CalendarCategory) {
  const guidance: Record<CalendarCategory, { summary: string; prompt: string; nextStep: string }> = {
    'Peace & dialogue': {
      summary: 'Use this moment to make room for honest conversation, shared memory, and the everyday choices that help people live with dignity and peace.',
      prompt: `Bring people together around one question raised by ${title}, then make space for different experiences before choosing a shared next step.`,
      nextStep: 'Invite a listening circle',
    },
    'Women & girls': {
      summary: 'Use this moment to recognize women’s leadership, make barriers visible, and turn a public commitment into practical support.',
      prompt: `Ask women and girls closest to this theme what would make opportunity, safety, or leadership more real in your community.`,
      nextStep: 'Center lived experience',
    },
    'Youth & learning': {
      summary: 'Use this moment to connect learning with agency, imagination, and the skills people need to shape their own futures.',
      prompt: `Give young people a real role in shaping a small response to ${title} — with the brief, the microphone, or the first draft in their hands.`,
      nextStep: 'Put learners in the lead',
    },
    'Culture & belonging': {
      summary: 'Use this moment to honor the stories, language, memory, and creative practices that help communities recognize one another.',
      prompt: `Create a small public moment around the culture or memory held by people closest to ${title}, with room for exchange rather than performance alone.`,
      nextStep: 'Make belonging visible',
    },
    'Environment & future': {
      summary: 'Use this moment to connect the health of our shared environment with the choices, knowledge, and local leadership that protect the future.',
      prompt: `Pair a local observation with one useful action related to ${title}, and let community knowledge guide what happens next.`,
      nextStep: 'Turn attention into care',
    },
    'Media & information': {
      summary: 'Use this moment to widen access to trusted information, public voice, and the stories communities need to understand themselves.',
      prompt: `Work with local storytellers, educators, or media makers to open a conversation about the questions behind ${title}.`,
      nextStep: 'Share a trusted story',
    },
    'Rights & access': {
      summary: 'Use this moment to move beyond awareness toward access, accountability, and practical changes people can feel in daily life.',
      prompt: `Ask who is most affected by the issue behind ${title}, then remove one barrier with them rather than designing a response from a distance.`,
      nextStep: 'Remove one barrier',
    },
  };
  return guidance[category];
}

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

const SAVED_OBSERVANCES_STORAGE_KEY = 'b4p-international-days-planning-list';

function readSavedTitles() {
  if (typeof window === 'undefined') return [];

  try {
    const stored = window.localStorage.getItem(SAVED_OBSERVANCES_STORAGE_KEY);
    if (!stored) return [];

    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    const knownTitles = new Set([
      ...internationalDays.map((item) => item.title),
      ...calendarObservances.map((item) => item.title),
    ]);
    return [...new Set(parsed.filter((title): title is string => typeof title === 'string' && knownTitles.has(title)))];
  } catch {
    return [];
  }
}

export function useSavedObservances() {
  const [savedTitles, setSavedTitles] = useState<string[]>(readSavedTitles);

  useEffect(() => {
    try {
      window.localStorage.setItem(SAVED_OBSERVANCES_STORAGE_KEY, JSON.stringify(savedTitles));
    } catch {
      // Browser storage can be unavailable in private or restricted contexts.
    }
  }, [savedTitles]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === SAVED_OBSERVANCES_STORAGE_KEY) {
        setSavedTitles(readSavedTitles());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleSaved = (title: string) => {
    setSavedTitles((current) => current.includes(title)
      ? current.filter((savedTitle) => savedTitle !== title)
      : [...current, title]);
  };

  const clearSaved = () => setSavedTitles([]);

  return { savedTitles, toggleSaved, clearSaved };
}

type PlanningBriefMoment = Pick<InternationalDay, 'date' | 'title' | 'planningPrompt'> & {
  category: string;
};

function downloadPlanningBrief(savedDays: PlanningBriefMoment[]) {
  const selected = savedDays.length ? savedDays : internationalDays;
  trackEvent(analyticsEvents.planningBriefDownloaded, {
    saved_count: savedDays.length,
    brief_scope: savedDays.length ? 'saved_list' : 'full_calendar',
  });
  const content = [
    'B4P CODEFOUND · INTERNATIONAL DAYS PLANNING BRIEF',
    '',
    'Moments to turn into meaningful community programming:',
    '',
    ...selected.map((item) => `${item.date} — ${item.title}\nCategory: ${item.category}\nPlanning prompt: ${item.planningPrompt}`),
    '',
    'B4P CODEFOUND community programming calendar',
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
  const { savedTitles, toggleSaved, clearSaved } = useSavedObservances();
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

  const savedDays: PlanningBriefMoment[] = savedTitles.flatMap((title): PlanningBriefMoment[] => {
    const curatedDay = internationalDays.find((item) => item.title === title);
    if (curatedDay) return [curatedDay];

    const fullCalendarDay = calendarObservances.find((item) => item.title === title);
    if (!fullCalendarDay) return [];

    const category = getCalendarCategory(fullCalendarDay.title);
    return [{
      date: fullCalendarDay.date,
      title: fullCalendarDay.title,
      category,
      planningPrompt: getCalendarGuidance(fullCalendarDay.title, category).prompt,
    }];
  });

  function handleDirectoryToggle(item: InternationalDay, isSaved: boolean) {
    toggleSaved(item.title);
    trackEvent(isSaved ? analyticsEvents.planningObservanceRemoved : analyticsEvents.planningObservanceSaved, {
      observance_slug: slugifyObservance(item.title),
      source_surface: 'directory',
    });
  }

  function handleClearSaved() {
    trackEvent(analyticsEvents.planningListCleared, {
      saved_count: savedTitles.length,
    });
    clearSaved();
  }

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
                 A B4P guide to meaningful observances that can help African-led
                 peacebuilding, education, inclusion, and collective action find a
                 moment in the calendar — and a place in community.
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
                    <button type="button" className="international-days-planner__clear" onClick={handleClearSaved}>
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
                          <a href={getCalendarObservanceHref(item.title)}>
                            Explore this day <ArrowDownRight size={14} aria-hidden="true" />
                          </a>
                          <button type="button" className={isSaved ? 'is-saved' : ''} onClick={() => handleDirectoryToggle(item, isSaved)} aria-pressed={isSaved}>
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
              <p>Dates are presented as a planning reference. Always confirm timing and local context before publishing a public programme.</p>
              <a href="#official-list">Read the full list <ArrowDownRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="official-list" className="international-days-official">
          <div className="page-container">
            <div className="international-days-official__header">
              <div>
                <span className="international-days-section-kicker">The full calendar · built in</span>
                <h2>Every day has<br /><em>a next step.</em></h2>
              </div>
              <div className="international-days-official__intro">
                <p>
                  Every observance in the B4P calendar is gathered below by month,
                  with its date and a dedicated page for context, reflection, and
                  practical action. Use the curated cards above for ready-to-use
                  planning prompts, or scan the full directory when shaping your year.
                </p>
                <a href="/partner-with-us">
                  Build a moment with B4P <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="international-days-official__grid">
              {unescoMonths.map((month, index) => (
                <article className="international-days-month" key={month}>
                  <div className="international-days-month__heading">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{month}</h3>
                  </div>
                  <ul>
                    {calendarObservances.filter((item) => item.month === month).map((item) => (
                      <li key={`${item.date}-${item.title}`}>
                        <time>{item.date}</time>
                        <a href={`/international-days/${slugifyObservance(item.title)}`}>
                          {item.title}
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="international-days-official__note">
              <span>{calendarObservances.length} observances</span>
              <p>Dates are presented as a planning reference and may change. Confirm timing and local context before publishing a public programme.</p>
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