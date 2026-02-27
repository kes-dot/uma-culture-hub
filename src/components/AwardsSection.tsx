import { brandConfig } from "@/config/brandConfig";

const AwardsSection = () => {
  const { milestones } = brandConfig;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{milestones.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            {milestones.heading}
          </h2>
          <p className="text-muted-foreground text-lg">
            {milestones.subheading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.items.map((m, i) => (
            <div
              key={m.label}
              className="text-center bg-card rounded-2xl p-8 border border-border/50 shadow-card hover-lift animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                <m.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{m.number}</div>
              <div className="font-semibold text-foreground mb-2">{m.label}</div>
              <p className="text-sm text-muted-foreground">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
