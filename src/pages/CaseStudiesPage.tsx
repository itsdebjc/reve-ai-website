import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import heroImg from "@/assets/hero-cherry-blossom.jpg";

type CaseStudy = {
  n: string;
  client: string;
  industry: string;
  stat: string;
  statLabel: string;
  challenge: string;
  outcome: string;
};

const cases: CaseStudy[] = [
  {
    n: "Case 01",
    client: "Advisory Firm",
    industry: "Professional Services",
    stat: "60%",
    statLabel: "Faster Proposals",
    challenge:
      "Senior partners were spending 8+ hours per proposal, and AI drafts felt generic.",
    outcome:
      "Custom proposal workflow cut drafting time by 60% while improving win rate on tier-one pursuits.",
  },
  {
    n: "Case 02",
    client: "Boutique Agency",
    industry: "Creative & Strategy",
    stat: "3×",
    statLabel: "Publishing Cadence",
    challenge:
      "Inconsistent voice across thought leadership made it hard to scale content production.",
    outcome:
      "Brand intelligence system unified voice across 4 senior contributors and tripled publishing cadence.",
  },
  {
    n: "Case 03",
    client: "B2B SaaS",
    industry: "Technology",
    stat: "80%",
    statLabel: "Less Editing",
    challenge:
      "Marketing team relied on AI but spent more time fixing output than producing it.",
    outcome:
      "End-to-end workflow for case studies and launch content reduced editing rounds from 5 to 1.",
  },
];

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "Case Studies — Reve AI";
    const desc =
      "Real systems, real outcomes. See how expert-led teams use Reve to make AI a dependable part of their marketing workflow.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* HERO with image */}
      <section className="relative isolate pt-44 pb-32 md:pt-56 md:pb-40 border-b border-hairline overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />

        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="label-eyebrow mb-6">— Case Studies</p>
          <h1 className="display-serif text-5xl md:text-7xl mb-8 leading-[1.05]">
            Real systems.{" "}
            <span className="display-italic">Real outcomes.</span>
          </h1>
          <p className="text-foreground/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A look at how expert-led teams are using Reve to make AI a
            dependable part of their marketing workflow.
          </p>
        </div>
      </section>

      {/* CASES */}
      <section className="py-24 md:py-32 border-b border-hairline">
        <div className="mx-auto max-w-5xl px-6">
          {cases.map((c, i) => (
            <article
              key={c.n}
              className={`grid md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-20 ${
                i !== 0 ? "border-t border-hairline" : ""
              }`}
            >
              {/* Left: meta + stat */}
              <div className="md:col-span-5">
                <p className="label-mono text-foreground/55 mb-4">{c.n}</p>
                <h2 className="display-serif text-3xl md:text-4xl mb-2">
                  {c.client}
                </h2>
                <p className="label-mono text-foreground/55 mb-12">
                  {c.industry}
                </p>

                <p className="display-serif text-5xl md:text-6xl text-foreground leading-none mb-3">
                  {c.stat}
                </p>
                <p className="label-mono text-foreground/55">{c.statLabel}</p>
              </div>

              {/* Right: challenge + outcome */}
              <div className="md:col-span-7 md:pt-2 space-y-10">
                <div>
                  <p className="label-mono text-foreground/55 mb-3">
                    Challenge
                  </p>
                  <p className="text-foreground/85 leading-relaxed">
                    {c.challenge}
                  </p>
                </div>
                <div>
                  <p className="label-mono text-foreground/55 mb-3">Outcome</p>
                  <p className="text-foreground/85 leading-relaxed">
                    {c.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
