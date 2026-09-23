import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Download,
  MapPin,
} from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

type NewsSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string;
  quote?: {
    text: string;
    attribution: string;
  };
};

type NewsStory = {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  deck: string;
  intro: string[];
  sections: NewsSection[];
  source?: string;
  download?: {
    href: string;
    label: string;
  };
};

const story: NewsStory = {
  slug: 'cerue-liyean-mcgill-women-peace-security',
  title: 'Madam Cerue Liyean McGill Highlights Liberia’s Women, Peace and Security Agenda at High-Level Event in New York',
  date: 'September 21, 2026',
  location: 'New York, United States',
  category: 'Women, Peace & Security',
  image: '/images/news/cerue-liyean-mcgill-women-peace-security.webp',
  imageAlt:
    'Madam Cerue M. Liyean speaking at a high-level side event on Women, Peace and Security',
  imageCaption: 'Madam Cerue M. Liyean · Legacy speaker',
  deck:
    'At a high-level event in New York, Madam Cerue Liyean McGill highlighted Liberia’s Third National Action Plan on Women, Peace and Security and traced the women-led peacebuilding movement that helped carry Liberia from conflict toward peace.',
  intro: [
    'Among those highlighting Liberia’s continued work in this area is Madam Cerue Liyean McGill, a Liberian peacebuilding and women’s rights advocate whose work has been connected to community-based peacebuilding and women’s participation in peace and security processes.',
    'The high-level gathering, taking place at the United Nations Headquarters in New York, provides an opportunity to reflect on Liberia’s experience in advancing the Women, Peace and Security agenda and to discuss the country’s continuing commitments toward ensuring that women are meaningfully represented in peacebuilding, conflict prevention, decision-making and recovery processes.',
  ],
  sections: [
    {
      heading: 'Liberia’s Women, Peace and Security Journey',
      paragraphs: [
        'Liberia has been internationally recognized for the role women played in the country’s peacebuilding process and the subsequent development of national mechanisms supporting women’s participation in peace and security.',
        'The country has developed successive National Action Plans on Women, Peace and Security, guided by United Nations Security Council Resolution 1325 and subsequent resolutions addressing women, peace and security.',
        'Liberia is now advancing its Third National Action Plan on Women, Peace and Security (NAP III), covering the 2026–2031 period.',
        'The plan is intended to provide a national framework for strengthening women’s participation, protection and leadership in peace and security while supporting prevention, relief and recovery and stronger coordination and accountability.',
      ],
    },
    {
      heading: 'The Third National Action Plan',
      paragraphs: [
        'Liberia’s NAP III was developed through consultations involving government institutions, civil society organizations, women peacebuilders and development partners.',
        'The plan was nationally validated in July 2026, marking an important step toward its implementation and national ownership.',
        'The framework focuses on five broad areas:',
      ],
      bullets: [
        'Prevention of conflict and violence',
        'Protection of women and girls',
        'Participation of women in peace and security decision-making',
        'Relief and Recovery',
        'Coordination and Accountability',
      ],
      closing:
        'The plan is expected to provide a framework for coordinated action by government, civil society, development partners and other stakeholders over the 2026–2031 implementation period.',
    },
    {
      heading: 'From the Event: WIPNET’s Peacebuilding Legacy',
      paragraphs: [
        'In her remarks, Madam Cerue expressed profound appreciation to His Excellency Joseph Nyuma Boakai, Sr., President of the Republic of Liberia, for his continued leadership in sustaining Liberia’s hard-won peace and advancing national development.',
        'She also recognized Hon. Gbeme Horace-Kollie, Minister of Gender, Children and Social Protection, for her leadership in promoting women’s empowerment, gender equality and women’s meaningful participation in peace and security processes. She acknowledged the contributions of civil society organizations, development partners, faith-based and traditional leaders, youth and communities.',
        'Madam Cerue traced the roots of Liberia’s women-led peace movement to WIPNET, established in Liberia in 2002 under the West Africa Network for Peacebuilding (WANEP-Liberia) to strengthen women’s participation in conflict prevention, peacebuilding, dialogue and social cohesion.',
        'In 2003, WIPNET led the Liberian Women Mass Action for Peace, bringing together more than 45,000 women and girls from Christian and Muslim communities. United at the Fish Market in Monrovia and in other locations across Liberia, the women demanded an immediate end to the civil war.',
        'The movement used non-violent sit-ins, prayer, advocacy, public demonstrations and dialogue. Christian and Muslim women prayed together, showing how faith could become a bridge for peaceful coexistence rather than a source of division. The women’s call — “Enough is Enough” and “No Peace, No Sex” — became part of a powerful national demand for peace.',
        'Women from Bong and other counties travelled to Monrovia to understand and join the national movement. They returned home and mobilized women for disarmament-related activities in Totota, Bong County, where women worked with conflict-affected communities, ex-combatants and other stakeholders between 2004 and 2006.',
        'Madam Cerue also highlighted support from UN Women, which strengthened WIPNET’s ability to reach communities, promote peace and encourage citizens to participate in Liberia’s transition from war to peace. WIPNET’s Voices of Women Radio Program further extended peace messaging, public education and dialogue to communities across Liberia.',
        'She connected women’s calls for dialogue with Liberia’s Truth and Reconciliation Commission and with continuing transitional-justice initiatives, including work with communities and organizations around the country.',
      ],
    },
    {
      heading: 'Recommendations Shared in New York',
      paragraphs: [
        'The recommendations shared during the event emphasized the need to connect national commitments with the women and community-based structures that make peacebuilding possible:',
      ],
      bullets: [
        'Mobilize sustainable funding for the full implementation of NAP III.',
        'Strengthen grassroots women’s participation and leadership by resourcing Peace Hut women, women peacebuilders and community-based structures at national, county and community levels.',
        'Strengthen government ownership and coordination among government institutions, civil society organizations, grassroots women’s movements, women’s organizations and peacebuilding actors.',
      ],
    },
    {
      heading: 'Recognizing Women Peacebuilders',
      paragraphs: [
        'The participation and visibility of women such as Madam Cerue Liyean McGill reflects the broader contribution of Liberian women and civil society actors to peacebuilding at the community and national levels.',
        'Her involvement provides an opportunity to highlight the important role of women peacebuilders whose work contributes to strengthening community resilience, promoting dialogue and supporting women’s meaningful participation in peace and security processes.',
        'The Women, Peace and Security agenda is not limited to international discussions. Its implementation depends heavily on the work carried out within communities, where women and local organizations often contribute to conflict prevention, reconciliation, social cohesion and community development.',
      ],
    },
    {
      heading: 'Looking Ahead',
      paragraphs: [
        'As Liberia moves forward with the implementation of its Third National Action Plan, continued collaboration among government institutions, women-led organizations, civil society, development partners and communities will remain important.',
        'The high-level event in New York provides an international platform for Liberia to reflect on its peacebuilding journey while drawing attention to the continuing importance of women’s leadership in sustaining peace.',
        'For Liberia, the Women, Peace and Security agenda represents not only a commitment under the United Nations framework but also an opportunity to strengthen the voices, participation and leadership of women across the country.',
        'Madam Cerue Liyean McGill’s participation in this important moment contributes to the visibility of Liberian women working to advance peace, security and inclusive development.',
      ],
    },
  ],
};

