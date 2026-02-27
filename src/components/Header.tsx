import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandConfig } from "@/config/brandConfig";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={brandConfig.assets.logoColor} alt={brandConfig.company.name} className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {brandConfig.nav.links.map((link) => (
            <Link
              key={link.label}
              to={link.href.startsWith("/#") ? "/" : link.href}
              onClick={() => scrollToSection(link.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to={brandConfig.nav.ctaHref}>
              {brandConfig.nav.ctaLabel}
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 animate-fade-in">
          {brandConfig.nav.links.map((link) => (
            <Link
              key={link.label}
              to={link.href.startsWith("/#") ? "/" : link.href}
              onClick={() => scrollToSection(link.href)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full mt-3" size="sm" asChild>
            <Link to={brandConfig.nav.ctaHref}>
              {brandConfig.nav.ctaLabel}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
