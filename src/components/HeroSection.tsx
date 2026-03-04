import { ArrowDown, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { brandConfig } from "@/config/brandConfig";

const HeroSection = () => {
  const scrollToValues = () => {
    document.getElementById("values")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[540px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={brandConfig.images.heroImage}
          alt={`${brandConfig.company.name} team`}
          className="w-full h-full object-cover object-[center_35%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-in">
            {brandConfig.company.tagline}
          </h1>
          <p
            className="text-xl sm:text-2xl text-secondary font-semibold mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {brandConfig.company.subTagline}
          </p>
          <p
            className="text-lg text-primary-foreground/85 mb-10 max-w-xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {brandConfig.company.description}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToValues}
              className="bg-primary text-primary-foreground font-semibold px-8 hover:opacity-90"
            >
              Meet Our Culture
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/40 text-white hover:bg-white/20 font-semibold px-8 backdrop-blur-sm"
              asChild
            >
              <Link to="/careers">
                <Briefcase className="mr-2 h-4 w-4" />
                View Open Roles
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
