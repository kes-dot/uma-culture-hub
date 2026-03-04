import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandConfig } from "@/config/brandConfig";

const navLinks = [
  { label: "Culture", href: "/#values" },
  { label: "Our Leaders", href: "/#leaders" },
  { label: "Bulletin", href: "/#bulletin" },
  { label: "Careers", href: "/careers" },
  { label: "Our Journey", href: "/mission" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const logoSrc = brandConfig.images.logoWhite || brandConfig.images.logo;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt={brandConfig.company.name}
            className={`${brandConfig.images.navLogoHeight} w-auto`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
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
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:opacity-90"
            asChild
          >
            <Link to="/careers">View Open Roles</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href.startsWith("/#") ? "/" : link.href}
              onClick={() => scrollToSection(link.href)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="w-full mt-3 bg-primary text-primary-foreground hover:opacity-90"
            size="sm"
            asChild
          >
            <Link to="/careers">View Open Roles</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
