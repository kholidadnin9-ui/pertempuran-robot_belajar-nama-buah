import { useLayoutEffect, useState, type CSSProperties, type RefObject } from "react";
import { SPRITE_META } from "./Robot";
import { SmokeCloud } from "./Smoke";

const towers = [
  { x: 46, y: 300, w: 96, h: 300, fill: "#e4f6ff", accent: "#43bfe9", win: "#8fd6ee" },
  { x: 176, y: 348, w: 74, h: 250, fill: "#cfeafd", accent: "#68d0ef", win: "#93cde8" },
  { x: 300, y: 236, w: 120, h: 366, fill: "#f2fbff", accent: "#37b7e8", win: "#9ad9f0" },
  { x: 512, y: 388, w: 86, h: 210, fill: "#d8f1fd", accent: "#5ecbeb", win: "#89cbe8" },
  { x: 860, y: 400, w: 84, h: 200, fill: "#ddf3fd", accent: "#4fc6ea", win: "#8ccce9" },
  { x: 990, y: 300, w: 112, h: 310, fill: "#f4fcff", accent: "#38b9e9", win: "#9bd9f1" },
  { x: 1160, y: 356, w: 82, h: 256, fill: "#d5effc", accent: "#5bcdec", win: "#8bcfea" },
  { x: 1286, y: 286, w: 104, h: 322, fill: "#e9f8ff", accent: "#45c2e9", win: "#92d6ef" },
];

function Tower({ t }: { t: (typeof towers)[number] }) {
  const cols = Math.max(2, Math.floor(t.w / 30));
  const rows = 5;
  return (
    <g>
      <rect x={t.x} y={t.y} width={t.w} height={t.h} rx="16" fill={t.fill} stroke="#b5dff2" strokeWidth="2" />
      <rect x={t.x + 6} y={t.y + 10} width={t.w - 12} height="16" rx="7" fill={t.accent} opacity="0.85" />
      <rect x={t.x + t.w / 2 - 16} y={t.y - 18} width="32" height="22" rx="6" fill={t.accent} opacity="0.7" />
      <path d={`M${t.x + t.w / 2} ${t.y - 18}v-26`} stroke="#9ccbe2" strokeWidth="4" strokeLinecap="round" />
      <circle cx={t.x + t.w / 2} cy={t.y - 48} r="5" fill="#ffd75e" />
      <g fill={t.win} opacity="0.8">
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((__, c) => (
            <rect
              key={`${r}-${c}`}
              x={t.x + 14 + c * ((t.w - 22) / cols)}
              y={t.y + 46 + r * 34}
              width={Math.min(16, (t.w - 26) / cols)}
              height="20"
              rx="4"
            />
          ))
        )}
      </g>
      <rect x={t.x + t.w - 16} y={t.y + 30} width="7" height={t.h - 52} rx="3.5" fill={t.accent} opacity="0.5" />
      <rect x={t.x} y={t.y + t.h - 16} width={t.w} height="16" rx="8" fill={t.accent} opacity="0.28" />
    </g>
  );
}

function Tree({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g fill="#5fbf63" stroke="#3d8f43" strokeWidth="2">
        <circle cx="-16" cy="-8" r="17" />
        <circle cx="3" cy="-22" r="22" />
        <circle cx="24" cy="-6" r="18" />
        <circle cx="4" cy="2" r="20" />
      </g>
      <g fill="#87d98a" opacity="0.7">
        <circle cx="-4" cy="-24" r="9" />
        <circle cx="18" cy="-12" r="7" />
      </g>
      <rect x="-4" y="6" width="8" height="20" rx="3" fill="#8a5a3b" />
    </g>
  );
}

