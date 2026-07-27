import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import FinalCtaSection from "@/components/site/FinalCtaSection";
import { useEffect } from "react";
import debbiePhoto from "@/assets/debbie-collins.jpeg";
import { setCanonical } from "@/lib/seo";

const About = () => {
  useEffect(() => {
    document.title = "About Debbie Collins · Reve";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "About Debbie Collins, founder of Reve. 25 years of marketing expertise, two deep in AI."
    );
    setCanonical("/about");
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <section className="pt-32 pb-24 px-6 md:px-16">
        <div className="mx-auto max-w-[1280px] grid md:grid-cols-[1fr_1.15fr] gap-16 items-center">
          <div>
            <p
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
              className="text-[13px] font-bold text-[#7ED2F2] uppercase mb-6"
            >
              About
            </p>
            <h1
              style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
              className="text-[#F2E4D8] text-5xl md:text-6xl leading-[1.05] uppercase mb-8"
            >
              Hi, I'm <span className="text-[#E893AC]">Debbie.</span>
            </h1>
            <div className="font-['Inter'] space-y-5 text-base md:text-lg leading-relaxed text-[#E8E1D8] max-w-lg">
              <p>
                I've spent 25 years in marketing and the last two deep in
                AI, in a hands on AI mastermind the whole way. I also run my
                own businesses, so I know what it takes to make marketing
                work with a small team and a real budget.
              </p>
              <p>
                Most people bring one of those. I bring all three. Senior
                marketing, real AI depth and the scars of building a
                business.
              </p>
              <p>
                When AI showed up, I figured the trick was better prompts. I
                was wrong. The real win was setting AI up to know my
                business and do the actual work, in my voice, with my
                knowledge. It made everything faster, clearer and lighter.
              </p>
              <p>
                Now I do that for expert led teams. Better marketing, and a
                team that actually knows how to use AI. I'm not a
                developer. I'm a marketing expert who gets what your
                business needs, and I set up AI to do it with you.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={debbiePhoto}
              alt="Debbie Collins"
              className="w-full rounded-3xl aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1D2224] py-20 md:py-24 px-6 text-center border-y border-white/10">
        <h2
          style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
          className="text-[#F2E4D8] text-3xl md:text-4xl uppercase leading-[1.1]"
        >
          Great marketing starts with expertise.
        </h2>
      </section>

      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default About;
