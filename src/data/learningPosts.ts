import post1 from "@/assets/learning/post-1.jpg";
import post2 from "@/assets/learning/post-2.jpg";
import post3 from "@/assets/learning/post-3.jpg";
import post4 from "@/assets/learning/post-4.jpg";
import post5 from "@/assets/learning/post-5.jpg";
import post6 from "@/assets/learning/post-6.jpg";

export type Post = {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
  date: string;
  /** Array of paragraphs / blocks. Use { heading: "..." } for section headings. */
  content: Array<string | { heading: string } | { quote: string }>;
};

export const featuredPost: Post = {
  slug: "brand-intelligence-foundation",
  image: post1,
  category: "Featured · AI Foundations",
  title:
    "The Brand Intelligence Foundation: Why Most Teams Use AI Without It",
  excerpt:
    "AI without a brand foundation produces output that looks right and still needs fixing. Here's what to put underneath the tools so the output actually sounds like your team.",
  readTime: "8 min read",
  author: "The Reve Team",
  date: "April 2026",
  content: [
    "Most teams adopting AI right now are skipping the most important step. They're plugging tools into workflows that have no shared foundation underneath — no documented voice, no point of view, no agreed-upon way of describing what they actually do. The output looks right. It still needs fixing. And nobody can quite explain why.",
    "We call the missing layer the Brand Intelligence Foundation. It's the structured set of inputs that tells any AI tool — and any human on your team — how your firm thinks, talks, and shows up. Without it, every prompt is a fresh negotiation. With it, the tool starts producing work that sounds like you on the first pass.",
    { heading: "What the foundation actually contains" },
    "A working foundation has four layers: positioning (what you do and who for), point of view (what you believe that others don't), voice (how you sound on the page), and proof (the stories, numbers, and language you've already earned the right to use). None of these are new. What's new is writing them down in a form a model can actually use.",
    "Most firms have versions of this scattered across decks, proposals, and the heads of two or three senior people. The work is to consolidate it — not to invent a new brand, but to make the existing one legible.",
    { quote: "The teams getting real leverage from AI aren't the ones with the best prompts. They're the ones with the clearest inputs." },
    { heading: "Why the tool is the smallest part" },
    "When teams struggle with AI output, the instinct is to blame the model or the prompt. Almost always, the real issue is upstream. The model is doing exactly what you asked — it just doesn't know what you sound like, what you believe, or which examples to draw from. Fix that layer and the output changes immediately, across every tool you use.",
    "This is why we build the foundation before we build any workflows. It's the part that compounds.",
    { heading: "Where to start" },
    "If you want to test this on your own team, pick one piece of recurring output — a proposal section, a LinkedIn post format, a follow-up email. Write down the four layers as they apply to that one artefact. Run it through whatever tool you're using. The difference is usually obvious within a single draft.",
    "That's the foundation in miniature. Scale it across the work your team does most, and you have a system.",
  ],
};

