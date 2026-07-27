import Nav from "@/components/site/Nav";
import ServicesHero from "@/components/site/ServicesHero";
import ServiceCards from "@/components/site/ServiceCards";
import WhatWeBuild from "@/components/site/WhatWeBuild";
import FounderCtaBand from "@/components/site/FounderCtaBand";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import { setCanonical } from "@/lib/seo";

const Services = () => {
  useEffect(() => {
    document.title = "Services · Reve";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "AI Marketing Services: the Game Plan audit, a custom AI Marketing System build, and ongoing AI Growth Partnership.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
    setCanonical("/services");
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <ServicesHero />
      <ServiceCards />
      <WhatWeBuild />
      <FounderCtaBand />
      <Footer />
    </main>
  );
};

export default Services;