const launchStory: NewsStory = {
  slug: 'b4p-codefound-launches-in-liberia',
  title: 'B4P CODEFOUND Launches Its Liberian Operations in Gbarnga, Bong County',
  date: 'June 8, 2023',
  location: 'Gbarnga, Bong County, Liberia',
  category: 'Press Release',
  image: '/images/news/b4p-codefound-liberia-launch.png',
  imageAlt: 'B4P CODEFOUND leaders and guests gather at the foundation launch in Liberia',
  imageCaption: 'B4P CODEFOUND Liberia launch · Gbarnga, Bong County',
  deck:
    'B4P CODEFOUND officially launched its Liberian operations on June 2, 2023, opening a new chapter of locally rooted work with women, girls, and youth in Liberia and the diaspora.',
  intro: [
    'Registered in both the United States and Liberia, the nonprofit was established to empower women, girls, and youth groups through peacebuilding, education, economic opportunity, and community development.',
  ],
  sections: [
    {
      heading: 'A new chapter in Liberia',
      paragraphs: [
        'The Liberia launch marked an important step in bringing B4P CODEFOUND’s mission into closer relationship with the communities it serves. From Bong County, the foundation is building partnerships that connect local leadership with practical tools for peace and development.',
        'The organization grew out of founder and Executive Director Lindora Howard-Diawara’s graduate studies at the Kroc Institute for International Peace Studies at the University of Notre Dame. That foundation continues to shape B4P CODEFOUND’s commitment to women, girls, and youth as leaders in their communities.',
      ],
    },
    {
      heading: 'Community leaders gathered in Gbarnga',
      paragraphs: [
        'Vice President Jewel Howard Taylor served as chief launcher. Other dignitaries included Bong County Superintendent Esther Walker, Liberia Bank for Development and Investment Manager Abraham Flomo, and representatives from civil society, faith-based organizations, and the media.',
        'The gathering reflected the shared responsibility behind community development: public leaders, local institutions, civil society, and residents working together to create more opportunity and lasting peace.',
      ],
      quote: {
        text: 'This is a very important organization that will do great things for women, girls, and youth in Liberia. I encourage all of you to take advantage of the opportunities that B4P CODEFOUND provides.',
        attribution: 'Vice President Jewel Howard Taylor',
      },
    },
    {
      heading: 'Empowerment through opportunity',
      paragraphs: [
        'At the launch, Vice President Taylor praised the foundation’s work to empower women and girls, emphasizing economic empowerment as a practical pathway for women and girls to achieve their full potential.',
        'Founder and Executive Director Lindora Howard-Diawara shared her excitement about the work ahead and reaffirmed the foundation’s commitment to building peace and development with women, girls, and youth in Liberia and the diaspora.',
      ],
      quote: {
        text: 'We have a lot of work to do, but I am confident that we can make a real difference in the lives of women, girls, and youth in Liberia and the diaspora.',
        attribution: 'Lindora Howard-Diawara, Founder and Executive Director',
      },
    },
    {
      heading: 'Programs designed for lasting impact',
      paragraphs: [
        'B4P CODEFOUND announced a set of programs and initiatives designed to respond to the everyday realities and aspirations of communities in Liberia:',
      ],
      bullets: [
        'A women’s empowerment program providing training and support to women entrepreneurs.',
        'A girls’ education program offering scholarships and other support to girls who want to attend school.',
        'A youth leadership program preparing young people to become leaders in their communities.',
      ],
      closing:
        'Together, these programs create a pathway from learning and leadership to stronger livelihoods and more resilient communities.',
    },
    {
      heading: 'Building what communities can carry forward',
      paragraphs: [
        'The foundation also shared plans for longer-term development projects, including a microfinance institution providing loans to women and girls, a community center where women, girls, and youth can learn and connect, and a farm creating food and income opportunities.',
        'B4P CODEFOUND entered Liberia with an experienced team and a clear belief that sustainable change is built with communities, not simply delivered to them. The Gbarnga launch was the beginning of that work in public: a commitment to listen, partner, and keep building.',
      ],
    },
  ],
  source: 'Africa-Press – Liberia',
};

