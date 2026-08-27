import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { Founder } from '@/components/sections/Founder';
import { TheoryOfChange } from '@/components/sections/TheoryOfChange';
import { Programs } from '@/components/sections/Programs';
import { FieldStories } from '@/components/sections/FieldStories';
import { Timeline } from '@/components/sections/Timeline';
import { News } from '@/components/sections/News';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Founder />
        <TheoryOfChange />
        <Programs />
        <FieldStories />
        <Timeline />
        <News />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
