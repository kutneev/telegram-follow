"use client";

import { useState } from "react";
import { faqItems, pricingPlans, type PricingPlan } from "@/data/content";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { LeadForm } from "./LeadForm";
import { MobileCta } from "./MobileCta";
import { Pricing } from "./Pricing";
import { ResultFactors } from "./ResultFactors";
import { Testimonials } from "./Testimonials";
import { TrustBadges } from "./TrustBadges";

export function LandingPage() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const scrollTo = (id: string) => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
  };

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    requestAnimationFrame(() => scrollTo("lead-form"));
  };

  return (
    <main>
      <Header onCtaClick={() => scrollTo("lead-form")} />
      <Hero onPrimaryClick={() => scrollTo("lead-form")} onPricingClick={() => scrollTo("pricing")} />
      <TrustBadges />
      <HowItWorks />
      <Pricing plans={pricingPlans} selectedPlan={selectedPlan} onSelectPlan={handlePlanSelect} />
      <ResultFactors />
      <Testimonials />
      <FAQ items={faqItems} />
      <LeadForm plans={pricingPlans} selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
      <Footer />
      <MobileCta plan={selectedPlan ?? pricingPlans[0]} onSelectPlan={handlePlanSelect} />
    </main>
  );
}
