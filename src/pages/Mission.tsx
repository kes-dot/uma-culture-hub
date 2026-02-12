import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Rocket, FlaskConical, MapPin, Users, Award, Star, GraduationCap, Building2, Globe, TrendingUp, Play } from "lucide-react";
import helenMader from "@/assets/helen-mader.jpg";

const timelineEvents = [
  {
    year: "2004",
    title: "Founded by Helen Mader",
    description: "Helen Mader, M.A., BCBA, opens Behavior Frontiers with a singular mission: deliver gold-standard ABA therapy rooted in scientific research and compassion.",
    icon: Rocket,
    highlight: true,
  },
  {
    year: "2008",
    title: "Multi-State Expansion",
    description: "Expanded beyond California into new states, bringing evidence-based ABA care to more communities in need.",
    icon: MapPin,
  },
  {
    year: "2010",
    title: "Fellowship Program Launched",
    description: "Introduced the Behavior Analyst Fellowship Program, investing in the next generation of BCBAs with mentorship and supervised fieldwork.",
    icon: GraduationCap,
  },
  {
    year: "2012",
    title: "Growing the Clinical Team",
    description: "Surpassed 500 employees — Behavior Technicians, BCBAs, and Clinical Directors — all committed to individualized care.",
    icon: Users,
  },
  {
    year: "2015",
    title: "PrioraCare Technology",
    description: "CEO Helen Mader created PrioraCare, a proprietary electronic data collection and clinical outcomes platform driving measurable, data-backed results for every client.",
    icon: FlaskConical,
    highlight: true,
  },
  {
    year: "2018",
    title: "20+ Locations Nationwide",
    description: "Reached 20 centers across 10 states — from California to Massachusetts — with center-based, home, community, school, and telehealth settings.",
    icon: Building2,
  },
  {
    year: "2019",
    title: "15-Year Anniversary Celebration",
    description: "A milestone celebration honoring clients, families, and the autism community with events at locations across the country.",
    icon: Star,
  },
  {
    year: "2021",
    title: "CEO Named Top 25 HealthTech Executive",
    description: "Helen Mader recognized as a Top 25 Consumer HealthTech Executive, honoring her innovation in ABA services and clinical technology.",
    icon: Award,
    highlight: true,
  },
  {
    year: "2023",
    title: "Serving 12 States",
    description: "Expanded footprint to 12 states including CA, WA, CO, TX, GA, MN, MO, MI, PA, MD, VA, and MA.",
    icon: Globe,
  },
  {
    year: "2024",
    title: "2,100+ Employees, 2,600+ Clients",
    description: "A team of over 2,100 dedicated professionals serving more than 2,600 clients — and still growing. The best is yet to come.",
    icon: TrendingUp,
    highlight: true,
  },
];

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Journey</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
                Mission-Driven from <span className="text-gradient">Day One.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2004 by Helen Mader, every step has been guided by one purpose:
                transforming lives through compassionate, evidence-based behavioral healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <img
                  src={helenMader}
                  alt="Helen Mader, Founder & CEO of Behavior Frontiers"
                  className="rounded-2xl shadow-elevated w-full object-cover aspect-[3/4]"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-foreground">Helen Mader</h3>
                  <p className="text-sm text-primary font-semibold">M.A., BCBA — Founder & CEO</p>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-6">
                  <Heart className="h-3 w-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">A Message from Our Founder</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  "ABA therapy is all we do — and we do it with expertise, compassion, and data-backed results."
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am personally dedicated to helping children with autism and other special needs receive the highest quality ABA services available through our comprehensive and individualized treatment programs.
                  </p>
                  <p>
                    At Behavior Frontiers, we have used ABA methods to help non-verbal children learn to speak, children without social skills learn to make friends, aggressive children eliminate their problem behaviors, and so much more. Families are continually amazed at how well our interventions work — and this is because ABA is based on scientific principles that hold true for all behavior.
                  </p>
                  <p>
                    We continuously strive to make sure that we deliver accurate and up-to-date ABA services so that all those who interact with children with autism and other special needs have the most powerful tools available.
                  </p>
                  <p className="font-semibold text-foreground italic">
                    — Helen Mader, Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
                  <Play className="h-3 w-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">Watch</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Our Guiding Principles
                </h2>
                <p className="text-muted-foreground mt-2">Helen Mader shares the vision behind Behavior Frontiers</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video bg-foreground/5">
                <iframe
                  src="https://www.youtube.com/embed/2nmXyDw_6lw"
                  title="Behavior Frontiers Guiding Principles Presented by Helen Mader"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Since 2004</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
                20 Years of Transforming Lives
              </h2>
              <p className="text-muted-foreground">From a single BCBA to over 2,100 employees serving 2,600+ clients across 12 states.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              {/* Center line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 md:-translate-x-px" />

              {timelineEvents.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`relative flex items-start mb-6 last:mb-0 animate-fade-in ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    {/* Dot on the line */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-soft ${
                        event.highlight
                          ? "gradient-hero"
                          : "bg-card border-2 border-primary/30"
                      }`}>
                        <event.icon className={`h-5 w-5 ${event.highlight ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                    </div>

                    {/* Content card */}
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