export function CityBackdrop({ dim = false }: { dim?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 1440 900" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#32b7f5" />
            <stop offset="0.42" stopColor="#8dddfb" />
            <stop offset="0.72" stopColor="#d7f5ff" />
            <stop offset="1" stopColor="#eefcff" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="0.45" stopColor="#fff6c9" stopOpacity="0.55" />
            <stop offset="1" stopColor="#fff6c9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b7d3e6" />
            <stop offset="0.4" stopColor="#a7c8df" />
            <stop offset="1" stopColor="#7fa8c8" />
          </linearGradient>
          <linearGradient id="railGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#d5eefb" />
            <stop offset="1" stopColor="#9dc4dd" />
          </linearGradient>
          <linearGradient id="stageGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e6f7ff" />
            <stop offset="0.55" stopColor="#b7dcf1" />
            <stop offset="1" stopColor="#8fb7d4" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#skyGrad)" />
        <circle cx="1110" cy="150" r="300" fill="url(#sunGlow)" />
        <circle cx="1110" cy="150" r="62" fill="#fffdf2" opacity="0.85" />

        {/* clouds */}
        <g fill="#ffffff" opacity="0.82">
          <g transform="translate(150 150)">
            <ellipse cx="0" cy="12" rx="86" ry="26" />
            <ellipse cx="-40" cy="0" rx="46" ry="28" />
            <ellipse cx="30" cy="-4" rx="54" ry="32" />
          </g>
          <g transform="translate(720 100) scale(0.85)">
            <ellipse cx="0" cy="12" rx="96" ry="28" />
            <ellipse cx="-46" cy="-2" rx="50" ry="30" />
            <ellipse cx="36" cy="-6" rx="58" ry="34" />
          </g>
          <g transform="translate(1300 236) scale(0.7)">
            <ellipse cx="0" cy="12" rx="90" ry="26" />
            <ellipse cx="-42" cy="-2" rx="48" ry="28" />
            <ellipse cx="34" cy="-4" rx="52" ry="30" />
          </g>
          <g transform="translate(960 330) scale(0.5)" opacity="0.7">
            <ellipse cx="0" cy="12" rx="90" ry="26" />
            <ellipse cx="-42" cy="-2" rx="48" ry="28" />
            <ellipse cx="34" cy="-4" rx="52" ry="30" />
          </g>
        </g>

        {/* far skyline */}
        <g fill="#9ad8f3" opacity="0.72">
          <rect x="0" y="440" width="70" height="180" rx="10" />
          <rect x="84" y="480" width="50" height="140" rx="8" />
          <rect x="240" y="420" width="60" height="200" rx="10" />
          <path d="M360 620V470c0-38 30-64 64-64s64 26 64 64v150Z" />
          <rect x="520" y="470" width="54" height="150" rx="8" />
          <rect x="600" y="430" width="70" height="190" rx="10" />
          <rect x="700" y="490" width="46" height="130" rx="8" />
          <rect x="790" y="440" width="62" height="180" rx="10" />
          <rect x="920" y="480" width="54" height="140" rx="8" />
          <rect x="1120" y="430" width="66" height="190" rx="10" />
          <rect x="1210" y="470" width="56" height="150" rx="8" />
          <rect x="1300" y="420" width="70" height="200" rx="10" />
          <rect x="1390" y="480" width="50" height="140" rx="8" />
          <path d="M568 470v-56" stroke="#9ad8f3" strokeWidth="8" />
          <path d="M1190 430v-44" stroke="#9ad8f3" strokeWidth="6" />
          <circle cx="568" cy="408" r="8" />
          <circle cx="1190" cy="382" r="6" />
        </g>

        {/* observation tower */}
        <g>
          <path d="M418 610 440 300h40l22 310Z" fill="#bfe6f7" opacity="0.9" />
          <path d="M430 360h60M436 420h48" stroke="#a5d9ef" strokeWidth="4" />
          <ellipse cx="460" cy="300" rx="52" ry="20" fill="#dff5ff" stroke="#a9dcf0" strokeWidth="3" />
          <ellipse cx="460" cy="286" rx="30" ry="14" fill="#aee4f8" />
          <path d="M460 272v-44" stroke="#a9dcf0" strokeWidth="5" />
          <circle cx="460" cy="224" r="6" fill="#ffd75e" />
        </g>

        {/* mid towers */}
        <g>
          {towers.map((t) => (
            <Tower key={t.x} t={t} />
          ))}
        </g>

        {/* floating platforms */}
        <g>
          <ellipse cx="236" cy="330" rx="90" ry="24" fill="#dff4ff" stroke="#a9dcf0" strokeWidth="3" />
          <ellipse cx="236" cy="340" rx="70" ry="16" fill="#9dd6ef" />
          <ellipse cx="236" cy="322" rx="44" ry="10" fill="#c6ecfb" />
          <path d="M190 338v22M282 338v22" stroke="#a9dcf0" strokeWidth="4" />
          <circle cx="236" cy="356" r="5" fill="#ffe071" />
          <path d="M162 330h-30M310 330h28" stroke="#c8ecfb" strokeWidth="4" strokeLinecap="round" />

          <ellipse cx="1226" cy="270" rx="96" ry="25" fill="#dff4ff" stroke="#a9dcf0" strokeWidth="3" />
          <ellipse cx="1226" cy="282" rx="72" ry="16" fill="#9dd6ef" />
          <ellipse cx="1226" cy="262" rx="46" ry="10" fill="#c6ecfb" />
          <path d="M1176 280v24M1276 280v24" stroke="#a9dcf0" strokeWidth="4" />
          <circle cx="1226" cy="300" r="5" fill="#ffe071" />
        </g>

        {/* small flying craft */}
        <g>
          <g transform="translate(630 260)">
            <path d="M-32 0h44l18 6-18 6h-44Z" fill="#ffffff" opacity="0.85" />
            <path d="M-14-8h18l6 8h-24Z" fill="#9fd9f2" />
            <circle cx="6" cy="6" r="3" fill="#ffd75e" />
          </g>
          <g transform="translate(1046 356) scale(0.8)">
            <path d="M-28 0h38l16 5-16 5h-38Z" fill="#ffffff" opacity="0.8" />
            <path d="M-12-7h16l5 7h-21Z" fill="#9fd9f2" />
            <circle cx="4" cy="5" r="3" fill="#ffd75e" />
          </g>
        </g>

        {/* back railing + trees */}
        <g>
          <rect x="0" y="542" width="1440" height="52" fill="url(#railGrad)" />
          <rect x="0" y="542" width="1440" height="10" fill="#ffffff" opacity="0.9" />
          <rect x="0" y="578" width="1440" height="8" fill="#49c6f2" opacity="0.65" />
          <g fill="#ffd75e">
            {Array.from({ length: 18 }).map((_, i) => (
              <rect key={i} x={30 + i * 80} y="560" width="26" height="7" rx="3.5" opacity="0.9" />
            ))}
          </g>
          <g fill="#7fd4ef" opacity="0.8">
            {Array.from({ length: 9 }).map((_, i) => (
              <rect key={i} x={90 + i * 160} y="588" width="54" height="10" rx="5" />
            ))}
          </g>
          <Tree x={54} y={556} scale={1.15} />
          <Tree x={1388} y={556} scale={1.15} />
          <Tree x={220} y={548} scale={0.8} />
          <Tree x={1240} y={548} scale={0.85} />
        </g>

        {/* floor */}
        <rect x="0" y="594" width="1440" height="306" fill="url(#floorGrad)" />
        <path d="M0 594h1440v14H0z" fill="#eaf8ff" opacity="0.8" />
        <g stroke="#e2f6ff" strokeWidth="2.5" opacity="0.55">
          <path d="M720 596 160 900M720 596 360 900M720 596 560 900M720 596 720 900M720 596 880 900M720 596 1080 900M720 596 1280 900M0 640h1440M0 676h1440M0 726h1440M0 794h1440M0 880h1440" />
        </g>
        <g stroke="#ffe071" strokeWidth="5" opacity="0.8">
          <path d="M0 604h1440" />
        </g>

        {/* central holo platform */}
        <ellipse cx="720" cy="744" rx="430" ry="146" fill="url(#stageGrad)" opacity="0.55" />
        <g fill="none">
          <ellipse cx="720" cy="744" rx="428" ry="144" stroke="#f2fdff" strokeWidth="7" opacity="0.8" />
          <ellipse cx="720" cy="744" rx="400" ry="132" stroke="#46d7ff" strokeWidth="4" opacity="0.65" />
          <ellipse cx="720" cy="744" rx="300" ry="98" stroke="#ffffff" strokeWidth="3" opacity="0.5" />
          <ellipse cx="720" cy="744" rx="190" ry="62" stroke="#64e2ff" strokeWidth="3" opacity="0.55" />
        </g>
        <g opacity="0.5" stroke="#2c8fc4" strokeWidth="3">
          <path d="M594 744h252M720 680v128" />
        </g>
        <g fill="#3b9dcb" opacity="0.42">
          <rect x="470" y="690" width="60" height="10" rx="5" />
          <rect x="910" y="690" width="60" height="10" rx="5" />
          <rect x="676" y="836" width="88" height="11" rx="5.5" />
        </g>

        {/* arena corner decor */}
        <g>
          <rect x="18" y="628" width="140" height="16" rx="8" fill="#3fd3ff" opacity="0.7" />
          <rect x="18" y="650" width="96" height="10" rx="5" fill="#ffe071" opacity="0.7" />
          <rect x="1282" y="628" width="140" height="16" rx="8" fill="#3fd3ff" opacity="0.7" />
          <rect x="1326" y="650" width="96" height="10" rx="5" fill="#ffe071" opacity="0.7" />
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0a2e5c]/35" />
      {dim && <div className="absolute inset-0 bg-[#031631]/55" />}
    </div>
  );
}

