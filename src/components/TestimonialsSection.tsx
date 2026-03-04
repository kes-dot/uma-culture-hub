import { UserCircle2 } from "lucide-react";
import { brandConfig } from "@/config/brandConfig";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const TestimonialsSection = () => {
  return (
    <section id="leaders" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Leaders</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Leadership Focused on Student Outcomes
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet the leaders shaping UMA's mission, operations, and academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandConfig.leadership.map((leader, index) => (
            <article
              key={leader.name}
              className="bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="h-64 bg-muted flex items-center justify-center">
                {leader.photo ? (
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-primary">
                    <UserCircle2 className="h-12 w-12 mb-2" />
                    <span className="text-2xl font-bold">{getInitials(leader.name)}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{leader.name}</h3>
                <p className="text-secondary font-semibold mb-3">{leader.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
