const items = [
  "Turn client conversations into content",
  "Build thought leadership from real expertise",
  "Create stronger campaigns and content faster",
  "Train your team inside real work",
];

const Ticker = () => {
  const row = [...items, ...items, ...items];
  return (
    <section className="border-y border-hairline bg-surface py-10 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center shrink-0 px-8">
            <span className="font-serif italic text-foreground/75 text-lg md:text-xl">{t}</span>
            <span className="ml-8 text-primary">·</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ticker;
