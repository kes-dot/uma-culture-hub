import { Heart } from "lucide-react";
import { brandConfig } from "@/config/brandConfig";

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            What We Stand For
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            The Values Our People Live Every Day
          </h2>
          <p className="text-muted-foreground text-lg">
            Our culture is built on service, growth, and measurable outcomes for students and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandConfig.values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-card rounded-xl p-8 shadow-card hover-lift border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
