import { DoodleAccent } from "./Doodles";

const services = [
  {
    n: "01",
    title: "The AI Setup",
    italic: "Move faster. Stronger output. Everything stays consistent.",
    body: "We build the workflows, align your team, and make sure everything works together. So you move faster, output quality improves, and nothing falls through the cracks.",
    bullets: [
      "You're using AI but you're not sure if you're using it right",
      "You have the tools (Claude, ChatGPT, Slack, email, Shopify, Klaviyo) but they're not working together as a system",
      "Everyone on your team is working differently with AI",
      "You're spending more time fixing outputs than actually creating",
    ],
    cta: "Learn More",
  },
  {
    n: "02",
    title: "AI Strategy Session",
    italic: "Get clear on where to start.",
    body: "Before you build anything, get clarity. We look at your business, your team and how you work, then show you exactly where AI belongs, what to stop doing manually, and what your first three workflows should be.",
    bullets: [
      "Where AI fits in your business and where it does not",
      "A list of what to stop doing manually right now",
      "Your three highest-value workflow opportunities",
      "A clear next step",
    ],
    cta: "Start Here",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-24 left-[6%]" size={56} />
      <DoodleAccent className="bottom-32 right-[6%]" size={56} />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="label-eyebrow mb-6">— Services</p>
          <h2 className="display-serif text-4xl md:text-6xl">
            Two ways to <span className="display-italic">work together.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.n}
              className="relative border border-primary rounded-xl p-8 md:p-10 flex flex-col"
            >
              <p className="label-eyebrow mb-4 text-primary/80">{s.n}</p>
              <h3 className="display-serif text-2xl md:text-3xl mb-3">{s.title}</h3>
              <p className="font-serif italic text-primary text-base md:text-lg mb-4">
                {s.italic}
              </p>
              <div className="hairline w-10 mb-4" />
              <p className="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                {s.body}
              </p>

              <div>
                <p className="label-mono text-foreground/70 text-xs mb-4">Right for you if:</p>
                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm text-foreground/85 flex gap-3">
                      <span className="text-primary mt-1 h-1 w-1 rounded-full flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/services" className="label-mono text-foreground hover:text-primary w-fit">
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
