import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "@/components/site/Nav";
import FinalCtaSection from "@/components/site/FinalCtaSection";
import Footer from "@/components/site/Footer";
import { allPosts, getPostBySlug } from "@/data/learningPosts";
import { setCanonical } from "@/lib/seo";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} · Reve`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", post.excerpt);
    setCanonical(`/learning/${post.slug}`);
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <main className="bg-[#20262A]">
        <Nav />
        <section className="pt-40 pb-32 text-center px-6">
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#7ED2F2] uppercase mb-6"
          >
            404
          </p>
          <h1
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#F2E4D8] text-4xl md:text-6xl uppercase mb-6"
          >
            Article not found.
          </h1>
          <Link to="/learning" className="font-['Inter'] text-[#5FC2E8] hover:underline">
            ← Back to Learning
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-[#20262A]">
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 border-b border-white/10">
        <div className="mx-auto max-w-3xl text-center">
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#7ED2F2] uppercase mb-6"
          >
            {post.category}
          </p>
          <h1
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#F2E4D8] text-4xl md:text-6xl leading-[1.05] uppercase mb-8"
          >
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 font-['Inter'] text-[#F2E4D8]/55 text-sm">
            <span>{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-[#F2E4D8]/30" />
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-[#F2E4D8]/30" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="py-20 md:py-28 px-6 border-b border-white/10">
        <div className="mx-auto max-w-2xl">
          <p className="font-['Inter'] text-[#F2E4D8] text-xl md:text-2xl leading-snug mb-12">
            {post.excerpt}
          </p>
          <div className="h-px w-12 bg-[#5FC2E8] mb-12" />

          <div className="space-y-8">
            {post.content.map((block, i) => {
              if (typeof block === "string") {
                return (
                  <p key={i} className="font-['Inter'] text-[#E8E1D8] text-lg leading-relaxed">
                    {block}
                  </p>
                );
              }
              if ("heading" in block) {
                return (
                  <h2
                    key={i}
                    style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
                    className="text-[#F2E4D8] text-2xl md:text-3xl uppercase pt-6"
                  >
                    {block.heading}
                  </h2>
                );
              }
              if ("quote" in block) {
                return (
                  <blockquote key={i} className="border-l-2 border-[#E893AC] pl-6 py-2 my-10">
                    <p className="font-['Inter'] text-[#F2E4D8] text-xl md:text-2xl leading-snug">
                      {block.quote}
                    </p>
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          <div className="h-px w-12 bg-white/20 mt-16 mb-8" />
          <div className="flex items-center justify-between font-['Inter']">
            <Link to="/learning" className="text-[#F2E4D8]/70 hover:text-[#E893AC] transition-colors">
              ← All Articles
            </Link>
            <p className="text-[#F2E4D8]/55 text-sm">{post.readTime}</p>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section className="py-24 md:py-32 px-6 md:px-16 border-b border-white/10">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2
              style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
              className="text-[#F2E4D8] text-3xl md:text-4xl uppercase"
            >
              Keep reading.
            </h2>
            <Link to="/learning" className="font-['Inter'] text-[#F2E4D8]/55 hover:text-[#E893AC] transition-colors">
              All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
            {related.map((p) => (
              <Link key={p.slug} to={`/learning/${p.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 mb-5">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", color: "#7ED2F2" }}
                  className="text-xs font-bold uppercase mb-3"
                >
                  {p.category}
                </p>
                <h3
                  style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
                  className="text-[#F2E4D8] text-xl uppercase leading-tight mb-3 group-hover:text-[#E893AC] transition-colors"
                >
                  {p.title}
                </h3>
                <p className="font-['Inter'] text-[#F2E4D8]/65 text-sm leading-relaxed">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default Article;
