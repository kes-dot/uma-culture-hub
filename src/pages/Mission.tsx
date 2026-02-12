import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Rocket, FlaskConical, MapPin, Users, Award, Star } from "lucide-react";
import trainingSummit from "@/assets/training-summit.jpg";

const timelineEvents = [
  {
    year: "2008",
    title: "The Founding",
    description: "Behavior Frontiers was founded with a mission to provide the highest quality ABA therapy to children and families in need.",
    icon: Rocket,
  },
  {
    year: "2012",
    title: "Growing the Team",
    description: "Expanded to multiple locations, building a team of passionate clinicians committed to evidence-based care.",
    icon: Users,
  },
  {
    year: "2015",
    title: "Research Innovation",
    description: "Launched Priorare, our proprietary technology platform for data-driven treatment planning and measurable outcomes.",
    icon: FlaskConical,
  },
  {
    year: "2018",
    title: "National Expansion",
    description: "Grew to 20+ locations nationwide, bringing gold-standard ABA care to communities across the country.",
    icon: MapPin,
  },
  {
    year: "2021",
    title: "Clinical Excellence Awards",
    description: "Recognized for outstanding clinical outcomes, research contributions, and commitment to employee development.",
    icon: Award,
  },
  {
    year: "2024",
    title: "30+ Locations & Beyond",
    description: "Serving 1000+ families with a team of 1000+ dedicated professionals. The journey continues.",
    icon: Star,
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
                From our founding to today, every step has been guided by one purpose: 
                transforming lives through compassionate, evidence-based behavioral healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={trainingSummit}
                  alt="Behavior Frontiers leadership summit"
                  className="rounded-2xl shadow-soft w-full object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-6">
                  <Heart className="h-3 w-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">Message from Leadership</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  A Letter to Our Team & Future Team Members
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    When we founded Behavior Frontiers, we had a simple but ambitious vision: 
                    create the gold standard in ABA care while building a workplace where clinicians thrive.
                  </p>
                  <p>
                    Today, I'm proud to say we've done both — and we're just getting started. 
                    Every family we serve, every clinician we develop, every breakthrough we achieve 
                    is a testament to the incredible people who make up this organization.
                  </p>
                  <p className="font-semibold text-foreground">
                    Thank you for being part of this journey. The best is yet to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Timeline</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
                Milestones That Matter
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {timelineEvents.map((event, i) => (
                <div
                  key={event.year}
                  className="flex gap-6 mb-10 last:mb-0 animate-fade-in"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0 shadow-soft">
                      <event.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    {i < timelineEvents.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary/30 to-secondary/30 min-h-[40px]" />
                    )}
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-card flex-1 hover-lift">
                    <span className="text-sm font-bold text-primary">{event.year}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
