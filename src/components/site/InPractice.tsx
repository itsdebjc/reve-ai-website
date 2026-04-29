const items = [
  "Turning a one-hour client call into a full case study the same day",
  "Cutting proposal writing time from hours down to under one hour",
  "Turning weekly meetings into consistent thought leadership",
  "Getting a week of content done in a single working session",
  "Producing marketing without rewriting everything multiple times",
];

const InPractice = () => {
  return (
    <section className="py-32 md:py-44 border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div className="md:border-r md:border-hairline md:pr-12">
          <p className="label-eyebrow mb-6">— In Practice</p>
          <h2 className="display-serif text-3xl md:text-5xl">
            This is where teams <span className="display-italic">see the shift.</span>
          </h2>
        </div>

        <ul className="space-y-px">
          {items.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 items-start py-5 border-b border-hairline last:border-b-0"
            >
              <span className="font-mono text-primary text-sm mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground/95 text-base md:text-lg leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InPractice;
