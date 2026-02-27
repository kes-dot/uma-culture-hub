import { brandConfig } from "@/config/brandConfig";

const BenefitsSection = () => {
  const { benefits } = brandConfig;

  return (
    <section className="py-20 bg-background" id="benefits">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            {benefits.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {benefits.heading}{" "}
            <span className="text-primary">{benefits.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {benefits.subheading}
          </p>
        </div>

        {/* Quick highlights row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {benefits.highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center text-center p-5 rounded-xl gradient-warm hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <h.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-sm">{h.label}</span>
              <span className="text-xs text-muted-foreground mt-1">{h.desc}</span>
            </div>
          ))}
        </div>

        {/* Benefit categories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className={`h-5 w-5 ${cat.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonial quote */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <blockquote className="text-lg italic text-muted-foreground">
            "{benefits.testimonialQuote}"
          </blockquote>
          <p className="mt-3 text-sm font-medium text-primary">
            {benefits.testimonialAttribution}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
