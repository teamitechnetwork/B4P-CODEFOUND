import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/brand/b4p-favicon.png" 
                alt="B4P Logo" 
                className="w-12 h-12 bg-white p-1 rounded-md"
              />
              <span className="font-bold text-xl tracking-tight leading-tight">
                B4P<br/>CODEFOUND
              </span>
            </div>
            <p className="text-background/70 font-medium mb-6 leading-relaxed">
              Business for Peace Community Development Foundation.<br/>
              A 501(c)(3) nonprofit and social enterprise established in 2015.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4 text-background/80">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-background/10 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                </div>
                <span>1108 Chaser Street<br/>Blacklick, Ohio 43004</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-background/10 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                </div>
                <a href="mailto:management@b4pcodefound.org" className="hover:text-white transition-colors underline decoration-primary/50 underline-offset-4">
                  management@b4pcodefound.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3 font-medium text-background/80">
              <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/peacebuilding-program" className="hover:text-white transition-colors">What We Do</a></li>
              <li><a href="/our-events" className="hover:text-white transition-colors">Events &amp; Programs</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Take Action</h4>
            <p className="text-background/70 mb-6 font-medium leading-relaxed">
              Join us in building a more inclusive and peaceful future.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white w-full shadow-lg">
                <a href="/make-a-donation">Donate Now</a>
              </Button>
              <Button asChild variant="outline" className="border-primary/50 text-white hover:bg-primary/20 hover:text-white w-full">
                <a href="mailto:management@b4pcodefound.org?subject=Become%20a%20B4P%20partner">Become a Partner</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-background/50 text-sm font-medium">
          <p>© {new Date().getFullYear()} B4P CODEFOUND. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