const empowermentStory: NewsStory = {
  slug: 'b4p-codefound-women-empowerment-liberia-united-states',
  title: 'B4P CODEFOUND Wants Women Empowerment—Both in Liberia and the United States',
  date: 'September 5, 2022',
  location: 'Virtual · ULAA Northern Region',
  category: 'News coverage',
  image: '/images/news/b4p-women-empowerment-town-hall.png',
  imageAlt: 'Lindora Howard-Diawara speaking at a B4P CODEFOUND women empowerment event',
  imageCaption: 'Lindora Howard-Diawara · Women’s empowerment town hall',
  deck:
    'At a virtual community town hall organized by ULAA’s Northern Region, B4P CODEFOUND founder Lindora Howard-Diawara connected international women’s rights frameworks to the everyday work of empowerment in Liberia and the United States.',
  intro: [
    'Speaking on an international platform in the United States, Lindora Kolu Howard-Diawara described women’s empowerment as both a matter of rights and a practical foundation for healthier families, stronger communities, and more inclusive societies.',
    'The conversation brought together Liberians involved in community initiatives across the United States and created space to reflect on how policy, advocacy, learning, and collective action can open more opportunities for women and girls.',
  ],
  sections: [
    {
      heading: 'A conversation across borders',
      paragraphs: [
        'The virtual community town hall was organized under the auspices of the Northern Region of the Union of Liberian Associations in the Americas (ULAA), led by Regional Vice President Alpha Tongor.',
        'Howard-Diawara pointed to stronger gender-justice and women’s-empowerment policies at national and international levels, while emphasizing that frameworks matter most when they are translated into opportunities and support that women can use.',
      ],
    },
    {
      heading: 'International frameworks, local action',
      paragraphs: [
        'The presentation highlighted the Beijing Platform for Action, the Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW), the Women, Peace and Security agenda, the Sustainable Development Goals, and the creation of UN Women.',
        'Together, these instruments provide a shared language for protecting women’s rights and advancing women’s social, economic, cultural, and political participation around the world.',
      ],
    },
    {
      heading: 'Empowerment as whole-person agency',
      paragraphs: [
        'Howard-Diawara described empowerment as a process that touches a woman’s physical, emotional, spiritual, cultural, economic, and political life. When women have room to understand themselves, make decisions, and shape their futures, they are better positioned to care for themselves while continuing to care for others.',
        'She also named patriarchy, discrimination, marginalization, and dehumanization as barriers that can damage women’s confidence and limit their ability to participate fully in society.',
      ],
    },
    {
      heading: 'B4P CODEFOUND’s objectives',
      paragraphs: [
        'The foundation’s work is organized around three connected objectives:',
      ],
      bullets: [
        'Build the confidence of women and girls to act as agents of change at local, national, and international levels.',
        'Invest resources in women, girls, and communities to strengthen self-reliance and development.',
        'Connect individuals and groups to foster learning and encourage collective action with wider community and societal impact.',
      ],
    },
    {
      heading: 'A shared responsibility',
      paragraphs: [
        'Howard-Diawara called on ULAA to keep innovating in its support for Liberians around the world, including by making information and documentary materials more accessible and developing programs that support women and youth.',
        'The town hall also honored community builders and peace activists whose lives reflected the continuing work of women’s empowerment, justice, and peacebuilding across Liberia and the diaspora.',
      ],
    },
  ],
  source: 'The Analyst News · September 5, 2022',
};

