import type { CSSProperties } from "react";

type SmokeMode = "hit" | "defeat";

const HIT_PUFFS = [
  { x: 50, y: 46, size: 26, drift: -16, delay: 0 },
  { x: 62, y: 40, size: 34, drift: 20, delay: 0.12 },
  { x: 42, y: 34, size: 30, drift: -26, delay: 0.24 },
  { x: 56, y: 26, size: 40, drift: 12, delay: 0.36 },
  { x: 36, y: 22, size: 24, drift: -18, delay: 0.48 },
  { x: 66, y: 18, size: 28, drift: 26, delay: 0.6 },
];

const DEFEAT_PUFFS = [
  { x: 46, y: 32, size: 46, drift: -22, delay: 0 },
  { x: 58, y: 28, size: 58, drift: 18, delay: 0.18 },
  { x: 38, y: 24, size: 40, drift: -34, delay: 0.36 },
  { x: 64, y: 20, size: 52, drift: 30, delay: 0.54 },
  { x: 50, y: 16, size: 66, drift: 8, delay: 0.72 },
  { x: 34, y: 12, size: 44, drift: -28, delay: 0.94 },
  { x: 68, y: 10, size: 46, drift: 34, delay: 1.16 },
  { x: 44, y: 6, size: 62, drift: -12, delay: 1.38 },
  { x: 58, y: 2, size: 54, drift: 22, delay: 1.62 },
  { x: 38, y: -4, size: 70, drift: -30, delay: 1.9 },
  { x: 64, y: -8, size: 60, drift: 26, delay: 2.18 },
  { x: 50, y: -12, size: 76, drift: 4, delay: 2.44 },
];

const EMBERS = [
  { x: 40, delay: 0.2, drift: -14 },
  { x: 52, delay: 0.55, drift: 18 },
  { x: 60, delay: 0.9, drift: 26 },
  { x: 46, delay: 1.25, drift: -20 },
  { x: 56, delay: 1.6, drift: 10 },
  { x: 36, delay: 1.95, drift: -26 },
  { x: 64, delay: 2.25, drift: 22 },
];

/**
 * Asap prosedural (tanpa gambar) untuk robot yang terkena laser
 * maupun robot lawan yang gosong di akhir level.
 */
export function SmokeCloud({
  mode = "hit",
  className = "",
}: {
  mode?: SmokeMode;
  className?: string;
}) {
  const defeat = mode === "defeat";
  const puffs = defeat ? DEFEAT_PUFFS : HIT_PUFFS;

  return (
    <div className={`smoke-layer ${defeat ? "smoke-layer-defeat" : "smoke-layer-hit"} ${className}`} aria-hidden="true">
      {puffs.map((puff, index) => (
        <span
          key={`puff-${index}`}
          className="smoke-puff"
          style={
            {
              left: `${puff.x}%`,
              top: `${puff.y}%`,
              width: puff.size,
              height: puff.size,
              "--drift": `${puff.drift}px`,
              "--delay": `${puff.delay}s`,
              "--dur": defeat ? `${2.5 + (index % 4) * 0.25}s` : `${1.5 + (index % 3) * 0.2}s`,
            } as CSSProperties
          }
        />
      ))}
      {defeat && (
        <>
          <span className="defeat-heat" />
          {EMBERS.map((ember, index) => (
            <span
              key={`ember-${index}`}
              className="defeat-ember"
              style={
                {
                  left: `${ember.x}%`,
                  "--drift": `${ember.drift}px`,
                  "--delay": `${ember.delay}s`,
                } as CSSProperties
              }
            />
          ))}
        </>
      )}
    </div>
  );
}
