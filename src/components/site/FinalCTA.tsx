const FinalCTA = () => {
  return (
    <section
      id="cta"
      className="relative isolate py-16 md:py-20 border-b border-hairline overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, hsl(350 70% 90%) 0%, hsl(350 65% 86%) 60%, hsl(350 55% 80%) 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center text-[hsl(0_0%_0%)]">
        <p className="font-mono text-[13px] md:text-[12px] tracking-[0.22em] uppercase mb-4 text-[hsl(0_0%_0%)]">
          — Start Here
        </p>
        <h2 className="display-serif text-3xl md:text-5xl mb-5 text-[hsl(0_0%_0%)]">
          Ready to build the right AI setup{" "}
          <span className="display-italic !text-[hsl(0_0%_0%)]">for your business?</span>
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed text-[hsl(0_0%_0%)]">
          Let's talk about where you are, what your team needs and which service makes the most sense.
        </p>

        <div className="mt-8 flex flex-col items-center gap-5">
          <a
            href="https://calendly.com/deb-xjsk/callwithdeb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[hsl(0_0%_0%)] text-[hsl(30_25%_96%)] px-10 py-3.5 font-mono text-[13px] md:text-[12px] tracking-[0.22em] uppercase hover:bg-[hsl(0_0%_15%)] transition-colors"
          >
            Book a Call →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
