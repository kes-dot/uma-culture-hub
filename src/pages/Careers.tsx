import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  ArrowRight,
  Search,
  Building2,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-celebration.jpg";

type RoleCategory = "clinical" | "corporate" | "all";

interface Role {
  title: string;
  category: RoleCategory;
  type: string;
  locations: string[];
  description: string;
  requirements: string[];
  perks: string[];
  applyUrl: string;
}

const roles: Role[] = [
  {
    title: "Behavior Technician",
    category: "clinical",
    type: "Full-Time / Part-Time",
    locations: [
      "Los Angeles, CA", "Orange County, CA", "San Diego, CA", "Bakersfield, CA",
      "Sacramento, CA", "Denver, CO", "Atlanta, GA", "Boston, MA",
      "Dallas, TX", "Philadelphia, PA", "Minneapolis, MN", "and more"
    ],
    description:
      "As a Behavior Technician, you'll work one-on-one with children on the autism spectrum, implementing individualized treatment plans under the supervision of a Board Certified Behavior Analyst (BCBA). You'll be on the front lines of making a difference — helping kids build essential life skills and gain confidence, one milestone at a time.",
    requirements: [
      "High school diploma or equivalent (Bachelor's preferred)",
      "Passion for working with children and families",
      "Reliable transportation",
      "Willingness to complete RBT certification (paid training provided)",
    ],
    perks: [
      "Nationally ranked RBT training program",
      "Flexible scheduling",
      "Career advancement to Senior BT and beyond",
      "CEU opportunities",
    ],
    applyUrl: "https://jobs.jobvite.com/behaviorfrontiers",
  },
  {
    title: "Board Certified Behavior Analyst (BCBA)",
    category: "clinical",
    type: "Full-Time",
    locations: [
      "Los Angeles, CA", "Orange County, CA", "Bakersfield, CA", "Moreno Valley, CA",
      "San Diego, CA", "Denver, CO", "Boston, MA", "Philadelphia, PA", "and more"
    ],
    description:
      "Lead clinical programming and supervise a team of Behavior Technicians. You'll design individualized ABA treatment plans using data-driven strategies powered by PrioraCare™, our proprietary data-collection software. Collaborate with families and interdisciplinary teams to ensure gold-standard care outcomes.",
    requirements: [
      "Master's degree in ABA, Psychology, or related field",
      "Active BCBA certification",
      "Experience with pediatric populations preferred",
      "Strong leadership and communication skills",
    ],
    perks: [
      "Competitive salary + bonuses",
      "Manageable caseloads",
      "In-house CEU summits",
      "Clear path to Clinical Director",
    ],
    applyUrl: "https://jobs.jobvite.com/behaviorfrontiers",
  },
  {
    title: "Clinical Supervisor",
    category: "clinical",
    type: "Full-Time",
    locations: ["Multiple locations nationwide"],
    description:
      "Oversee clinical operations for a region, mentoring BCBAs and Behavior Technicians while ensuring treatment quality and compliance. You'll drive clinical outcomes, support staff development, and represent Behavior Frontiers' commitment to gold-standard care in your community.",
    requirements: [
      "Active BCBA certification with 3+ years experience",
      "Demonstrated leadership experience",
      "Strong organizational and mentoring skills",
      "Experience with program development",
    ],
    perks: [
      "Leadership development programs",
      "Regional impact",
      "Competitive compensation package",
      "Executive mentorship opportunities",
    ],
    applyUrl: "https://jobs.jobvite.com/behaviorfrontiers",
  },
  {
    title: "Speech Language Pathologist",
    category: "clinical",
    type: "Full-Time / Consultant",
    locations: ["Orange County, CA", "Los Angeles, CA"],
    description:
      "Join our interdisciplinary team as a Speech Language Pathologist, collaborating with BCBAs and Behavior Technicians to provide comprehensive care. You'll assess and treat communication disorders in children on the autism spectrum, working alongside a team committed to holistic, client-centered outcomes.",
    requirements: [
      "Master's degree in Speech-Language Pathology",
      "Active CCC-SLP or CF-SLP",
      "Experience with pediatric populations",
      "Knowledge of ABA principles a plus",
    ],
    perks: [
      "Collaborative, interdisciplinary environment",
      "Flexible scheduling options",
      "Professional development support",
      "Meaningful, purpose-driven work",
    ],
    applyUrl: "https://jobs.jobvite.com/behaviorfrontiers",
  },
  {
    title: "Occupational Therapist",
    category: "clinical",
    type: "Consultant",
    locations: ["Orange County, CA"],
    description:
      "As an Occupational Therapist consultant, you'll partner with our clinical team to support children's sensory processing, motor skills, and daily living activities. Your expertise will complement our ABA programming to deliver well-rounded care for every child.",
    requirements: [
      "Master's degree in Occupational Therapy",
      "Active OT license",
      "Pediatric experience preferred",
      "Strong collaboration skills",
    ],
    perks: [
      "Flexible consulting arrangement",
      "Work with a mission-driven team",
      "Interdisciplinary learning opportunities",
      "Competitive consultant rates",
    ],
    applyUrl: "https://jobs.jobvite.com/behaviorfrontiers",
  },
  {
    title: "Scheduling Coordinator",
    category: "corporate",
    type: "Full-Time",
    locations: ["El Segundo, CA"],
    description:
      "Keep our clinical operations running smoothly by coordinating schedules for Behavior Technicians, supervisors, and families. You'll be the connective tissue that ensures every child receives consistent, high-quality care on time.",
    requirements: [
      "Strong organizational skills",
      "Experience with scheduling software",
      "Excellent communication abilities",
      "Ability to manage multiple priorities",
    ],
    perks: [
      "Impactful behind-the-scenes role",
      "Collaborative team environment",
      "Growth opportunities in operations",
      "Comprehensive benefits package",
    ],
    applyUrl: "https://jobs.jobvite.com/behaviorfrontiers",
  },
  {
    title: "Billing Coordinator",
    category: "corporate",
    type: "Full-Time",
    locations: ["El Segundo, CA"],
    description:
      "Support our revenue cycle by managing billing processes, insurance claims, and payment coordination. Your accuracy and attention to detail help ensure that families receive the care they need without administrative barriers.",
    requirements: [
      "Experience in medical billing (ABA or healthcare preferred)",
      "Knowledge of insurance verification processes",
      "Detail-oriented with strong data entry skills",
      "Familiarity with billing software",
    ],
    perks: [
      "Healthcare industry experience",
      "Supportive team culture",
      "Professional growth opportunities",
      "Comprehensive benefits",
    ],
    applyUrl: "https://jobs.jobvite.com/behaviorfrontiers",
  },
  {
    title: "Intake Specialist | Customer Care",
    category: "corporate",
    type: "Full-Time",
    locations: ["Los Angeles, CA"],
    description:
      "Be the first point of contact for families seeking ABA services. You'll guide parents through the intake process with empathy and professionalism, connecting them with the clinical resources that will change their child's life.",
    requirements: [
      "Exceptional interpersonal and phone skills",
      "Experience in customer service or healthcare intake",
      "Bilingual (Spanish) a plus",
      "CRM or database management experience",
    ],
    perks: [
      "Directly impact families in need",
      "Warm, supportive team environment",
      "Career growth in operations",
      "Benefits + PTO",
    ],
    applyUrl: "https://jobs.jobvite.com/behaviorfrontiers",
  },
];

