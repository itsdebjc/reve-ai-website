import debbieImg from "@/assets/debbie-collins-about.jpeg";
import { DoodleAccent } from "./Doodles";

const Founder = () => {
  return (
    <section id="about" className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-20 right-[7%]" size={56} />
      <DoodleAccent className="bottom-24 left-[7%]" size={56} />
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hairline w-10" />
            <span className="label-eyebrow">Founded By</span>
            <span className="hairline w-10" />
          </div>
          <h2 className="display-serif text-5xl md:text-6xl">Debbie Collins.</h2>
          <p className="label-mono mt-4">Marketing Strategist · Systems Builder</p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="aspect-[3/4] bg-surface border border-hairline rounded-3xl relative overflow-hidden">
            <img
              src={debbieImg}
              alt="Debbie Collins, founder of Reve AI"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="space-y-5 text-foreground/90 text-base md:text-lg leading-relaxed">
            <p>
              Debbie has been in marketing for 25 years, and she has never waited for
              something to go mainstream before figuring it out.
            </p>
            <p>
              She started by studying how Google worked before most people had heard the
              word SEO. Then in 2008 she built one of the first social media agencies in
              Canada. Now she is deep in AI.
            </p>
            <p className="font-serif font-semibold italic text-primary text-xl">
              Same instinct. Different tool.
            </p>
            <p>
              What she brings that most AI consultants do not is 25 years of knowing what
              good marketing actually looks like. The setup matters, but so does knowing
              what to build, what to ask for, and whether the output is any good. That is
              a marketing skill. She has spent her career building it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
