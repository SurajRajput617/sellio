import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import ProductisedSystem from "@/components/ProductisedSystem";
import DashboardSection from "@/components/DashboardSection";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <HowItWorks />
        <ProductisedSystem />
        <DashboardSection />
        <Pricing />
        <Support />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
