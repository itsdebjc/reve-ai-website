import heroImg from "@/assets/hero-flowers.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative isolate min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Soft pink wildflower meadow at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/40 to-background" />

      <div className="mx-auto max-w-4xl px-6 text-center fade-up">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="hairline w-10" />
          <span className="label-mono text-foreground/80">Reve / AI</span>
          <span className="hairline w-10" />
        </div>

        <h1 className="display-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground">
          You're already using AI.{" "}
          <span className="display-italic">We make it worth it.</span>
        </h1>

        <p className="mt-8 text-foreground/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          AI should be changing how your business runs. If it isn't, the setup isn't right. We build the right one.
        </p>

        <a
          href="https://calendly.com/deb-xjsk/callwithdeb"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 border border-foreground/40 px-10 py-4 label-mono text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          Book a Call →
        </a>

        <div className="mt-10 label-mono text-foreground/60">
          Scroll ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;
