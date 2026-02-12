import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    level: 1,
    title: "Behavior Technician",
    description: "Start your journey with hands-on training, mentorship, and real impact from day one.",
    perks: ["Comprehensive onboarding", "Paired with a mentor", "Immediate client impact"],
  },
  {
    level: 2,
    title: "Senior Behavior Technician",
    description: "Deepen your expertise and begin leading sessions with greater independence.",
    perks: ["Advanced training", "Peer leadership", "CEU opportunities"],
  },
  {
    level: 3,
    title: "Board Certified Behavior Analyst",
    description: "Lead clinical programs, supervise technicians, and drive treatment excellence.",
    perks: ["Supervision experience", "Research opportunities", "Summit presentations"],
  },
  {
    level: 4,
    title: "Clinical Director & Leadership",
    description: "Shape the future of behavioral healthcare at the highest levels of our organization.",
    perks: ["Strategic leadership", "Program development", "National impact"],
  },
];

const CareerPathways = () => {
  return (
    <section id="careers" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Grow With Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            We Invest in Your Career — Every Step
          </h2>
          <p className="text-muted-foreground text-lg">
            Clear pathways, real mentorship, and a culture that champions your professional growth from day one.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-6 mb-8 last:mb-0 animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  i === steps.length - 1 
                    ? "gradient-hero text-primary-foreground" 
                    : "bg-primary/10 text-primary border-2 border-primary/20"
                }`}>
                  {step.level}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-primary/30 to-secondary/30 min-h-[40px]" />
                )}
              </div>

              {/* Content */}
              <div className="bg-card rounded-xl p-6 border border-border/50 shadow-card flex-1 hover-lift">
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.perks.map((perk) => (
                    <span key={perk} className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gradient-hero border-0 text-primary-foreground font-semibold shadow-elevated hover:opacity-90 transition-opacity" asChild>
            <Link to="/careers">
              <GraduationCap className="mr-2 h-5 w-5" />
              Start Your Journey
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerPathways;