const forumStory: NewsStory = {
  slug: 'lddwyf-csw66-women-climate-change-liberia',
  title: 'WONGOSOL and B4P CODEFOUND Host Second Liberia-Diaspora Women and Youth Forum',
  date: 'March 2022',
  location: 'Monrovia, Liberia · Virtual CSW66 side event',
  category: 'Event report',
  image: '/images/news/lddwyf-csw66-forum.png',
  imageAlt: 'Women and youth gathered for the Liberia-Diaspora Women and Youth Forum',
  imageCaption: 'Liberia-Diaspora Women and Youth Forum · CSW66',
  deck:
    'WONGOSOL and B4P CODEFOUND convened the second Liberia-Diaspora Women and Youth Forum around the theme “From Global to Local: Women, Climate Change and the Environment; the case of Liberia and the diaspora.”',
  intro: [
    'The forum created a space for Liberian women and youth, alongside participants from other nationalities and immigrant communities, to learn together and strengthen their advocacy and leadership potential.',
    'It was held virtually in commemoration of the sixty-sixth session of the Commission on the Status of Women (CSW66), during a period when the COVID-19 pandemic continued to reshape how communities gathered and organized.',
  ],
  sections: [
    {
      heading: 'From global commitments to local dialogue',
      paragraphs: [
        'The overall goal of the Liberia-Diaspora Women and Youth Forum was to foster dialogue and amplify the voices of Liberian women and youth wherever they live and work.',
        'The forum treated learning as a form of movement building: participants could connect international conversations to the realities of their communities and identify ways to keep leading, organizing, and advocating after the event.',
      ],
    },
    {
      heading: 'A civil society forum connected to CSW66',
      paragraphs: [
        'The Liberia-Diaspora Women and Youth Forum was approved as an international parallel event hosted by the NGO CSW Forum, creating a larger platform for civil society actors to dialogue and influence decision-making at the level of the United Nations and its member states.',
        'The partnership between the Women NGO Secretariat of Liberia (WONGOSOL) and B4P CODEFOUND placed local experience and diaspora participation at the center of that international conversation.',
      ],
    },
    {
      heading: 'Women’s leadership in the room',
      paragraphs: [
        'Panelists included Loretta Pope-Kai, Naomi Tulay Solanke, Miatta Darwolor Thomas, Siatta Scott Johnson, and Musu Barto. UN Women Liberia Acting Head of Programs Ghorma Karloweah also shared special remarks.',
        'The gathering recognized the courage, resilience, leadership, and collective progress of women’s organizations working toward a more gender-equal world and pledged to keep challenging bias against women.',
      ],
    },
    {
      heading: 'Climate change and women’s livelihoods',
      paragraphs: [
        'Speakers connected climate change and environmental degradation to the everyday wellbeing of women and girls in Liberia. Rising sea levels, shifting rainfall patterns, coastal erosion, and water stress affect livelihoods that many women rely on, including agriculture and fishing.',
        'The discussion also underscored the need for sex-disaggregated data so that climate responses can reflect the different risks and needs experienced by women and men.',
      ],
      quote: {
        text: 'Open dialogues with community leaders and members of coastal communities can raise awareness of the risks and help stakeholders understand the different needs and concerns around adaptation.',
        attribution: 'Ghorma Karloweah, UN Women Liberia',
      },
    },
    {
      heading: 'Toward feminist peace',
      paragraphs: [
        'Aisha Lai of Kvinna Kvinna described the urgency of addressing climate change and environmental degradation as part of the work of feminist peace. That means connecting environmental concerns with gender-based violence, economic equality, peacebuilding, and equal participation.',
        'The forum’s central invitation was to look at these issues together: human activity affects the environment, the environment affects people’s lives, and fairer solutions require women’s leadership at every stage.',
      ],
    },
  ],
  source: 'Africa-Press – Liberia',
};

