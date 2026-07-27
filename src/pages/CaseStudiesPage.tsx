import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import { setCanonical } from "@/lib/seo";

const CASES = [
  {
    tag: "01 · Advisory Firm",
    stat: "60% Faster Proposals",
    problem:
      "Senior partners were spending 8 plus hours on every proposal. AI drafts sounded generic and still needed heavy editing.",
    built:
      "A proposal system tied to the firm's voice, offers, proof and sales process.",
    result:
      "Proposal time dropped 60%, and the quality went up on their biggest pursuits.",
    accent: "#7ED2F2",
  },
  {
    tag: "02 · Boutique Agency",
    stat: "3X More Publishing",
    problem:
      "Strong ideas, but their thought leadership sounded different from every person who wrote it.",
    built:
      "A system that captured their voice, point of view and content rules, plus a repeatable publishing workflow.",
    result: "They tripled how often they publish, and it all sounds like them.",
    accent: "#F0AAC0",
  },
  {
    tag: "03 · B2B Software Team",
    stat: "80% Less Editing",
    problem:
      "The team was using AI but spent more time fixing the output than using it.",
    built:
      "An end to end workflow for case studies, launch content and campaign drafts.",
    result: "Editing rounds went from five to one, and the work got stronger.",
    accent: "#7EDCB8",
  },
];

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "Case Studies · Reve";
    setCanonical("/case-studies");
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Real systems, real results. How expert-led teams use AI to do real work, in their voice, on their terms."
    );
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <section className="pt-32 pb-20 px-6 md:px-16">
        <div className="mx-auto max-w-[1280px]">
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#7ED2F2] uppercase mb-6"
          >
            Case Studies
          </p>
          <h1
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#F2E4D8] text-5xl md:text-6xl leading-[1.05] uppercase mb-8"
          >
            Real systems. Real results.
          </h1>
          <p className="font-['Inter'] text-[#E8E1D8] text-base md:text-lg leading-relaxed max-w-2xl">
            A look at how expert led teams use AI to do real work, in their
            voice, on their terms.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">
        <div className="mx-auto max-w-[1280px] space-y-8">
          {CASES.map((c) => (
            <div
              key={c.tag}
              style={{ borderColor: `${c.accent}40` }}
              className="bg-[#1D2224] border rounded-2xl p-10 grid md:grid-cols-[240px_1fr] gap-10"
            >
              <div>
                <p
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", color: c.accent }}
                  className="text-xs font-bold uppercase mb-4"
                >
                  {c.tag}
                </p>
                <div
                  style={{ fontFamily: "'Anton', sans-serif", color: c.accent }}
                  className="text-3xl uppercase leading-tight"
                >
                  {c.stat}
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-8 font-['Inter']">
                <div>
                  <p style={{ fontFamily: "'Anton', sans-serif" }} className="text-[#F2E4D8]/50 text-xs uppercase mb-2">
                    The Problem
                  </p>
                  <p className="text-[#E8E1D8] text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'Anton', sans-serif" }} className="text-[#F2E4D8]/50 text-xs uppercase mb-2">
                    What We Built
                  </p>
                  <p className="text-[#E8E1D8] text-sm leading-relaxed">{c.built}</p>
                </div>
                <div>
                  <p style={{ fontFamily: "'Anton', sans-serif" }} className="text-[#F2E4D8]/50 text-xs uppercase mb-2">
                    The Result
                  </p>
                  <p className="text-[#E8E1D8] text-sm leading-relaxed">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1D2224] py-20 md:py-24 px-6 text-center border-y border-white/10">
        <div className="mx-auto max-w-[720px]">
          <h2
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#F2E4D8] text-3xl md:text-4xl uppercase leading-[1.15] mb-6"
          >
            Want to see what this could look like in your business?
          </h2>
          <p className="font-['Inter'] text-[#E8E1D8] text-lg leading-relaxed mb-9">
            Tell me what feels slow, scattered or hard to keep consistent.
            I'll help you find the system that belongs underneath it.
          </p>
          <a
            href="https://calendly.com/deb-xjsk/callwithdeb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="text-sm bg-[#5FAF95] text-[#20262A] px-8 py-4 rounded-[10px] inline-block hover:opacity-90 transition-opacity uppercase"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
