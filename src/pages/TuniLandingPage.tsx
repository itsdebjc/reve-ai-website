import { useEffect, useId, useState, type ReactNode } from "react";
import { setCanonical } from "@/lib/seo";
import debbieCollins from "@/assets/debbie-collins.jpeg";
import debbieBeach from "@/assets/debbie-beach.jpeg";
import heroCherryBlossom from "@/assets/hero-cherry-blossom.jpg";
import debbieCreamBg from "@/assets/debbie-collins-cream-bg.jpg";
import tuniAppToday from "@/assets/tuni-app-today.png";
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

const HeartGradient = ({ size = 26, color }: { size?: number; color?: string }) => {
  const gradId = `bffGrad-${useId()}`;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={TUNI_COLORS.coral} />
          <stop offset="1" stopColor={TUNI_COLORS.pink} />
        </linearGradient>
      </defs>
      <path
        d="M60 100 C28 79 14 62 14 43 C14 29 25 20 37 20 C49 20 56 28 60 36 C64 28 71 20 83 20 C95 20 106 29 106 43 C106 62 92 79 60 100 Z"
        fill={color ?? `url(#${gradId})`}
      />
    </svg>
  );
};

const RadiantHeart = ({ size = 78 }: { size?: number }) => {
  const gradId = `bffGrad2-${useId()}`;
  return (
    <svg width={size} height={size} viewBox="0 0 220 220" fill="none">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
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
        fill={`url(#${gradId})`}
      />
    </svg>
  );
};

