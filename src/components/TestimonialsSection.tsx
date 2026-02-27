import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { brandConfig } from "@/config/brandConfig";

const TestimonialsSection = () => {
  const { testimonials } = brandConfig;
  const items = testimonials.items;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % items.length);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  if (items.length === 0) return null;

  const t = items[current];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{testimonials.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-muted-foreground text-lg">
            {testimonials.subheading}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-soft border border-border/50 p-8 sm:p-12 relative">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/10" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl gradient-hero flex items-center justify-center shadow-card">
                  <span className="text-2xl font-bold text-primary-foreground">{t.initials}</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-lg sm:text-xl text-foreground leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>

                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-primary font-medium text-sm">{t.role}</div>
                  <div className="text-muted-foreground text-sm">{t.years}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
              </button>

              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? "bg-primary w-8" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