const conferenceStory: NewsStory = {
  slug: 'conference-2025-sustaining-women-youth-empowerment',
  title: '2nd National Conference: Sustaining Women and Youth Empowerment Through Agriculture, Health, and Educational Investments',
  date: 'December 11–13, 2025',
  location: 'Gbarnga, Liberia',
  category: 'Conference document',
  image: '/images/story-conference.jpg',
  imageAlt: 'Community participants gathered at a B4P CODEFOUND conference in Liberia',
  imageCaption: '2nd National Conference · Gbarnga, Liberia',
  deck:
    'Read the concept note for B4P CODEFOUND and BWYDC’s 2025 conference focused on agriculture, health, education, and the next stage of women and youth empowerment in Liberia.',
  intro: [
    'The concept note presents a three-day conference designed to sustain women and youth empowerment through practical investments in agriculture, health, and education.',
    'It builds on the success of the 2023 conference, which sparked regional cooperation and helped lay the groundwork for the Liberian Women and Youth Cooperation for Peace and Development.',
  ],
  sections: [
    {
      heading: 'Why this conference',
      paragraphs: [
        'Guided by UN Security Council Resolutions 1325 and 2250, the Sustainable Development Goals, the UN Secretary-General’s Peacebuilding Fund Strategy, Liberia’s Peacebuilding and Reconciliation Agenda, and the Agenda for Inclusive Development, the conference connects local action to wider commitments.',
        'Organized by B4P CODEFOUND and the Bong County Women and Youth Development Cooperation (BWYDC), it is designed to strengthen the systems, partnerships, and resources that women and youth need to lead development in rural Liberia.',
      ],
    },
    {
      heading: 'Conference objectives',
      paragraphs: [
        'The concept note identifies four central objectives:',
      ],
      bullets: [
        'Evaluate BWYDC’s operations, progress, successes, barriers, and lessons for the future.',
        'Identify a second county for the movement and elect a new steering team with a two-year mandate.',
        'Map needs and opportunities for cross-sector resource mobilization and identify strategic partners.',
        'Design strategies for movement building and collective action.',
      ],
    },
    {
      heading: 'Proposed activities',
      paragraphs: [
        'The program moves from preparation to reflection, learning, and planning:',
      ],
      bullets: [
        'Pre-conference media engagement on December 10.',
        'Day One: introductions, reporting, panel presentations, and conversation with traditional leaders.',
        'Day Two: recap, thematic planning workshops, and preparation for leadership elections and cultural night.',
        'Day Three: election of new steering committee members, action-plan presentation, fundraising, and closing.',
        'Post-conference media engagement on December 17.',
      ],
    },
    {
      heading: 'Expected outcomes and deliverables',
      paragraphs: [
        'The conference is expected to support a more coordinated cooperative for women and youth, stronger relationships with stakeholders, improved resource mobilization, and clearer planning across agriculture, health, education, peace, and security.',
        'A central deliverable is a multi-county plan to guide the expansion and implementation of at least two cooperation activities for sustainable and accountable results between 2025 and 2027.',
      ],
    },
  ],
  source: 'B4P CODEFOUND · Conference Concept Note · July 14, 2025',
  download: {
    href: '/documents/conference-2025-concept-note.pdf',
    label: 'Download the concept note',
  },
};

const newsStories = [story, launchStory, empowermentStory, forumStory, conferenceStory];

const projectPage = {
  title: 'Bong County Women and Youth Development Cooperation',
  href: '/programs/liberia/bong-county-women-youth-development-cooperation',
  image: '/images/projects/bwydc-community-team.png',
  imageAlt: 'Women and community partners working together through BWYDC in Liberia',
  description:
    'A locally rooted cooperation platform connecting women and youth empowerment, agriculture, health, education, and shared development across Bong County.',
};

type ExternalReference = {
  title: string;
  description: string;
  href: string;
};

type ExternalReferenceGroup = {
  title: string;
  description: string;
  badge: string;
  references: ExternalReference[];
};

