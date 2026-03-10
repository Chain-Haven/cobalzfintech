import { Navigation } from "@/components/Navigation";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
import { Security } from "./sections/Security";
import { FAQ } from "./sections/FAQ";
import { CTASection } from "./sections/CTASection";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Security />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
