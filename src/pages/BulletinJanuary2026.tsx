import { ArrowLeft, Calendar, Heart, Target, Brain, Users, Clock, BookOpen, Award, Star, Gift, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import janHeader from "@/assets/bulletin/jan-header.jpg";
import helenMader from "@/assets/helen-mader.jpg";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-12 ${className}`}>
    <div className="container mx-auto px-6 max-w-3xl">{children}</div>
  </section>
);

const ValueChampion = ({ name, location, role, quote }: { name: string; location: string; role: string; quote: string }) => (
  <div className="bg-card rounded-xl border border-border/50 p-6 shadow-card">
    <div className="flex items-center gap-2 mb-2">
      <Star className="h-4 w-4 text-secondary flex-shrink-0" />
      <h4 className="font-bold text-foreground">{name}</h4>
    </div>
    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{location} — {role}</span>
    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{quote}</p>
  </div>
);

const BulletinJanuary2026 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img src={janHeader} alt="January 2026 BFF Bulletin" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-6">
          <Link to="/#bulletin" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to BFF Bulletin
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Your January BFF Bulletin 💙
          </h1>
          <p className="text-primary-foreground/70 mt-2">January 2026 · Behavior Frontiers</p>
        </div>
      </div>

      {/* Intro */}
      <Section>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A new year is here, bringing fresh beginnings, new goals, and exciting opportunities ahead. January is all about setting intentions, building momentum, and starting strong together as one team.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          So take a moment to reset, look ahead with optimism, and dive into this month's updates, stories, and inspiration as we kick off another year of growth and impact. 💙
        </p>
      </Section>

      {/* Holidays & Dates */}
      <Section className="bg-muted/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Holidays & Important Dates</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "National Bagel Day", date: "January 15" },
            { label: "Martin Luther King Jr. Day", date: "January 19" },
            { label: "National Mentoring Month", date: "All January" },
            { label: "Mental Wellness Month", date: "All January" },
            { label: "Braille Literacy Month", date: "All January" },
            { label: "National Thank You Month", date: "All January" },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-lg p-4 border border-border/50 flex justify-between items-center">
              <span className="font-medium text-foreground text-sm">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* BF Wrapped — What's Next */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground mb-6">BF Wrapped — What's Next for 2026</h2>
        <p className="text-muted-foreground mb-8">
          BF Wrapped gave us a look back at all we accomplished together in 2025. Here are a few simple ways to carry that momentum forward:
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: Target, title: "Start Small, Aim Smart", text: "Big goals feel more doable when you break them into smaller steps. Focus on progress over perfection." },
            { icon: Brain, title: "Clear Your Space, Clear Your Mind", text: "A small reset — organizing your workspace or taking a mental pause — can reduce stress and help you focus." },
            { icon: Heart, title: "Take Care of Yourself", text: "Your wellbeing matters. Prioritizing rest, balance, and mental health helps everything else fall into place." },
            { icon: Users, title: "Stay Connected", text: "Whether it's a teammate, mentor, or manager, staying connected can bring support, motivation, and fresh perspective." },
            { icon: Clock, title: "Be Consistent, Not Perfect", text: "Consistent actions add up over time. Showing up regularly builds momentum and makes progress sustainable." },
            { icon: BookOpen, title: "Keep Learning", text: "Even 15 minutes a day learning something new can build confidence and open doors over time." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-5 border border-border/50 shadow-card">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                <item.icon className="h-4 w-4 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mental Wellness */}
      <Section className="bg-muted/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Heart className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Mental Wellness Month</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          A new year is a meaningful opportunity to pause, reset, and check in with yourself. Caring for your mental health doesn't require big, overwhelming changes — often it's the small, intentional moments that make the biggest difference.
        </p>
        <h3 className="font-bold text-foreground mb-4">A few simple tips to start the year strong:</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Set realistic expectations — progress is better than perfection",
            "Take short breaks to pause, breathe, and reset",
            "Create routines that support rest, movement, and balance",
            "Reach out for support when you need it — you don't have to do it alone",
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
              {tip}
            </li>
          ))}
        </ul>

        <h3 className="font-bold text-foreground mb-4">Build Your 2026 One Habit at a Time</h3>
        <p className="text-muted-foreground text-sm mb-5">Healthy change doesn't have to be drastic. Try one of these weekly mini challenges:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Stretch Properly", text: "Add gentle stretches to your morning routine. Helps improve flexibility, posture, and circulation." },
            { title: "Core Strength", text: "Incorporate short core exercises like planks and bridges. A strong core supports balance and reduces back strain." },
            { title: "Get Hydrated", text: "Start your morning with a glass of water. Even small increases can support energy, focus, and digestion." },
            { title: "Breathe Easy", text: "Take 1–2 minutes of mindful breathing. Slow, deep breaths can help reset stress and calm your nervous system." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-lg p-4 border border-border/50">
              <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Great Behavior Adventure */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground mb-4">The Great Behavior Adventure</h2>
        <p className="text-muted-foreground mb-6">
          Every day, you help children grow and reach their goals. At Behavior Frontiers, we're just as committed to helping you grow, too. Introducing <strong>The Great Behavior Adventure</strong>, a BCBA development pathway designed to support you at every stage of your ABA career.
        </p>
        <div className="space-y-4">
          {[
            { name: "The First Frontier", desc: "Supports new BTs exploring the BCBA path with learning resources, Master's program guidance, and university discounts." },
            { name: "The Cognitive Frontier", desc: "For BTs enrolled in a Master's program, offering support with supervision hours and making the most of your studies." },
            { name: "The Transitional Frontier", desc: "Helps those nearing completion with monthly study groups and BCBA exam fee coverage." },
            { name: "The Final Frontier", desc: "Prepares future BCBAs with advanced study groups, exam strategies, and dedicated study time leading up to the exam." },
          ].map((frontier, i) => (
            <div key={frontier.name} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-primary">{i + 1}</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground">{frontier.name}</h4>
                <p className="text-sm text-muted-foreground">{frontier.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Living the BFF Code — Accountability */}
      <Section className="bg-muted/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Living the BFF Code: Accountability</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Accountability is about showing up with integrity, taking ownership of our actions, and following through — especially when it matters most. At Behavior Frontiers, accountability means being reliable for our clients, supportive of our teammates, and honest with ourselves as we grow and learn.
        </p>
        <p className="text-muted-foreground mb-8">
          This month, we're celebrating the BFFs who lead by example, step up when it counts, and take pride in doing the right thing, even when it's hard. 💙
        </p>

        <h3 className="font-bold text-foreground mb-4">Value Champions</h3>
        <div className="space-y-4">
          <ValueChampion
            name="Cameron Cantrell"
            location="LA Center"
            role="SBT"
            quote="In a calm and neutral manner, Cameron redirected the client, represented the trial, and reinforced the correct response. His implementation of extinction and differential reinforcement was a perfect demonstration. Cameron didn't even know he was being watched and he still did the right thing. Excellent work!"
          />
          <ValueChampion
            name="Lizbeth Rodriguez"
            location="Centennial Center"
            role="BT"
            quote="She always helps keep the center running and keeps things clean and organized. Lizbeth is the best GA at the center!"
          />
          <ValueChampion
            name="Stephanie McCullaugh"
            location="Livonia Center"
            role="BT"
            quote="Stephanie is always kind and inclusive with other staff and makes everyone feel welcome. She actively works to solve problems instead of only complaining about them. She has been a blessing to the company since she joined us."
          />
        </div>
      </Section>

      {/* Shout-Outs */}
      <Section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Shout-Outs</h2>
        </div>
        <div className="space-y-4">
          <ValueChampion
            name="Oliver Magsakay"
            location="ROC-C"
            role="SBT"
            quote="Oliver was so welcoming and helpful from my very first days at BF. To see how he interacts with other technicians and clients is a privilege to witness."
          />
          <ValueChampion
            name="Alexandria Nash"
            location="RIV"
            role="BT"
            quote="Alexandria helped me out a lot and gave me a lot of positive feedback during training! I don't think I could have gotten better if she hadn't helped me."
          />
          <ValueChampion
            name="Alexa Arrayales"
            location="SD-S"
            role="BT"
            quote="Alexa does an excellent job ensuring that all programs are implemented with fidelity. She communicates clearly and effectively with team members. Her proactive communication, reliability, and commitment to best practices have directly contributed to the client's continued success."
          />
          <ValueChampion
            name="Delilah Ramirez"
            location="OC-C"
            role="Training Coordinator"
            quote="Throughout my experience at Behavior Frontiers, she has been more than just an amazing onboarding trainer — she's been a constant source of support. During onboarding, she always had the biggest and most welcoming smile, which instantly made me feel comfortable and excited to learn."
          />
          <ValueChampion
            name="Courtney White"
            location="SAT"
            role="CD"
            quote="Courtney is doing a terrific job covering for Lyza in San Antonio. I'm really grateful to her because she's saving me a lot of headaches."
          />
        </div>
      </Section>

      {/* CEO Message */}
      <Section className="bg-muted/50">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img src={helenMader} alt="Helen Mader" className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">A Message from Helen</h2>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Helen Mader, M.A., BCBA — Founder + CEO</p>
            <p className="text-muted-foreground leading-relaxed">
              As we step into a new year, I want to take a moment to recognize the dedication and heart you bring to Behavior Frontiers each day. Every routine you reinforce, every skill you help strengthen, and every moment you show up — day after day — creates meaningful progress. Your consistency is what builds trust, fuels growth, and allows us to reach and support as many kiddos as possible.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Thank you for the important work you do and the difference you make every single day. Here's to a year of continued growth, teamwork, and impact ahead. 💙 ✨
            </p>
          </div>
        </div>
      </Section>

      {/* Referral Program */}
      <Section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Gift className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Know Someone Amazing?</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          We're growing, and when you refer someone awesome, you can earn up to $1,000 in referral bonuses 💰
        </p>
        <div className="space-y-3">
          {[
            { role: "Behavior Technician", bonus: "$500", condition: "once they reach 100 billable hours" },
            { role: "BCBA", bonus: "$1,000", condition: "after they've been with us for 90 days" },
            { role: "Administrative superstar", bonus: "$300", condition: "after they've been with us for 90 days" },
          ].map((item) => (
            <div key={item.role} className="bg-card rounded-lg p-4 border border-border/50 flex items-center justify-between gap-4">
              <div>
                <span className="font-medium text-foreground text-sm">Refer a {item.role}</span>
                <span className="block text-xs text-muted-foreground">{item.condition}</span>
              </div>
              <span className="font-bold text-secondary text-lg">{item.bonus}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Upside + Blog */}
      <Section className="bg-muted/50">
        <h2 className="text-2xl font-bold text-foreground mb-4">Save Money with Upside</h2>
        <p className="text-muted-foreground mb-4">
          From gas and groceries to dining out, you can earn cash back at 100,000+ locations nationwide. Sign up using code <strong className="text-foreground">BFRONTIERS5</strong> and earn a $5 bonus just for joining. 💙
        </p>
        <div className="mt-8">
          <h3 className="font-bold text-foreground mb-2">Have You Checked Out Our Blog?</h3>
          <p className="text-muted-foreground text-sm">
            Read our latest article: <em>Successful New Year's Resolutions for Kids with Autism</em> — practical strategies to help families turn New Year's intentions into positive, achievable steps.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Talk to Your BFFs</h2>
          <p className="text-muted-foreground">
            Whether you've got a question, a great idea, or just need to talk something through — we're only a message away. Your BFF Team is always here to support you 💙
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Behavior Frontiers · 100 N. Pacific Coast Hwy, Suite 1400, El Segundo, CA 90245
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default BulletinJanuary2026;
