import { ArrowDown, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-culture.jpg";

const HeroSection = () => {
  const scrollToValues = () => {
    document.getElementById("values")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Father and child at Behavior Frontiers"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Where Compassion Meets{" "}
            <span className="text-secondary">Clinical Excellence.</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 mb-10 max-w-md animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Join a team redefining gold-standard ABA care through research, collaboration, and heart.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToValues}
              className="gradient-hero border-0 text-primary-foreground font-semibold px-8 shadow-elevated hover:opacity-90 transition-opacity"
            >
              Explore Our Culture
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8 backdrop-blur-sm"
              asChild
            >
              <a href="https://behaviorfrontiers.com/employment" target="_blank" rel="noopener noreferrer">
                <Briefcase className="mr-2 h-4 w-4" />
                View Open Roles
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
