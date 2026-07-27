import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CALENDLY_URL } from "@/lib/links";
import { setJsonLd } from "@/lib/seo";

const faqs = [
  {
    q: "What is the Game Plan?",
    a: "It's where we start. I look at your marketing and how your team uses AI, then map what to fix first and where AI helps most. You leave with a clear plan, not a list of tools.",
  },
  {
    q: "How is this different from AI consulting or a course?",
    a: "I don't just advise, and I don't hand you homework. I set AI up to know your business and do real work, and your team learns by doing it with me.",
  },
  {
    q: "Do I need to know what I want first?",
    a: "No. Most teams come in with a pile of problems. The Game Plan sorts out what to fix first.",
  },
  {
    q: "Is this all automated?",
    a: "No. AI does the heavy lifting. The strategy and judgment stay human. That's the whole point.",
  },
  {
    q: "Who do you work with?",
    a: "Expert led businesses with a small team, consultants, agencies, advisors and B2B teams, who want better marketing and a team that knows AI.",
  },
];

const FAQ = () => {
  useEffect(() => {
    setJsonLd("faq-schema", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    });
  }, []);

  return (
    <section className="bg-[#1D2224] py-24 md:py-32 px-6 md:px-16 border-b border-white/10">
      <div className="mx-auto max-w-[1280px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
          className="text-[13px] font-bold text-[#5FC2E8] uppercase mb-6 text-center"
        >
          FAQ
        </p>
        <Accordion type="single" collapsible className="w-full max-w-[820px] mx-auto">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-left text-[#F2E4D8] hover:text-[#E893AC] hover:no-underline py-6 text-lg uppercase"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-['Inter'] text-[#F2E4D8]/70 text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Inter'] text-[#5FC2E8] hover:text-[#E893AC] transition-colors"
          >
            Still have questions? Book a call →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
