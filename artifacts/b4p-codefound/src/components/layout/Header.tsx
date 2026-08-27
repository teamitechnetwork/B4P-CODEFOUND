import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'What We Do', href: '#programs' },
    { name: 'Work With Us', href: '#contact' },
    { name: 'Shop Now', href: '#shop' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 z-50 relative group"
          >
            <img 
              src="/brand/b4p-favicon.png" 
              alt="B4P Logo" 
              className="w-10 h-10 object-contain rounded transition-transform group-hover:scale-105"
            />
            <span className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-foreground' : 'text-foreground'} max-w-[120px] leading-tight hidden sm:block`}>
              B4P CODEFOUND
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 border-l border-border pl-6">
              <Button asChild variant="outline" className="font-bold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <a href="#partner" onClick={(e) => scrollToSection(e, '#partner')}>BECOME A PARTNER</a>
              </Button>
              <Button asChild className="font-bold tracking-wide bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                <a href="#donate" onClick={(e) => scrollToSection(e, '#donate')}>DONATE NOW</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 relative p-2 -mr-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-background z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-xl mb-12">
          {navLinks.map((link) => (
            <li key={link.name} className="border-b border-border/50 pb-4">
              <a 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-bold text-foreground hover:text-primary transition-colors block"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 mt-auto">
          <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary text-lg">
            <a href="#partner" onClick={(e) => scrollToSection(e, '#partner')}>BECOME A PARTNER</a>
          </Button>
          <Button asChild size="lg" className="w-full bg-secondary text-secondary-foreground text-lg shadow-md">
            <a href="#donate" onClick={(e) => scrollToSection(e, '#donate')}>DONATE NOW</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
