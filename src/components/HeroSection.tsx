import { ArrowDown, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-culture.jpg";

const HeroSection = () => {
  const scrollToValues = () => {
    document.getElementById("values")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center min-h-[85vh]">
          {/* Copy */}
          <div className="py-20 lg:py-32 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
              This Is Where You{" "}
              <span className="text-secondary">Belong.</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-10 max-w-md animate-fade-in" style={{ animationDelay: "0.15s" }}>
              Discover the culture, people, and purpose that make Behavior Frontiers more than a workplace — it's a community.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button
                size="lg"
                onClick={scrollToValues}
                className="gradient-hero border-0 text-primary-foreground font-semibold px-8 shadow-elevated hover:opacity-90 transition-opacity"
              >
                Meet Our Culture
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8 backdrop-blur-sm"
                asChild
              >
                <Link to="/careers">
                  <Briefcase className="mr-2 h-4 w-4" />
                  View Open Roles
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block h-full">
            <img
              src={heroImage}
              alt="Behavior Frontiers team member at company retreat"
              className="absolute inset-0 w-full h-full object-cover object-[center_65%] rounded-l-3xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
