import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { Link } from "react-router-dom";
import { allPosts } from "@/data/learningPosts";
import { useEffect } from "react";
import { CALENDLY_URL } from "@/lib/links";
import { setCanonical } from "@/lib/seo";

const Learning = () => {
  useEffect(() => {
    document.title = "Learning · Reve";
    setCanonical("/learning");
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Notes from the studio. Real talk on AI, marketing and building systems that actually work. No hype, no jargon."
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#20262A]">
      <Nav />
      <section className="pt-32 pb-20 px-6 md:px-16">
        <div className="mx-auto max-w-[1280px]">
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#7ED2F2] uppercase mb-6"
          >
            Learning
          </p>
          <h1
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#F2E4D8] text-5xl md:text-6xl leading-[1.05] uppercase mb-8"
          >
            Notes from the studio.
          </h1>
          <p className="font-['Inter'] text-[#E8E1D8] text-base md:text-lg leading-relaxed max-w-2xl">
            Real talk on AI, marketing and building systems that actually
            work. No hype, no jargon.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">
        <div className="mx-auto max-w-[1280px] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/learning/${post.slug}`}
              className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#1D2224] hover:border-[#5FC2E8]/50 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", color: "#5FC2E8" }}
                  className="text-xs font-bold uppercase mb-3"
                >
                  {post.category} · {post.date} · {post.readTime}
                </p>
                <h3
                  style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
                  className="text-[#F2E4D8] text-xl uppercase leading-tight mb-3 group-hover:text-[#E893AC] transition-colors"
                >
                  {post.title}
                </h3>
                <p className="font-['Inter'] text-[#F2E4D8]/65 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-[#5FC2E8] text-xs uppercase group-hover:text-[#E893AC] transition-colors"
                >
                  Read the post →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#5FAF95] py-20 md:py-24 px-6 text-center">
        <div className="mx-auto max-w-[640px]">
          <h2
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#20262A] text-3xl md:text-4xl uppercase leading-[1.1] mb-9"
          >
            Want AI that knows your business?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-sm bg-[#20262A] text-[#F2E4D8] px-8 py-4 rounded-[10px] inline-block hover:opacity-90 transition-opacity uppercase"
            >
              Book a Call
            </a>
            <a
              href="/services#audit"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-sm border-2 border-[#20262A]/50 text-[#20262A] px-8 py-4 rounded-[10px] hover:bg-[#20262A]/10 transition-colors inline-block uppercase"
            >
              Get Your Game Plan
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Learning;
