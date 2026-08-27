export type ProgramRegion = 'global' | 'usa' | 'liberia';

export type ProgramDefinition = {
  slug: string;
  title: string;
  description: string;
  region: ProgramRegion;
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
      { slug: 'global-youth-exchange-forum', title: 'Global Youth Exchange Forum (GYEF)', description: 'A platform for young people to learn, connect, and exchange ideas across communities.', region: 'global' },
      { slug: 'lddwyf-csw', title: 'LDDWYF/CSW', description: 'Global engagement and advocacy connected to women’s leadership and civic participation.', region: 'global' },
      { slug: 'leadership-development', title: 'Leadership Development', description: 'Growing the skills, confidence, and relationships that help people lead change.', region: 'global' },
      { slug: 'business-development-entrepreneurship', title: 'Business Development & Entrepreneurship', description: 'Supporting enterprise thinking, practical growth, and entrepreneurial opportunity.', region: 'global' },
      { slug: 'peacebuilding-governance', title: 'Peacebuilding & Governance', description: 'Strengthening dialogue, participation, accountability, and trust.', region: 'global' },
      { slug: 'research-policy-advocacy', title: 'Research & Policy Advocacy', description: 'Connecting evidence and lived experience to conversations that shape better policy.', region: 'global' },
      { slug: 'arts-culture', title: 'Arts & Culture', description: 'Using culture, creativity, and shared expression to build understanding.', region: 'global' },
      { slug: 'global-events', title: 'Events', description: 'Gathering people around ideas, learning, and collective action.', region: 'global' },
    ],
  },
  usa: {
    title: 'USA Programs',
    intro: 'Community-centered programs that help people navigate opportunity, build relationships, and lead.',
    programs: [
      { slug: 'community-navigation-dialogues', title: 'Community Navigation & Dialogues', description: 'Creating spaces for shared understanding, conversation, and practical connection.', region: 'usa' },
      { slug: 'networking-professional-development', title: 'Networking & Professional Development', description: 'Building relationships and skills that open doors for individuals and communities.', region: 'usa' },
      { slug: 'mentorship-leadership-development', title: 'Mentorship and Leadership development', description: 'Supporting people as they grow into confident, connected leaders.', region: 'usa' },
      { slug: 'usa-events', title: 'Events', description: 'Workshops, gatherings, and other opportunities to learn and connect.', region: 'usa' },
    ],
  },
  liberia: {
    title: 'Liberia Programs',
    intro: 'Locally rooted work supporting livelihoods, health education, youth, and civic participation.',
    programs: [
      { slug: 'business-development-services', title: 'Business Development Services (Agriculture, etc)', description: 'Practical support for agriculture, enterprise development, and sustainable livelihoods.', region: 'liberia' },
      { slug: 'health-education-sensitization', title: 'Health Education & Sensitization', description: 'Sharing accessible information and strengthening community awareness around health.', region: 'liberia' },
      { slug: 'youth-education', title: 'Youth & Education (Civic; Vocational & Skills Training, Financial & Digital Literacy)', description: 'Civic, vocational, skills training, financial literacy, and digital literacy opportunities for youth.', region: 'liberia' },
      { slug: 'events-conference', title: 'Events & Conference', description: 'Convening people around learning, dialogue, and community-led action.', region: 'liberia' },
    ],
  },
};

export function getProgram(region: ProgramRegion, slug: string) {
  return programRegions[region].programs.find((program) => program.slug === slug);
}