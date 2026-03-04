import { Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { brandConfig } from "@/config/brandConfig";

const BulletinSection = () => {
  const { bulletin, images, brand } = brandConfig;
  const brandColor = brand?.primary || "#0d3453";
  const brandSecondary = brand?.secondary || "#006aa6";

  return (
    <section id="bulletin" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: brandColor }}>Bulletin</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">Latest News From UMA</h2>
          <p className="text-muted-foreground text-lg">
            Highlights and announcements from our mission-driven academic community.
          </p>
        </div>

        <article className="relative rounded-2xl overflow-hidden min-h-[420px]">
          <img
            src={images.missionImage}
            alt="UMA bulletin feature"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

          <div className="relative z-10 p-8 sm:p-12 min-h-[420px] flex flex-col justify-end">
            <div className="max-w-3xl">
              {/* Featured pill — solid brand color */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-4"
                style={{ backgroundColor: brandSecondary, border: `1.5px solid ${brandSecondary}` }}
              >
                <Newspaper className="h-3 w-3 text-white" />
                <span className="text-xs font-semibold text-white tracking-wide">Featured</span>
              </div>

              {/* Headline — brand secondary color for contrast + brand identity */}
              <h3
                className="text-3xl sm:text-4xl font-bold mb-3 leading-tight"
                style={{ color: brandSecondary }}
              >
                {bulletin.headline}
              </h3>

              <p className="text-white/90 leading-relaxed mb-6">{bulletin.body}</p>

              {bulletin.ctaUrl.startsWith("/") ? (
                <Link
                  to={bulletin.ctaUrl}
                  className="inline-flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity"
                >
                  {bulletin.cta || "Read Full Announcement"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <a
                  href={bulletin.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity"
                >
                  {bulletin.cta || "Read Full Announcement"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BulletinSection;