export function BattlePlatform({ glow, mirrored = false }: { glow: string; mirrored?: boolean }) {
  return (
    <div
      className="pointer-events-none absolute bottom-[-4%] left-1/2 -z-10 h-[22%] w-[132%] -translate-x-1/2"
      aria-hidden="true"
      style={{ "--glow": glow, "--dir": mirrored ? -1 : 1 } as CSSProperties}
    >
      <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(10,45,80,0.45)_0%,rgba(10,45,80,0.2)_45%,transparent_72%)]" />
      <div className="absolute inset-x-[6%] bottom-[24%] h-[52%] rounded-[50%] border-[3px] border-white/70 bg-[linear-gradient(180deg,rgba(233,251,255,0.85)_0%,rgba(133,209,238,0.55)_55%,rgba(66,155,196,0.4)_100%)] shadow-[0_0_26px_rgba(96,235,255,0.65)]" />
      <div className="absolute inset-x-[16%] bottom-[34%] h-[40%] rounded-[50%] border-2 border-[color:var(--glow)] opacity-80" />
      <div className="absolute inset-x-[30%] bottom-[44%] h-[24%] rounded-[50%] border border-white/80 opacity-70" />
      <div className="absolute inset-x-[8%] bottom-[22%] h-[16%] rounded-[50%] bg-[color:var(--glow)] opacity-25 blur-md" />
    </div>
  );
}

