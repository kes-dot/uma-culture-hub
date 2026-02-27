import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brandConfig";

/**
 * Generic Bulletin Detail Page Template
 *
 * This page renders content from brandConfig.bulletinDetail.
 * If bulletinDetail.enabled is false, it shows a placeholder message.
 * Populate brandConfig.bulletinDetail with your content to activate.
 */
const BulletinDetail = () => {
  const { bulletinDetail, company, assets } = brandConfig;

  if (!bulletinDetail.enabled) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Bulletin Coming Soon</h1>
            <p className="text-muted-foreground mb-8">
              This page will feature your company bulletin once content is added to the brand configuration.
            </p>
            <Link
              to="/#bulletin"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Bulletin
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/#bulletin"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Bulletin
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {bulletinDetail.title}
          </h1>
          <p className="text-muted-foreground mb-8">{bulletinDetail.subtitle} · {company.name}</p>

          {/* Intro */}
          <div className="space-y-4 mb-12">
            {bulletinDetail.intro.map((paragraph, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {/* Sections */}
          {bulletinDetail.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Value Champions */}
          {bulletinDetail.valueChampions.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Value Champions</h2>
              <div className="space-y-4">
                {bulletinDetail.valueChampions.map((champion) => (
                  <div key={champion.name} className="bg-card rounded-xl border border-border/50 p-6 shadow-card">
                    <h4 className="font-bold text-foreground">{champion.name}</h4>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {champion.location} — {champion.role}
                    </span>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{champion.quote}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Shout-Outs */}
          {bulletinDetail.shoutOuts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Shout-Outs</h2>
              <div className="space-y-4">
                {bulletinDetail.shoutOuts.map((shoutout) => (
                  <div key={shoutout.name} className="bg-card rounded-xl border border-border/50 p-6 shadow-card">
                    <h4 className="font-bold text-foreground">{shoutout.name}</h4>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {shoutout.location} — {shoutout.role}
                    </span>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{shoutout.quote}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Referral Program */}
          {bulletinDetail.referralProgram.tiers.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {bulletinDetail.referralProgram.heading}
              </h2>
              <p className="text-muted-foreground mb-6">{bulletinDetail.referralProgram.description}</p>
              <div className="space-y-3">
                {bulletinDetail.referralProgram.tiers.map((tier) => (
                  <div key={tier.role} className="bg-card rounded-lg p-4 border border-border/50 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-medium text-foreground text-sm">Refer a {tier.role}</span>
                      <span className="block text-xs text-muted-foreground">{tier.condition}</span>
                    </div>
                    <span className="font-bold text-secondary text-lg">{tier.bonus}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BulletinDetail;
