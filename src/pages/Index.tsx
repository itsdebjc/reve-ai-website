import Nav from "@/components/site/Nav";
import HeroNewDesign from "@/components/site/HeroNewDesign";
import Problem from "@/components/site/Problem";
import StartHere from "@/components/site/StartHere";
import WhatChangesSection from "@/components/site/WhatChangesSection";
import ProofSection from "@/components/site/ProofSection";
import EmailCapture from "@/components/site/EmailCapture";
import Testimonial from "@/components/site/Testimonial";
import FAQ from "@/components/site/FAQ";
import FinalCtaSection from "@/components/site/FinalCtaSection";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import { setCanonical } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    document.title = "Reve · AI Marketing Studio";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "AI that knows your business. Reve builds AI marketing systems for expert-led businesses, consultants, agencies and B2B teams. Start with the Game Plan.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
    setCanonical("/");
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <HeroNewDesign />
      <Problem />
      <StartHere />
      <WhatChangesSection />
      <ProofSection />
      <EmailCapture />
      <Testimonial />
      <FAQ />
      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Index;