const IconMic = ({ size = 16, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);

const IconType = ({ size = 16, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7V5h16v2" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="9" y1="19" x2="15" y2="19" />
  </svg>
);

const IconCamera = ({ size = 16, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="14" r="3.3" />
  </svg>
);

const IconCheck = ({ size = 16, color = TUNI_COLORS.coral }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="11" fill={color} opacity="0.12" />
    <path d="M7.5 12.5l3 3 6-6.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBadge = ({ children, color, size = 46 }: { children: ReactNode; color: string; size?: number }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: `${color}1F`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    {children}
  </div>
);

const IconPulse = ({ size = 20, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h4l2.5-7 4 14 2.5-7H22" />
  </svg>
);

const IconHeartLine = ({ size = 20, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.5C7 17 3 13.6 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.6 0 3.1.9 4.3 2.4 1.2-1.5 2.7-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 4.3-4 7.7-9 11.2Z" />
  </svg>
);

const IconCompass = ({ size = 20, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" />
  </svg>
);

const IconChat = ({ size = 20, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5h16v10H9l-4 4v-4H4Z" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="12" x2="13" y2="12" />
  </svg>
);

const IconClock = ({ size = 24, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

const IconLeaf = ({ size = 24, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z" />
    <path d="M5 19c3-4 6-7 14-14" />
  </svg>
);

const IconQuestion = ({ size = 24, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.2 1-1.2 2" />
    <circle cx="12" cy="17" r="0.6" fill={color} stroke="none" />
  </svg>
);

const IconMenu = ({ size = 24, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v7a2 2 0 0 0 4 0V3M8 3v18M8 10v0" />
    <path d="M16 3c-1.4 0-2.5 1.6-2.5 5s1.1 5 2.5 5v10" />
  </svg>
);

const IconPhone = ({ size = 24, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
    <line x1="11" y1="18.3" x2="13" y2="18.3" />
  </svg>
);

const IconRefresh = ({ size = 24, color = TUNI_COLORS.ink }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
    <path d="M18 3v4h-4M6 21v-4h4" />
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

const TuniLandingPage = () => {
  useEffect(() => {
    document.title = "Tuni | Body Feedback for Midlife Women";
    const desc = "Tuni helps women in perimenopause and menopause stop guessing and start learning what works for their own body.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    setCanonical("/bff-coach");
  }, []);

  const [form, setForm] = useState({ name: "", email: "", submitted: false });

  const handleWaitlist = () => {
    document.getElementById("bff-waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=XjEbAU", {
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
            relationships: { list: { data: { type: "list", id: "WmvKHc" } } },
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
          .bff-grid-4col { grid-template-columns: 1fr 1fr !important; }
          .bff-hide-mobile { display: none !important; }
          .bff-header-label { display: none !important; }
          .bff-header-tagline { display: none !important; }
          .bff-header-button { padding: 8px 14px !important; font-size: 12px !important; }
          .bff-sticky-desktop { position: static !important; top: auto !important; }
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
          <button className="bff-header-button" onClick={handleWaitlist} style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "11px 20px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 8px 18px rgba(240,80,140,0.26)" }}>Join a live Tuni workshop →</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ background: `linear-gradient(180deg, ${TUNI_COLORS.cream} 0%, ${TUNI_COLORS["cream-alt"]} 100%)`, padding: "64px 26px 76px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.04fr", gap: "56px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "26px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>For women in perimenopause + menopause</span>
            </div>
            <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: 0, color: TUNI_COLORS.ink }}>Your body changed.</h1>
            <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(32px, 4.4vw, 48px)", lineHeight: 1, color: TUNI_COLORS.pink, marginTop: "6px" }}>Tuni helps you see what's working now.</div>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "22px 0 0" }}>You eat pretty well. You move. You try to make good choices.</p>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "12px 0 0" }}>But the things that used to work don't seem to work the same way anymore.</p>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "12px 0 0" }}>And you're left wondering:</p>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 700, maxWidth: "520px", margin: "6px 0 0" }}>What is actually making a difference?</p>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>Tuni connects what you eat, how you move and what's changing in your body, so you can stop guessing and start learning what works for you.</p>

            <button onClick={handleWaitlist} style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "16px 30px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 6px 16px rgba(240,80,140,0.22)", marginTop: "26px" }}>Join a live Tuni workshop →</button>
            <span style={{ fontSize: "14px", color: TUNI_COLORS["muted-gray"], display: "inline-block", marginTop: "14px", marginLeft: "12px" }}><strong style={{ color: TUNI_COLORS.ink }}>$25</strong> &middot; Get Tuni + learn how to use it.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img src={debbieCreamBg} alt="Debbie Collins" style={{ width: "100%", maxWidth: "400px", height: "480px", objectFit: "cover", objectPosition: "right center", borderRadius: "26px", boxShadow: "0 28px 60px rgba(42,33,28,0.18)" }} />
            <div style={{ position: "absolute", left: "-18px", bottom: "-22px", background: "#fff", borderRadius: "16px", padding: "13px 17px", boxShadow: "0 16px 34px rgba(42,33,28,0.16)", maxWidth: "228px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "21px", lineHeight: 1.15, color: TUNI_COLORS.ink }}>I built Tuni because I was doing all the right things, and I was still gaining weight.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY INTELLIGENCE STATEMENT */}
      <section style={{ background: TUNI_COLORS["cream-pink"], padding: "72px 26px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: TUNI_COLORS.pink, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>A different kind of feedback</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "22px 0 0", color: TUNI_COLORS.ink }}>Most apps tell you what to do. <span style={{ color: TUNI_COLORS.pink }}>Tuni helps you see what's working.</span></h2>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "560px", margin: "16px auto 0" }}>Tuni connects your everyday choices with what your body is doing over time.</p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ background: TUNI_COLORS.ink, color: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: TUNI_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Sound familiar?</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.4vw, 50px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "22px 0 0", color: TUNI_COLORS.cream }}>You're changing all the things.<br /><span style={{ color: TUNI_COLORS["coral-light"] }}>But which ones are actually helping?</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "22px 0 0", maxWidth: "560px" }}>You eat well. You walk. You focus on protein. You go to the gym. Maybe you drink less wine, eat earlier, sleep more or drink more water.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "20px 0 0", maxWidth: "560px" }}>Sometimes things move.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "10px 0 0", maxWidth: "560px" }}>Then they don't.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "10px 0 0", maxWidth: "560px" }}>And you have no idea why.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "20px 0 0", maxWidth: "560px" }}>Was it&hellip;</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "12px", margin: "16px 0 0", maxWidth: "820px" }}>
            {["The protein?", "The walking?", "The weekends?", "The timing?", "Something else entirely?"].map((text) => (
              <span key={text} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(255,247,241,0.07)", border: "1px solid rgba(255,247,241,0.12)", color: TUNI_COLORS.cream, fontSize: "13px", fontWeight: 600, padding: "8px 14px", borderRadius: "999px", textAlign: "center", whiteSpace: "nowrap" }}>
                {text}
              </span>
            ))}
          </div>
          <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid rgba(255,247,241,0.12)" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.2, color: "rgba(255,247,241,0.55)" }}>You don't need another list of rules.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.15, color: TUNI_COLORS.amber, marginTop: "6px" }}>You need better feedback.</div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "start" }}>
          <div className="bff-sticky-desktop" style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
            <img src={debbieBeach} alt="Debbie at beach" style={{ display: "block", width: "100%", height: "520px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 24px 50px rgba(42,33,28,0.16)" }} />
            <div style={{ background: "#fff", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 10px 25px rgba(42,33,28,0.08)", marginTop: "18px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "22px", lineHeight: 1.3, color: TUNI_COLORS.ink }}>"I built this because I needed it too."</div>
            </div>
          </div>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Why I built Tuni</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 0" }}>I was doing all the right things. <span style={{ color: TUNI_COLORS.pink }}>But nothing was working.</span></h2>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0" }}>Hi, I'm Deb.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>I've always been pretty healthy and active.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>Then I hit midlife and the things that had always worked for me didn't seem to work anymore.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>So I tried harder.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "6px 0 0" }}>I worked out more. Focused on protein. Hired trainers. Took supplements. Started HRT. Tried to make better choices.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>I really felt like I was doing all the right things.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 700, margin: "6px 0 0" }}>But my body wasn't changing.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>I had more information than ever, but I still couldn't tell what was actually working for me.</p>
            <div style={{ marginTop: "24px", paddingLeft: "18px", borderLeft: "2px solid rgba(240,80,140,0.3)" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "26px", lineHeight: 1.25, color: TUNI_COLORS.ink }}>The hardest part wasn't the weight. It was the confusion.</div>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0" }}>And when I looked back at my numbers, I could see it.</p>

            <div style={{ display: "flex", gap: "10px", margin: "18px 0" }}>
              {[
                { year: "2022", val: "34.8%" },
                { year: "2023", val: "34.0%" },
                { year: "2024", val: "34.8%" },
              ].map((row) => (
                <div key={row.year} style={{ flex: 1, background: TUNI_COLORS.mat, borderRadius: "14px", padding: "14px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: "12px", color: TUNI_COLORS["muted-gray"], fontWeight: 600 }}>{row.year}</div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: TUNI_COLORS["placeholder-gray"], marginTop: "4px" }}>{row.val}</div>
                  <div style={{ fontSize: "11px", color: TUNI_COLORS["muted-gray"], marginTop: "2px" }}>body fat</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>Years were going by and I was basically in the same place.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>I was trying. A lot. I just didn't have useful feedback.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>So I stopped adding more rules and started paying closer attention to what I was already doing.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "6px 0 0" }}>What I ate. How much protein I was getting. When I ate. What happened on weekends. What changed when I was consistent.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>And slowly, I started seeing patterns.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 700, margin: "6px 0 0" }}>Then things started to change.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>My numbers finally started moving.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "18px 0" }}>
              {[
                { val: "124.2 → 114.2 lb", label: "10 lb lighter", color: TUNI_COLORS.coral },
                { val: "32.3% → 25.7%", label: "body fat", color: TUNI_COLORS.pink },
                { val: "20.0 → 15.4 lb", label: "trunk fat", color: TUNI_COLORS.amber },
                { val: "7 → 5", label: "visceral fat", color: TUNI_COLORS.green },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "#fff", borderRadius: "14px", padding: "16px 14px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 900, fontSize: "26px", color: stat.color, lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontSize: "12.5px", color: TUNI_COLORS["body-text"], marginTop: "6px" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>And 8 of those 10 pounds were fat, not muscle. That part matters to me at 54.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>I'm proud of those numbers, but the biggest difference is that I understand my body so much better now.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>I found meals that work well for me. I got more consistent. I started seeing which choices seemed to help and which didn't.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>Sushi is a funny example. I still eat it, but now I know my body often reacts afterwards.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "6px 0 0" }}>That doesn't make sushi bad.</p>
            <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "24px", lineHeight: 1.3, color: TUNI_COLORS.pink, marginTop: "14px" }}>It just means now I know. And knowing changes the choice.</div>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "18px 0 0" }}>That process became Tuni.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 700, margin: "6px 0 0" }}>I wasn't missing effort. I was missing feedback.</p>
            <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 6px 16px rgba(240,80,140,0.22)", border: "none", cursor: "pointer", marginTop: "22px" }}>Join a live Tuni workshop →</button>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: TUNI_COLORS["muted-gray"], background: TUNI_COLORS.mat, borderRadius: "14px", padding: "14px 16px", margin: "20px 0 0", fontWeight: 600 }}>These are my personal results. Every woman's body will respond differently.</p>
          </div>
        </div>
      </section>

      {/* HOW TUNI IS DIFFERENT */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>See how Tuni works</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Most apps give you a plan. <span style={{ color: TUNI_COLORS.pink }}>Tuni gives you feedback.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "720px", margin: "20px 0 0" }}>Tuni brings your food, movement and body changes together so you can see patterns, ask questions and understand what this means for your body.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "36px", margin: "36px 0 28px", paddingTop: "28px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
              {[
                { num: "01", line1: "Log", line2: "your day, your way.", details: ["Talk it. Type it. Snap a photo.", "Capture meals and everyday choices without weighing every ingredient or turning your day into a tracking project."], tag: "No calorie counting.", color: TUNI_COLORS.coral },
                { num: "02", line1: "Ask", line2: "a coach that knows your data.", details: ["Ask Tuni about your day, your patterns or your progress.", "Tuni looks across your food, movement, timing and body changes to help you see what may be working and what might be getting in the way."], tag: "Feedback based on you.", color: TUNI_COLORS.pink },
                { num: "03", line1: "Scan", line2: "what's actually changing.", details: ["Add your weekly body composition scan and see what's happening beneath the number on the scale.", "Follow changes in body fat, muscle and more over time."], tag: "Beyond weight.", color: TUNI_COLORS.amber },
                { num: "04", line1: "Snap", line2: "food in front of you.", details: ["Restaurant menu. Packaged food. Nutrition label. Something you're thinking about eating.", "Take a photo and ask Tuni to help you make sense of it based on what you're working on."], tag: "Real-life food help.", color: TUNI_COLORS.green },
              ].map((item, i) => (
                <div key={item.line1}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "15px", color: item.color, letterSpacing: "0.02em" }}>{item.num}</span>
                    <span style={{ flex: 1, height: "1px", background: "rgba(42,33,28,0.15)", maxWidth: "56px" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: "0" }}>{item.line1}<br /><span style={{ color: item.color }}>{item.line2}</span></h3>
                  {item.details.map((d, di) => (
                    <p key={di} style={{ fontSize: "16px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], maxWidth: "460px", margin: di === 0 ? "14px 0 0" : "8px 0 0" }}>{d}</p>
                  ))}
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: `${item.color}15`, color: item.color, fontSize: "14px", fontWeight: 700, padding: "8px 16px", borderRadius: "999px", marginTop: "14px" }}>✓ {item.tag}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: TUNI_COLORS.ink, marginBottom: "12px" }}>Your body is already giving you feedback. Tuni helps you make sense of it.</div>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "0 0 12px" }}>No calorie counting. No perfect days. No generic plan.</p>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "0" }}>Just your real life, your own data and a clearer idea of what may be working, what might be getting in the way and what you want to try next.</p>
            </div>
            <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "28px" }}>Join a live Tuni workshop →</button>
          </div>
          {/* iPhone mockups with app screens, fanned */}
          <div className="bff-hide-mobile" style={{ justifySelf: "center", position: "sticky", top: "100px", width: "340px", height: "660px" }}>
            <div style={{ position: "absolute", left: 0, top: "28px", width: "280px", height: "608px", transform: "rotate(-7deg)", transformOrigin: "bottom left", background: "#0A0A0A", borderRadius: "42px", border: "11px solid #0A0A0A", boxShadow: "0 20px 50px rgba(0,0,0,0.25)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <img src={tuniAppCoach} alt="Tuni coach screen" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", right: 0, top: 0, width: "300px", height: "652px", transform: "rotate(6deg)", transformOrigin: "bottom right", background: "#0A0A0A", borderRadius: "44px", border: "12px solid #0A0A0A", boxShadow: "0 24px 60px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <img src={tuniAppToday} alt="Tuni app screen" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section style={{ background: TUNI_COLORS.ink, overflow: "hidden", padding: "15px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "bffMarquee 24s linear infinite" }}>
          {Array(6).fill(["Talk it", "Type it", "Snap it", "Scan it", "Ask Tuni"]).flat().map((text, i) => (
            <span key={`${i}-1`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: TUNI_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
              {text}
              <span style={{ color: TUNI_COLORS.coral, marginLeft: "22px" }}>•</span>
            </span>
          ))}
          {Array(6).fill(["Talk it", "Type it", "Snap it", "Scan it", "Ask Tuni"]).flat().map((text, i) => (
            <span key={`${i}-2`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: TUNI_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }} aria-hidden="true">
              {text}
              <span style={{ color: TUNI_COLORS.coral, marginLeft: "22px" }}>•</span>
            </span>
          ))}
        </div>
      </section>

      {/* REAL-LIFE MOMENTS */}
      <section style={{ background: TUNI_COLORS["cream-pink"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: TUNI_COLORS.pink, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Real life</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "720px" }}>Tuni helps when <span style={{ color: TUNI_COLORS.pink }}>real life happens.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", margin: "28px 0 24px" }}>
            {[
              { icon: <IconMenu color={TUNI_COLORS.coral} />, color: TUNI_COLORS.coral, text: "Looking at a menu." },
              { icon: <IconClock color={TUNI_COLORS.pink} />, color: TUNI_COLORS.pink, text: "Standing in the kitchen at 4 p.m." },
              { icon: <IconLeaf color={TUNI_COLORS.amber} />, color: TUNI_COLORS.amber, text: "Wondering if you actually need a snack." },
              { icon: <IconQuestion color={TUNI_COLORS.green} />, color: TUNI_COLORS.green, text: "Trying to figure out why you feel off." },
              { icon: <IconMenu color={TUNI_COLORS.coral} />, color: TUNI_COLORS.coral, text: "Planning dinner." },
              { icon: <IconPhone color={TUNI_COLORS.pink} />, color: TUNI_COLORS.pink, text: "Getting back into your rhythm after the weekend." },
            ].map((item) => (
              <div key={item.text} style={{ background: "#fff", borderRadius: "16px", padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>
                <IconBadge color={item.color} size={48}>{item.icon}</IconBadge>
                <div style={{ fontSize: "16px", fontWeight: 600, color: TUNI_COLORS.ink, lineHeight: 1.4, marginTop: "14px" }}>{item.text}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "680px", margin: "0 0 8px" }}>Because this stuff doesn't happen in a perfect wellness bubble.</p>
          <div style={{ background: TUNI_COLORS.ink, borderRadius: "24px", padding: "40px 36px", color: TUNI_COLORS.cream, marginTop: "24px" }}>
            <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TUNI_COLORS.amber, marginBottom: "16px" }}>Not the voice that says</div>
                <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,247,241,0.6)", margin: "0" }}>"You blew it."</p>
                <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,247,241,0.6)", margin: "10px 0 0" }}>"Start again Monday."</p>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: TUNI_COLORS.amber, marginBottom: "16px" }}>More like</div>
                <p style={{ fontSize: "18px", fontWeight: 800, color: TUNI_COLORS.cream, lineHeight: 1.4, margin: "0" }}>"What happened?"</p>
                <p style={{ fontSize: "18px", fontWeight: 800, color: TUNI_COLORS.cream, lineHeight: 1.4, margin: "8px 0 0" }}>"What did you notice?"</p>
                <p style={{ fontSize: "18px", fontWeight: 800, color: TUNI_COLORS.cream, lineHeight: 1.4, margin: "8px 0 0" }}>"What might help next?"</p>
              </div>
            </div>
            <p style={{ fontSize: "18px", fontWeight: 800, color: TUNI_COLORS.cream, margin: "28px 0 0", paddingTop: "24px", borderTop: "1px solid rgba(255,247,241,0.12)" }}>A calm body feedback guide for real life.</p>
          </div>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 6px 16px rgba(240,80,140,0.22)", border: "none", cursor: "pointer", marginTop: "28px" }}>Join a live Tuni workshop →</button>
        </div>
      </section>

      {/* THE BIG IDEA */}
      <section style={{ background: TUNI_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>A different way to think about it</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: "22px 0 0" }}>The goal is to find out <span style={{ color: TUNI_COLORS.pink }}>what works for your body.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "16px auto 0", maxWidth: "560px" }}>Tuni helps you notice your patterns, see how your body is responding and make small adjustments based on what you learn.</p>

          <div className="bff-grid-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", margin: "40px 0 0", textAlign: "left" }}>
            {[
              { label: "Your patterns", desc: "What keeps showing up.", icon: <IconPulse color={TUNI_COLORS.coral} />, color: TUNI_COLORS.coral },
              { label: "Your body", desc: "What's actually changing.", icon: <IconHeartLine color={TUNI_COLORS.pink} />, color: TUNI_COLORS.pink },
              { label: "Your choices", desc: "What you try next.", icon: <IconCompass color={TUNI_COLORS.amber} />, color: TUNI_COLORS.amber },
              { label: "Your feedback", desc: "What you learn from it.", icon: <IconChat color={TUNI_COLORS.green} />, color: TUNI_COLORS.green },
            ].map((item) => (
              <div key={item.label} style={{ background: "#fff", borderRadius: "18px", padding: "22px 20px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                <IconBadge color={item.color}>{item.icon}</IconBadge>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "16px", color: TUNI_COLORS.ink, margin: "14px 0 4px" }}>{item.label}</div>
                <div style={{ fontSize: "14px", lineHeight: 1.4, color: TUNI_COLORS["body-text"] }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 600, margin: "36px auto 0", maxWidth: "560px" }}>Because the goal isn't to follow someone else's plan. It's to figure out what works for you.</p>
        </div>
      </section>

      {/* WORKSHOP TEASER */}
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
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <RadiantHeart size={64} />
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: TUNI_COLORS.cream }}>Want to see how this works?</h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "18px auto 0" }}>Join me for a live Tuni workshop.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "10px auto 0" }}>I'll share what changed for me, show you Tuni in real life and help you understand how to start using it for yourself.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 6px 16px rgba(240,80,140,0.32)", border: "none", cursor: "pointer", marginTop: "26px" }}>Join a live Tuni workshop →</button>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Is this you?</span>
        </div>
        <div style={{ maxWidth: "980px", margin: "22px auto 0", background: "#fff", borderRadius: "22px", padding: "44px 48px", boxShadow: "0 10px 30px rgba(42,33,28,0.06)" }}>
          <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3vw, 30px)", lineHeight: 1.15, margin: "0 0 26px", textAlign: "center" }}>Tuni may be for you if&hellip;</h3>
          <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 32px" }}>
            {[
              "Your body doesn't seem to respond the way it used to.",
              "You're already trying but you're not sure which habits are actually helping.",
              "You're tired of hearing ten different versions of what you \"should\" be doing.",
              "You want to understand your body without obsessing over calories or macros.",
              "You want something that works around dinners out, travel, weekends and normal life.",
              "You'd like to feel like you understand your body again.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                <HeartGradient size={18} />
                <span style={{ fontSize: "16px", color: TUNI_COLORS.ink, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: "13px", lineHeight: 1.5, color: TUNI_COLORS["muted-gray"], textAlign: "center", maxWidth: "980px", margin: "20px auto 0" }}>Tuni is for general wellness and education only. It is not medical advice, diagnosis or treatment.</p>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button onClick={() => document.getElementById("workshop-form")?.scrollIntoView({ behavior: "smooth", block: "center" })} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 6px 16px rgba(240,80,140,0.22)", border: "none", cursor: "pointer" }}>Join a live Tuni workshop →</button>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What's included</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0" }}>What you'll get</h2>
          <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", margin: "34px 0 26px" }}>
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

      {/* LANDSCAPE STATEMENT */}
      <section style={{ position: "relative", minHeight: "620px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={heroCherryBlossom} alt="Cherry blossom landscape" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(42,33,28,0.28), rgba(42,33,28,0.6))" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 26px", maxWidth: "780px" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: TUNI_COLORS.cream, margin: "0", textShadow: "0 2px 20px rgba(42,33,28,0.4)" }}>You don't have to figure this out <span style={{ color: "#FFC8A0" }}>alone.</span></h2>
          <button onClick={handleWaitlist} style={{ display: "inline-block", marginTop: "26px", fontSize: "16px", fontWeight: 700, color: TUNI_COLORS.ink, background: TUNI_COLORS.cream, padding: "15px 28px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(0,0,0,0.25)" }}>Join a live Tuni workshop →</button>
        </div>
      </section>

      {/* CHOOSE YOUR WORKSHOP */}
      <section id="bff-waitlist" style={{ background: TUNI_COLORS.cream, padding: "84px 26px", scrollMarginTop: "70px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "54px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Choose what works for you</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Join a live Tuni workshop. <span style={{ color: TUNI_COLORS.pink }}>Pick the date that works best for you.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>I'm starting with small live workshops because I don't want to hand you an app and expect you to figure it out by yourself.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "12px 0 0" }}>I'll show you exactly how I use Tuni in real life.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "12px 0 0" }}>We'll log meals together. I'll show you how to use restaurant menus, packaged food and everyday meals. And I'll help you get set up so you can start learning from your own information.</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "26px", flexWrap: "wrap" }}>
              {["$25", "Live online with Deb", "60 minutes", "Tuni access included"].map((label, i) => (
                <span key={label} style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: [TUNI_COLORS.coral, TUNI_COLORS.pink, TUNI_COLORS.amber, TUNI_COLORS.green][i], fontSize: "13px", fontWeight: 700, padding: "9px 16px", borderRadius: "999px", boxShadow: "0 4px 12px rgba(42,33,28,0.04)" }}>{label}</span>
              ))}
            </div>
            <button onClick={() => document.getElementById("workshop-form")?.scrollIntoView({ behavior: "smooth", block: "center" })} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 6px 16px rgba(240,80,140,0.22)", border: "none", cursor: "pointer", marginTop: "26px" }}>Join a live Tuni workshop →</button>
          </div>
          <div id="workshop-form" style={{ background: "#fff", borderRadius: "24px", padding: "36px 34px", boxShadow: "0 24px 56px rgba(42,33,28,0.12)" }}>
            {!form.submitted ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <RadiantHeart size={30} />
                  <TuniWordmark size={24} />
                </div>
                <div style={{ fontSize: "14px", color: TUNI_COLORS["body-text"], marginBottom: "22px" }}>Choose your date and get on the list.</div>
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input type="text" placeholder="First name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={{ fontSize: "15px", color: TUNI_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: TUNI_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <input type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={{ fontSize: "15px", color: TUNI_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: TUNI_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <button type="submit" style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, border: "none", padding: "16px", borderRadius: "999px", cursor: "pointer", boxShadow: "0 6px 16px rgba(240,80,140,0.22)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Choose this workshop</button>
                </form>
                <div style={{ fontSize: "12px", color: TUNI_COLORS["placeholder-gray"], textAlign: "center", marginTop: "14px" }}>Can't make that one? Choose another upcoming date.</div>
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

      {/* FAQ */}
      <section style={{ background: TUNI_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "38px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Good to know</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 0" }}>A few questions you might have.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "Is Tuni a diet?", a: "No. Tuni doesn't give you a strict meal plan or ask you to follow someone else's diet. It helps you learn from what you're already eating and make changes based on what you're seeing." },
              { q: "Do I have to count calories or log perfectly?", a: "No. You don't need to weigh every ingredient or get every detail right. An estimate is fine. Consistency is more useful than perfection." },
              { q: "Do I need a body composition scale?", a: (
                <>
                  <p style={{ margin: 0 }}>No. You can start using Tuni without one and learn from your food, movement and daily patterns.</p>
                  <p style={{ margin: "10px 0 0" }}>But if you want Tuni to connect those habits with changes in body fat, muscle and body composition, a scale helps. For the most in-depth data, I recommend the <a href="https://link.amazon/B0bdC4sOT" target="_blank" rel="noopener noreferrer" style={{ color: TUNI_COLORS.coral, textDecoration: "underline" }}>RENPHO 50+ metrics scale</a> (~$200). If you'd rather start smaller, there's also a <a href="https://link.amazon/B0d6e0DPM" target="_blank" rel="noopener noreferrer" style={{ color: TUNI_COLORS.coral, textDecoration: "underline" }}>~$49 option</a> with fewer metrics.</p>
                </>
              ) },
              { q: "Will Tuni tell me exactly what to eat?", a: "No. Tuni isn't there to give every woman the same food plan. It helps you understand your own patterns so you can make more informed choices." },
              { q: "When do I get access to Tuni?", a: "You'll receive access as part of the workshop so we can get you set up and started together." },
            ].map((item) => (
              <details key={item.q} id={item.q.includes("body composition") ? "scale-faq" : undefined} style={{ background: "#fff", border: `1px solid rgba(42,33,28,0.07)`, borderRadius: "16px", padding: "4px 22px" }}>
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", cursor: "pointer", listStyle: "none", padding: "18px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: TUNI_COLORS.ink }}>
                  {item.q}
                  <span className="bff-faq-plus" style={{ color: TUNI_COLORS.coral, fontSize: "22px", fontWeight: 700, transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: "15px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "0 0 18px" }}>{item.a}</div>
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
            Tune in
          </span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(38px, 5.5vw, 66px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#fff", margin: "24px 0 0" }}>Ready to stop guessing?</h2>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1, color: "#FFE3D0", marginTop: "8px" }}>Tune in to what works.</div>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.9)", maxWidth: "560px", margin: "20px auto 0" }}>Join a live Tuni workshop, get set up and start learning what your own body responds to.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", marginTop: "30px", fontSize: "17px", fontWeight: 700, color: TUNI_COLORS.pink, background: "#fff", padding: "17px 36px", borderRadius: "999px", boxShadow: "0 16px 36px rgba(42,33,28,0.22)", border: "none", cursor: "pointer" }}>Join a live Tuni workshop →</button>
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
            For general wellness and education only. Not medical advice, diagnosis or treatment. Personal results shared are not a promise of your results.
            <br />
            <a href="https://itstuni.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,247,241,0.5)", textDecoration: "none" }}>Privacy Policy</a>
            {" | "}
            <a href="https://itstuni.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,247,241,0.5)", textDecoration: "none" }}>Terms of Use</a>
            {" · "}
            <a href="mailto:hi@itstuni.com" style={{ color: "rgba(255,247,241,0.5)", textDecoration: "none" }}>hi@itstuni.com</a>
            <br />
            <span style={{ fontSize: "11px", color: "rgba(255,247,241,0.32)" }}>© 2026 Tuni. Tuni is operated by 1236097 BC Ltd.</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default TuniLandingPage;
