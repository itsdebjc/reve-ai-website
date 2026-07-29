import debbiePhoto from "@/assets/debbie-portrait.jpg";
import { CALENDLY_URL } from "@/lib/links";

const MARQUEE_ITEMS = [
  "GAME PLAN",
  "BRAND BRAIN",
  "MARKETING ASSISTANT",
  "CONTENT ENGINE",
  "CREATIVE LAB",
  "CUSTOMER INTELLIGENCE",
  "BUSINESS HEALTH DASHBOARD",
  "NEW BUSINESS ENGINE",
];

const HeroNewDesign = () => {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      <section className="bg-[#20262A] pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#5FC2E8] uppercase mb-6"
          >
            AI Works Best in Expert Hands
          </p>

          <div className="grid md:grid-cols-[1.15fr_1fr] gap-16 items-center">
            <div>
              <h1
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(44px, 6.5vw, 80px)",
                  lineHeight: 0.95,
                  textTransform: "uppercase",
                }}
                className="text-[#F2E4D8] mb-7"
              >
                AI That
                <br />
                Knows Your
                <br />
                Business.
              </h1>
              <p className="font-['Inter'] text-lg leading-relaxed text-[#F2E4D8]/75 max-w-lg mb-9">
                You know your business. I know how to make AI work for
                marketing. Together, we build a system your team can actually
                run.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-sm bg-[#E893AC] text-[#20262A] px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity inline-block leading-tight uppercase"
                >
                  Book a Call
                </a>
                <a
                  href="/services"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-sm border-2 border-[#F2E4D8]/40 text-[#F2E4D8] px-8 py-4 rounded-[10px] hover:bg-white/5 transition-colors inline-block leading-tight uppercase"
                >
                  View Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full bg-[#E893AC] rounded-2xl" aria-hidden="true" />
              <img
                src={debbiePhoto}
                alt="Debbie Collins"
                className="relative w-full rounded-2xl aspect-[4/5] object-cover"
              />
              <div className="absolute left-4 bottom-4 bg-[#20262A]/80 backdrop-blur-sm px-4 py-2.5 rounded-[10px]">
                <div
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-[#F2E4D8] text-sm uppercase"
                >
                  Debbie Collins
                </div>
                <div className="text-[#F2E4D8]/70 text-xs font-['Inter']">
                  Founder, Reve
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-[#1D2224] py-5 overflow-hidden border-y border-white/10">
        <div className="flex marquee whitespace-nowrap">
          {[...row, ...row].map((t, i) => (
            <div key={i} className="flex items-center shrink-0 px-8">
              <span
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-[#F2E4D8]/70 text-sm uppercase"
              >
                {t}
              </span>
              <span className="ml-8 text-[#E893AC]">&#9670;</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroNewDesign;
