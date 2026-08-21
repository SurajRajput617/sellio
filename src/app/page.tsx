import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import WinnersShowcase from "@/components/WinnersShowcase";
import HowItWorks from "@/components/HowItWorks";
import EntryHowItWorks from "@/components/EntryHowItWorks";
import ProductisedSystem from "@/components/ProductisedSystem";
import DashboardSection from "@/components/DashboardSection";
import NewsletterSection from "@/components/icons/NewsletterSection";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <WinnersShowcase />
        <HowItWorks />
         <EntryHowItWorks />
        <ProductisedSystem />
        <DashboardSection />
        <NewsletterSection />
        <Pricing />
        <Support />
        <CTA />
        <FAQ />
        <SocialMediaSection />
      </main>
      <Footer />
    </>
  );
}
