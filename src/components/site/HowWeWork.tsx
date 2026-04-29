import { DoodleAccent } from "./Doodles";

const HowWeWork = () => {
  return (
    <section className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden bg-dark-warm">
      <DoodleAccent className="top-20 right-[8%]" size={56} />
      <DoodleAccent className="bottom-24 left-[7%]" size={56} />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="label-eyebrow mb-6">— How We Work</p>
        <h2 className="display-serif text-4xl md:text-5xl mb-12">
          We start by understanding your business, your team and{" "}
          <span className="display-italic">the work that matters most.</span>
        </h2>

        <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            From there, we either build the full system and train your team to run it, or
            we run an AI Strategy Session that gives you a clear picture of where to start.
          </p>
          <p className="font-serif font-semibold italic text-primary text-xl md:text-2xl">
            No generic advice. No AI theory. Everything is built around how your business
            actually works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
