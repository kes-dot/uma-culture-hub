import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { brandConfig } from "@/config/brandConfig";

const Footer = () => {
  const logoSrc = brandConfig.images.logoWhite || brandConfig.images.logo;

  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logoSrc} alt={brandConfig.company.name} className="h-12 w-auto mb-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {brandConfig.company.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/#values" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Culture</Link>
              <Link to="/#leaders" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Our Leaders</Link>
              <Link to="/#bulletin" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Bulletin</Link>
              <Link to="/careers" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Careers</Link>
              <a href={brandConfig.company.website} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Main Website</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Connect</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              {brandConfig.company.name} • {brandConfig.company.hq}
            </p>
            <div className="flex flex-col gap-2">
              <a href={brandConfig.company.linkedIn} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">LinkedIn</a>
              <a href={brandConfig.company.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Instagram</a>
              <a href={brandConfig.company.facebook} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} {brandConfig.company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-primary-foreground/50 text-sm">
            Made with <Heart className="h-3 w-3 text-secondary mx-1" /> for our team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
