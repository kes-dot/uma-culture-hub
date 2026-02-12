import { 
  Award, Heart, Users, BookOpen, Scale, Sparkles 
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Gold-Standard Care & Research",
    description: "Data-driven care powered by Priorare software, measurable skill acquisition, and clinical rigor that makes a real difference.",
    highlights: ["Evidence-Based Practice", "Priorare Technology", "Measurable Outcomes"],
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Inclusion & Diversity",
    description: "A safe, welcoming environment where diverse staff and families thrive together with cultural competency at our core.",
    highlights: ["Cultural Competency", "Safe Spaces", "Diverse Community"],
    color: "secondary" as const,
  },
  {
    icon: BookOpen,
    title: "Employee Support & Development",
    description: "Extensive training, CEU opportunities, mentorship programs, in-house summits, and clear career pathways.",
    highlights: ["CEU Opportunities", "Mentorship", "Career Pathways"],
    color: "primary" as const,
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "A team-oriented approach where behavior technicians, supervisors, and families share wins and grow together.",
    highlights: ["Interdisciplinary Teams", "Family Partnership", "Shared Success"],
    color: "secondary" as const,
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    description: "Flexible scheduling, social events, recognition programs, and genuine care for your mental wellness.",
    highlights: ["Flexible Schedules", "Wellness Focus", "Recognition"],
    color: "primary" as const,
  },
  {
    icon: Sparkles,
    title: "Community & Celebration",
    description: "We celebrate each other — milestones, achievements, and the daily moments that make this work meaningful.",
    highlights: ["Team Events", "Celebrations", "Connection"],
    color: "secondary" as const,
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Stand For</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            The Values Our People Live Every Day.
          </h2>
          <p className="text-muted-foreground text-lg">
            These aren't words on a wall — they're how our 2,100+ team members show up for each other and the families we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-card rounded-xl p-8 shadow-card hover-lift border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                value.color === "primary" 
                  ? "bg-primary/10 text-primary" 
                  : "bg-secondary/10 text-secondary"
              }`}>
                <value.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{value.description}</p>

              <div className="flex flex-wrap gap-2">
                {value.highlights.map((h) => (
                  <span
                    key={h}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      value.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center gradient-warm rounded-2xl p-10 border border-primary/10">
          <blockquote className="text-xl sm:text-2xl font-semibold text-foreground italic max-w-3xl mx-auto">
            "We don't just hire employees. We welcome family. We celebrate people. We grow together."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
