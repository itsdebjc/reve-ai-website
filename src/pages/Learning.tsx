import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/site/Nav";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import heroImg from "@/assets/hero-cherry-blossom.jpg";
import { featuredPost as featured, posts } from "@/data/learningPosts";

const Learning = () => {
  useEffect(() => {
    document.title = "Learning — Reve AI";
    const desc =
      "The AI Signal: practical insights on how expert-led teams are using AI to make marketing stronger, faster, and more consistent.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative isolate pt-40 pb-20 md:pt-52 md:pb-28 border-b border-hairline overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />

        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="label-eyebrow mb-6">— Learning</p>
          <h1 className="display-serif text-5xl md:text-7xl mb-8 leading-[1.05]">
            The <span className="display-italic">AI Signal.</span>
          </h1>
          <p className="text-foreground/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            News, frameworks, and practical insights from the front lines of AI
            marketing — for teams that want to use it well.
          </p>
          <p className="label-mono text-foreground/55 mt-8">By The Reve Team</p>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="py-14 border-b border-hairline bg-surface text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-foreground/85 leading-snug">
            Your go-to guide for AI, brand, and marketing systems.
          </p>
          <p className="label-mono text-foreground/55 mt-3">
            Practical thinking for teams that want to grow smarter.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-24 md:py-32 border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            to={`/learning/${featured.slug}`}
            className="grid md:grid-cols-2 gap-10 md:gap-16 group items-center"
          >
            <div className="aspect-[4/3] overflow-hidden border border-hairline">
              <img
                src={featured.image}
                alt={featured.title}
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="label-eyebrow mb-6">— {featured.category}</p>
              <h2 className="display-serif text-3xl md:text-5xl leading-[1.1] mb-6 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <div className="hairline w-12 mb-6" />
              <p className="text-foreground/75 text-base md:text-lg leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="label-mono text-foreground group-hover:text-primary transition-colors">
                  Read More →
                </span>
                <span className="label-mono text-foreground/50">
                  {featured.readTime}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-24 md:py-32 border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="display-serif text-3xl md:text-4xl">
              More from <span className="display-italic">the signal.</span>
            </h2>
            <p className="label-mono text-foreground/55">All Articles →</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={`/learning/${p.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden border border-hairline mb-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="label-eyebrow mb-4">— {p.category}</p>
                <h3 className="display-serif text-2xl leading-tight mb-4 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {p.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="label-mono text-foreground/70 group-hover:text-primary transition-colors">
                    Read More →
                  </span>
                  <span className="label-mono text-foreground/50">
                    {p.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <section className="py-24 md:py-32 border-b border-hairline bg-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="label-eyebrow mb-6">— Subscribe</p>
          <h2 className="display-serif text-3xl md:text-5xl mb-6">
            Get The Signal{" "}
            <span className="display-italic">in your inbox.</span>
          </h2>
          <p className="text-foreground/75 leading-relaxed max-w-xl mx-auto mb-10">
            One short email a month. Frameworks, case studies, and the things
            we're seeing inside teams using AI well.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 bg-background border border-hairline px-5 py-4 label-mono text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 label-mono hover:bg-pink-soft transition-colors"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Learning;
