// Subtle hand-drawn decorative illustrations used across the homepage to add
// dimension and brand texture without cluttering content. All decorative —
// purely visual, aria-hidden, pointer-events-none, behind content (-z-10).
//
// `tone` controls default color and opacity:
//   - "light" (default): off-white strokes for dark backgrounds
//   - "dark":            soft warm-ink strokes for light/cream backgrounds



type Tone = "light" | "dark";

type DoodleProps = {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
  tone?: Tone;
};

const base = "pointer-events-none absolute -z-10";

const toneDefaults = (tone: Tone = "light") =>
  tone === "dark"
    ? { color: "hsl(20 30% 20%)", opacity: 0.18 }
    : { color: "hsl(var(--foreground))", opacity: 0.7 };

// Version-aware accent: always renders DoodleStars (dots have been retired across versions).
export const DoodleAccent = (props: DoodleProps) => {
  return <DoodleStars {...props} />;
};

// Cluster of slender 4-point editorial sparkles. Tuned to the brand's
// dusty pink + warm-ink palette: refined, asymmetric, and a touch hand-drawn
// (no perfectly geometric symmetry, no harsh saturation).
export const DoodleStars = ({
  className = "",
  size = 170,
  color,
  opacity,
  tone = "light",
}: DoodleProps) => {
  // Brighter brand pink so sparkles read at a glance on both surfaces.
  const fill = color ?? (tone === "dark" ? "hsl(350 60% 70%)" : "hsl(var(--primary))");
  const op = opacity ?? 1;
  // Slender 4-point sparkle: long vertical/horizontal arms with a tight pinch
  // at center. `r` is the arm length; `w` controls the waist (smaller = more
  // elegant). Drawn with straight lines + a soft curve at the tips.
  const star = (cx: number, cy: number, r: number, w = 0.08) =>
    `M ${cx} ${cy - r} ` +
    `Q ${cx + r * w} ${cy - r * w}, ${cx + r} ${cy} ` +
    `Q ${cx + r * w} ${cy + r * w}, ${cx} ${cy + r} ` +
    `Q ${cx - r * w} ${cy + r * w}, ${cx - r} ${cy} ` +
    `Q ${cx - r * w} ${cy - r * w}, ${cx} ${cy - r} Z`;
  return (
    <svg
      aria-hidden="true"
      className={`${base} ${className}`}
      width={size}
      height={size * 0.5}
      viewBox="0 0 80 40"
      fill="none"
      style={{ color: fill, opacity: op }}
    >
      <g fill="currentColor">
        {/* Three sparkles, intentionally varied in size + position for an
            editorial, non-mechanical rhythm. */}
        <path d={star(10, 20, 7.5, 0.07)} />
        <path d={star(30, 28, 4, 0.1)} />
        <path d={star(60, 14, 5.5, 0.08)} />
      </g>
    </svg>
  );
};

// Small cluster of dots — calm, editorial accent (inspired by ··  ·· marks).
// Default uses the brand pink so dots read as a soft, warm punctuation.
export const DoodleDots = ({
  className = "",
  size = 56,
  color,
  opacity,
  tone = "light",
}: DoodleProps) => {
  const fill = color ?? (tone === "dark" ? "hsl(350 50% 60%)" : "hsl(var(--primary))");
  const op = opacity ?? 0.85;
  return (
    <svg
      aria-hidden="true"
      className={`${base} ${className}`}
      width={size}
      height={size / 3}
      viewBox="0 0 60 20"
      fill="none"
      style={{ color: fill, opacity: op }}
    >
      <g fill="currentColor">
        <circle cx="6" cy="10" r="2.4" />
        <circle cx="16" cy="10" r="2.4" />
        <circle cx="44" cy="10" r="2.4" />
        <circle cx="54" cy="10" r="2.4" />
      </g>
    </svg>
  );
};

export const DoodleFlower = ({
  className = "",
  size = 60,
  color,
  opacity,
  tone = "light",
}: DoodleProps) => {
  const d = toneDefaults(tone);
  return (
    <svg
      aria-hidden="true"
      className={`${base} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill="none"
      style={{ color: color ?? d.color, opacity: opacity ?? d.opacity }}
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <ellipse cx="35" cy="18" rx="5" ry="9" />
        <ellipse cx="52" cy="35" rx="9" ry="5" />
        <ellipse cx="35" cy="52" rx="5" ry="9" />
        <ellipse cx="18" cy="35" rx="9" ry="5" />
        <circle cx="35" cy="35" r="4" fill="currentColor" fillOpacity="0.4" />
      </g>
    </svg>
  );
};

export const DoodleSquiggle = ({
  className = "",
  size = 80,
  color,
  opacity,
  tone = "light",
}: DoodleProps) => {
  const d = toneDefaults(tone);
  return (
    <svg
      aria-hidden="true"
      className={`${base} ${className}`}
      width={size}
      height={size / 2}
      viewBox="0 0 80 40"
      fill="none"
      style={{ color: color ?? d.color, opacity: opacity ?? d.opacity }}
    >
      <path
        d="M3 20 Q 13 4, 23 20 T 43 20 T 63 20 T 83 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const DoodleSparkle = ({
  className = "",
  size = 44,
  color,
  opacity,
  tone = "light",
}: DoodleProps) => {
  const d = toneDefaults(tone);
  return (
    <svg
      aria-hidden="true"
      className={`${base} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      style={{ color: color ?? d.color, opacity: opacity ?? d.opacity }}
    >
      <path
        d="M25 5 L28 22 L45 25 L28 28 L25 45 L22 28 L5 25 L22 22 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
};

export const DoodleCircle = ({
  className = "",
  size = 70,
  color,
  opacity,
  tone = "light",
}: DoodleProps) => {
  const d = toneDefaults(tone);
  return (
    <svg
      aria-hidden="true"
      className={`${base} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill="none"
      style={{ color: color ?? d.color, opacity: opacity ?? d.opacity }}
    >
      <circle
        cx="35"
        cy="35"
        r="30"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeDasharray="2 5"
        fill="none"
      />
    </svg>
  );
};

// New: long, calming wave — perfect as a horizon-style accent
export const DoodleWave = ({
  className = "",
  size = 160,
  color,
  opacity,
  tone = "light",
}: DoodleProps) => {
  const d = toneDefaults(tone);
  return (
    <svg
      aria-hidden="true"
      className={`${base} ${className}`}
      width={size}
      height={size / 4}
      viewBox="0 0 160 40"
      fill="none"
      style={{ color: color ?? d.color, opacity: opacity ?? d.opacity }}
    >
      <path
        d="M2 22 Q 18 6, 36 22 T 70 22 T 104 22 T 138 22 T 172 22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

// New: simple botanical leaf — calming and organic
export const DoodleLeaf = ({
  className = "",
  size = 70,
  color,
  opacity,
  tone = "light",
}: DoodleProps) => {
  const d = toneDefaults(tone);
  return (
    <svg
      aria-hidden="true"
      className={`${base} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill="none"
      style={{ color: color ?? d.color, opacity: opacity ?? d.opacity }}
    >
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M10 60 Q 35 50, 55 18 Q 38 22, 22 38 T 10 60" />
        <path d="M10 60 Q 28 44, 50 24" />
      </g>
    </svg>
  );
};
