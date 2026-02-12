import { Trophy, MapPin, FlaskConical, TrendingUp } from "lucide-react";

const milestones = [
  { icon: Trophy, number: "20+", label: "Years Empowering People", description: "Building careers and transforming lives since 2004" },
  { icon: MapPin, number: "60+", label: "Locations Across 12 States", description: "A nationwide community where you can grow close to home" },
  { icon: FlaskConical, number: "2,600+", label: "Families We Serve Together", description: "The impact our team creates every single day" },
  { icon: TrendingUp, number: "2,100+", label: "Team Members & Growing", description: "Clinicians, leaders, and support staff — all part of the BF family" },
];

const AwardsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">By the Numbers</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            The Community You'd Be Joining
          </h2>
          <p className="text-muted-foreground text-lg">
            Real numbers that reflect a real commitment to our people and the families we serve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
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
