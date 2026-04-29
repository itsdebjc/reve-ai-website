const Testimonial = () => {
  return (
    <section className="py-32 md:py-44 border-b border-hairline bg-surface">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="label-eyebrow mb-8">— Testimonial</p>
        <h2 className="display-serif text-4xl md:text-6xl mb-14">
          Clients come to us for <span className="display-italic">clarity.</span>
        </h2>

        <blockquote className="font-serif italic text-2xl md:text-3xl text-foreground/90 leading-relaxed">
          "Reve gave us the structure we didn't know we were missing. Our output went from
          good enough drafts to material we actually want to send."
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="hairline w-10" />
          <p className="label-mono">Founder · Advisory Firm</p>
          <span className="hairline w-10" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
