import { Linkedin } from "lucide-react";
import heroImg from "@/assets/footer-hills.jpg";

// TikTok isn't in lucide-react, so we use a minimal inline SVG that matches
// the stroke-style of the lucide icons we use elsewhere.
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
    <footer className="relative isolate bg-surface pt-32 pb-10 overflow-hidden">
      <img
        src={heroImg}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/40 to-background/80" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-24">
          <p className="font-serif italic text-xl md:text-2xl text-foreground">
            your thinking <span className="text-primary">→</span> your system{" "}
            <span className="text-primary">→</span> your team
          </p>
        </div>

        <div className="border-t border-hairline pt-10 space-y-8 label-mono">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/services" className="hover:text-primary transition-colors">Services</a>
            <a href="/learning" className="hover:text-primary transition-colors">Learning</a>
            <a href="/case-studies" className="hover:text-primary transition-colors">Case Studies</a>
            <a href="/#about" className="hover:text-primary transition-colors">About</a>
          </div>

          <div className="border-t border-hairline pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-foreground/55 text-center md:text-left">
              © 2026 Reve AI · Beautiful British Columbia · Built by Reve AI Agency
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <a href="#cta" className="hover:text-primary transition-colors">Contact</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a
                href="https://www.linkedin.com/in/debbiejcollins/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors inline-flex items-center"
              >
                <Linkedin size={18} strokeWidth={1.75} />
              </a>
              <a
                href="https://www.tiktok.com/@itsdigitaldeb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-primary transition-colors inline-flex items-center"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