const externalReferenceGroups: ExternalReferenceGroup[] = [
  {
    title: 'Press / media',
    description: 'Independent coverage of B4P CODEFOUND’s launch, women’s empowerment work, and Liberia-Diaspora programming.',
    badge: 'Press / media',
    references: [
      {
        title: 'B4P CODEFOUND launches in Liberia',
        description: 'Africa-Press coverage of the foundation’s Liberian launch.',
        href: 'https://www.africa-press.net/liberia/all-news/liberia-business-for-peace-community-development-foundation-launches-in-liberia',
      },
      {
        title: 'B4P CODEFOUND wants women empowerment',
        description: 'The Analyst coverage of women’s empowerment in Liberia and the United States.',
        href: 'https://analystliberiaonline.com/amp/b4p-codefound-wants-women-empowerment-both-in-liberia-and-the-united-states/',
      },
      {
        title: 'Women NGO Secretariat hosts 2nd CSW side event',
        description: 'Africa-Press coverage of the Liberia-Diaspora Women and Youth Forum.',
        href: 'https://www.africa-press.net/liberia/all-news/women-ngo-secretariat-hosts-2nd-csw-side-event',
      },
    ],
  },
  {
    title: 'Independent organizations / public records',
    description: 'Public records and partner pages that document grants, civil-society participation, and community impact.',
    badge: 'Public record',
    references: [
      {
        title: '2019 Global Seed Fund grantees',
        description: 'Lisle International’s public grant recipient page.',
        href: 'https://lisleinternational.org/global-seed-grants/global-seed-fund-grantees/2019-grants/',
      },
      {
        title: '2019 Global Seed Fund report',
        description: 'Lisle International’s 2019 grants publication in PDF form.',
        href: 'https://lisleinternational.org/wp-content/uploads/2019/05/2019interactionFINALweb.pdf',
      },
      {
        title: 'NGO CSW66 parallel events list',
        description: 'The public list of civil-society parallel events connected to CSW66.',
        href: 'https://www.ngocsw.org/wp-content/uploads/2022/05/Final-NGO-CSW66-Parallel-Events-List-Sheet2.pdf',
      },
      {
        title: 'Women’s peacebuilding discussion',
        description: 'A public mailing-list record connected to women’s peace and development work.',
        href: 'https://lists.pacificdisability.org/pipermail/pdf-women_lists.pacificdisability.org/2020-February/000560.html',
      },
    ],
  },
  {
    title: 'Public fundraising / project pages',
    description: 'Public pages where supporters can learn about or support women’s peace and development work.',
    badge: 'Fundraising / project',
    references: [
      {
        title: 'Empowering women and girls beyond borders',
        description: 'The public GoFundMe campaign page.',
        href: 'https://www.gofundme.com/f/empowering-women-and-girls-beyond-borders',
      },
      {
        title: 'Liberian Women Peace and Development Bridge',
        description: 'The GlobalGiving project page for the Liberia-focused initiative.',
        href: 'https://www.globalgiving.org/projects/liberian-women-peace-and-development-bridge/',
      },
    ],
  },
  {
    title: 'Social media',
    description: 'Public profiles for following B4P CODEFOUND and its founder across professional and social platforms.',
    badge: 'Social channel',
    references: [
      {
        title: 'Lindora Diawara on LinkedIn',
        description: 'The founder’s public LinkedIn profile.',
        href: 'https://www.linkedin.com/in/lindora-diawara',
      },
      {
        title: 'B4P CODEFOUND on LinkedIn',
        description: 'The organization’s public LinkedIn page.',
        href: 'https://www.linkedin.com/company/b4p-codefound/',
      },
      {
        title: 'B4P CODEFOUND on X',
        description: 'The organization’s public X profile.',
        href: 'https://x.com/B4PCODEFOUND',
      },
      {
        title: 'B4P CODEFOUND on Bluesky',
        description: 'The organization’s public Bluesky profile.',
        href: 'https://bsky.app/profile/b4p-codefound.bsky.social',
      },
    ],
  },
  {
    title: 'Additional official / public records',
    description: 'Independent public records that help visitors verify the organization and understand its wider network.',
    badge: 'Public record',
    references: [
      {
        title: 'B4P CODEFOUND nonprofit record',
        description: 'The organization’s ProPublica Nonprofit Explorer record.',
        href: 'https://projects.propublica.org/nonprofits/organizations/813170921',
      },
      {
        title: 'Somweil',
        description: 'A public organization and partner reference.',
        href: 'https://www.somweil.org/',
      },
    ],
  },
];

function StoryMeta({ article = story }: { article?: NewsStory }) {
  return (
    <div className="news-story-meta" aria-label="Story details">
      <span>
        <CalendarDays size={16} aria-hidden="true" />
        {article.date}
      </span>
      <span>
        <MapPin size={16} aria-hidden="true" />
        {article.location}
      </span>
    </div>
  );
}

