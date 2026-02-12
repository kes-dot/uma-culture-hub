import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BF</span>
              </div>
              <span className="font-bold text-lg text-primary-foreground">Behavior Frontiers</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Gold-standard ABA care through research, collaboration, and heart. Building careers, community, and futures.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Culture & Values</Link>
              <Link to="/mission" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Our Journey</Link>
              <a href="https://behaviorfrontiers.com/employment" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Open Roles</a>
              <a href="https://behaviorfrontiers.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Main Website</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Connect</h4>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Ready to make a difference? We'd love to hear from you. Explore our open positions and find where you belong.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Behavior Frontiers. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-primary-foreground/40 text-sm">
            Made with <Heart className="h-3 w-3 text-secondary mx-1" /> for our team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
