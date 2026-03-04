import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brandConfig";

const timeline = [
  {
    year: "1994",
    title: "Founded in Tampa, Florida",
    body: "Ultimate Medical Academy opens its doors with a mission to make healthcare education accessible to all, offering hands-on programs to students across Florida.",
  },
  {
    year: "2003",
    title: "Online Education Launch",
    body: "UMA expands access with a fully online curriculum, allowing students across the country to pursue healthcare careers without leaving home.",
  },
  {
    year: "2012",
    title: "ABHES Accreditation",
    body: "UMA earns full accreditation from the Accrediting Bureau of Health Education Schools (ABHES), cementing its standing as a nationally recognized healthcare institution.",
  },
  {
    year: "2018",
    title: "50,000 Alumni Milestone",
    body: "More than 50,000 graduates have launched careers in healthcare through UMA's programs — a testament to the institution's growing ripple effect of care.",
  },
  {
    year: "2022",
    title: "Glassdoor & Best Workplaces Recognition",
    body: "UMA earns Glassdoor Open Company status and is named a top workplace for employee wellbeing and career development — both internally and for its graduates.",
  },
  {
    year: "2024",
    title: "Platinum Best & Brightest Award",
    body: "UMA is named a 2024 Platinum Best and Brightest Companies to Work For® nationally, recognized for outstanding HR practices and employee engagement.",
  },
  {
    year: "2025",
    title: "Dr. Shawntel Landry Appointed Chief Academic Officer",
    body: "Dr. Landry, an education leader with over 25 years of experience, joins UMA to lead academic strategy — advancing the institution's commitment to student outcomes.",
  },
];

const Mission = () => {
  const { brand } = brandConfig;
  const brandPrimary = brand?.primary || "#0d3453";
  const brandSecondary = brand?.secondary || "#006aa6";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <img
            src={brandConfig.images.missionImage}
            alt="UMA mission"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75" />
          <div className="relative container mx-auto px-6 max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: brandSecondary }}>
              Our Journey
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              {brandConfig.company.mission}
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">{brandConfig.company.description}</p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background border-b border-border/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Founded", value: brandConfig.company.founded },
                { label: "Headquarters", value: brandConfig.company.hq || "Tampa, FL" },
                { label: "Alumni", value: "100,000+" },
                { label: "Institution", value: "Nonprofit" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl border border-border/50 p-6 text-center">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold" style={{ color: brandPrimary }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: brandSecondary }}>
                Milestones
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
                Three Decades of Impact
              </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Vertical line */}
              <div
                className="absolute left-[28px] top-0 bottom-0 w-0.5 md:left-1/2 md:-translate-x-px"
                style={{ backgroundColor: brandSecondary, opacity: 0.25 }}
              />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className={`relative flex gap-6 md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Year bubble — center on desktop */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2"
                      style={{ backgroundColor: brandSecondary }}
                    >
                      {item.year}
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto md:text-left"}`}>
                      <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
                        <h3 className="text-lg font-bold mb-1" style={{ color: brandPrimary }}>{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Culture Points */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">
                Culture Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {brandConfig.culturePoints.map((point) => (
                  <article key={point.headline} className="bg-card rounded-xl border border-border/50 p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-3" style={{ color: brandPrimary }}>{point.headline}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
