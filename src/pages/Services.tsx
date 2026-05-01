import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Ticker from "@/components/site/Ticker";
import TrustedLogos from "@/components/site/TrustedLogos";
import Testimonial from "@/components/site/Testimonial";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import heroImg from "@/assets/hero-cherry-blossom.jpg";

const includedItems = [
  {
    title: "Brand Intelligence Foundation",
    body: "Your voice, positioning and content rules captured and ready to use.",
  },
  {
    title: "3 to 5 Custom Workflows",
    body: "Built around the work that matters most to your team.",
  },
  {
    title: "Tool Setup",
    body: "Working environment configured from day one so the system runs cleanly.",
  },
  {
    title: "Team Training",
    body: "Inside the real system, using real work, so your team can run it with confidence.",
  },
];

const buildBullets = [
  "You're using AI but you're not sure if you're using it right",
  "You have the tools (Claude, ChatGPT, Slack, email, Shopify, Klaviyo) but they're not working together as a system",
  "Everyone on your team is working differently with AI",
  "You're spending more time fixing outputs than actually creating",
];

const sessionOutcomes = [
  "Where AI fits in your business and where it does not",
  "A list of what to stop doing manually right now",
  "Your three highest-value workflow opportunities",
  "A clear next step",
];

const calendly = "https://calendly.com/deb-xjsk/callwithdeb";

const Services = () => {
  useEffect(() => {
    document.title = "Services — Reve AI";
    const desc =
      "A custom AI system built for your business, or a focused session to show you exactly where to start.";
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

      {/* HERO */}
      <section className="relative isolate pt-40 pb-24 md:pt-52 md:pb-32 border-b border-hairline overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />

        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="label-eyebrow mb-6">— Services</p>
          <h1 className="display-serif text-5xl md:text-7xl mb-8">
            AI tools are everywhere. <span className="display-italic">Setups are rare.</span>
          </h1>
          <p className="text-foreground/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Most founders have AI tools. Almost none have the system behind them. Without clear workflows, team alignment, and consistency, output quality suffers. You spend as much time fixing AI drafts as you would writing them. And your token bill keeps climbing. The fix is a custom system built around your business.
          </p>
        </div>
      </section>

      {/* SERVICE 01 — THE AI BUILD */}
      <section id="system" className="py-32 md:py-44 border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative border-l-4 border-primary bg-surface/50 p-8 md:p-12 mb-20">
            <div className="absolute top-8 right-8 text-7xl font-bold text-foreground/10">01</div>

            <p className="label-mono text-primary/70 mb-4 inline-block border border-primary/30 px-3 py-1 text-xs">
              SERVICE 01 · CUSTOM BUILD · TEAM TRAINING
            </p>
            <h2 className="display-serif text-4xl md:text-5xl mb-6">
              The <span className="display-italic">AI Setup</span>
            </h2>
            <p className="font-serif font-semibold italic text-primary text-xl md:text-2xl leading-snug mb-8">
              Move faster. Stronger output. Everything stays consistent.
            </p>
            <div className="hairline w-12 mb-8" />
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
              We build the workflows, align your team, and make sure everything works together. So you move faster, output quality improves, and nothing falls through the cracks.
            </p>
          </div>

          <p className="label-eyebrow mb-10">— What's Included</p>

          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline mb-16">
            {includedItems.map((s) => (
              <div
                key={s.title}
                className="bg-background p-8 md:p-12 flex flex-col"
              >
                <h3 className="display-serif text-2xl md:text-3xl mb-5">
                  {s.title}
                </h3>
                <div className="hairline w-10 mb-5" />
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="border border-hairline bg-surface p-10 md:p-14">
            <p className="label-eyebrow mb-6">— Right For You If</p>
            <ul className="space-y-4 max-w-2xl mb-10">
              {buildBullets.map((b) => (
                <li key={b} className="grid grid-cols-[auto_1fr] gap-4 items-start text-foreground/90 text-lg md:text-xl leading-relaxed">
                  <span className="text-primary mt-[12px] h-[6px] w-[6px] rounded-full bg-primary inline-block" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div>
              <a
                href={calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 label-mono hover:bg-pink-soft transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 02 — AI STRATEGY SESSION */}
      <section id="workshops" className="py-32 md:py-44 border-b border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative border-l-4 border-primary bg-background/50 p-8 md:p-12 mb-20">
            <div className="absolute top-8 right-8 text-7xl font-bold text-foreground/10">02</div>

            <p className="label-mono text-primary/70 mb-4 inline-block border border-primary/30 px-3 py-1 text-xs">
              SERVICE 02 · 90-MINUTE WORKING SESSION
            </p>
            <h2 className="display-serif text-4xl md:text-5xl mb-6">
              AI <span className="display-italic">Strategy Session</span>
            </h2>
            <p className="font-serif font-semibold italic text-primary text-xl md:text-2xl leading-snug mb-8">
              Get clear on where to start.
            </p>
            <div className="hairline w-12 mb-8" />
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
              Before you build anything, get clarity. We look at your
              business, your team and how you work — then tell you where AI
              belongs, what to stop doing manually and what your first three
              workflows should be.
            </p>
          </div>

          <p className="label-eyebrow mb-10">
            — You Leave With
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline mb-16">
            {sessionOutcomes.map((o, i) => (
              <div
                key={o}
                className="bg-surface p-8 md:p-12 flex items-start gap-6"
              >
                <p className="label-mono text-primary/80 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-serif text-xl md:text-2xl leading-snug text-foreground/90">
                  {o}
                </p>
              </div>
            ))}
          </div>

          <div>
            <a
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 label-mono hover:bg-pink-soft transition-colors"
            >
              Start Here →
            </a>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-20 md:py-28 border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 text-center mb-12">
          <p className="label-eyebrow mb-4">— Trusted By</p>
          <p className="font-serif italic text-2xl md:text-3xl text-foreground/85">
            Teams building with intention.
          </p>
        </div>
        <TrustedLogos />
        <div className="mt-16">
          <Ticker />
        </div>
      </section>

      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Services;
