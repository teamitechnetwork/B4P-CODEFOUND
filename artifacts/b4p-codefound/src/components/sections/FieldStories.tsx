import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stories = [
  {
    title: 'Building Young Women, Driving Change (BWYDC)',
    desc: 'Empowering the next generation with essential leadership skills and mentorship.',
    image: '/images/conference/day-1-community.jpg',
    tag: 'Youth Leadership'
  },
  {
    title: 'Community Women’s Circle In Action (CWC)',
    desc: 'Creating safe spaces for dialogue, community healing, empowerment and collective decision-making.',
    image: '/images/conference/day-2-community-02.jpg',
    tag: 'Community Action'
  },
  {
    title: 'Voice At The Commission On Status Of Women (CSW)',
    desc: 'Amplifying African women’s stories, advocating for inclusion and equality at the global stage.',
    image: '/images/conference/day-3-community-01.jpg',
    tag: 'Global Advocacy'
  },
  {
    title: 'The Liberia Conference — A Movement',
    desc: 'Delegates and youth leaders charting a unified path for peacebuilding and sustainable development.',
    image: '/images/conference/day-3-community-04.jpg',
    tag: 'Peacebuilding'
  }
];

export function FieldStories() {
  return (
    <section id="field-stories" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              Our Impact
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
              Stories from the Field
            </h2>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold tracking-wide">
            View All Impact
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <div 
              key={story.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9] shadow-lg"
            >
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="inline-block bg-secondary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4 w-max">
                  {story.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {story.title}
                </h3>
                <p className="text-white/80 font-medium leading-relaxed max-w-lg">
                  {story.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
