import { Linkedin } from "lucide-react";

const TikTokIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.85a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1D2224] pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div>
            <div style={{ fontFamily: "'Anton', sans-serif" }} className="text-2xl text-[#F2E4D8] mb-3 uppercase">
              Reve
            </div>
            <div style={{ fontFamily: "'Anton', sans-serif" }} className="text-sm text-[#F2E4D8]/80 mb-2 uppercase">
              Better marketing. A team that knows AI.
            </div>
            <div className="font-['Inter'] text-sm text-[#F2E4D8]/60">Located in beautiful British Columbia.</div>
          </div>

          <div className="hidden md:flex gap-8 font-['Inter'] font-bold text-sm">
            <a href="/services" className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors">
              SERVICES
            </a>
            <a href="/case-studies" className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors">
              CASE STUDIES
            </a>
            <a href="/learning" className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors">
              LEARNING
            </a>
            <a href="/about" className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors">
              ABOUT
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/debbiejcollins/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.tiktok.com/@itsdigitaldeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#F2E4D8] hover:text-[#E893AC] transition-colors"
            >
              <TikTokIcon size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-['Inter'] text-xs text-[#F2E4D8]/50">
          <p>© 2026 REVE</p>
          <a href="/bff-coach" className="hover:text-[#E893AC] transition-colors flex items-center gap-1">
            <span>❤️</span> Tuni Workshop
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
