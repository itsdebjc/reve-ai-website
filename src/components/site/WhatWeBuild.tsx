import marketingAsset from "@/assets/system-marketing.jpg.asset.json";
import websiteImage from "@/assets/system-website.jpg";
import dashboardImage from "@/assets/system-ecommerce-dashboard.png";
import proposalAsset from "@/assets/system-proposal.jpg.asset.json";
import contentAsset from "@/assets/system-content.jpg.asset.json";
import founderAsset from "@/assets/system-founder.jpg.asset.json";
import { CALENDLY_URL } from "@/lib/links";

const SYSTEMS = [
  { label: "AI Brand Hub", image: marketingAsset.url, alt: "AI Brand Hub preview showing brand voice, messaging and connected content" },
  { label: "AI Website", image: websiteImage, alt: "AI-built website homepage preview" },
  { label: "Business Dashboard", image: dashboardImage, alt: "Business dashboard with live conversion rate, revenue source and recent orders" },
  { label: "Proposal System", image: proposalAsset.url, alt: "Proposal System preview with a draft editor" },
  { label: "Content System", image: contentAsset.url, alt: "Content System preview with a weekly calendar" },
  { label: "Marketing Assistant", image: founderAsset.url, alt: "Marketing Assistant chat and daily briefing preview" },
];

const WhatWeBuild = () => {
  return (
    <section className="bg-[#1D2224] py-24 md:py-32 px-6 md:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center mb-14">
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#7ED2F2] uppercase mb-6"
          >
            What We Build
          </p>
          <h2
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#F2E4D8] text-3xl md:text-4xl uppercase mb-5"
          >
            Systems we've built.
          </h2>
          <p className="font-['Inter'] text-[#F2E4D8]/65 text-lg max-w-2xl mx-auto">
            Every business is different. These are examples of the AI-ready
            marketing systems we've built for clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SYSTEMS.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#20262A] hover:border-[#7ED2F2]/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="w-full h-full object-cover scale-125 origin-center transition-transform duration-500 group-hover:scale-[1.3]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3
                  style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
                  className="text-[#F2E4D8] text-lg uppercase group-hover:text-[#E893AC] transition-colors"
                >
                  {s.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <h3
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#F2E4D8] text-2xl md:text-3xl uppercase mb-4"
          >
            Don't see what you need? We'll build the system that works for
            your business.
          </h3>
          <p className="font-['Inter'] text-[#F2E4D8]/60 text-base mb-8 max-w-xl mx-auto">
            These are examples, not the limit. Every system we build is
            custom to what your business actually needs.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="inline-flex text-sm bg-[#E893AC] text-[#20262A] px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity uppercase"
          >
            Book a Call →
          </a>
        </div>
      </div>
    </section>
  );
};
export default WhatWeBuild;
