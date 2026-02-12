import { Newspaper, Calendar, Award, Heart, Star, ArrowRight, Download, BookOpen, Sun, Sparkles, Users, GraduationCap } from "lucide-react";
import teamCelebration from "@/assets/team-celebration.jpg";
import newsletterJan from "@/assets/newsletter-jan-2026.jpg";
import newsletterAug from "@/assets/newsletter-aug-2025.jpg";

const bulletinItems = [
  {
    icon: Heart,
    category: "Mental Wellness Month",
    title: "Take Care of Yourself",
    description:
      "January is Mental Wellness Month. Remember: progress over perfection. Stay connected with your team and reach out when you need support. Your Employee Assistance Program offers 24/7 confidential mental health coverage.",
    color: "secondary",
  },
  {
    icon: Star,
    category: "National Mentoring Month",
    title: "Celebrating Our Mentors",
    description:
      "Shoutout to the incredible mentors who guide our team every day. Whether you're a BCBA guiding a new technician or a seasoned RBT showing the ropes, your dedication to growing the next generation of clinicians inspires us all.",
    color: "primary",
  },
  {
    icon: Award,
    category: "Recognition Spotlight",
    title: "Team Member of the Month",
    description:
      "Congratulations to our amazing team members who went above and beyond this month. Your compassion, clinical excellence, and commitment to our families make all the difference every single day.",
    color: "secondary",
  },
];

const newsletterArchive = [
  {
    month: "January 2026",
    emoji: "💙",
    downloadUrl: `${import.meta.env.BASE_URL}newsletters/january-2026.pdf`,
    color: "primary",
    icon: Sparkles,
    image: newsletterJan,
    highlights: [
      "Mental Wellness Month — resources & self-care tips",
      "National Mentoring Month celebrations & mentor spotlights",
      "Team Member of the Month recognition",
      "New Year goals and team momentum kick-off",
      "Employee Assistance Program wellness reminders",
    ],
  },
  {
    month: "August 2025",
    emoji: "🎉",
    downloadUrl: `${import.meta.env.BASE_URL}newsletters/august-2025.pdf`,
    color: "secondary",
    icon: Sun,
    image: newsletterAug,
    highlights: [
      "Summer team socials & celebration recaps",
      "Back-to-school transition support for families",
      "Employee appreciation week highlights",
      "New hire welcome spotlights across regions",
      "Career growth stories & promotion announcements",
    ],
  },
];

const BulletinSection = () => {
  return (
    <section id="bulletin" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            BFF Bulletin
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Celebrating Our People, Every Day.
          </h2>
          <p className="text-muted-foreground text-lg">
            Shoutouts, milestones, wellness spotlights, and the stories that make our community feel like home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured */}
          <div className="relative rounded-2xl overflow-hidden group hover-lift">
            <img
              src={teamCelebration}
              alt="Team celebration"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="relative bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent p-8 flex flex-col justify-end min-h-[400px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 w-fit mb-4">
                <Newspaper className="h-3 w-3 text-secondary" />
                <span className="text-xs font-semibold text-secondary">Featured This Month</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                January BFF Bulletin 💙
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                New beginnings, mentoring month celebrations, mental wellness focus, and incredible team momentum as we kick off the year.
              </p>
              <a
                href={`${import.meta.env.BASE_URL}newsletters/january-2026.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary font-semibold text-sm cursor-pointer group-hover:gap-3 transition-all"
              >
                Read Full Bulletin <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-4">
            {bulletinItems.map((item, i) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-card hover-lift animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        item.color === "primary" ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {item.category}
                    </span>
                    <h4 className="text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Archive */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Newsletter Archive</h3>
              <p className="text-sm text-muted-foreground">
                Catch up on past issues — download and revisit the highlights.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {newsletterArchive.map((issue) => (
              <div
                key={issue.month}
                className="bg-card rounded-2xl border border-border/50 shadow-card hover-lift overflow-hidden"
              >
                {/* Cover image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={issue.image}
                    alt={`${issue.month} BFF Bulletin`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="font-bold text-primary-foreground text-lg">
                        {issue.month} {issue.emoji}
                      </span>
                      <span className="block text-xs text-primary-foreground/70">BFF Bulletin</span>
                    </div>
                    <a
                      href={issue.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-background/90 text-foreground hover:bg-background transition-colors backdrop-blur-sm"
                    >
                      <Download className="h-3 w-3" />
                      PDF
                    </a>
                  </div>
                </div>

                {/* Key highlights */}
                <div className="px-6 py-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 block">
                    Key Highlights
                  </span>
                  <ul className="space-y-2.5">
                    {issue.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                            issue.color === "primary" ? "bg-primary" : "bg-secondary"
                          }`}
                        />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinSection;
