export function FieldStories() {
  const stories = [
    {
      img: '/images/story-bwydc.jpg',
      title: 'Building Young Women, Driving Change (BWYDC)',
      desc: 'Developing leadership skills and providing crucial mentorship for the next generation of female leaders.',
      tag: 'Leadership'
    },
    {
      img: '/images/story-cwc.jpg',
      title: 'Community Women’s Circle In Action (CWC)',
      desc: 'Creating safe spaces for critical dialogue, communal healing, empowerment, and collective decision-making.',
      tag: 'Empowerment'
    },
    {
      img: '/images/story-csw.jpg',
      title: 'Voice At The Commission On Status Of Women',
      desc: 'Ensuring African women’s stories, inclusion, and equality are championed at the global stage.',
      tag: 'Advocacy'
    },
    {
      img: '/images/story-conference.jpg',
      title: 'The Liberia Conference — A Movement',
      desc: 'Uniting delegates and youth leaders to chart a sustainable path for peacebuilding and national development.',
      tag: 'Peacebuilding'
    }
  ];

  return (
    <section className="py-24 bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Impact In Action</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">Field Stories</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Real change happens on the ground. Explore how our initiatives translate into tangible outcomes for individuals and communities across Liberia and beyond.
            </p>
          </div>
          <a href="#donate" className="shrink-0 bg-transparent border-2 border-primary text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-primary transition-colors text-center">
            Fund Our Field Work
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={story.img} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded">
                  {story.tag}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors line-clamp-2">{story.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">{story.desc}</p>
                <button className="text-sm font-bold text-secondary uppercase tracking-wider flex items-center gap-2 group-hover:translate-x-2 transition-transform self-start">
                  Read Story 
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
