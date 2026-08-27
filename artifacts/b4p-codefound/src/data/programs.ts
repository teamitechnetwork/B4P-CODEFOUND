export type ProgramRegion = 'global' | 'usa' | 'liberia';

export type ProgramDefinition = {
  slug: string;
  title: string;
  description: string;
  region: ProgramRegion;
  image: string;
  imageAlt: string;
};

export const programRegions: Record<ProgramRegion, {
  title: string;
  intro: string;
  programs: ProgramDefinition[];
}> = {
  global: {
    title: 'Global Programs',
    intro: 'Building exchange, leadership, enterprise, governance, and cultural connection across borders.',
    programs: [
      { slug: 'global-youth-exchange-forum', title: 'Global Youth Exchange Forum (GYEF)', description: 'A platform for young people to learn, connect, and exchange ideas across communities.', region: 'global', image: '/images/conference/day-3-community-01.jpg', imageAlt: 'Young people and community leaders gathered through B4P CODEFOUND' },
      { slug: 'lddwyf-csw', title: 'LDDWYF/CSW', description: 'Global engagement and advocacy connected to women’s leadership and civic participation.', region: 'global', image: '/images/story-csw.jpg', imageAlt: 'B4P CODEFOUND women leaders participating in global advocacy' },
      { slug: 'leadership-development', title: 'Leadership Development', description: 'Growing the skills, confidence, and relationships that help people lead change.', region: 'global', image: '/images/conference/day-1-group-03.jpg', imageAlt: 'B4P CODEFOUND participants building leadership connections' },
      { slug: 'business-development-entrepreneurship', title: 'Business Development & Entrepreneurship', description: 'Supporting enterprise thinking, practical growth, and entrepreneurial opportunity.', region: 'global', image: '/images/story-bwydc.jpg', imageAlt: 'Women participating in a B4P CODEFOUND economic development initiative' },
      { slug: 'peacebuilding-governance', title: 'Peacebuilding & Governance', description: 'Strengthening dialogue, participation, accountability, and trust.', region: 'global', image: '/images/conference/day-1-community-gathering.jpg', imageAlt: 'Community members gathered for dialogue and collective action' },
      { slug: 'research-policy-advocacy', title: 'Research & Policy Advocacy', description: 'Connecting evidence and lived experience to conversations that shape better policy.', region: 'global', image: '/images/conference/day-1-audience-stage.jpg', imageAlt: 'An audience listening during a B4P CODEFOUND community conference' },
      { slug: 'arts-culture', title: 'Arts & Culture', description: 'Using culture, creativity, and shared expression to build understanding.', region: 'global', image: '/images/conference/day-2-community-03.jpg', imageAlt: 'Community members sharing culture at a B4P CODEFOUND gathering' },
      { slug: 'global-events', title: 'Events', description: 'Gathering people around ideas, learning, and collective action.', region: 'global', image: '/images/story-conference.jpg', imageAlt: 'Participants at a B4P CODEFOUND conference' },
    ],
  },
  usa: {
    title: 'USA Programs',
    intro: 'Community-centered programs that help people navigate opportunity, build relationships, and lead.',
    programs: [
      { slug: 'community-navigation-dialogues', title: 'Community Navigation & Dialogues', description: 'Creating spaces for shared understanding, conversation, and practical connection.', region: 'usa', image: '/images/cwc/community-photo.png', imageAlt: 'Women gathered through Columbus Women Connect' },
      { slug: 'networking-professional-development', title: 'Networking & Professional Development', description: 'Building relationships and skills that open doors for individuals and communities.', region: 'usa', image: '/images/conference/day-1-group-02.jpg', imageAlt: 'B4P CODEFOUND participants connecting at a community event' },
      { slug: 'mentorship-leadership-development', title: 'Mentorship and Leadership development', description: 'Supporting people as they grow into confident, connected leaders.', region: 'usa', image: '/images/conference/day-3-community-04.jpg', imageAlt: 'Women leaders participating in a B4P CODEFOUND program' },
      { slug: 'usa-events', title: 'Events', description: 'Workshops, gatherings, and other opportunities to learn and connect.', region: 'usa', image: '/images/conference/day-1-participants.jpg', imageAlt: 'Participants gathered at a B4P CODEFOUND event' },
    ],
  },
  liberia: {
    title: 'Liberia Programs',
    intro: 'Locally rooted work supporting livelihoods, health education, youth, and civic participation.',
    programs: [
      { slug: 'business-development-services', title: 'Business Development Services (Agriculture, etc)', description: 'Practical support for agriculture, enterprise development, and sustainable livelihoods.', region: 'liberia', image: '/images/story-bwydc.jpg', imageAlt: 'Women participating in an agriculture and livelihoods initiative in Liberia' },
      { slug: 'health-education-sensitization', title: 'Health Education & Sensitization', description: 'Sharing accessible information and strengthening community awareness around health.', region: 'liberia', image: '/images/conference/day-2-community-02.jpg', imageAlt: 'Community members learning together at a B4P CODEFOUND gathering' },
      { slug: 'youth-education', title: 'Youth & Education (Civic; Vocational & Skills Training, Financial & Digital Literacy)', description: 'Civic, vocational, skills training, financial literacy, and digital literacy opportunities for youth.', region: 'liberia', image: '/images/stories/day-three-0114.jpg', imageAlt: 'Young participants taking part in a B4P CODEFOUND learning session' },
      { slug: 'events-conference', title: 'Events & Conference', description: 'Convening people around learning, dialogue, and community-led action.', region: 'liberia', image: '/images/story-conference.jpg', imageAlt: 'A B4P CODEFOUND community conference in Liberia' },
    ],
  },
};

export function getProgram(region: ProgramRegion, slug: string) {
  return programRegions[region].programs.find((program) => program.slug === slug);
}