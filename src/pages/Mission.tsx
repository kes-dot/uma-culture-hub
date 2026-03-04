import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brandConfig";

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="relative py-24 overflow-hidden">
          <img
            src={brandConfig.images.missionImage}
            alt="UMA mission"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75" />
          <div className="relative container mx-auto px-6 max-w-4xl text-center">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Journey</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              {brandConfig.company.mission}
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">{brandConfig.company.description}</p>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Founded</p>
                <p className="text-3xl font-bold text-foreground mt-2">{brandConfig.company.founded}</p>
              </div>
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Headquarters</p>
                <p className="text-3xl font-bold text-foreground mt-2">{brandConfig.company.hq}</p>
              </div>
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Institution</p>
                <p className="text-3xl font-bold text-foreground mt-2">Nonprofit</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">
                Culture Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {brandConfig.culturePoints.map((point) => (
                  <article key={point.headline} className="bg-card rounded-xl border border-border/50 p-6 shadow-card">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{point.headline}</h3>
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
