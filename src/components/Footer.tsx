import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { brandConfig } from "@/config/brandConfig";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={brandConfig.assets.logoWhite} alt={brandConfig.company.name} className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              {brandConfig.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {brandConfig.footer.quickLinks.map((link) => (
                <Link key={link.label} to={link.href} className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
              <a href={brandConfig.footer.mainWebsiteLink.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                {brandConfig.footer.mainWebsiteLink.label}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">{brandConfig.footer.connectHeading}</h4>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              {brandConfig.footer.connectText}
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} {brandConfig.company.copyrightHolder}. All rights reserved.
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
