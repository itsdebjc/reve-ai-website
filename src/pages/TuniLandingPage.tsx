import { useEffect, useState } from "react";
import { setCanonical } from "@/lib/seo";
import debbieBeach from "@/assets/debbie-beach.jpeg";
import heroCherryBlossom from "@/assets/hero-cherry-blossom.jpg";
import debbieCreamBg from "@/assets/debbie-collins-cream-bg.jpg";
import tuniAppCoach from "@/assets/tuni-app-coach.jpeg";

const TUNI_COLORS = {
  cream: "#FFF7F1",
  "cream-alt": "#FFFCFA",
  "cream-pink": "#FCEEF2",
  mat: "#F3ECE6",
  ink: "#2A211C",
  coral: "#FF6A4D",
  "coral-light": "#FF8A5C",
  pink: "#F0508C",
  amber: "#FFA13E",
  "body-text": "#6E5F57",
  "muted-gray": "#9a8b82",
  "placeholder-gray": "#b3a399",
  green: "#2FB67A",
};

const HeartGradient = ({ size = 26, color }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 120 120">
    <defs>
      <linearGradient id="bffGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={TUNI_COLORS.coral} />
        <stop offset="1" stopColor={TUNI_COLORS.pink} />
      </linearGradient>
    </defs>
    <path
      d="M60 100 C28 79 14 62 14 43 C14 29 25 20 37 20 C49 20 56 28 60 36 C64 28 71 20 83 20 C95 20 106 29 106 43 C106 62 92 79 60 100 Z"
      fill={color ?? "url(#bffGrad)"}
    />
  </svg>
);

const RadiantHeart = ({ size = 78 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 220 220" fill="none">
    <defs>
      <linearGradient id="bffGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={TUNI_COLORS.coral} />
        <stop offset="1" stopColor={TUNI_COLORS.pink} />
      </linearGradient>
    </defs>
    <g strokeLinecap="round" strokeWidth="6">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={angle}
          x1="110"
          y1="30"
          x2="110"
          y2="11"
          stroke={i % 2 === 0 ? TUNI_COLORS.amber : TUNI_COLORS.coral}
          transform={`rotate(${angle} 110 110)`}
        />
      ))}
    </g>
    <path
      d="M110 168 C70 142 50 120 50 96 C50 78 64 66 80 66 C95 66 105 76 110 86 C115 76 125 66 140 66 C156 66 170 78 170 96 C170 120 150 142 110 168 Z"
      fill="url(#bffGrad2)"
    />
  </svg>
);

const TuniWordmark = ({ size = 23 }: { size?: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
      fontFamily: "'Bricolage Grotesque', sans-serif",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: "-0.03em",
      lineHeight: 1,
    }}
  >
    <span style={{ color: TUNI_COLORS.coral }}>T</span>
    <span style={{ color: TUNI_COLORS.pink }}>u</span>
    <span style={{ color: TUNI_COLORS.amber }}>n</span>
    <span style={{ color: TUNI_COLORS.coral }}>i</span>
  </div>
);

