import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandConfig } from "@/config/brandConfig";

const CareerPathways = () => {
  return (
    <section id="careers" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Careers</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Why People Choose UMA
          </h2>
          <p className="text-muted-foreground text-lg">
            Career opportunities with purpose, support, and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {brandConfig.culturePoints.map((point, i) => (
            <article
              key={point.headline}
              className="bg-card rounded-xl p-6 border border-border/50 shadow-card animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{point.headline}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.body}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground font-semibold hover:opacity-90"
            asChild
          >
            <Link to="/careers">
              <Briefcase className="mr-2 h-5 w-5" />
              View Open Roles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerPathways;