export const posts: Post[] = [
  {
    slug: "client-conversations-to-content",
    image: post2,
    category: "Workflows",
    title:
      "Turning Client Conversations Into Content (Without Sounding Like a Robot)",
    excerpt:
      "Most teams already have the thinking. They just don't have a system to capture it. A simple workflow for turning calls into thought leadership.",
    readTime: "6 min read",
    author: "The Reve Team",
    date: "April 2026",
    content: [
      "Every expert-led firm has the same hidden asset: hours of client conversations where the real thinking happens. The diagnoses, the framings, the off-the-cuff analogies that land. Almost none of it ever becomes content. Not because the team doesn't want to publish — because there's no system to capture it without adding three hours of writing on top.",
      { heading: "The workflow in three steps" },
      "Record (with permission), transcribe, and tag. The tagging is the part most teams skip and the part that does the work. You're not looking for quotes — you're looking for the moments where someone explained something in a way that made it click.",
      "Run those moments through a voice-aware draft. Not a generic 'turn this into a LinkedIn post' prompt. A draft that knows your point of view, your cadence, and what you've already published. This is where the brand foundation does the heavy lifting.",
      "Edit for truth, not for polish. The senior person who said it in the first place is the only one who can sign off. Their job is fifteen minutes of edits, not three hours of writing.",
      { quote: "The thinking is already there. The system is what turns it into output." },
      { heading: "Why it doesn't sound like a robot" },
      "Because the source material is human. The model isn't generating the idea — it's reformatting something a person actually said, inside a voice the team has already documented. That's the difference between AI content and AI-assisted content.",
    ],
  },
  {
    slug: "ai-wont-fix-your-marketing",
    image: post3,
    category: "Strategy",
    title: "AI Won't Fix Your Marketing. A System Will.",
    excerpt:
      "The teams getting real value from AI are the ones who built the structure first. Here's why the tool is the smallest part of the equation.",
    readTime: "5 min read",
    author: "The Reve Team",
    date: "April 2026",
    content: [
      "There's a pattern we see across teams that have spent the last year experimenting with AI: lots of activity, very little compounding value. New tools every month. Pilot projects that never quite scale. A growing sense that the technology is impressive but the marketing hasn't actually improved.",
      "The reason is almost never the tool. It's the absence of a system underneath it.",
      { heading: "What a system looks like" },
      "A system is the connective tissue between the work you do, the voice you use, and the tools you reach for. It's the documented version of how your team actually thinks — turned into inputs any model can read.",
      "Without it, every AI session starts from zero. With it, every session starts from your firm.",
      { quote: "Tools change every quarter. Systems compound every quarter." },
      { heading: "Where to invest" },
      "Spend less time evaluating new platforms and more time documenting the four or five things your team does every week. That's the layer that determines whether AI makes you faster or just busier.",
    ],
  },
  {
    slug: "why-ai-output-sounds-generic",
    image: post4,
    category: "Voice & Tone",
    title:
      "Why Your AI Output Sounds Generic (And the One Input That Fixes It)",
    excerpt:
      "Better prompts won't save you. A documented voice will. How to build the voice layer your team can plug into any tool.",
    readTime: "7 min read",
    author: "The Reve Team",
    date: "April 2026",
    content: [
      "If your AI output reads like everyone else's AI output, the problem isn't the prompt. It's that the model has no idea what you sound like — so it falls back to the average of the internet. Which, increasingly, is the average of other AI output.",
      { heading: "What a voice document actually contains" },
      "Not adjectives. Not 'professional but approachable.' A voice document contains examples — short paragraphs you've actually written, annotated with what makes them yours. It contains the words you use and the ones you don't. It contains rhythm, sentence length, the way you open and close.",
      "It's a reference, not a rulebook. The model uses it the same way a new hire would: as a guide to sounding like the team.",
      { quote: "Voice isn't what you say you sound like. It's what you've already published." },
      { heading: "Plugging it in" },
      "Once it exists, it goes into every tool — every prompt, every assistant, every workflow. The same document. That's the leverage. You write it once, and every piece of AI output your team produces gets a step closer to sounding like you.",
    ],
  },
  {
    slug: "real-reason-team-isnt-using-ai",
    image: post5,
    category: "Team Enablement",
    title:
      "The Real Reason Your Team Isn't Using AI (And What to Do About It)",
    excerpt:
      "It's not the tools. It's not the training. It's the lack of a shared system. A look at what actually drives adoption inside expert-led teams.",
    readTime: "6 min read",
    author: "The Reve Team",
    date: "April 2026",
    content: [
      "Adoption inside expert-led teams stalls for one reason more than any other: the work is high-stakes and the tool is generic. Senior people aren't going to risk their voice or their client relationship on output they can't trust. So they don't use it. And the firm spends another quarter wondering why the rollout didn't take.",
      { heading: "What actually drives adoption" },
      "A shared system. Inputs everyone trusts. Workflows that have been built for the actual work the team does, not generic 'use AI to write better' prompts. When the foundation is in place, adoption isn't a training problem — it's a default.",
      { quote: "People adopt tools they trust. Trust comes from the inputs, not the interface." },
      { heading: "Start with the senior people" },
      "If the senior people don't use it, no one else will either. Build the first workflow around their work. Make it obviously better than the manual version. Adoption spreads from there.",
    ],
  },
  {
    slug: "cutting-proposal-time-60-percent",
    image: post6,
    category: "Proposals",
    title:
      "Cutting Proposal Time by 60%: Inside an Advisory Firm's AI Workflow",
    excerpt:
      "How one firm rebuilt its proposal process around a brand intelligence layer — and stopped writing the same thing five different ways.",
    readTime: "9 min read",
    author: "The Reve Team",
    date: "April 2026",
    content: [
      "An advisory firm we worked with was spending an average of eleven hours per proposal across three people. Most of that time wasn't strategy — it was rewriting the same case studies, the same methodology section, the same boilerplate, slightly differently each time.",
      { heading: "What we changed" },
      "We built a structured library of their actual work — past proposals, case studies, methodology language — and connected it to a drafting workflow. The first draft now assembles itself from the library, in their voice, against the prompt of the new opportunity.",
      "The senior partner's job shifted from writing to editing and pressure-testing. The junior team's job shifted from formatting to genuine research on the prospect.",
      { quote: "We stopped writing the same thing five different ways. That alone gave us back a day a week." },
      { heading: "The result" },
      "Proposal time dropped from eleven hours to just over four. Win rate went up, not down — because the time saved went into the parts of the proposal that actually move the decision.",
      "The lesson isn't about proposals. It's about what happens when the inputs are structured: the work compounds instead of repeating.",
    ],
  },
];

export const allPosts: Post[] = [featuredPost, ...posts];

export const getPostBySlug = (slug: string): Post | undefined =>
  allPosts.find((p) => p.slug === slug);
