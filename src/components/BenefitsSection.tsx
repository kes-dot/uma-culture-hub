import {
  Heart,
  DollarSign,
  GraduationCap,
  Car,
  Users,
  Shield,
  Gift,
  Briefcase,
} from "lucide-react";

const benefitCategories = [
  {
    title: "Benefits for All Employees",
    icon: Heart,
    color: "text-secondary",
    benefits: [
      "Competitive pay with on-demand access via DailyPay",
      "Initial and ongoing paid training & supervision",
      "Opportunities for career advancement",
      "Performance and promotion raises",
      "Paid mileage and drive time",
      "Paid professional liability insurance",
    ],
  },
  {
    title: "Company Perks",
    icon: Gift,
    color: "text-primary",
    benefits: [
      "Employee Referral Program with generous bonuses",
      "BenePlus program: Teledoc, Rx, shopping, travel & more",
      "Company socials: dinners, bowling, yoga, holiday parties",
      "Employee Assistance Program with 24/7 mental health coverage",
    ],
  },
  {
    title: "Full-Time Benefits",
    icon: Shield,
    color: "text-secondary",
    benefits: [
      "Medical, dental, and vision insurance",
      "401k Plan with company match",
      "Paid Personal Time Off and Sick Leave",
      "Paid Holidays",
    ],
  },
  {
    title: "Growth & Education",
    icon: GraduationCap,
    color: "text-primary",
    benefits: [
      "BCBA mentorship opportunities",
      "Discounts at ABA Master's & Certificate programs",
      "Tuition reduction at partner universities",
      "Paid conference attendance & registration",
    ],
  },
];

const highlights = [
  { icon: DollarSign, label: "Competitive Pay", desc: "On-demand via DailyPay" },
  { icon: Car, label: "Paid Mileage", desc: "Drive time covered" },
  { icon: Users, label: "Team Socials", desc: "Dinners, yoga & more" },
  { icon: Briefcase, label: "Career Growth", desc: "Clear advancement paths" },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background" id="benefits">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Why Work With Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            More Than Just a Job —{" "}
            <span className="text-primary">It's a Career You'll Love</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From day one, you're supported with competitive pay, comprehensive
            benefits, and real opportunities to grow.
          </p>
        </div>

        {/* Quick highlights row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center text-center p-5 rounded-xl gradient-warm hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <h.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-sm">
                {h.label}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {h.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Benefit categories grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefitCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className={`h-5 w-5 ${cat.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {cat.title}
                </h3>
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
            "Culture is very open and results oriented. Fantastic benefits and
            perks, competitive salary, and a team atmosphere."
          </blockquote>
          <p className="mt-3 text-sm font-medium text-primary">
            — Behavior Frontiers Employee
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
