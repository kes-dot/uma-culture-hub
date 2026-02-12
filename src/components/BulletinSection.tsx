import { Newspaper, Calendar, Award, Heart, Star, ArrowRight } from "lucide-react";
import teamCelebration from "@/assets/team-celebration.jpg";

const bulletinItems = [
  {
    icon: Heart,
    category: "Mental Wellness Month",
    title: "Take Care of Yourself",
    description: "January is Mental Wellness Month. Remember: progress over perfection. Stay connected with your team and reach out when you need support.",
    color: "secondary",
  },
  {
    icon: Star,
    category: "National Mentoring Month",
    title: "Celebrating Our Mentors",
    description: "Shoutout to the incredible mentors who guide our team every day. Your dedication to growing the next generation of clinicians inspires us all.",
    color: "primary",
  },
  {
    icon: Award,
    category: "Recognition Spotlight",
    title: "Team Member of the Month",
    description: "Congratulations to our amazing team members who went above and beyond this month. Your compassion and clinical excellence make all the difference.",
    color: "secondary",
  },
];

const BulletinSection = () => {
  return (
    <section id="bulletin" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">BFF Bulletin</span>
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
              <div className="flex items-center gap-2 text-secondary font-semibold text-sm cursor-pointer group-hover:gap-3 transition-all">
                Read Full Bulletin <ArrowRight className="h-4 w-4" />
              </div>
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
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  }`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${
                      item.color === "primary" ? "text-primary" : "text-secondary"
                    }`}>
                      {item.category}
                    </span>
                    <h4 className="text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-card flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Newsletter Archive</span>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinSection;
