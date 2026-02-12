import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import bfLogo from "@/assets/bf-logo-color.png";

const navLinks = [
  { label: "Culture", href: "/#values" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "BFF Bulletin", href: "/#bulletin" },
  { label: "Growth", href: "/#careers" },
  { label: "Our Journey", href: "/mission" },
];

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
          <img src={bfLogo} alt="Behavior Frontiers" className="h-12 w-auto" />
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
          <Button variant="outline" size="sm" asChild>
            <a href="https://behaviorfrontiers.com/employment" target="_blank" rel="noopener noreferrer">
              View Open Roles
            </a>
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
          <Button className="w-full mt-3" size="sm" asChild>
            <a href="https://behaviorfrontiers.com/employment" target="_blank" rel="noopener noreferrer">
              View Open Roles
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
