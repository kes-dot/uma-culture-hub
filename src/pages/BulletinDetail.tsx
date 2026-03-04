import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brandConfig";

const BulletinDetail = () => {
  const { bulletin, company, images } = brandConfig;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/#bulletin"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Bulletin
          </Link>

          <img
            src={images.ogImage}
            alt={bulletin.headline}
            className="w-full h-[320px] object-cover rounded-2xl mb-8"
          />

          <h1 className="text-4xl font-bold text-foreground mb-3">{bulletin.headline}</h1>
          <p className="text-muted-foreground mb-8">{company.name}</p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{bulletin.body}</p>

          <a
            href={bulletin.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:opacity-90"
          >
            {bulletin.cta}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BulletinDetail;
