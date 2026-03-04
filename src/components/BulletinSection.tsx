import { Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { brandConfig } from "@/config/brandConfig";

const BulletinSection = () => {
  const { bulletin, images } = brandConfig;

  return (
    <section id="bulletin" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Bulletin</span>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative z-10 p-8 sm:p-10 min-h-[420px] flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 w-fit mb-5">
              <Newspaper className="h-3 w-3 text-white" />
              <span className="text-xs font-semibold text-white">Featured</span>
            </div>

            <h3 className="text-3xl sm:text-4xl text-white font-bold mb-4 max-w-3xl">{bulletin.headline}</h3>
            <p className="text-white/90 max-w-3xl leading-relaxed">{bulletin.body}</p>

            <div className="mt-auto pt-8">
              {bulletin.ctaUrl.startsWith("/") ? (
                <Link
                  to={bulletin.ctaUrl}
                  className="inline-flex items-center gap-2 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  {bulletin.cta || "Read Full Bulletin"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <a
                  href={bulletin.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  {bulletin.cta || "Read Full Bulletin"}
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
