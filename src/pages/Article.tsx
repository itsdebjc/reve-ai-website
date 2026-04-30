import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "@/components/site/Nav";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import { allPosts, getPostBySlug } from "@/data/learningPosts";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — Reve AI`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", post.excerpt);
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <main className="bg-background text-foreground">
        <Nav />
        <section className="pt-40 pb-32 text-center px-6">
          <p className="label-eyebrow mb-6">— 404</p>
          <h1 className="display-serif text-4xl md:text-6xl mb-6">
            Article not found.
          </h1>
          <Link to="/learning" className="label-mono text-primary hover:underline">
            ← Back to Learning
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative isolate pt-40 pb-16 md:pt-52 md:pb-20 border-b border-hairline">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="label-eyebrow mb-6">— {post.category}</p>
          <h1 className="display-serif text-4xl md:text-6xl leading-[1.05] mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 label-mono text-foreground/55">
            <span>{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="aspect-[16/9] overflow-hidden border border-hairline">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="py-20 md:py-28 border-b border-hairline">
        <div className="mx-auto max-w-2xl px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-foreground/85 leading-snug mb-12">
            {post.excerpt}
          </p>
          <div className="hairline w-12 mb-12" />

          <div className="space-y-8">
            {post.content.map((block, i) => {
              if (typeof block === "string") {
                return (
                  <p
                    key={i}
                    className="text-foreground/80 text-lg leading-relaxed"
                  >
                    {block}
                  </p>
                );
              }
              if ("heading" in block) {
                return (
                  <h2
                    key={i}
                    className="display-serif text-2xl md:text-3xl pt-6"
                  >
                    {block.heading}
                  </h2>
                );
              }
              if ("quote" in block) {
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-primary pl-6 py-2 my-10"
                  >
                    <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground/90">
                      {block.quote}
                    </p>
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          <div className="hairline w-12 mt-16 mb-8" />
          <div className="flex items-center justify-between">
            <Link
              to="/learning"
              className="label-mono text-foreground/70 hover:text-primary transition-colors"
            >
              ← All Articles
            </Link>
            <p className="label-mono text-foreground/55">{post.readTime}</p>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section className="py-24 md:py-32 border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="display-serif text-3xl md:text-4xl">
              Keep <span className="display-italic">reading.</span>
            </h2>
            <Link
              to="/learning"
              className="label-mono text-foreground/55 hover:text-primary transition-colors"
            >
              All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/learning/${p.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden border border-hairline mb-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="label-eyebrow mb-4">— {p.category}</p>
                <h3 className="display-serif text-2xl leading-tight mb-4 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {p.excerpt}
                </p>
                <span className="label-mono text-foreground/70 group-hover:text-primary transition-colors">
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Article;