function NewsArchiveCard({ article, index }: { article: NewsStory; index: number }) {
  return (
    <article className="news-archive-card">
      <div className="news-archive-card__image">
        <img src={article.image} alt={article.imageAlt} />
        <div className="news-card-badges">
          <span className="news-pasted-badge">Pasted source</span>
          <span>{String(index).padStart(2, '0')} · {article.category}</span>
        </div>
      </div>
      <div className="news-archive-card__body">
        <div className="news-feature-card__category">{article.category}</div>
        <h3>{article.title}</h3>
        <StoryMeta article={article} />
        <p>{article.deck}</p>
        <div className="news-archive-card__actions">
          <a className="news-read-more" href={`/news-blogs/${article.slug}`}>
            Read more
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          {article.download && (
            <a
              className="news-download-link"
              href={article.download.href}
              download
            >
              <Download size={15} aria-hidden="true" />
              {article.download.label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ExternalReferenceCard({
  reference,
  badge,
}: {
  reference: ExternalReference;
  badge: string;
}) {
  return (
    <a
      className="news-reference-card"
      href={reference.href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="news-reference-card__badge">Pasted source</span>
      <span className="news-reference-card__type">{badge}</span>
      <h4>{reference.title}</h4>
      <p>{reference.description}</p>
      <span className="news-reference-card__link">
        Open external source
        <ArrowUpRight size={16} aria-hidden="true" />
      </span>
    </a>
  );
}

export default function NewsPage() {
  return (
    <div className="news-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="news-hero">
          <div className="page-container news-hero__inner">
            <div className="news-hero__copy">
              <span className="news-kicker">News &amp; updates</span>
              <h1>
                Stories from the work.
                <em>Momentum for what’s next.</em>
              </h1>
              <p>
                Read the people, partnerships, and public moments shaping
                peacebuilding and inclusive development across Liberia and beyond.
              </p>
            </div>
            <div className="news-hero__mark" aria-hidden="true">
              <span>01</span>
              <strong>Field<br />notes</strong>
              <i />
            </div>
          </div>
        </section>

        <section className="news-feature-section" aria-labelledby="featured-story-title">
          <div className="page-container">
            <div className="news-section-heading">
              <div>
                <span className="news-section-kicker">Featured story</span>
                <h2>Women’s leadership<br /><em>in the room.</em></h2>
              </div>
              <p>
                A closer look at Liberia’s continuing commitment to the Women,
                Peace and Security agenda, and the women helping carry it forward.
              </p>
            </div>

            <article className="news-feature-card">
              <div className="news-feature-card__image">
                <img src={story.image} alt={story.imageAlt} />
                <div className="news-card-badges">
                  <span className="news-pasted-badge">Pasted source</span>
                  <span>01 · News &amp; updates</span>
                </div>
              </div>
              <div className="news-feature-card__body">
                <div className="news-feature-card__category">{story.category}</div>
                <h2 id="featured-story-title">{story.title}</h2>
                 <StoryMeta article={story} />
                <p>{story.deck}</p>
                <a className="news-read-more" href={`/news-blogs/${story.slug}`}>
                  Read more
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="news-archive-section" aria-labelledby="press-releases-title">
          <div className="page-container">
            <div className="news-section-heading news-section-heading--archive">
              <div>
                <span className="news-section-kicker">Press releases</span>
                <h2 id="press-releases-title">
                  The moments
                  <em>that started the work.</em>
                </h2>
              </div>
              <p>
                Read the announcement that introduced B4P CODEFOUND’s Liberian
                operations and the community-centered vision behind them.
              </p>
            </div>

            <article className="news-release-card">
              <div className="news-release-card__image">
                <img src={launchStory.image} alt={launchStory.imageAlt} />
                <div className="news-card-badges">
                  <span className="news-pasted-badge">Pasted source</span>
                  <span>02 · Press release</span>
                </div>
              </div>
              <div className="news-release-card__body">
                <div className="news-feature-card__category">{launchStory.category}</div>
                <h3>{launchStory.title}</h3>
                <StoryMeta article={launchStory} />
                <p>{launchStory.deck}</p>
                <a className="news-read-more" href={`/news-blogs/${launchStory.slug}`}>
                  Read more
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="news-archive-section news-archive-section--coverage" aria-labelledby="news-coverage-title">
          <div className="page-container">
            <div className="news-section-heading news-section-heading--archive">
              <div>
                <span className="news-section-kicker">News coverage</span>
                <h2 id="news-coverage-title">
                  Ideas that travel
                  <em>across borders.</em>
                </h2>
              </div>
              <p>
                Coverage of the conversations and partnerships carrying B4P
                CODEFOUND’s work into wider public spaces.
              </p>
            </div>
            <div className="news-archive-grid">
              <NewsArchiveCard article={empowermentStory} index={3} />
            </div>
          </div>
        </section>

        <section className="news-archive-section" aria-labelledby="event-reports-title">
          <div className="page-container">
            <div className="news-section-heading news-section-heading--archive">
              <div>
                <span className="news-section-kicker">Event reports</span>
                <h2 id="event-reports-title">
                  Gatherings become
                  <em>shared direction.</em>
                </h2>
              </div>
              <p>
                Revisit the forums and conversations where women, youth, and
                partners turned global commitments into local dialogue.
              </p>
            </div>
            <div className="news-archive-grid">
              <NewsArchiveCard article={forumStory} index={4} />
            </div>
          </div>
        </section>

        <section className="news-archive-section" aria-labelledby="publications-title">
          <div className="page-container">
            <div className="news-section-heading news-section-heading--archive">
              <div>
                <span className="news-section-kicker">Organizational publications</span>
                <h2 id="publications-title">
                  Plans made
                  <em>ready to share.</em>
                </h2>
              </div>
              <p>
                Public documents that make the organization’s plans, priorities,
                and conference work easier to explore.
              </p>
            </div>
            <div className="news-archive-grid">
              <NewsArchiveCard article={conferenceStory} index={5} />
            </div>
          </div>
        </section>

        <section className="news-project-section" aria-labelledby="project-pages-title">
          <div className="page-container news-project-section__inner">
            <div className="news-project-section__image">
              <img src={projectPage.image} alt={projectPage.imageAlt} />
              <div className="news-card-badges">
                <span className="news-pasted-badge">Pasted source</span>
                <span>Project page</span>
              </div>
            </div>
            <div className="news-project-section__body">
              <span className="news-section-kicker">Project pages</span>
              <h2 id="project-pages-title">Start with the people closest to the work.</h2>
              <p>{projectPage.description}</p>
              <a className="news-read-more" href={projectPage.href}>
                Explore the project
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="news-reference-section" aria-labelledby="reference-title">
          <div className="page-container">
            <div className="news-section-heading news-section-heading--reference">
              <div>
                <span className="news-section-kicker">Source shelf</span>
                <h2 id="reference-title">
                  The wider record,
                  <em>clearly labeled.</em>
                </h2>
              </div>
              <p>
                These are pasted public references from media, partners, official
                publications, fundraising platforms, and social channels. Each
                badge tells visitors what kind of source they are opening.
              </p>
            </div>
            <div className="news-reference-groups">
              {externalReferenceGroups.map((group) => (
                <section className="news-reference-group" key={group.title}>
                  <div className="news-reference-group__heading">
                    <div>
                      <span className="news-reference-group__badge">{group.badge}</span>
                      <h3>{group.title}</h3>
                    </div>
                    <p>{group.description}</p>
                  </div>
                  <div className="news-reference-grid">
                    {group.references.map((reference) => (
                      <ExternalReferenceCard
                        key={reference.href}
                        reference={reference}
                        badge={group.badge}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="news-note-section">
          <div className="page-container news-note-section__inner">
            <span className="news-section-kicker">Stay close to the work</span>
            <p>
              B4P CODEFOUND shares stories that connect international commitments
              to the community-led work that makes them real.
            </p>
            <a href="/events">
              Explore events &amp; gatherings <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function NewsArticlePage({ slug = story.slug }: { slug?: string }) {
  const article = newsStories.find((item) => item.slug === slug) ?? launchStory;

  return (
    <div className="news-article-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="news-article-hero">
          <div className="page-container news-article-hero__inner">
            <div className="news-article-hero__copy">
              <a className="news-back-link" href="/news-blogs">
                <ArrowLeft size={16} aria-hidden="true" />
                Back to news
              </a>
                <div className="news-article-hero__badges">
                  <span className="news-pasted-badge">Pasted source</span>
                  <span className="news-kicker">{article.category}</span>
                </div>
               <h1>{article.title}</h1>
               <StoryMeta article={article} />
            </div>
            <figure className="news-article-hero__image">
               <img src={article.image} alt={article.imageAlt} />
               <figcaption>{article.imageCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="news-article-content">
          <div className="page-container news-article-content__layout">
            <article className="news-article">
               <p className="news-article__standfirst">{article.deck}</p>
               {article.download && (
                 <a
                   className="news-read-more news-article-download"
                   href={article.download.href}
                   download
                 >
                   <Download size={16} aria-hidden="true" />
                   {article.download.label}
                 </a>
               )}
               {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
               {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                   {section.quote && (
                     <blockquote>
                       <p>“{section.quote.text}”</p>
                       <cite>— {section.quote.attribution}</cite>
                     </blockquote>
                   )}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                  {section.closing && <p>{section.closing}</p>}
                </section>
              ))}
               {article.source && <p className="news-article__source">Source: {article.source}</p>}
            </article>

            <aside className="news-article-aside">
              <span className="news-section-kicker">The story in focus</span>
               <strong>
                 {article.category === 'Press Release'
                   ? <>A launch<br />with purpose.</>
                   : article.category === 'Event report'
                     ? <>Dialogue<br />in motion.</>
                     : article.category === 'Conference document'
                       ? <>A plan<br />to build.</>
                       : article.category === 'News coverage'
                         ? <>Women’s voices<br />across borders.</>
                         : <>Women, Peace<br />&amp; Security</>}
               </strong>
              <p>
                 {article.category === 'Press Release'
                   ? 'B4P CODEFOUND’s first Liberian launch brought its commitment to women, girls, youth, and community-led development into the open.'
                   : article.category === 'Event report'
                     ? 'The Liberia-Diaspora Women and Youth Forum connected climate, gender, peacebuilding, and community leadership through a CSW66 side event.'
                     : article.category === 'Conference document'
                       ? 'The 2025 concept note turns the experience of BWYDC and the 2023 conference into a practical plan for shared learning and movement building.'
                       : article.category === 'News coverage'
                         ? 'A cross-border conversation connected women’s rights frameworks to the practical work of empowerment in Liberia and the United States.'
                         : 'Liberia’s NAP III creates a national framework for women’s participation, protection, leadership, prevention, relief and recovery.'}
              </p>
              <a className="news-read-more news-read-more--dark" href="/news-blogs">
                Back to news
                <ArrowLeft size={16} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}