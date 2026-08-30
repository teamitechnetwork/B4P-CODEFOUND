import { Mail, MapPin } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white/80 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded w-14 h-14 flex items-center justify-center">
                <img src="/brand/b4p-favicon.png" alt="B4P Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white tracking-tight">B4P</span>
                <span className="font-bold text-sm leading-none text-white tracking-tight">CODEFOUND</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Business for Peace Community Development Foundation. Global-Local Peacebuilding and Economic Development through African-led leadership and collective action.
            </p>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">1108 Chaser Street<br/>Blacklick, Ohio 43004</span>
              </div>
              <a href="mailto:management@b4pcodefound.org" className="flex items-start gap-3 hover:text-white transition-colors group">
                <Mail className="h-5 w-5 text-secondary shrink-0 group-hover:text-white transition-colors" />
                <span className="text-sm">management@b4pcodefound.org</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-sm hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#what-we-do" className="text-sm hover:text-secondary transition-colors">What We Do</a></li>
              <li><a href="#work-with-us" className="text-sm hover:text-secondary transition-colors">Work With Us</a></li>
              <li><a href="#shop" className="text-sm hover:text-secondary transition-colors">Shop Now</a></li>
              <li><a href="/partner-with-us" className="text-sm hover:text-secondary transition-colors">Become a Partner</a></li>
            </ul>
          </div>

          {/* CTA Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Support the Mission</h4>
            <p className="text-sm leading-relaxed">
              Your contribution fuels grassroots empowerment and sustainable peacebuilding in Liberia and beyond.
            </p>
            <a href="#donate" className="bg-secondary text-white px-6 py-3 rounded text-center text-sm font-bold uppercase tracking-wider hover:bg-secondary/90 transition-colors mt-2">
              Donate Now
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} B4P CODEFOUND. A 501(c)(3) Nonprofit Organization. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
