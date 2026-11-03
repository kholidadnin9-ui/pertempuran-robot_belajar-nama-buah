import type { RobotPalette } from "../data/gameData";
import biru from "../assets/robots/biru.webp";
import lawan from "../assets/robots/lawan.webp";
import merah from "../assets/robots/merah.webp";
import pink from "../assets/robots/pink.webp";
import ungu from "../assets/robots/ungu.webp";

/** Semua sprite memakai kanvas dengan rasio lebar/tinggi yang sama. */
export const SPRITE_ASPECT = 1.15;

export const ROBOT_SPRITES: Record<string, string> = { merah, biru, pink, ungu, lawan };

export interface SpriteMeta {
  /** posisi ujung moncong senjata (0..1 dari kanvas sprite) */
  muzzle: [number, number];
  /** titik kena tembak (dada robot) */
  hit: [number, number];
  /** pusat kepala, dipakai untuk avatar bulat */
  head: [number, number];
}

export const SPRITE_META: Record<string, SpriteMeta> = {
  merah: { muzzle: [0.7915, 0.1893], hit: [0.4408, 0.2707], head: [0.3947, 0.1439] },
  biru: { muzzle: [0.914, 0.2268], hit: [0.4444, 0.2752], head: [0.3452, 0.1485] },
  pink: { muzzle: [0.9122, 0.1965], hit: [0.4008, 0.2728], head: [0.3301, 0.1492] },
  ungu: { muzzle: [0.9717, 0.1711], hit: [0.407, 0.2676], head: [0.3328, 0.142] },
  lawan: { muzzle: [0.1924, 0.1735], hit: [0.5613, 0.2494], head: [0.5939, 0.121] },
};

interface RobotProps {
  sprite?: string;
  palette?: RobotPalette;
  variant?: "hero" | "enemy";
  className?: string;
  glow?: boolean;
}

function spriteKey(sprite?: string, variant?: "hero" | "enemy") {
  if (variant === "enemy") return "lawan";
  return sprite && ROBOT_SPRITES[sprite] ? sprite : "biru";
}

export function Robot({ sprite, palette, variant = "hero", className = "", glow = true }: RobotProps) {
  const key = spriteKey(sprite, variant);
  const isEnemy = key === "lawan";
  const glowColor = palette?.glow ?? (isEnemy ? "#ff8a3d" : "#5ef2ff");

  return (
    <div className={`relative ${className}`} role="img" aria-label={isEnemy ? "Robot lawan" : "Robot pemain"}>
      {glow && (
        <span
          className="pointer-events-none absolute bottom-[3%] left-1/2 h-[10%] w-[60%] -translate-x-1/2 rounded-[50%] blur-md"
          style={{ background: glowColor, opacity: 0.4 }}
          aria-hidden="true"
        />
      )}
      <img
        src={ROBOT_SPRITES[key]}
        alt=""
        draggable={false}
        className="relative z-10 block h-full w-full select-none object-contain object-bottom"
      />
    </div>
  );
}

/** Avatar kepala: memotong sprite di sekitar kepala robot. */
export function RobotHead({
  sprite,
  variant = "hero",
  className = "",
}: {
  sprite?: string;
  palette?: RobotPalette;
  variant?: "hero" | "enemy";
  className?: string;
}) {
  const key = spriteKey(sprite, variant);
  const [hx, hy] = SPRITE_META[key].head;
  const scale = 4.4; // lebar gambar = scale x lebar wadah
  const widthPct = scale * 100;
  const heightPct = widthPct / SPRITE_ASPECT;

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <img
        src={ROBOT_SPRITES[key]}
        alt=""
        draggable={false}
        className="absolute max-w-none select-none"
        style={{
          width: `${widthPct}%`,
          height: `${heightPct}%`,
          left: `${50 - hx * widthPct}%`,
          top: `${50 - hy * heightPct}%`,
        }}
      />
    </div>
  );
}