const sparkAngles = [-62, -38, -14, 12, 34, 58, -78, 76, -50, 40, -24, 66];

export interface ShotInfo {
  /** id sprite penembak & sasaran (untuk membaca titik moncong / titik kena) */
  shooterSprite: string;
  targetSprite: string;
  shooterRole: "player" | "enemy";
  color: { core: string; light: string };
}

interface ShotGeometry {
  mx: number;
  my: number;
  tx: number;
  ty: number;
  length: number;
  angle: number;
}

function pointOf(box: DOMRect, container: DOMRect, p: [number, number]) {
  return {
    x: box.left - container.left + p[0] * box.width,
    y: box.top - container.top + p[1] * box.height,
  };
}

export function BattleEffects({
  shot,
  containerRef,
}: {
  shot: ShotInfo | null;
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const [geo, setGeo] = useState<ShotGeometry | null>(null);

  useLayoutEffect(() => {
    if (!shot) {
      setGeo(null);
      return;
    }
    const container = containerRef.current;
    if (!container) return;
    const shooterEl = container.querySelector<HTMLElement>(`[data-robot="${shot.shooterRole}"]`);
    const targetEl = container.querySelector<HTMLElement>(
      `[data-robot="${shot.shooterRole === "player" ? "enemy" : "player"}"]`
    );
    if (!shooterEl || !targetEl) return;
    const c = container.getBoundingClientRect();
    const m = pointOf(shooterEl.getBoundingClientRect(), c, SPRITE_META[shot.shooterSprite].muzzle);
    const t = pointOf(targetEl.getBoundingClientRect(), c, SPRITE_META[shot.targetSprite].hit);
    const dx = t.x - m.x;
    const dy = t.y - m.y;
    setGeo({
      mx: m.x,
      my: m.y,
      tx: t.x,
      ty: t.y,
      length: Math.hypot(dx, dy),
      angle: Math.atan2(dy, dx),
    });
  }, [shot, containerRef]);

  if (!shot || !geo) return null;

  const vars = {
    "--lc": shot.color.core,
    "--lc-light": shot.color.light,
  } as CSSProperties;

  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden="true" style={vars}>
      {/* sinar laser keluar dari moncong */}
      <div
        className="laser-anchor"
        style={{ left: geo.mx, top: geo.my, width: geo.length, transform: `translateY(-50%) rotate(${geo.angle}rad)` }}
      >
        <div className="laser-wrap">
          <div className="laser-halo" />
          <div className="laser-core" />
          <div className="laser-head" />
        </div>
      </div>

      {/* kilatan di ujung senjata */}
      <div className="muzzle-flash" style={{ left: geo.mx, top: geo.my }}>
        <svg viewBox="0 0 120 120" className="h-full w-full">
          <g transform="translate(60 60)">
            <path
              d="M0-56 10-16 52-34 22-4 58 6 20 14 38 50 8 22 0 56-8 22-38 50-20 14-58 6-22-4-52-34-10-16Z"
              style={{ fill: "var(--lc-light)" }}
            />
            <circle r="20" fill="#ffffff" />
            <circle r="12" style={{ fill: "var(--lc)" }} />
          </g>
        </svg>
      </div>

      {/* ledakan di sasaran */}
      <div className="impact-burst" style={{ left: geo.tx, top: geo.ty }}>
        <svg viewBox="0 0 120 120" className="h-full w-full">
          <g transform="translate(60 60)">
            <path
              d="M0-52 12-16 46-40 24-6 58 0 24 8 46 40 12 18 0 52-12 18-46 40-24 8-58 0-24-8-46-40-12-16Z"
              style={{ fill: "var(--lc-light)" }}
              opacity="0.95"
            />
            <circle r="22" fill="#ffffff" />
            <circle r="14" style={{ fill: "var(--lc)" }} />
          </g>
        </svg>
      </div>
      <div className="hit-smoke-wrap" style={{ left: geo.tx, top: geo.ty }}>
        <SmokeCloud mode="hit" />
      </div>
      <div className="spark-field" style={{ left: geo.tx, top: geo.ty }}>
        {sparkAngles.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const dist = 52 + (i % 4) * 22;
          const dir = Math.cos(geo.angle) >= 0 ? -1 : 1; // percikan memantul ke arah penembak
          return (
            <span
              key={i}
              className="spark"
              style={
                {
                  "--sx": `${Math.cos(rad) * dist * dir}px`,
                  "--sy": `${Math.sin(rad) * dist}px`,
                  "--delay": `${(i % 5) * 0.04}s`,
                  background: i % 3 === 0 ? "var(--lc)" : i % 3 === 1 ? "#ffffff" : "var(--lc-light)",
                  color: "var(--lc)",
                } as CSSProperties
              }
            />
          );
        })}
      </div>
      <div className="absolute inset-0 animate-[beam-blast_0.35s_ease-out_forwards] bg-white/15 mix-blend-screen" />
    </div>
  );
}

const confettiColors = ["#ffd93d", "#ff6b6b", "#4ecdc4", "#a78bfa", "#38bdf8", "#f472b6", "#7cff9b"];

export function Confetti({ count = 46 }: { count?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 37 + 11) % 100;
        const delay = ((i * 13) % 24) / 10;
        const duration = 3.4 + ((i * 7) % 20) / 10;
        const size = 6 + (i % 4) * 3;
        const color = confettiColors[i % confettiColors.length];
        const round = i % 3 === 0;
        return (
          <span
            key={i}
            className="absolute top-0 block"
            style={{
              left: `${left}%`,
              width: size,
              height: round ? size : size * 0.5,
              background: color,
              borderRadius: round ? "999px" : "2px",
              animation: `confetti-fall ${duration}s linear ${delay}s infinite`,
              "--drift": `${((i % 5) - 2) * 34}px`,
            } as CSSProperties}
          />
        );
      })}
    </div>
  );
}
