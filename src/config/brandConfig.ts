/**
 * ============================================================
 * BRAND CONFIGURATION — Single Source of Truth
 * ============================================================
 *
 * To rebrand this app, edit the values below.
 * Every component imports from this file — no hunting through JSX.
 *
 * IMAGES: Replace the placeholder imports with your own assets
 *         in src/assets/ and update the import paths here.
 *
 * COLORS & FONTS: Managed in src/index.css (HSL tokens) and
 *                 tailwind.config.ts (font-family). See comments
 *                 in those files for guidance.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Award,
  Heart,
  Users,
  BookOpen,
  Scale,
  Sparkles,
  Trophy,
  MapPin,
  FlaskConical,
  TrendingUp,
  DollarSign,
  Car,
  Briefcase,
  GraduationCap,
  Gift,
  Shield,
  Rocket,
  Building2,
  Globe,
  Star,
} from "lucide-react";

// --------------- Types ---------------

export interface NavLink {
  label: string;
  href: string;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  color: "primary" | "secondary";
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  years: string;
  initials: string;
}

export interface BenefitCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  benefits: string[];
}

export interface BenefitHighlight {
  icon: LucideIcon;
  label: string;
  desc: string;
}

export interface CareerStep {
  level: number;
  title: string;
  description: string;
  perks: string[];
}

export interface Milestone {
  icon: LucideIcon;
  number: string;
  label: string;
  description: string;
}

export interface VideoItem {
  title: string;
  description: string;
  embedId: string;
}

export interface BulletinItem {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  color: "primary" | "secondary";
}

export interface NewsletterArchiveItem {
  month: string;
  emoji: string;
  downloadUrl: string;
  color: "primary" | "secondary";
  icon: LucideIcon;
  image: string;
  highlights: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
}

export interface ReferralTier {
  role: string;
  bonus: string;
  condition: string;
}

export interface CareerPerk {
  icon: LucideIcon;
  title: string;
  desc: string;
}

// --------------- Config ---------------

export const brandConfig = {
  // ── Company ──────────────────────────────────────────────
  company: {
    name: "Your Company",
    shortName: "YC",
    tagline: "Where You Belong",
    description:
      "We're on a mission to build a workplace people love — driven by purpose, culture, and growth.",
    founderName: "Jane Doe",
    founderTitle: "Founder & CEO",
    founderCredentials: "",
    founderQuote:
      "We believe in empowering our team to do their best work every single day.",
    founderMessage: [
      "I'm personally dedicated to building an organization where every team member feels valued, supported, and inspired to grow.",
      "Our team creates real impact every day. We invest in people, celebrate wins, and never stop improving.",
      "Thank you for the important work you do and the difference you make every single day.",
    ],
    address: "123 Main Street, Suite 100, Anytown, US 00000",
    mainWebsiteUrl: "#",
    copyrightHolder: "Your Company",
  },

  // ── Assets (replace these imports with your brand assets) ─
  assets: {
    logoColor: "/placeholder.svg",
    logoWhite: "/placeholder.svg",
    heroImage: "/placeholder.svg",
    teamImage: "/placeholder.svg",
    founderImage: "/placeholder.svg",
    /** Used as the featured bulletin image */
    bulletinFeaturedImage: "/placeholder.svg",
  },

  // ── SEO ──────────────────────────────────────────────────
  seo: {
    pageTitle: "Life at Your Company | Culture & Values Hub",
    metaDescription:
      "Discover the culture, values, and career opportunities at Your Company. Join a team driven by purpose and growth.",
    ogImage: "/placeholder.svg",
    favicon: "/favicon.ico",
  },

  // ── Navigation ───────────────────────────────────────────
  nav: {
    links: [
      { label: "Culture", href: "/#values" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Bulletin", href: "/#bulletin" },
      { label: "Growth", href: "/#careers" },
      { label: "Our Journey", href: "/mission" },
    ] as NavLink[],
    ctaLabel: "View Open Roles",
    ctaHref: "/careers",
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    headline: "This Is Where",
    highlightedWord: "You Belong.",
    subheadline:
      "Discover the culture, people, and purpose that make us more than a workplace — it's a community.",
    primaryCta: "Meet Our Culture",
    secondaryCta: "View Open Roles",
  },

  // ── Values ───────────────────────────────────────────────
  values: {
    badge: "What We Stand For",
    heading: "The Values Our People Live Every Day.",
    subheading:
      "These aren't words on a wall — they're how our team members show up for each other every day.",
    items: [
      {
        icon: Award,
        title: "Excellence & Quality",
        description:
          "Data-driven work, measurable outcomes, and a relentless commitment to doing things right.",
        highlights: ["Best Practices", "Continuous Improvement", "Measurable Outcomes"],
        color: "primary",
      },
      {
        icon: Heart,
        title: "Inclusion & Diversity",
        description:
          "A safe, welcoming environment where diverse people thrive together.",
        highlights: ["Cultural Competency", "Safe Spaces", "Diverse Community"],
        color: "secondary",
      },
      {
        icon: BookOpen,
        title: "Learning & Development",
        description:
          "Extensive training, mentorship programs, and clear career pathways.",
        highlights: ["Training", "Mentorship", "Career Pathways"],
        color: "primary",
      },
      {
        icon: Users,
        title: "Collaboration",
        description:
          "A team-oriented approach where people share wins and grow together.",
        highlights: ["Cross-functional Teams", "Partnership", "Shared Success"],
        color: "secondary",
      },
      {
        icon: Scale,
        title: "Work-Life Balance",
        description:
          "Flexible scheduling, social events, and genuine care for your wellness.",
        highlights: ["Flexible Schedules", "Wellness Focus", "Recognition"],
        color: "primary",
      },
      {
        icon: Sparkles,
        title: "Community & Celebration",
        description:
          "We celebrate each other — milestones, achievements, and the daily moments that matter.",
        highlights: ["Team Events", "Celebrations", "Connection"],
        color: "secondary",
      },
    ] as ValueItem[],
    quote:
      "We don't just hire employees. We welcome family. We celebrate people. We grow together.",
  },

  // ── Testimonials ─────────────────────────────────────────
  testimonials: {
    badge: "Our People",
    heading: "Real Stories from Real Team Members.",
    subheading: "The people who make us special, in their own words.",
    items: [
      {
        quote:
          "The mentorship I received here transformed my career. I started at entry level and now I'm leading a team. The growth opportunities are truly unmatched.",
        name: "Team Member A",
        role: "Senior Lead",
        years: "5 years",
        initials: "TA",
      },
      {
        quote:
          "What sets this company apart is how genuinely they invest in your development. Every day I'm learning something that makes me better at what I do.",
        name: "Team Member B",
        role: "Specialist",
        years: "3 years",
        initials: "TB",
      },
      {
        quote:
          "I've never worked somewhere that celebrates its team the way we do. From bulletin shoutouts to community events, you truly feel like you belong.",
        name: "Team Member C",
        role: "Senior Specialist",
        years: "4 years",
        initials: "TC",
      },
    ] as Testimonial[],
  },

  // ── Benefits ─────────────────────────────────────────────
  benefits: {
    badge: "Why Work With Us",
    heading: "More Than Just a Job —",
    headingHighlight: "It's a Career You'll Love",
    subheading:
      "From day one, you're supported with competitive pay, comprehensive benefits, and real opportunities to grow.",
    categories: [
      {
        title: "Benefits for All Employees",
        icon: Heart,
        color: "text-secondary",
        benefits: [
          "Competitive pay",
          "Initial and ongoing paid training",
          "Opportunities for career advancement",
          "Performance and promotion raises",
          "Paid mileage and drive time",
          "Paid professional liability insurance",
        ],
      },
      {
        title: "Company Perks",
        icon: Gift,
        color: "text-primary",
        benefits: [
          "Employee Referral Program with generous bonuses",
          "Wellness and discount programs",
          "Company socials and team events",
          "Employee Assistance Program",
        ],
      },
      {
        title: "Full-Time Benefits",
        icon: Shield,
        color: "text-secondary",
        benefits: [
          "Medical, dental, and vision insurance",
          "401k Plan with company match",
          "Paid Personal Time Off and Sick Leave",
          "Paid Holidays",
        ],
      },
      {
        title: "Growth & Education",
        icon: GraduationCap,
        color: "text-primary",
        benefits: [
          "Mentorship opportunities",
          "Tuition reduction at partner programs",
          "Professional development stipend",
          "Paid conference attendance",
        ],
      },
    ] as BenefitCategory[],
    highlights: [
      { icon: DollarSign, label: "Competitive Pay", desc: "Market-rate compensation" },
      { icon: Car, label: "Paid Mileage", desc: "Drive time covered" },
      { icon: Users, label: "Team Socials", desc: "Events & gatherings" },
      { icon: Briefcase, label: "Career Growth", desc: "Clear advancement paths" },
    ] as BenefitHighlight[],
    testimonialQuote:
      "Fantastic benefits and perks, competitive salary, and a team atmosphere.",
    testimonialAttribution: "— Team Member",
  },

  // ── Career Pathways ──────────────────────────────────────
  careerPathways: {
    badge: "Grow With Us",
    heading: "We Invest in Your Career — Every Step",
    subheading:
      "Clear pathways, real mentorship, and a culture that champions your professional growth from day one.",
    ctaLabel: "Start Your Journey",
    steps: [
      {
        level: 1,
        title: "Entry Level",
        description:
          "Start your journey with hands-on training, mentorship, and real impact from day one.",
        perks: ["Comprehensive onboarding", "Paired with a mentor", "Immediate impact"],
      },
      {
        level: 2,
        title: "Senior Individual Contributor",
        description:
          "Deepen your expertise and begin leading projects with greater independence.",
        perks: ["Advanced training", "Peer leadership", "Development opportunities"],
      },
      {
        level: 3,
        title: "Manager",
        description:
          "Lead programs, supervise team members, and drive operational excellence.",
        perks: ["Supervision experience", "Strategy involvement", "Team leadership"],
      },
      {
        level: 4,
        title: "Director & Leadership",
        description:
          "Shape the future of the organization at the highest levels.",
        perks: ["Strategic leadership", "Program development", "Organizational impact"],
      },
    ] as CareerStep[],
  },

  // ── Milestones / Stats ───────────────────────────────────
  milestones: {
    badge: "By the Numbers",
    heading: "The Community You'd Be Joining",
    subheading:
      "Real numbers that reflect a real commitment to our people and the communities we serve.",
    items: [
      {
        icon: Trophy,
        number: "10+",
        label: "Years in Business",
        description: "Building careers and making an impact since day one",
      },
      {
        icon: MapPin,
        number: "10+",
        label: "Locations",
        description: "A growing footprint where you can grow close to home",
      },
      {
        icon: FlaskConical,
        number: "500+",
        label: "Clients Served",
        description: "The impact our team creates every single day",
      },
      {
        icon: TrendingUp,
        number: "200+",
        label: "Team Members & Growing",
        description: "Professionals across every function — and still growing",
      },
    ] as Milestone[],
  },

  // ── Videos ───────────────────────────────────────────────
  videos: {
    badge: "Culture & Values",
    heading: "Our Culture in",
    headingHighlight: "Action.",
    subheading:
      "See the people, passion, and purpose behind our team — straight from our leadership.",
    items: [] as VideoItem[],
  },

  // ── Bulletin / Newsletter ────────────────────────────────
  bulletin: {
    badge: "Company Bulletin",
    heading: "Celebrating Our People, Every Day.",
    subheading:
      "Shoutouts, milestones, wellness spotlights, and the stories that make our community feel like home.",
    featuredTitle: "Latest Bulletin",
    featuredDescription:
      "New beginnings, celebrations, wellness focus, and incredible team momentum.",
    featuredLinkText: "Read Full Bulletin",
    featuredLinkUrl: "/bulletin/latest",
    items: [
      {
        icon: Heart,
        category: "Wellness",
        title: "Take Care of Yourself",
        description:
          "Remember: progress over perfection. Stay connected with your team and reach out when you need support.",
        color: "secondary",
      },
      {
        icon: Star,
        category: "Recognition",
        title: "Celebrating Our Team",
        description:
          "Shoutout to the incredible people who go above and beyond every day. Your dedication inspires us all.",
        color: "primary",
      },
      {
        icon: Award,
        category: "Spotlight",
        title: "Team Member of the Month",
        description:
          "Congratulations to our amazing team members who went above and beyond this month.",
        color: "secondary",
      },
    ] as BulletinItem[],
    newsletterArchive: [] as NewsletterArchiveItem[],
  },

  // ── Mission / Timeline ───────────────────────────────────
  mission: {
    badge: "Our Journey",
    heading: "Mission-Driven from",
    headingHighlight: "Day One.",
    subheading:
      "Every step has been guided by one purpose: making a meaningful difference through our work.",
    founderSectionBadge: "A Message from Our Founder",
    founderHeadline:
      "We believe in empowering our team to do their best work every single day.",
    videoBadge: "Watch",
    videoHeading: "Our Guiding Principles",
    videoSubheading: "Our founder shares the vision behind the company",
    /** Set to a YouTube embed ID, or empty string to hide the video section */
    videoEmbedId: "",
    timelineBadge: "Our History",
    timelineHeading: "A Decade of Growth",
    timelineSubheading:
      "From a small team to a thriving organization serving communities nationwide.",
    events: [
      {
        year: "2015",
        title: "Company Founded",
        description:
          "Started with a singular mission: deliver exceptional service rooted in expertise and compassion.",
        icon: Rocket,
        highlight: true,
      },
      {
        year: "2017",
        title: "First Expansion",
        description:
          "Expanded into new markets, bringing our services to more communities.",
        icon: MapPin,
      },
      {
        year: "2019",
        title: "Team Milestone",
        description: "Grew the team to over 100 dedicated professionals.",
        icon: Users,
      },
      {
        year: "2021",
        title: "Technology Launch",
        description:
          "Launched proprietary technology to drive better outcomes and operational efficiency.",
        icon: FlaskConical,
        highlight: true,
      },
      {
        year: "2023",
        title: "National Footprint",
        description:
          "Reached multiple locations across the country with diverse service settings.",
        icon: Globe,
      },
      {
        year: "2025",
        title: "Continued Growth",
        description:
          "A growing team of dedicated professionals — and still expanding. The best is yet to come.",
        icon: TrendingUp,
        highlight: true,
      },
    ] as TimelineEvent[],
  },

  // ── Careers Page ─────────────────────────────────────────
  careers: {
    heroHeading: "Join Our Team",
    heroSubheading:
      "We're looking for talented individuals who want to elevate their careers. Find where you belong.",
    perks: [
      { icon: GraduationCap, title: "Paid Training", desc: "Comprehensive onboarding program" },
      { icon: Users, title: "Mentorship", desc: "Grow alongside talented colleagues" },
      { icon: Heart, title: "Meaningful Impact", desc: "Help people reach their goals" },
      { icon: Building2, title: "Career Growth", desc: "Clear advancement pathways" },
    ] as CareerPerk[],
    ctaHeading: "Want to learn more about life here?",
    ctaSubheading: "Explore our culture, values, and team stories.",
    ctaLabel: "Explore Our Culture",
  },

  // ── Bulletin Detail Page (template) ──────────────────────
  bulletinDetail: {
    /** Set to true to enable the /bulletin/latest route */
    enabled: false,
    title: "Your Latest Bulletin",
    subtitle: "Company Bulletin",
    intro: [
      "A new edition is here, bringing fresh updates, recognition, and resources for the team.",
    ],
    sections: [] as Array<{
      heading: string;
      content: string;
    }>,
    valueChampions: [] as Array<{
      name: string;
      location: string;
      role: string;
      quote: string;
    }>,
    shoutOuts: [] as Array<{
      name: string;
      location: string;
      role: string;
      quote: string;
    }>,
    referralProgram: {
      heading: "Know Someone Amazing?",
      description:
        "We're growing! Refer talented people and earn referral bonuses.",
      tiers: [] as ReferralTier[],
    },
  },

  // ── Footer ───────────────────────────────────────────────
  footer: {
    description:
      "Building careers, community, and futures — driven by purpose and heart.",
    quickLinks: [
      { label: "Culture & Values", href: "/" },
      { label: "Our Journey", href: "/mission" },
      { label: "Open Roles", href: "/careers" },
    ] as NavLink[],
    mainWebsiteLink: { label: "Main Website", url: "#" },
    connectHeading: "Connect",
    connectText:
      "Ready to make a difference? We'd love to hear from you. Explore our open positions and find where you belong.",
  },
};
