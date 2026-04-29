import { DoodleAccent } from "./Doodles";

const Problem = () => {
  return (
    <section className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-24 left-[8%]" size={56} />
      <DoodleAccent className="bottom-28 right-[10%]" size={56} />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="hairline w-10" />
          <span className="label-eyebrow">The Problem</span>
          <span className="hairline w-10" />
        </div>

        <h2 className="display-serif text-4xl md:text-6xl text-foreground">
          Most founders are already using AI.{" "}
          <span className="display-italic">Very few have the right setup behind it.</span>
        </h2>

        <p className="mt-10 text-foreground/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          The tool is not the problem. The setup is. Without the right foundation, brand
          voice, clear direction, and repeatable workflows, AI output looks almost right.
          Almost right still means fixing everything before it goes out.
        </p>
      </div>
    </section>
  );
};

export default Problem;
