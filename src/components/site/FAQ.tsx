import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DoodleAccent } from "./Doodles";

const faqs = [
  {
    q: "What is an AI marketing system?",
    a: "The setup behind the work: brand voice, content direction, tools, workflows, and training that help your team use AI well and consistently.",
  },
  {
    q: "How is this different from AI consulting?",
    a: "We do not just advise. We build the system or run an AI Strategy Session — both are hands-on and built around your business, not generic frameworks.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Founder-led service businesses: agencies, consultancies, creative and digital firms. If your team creates value through thinking, writing and client delivery, this is built for you.",
  },
];

const FAQ = () => {
  return (
    <section className="relative isolate py-32 md:py-44 border-b border-hairline overflow-hidden">
      <DoodleAccent className="top-24 right-[6%]" size={56} />
      <DoodleAccent className="bottom-28 left-[6%]" size={56} />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div>
          <p className="label-eyebrow mb-6">— FAQ</p>
          <h2 className="display-serif text-4xl md:text-5xl leading-tight">
            Frequently asked <span className="display-italic">questions.</span>
          </h2>
          <a
            href="#cta"
            className="mt-10 inline-flex label-mono text-foreground/70 hover:text-primary transition-colors"
          >
            Contact us →
          </a>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-hairline">
              <AccordionTrigger className="font-serif text-xl md:text-2xl text-left hover:text-primary hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/85 text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
