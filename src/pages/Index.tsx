import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Ticker from "@/components/site/Ticker";
import Problem from "@/components/site/Problem";
import Services from "@/components/site/Services";
import InPractice from "@/components/site/InPractice";
import HowWeWork from "@/components/site/HowWeWork";
import CaseStudies from "@/components/site/CaseStudies";
import Testimonial from "@/components/site/Testimonial";
import Founder from "@/components/site/Founder";
import LeadMagnet from "@/components/site/LeadMagnet";
import FinalCTA from "@/components/site/FinalCTA";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Reve AI — We turn AI into real marketing";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Reve builds the right AI setup for your team so you can create stronger marketing, move faster, and use AI in a way that fits the work you already do.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <Services />
      <InPractice />
      <HowWeWork />
      <CaseStudies />
      <Testimonial />
      <Founder />
      <LeadMagnet />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
