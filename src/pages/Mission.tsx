import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Play } from "lucide-react";
import { brandConfig } from "@/config/brandConfig";

const Mission = () => {
  const { mission, company, assets } = brandConfig;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">{mission.badge}</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
                {mission.heading} <span className="text-gradient">{mission.headingHighlight}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {mission.subheading}
              </p>
            </div>
          </div>
        </section>

        {/* Founder Message */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <img
                  src={assets.founderImage}
                  alt={`${company.founderName}, ${company.founderTitle}`}
                  className="rounded-2xl shadow-elevated w-full object-cover aspect-[3/4]"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-foreground">{company.founderName}</h3>
                  <p className="text-sm text-primary font-semibold">
                    {company.founderCredentials ? `${company.founderCredentials} — ` : ""}{company.founderTitle}
                  </p>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-6">
                  <Heart className="h-3 w-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">{mission.founderSectionBadge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  "{mission.founderHeadline}"
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {company.founderMessage.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <p className="font-semibold text-foreground italic">
                    — {company.founderName}, {company.founderTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section (conditional) */}
        {mission.videoEmbedId && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
                    <Play className="h-3 w-3 text-primary" />
                    <span className="text-xs font-semibold text-primary">{mission.videoBadge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {mission.videoHeading}
                  </h2>
                  <p className="text-muted-foreground mt-2">{mission.videoSubheading}</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video bg-foreground/5">
                  <iframe
                    src={`https://www.youtube.com/embed/${mission.videoEmbedId}`}
                    title={mission.videoHeading}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Timeline */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{mission.timelineBadge}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
                {mission.timelineHeading}
              </h2>
              <p className="text-muted-foreground">{mission.timelineSubheading}</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              {/* Center line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 md:-translate-x-px" />

              {mission.events.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`relative flex items-start mb-6 last:mb-0 animate-fade-in ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-soft ${
                        event.highlight
                          ? "gradient-hero"
                          : "bg-card border-2 border-primary/30"
                      }`}>
                        <event.icon className={`h-5 w-5 ${event.highlight ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                    </div>

                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-4 md:mr-auto" : "md:pl-4 md:ml-auto"
                    }`}>
                      <div className={`bg-card rounded-xl p-5 border shadow-card hover-lift ${
                        event.highlight ? "border-primary/30" : "border-border/50"
                      }`}>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-sm font-bold px-2 py-0.5 rounded-full ${
                            event.highlight
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {event.year}
                          </span>
                          <h3 className="text-base font-bold text-foreground">{event.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
