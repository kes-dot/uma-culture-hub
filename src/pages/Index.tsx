import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BulletinSection from "@/components/BulletinSection";
import AwardsSection from "@/components/AwardsSection";
import CareerPathways from "@/components/CareerPathways";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <TestimonialsSection />
        <BulletinSection />
        <AwardsSection />
        <CareerPathways />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
