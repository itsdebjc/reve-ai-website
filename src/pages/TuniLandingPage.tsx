import { useEffect, useId, useState } from "react";
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
            <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1, color: TUNI_COLORS.pink, marginTop: "6px" }}>Tuni helps you figure out what works now.</div>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "24px 0 0" }}>Tuni is a simple app that helps you learn what your body responds to — without turning your life into a tracking project.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", marginTop: "18px", fontSize: "15px", fontWeight: 600, color: TUNI_COLORS.ink }}>
              <span>🎙️ Say it.</span>
              <span>⌨️ Type it.</span>
              <span>📸 Snap it.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "22px" }}>
              {[
                "Learn how to stop guessing and start noticing what works",
                "See how the little things can add up over time",
                "Get Tuni after the workshop and start using it yourself",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <HeartGradient size={17} />
                  <span style={{ fontSize: "15.5px", lineHeight: 1.45, color: TUNI_COLORS.ink }}>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={handleWaitlist} style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "16px 30px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.30)", marginTop: "26px" }}>Join a live Tuni workshop →</button>
            <span style={{ fontSize: "14px", color: TUNI_COLORS["muted-gray"], display: "inline-block", marginTop: "14px", marginLeft: "12px" }}>Get Tuni + learn how to use it.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img src={debbieCreamBg} alt="Debbie Collins" style={{ width: "100%", maxWidth: "400px", height: "480px", objectFit: "cover", objectPosition: "right center", borderRadius: "26px", boxShadow: "0 28px 60px rgba(42,33,28,0.18)" }} />
            <div style={{ position: "absolute", left: "-18px", bottom: "-22px", background: "#fff", borderRadius: "16px", padding: "13px 17px", boxShadow: "0 16px 34px rgba(42,33,28,0.16)", maxWidth: "228px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "21px", lineHeight: 1.15, color: TUNI_COLORS.ink }}>I built Tuni because I was doing all the right things and still had no idea what was actually working.</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ background: TUNI_COLORS.ink, color: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: TUNI_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Sound familiar?</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.4vw, 50px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "22px 0 0", color: TUNI_COLORS.cream }}>You're changing all these things. <span style={{ color: TUNI_COLORS["coral-light"] }}>But which one is actually making a difference?</span></h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "12px", margin: "20px 0 0", maxWidth: "820px" }}>
            {[{ text: "What you ate?", emoji: "🍽️" }, { text: "When you ate?", emoji: "⏰" }, { text: "The little snacks?", emoji: "🥜" }, { text: "How much you moved?", emoji: "🚶‍♀️" }, { text: "Your weekends?", emoji: "🎉" }, { text: "Your water?", emoji: "💧" }, { text: "Something else entirely?", emoji: "🤷‍♀️" }].map((item) => (
              <span key={item.text} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", background: "rgba(255,247,241,0.07)", border: "1px solid rgba(255,247,241,0.12)", color: TUNI_COLORS.cream, fontSize: "13px", fontWeight: 600, padding: "8px 12px", borderRadius: "999px", textAlign: "center", whiteSpace: "nowrap" }}>
                <span style={{ fontSize: "16px", flexShrink: 0 }}>{item.emoji}</span>{item.text}
              </span>
            ))}
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "8px 0 0", maxWidth: "560px" }}>You make progress.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "16px 0 0", maxWidth: "560px" }}>Then you stall.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "16px 0 0", maxWidth: "560px" }}>So you change something else.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "16px 0 0", maxWidth: "560px" }}>And the most frustrating part is you still don't know why.</p>
          <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid rgba(255,247,241,0.12)" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.2, color: "rgba(255,247,241,0.55)" }}>You don't need another list of rules.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.15, color: TUNI_COLORS.amber, marginTop: "6px" }}>You need better feedback.</div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
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
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 0" }}>I was doing all the right things. <span style={{ color: TUNI_COLORS.pink }}>But nothing was working.</span></h2>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0" }}>Hi, I'm Deb.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>I had always been healthy and active.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>Then midlife hit and my body stopped responding the way it used to.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>So I tried harder.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "6px 0 0" }}>More workouts. More protein. Trainers. Supplements. HRT. Podcasts. Better food.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "6px 0 0" }}>I even joined a fancier gym.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>Still, nothing seemed to work.</p>
            <div style={{ marginTop: "24px", paddingLeft: "18px", borderLeft: "2px solid rgba(240,80,140,0.3)" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "26px", lineHeight: 1.25, color: TUNI_COLORS.ink }}>The hardest part wasn't the weight. It was the confusion.</div>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0" }}>I had more health information than ever, but I still couldn't tell what was actually working for me.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>Eventually, I realized I didn't need another plan.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 700, margin: "6px 0 0" }}>I needed better feedback.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0" }}>So I started paying closer attention to my own patterns.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "6px 0 0" }}>And little by little, things started to make more sense.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 600, margin: "12px 0 0" }}>That process eventually became Tuni.</p>
          </div>
        </div>
      </section>

      {/* MY RESULTS */}
      <section style={{ background: TUNI_COLORS["cream-pink"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, color: TUNI_COLORS.ink }}>Finally, something was working.</h2>
            <span style={{ display: "inline-flex", alignItems: "center", background: TUNI_COLORS.ink, color: TUNI_COLORS.cream, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 14px", borderRadius: "999px", whiteSpace: "nowrap" }}>Three months in</span>
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "22px", color: TUNI_COLORS.pink, marginTop: "10px" }}>After seven years of trying.</div>

          <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", margin: "34px 0 0", textAlign: "left" }}>
            <div style={{ background: "#fff", borderRadius: "18px", padding: "22px 22px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "28px", color: TUNI_COLORS.coral }}>7.8 lbs</div>
              <div style={{ fontSize: "14px", color: TUNI_COLORS["body-text"], marginTop: "4px" }}>lost total</div>
            </div>
            <div style={{ background: "#fff", borderRadius: "18px", padding: "22px 22px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "28px", color: TUNI_COLORS.pink }}>7 lbs</div>
              <div style={{ fontSize: "14px", color: TUNI_COLORS["body-text"], marginTop: "4px" }}>body fat reduced <span style={{ color: TUNI_COLORS["muted-gray"] }}>(32.3% → 25.7%)</span></div>
            </div>
            <div style={{ background: "#fff", borderRadius: "18px", padding: "22px 22px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "26px", color: TUNI_COLORS.amber }}>20.0 → 16.0 lb</div>
              <div style={{ fontSize: "14px", color: TUNI_COLORS["body-text"], marginTop: "4px" }}>trunk fat</div>
            </div>
            <div style={{ background: "#fff", borderRadius: "18px", padding: "22px 22px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "26px", color: TUNI_COLORS.green }}>44.6 → 47.0 lb</div>
              <div style={{ fontSize: "14px", color: TUNI_COLORS["body-text"], marginTop: "4px" }}>muscle, maintained while losing fat</div>
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: "20px", padding: "22px 30px", margin: "20px auto 0", boxShadow: "0 10px 25px rgba(42,33,28,0.06)" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.4vw, 24px)", color: TUNI_COLORS.coral }}>I started trusting my choices again.</div>
          </div>

          <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "28px auto 0", maxWidth: "560px" }}>I had a better understanding of what seemed to work for me, what didn't, and what I wanted to try next.</p>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 600, margin: "12px auto 0", maxWidth: "560px" }}>That feeling is why I built Tuni.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "26px" }}>Join a live Tuni workshop →</button>
          <p style={{ fontSize: "13px", lineHeight: 1.55, color: TUNI_COLORS["muted-gray"], background: TUNI_COLORS.mat, borderRadius: "14px", padding: "16px 18px", margin: "26px auto 0", maxWidth: "560px" }}>These are my personal results, not a promise of yours. Your body, habits and results will be different.</p>
        </div>
      </section>

      {/* MEET TUNI */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Meet Tuni</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "760px" }}>Your body <span style={{ color: TUNI_COLORS.pink }}>feedback guide.</span></h2>
          <p style={{ fontSize: "19px", lineHeight: 1.55, color: TUNI_COLORS.ink, fontWeight: 600, maxWidth: "720px", margin: "16px 0 0" }}>Tuni helps you learn from your own life.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "720px", margin: "20px 0 0" }}>Most wellness apps give you another plan to follow.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "720px", margin: "12px 0 0" }}>Tuni takes a different approach.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "720px", margin: "16px 0 0" }}>You tell Tuni what's happening in your real life — meals, timing, movement, weekends and everything in between.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "720px", margin: "16px 0 0" }}>Over time, Tuni helps you notice possible patterns and gives you useful feedback about what might be worth paying attention to.</p>
          <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "22px", margin: "42px 0 32px" }}>
            <div style={{ background: "#fff", border: `1.5px solid rgba(240,80,140,0.15)`, borderRadius: "20px", padding: "30px 28px", boxShadow: "0 10px 25px rgba(42,33,28,0.06)" }}>
              <div style={{ fontSize: "42px", marginBottom: "16px" }}>💪</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: TUNI_COLORS.coral, marginBottom: "12px" }}>Your signals</div>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], margin: "0" }}>Energy, hunger, sleep, strength and body changes.</p>
            </div>
            <div style={{ background: "#fff", border: `1.5px solid rgba(240,80,140,0.15)`, borderRadius: "20px", padding: "30px 28px", boxShadow: "0 10px 25px rgba(42,33,28,0.06)" }}>
              <div style={{ fontSize: "42px", marginBottom: "16px" }}>🍎</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: TUNI_COLORS.pink, marginBottom: "12px" }}>Your real life</div>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], margin: "0" }}>Meals, timing, movement, weekends and everything in between.</p>
            </div>
            <div style={{ background: "#fff", border: `1.5px solid rgba(240,80,140,0.15)`, borderRadius: "20px", padding: "30px 28px", boxShadow: "0 10px 25px rgba(42,33,28,0.06)" }}>
              <div style={{ fontSize: "42px", marginBottom: "16px" }}>📊</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: TUNI_COLORS.amber, marginBottom: "12px" }}>Your feedback</div>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], margin: "0" }}>What may be helping, what may be getting in the way and what might be worth trying next.</p>
            </div>
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "720px", margin: "0" }}>Not another set of rules.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "720px", margin: "16px 0 0" }}>A better way to understand your own body.</p>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "clamp(26px, 3.2vw, 34px)", lineHeight: 1.2, color: TUNI_COLORS.pink, marginTop: "18px" }}>Tune in to what works.</div>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "28px" }}>Join a live Tuni workshop →</button>
        </div>
      </section>

      {/* EASY LOGGING */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "56px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: "520px" }}>Logging with Tuni is ridiculously easy.</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "20px 0 0", maxWidth: "520px" }}>You don't need to weigh every ingredient, search through a food database or remember everything at the end of the day.</p>
            <p style={{ fontSize: "17px", fontWeight: 700, lineHeight: 1.6, color: TUNI_COLORS.ink, margin: "14px 0 0", maxWidth: "520px" }}>Just tell Tuni what happened while you're living your life.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "26px 0 0" }}>
              {[
                { icon: "🎙️", label: "Talk it", desc: "“Breakfast was two eggs, toast and coffee around 8.”", italic: true },
                { icon: "⌨️", label: "Type it", desc: "“Had a matcha and a handful of almonds at 3.”", italic: true },
                { icon: "📸", label: "Photograph it", desc: "Take a photo of packaged food, a nutrition label or a restaurant menu and let Tuni help from there.", italic: false },
              ].map((item) => (
                <div key={item.label} style={{ background: "#fff", borderRadius: "16px", padding: "16px 20px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: TUNI_COLORS.ink, marginBottom: "6px" }}>
                    <span style={{ fontSize: "17px" }}>{item.icon}</span>{item.label}
                  </div>
                  <p style={{ fontSize: "14.5px", lineHeight: 1.5, color: TUNI_COLORS["body-text"], margin: 0, fontStyle: item.italic ? "italic" : "normal" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "15.5px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "22px 0 0", maxWidth: "520px" }}>Forgot something? Add it later. Estimates are completely fine.</p>
            <p style={{ fontSize: "15.5px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px 0 0", maxWidth: "520px" }}>Tuni doesn't need a perfect food diary. It just needs enough of your real life to start helping you notice useful patterns.</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", lineHeight: 1.4, color: TUNI_COLORS.ink, margin: "20px 0 0", maxWidth: "520px" }}>Logging should take seconds. Not become your second job.</p>
          </div>
          <div className="bff-hide-mobile" style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
            <img src={tuniAppToday} alt="Tuni Today screen" style={{ display: "block", width: "220px", aspectRatio: "9 / 19.5", objectFit: "cover", borderRadius: "22px", boxShadow: "0 18px 40px rgba(42,33,28,0.14)" }} />
            <img src={tuniAppCoach} alt="Tuni Coach screen" style={{ display: "block", width: "220px", aspectRatio: "9 / 19.5", objectFit: "cover", borderRadius: "22px", boxShadow: "0 18px 40px rgba(42,33,28,0.14)" }} />
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section style={{ background: TUNI_COLORS.ink, overflow: "hidden", padding: "15px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "bffMarquee 34s linear infinite" }}>
          {["Tune in to what works", "Understand your body", "Built for midlife", "Better feedback", "Small shifts", "Daily choices", "See the pattern", "Stop guessing", "Start learning", "Data is feedback", "Learn what works for you"].map((text, i) => (
            <span key={`${i}-1`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: TUNI_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
              {text}
              {i < 10 && <span style={{ color: TUNI_COLORS.coral, marginLeft: "22px" }}>•</span>}
            </span>
          ))}
          {["Tune in to what works", "Understand your body", "Built for midlife", "Better feedback", "Small shifts", "Daily choices", "See the pattern", "Stop guessing", "Start learning", "Data is feedback", "Learn what works for you"].map((text, i) => (
            <span key={`${i}-2`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: TUNI_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }} aria-hidden="true">
              {text}
              {i < 10 && <span style={{ color: TUNI_COLORS.coral, marginLeft: "22px" }}>•</span>}
            </span>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: TUNI_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>How it works</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Log. Learn. Adjust. <span style={{ color: TUNI_COLORS.pink }}>Repeat.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>A simple feedback loop built around your real life.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", margin: "26px 0 28px" }}>
              {[
                { step: "Log", desc: "Tell Tuni what happened." },
                { step: "Learn", desc: "Notice possible patterns across your days and weeks." },
                { step: "Adjust", desc: "Choose one small thing worth trying." },
                { step: "Repeat", desc: "See what happens next." }
              ].map((item, i) => (
                <div key={item.step} style={{ display: "flex", gap: "14px" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "17px", color: TUNI_COLORS.coral, minWidth: "70px" }}>Step {i + 1}:</div>
                  <div>
                    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "17px", color: TUNI_COLORS.ink }}>{item.step}</div>
                    <p style={{ fontSize: "16px", lineHeight: 1.55, color: TUNI_COLORS["body-text"], margin: "4px 0 0" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: TUNI_COLORS.ink, marginBottom: "10px" }}>Keep what helps. Change what doesn't.</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "19px", color: TUNI_COLORS["placeholder-gray"] }}>No calorie counting.</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "19px", color: TUNI_COLORS["placeholder-gray"], marginTop: "6px" }}>No perfection.</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "19px", color: TUNI_COLORS["placeholder-gray"], marginTop: "6px" }}>No judgment.</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: TUNI_COLORS.ink, marginTop: "12px" }}>Just useful feedback you can act on.</div>
            </div>
            <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "28px" }}>Join the waiting list</button>
          </div>
          {/* iPhone mockup with onboarding */}
          <div style={{ justifySelf: "center", width: "341px", height: "742px", background: "#0A0A0A", borderRadius: "44px", border: "12px solid #0A0A0A", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ flex: 1, background: "linear-gradient(135deg, #E8F4FA 0%, #F5E6F0 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "44px 20px 24px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "14px", right: "16px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TUNI_COLORS["body-text"] }}>Onboarding</div>
              <div style={{ marginBottom: "22px", display: "flex", justifyContent: "center" }}>
                <RadiantHeart size={64} />
              </div>
              <div style={{ marginBottom: "28px" }}>
                <TuniWordmark size={32} />
              </div>
              <p style={{ fontSize: "15px", lineHeight: 1.5, color: TUNI_COLORS.ink, textAlign: "center", maxWidth: "280px", margin: "0 0 28px" }}>Hi, I'm Tuni. I'm here to help you notice your patterns and learn what works for you. Tap Start whenever you're ready.</p>
              <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                <button style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: "linear-gradient(135deg, #0B9EFF, #0B7FFF)", border: "none", padding: "10px 20px", borderRadius: "999px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Start</button>
                <button style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: "linear-gradient(135deg, #0B9EFF, #0B7FFF)", border: "none", padding: "10px 20px", borderRadius: "999px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Tell me more</button>
              </div>
              <div style={{ display: "flex", gap: "8px", width: "100%", maxWidth: "260px", paddingTop: "16px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
                <input type="text" placeholder="Type your answer..." style={{ flex: 1, fontSize: "13px", color: TUNI_COLORS.ink, padding: "10px 14px", border: "1px solid rgba(42,33,28,0.1)", borderRadius: "999px", outline: "none", background: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }} disabled />
                <button style={{ fontSize: "12px", fontWeight: 700, color: "#fff", background: "linear-gradient(135deg, #FF6A4D, #F0508C)", border: "none", padding: "10px 14px", borderRadius: "999px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-LIFE MOMENTS */}
      <section style={{ background: TUNI_COLORS["cream-pink"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: TUNI_COLORS.pink, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Real life</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "720px" }}>Tuni is there in the moments when you're thinking, <span style={{ color: TUNI_COLORS.pink }}>"Okay&hellip; what should I do here?"</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", margin: "28px 0 24px" }}>
            {[{ icon: "🍽️", text: "Looking at a menu." }, { icon: "👩‍🍳", text: "Standing in the kitchen at 4 p.m." }, { icon: "🍪", text: "Wondering if you actually need a snack." }, { icon: "😕", text: "Trying to figure out why you feel off." }, { icon: "🍳", text: "Planning dinner." }, { icon: "📱", text: "Getting back into your rhythm after the weekend." }].map((item) => (
              <div key={item.text} style={{ background: "#fff", borderRadius: "16px", padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: TUNI_COLORS.ink, lineHeight: 1.4 }}>{item.text}</div>
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
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "28px" }}>Join a live Tuni workshop →</button>
        </div>
      </section>

      {/* THE BIG IDEA */}
      <section style={{ background: TUNI_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>A different way to think about it</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: "22px 0 0" }}>The goal is to find yours. <span style={{ color: TUNI_COLORS.pink }}>Not mine. Yours.</span></h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "26px 0" }}>
            {["Your patterns.", "Your body.", "Your choices.", "Your feedback."].map((word) => (
              <span key={word} style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: TUNI_COLORS.ink, fontSize: "15px", fontWeight: 700, padding: "9px 18px", borderRadius: "999px" }}>{word}</span>
            ))}
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "8px auto 0", maxWidth: "560px" }}>What worked for me may not be what works for you.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS.ink, fontWeight: 600, margin: "8px auto 0", maxWidth: "560px" }}>That's the whole point.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "12px auto 0", maxWidth: "560px" }}>Tuni helps you start figuring out what your own body responds to.</p>
        </div>
      </section>

      {/* WORKSHOP TEASER */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Want to see how this works?</h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "18px auto 0" }}>Join me for a live Tuni workshop.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], margin: "10px auto 0" }}>I'll share what changed for me, show you Tuni in real life and help you understand how to start using it for yourself.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "26px" }}>See upcoming workshops →</button>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section style={{ background: TUNI_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto 30px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Is this you?</span>
        </div>
        <div className="bff-grid-2col" style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
          <div style={{ background: "#fff", borderRadius: "22px", padding: "34px 32px", boxShadow: "0 10px 30px rgba(42,33,28,0.06)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 13px", borderRadius: "999px" }}>Good fit</span>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, margin: "18px 0 20px" }}>Tuni might be for you if&hellip;</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "You're in perimenopause or menopause and your body doesn't respond the way it used to.",
                "You're already doing many of the \"right\" things, but still can't tell what's working.",
                "You don't want to count every calorie or obsess over every macro.",
                "You want something that works with restaurants, weekends and real life.",
                "You want to understand your body and feel more confident in your own choices.",
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
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, margin: "18px 0 20px" }}>Tuni probably isn't for you if&hellip;</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "You want a strict meal plan telling you exactly what to eat every day.",
                "You want exact calorie and macro targets to hit at every meal.",
                "You want to weigh, measure and control every bite you eat.",
                "You want a quick fix, guaranteed weight loss or a dramatic transformation overnight.",
                "You're looking for medical, hormone or clinical nutrition treatment.",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                  <span style={{ color: TUNI_COLORS["placeholder-gray"], fontWeight: 800, flexShrink: 0, lineHeight: 1.4 }}>✕</span>
                  <span style={{ fontSize: "15px", color: TUNI_COLORS["body-text"], lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p style={{ fontSize: "13px", lineHeight: 1.5, color: TUNI_COLORS["muted-gray"], textAlign: "center", maxWidth: "1000px", margin: "24px auto 0" }}>Tuni is for general wellness and education only. It is not medical advice, diagnosis or treatment.</p>
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer" }}>Join a live Tuni workshop →</button>
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
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: TUNI_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>A different approach</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.6vw, 54px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: "20px 0 0", color: TUNI_COLORS.cream }}>You don't need to be perfect. You need to understand why.</h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "24px auto 0", maxWidth: "600px" }}>Tuni won't judge your lunch.</p>
          <div style={{ margin: "10px auto 0", maxWidth: "600px" }}>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "0" }}>One meal isn't a failure.</p>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "8px 0 0" }}>One weekend isn't a restart.</p>
          </div>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(19px, 2.8vw, 26px)", lineHeight: 1.16, margin: "30px auto 0", maxWidth: "660px" }}>Real change takes real effort. Understanding why makes it stick.</p>
        </div>
      </section>

      {/* LANDSCAPE STATEMENT */}
      <section style={{ position: "relative", minHeight: "620px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={heroCherryBlossom} alt="Cherry blossom landscape" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(42,33,28,0.28), rgba(42,33,28,0.6))" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 26px", maxWidth: "780px" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: TUNI_COLORS.cream, margin: "0", textShadow: "0 2px 20px rgba(42,33,28,0.4)" }}>Your body has changed. Now you have a better way to <span style={{ color: "#FFC8A0" }}>understand what it's telling you.</span></h2>
          <button onClick={handleWaitlist} style={{ display: "inline-block", marginTop: "26px", fontSize: "16px", fontWeight: 700, color: TUNI_COLORS.ink, background: TUNI_COLORS.cream, padding: "15px 28px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(0,0,0,0.25)" }}>Join the waiting list</button>
        </div>
      </section>

      {/* CHOOSE YOUR WORKSHOP */}
      <section id="bff-waitlist" style={{ background: TUNI_COLORS.cream, padding: "84px 26px", scrollMarginTop: "70px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "54px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: TUNI_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Choose what works for you</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Join a live Tuni workshop. <span style={{ color: TUNI_COLORS.pink }}>Pick the date that works best for you.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: TUNI_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>I'll walk you through the simple process I created to stop guessing and start learning what my body responds to. You'll learn how Tuni works, get set up and know exactly how to start using it in your own life.</p>
            <div style={{ display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" }}>
              {[{ label: "Live", sub: "Online with Deb" }, { label: "60 min", sub: "Guided workshop" }, { label: "Tuni included", sub: "Get set up together" }].map((item, i) => (
                <div key={item.label} style={{ background: "#fff", borderRadius: "16px", padding: "18px 22px", minWidth: "150px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "18px", color: [TUNI_COLORS.coral, TUNI_COLORS.pink, TUNI_COLORS.amber][i] }}>{item.label}</div>
                  <div style={{ fontSize: "13px", color: TUNI_COLORS["body-text"], marginTop: "4px" }}>{item.sub}</div>
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
                <div style={{ fontSize: "14px", color: TUNI_COLORS["body-text"], marginBottom: "22px" }}>Choose your date and get on the list.</div>
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input type="text" placeholder="First name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={{ fontSize: "15px", color: TUNI_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: TUNI_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <input type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={{ fontSize: "15px", color: TUNI_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: TUNI_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <button type="submit" style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, border: "none", padding: "16px", borderRadius: "999px", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Choose this workshop</button>
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
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 0" }}>Questions you might have.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "Do I need a body-composition scale?", a: "No, but I strongly recommend one if you want to understand your body-composition trends over time. A weekly scan gives Tuni another useful piece of information to look at alongside what you're eating, how you're moving, your sleep, energy and how you feel. If you're not a numbers person, that's completely fine. You can use Tuni without a scale and focus on the signals that matter to you. The more useful information you share with Tuni, the more context it has to help you notice possible patterns." },
              { q: "Is this a diet?", a: "No. Tuni does not give you a prescribed meal plan or require calorie counting. It helps you learn from your own patterns." },
              { q: "Will Tuni tell me exactly what to eat?", a: "No. Tuni helps you look at your food, habits and body feedback so you can make more informed choices for yourself." },
              { q: "Is Tuni medical advice?", a: "No. Tuni and the workshop are for general wellness and education only." },
              { q: "Is Tuni a weight-loss app?", a: "Not specifically. Tuni can support wellness goals that include weight or body composition, but its job is to help you understand your patterns and what your body appears to respond to." },
              { q: "When do I get Tuni?", a: "You'll receive access as part of the workshop experience so you can get set up and start using it." },
              { q: "What if I can't make my workshop date?", a: "You can move to another available live workshop date." },
              { q: "Is the workshop about Tuni or the process?", a: "Both. You'll learn Log. Learn. Adjust. Repeat. and how to use that process inside Tuni." },
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
            Tune in
          </span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(38px, 5.5vw, 66px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#fff", margin: "24px 0 0" }}>Ready to stop guessing?</h2>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1, color: "#FFE3D0", marginTop: "8px" }}>Tune in to what works.</div>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.9)", maxWidth: "560px", margin: "20px auto 0" }}>Join a live Tuni workshop, get set up and start learning what your own body responds to.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", marginTop: "30px", fontSize: "17px", fontWeight: 700, color: TUNI_COLORS.pink, background: "#fff", padding: "17px 36px", borderRadius: "999px", boxShadow: "0 16px 36px rgba(42,33,28,0.22)", border: "none", cursor: "pointer" }}>Join the waiting list</button>
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
};

export default TuniLandingPage;
