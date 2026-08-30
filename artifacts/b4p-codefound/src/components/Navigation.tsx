import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, Mail, MapPin } from 'lucide-react';

export function Navigation() {
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
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#about' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Work With Us', href: '#work-with-us' },
    { label: 'Shop Now', href: '#shop' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8 text-xs font-medium hidden md:flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span>1108 Chaser Street Blacklick, Ohio 43004</span>
          </div>
          <a href="mailto:management@b4pcodefound.org" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="h-4 w-4 text-secondary" />
            <span>management@b4pcodefound.org</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'} px-4 md:px-8 flex justify-between items-center`}>
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/brand/b4p-favicon.png" alt="B4P CODEFOUND Logo" className="h-12 w-12 object-contain group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-primary tracking-tight">B4P</span>
            <span className="font-bold text-sm leading-none text-primary tracking-tight">CODEFOUND</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('#') ? (
                  <a href={link.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wider">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wider">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href="#donate" className="bg-secondary text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-secondary/90 transition-colors shadow-sm hover:shadow">
              Donate Now
            </a>
            <a href="/partner-with-us" className="bg-primary text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-sm hover:shadow">
              Become a Partner
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t absolute top-full left-0 right-0 shadow-xl py-4 px-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('#') ? (
                  <a 
                    href={link.href} 
                    className="block text-base font-semibold text-foreground hover:text-primary uppercase tracking-wide border-b pb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    href={link.href} 
                    className="block text-base font-semibold text-foreground hover:text-primary uppercase tracking-wide border-b pb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <a 
              href="#donate" 
              className="bg-secondary text-white px-4 py-3 rounded text-center font-bold uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate Now
            </a>
            <a 
              href="/partner-with-us"
              className="bg-primary text-white px-4 py-3 rounded text-center font-bold uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become a Partner
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