export default function TuniLandingPage() {
  const [form, setForm] = useState({ name: "", email: "", submitted: false });

  useEffect(() => {
    document.title = "Tuni — Personal Body Feedback for Midlife Women";
    const desc = "Tuni helps midlife women understand what their body responds to through a simple daily log and weekly feedback based on their real life.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    setCanonical("/bff-coach");
  }, []);

  const handleWaitlist = () => {
    document.getElementById("bff-waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=TPQB4A", {
        method: "POST",
        headers: { "Content-Type": "application/json", revision: "2023-12-15" },
        body: JSON.stringify({
          data: {
            type: "subscription",
            attributes: {
              profile: {
                data: {
                  type: "profile",
                  attributes: { email: form.email, first_name: form.name },
                },
              },
            },
            relationships: { list: { data: { type: "list", id: "QQMm5G" } } },
          },
        }),
      });
      if (res.ok || res.status === 202) {
        setForm((p) => ({ ...p, submitted: true }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main style={{ background: TUNI_COLORS.cream, color: TUNI_COLORS.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Caveat:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        @keyframes bffMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        details summary::-webkit-details-marker { display: none; }
        details[open] .bff-faq-plus { transform: rotate(45deg); transition: transform 0.2s; }
        @media (max-width: 768px) {
          .bff-grid-2col { grid-template-columns: 1fr !important; }
          .bff-hide-mobile { display: none !important; }
          .bff-header-label { display: none !important; }
          .bff-header-tagline { display: none !important; }
          .bff-header-button { padding: 8px 14px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* STICKY HEADER */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: `rgba(255,247,241,0.82)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: `1px solid rgba(42,33,28,0.07)` }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "13px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <RadiantHeart size={30} />
            <TuniWordmark size={23} />
            <span className="bff-header-label" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: TUNI_COLORS["muted-gray"] }}>Feedback for midlife women</span>
          </div>
          <div className="bff-header-tagline" style={{ fontFamily: "'Caveat', cursive", fontSize: "21px", fontWeight: 600, color: TUNI_COLORS["body-text"] }}>Tune in to what works.</div>
          <button className="bff-header-button" onClick={handleWaitlist} style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "11px 20px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 8px 18px rgba(240,80,140,0.26)" }}>Join the waitlist →</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ background: `linear-gradient(180deg, ${TUNI_COLORS.cream} 0%, ${TUNI_COLORS["cream-alt"]} 100%)`, padding: "64px 26px 76px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.04fr", gap: "56px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "26px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Meet Tuni · Your body feedback guide</span>
            </div>
            <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: 0, color: TUNI_COLORS.ink }}>Your body changed.</h1>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "24px 0 0" }}>You hit your 40s or 50s, and suddenly the things that used to work don't. You eat pretty well. You move. You try to make good choices.</p>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "12px 0 0" }}>And still, you're left wondering:</p>
            <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1, color: TUNI_COLORS.pink, marginTop: "6px" }}>What is actually working for me now?</div>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "24px 0 0" }}>Tuni helps you figure that out through a simple daily log and weekly feedback based on your real life.</p>
            <button onClick={handleWaitlist} style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "16px 30px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.30)", marginTop: "28px" }}>Save my spot</button>
            <span style={{ fontSize: "14px", color: TUNI_COLORS["muted-gray"], display: "inline-block", marginTop: "14px", marginLeft: "12px" }}>Not another plan to follow. A better way to understand your own body.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img src={debbieCreamBg} alt="Debbie Collins" style={{ width: "100%", maxWidth: "400px", height: "480px", objectFit: "cover", objectPosition: "right center", borderRadius: "26px", boxShadow: "0 28px 60px rgba(42,33,28,0.18)" }} />
            <div style={{ position: "absolute", left: "-18px", bottom: "-22px", background: "#fff", borderRadius: "16px", padding: "13px 17px", boxShadow: "0 16px 34px rgba(42,33,28,0.16)", maxWidth: "228px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "21px", lineHeight: 1.15, color: TUNI_COLORS.ink }}>I was doing all the right things, and I still wasn't losing weight.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY INTELLIGENCE STATEMENT */}
      <section style={{ background: TUNI_COLORS["cream-pink"], padding: "72px 26px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: TUNI_COLORS.pink, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Body intelligence</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "22px 0 0", color: TUNI_COLORS.ink }}>Tuni helps midlife women discover what their own body responds to through a simple daily log and weekly feedback.</h2>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.2, color: TUNI_COLORS.pink, marginTop: "16px" }}>Tune in to your body's intelligence.</div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section style={{ background: TUNI_COLORS.ink, overflow: "hidden", padding: "15px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "bffMarquee 34s linear infinite" }}>
          {["Tune in to what works", "Understand your body", "Built for midlife", "Better feedback", "Small shifts", "Daily choices", "See the pattern", "Stop guessing", "Start noticing", "Data is feedback", "Your body is not broken"].map((text, i) => (
            <span key={`${i}-1`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: TUNI_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
              {text}
              {i < 10 && <span style={{ color: TUNI_COLORS.coral, marginLeft: "22px" }}>•</span>}
            </span>
          ))}
          {["Tune in to what works", "Understand your body", "Built for midlife", "Better feedback", "Small shifts", "Daily choices", "See the pattern", "Stop guessing", "Start noticing", "Data is feedback", "Your body is not broken"].map((text, i) => (
            <span key={`${i}-2`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: TUNI_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }} aria-hidden="true">
              {text}
              {i < 10 && <span style={{ color: TUNI_COLORS.coral, marginLeft: "22px" }}>•</span>}
            </span>
          ))}
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ background: TUNI_COLORS.ink, color: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: TUNI_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>The problem</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.4vw, 50px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "22px 0 0", color: TUNI_COLORS.cream }}>You are changing all the things. <span style={{ color: TUNI_COLORS["coral-light"] }}>And you are still not seeing a change.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "24px 0 0", maxWidth: "560px" }}>You eat well. You walk. You try to get enough protein. You go to the gym. Maybe you cut back on wine. Eat earlier. Sleep more. Drink more water.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "16px 0 0", maxWidth: "560px" }}>Sometimes you make progress. Then… nothing.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "16px 0 0", maxWidth: "560px" }}>And the most frustrating part? You don't know which thing actually made the difference.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))", gap: "12px", margin: "20px 0", maxWidth: "560px" }}>
            {[{ text: "Is it what you ate?", emoji: "🍽️" }, { text: "When you ate?", emoji: "⏰" }, { text: "Sleep?", emoji: "😴" }, { text: "Stress?", emoji: "😰" }, { text: "Your weekend?", emoji: "🎉" }, { text: "Hormones?", emoji: "📊" }, { text: "Something else entirely?", emoji: "🤷" }].map((item) => (
              <span key={item.text} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", background: "rgba(255,247,241,0.07)", border: "1px solid rgba(255,247,241,0.12)", color: TUNI_COLORS.cream, fontSize: "13px", fontWeight: 600, padding: "8px 12px", borderRadius: "999px", textAlign: "center" }}>
                <span style={{ fontSize: "16px", flexShrink: 0 }}>{item.emoji}</span>{item.text}
              </span>
            ))}
          </div>
          <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid rgba(255,247,241,0.12)" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.2, color: "rgba(255,247,241,0.55)" }}>You do not need more random rules.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.15, color: TUNI_COLORS.amber, marginTop: "6px" }}>You need a better way to learn from your own body.</div>
          </div>
        </div>
      </section>

      {/* HOW TUNI IS DIFFERENT */}
      <section style={{ background: TUNI_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>How Tuni is different</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Most apps give you a plan. <span style={{ color: TUNI_COLORS.pink }}>Tuni gives you feedback.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>Tuni helps you connect your everyday choices with what your body is actually doing over time, so you can stop guessing and learn what works for you.</p>
            <div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
              <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: TUNI_COLORS.ink, marginBottom: "8px" }}>Log. Learn. Adjust. Repeat.</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], margin: "0" }}>A simple feedback loop built around your real life.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", margin: "26px 0 28px" }}>
              {[
                { step: "Log", desc: "Tell Tuni what your day looked like.", details: "Meals, snacks, movement and timing. Talk it, type it or upload what helps." },
                { step: "Learn", desc: "See the patterns you'd normally miss.", details: "Tuni looks across your days, weeks and body changes to help you notice what may be helping or getting in the way." },
                { step: "Adjust", desc: "Try one small change.", details: "Not a whole new plan. Just something worth testing based on what you're seeing." },
                { step: "Repeat", desc: "See how your body responds.", details: "Keep what works. Change what doesn't. Build a routine that actually fits you." }
              ].map((item) => (
                <div key={item.step} style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "18px", color: TUNI_COLORS.ink, marginBottom: "8px" }}>{item.step}</div>
                  <p style={{ fontSize: "16px", fontWeight: 600, lineHeight: 1.5, color: TUNI_COLORS.ink, margin: "0 0 8px" }}>{item.desc}</p>
                  <p style={{ fontSize: "15px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], margin: "0" }}>{item.details}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: TUNI_COLORS.ink, marginBottom: "12px" }}>Your body gives you feedback. Tuni helps you see it.</div>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "0 0 12px" }}>No calorie counting. No perfect days. No generic plan. Just a clearer picture of what your body is responding to.</p>
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: TUNI_COLORS["muted-gray"], margin: "0" }}>Add a weekly body composition scan for an even clearer picture of what's changing.</p>
            </div>
            <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "28px" }}>Join a live Tuni workshop →</button>
          </div>
          {/* iPhone mockup with progress screen */}
          <div style={{ justifySelf: "center", width: "341px", height: "742px", background: "#0A0A0A", borderRadius: "44px", border: "12px solid #0A0A0A", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Phone screen */}
            <img src={tuniAppCoach} alt="Tuni Coach Screen" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* REAL-LIFE MOMENTS */}
      <section style={{ background: TUNI_COLORS["cream-pink"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: TUNI_COLORS.pink, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Real life</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "720px" }}>Tuni is with you in <span style={{ color: TUNI_COLORS.pink }}>the moments where choices actually happen.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "680px", margin: "22px 0 0" }}>Not just when you review your week. Tuni helps you pause in the small, everyday moments when you are deciding what to eat, wondering why you feel off or trying to get back into your rhythm.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", margin: "28px 0 32px" }}>
            {[{ icon: "🍽️", text: "Looking at a menu." }, { icon: "👩‍🍳", text: "Standing in the kitchen at 4 p.m." }, { icon: "🍪", text: "Deciding if you need a snack." }, { icon: "😕", text: "Wondering why you feel off." }, { icon: "🍳", text: "Planning dinner." }, { icon: "📱", text: "Getting back into your rhythm after a busy weekend." }].map((item) => (
              <div key={item.text} style={{ background: "#fff", borderRadius: "16px", padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: TUNI_COLORS.ink, lineHeight: 1.4 }}>{item.text}</div>
              </div>
            ))}
          </div>
          <div style={{ background: TUNI_COLORS.ink, borderRadius: "24px", padding: "40px 36px", color: TUNI_COLORS.cream, marginTop: "32px" }}>
            <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TUNI_COLORS.amber, marginBottom: "16px" }}>Not the voice that says</div>
                <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,247,241,0.6)", margin: "0" }}>"You blew it."</p>
                <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,247,241,0.6)", margin: "10px 0 0" }}>"Start again Monday."</p>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TUNI_COLORS.amber, marginBottom: "16px" }}>The calm voice that says</div>
                <p style={{ fontSize: "18px", fontWeight: 800, color: TUNI_COLORS.cream, lineHeight: 1.4, margin: "0" }}>Let's notice what happened. What could help next?</p>
              </div>
            </div>
            <p style={{ fontSize: "18px", fontWeight: 800, color: TUNI_COLORS.cream, margin: "28px 0 0", paddingTop: "24px", borderTop: "1px solid rgba(255,247,241,0.12)" }}>A calm body feedback guide for real life, not a perfect plan.</p>
          </div>
        </div>
      </section>

      {/* PERSONAL PROOF */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
            <img src={debbieBeach} alt="Debbie at beach" style={{ display: "block", width: "100%", height: "520px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 24px 50px rgba(42,33,28,0.16)" }} />
            <div style={{ background: "#fff", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 10px 25px rgba(42,33,28,0.08)", marginTop: "18px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "22px", lineHeight: 1.3, color: TUNI_COLORS.ink }}>"I built this because I needed it too."</div>
            </div>
          </div>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Why I built Tuni</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 0" }}>Hi, I'm Deb. <span style={{ color: TUNI_COLORS.pink }}>I built Tuni because I needed it.</span></h2>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0" }}>At 54, I had spent seven years trying to lose the weight I gained in midlife. I ate well, exercised, walked regularly and followed much of the advice women are given.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>I would make progress, stall and still have no idea what was actually working.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>The hardest part was not a lack of effort. It was not understanding why my body was responding the way it was.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>So I stopped looking for another plan and started paying closer attention to my own food, habits and body composition data. Each week, I reviewed what had happened, made one small adjustment and learned from the results.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 600, margin: "20px 0 0" }}>For the first time, I felt like I was working with my body instead of guessing.</p>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 32px)", letterSpacing: "-0.01em", textTransform: "uppercase", color: TUNI_COLORS.coral, margin: "24px 0 14px" }}>In three months</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "22px" }}>
              {[{ label: "7.8 lbs", desc: "lost total" }, { label: "7 lbs", desc: "body fat reduced" }, { label: "32.3% → 25.7%", desc: "body fat lowered" }, { label: "Muscle", desc: "maintained while losing fat" }].map((stat) => (
                <div key={stat.label} style={{ background: "#fff", borderRadius: "16px", padding: "18px 20px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "26px", color: TUNI_COLORS.coral }}>{stat.label}</div>
                  <div style={{ fontSize: "13px", color: TUNI_COLORS["body-text"], marginTop: "2px" }}>{stat.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 600, margin: "22px 0 0" }}>But the biggest change was not the number.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "8px 0 0" }}>It was knowing what appeared to be working, what was not and what I wanted to adjust next.</p>
            <div style={{ marginTop: "24px", paddingLeft: "18px", borderLeft: "2px solid rgba(240,80,140,0.3)" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "26px", lineHeight: 1.25, color: TUNI_COLORS.ink }}>At 54, I understand this woman because I am this woman.</div>
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.55, color: TUNI_COLORS["muted-gray"], background: TUNI_COLORS.mat, borderRadius: "14px", padding: "16px 18px", margin: "24px 0 0" }}>These are my personal results, not a promise of yours. Your body, habits and results will be different. That's exactly why Tuni is built around learning from your own patterns.</p>
          </div>
        </div>
      </section>

      {/* THE WORKSHOP */}
      <section style={{ background: TUNI_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>The workshop</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "720px" }}>Join a live Tuni workshop. <span style={{ color: TUNI_COLORS.pink }}>Pick the date that works best for you.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "680px", margin: "22px 0 0" }}>I'm starting with small live workshops because I don't want to hand you an app and expect you to figure it out by yourself.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "680px", margin: "12px 0 0", fontWeight: 600 }}>I'll show you exactly how I use Tuni in real life.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "680px", margin: "20px 0 0" }}>You'll learn how Tuni works, get set up and know exactly how to start using it in your own life.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "680px", margin: "20px 0 0", fontWeight: 600 }}>What we'll cover:</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", margin: "28px 0 32px" }}>
            {[
              "Why I started Tuni, what changed when I stopped following more plans and what I learned from my own experience.",
              "Why doing the \"right things\" can still leave you feeling stuck, confused or unsure about what is working.",
              "How to set up Tuni around your real life and log only the daily details that may help you see a pattern.",
              "How to review your week and connect food, movement, sleep, energy and body changes without counting calories or macros.",
              "How to recognize what may be helping, what may be getting in the way and what is worth testing next.",
              "How to choose one small adjustment instead of changing everything at once.",
              "How to use Tuni in real life, including meals out, busy days, weekends and the moments when you feel off.",
            ].map((item, idx) => (
              <div key={item} style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TUNI_COLORS.coral, marginBottom: "10px" }}>{String(idx + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: TUNI_COLORS.ink, lineHeight: 1.45 }}>{item}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "680px", margin: "0" }}>You'll leave with a simple way to understand your own patterns and one clear place to start.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "28px" }}>Save my spot</button>
        </div>
      </section>

      {/* MINDSET */}
      <section style={{ position: "relative", overflow: "hidden", background: TUNI_COLORS.ink, color: TUNI_COLORS.cream, padding: "96px 26px" }}>
        <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse 62% 72% at 50% 36%, rgba(240,80,140,0.22), rgba(255,124,77,0.07) 46%, transparent 72%)", pointerEvents: "none" }} />
        {[
          { top: "66px", left: "13%", size: "8px", color: TUNI_COLORS.amber, opacity: 0.75 },
          { top: "128px", right: "15%", size: "6px", color: TUNI_COLORS.pink, opacity: 0.75 },
          { bottom: "90px", left: "21%", size: "5px", color: TUNI_COLORS.coral, opacity: 0.6 },
          { bottom: "128px", right: "23%", size: "7px", color: TUNI_COLORS.amber, opacity: 0.6 },
        ].map((dot, i) => (
          <div key={i} style={{ position: "absolute", ...dot, borderRadius: "50%", background: dot.color, opacity: dot.opacity }} />
        ))}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "740px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <RadiantHeart size={64} />
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: TUNI_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>A better way</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.6vw, 54px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: "20px 0 0", color: TUNI_COLORS.cream }}>You do not need to be perfect. You need a better way to pay attention.</h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "24px auto 0", maxWidth: "600px" }}>Tuni is not here to judge your lunch or tell you one meal ruined everything. <span style={{ color: "rgba(255,247,241,0.95)", fontWeight: 600 }}>It is here to help you notice patterns.</span></p>
          <div style={{ margin: "22px auto 0", maxWidth: "600px" }}>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "0" }}>One note can reveal something useful.</p>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "12px 0 0" }}>One pause can change the next choice.</p>
          </div>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(19px, 2.8vw, 26px)", lineHeight: 1.16, margin: "30px auto 0", maxWidth: "660px" }}>This is not about being strict. It is about staying close enough to your habits that you can actually learn from them.</p>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
          <div style={{ background: "#fff", borderRadius: "22px", padding: "34px 32px", boxShadow: "0 10px 30px rgba(42,33,28,0.06)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 13px", borderRadius: "999px" }}>Good fit</span>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, margin: "18px 0 20px" }}>This is for you if…</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "You are doing many of the \"right things,\" but your body is not responding like it used to — progress, then a stall, then a different result the next week.",
                "You are tired of starting over without learning what actually helped.",
                "You want to understand your body without counting every calorie or macro.",
                "You want a calm, practical approach that works with restaurants, weekends and real life.",
                "You are willing to notice patterns and test one small change at a time.",
                "You want to feel more confident in your own choices.",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                  <HeartGradient size={18} />
                  <span style={{ fontSize: "15px", color: TUNI_COLORS.ink, lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: TUNI_COLORS.mat, borderRadius: "22px", padding: "34px 32px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: TUNI_COLORS["muted-gray"], fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 13px", borderRadius: "999px" }}>Not the right fit</span>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, margin: "18px 0 20px" }}>This is not for you if…</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "You want a meal plan handed to you.",
                "You want exact calorie or macro targets to follow.",
                "You want a quick fix, rapid weight loss or a guaranteed result.",
                "You want strict rules about \"good\" and \"bad\" foods.",
                "You do not want to track or log anything.",
                "You need personalized medical, hormone or clinical nutrition advice.",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                  <span style={{ color: TUNI_COLORS["placeholder-gray"], fontWeight: 800, flexShrink: 0, lineHeight: 1.4 }}>✕</span>
                  <span style={{ fontSize: "15px", color: TUNI_COLORS["body-text"], lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: TUNI_COLORS["muted-gray"], margin: "20px 0 0", paddingTop: "16px", borderTop: "1px solid rgba(42,33,28,0.08)" }}>Tuni is for general wellness and education only. It is not medical advice, diagnosis or treatment.</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What's included</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0" }}>What you'll get</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", margin: "34px 0 26px" }}>
            {[
              { title: "Live Tuni workshop", desc: "A guided session that starts with why I built Tuni, then shows you how to use it in real life." },
              { title: "The story behind Tuni", desc: "What I learned from my own experience and why another plan was not the answer." },
              { title: "Tuni setup", desc: "Choose your starting point and set up a simple daily logging rhythm." },
              { title: "Weekly review method", desc: "Look back, spot possible patterns and choose one useful next step." },
              { title: "Real-life examples", desc: "See how Tuni fits meals, restaurants, weekends, busy days and \"I feel off\" moments." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", borderRadius: "16px", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                <span style={{ fontSize: "16px", fontWeight: 700, color: TUNI_COLORS.ink }}>{item.title}</span>
                <span style={{ fontSize: "15px", color: TUNI_COLORS["body-text"], lineHeight: 1.45 }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDSCAPE IMAGE BAND */}
      <section style={{ position: "relative", minHeight: "620px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={heroCherryBlossom} alt="Cherry blossom landscape" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(42,33,28,0.28), rgba(42,33,28,0.6))" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 26px", maxWidth: "780px" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: TUNI_COLORS.cream, margin: "0", textShadow: "0 2px 20px rgba(42,33,28,0.4)" }}>Your body has changed. Now you have a better way to <span style={{ color: "#FFC8A0" }}>understand what it is telling you.</span></h2>
          <button onClick={handleWaitlist} style={{ display: "inline-block", marginTop: "26px", fontSize: "16px", fontWeight: 700, color: TUNI_COLORS.ink, background: TUNI_COLORS.cream, padding: "15px 28px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(0,0,0,0.25)" }}>Join the waitlist →</button>
        </div>
      </section>

      {/* WORKSHOP DETAILS + WAITLIST FORM */}
      <section id="bff-waitlist" style={{ background: TUNI_COLORS.cream, padding: "84px 26px", scrollMarginTop: "70px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "54px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Workshop details</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Join the first <span style={{ color: TUNI_COLORS.pink }}>Tuni workshop.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>I'll walk you through the simple process I created to stop guessing and start understanding what my body responds to now. You'll learn how the app works, what information to bring and how to start using Tuni in your own life.</p>
            <div style={{ display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" }}>
              {[{ label: "Date", value: "Soon", sub: "Coming" }, { label: "Format", value: "Live", sub: "Online" }, { label: "Spots", value: "Few", sub: "Limited" }].map((item) => (
                <div key={item.label} style={{ background: "#fff", borderRadius: "16px", padding: "18px 22px", minWidth: "120px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: TUNI_COLORS["muted-gray"] }}>{item.label}</div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: [TUNI_COLORS.coral, TUNI_COLORS.pink, TUNI_COLORS.amber][["Date", "Format", "Spots"].indexOf(item.label)], marginTop: "4px" }}>{item.value}</div>
                  <div style={{ fontSize: "13px", color: TUNI_COLORS["body-text"] }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 34px", boxShadow: "0 24px 56px rgba(42,33,28,0.12)" }}>
            {!form.submitted ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <RadiantHeart size={30} />
                  <TuniWordmark size={24} />
                </div>
                <div style={{ fontSize: "14px", color: TUNI_COLORS["body-text"], marginBottom: "22px" }}>Join the waitlist for first invites.</div>
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input type="text" placeholder="First name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={{ fontSize: "15px", color: TUNI_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: TUNI_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <input type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={{ fontSize: "15px", color: TUNI_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: TUNI_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <button type="submit" style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, border: "none", padding: "16px", borderRadius: "999px", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Join the waitlist →</button>
                </form>
                <div style={{ fontSize: "12px", color: TUNI_COLORS["placeholder-gray"], textAlign: "center", marginTop: "14px" }}>First invites open soon.</div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "18px 6px" }}>
                <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
                  <RadiantHeart size={56} />
                </div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "28px", color: TUNI_COLORS.ink }}>You're on the list.</div>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], margin: "12px auto 0", maxWidth: "300px" }}>I'll be in touch when the first invites go out.</p>
                <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "24px", color: TUNI_COLORS.pink, marginTop: "16px" }}>Talk soon, Deb</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL WORKSHOP CTA */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Your next step</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Ready to understand what works for you?</h2>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "640px", margin: "22px auto 0" }}>Join the live workshop to learn the simple Tuni process and start using it in the choices, meals and moments that make up your real life.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "32px auto 0", maxWidth: "540px" }}>
            <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "block", fontSize: "18px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "18px 36px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", width: "100%" }}>Save my spot</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: TUNI_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "38px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>FAQ</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 0" }}>Questions you might have.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "Do I need a smart scale?", a: "No. Tuni can still use food notes, energy, hunger, sleep, movement, strength, clothing fit and optional weight trends. A body composition scale can add another useful signal, but it is not required." },
              { q: "Is this a diet?", a: "No. Tuni is a body feedback app. It does not give you a prescribed meal plan or require calorie counting." },
              { q: "Will you tell me exactly what to eat?", a: "No. Tuni helps you look at your own food, habits and body feedback so you can make your own informed choices." },
              { q: "Is this medical advice?", a: "No. Tuni and the workshop are for general wellness and education only. They are not medical advice, diagnosis or treatment." },
              { q: "Is Tuni a weight-loss app?", a: "Tuni can support personal wellness goals, including weight or body composition goals, but it is broader than weight loss. Its purpose is to help you understand your patterns and make clearer daily choices. Results are never guaranteed." },
              { q: "Will I get access to Tuni?", a: "Yes. After the workshop, you'll get access to Tuni so you can start using the simple process in your own life." },
              { q: "Is the workshop about the app or the method?", a: "Both. The workshop teaches the Log, Learn, Adjust, Repeat process and shows you how to use it inside Tuni." },
            ].map((item) => (
              <details key={item.q} style={{ background: "#fff", border: `1px solid rgba(42,33,28,0.07)`, borderRadius: "16px", padding: "4px 22px" }}>
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", cursor: "pointer", listStyle: "none", padding: "18px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: TUNI_COLORS.ink }}>
                  {item.q}
                  <span className="bff-faq-plus" style={{ color: TUNI_COLORS.coral, fontSize: "22px", fontWeight: 700, transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "0 0 18px" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: `linear-gradient(150deg, ${TUNI_COLORS.coral} 0%, ${TUNI_COLORS.pink} 100%)`, padding: "90px 26px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 16px", borderRadius: "999px", backdropFilter: "blur(4px)" }}>
            <HeartGradient size={14} color="#fff" />
            Tuni · Coming soon
          </span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(38px, 5.5vw, 66px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#fff", margin: "24px 0 0" }}>Ready to stop guessing?</h2>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1, color: "#FFE3D0", marginTop: "8px" }}>Tune in to what works.</div>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.9)", maxWidth: "560px", margin: "20px auto 0" }}>Join the live Tuni workshop. Learn the simple process, set up the app and start noticing patterns in your food, habits and body signals.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", marginTop: "30px", fontSize: "17px", fontWeight: 700, color: TUNI_COLORS.pink, background: "#fff", padding: "17px 36px", borderRadius: "999px", boxShadow: "0 16px 36px rgba(42,33,28,0.22)", border: "none", cursor: "pointer" }}>Save my spot</button>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", marginTop: "16px" }}>First invites open soon.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: TUNI_COLORS.ink, color: "rgba(255,247,241,0.6)", padding: "44px 26px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <RadiantHeart size={28} />
            <TuniWordmark size={22} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,247,241,0.45)" }}>Feedback for midlife women</span>
          </div>
          <div style={{ fontSize: "12px", lineHeight: 1.6, color: "rgba(255,247,241,0.45)", maxWidth: "560px", textAlign: "right" }}>
            For general wellness and education only. Not medical advice, diagnosis or treatment. Personal results shared are not a promise of your results. © 2026 Tuni.
            <br />
            <a href="mailto:hi@itstuni.com" style={{ color: "rgba(255,247,241,0.6)", textDecoration: "none" }}>hi@itstuni.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