const categoryLabels: Record<string, string> = {
  all: "All Roles",
  clinical: "Clinical",
  corporate: "Corporate & Operations",
};

const Careers = () => {
  const [filter, setFilter] = useState<RoleCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const filtered = roles.filter((r) => {
    const matchCategory = filter === "all" || r.category === filter;
    const matchSearch =
      search === "" ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.locations.some((l) => l.toLowerCase().includes(search.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const toggleRole = (title: string) => {
    setExpandedRole(expandedRole === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={teamImage}
              alt="Behavior Frontiers team"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          </div>
          <div className="relative container mx-auto px-6 py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-in">
                Join Our Team
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-6 max-w-lg animate-fade-in" style={{ animationDelay: "0.15s" }}>
                We're searching for caring and talented individuals seeking to elevate their careers in ABA. Collaborate with top-class clinicians to help our clients and families discover a world without limits.
              </p>
              <div className="flex flex-wrap gap-6 text-primary-foreground/70 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>60+ locations nationwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Top 10 RBT Training in the US</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>BHCOE Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why BF */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: GraduationCap, title: "Paid Training", desc: "Nationally ranked RBT training program — no experience needed" },
                { icon: Users, title: "Mentorship", desc: "Work alongside talented clinicians committed to your growth" },
                { icon: Heart, title: "Meaningful Impact", desc: "Help children build skills and confidence, one milestone at a time" },
                { icon: Building2, title: "Career Growth", desc: "Clear pathways from BT → Senior BT → Supervisor → Leadership" },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-6 border border-border/50 shadow-card text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Listings */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Open Positions</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
                Find Where You Belong
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether your journey is just beginning or you're looking to grow — our team is committed to helping you succeed.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by role or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="flex gap-2">
                {(["all", "clinical", "corporate"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      filter === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>

            {/* Roles */}
            <div className="max-w-3xl mx-auto space-y-4">
              {filtered.map((role) => {
                const isExpanded = expandedRole === role.title;
                return (
                  <div
                    key={role.title}
                    className="bg-card rounded-xl border border-border/50 shadow-card overflow-hidden animate-fade-in"
                  >
                    <button
                      onClick={() => toggleRole(role.title)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            role.category === "clinical"
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary/10 text-secondary"
                          }`}>
                            {role.category === "clinical" ? "Clinical" : "Corporate"}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {role.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {role.locations.length > 2
                              ? `${role.locations[0]}, ${role.locations[1]} +${role.locations.length - 2} more`
                              : role.locations.join(", ")}
                          </span>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 border-t border-border/50 pt-5 animate-fade-in">
                        <p className="text-foreground/80 leading-relaxed mb-6">{role.description}</p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-primary" />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {role.requirements.map((r) => (
                                <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                              <Heart className="h-4 w-4 text-secondary" />
                              What You'll Love
                            </h4>
                            <ul className="space-y-2">
                              {role.perks.map((p) => (
                                <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs font-medium text-muted-foreground">Locations:</span>
                          {role.locations.map((loc) => (
                            <span
                              key={loc}
                              className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                            >
                              {loc}
                            </span>
                          ))}
                        </div>

                        <Button className="gradient-hero border-0 text-primary-foreground font-semibold" asChild>
                          <a href={role.applyUrl} target="_blank" rel="noopener noreferrer">
                            Apply Now
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}

              {filtered.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p className="text-lg font-medium">No roles match your search</p>
                  <p className="text-sm mt-2">Try adjusting your filters or search terms</p>
                </div>
              )}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground text-sm mb-4">
                Don't see a role that fits? View all open positions on our careers site.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="https://jobs.jobvite.com/behaviorfrontiers" target="_blank" rel="noopener noreferrer">
                  View All Open Positions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Back to Culture CTA */}
        <section className="py-16 gradient-warm border-t border-primary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want to learn more about life at BF?
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore our culture, values, and employee stories.
            </p>
            <Button asChild>
              <Link to="/">
                Explore Our Culture
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
