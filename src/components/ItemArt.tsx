interface ItemArtProps {
  art: string;
  className?: string;
}

function Shadow({ rx = 30, cy = 111 }: { rx?: number; cy?: number }) {
  return <ellipse cx="60" cy={cy} rx={rx} ry="5" fill="#0b2b4a" opacity="0.13" />;
}

function Eyes({
  cx = 60,
  cy = 56,
  gap = 11,
  r = 5.4,
}: {
  cx?: number;
  cy?: number;
  gap?: number;
  r?: number;
}) {
  return (
    <g>
      <circle cx={cx - gap} cy={cy} r={r} fill="#26313f" />
      <circle cx={cx + gap} cy={cy} r={r} fill="#26313f" />
      <circle cx={cx - gap - 1.6} cy={cy - 2} r={r * 0.34} fill="#fff" />
      <circle cx={cx + gap - 1.6} cy={cy - 2} r={r * 0.34} fill="#fff" />
    </g>
  );
}

function ColorBlob({ color, dark, shine }: { color: string; dark: string; shine: string }) {
  return (
    <g>
      <Shadow rx={32} />
      <circle cx="101" cy="38" r="7" fill={color} stroke={dark} strokeWidth="2" />
      <circle cx="17" cy="49" r="5.5" fill={color} stroke={dark} strokeWidth="2" />
      <circle cx="96" cy="92" r="4.5" fill={color} stroke={dark} strokeWidth="1.8" />
      <path
        d="M60 16c21 0 38 13 38 31 0 13-8 21-8 31 0 9-14 16-30 16s-30-7-30-16c0-10-8-18-8-31 0-18 17-31 38-31Z"
        fill={color}
        stroke={dark}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <ellipse cx="42" cy="45" rx="9" ry="14" fill={shine} opacity="0.6" transform="rotate(-24 42 45)" />
      <circle cx="80" cy="60" r="4" fill={shine} opacity="0.5" />
      <path d="M50 82c6 5 14 5 20 0" fill="none" stroke={shine} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </g>
  );
}

function renderArt(art: string) {
  switch (art) {
    /* ---------------- FRUITS ---------------- */
    case "apel":
      return (
        <g>
          <Shadow rx={29} />
          <path
            d="M60 33c-7-8-24-9-31 3-8 13-2 38 8 52 6 8 14 8 20 4 2-1 4-1 6 0 6 4 14 4 20-4 10-14 16-39 8-52-7-12-24-11-31-3Z"
            fill="#ef3d4f"
            stroke="#a81228"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M34 60c1 15 8 27 16 32-10-1-17-8-20-16-3-7-2-13 4-16Z" fill="#c11d33" opacity="0.7" />
          <path d="M60 33c0-7 2-12 7-16" fill="none" stroke="#7a4a21" strokeWidth="5" strokeLinecap="round" />
          <path d="M67 17c8-7 19-5 23 2-8 6-18 6-23-2Z" fill="#58c65a" stroke="#2f8f3a" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="43" cy="56" rx="7" ry="12" fill="#fff" opacity="0.4" transform="rotate(-22 43 56)" />
        </g>
      );
    case "pisang":
      return (
        <g>
          <Shadow rx={33} />
          <path
            d="M24 39c4 13 12 23 23 29 17 10 39 10 55 0-4 12-13 19-27 19-27 0-49-18-56-42-1-5 2-8 5-6Z"
            fill="#f0b400"
            stroke="#b45309"
            strokeWidth="2.4"
            strokeLinejoin="round"
            transform="translate(4 -7)"
          />
          <path
            d="M26 32c2 15 11 28 24 35 16 9 36 8 52-2-4 14-14 22-29 22-27 0-48-17-55-42-2-8 2-14 8-13Z"
            fill="#fbd024"
            stroke="#b45309"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M26 32c2-3 5-4 8-2" fill="#6b3f14" stroke="#6b3f14" strokeWidth="5" strokeLinecap="round" />
          <path d="M98 62c3-2 5-1 5 2" fill="#6b3f14" stroke="#6b3f14" strokeWidth="5" strokeLinecap="round" />
          <path d="M38 45c7 14 20 23 36 25" fill="none" stroke="#fff2a8" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        </g>
      );
    case "jeruk":
      return (
        <g>
          <Shadow rx={31} />
          <circle cx="60" cy="66" r="38" fill="#fb923c" stroke="#c2410c" strokeWidth="2.6" />
          <path d="M28 54c5-13 18-21 31-21-12 4-22 13-27 25-2 5-5 2-4-4Z" fill="#ffd9b3" opacity="0.85" />
          {[
            [42, 56],
            [56, 44],
            [76, 58],
            [50, 78],
            [70, 82],
            [82, 74],
            [36, 74],
            [62, 92],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.6" fill="#d97706" opacity="0.55" />
          ))}
          <path d="M60 29c1-9 4-13 10-16" fill="none" stroke="#7a4a21" strokeWidth="4" strokeLinecap="round" />
          <path d="M70 17c9-9 23-6 26 3-9 7-21 6-26-3Z" fill="#4caf50" stroke="#2e7d32" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="43" cy="54" rx="6" ry="11" fill="#fff" opacity="0.4" transform="rotate(-26 43 54)" />
        </g>
      );
    case "semangka":
      return (
        <g>
          <Shadow rx={33} />
          <circle cx="76" cy="56" r="28" fill="#3fae4a" stroke="#2c7a35" strokeWidth="2.4" />
          <path d="M58 36c8-3 17 0 20 5M54 48c6-4 14-3 18 1M56 63c5-3 11-2 15 1" fill="none" stroke="#27803a" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M22 64a38 38 0 0 0 76 0Z" fill="#3fae4a" stroke="#2c7a35" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M28 64a32 32 0 0 0 64 0Z" fill="#f6fff8" />
          <path d="M33 64a27 27 0 0 0 54 0Z" fill="#f2545b" stroke="#d13a45" strokeWidth="1.6" />
          <g fill="#3b1f24">
            <ellipse cx="48" cy="78" rx="2.4" ry="3.6" transform="rotate(-18 48 78)" />
            <ellipse cx="60" cy="84" rx="2.4" ry="3.6" />
            <ellipse cx="72" cy="78" rx="2.4" ry="3.6" transform="rotate(18 72 78)" />
            <ellipse cx="54" cy="90" rx="2.2" ry="3.2" transform="rotate(-10 54 90)" />
            <ellipse cx="67" cy="90" rx="2.2" ry="3.2" transform="rotate(10 67 90)" />
          </g>
        </g>
      );
    case "anggur":
      return (
        <g>
          <Shadow rx={27} />
          <path d="M60 36c0-8 2-13 5-17" fill="none" stroke="#7a4a21" strokeWidth="4.4" strokeLinecap="round" />
          <path d="M64 21c7-8 19-8 24-1-7 7-18 8-24 1Z" fill="#4caf50" stroke="#2e7d32" strokeWidth="2" strokeLinejoin="round" />
          <path d="M58 23c-8-6-18-4-21 3 7 5 16 4 21-3Z" fill="#67bb52" stroke="#2e7d32" strokeWidth="2" strokeLinejoin="round" />
          {[
            [42, 45],
            [60, 42],
            [78, 45],
            [50, 62],
            [70, 62],
            [60, 79],
            [34, 61],
            [86, 61],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="11" fill={i % 2 === 0 ? "#8b5cf6" : "#7c3aed"} stroke="#5b21b6" strokeWidth="2" />
              <circle cx={x - 3.4} cy={y - 3.6} r="3" fill="#ddd6fe" opacity="0.75" />
            </g>
          ))}
        </g>
      );
    case "stroberi":
      return (
        <g>
          <Shadow rx={28} />
          <path
            d="M60 100c-3 0-32-19-38-41-4-14 5-24 18-23 9 1 15 5 20 11 5-6 11-10 20-11 13-1 22 9 18 23-6 22-35 41-38 41Z"
            fill="#ef4056"
            stroke="#b0122c"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {[
            [48, 55],
            [66, 57],
            [56, 70],
            [76, 70],
            [44, 72],
            [62, 84],
            [50, 87],
          ].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="2" ry="2.8" fill="#ffe08a" transform={`rotate(${i * 20} ${x} ${y})`} />
          ))}
          <g fill="#49b84b" stroke="#2f8f3a" strokeWidth="1.8" strokeLinejoin="round">
            <path d="M60 38 48 18l14 8Z" />
            <path d="m60 38 14-18-3 16Z" />
            <path d="m60 38-24-4 18 12Z" />
            <path d="m60 38 24-4-18 12Z" />
            <path d="m60 38 2-20h-8Z" />
          </g>
          <ellipse cx="46" cy="66" rx="5" ry="10" fill="#fff" opacity="0.3" transform="rotate(-20 46 66)" />
        </g>
      );
    case "nanas":
      return (
        <g>
          <Shadow rx={30} />
          <g fill="#49b84b" stroke="#2f8f3a" strokeWidth="2" strokeLinejoin="round">
            <path d="M60 38 48 6l10 6 4-6 4 6 10-6-12 32Z" />
            <path d="m56 38-14-20 6 20Z" />
            <path d="m64 38 14-20-6 20Z" />
          </g>
          <path d="M60 32c20 0 32 13 32 32 0 22-12 42-32 42S28 86 28 64c0-19 12-32 32-32Z" fill="#f5c518" stroke="#b8860b" strokeWidth="2.6" />
          <g stroke="#d99a00" strokeWidth="2.6" strokeLinecap="round" opacity="0.75">
            <path d="M38 56 82 86M42 44 88 76M32 72 74 98M60 38 32 60M72 36 46 102M84 52 56 100" />
          </g>
          <g fill="#9a6b0a" opacity="0.5">
            <circle cx="44" cy="56" r="1.8" />
            <circle cx="62" cy="70" r="1.8" />
            <circle cx="76" cy="66" r="1.8" />
            <circle cx="52" cy="86" r="1.8" />
            <circle cx="70" cy="88" r="1.8" />
          </g>
          <ellipse cx="46" cy="54" rx="6" ry="9" fill="#fff" opacity="0.35" transform="rotate(-24 46 54)" />
        </g>
      );
    case "pir":
      return (
        <g>
          <Shadow rx={30} />
          <path
            d="M60 26c9 0 16 7 16 16 0 6-3 10-1 16 7 15 19 20 19 32 0 12-15 19-34 19S26 102 26 90c0-12 12-17 19-32 2-6-1-10-1-16 0-9 7-16 16-16Z"
            fill="#c7d94a"
            stroke="#7d8f1f"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M34 92c4 10 16 15 28 14-15 4-30-2-34-12-2-5-1-9 2-11-1 4 1 6 4 9Z" fill="#a8bf36" opacity="0.8" />
          <path d="M60 27c0-8 2-14 7-18" fill="none" stroke="#7a4a21" strokeWidth="4.6" strokeLinecap="round" />
          <path d="M67 14c8-7 19-4 22 3-8 5-17 5-22-3Z" fill="#58c65a" stroke="#2f8f3a" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="48" cy="66" rx="6" ry="13" fill="#fff" opacity="0.35" transform="rotate(-16 48 66)" />
          <ellipse cx="74" cy="92" rx="13" ry="8" fill="#e8b963" opacity="0.5" transform="rotate(-14 74 92)" />
        </g>
      );
    case "mangga":
      return (
        <g transform="rotate(-12 60 64)">
          <Shadow rx={31} />
          <path
            d="M48 34c17-9 39-1 46 17 8 20-5 44-25 51-20 7-40-4-45-23-4-16 3-34 24-45Z"
            fill="#ffb020"
            stroke="#c97a00"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <ellipse cx="78" cy="58" rx="16" ry="26" fill="#ff7d3c" opacity="0.55" transform="rotate(24 78 58)" />
          <path d="M52 36c-1-9 1-14 6-18" fill="none" stroke="#7a4a21" strokeWidth="4.6" strokeLinecap="round" />
          <path d="M60 22c8-8 19-6 23 1-8 6-18 7-23-1Z" fill="#58c65a" stroke="#2f8f3a" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="44" cy="64" rx="6" ry="14" fill="#fff" opacity="0.4" transform="rotate(-18 44 64)" />
        </g>
      );
    case "kiwi":
      return (
        <g>
          <Shadow rx={32} />
          <circle cx="60" cy="63" r="40" fill="#9a6b3f" stroke="#6b4423" strokeWidth="2.6" />
          <circle cx="60" cy="63" r="34" fill="#8ec63f" stroke="#5e8c22" strokeWidth="2.2" />
          <circle cx="60" cy="63" r="21" fill="#d9ecb0" />
          <circle cx="60" cy="63" r="9" fill="#f4f9df" />
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;
            const x = 60 + Math.cos(angle) * 27;
            const y = 63 + Math.sin(angle) * 27;
            return <ellipse key={i} cx={x} cy={y} rx="1.6" ry="2.6" fill="#2f3b1a" transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`} />;
          })}
          <ellipse cx="46" cy="42" rx="6" ry="9" fill="#fff" opacity="0.3" transform="rotate(-24 46 42)" />
        </g>
      );
    case "lemon":
      return (
        <g transform="rotate(-10 60 64)">
          <Shadow rx={33} />
          <path d="M18 64c-4-4-3-10 3-10l6 1c8-16 22-25 38-25 18 0 31 11 31 26 0 18-15 33-36 33-20 0-35-11-39-25Z" fill="#fbe046" stroke="#c9a400" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M98 63c4-3 8 0 7 4-1 3-4 4-8 2" fill="#fbe046" stroke="#c9a400" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M59 31c1-8 4-12 9-15" fill="none" stroke="#7a4a21" strokeWidth="4" strokeLinecap="round" />
          <path d="M67 18c8-7 18-4 21 2-8 6-17 5-21-2Z" fill="#58c65a" stroke="#2f8f3a" strokeWidth="2" strokeLinejoin="round" />
          {[
            [38, 60],
            [52, 48],
            [70, 52],
            [48, 76],
            [66, 74],
            [80, 64],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.6" fill="#c9a400" opacity="0.65" />
          ))}
          <ellipse cx="42" cy="54" rx="6" ry="10" fill="#fff" opacity="0.45" transform="rotate(-26 42 54)" />
        </g>
      );
    case "blueberry":
      return (
        <g>
          <Shadow rx={30} />
          <path d="M62 30c7-10 19-11 25-5-6 9-17 11-25 5Z" fill="#4caf50" stroke="#2e7d32" strokeWidth="2" strokeLinejoin="round" />
          <path d="M58 30C49 21 38 22 33 28c6 8 17 9 25 2Z" fill="#67bb52" stroke="#2e7d32" strokeWidth="2" strokeLinejoin="round" />
          {[
            [42, 72, 22, "#4f6bd8"],
            [76, 68, 20, "#6177e0"],
            [59, 45, 19, "#7186ea"],
          ].map(([x, y, r, fill], i) => (
            <g key={i}>
              <circle cx={x as number} cy={y as number} r={r as number} fill={fill as string} stroke="#2c3e91" strokeWidth="2.2" />
              <path
                d={`M${x} ${(y as number) - 6}l2 4 4 1-4 2-2 4-2-4-4-2 4-1 2-4Z`}
                fill="#2c3e91"
                opacity="0.85"
              />
              <circle cx={(x as number) - 6} cy={(y as number) - 7} r="3.4" fill="#dfe5ff" opacity="0.65" />
            </g>
          ))}
        </g>
      );

    /* ---------------- ANIMALS ---------------- */
    case "kucing":
      return (
        <g>
          <Shadow rx={29} />
          <path d="M86 94c14 2 18-10 11-20" fill="none" stroke="#f5a623" strokeWidth="10" strokeLinecap="round" />
          <path d="M86 94c14 2 18-10 11-20" fill="none" stroke="#c47a10" strokeWidth="12" strokeLinecap="round" opacity="0.18" />
          <ellipse cx="60" cy="97" rx="28" ry="18" fill="#f8b23c" stroke="#c47a10" strokeWidth="2.6" />
          <ellipse cx="47" cy="110" rx="9" ry="5" fill="#ffe0a3" stroke="#c47a10" strokeWidth="2" />
          <ellipse cx="73" cy="110" rx="9" ry="5" fill="#ffe0a3" stroke="#c47a10" strokeWidth="2" />
          <path d="M36 36 31 10l25 16Z" fill="#f8b23c" stroke="#c47a10" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="m84 36 5-26-25 16Z" fill="#f8b23c" stroke="#c47a10" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="m40 31-2-12 11 8Z" fill="#f7a3b0" />
          <path d="m80 31 2-12-11 8Z" fill="#f7a3b0" />
          <circle cx="60" cy="58" r="30" fill="#fbbf3b" stroke="#c47a10" strokeWidth="2.6" />
          <path d="M48 33c3-3 7-3 10 0M62 33c3-3 7-3 10 0" fill="none" stroke="#e09617" strokeWidth="3" strokeLinecap="round" />
          <Eyes cx={60} cy={57} gap={12} r={6} />
          <path d="M57 68h6l-3 4-3-4Z" fill="#f4798c" stroke="#c25162" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M60 72v3M60 75c-3 4-7 3-9 0M60 75c3 4 7 3 9 0" fill="none" stroke="#8a5a1a" strokeWidth="1.9" strokeLinecap="round" />
          <g stroke="#a3620d" strokeWidth="1.5" strokeLinecap="round">
            <path d="M28 62h12M28 68h12M92 62H80M92 68H80" />
          </g>
          <ellipse cx="40" cy="68" rx="5" ry="3" fill="#f79b86" opacity="0.6" />
          <ellipse cx="80" cy="68" rx="5" ry="3" fill="#f79b86" opacity="0.6" />
        </g>
      );
    case "anjing":
      return (
        <g>
          <Shadow rx={29} />
          <path d="M88 98c12-2 14-12 8-18" fill="none" stroke="#b9773f" strokeWidth="9" strokeLinecap="round" />
          <ellipse cx="60" cy="98" rx="28" ry="18" fill="#c98a4f" stroke="#7b4a1c" strokeWidth="2.6" />
          <ellipse cx="50" cy="110" rx="9" ry="5" fill="#e9c498" stroke="#7b4a1c" strokeWidth="2" />
          <ellipse cx="70" cy="110" rx="9" ry="5" fill="#e9c498" stroke="#7b4a1c" strokeWidth="2" />
          <ellipse cx="30" cy="60" rx="12" ry="21" fill="#7b4a1c" stroke="#5a3512" strokeWidth="2.4" transform="rotate(-16 30 60)" />
          <ellipse cx="90" cy="60" rx="12" ry="21" fill="#7b4a1c" stroke="#5a3512" strokeWidth="2.4" transform="rotate(16 90 60)" />
          <circle cx="60" cy="56" r="30" fill="#c98a4f" stroke="#7b4a1c" strokeWidth="2.6" />
          <ellipse cx="60" cy="70" rx="18" ry="13" fill="#f4dfc0" stroke="#7b4a1c" strokeWidth="2" />
          <ellipse cx="42" cy="45" rx="9" ry="8" fill="#8a5a2b" opacity="0.5" />
          <Eyes cx={60} cy={52} gap={13} r={5.6} />
          <ellipse cx="60" cy="64" rx="6.5" ry="4.6" fill="#3a2a22" />
          <path d="M60 69v3M60 72c-2 4-6 4-8 1M60 72c2 4 6 4 8 1" fill="none" stroke="#5a3512" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M57 76c1 5 5 6 7 0-2 2-5 2-7 0Z" fill="#f4798c" />
        </g>
      );
    case "kelinci":
      return (
        <g>
          <Shadow rx={28} />
          <ellipse cx="60" cy="98" rx="27" ry="18" fill="#eef2f7" stroke="#9aa7b8" strokeWidth="2.6" />
          <circle cx="86" cy="92" r="9" fill="#f8fafc" stroke="#9aa7b8" strokeWidth="2.2" />
          <ellipse cx="46" cy="28" rx="9" ry="23" fill="#f8fafc" stroke="#9aa7b8" strokeWidth="2.4" transform="rotate(-9 46 28)" />
          <ellipse cx="74" cy="28" rx="9" ry="23" fill="#f8fafc" stroke="#9aa7b8" strokeWidth="2.4" transform="rotate(9 74 28)" />
          <ellipse cx="47" cy="28" rx="4" ry="15" fill="#f7b6c8" transform="rotate(-9 47 28)" />
          <ellipse cx="73" cy="28" rx="4" ry="15" fill="#f7b6c8" transform="rotate(9 73 28)" />
          <circle cx="60" cy="62" r="31" fill="#f8fafc" stroke="#9aa7b8" strokeWidth="2.6" />
          <Eyes cx={60} cy={58} gap={12} r={6} />
          <path d="M57 69h6l-3 3.6-3-3.6Z" fill="#f78ea6" stroke="#d8607e" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M60 73v2.5M60 75.5c-3 4-6 3-8 0M60 75.5c3 4 6 3 8 0" fill="none" stroke="#8e9bb0" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="39" cy="68" rx="5" ry="3" fill="#f9c4d1" />
          <ellipse cx="81" cy="68" rx="5" ry="3" fill="#f9c4d1" />
          <ellipse cx="48" cy="108" rx="8" ry="4" fill="#f1f5f9" stroke="#9aa7b8" strokeWidth="1.8" />
          <ellipse cx="72" cy="108" rx="8" ry="4" fill="#f1f5f9" stroke="#9aa7b8" strokeWidth="1.8" />
        </g>
      );
    case "sapi":
      return (
        <g>
          <Shadow rx={31} />
          <path d="M26 44C14 34 6 40 12 50c4 6 10 8 16 4M94 44c12-10 20-4 14 6-4 6-10 8-16 4" fill="#f1ddd0" stroke="#8a99ad" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M40 24c-5-9-2-16 6-16 2 9 5 13 14 16M80 24c5-9 2-16-6-16-2 9-5 13-14 16" fill="#ffe9b8" stroke="#b8934a" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="60" cy="58" r="33" fill="#f8fafc" stroke="#7d8b9f" strokeWidth="2.6" />
          <ellipse cx="40" cy="47" rx="12" ry="9" fill="#3d4a5c" opacity="0.85" transform="rotate(-18 40 47)" />
          <ellipse cx="78" cy="74" rx="13" ry="10" fill="#3d4a5c" opacity="0.85" transform="rotate(20 78 74)" />
          <ellipse cx="59" cy="80" rx="20" ry="13" fill="#f7cbd3" stroke="#b07984" strokeWidth="2" />
          <ellipse cx="52" cy="79" rx="3" ry="4" fill="#b07984" />
          <ellipse cx="66" cy="79" rx="3" ry="4" fill="#b07984" />
          <circle cx="61" cy="55" r="3" fill="#7a879b" />
          <circle cx="74" cy="52" r="5.4" fill="#26313f" />
          <circle cx="72.4" cy="50" r="1.9" fill="#fff" />
          <circle cx="45" cy="52" r="5.4" fill="#26313f" />
          <circle cx="43.4" cy="50" r="1.9" fill="#fff" />
          <path d="M53 35c3-4 8-4 11 0" fill="none" stroke="#7d8b9f" strokeWidth="2.2" strokeLinecap="round" />
        </g>
      );
    case "ayam":
      return (
        <g>
          <Shadow rx={27} />
          <path d="M30 92c-10-6-10-18 0-20 4 8 6 12 14 14Z" fill="#f2a33c" stroke="#c47a10" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="60" cy="86" rx="27" ry="22" fill="#fff7e6" stroke="#c9a36b" strokeWidth="2.6" />
          <ellipse cx="48" cy="86" rx="14" ry="11" fill="#ffe4b5" stroke="#d6ab6c" strokeWidth="2" transform="rotate(-14 48 86)" />
          <circle cx="66" cy="46" r="23" fill="#fff7e6" stroke="#c9a36b" strokeWidth="2.6" />
          <path d="M52 25c-2-8 6-11 9-5 2-7 10-6 10 2 4-3 8 2 5 7l-9 7-13-2-2-9Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" strokeLinejoin="round" />
          <path d="M86 48c8-4 12 2 8 8-3 5-9 4-12 0Z" fill="#f59e0b" stroke="#c47a10" strokeWidth="2" strokeLinejoin="round" />
          <path d="M78 60c2 6 8 6 9 2l2-6-11 4Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="73" cy="42" r="4.4" fill="#26313f" />
          <circle cx="74.4" cy="40.6" r="1.5" fill="#fff" />
          <path d="M38 104v10M38 114l-5 4M38 114l5 4M58 108v8M58 116l-5 4M58 116l5 4" fill="none" stroke="#e08b2f" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="86" cy="90" rx="9" ry="6" fill="#fff" opacity="0.6" transform="rotate(-20 86 90)" />
        </g>
      );
    case "ikan":
      return (
        <g>
          <Shadow rx={30} />
          <path d="M92 64c10-10 16-14 22-12-3 6-3 8-3 12 0 4 0 6 3 12-6 2-12-2-22-12Z" fill="#f97316" stroke="#c2410c" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M56 36c8-10 16-12 24-10-4 8-4 12 0 18-8 2-16-2-24-8Z" fill="#fb923c" stroke="#c2410c" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M54 88c4 9 10 13 18 14-2-8-1-12 2-17-8 0-14 1-20 3Z" fill="#fb923c" stroke="#c2410c" strokeWidth="2.4" strokeLinejoin="round" />
          <ellipse cx="55" cy="63" rx="36" ry="27" fill="#ff9f43" stroke="#c2410c" strokeWidth="2.6" />
          <path d="M31 50c10-9 24-12 36-11-16 4-27 12-33 24-4-4-5-8-3-13Z" fill="#ffd1a3" opacity="0.7" />
          <circle cx="38" cy="55" r="9" fill="#fff" stroke="#c2410c" strokeWidth="1.8" />
          <circle cx="40" cy="56" r="5" fill="#26313f" />
          <circle cx="38.4" cy="54" r="1.8" fill="#fff" />
          <path d="M24 68c4 3 8 3 12 0" fill="none" stroke="#b45309" strokeWidth="2.4" strokeLinecap="round" />
          <g fill="none" stroke="#e07a17" strokeWidth="2" opacity="0.75">
            <path d="M56 48c4 4 4 8 0 12M66 46c4 4 4 10 0 14M76 48c4 4 4 8 0 12M60 70c4 4 4 8 0 12M72 68c4 4 4 8 0 12" />
          </g>
          <g fill="#7cdcff" stroke="#38bdf8" strokeWidth="1.6">
            <circle cx="78" cy="26" r="5" />
            <circle cx="91" cy="16" r="3.4" />
            <circle cx="69" cy="15" r="2.6" />
          </g>
        </g>
      );
    case "gajah":
      return (
        <g>
          <Shadow rx={32} />
          <circle cx="26" cy="55" r="24" fill="#93a0b3" stroke="#6b7789" strokeWidth="2.6" />
          <circle cx="94" cy="55" r="24" fill="#93a0b3" stroke="#6b7789" strokeWidth="2.6" />
          <circle cx="30" cy="56" r="14" fill="#e0a9b7" opacity="0.7" />
          <circle cx="90" cy="56" r="14" fill="#e0a9b7" opacity="0.7" />
          <path
            d="M60 22c22 0 36 15 36 34v8c0 7 3 10 5 16 3 9-2 18-11 18-8 0-12-7-11-16 1-8 4-9 4-16v-8c0-10-10-15-23-15s-23 5-23 15v8c0 7 3 8 4 16 1 9-3 16-11 16-9 0-14-9-11-18 2-6 5-9 5-16v-8c0-19 14-34 36-34Z"
            fill="#a8b3c4"
            stroke="#6b7789"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <ellipse cx="42" cy="50" rx="7" ry="8" fill="#fff" />
          <ellipse cx="78" cy="50" rx="7" ry="8" fill="#fff" />
          <circle cx="44" cy="51" r="4" fill="#26313f" />
          <circle cx="76" cy="51" r="4" fill="#26313f" />
          <circle cx="42.8" cy="49.4" r="1.3" fill="#fff" />
          <circle cx="74.8" cy="49.4" r="1.3" fill="#fff" />
          <path d="M46 93c-3 10 4 14 8 14M74 93c3 10-4 14-8 14" fill="none" stroke="#fdf6e3" strokeWidth="5" strokeLinecap="round" />
          <path d="M52 70c5 4 12 4 17 0" fill="none" stroke="#6b7789" strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="36" cy="62" rx="6" ry="4" fill="#e0a9b7" opacity="0.5" />
          <ellipse cx="84" cy="62" rx="6" ry="4" fill="#e0a9b7" opacity="0.5" />
        </g>
      );
    case "singa":
      return (
        <g>
          <Shadow rx={32} />
          <g fill="#dd8a2f" stroke="#a85c14" strokeWidth="2">
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              return <circle key={i} cx={60 + Math.cos(a) * 34} cy={58 + Math.sin(a) * 34} r="13" />;
            })}
          </g>
          <circle cx="60" cy="58" r="34" fill="#d97c26" />
          <circle cx="60" cy="60" r="29" fill="#f4c87a" stroke="#b8853a" strokeWidth="2.4" />
          <circle cx="34" cy="40" r="9" fill="#f4c87a" stroke="#b8853a" strokeWidth="2.2" />
          <circle cx="86" cy="40" r="9" fill="#f4c87a" stroke="#b8853a" strokeWidth="2.2" />
          <circle cx="34" cy="40" r="4.5" fill="#e8a55c" />
          <circle cx="86" cy="40" r="4.5" fill="#e8a55c" />
          <Eyes cx={60} cy={55} gap={12} r={5.8} />
          <ellipse cx="60" cy="72" rx="17" ry="12" fill="#fdf0d5" />
          <path d="M56 66h8l-4 4-4-4Z" fill="#8a5a1a" />
          <path d="M60 70v3M60 73c-3 4-7 3-9 0M60 73c3 4 7 3 9 0" fill="none" stroke="#8a5a1a" strokeWidth="1.9" strokeLinecap="round" />
          <g stroke="#a86a25" strokeWidth="1.5" strokeLinecap="round">
            <path d="M25 66h12M25 72h12M95 66H83M95 72H83" />
          </g>
        </g>
      );
    case "monyet":
      return (
        <g>
          <Shadow rx={28} />
          <circle cx="30" cy="58" r="13" fill="#a0714a" stroke="#6f4527" strokeWidth="2.4" />
          <circle cx="90" cy="58" r="13" fill="#a0714a" stroke="#6f4527" strokeWidth="2.4" />
          <circle cx="30" cy="58" r="6" fill="#d9a97b" />
          <circle cx="90" cy="58" r="6" fill="#d9a97b" />
          <circle cx="60" cy="56" r="31" fill="#a0714a" stroke="#6f4527" strokeWidth="2.6" />
          <path d="M60 88c-14 0-24-10-24-23 0-8 4-13 10-15 4-2 9-2 14 0 5-2 10-2 14 0 6 2 10 7 10 15 0 13-10 23-24 23Z" fill="#f0d3ac" />
          <path d="M60 32c-8 0-12 4-12 8 0 5 5 8 12 8s12-3 12-8c0-4-4-8-12-8Z" fill="#8a5a32" />
          <Eyes cx={60} cy={52} gap={12} r={5.6} />
          <ellipse cx="49" cy="67" rx="2.2" ry="3" fill="#6f4527" />
          <ellipse cx="71" cy="67" rx="2.2" ry="3" fill="#6f4527" />
          <path d="M50 73c6 7 14 7 20 0" fill="none" stroke="#6f4527" strokeWidth="2.4" strokeLinecap="round" />
          <ellipse cx="39" cy="66" rx="6" ry="4" fill="#f4b3a3" opacity="0.7" />
          <ellipse cx="81" cy="66" rx="6" ry="4" fill="#f4b3a3" opacity="0.7" />
        </g>
      );
    case "katak":
      return (
        <g>
          <Shadow rx={30} />
          <ellipse cx="60" cy="80" rx="37" ry="29" fill="#6ed35b" stroke="#3a8c2e" strokeWidth="2.6" />
          <path d="M40 84c4 14 36 14 40 0 3 10-6 18-20 18s-23-8-20-18Z" fill="#c6efb5" opacity="0.8" />
          <circle cx="42" cy="38" r="16" fill="#6ed35b" stroke="#3a8c2e" strokeWidth="2.6" />
          <circle cx="78" cy="38" r="16" fill="#6ed35b" stroke="#3a8c2e" strokeWidth="2.6" />
          <circle cx="42" cy="38" r="10" fill="#fff" />
          <circle cx="78" cy="38" r="10" fill="#fff" />
          <circle cx="44" cy="39" r="5.4" fill="#26313f" />
          <circle cx="76" cy="39" r="5.4" fill="#26313f" />
          <circle cx="42.4" cy="37" r="1.8" fill="#fff" />
          <circle cx="74.4" cy="37" r="1.8" fill="#fff" />
          <path d="M38 64c13 10 31 10 44 0" fill="none" stroke="#2f6b26" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="31" cy="72" rx="6" ry="4" fill="#f39bb0" opacity="0.65" />
          <ellipse cx="89" cy="72" rx="6" ry="4" fill="#f39bb0" opacity="0.65" />
          <ellipse cx="42" cy="103" rx="14" ry="6" fill="#5cc44a" stroke="#3a8c2e" strokeWidth="2" />
          <ellipse cx="78" cy="103" rx="14" ry="6" fill="#5cc44a" stroke="#3a8c2e" strokeWidth="2" />
        </g>
      );
    case "bebek":
      return (
        <g>
          <Shadow rx={29} />
          <ellipse cx="60" cy="103" rx="34" ry="6" fill="#80d7f5" opacity="0.5" />
          <ellipse cx="56" cy="84" rx="31" ry="22" fill="#ffd93b" stroke="#c9a000" strokeWidth="2.6" />
          <path d="M80 90c6-8 4-18-2-22 12 2 16 14 8 22Z" fill="#f4c400" stroke="#c9a000" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="68" cy="42" r="23" fill="#ffd93b" stroke="#c9a000" strokeWidth="2.6" />
          <path d="M78 30c4-8 12-7 12 0-6-3-8-1-12 0Z" fill="#ffd93b" stroke="#c9a000" strokeWidth="2" strokeLinejoin="round" />
          <path d="M89 42c9-4 13 2 9 7-3 4-9 3-12 0Z" fill="#f59e0b" stroke="#c47a10" strokeWidth="2" strokeLinejoin="round" />
          <path d="M86 55c1 5 7 6 8 1l1-4-9 3Z" fill="#c47a10" />
          <circle cx="74" cy="38" r="4.6" fill="#26313f" />
          <circle cx="75.4" cy="36.6" r="1.6" fill="#fff" />
          <ellipse cx="44" cy="82" rx="15" ry="11" fill="#ffe98a" stroke="#d6ab0f" strokeWidth="2" transform="rotate(-10 44 82)" />
          <path d="M40 106v8M40 114l-6 4M40 114l5 4M68 106v8M68 114l-6 4M68 114l5 4" fill="none" stroke="#e08b2f" strokeWidth="3.4" strokeLinecap="round" />
        </g>
      );
    case "kupu-kupu":
      return (
        <g>
          <Shadow rx={28} cy={108} />
          <g stroke="#9d174d" strokeWidth="2.4">
            <ellipse cx="35" cy="44" rx="22" ry="25" fill="#f472b6" transform="rotate(-18 35 44)" />
            <ellipse cx="85" cy="44" rx="22" ry="25" fill="#f472b6" transform="rotate(18 85 44)" />
            <ellipse cx="40" cy="78" rx="17" ry="20" fill="#c084fc" transform="rotate(14 40 78)" />
            <ellipse cx="80" cy="78" rx="17" ry="20" fill="#c084fc" transform="rotate(-14 80 78)" />
          </g>
          <g fill="#fbcfe8">
            <circle cx="32" cy="38" r="8" />
            <circle cx="88" cy="38" r="8" />
            <circle cx="42" cy="80" r="5.5" />
            <circle cx="78" cy="80" r="5.5" />
          </g>
          <g fill="#a21caf" opacity="0.7">
            <circle cx="36" cy="56" r="4.4" />
            <circle cx="84" cy="56" r="4.4" />
          </g>
          <rect x="54" y="38" width="12" height="58" rx="6" fill="#5b21b6" stroke="#3b0f7a" strokeWidth="2" />
          <circle cx="60" cy="34" r="8" fill="#5b21b6" stroke="#3b0f7a" strokeWidth="2" />
          <circle cx="58" cy="32" r="2" fill="#fff" />
          <path d="M56 27c-6-8-12-10-17-9M64 27c6-8 12-10 17-9" fill="none" stroke="#3b0f7a" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="39" cy="18" r="3" fill="#3b0f7a" />
          <circle cx="81" cy="18" r="3" fill="#3b0f7a" />
        </g>
      );

    /* ---------------- COLORS ---------------- */
    case "warna-merah":
      return <ColorBlob color="#ef4444" dark="#a11228" shine="#ffd8de" />;
    case "warna-biru":
      return <ColorBlob color="#3b82f6" dark="#1d4ed8" shine="#dbeafe" />;
    case "warna-kuning":
      return <ColorBlob color="#facc15" dark="#b8860b" shine="#fff8cc" />;
    case "warna-hijau":
      return <ColorBlob color="#4ade80" dark="#15803d" shine="#dcfce7" />;
    case "warna-ungu":
      return <ColorBlob color="#a855f7" dark="#6b21a8" shine="#f3e8ff" />;
    case "warna-oranye":
      return <ColorBlob color="#fb923c" dark="#c2410c" shine="#ffedd5" />;

    /* ---------------- SHAPES ---------------- */
    case "bentuk-lingkaran":
      return (
        <g>
          <Shadow rx={31} />
          <circle cx="60" cy="65" r="40" fill="#be123c" transform="translate(0 4)" />
          <circle cx="60" cy="62" r="40" fill="#fb7185" stroke="#be123c" strokeWidth="2.6" />
          <ellipse cx="45" cy="45" rx="10" ry="14" fill="#fff" opacity="0.4" transform="rotate(-24 45 45)" />
        </g>
      );
    case "bentuk-persegi":
      return (
        <g>
          <Shadow rx={31} />
          <rect x="22" y="26" width="76" height="76" rx="12" fill="#0369a1" transform="translate(0 4)" />
          <rect x="22" y="22" width="76" height="76" rx="12" fill="#38bdf8" stroke="#0369a1" strokeWidth="2.6" />
          <path d="M32 32h24v8H32z" fill="#fff" opacity="0.45" rx="3" />
        </g>
      );
    case "bentuk-segitiga":
      return (
        <g>
          <Shadow rx={31} />
          <path d="M60 18 108 104H12Z" fill="#15803d" transform="translate(0 4)" strokeLinejoin="round" />
          <path d="M60 18 108 104H12Z" fill="#4ade80" stroke="#15803d" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M60 38 80 76 42 76Z" fill="#fff" opacity="0.3" />
        </g>
      );
    case "bentuk-bintang":
      return (
        <g>
          <Shadow rx={31} />
          <path d="m60 8 14.6 30.9 34 4.6-24.8 23.9 6.2 33.7L60 85l-30 16.1 6.2-33.7L11.4 43.5l34-4.6L60 8Z" fill="#b45309" transform="translate(0 5)" />
          <path d="m60 8 14.6 30.9 34 4.6-24.8 23.9 6.2 33.7L60 85l-30 16.1 6.2-33.7L11.4 43.5l34-4.6L60 8Z" fill="#facc15" stroke="#b45309" strokeWidth="2.6" strokeLinejoin="round" />
          <circle cx="60" cy="48" r="7" fill="#fff8cc" opacity="0.8" />
        </g>
      );
    case "bentuk-hati":
      return (
        <g>
          <Shadow rx={29} />
          <path d="M60 106C45 92 12 72 12 44 12 24 32 14 48 26l12 10 12-10c16-12 36-2 36 18 0 28-33 48-48 62Z" fill="#be185d" transform="translate(0 4)" />
          <path d="M60 102C45 88 12 68 12 40 12 20 32 10 48 22l12 10 12-10c16-12 36-2 36 18 0 28-33 48-48 62Z" fill="#f472b6" stroke="#be185d" strokeWidth="2.6" strokeLinejoin="round" />
          <ellipse cx="35" cy="38" rx="8" ry="11" fill="#fff" opacity="0.4" transform="rotate(-26 35 38)" />
        </g>
      );
    case "bentuk-belah-ketupat":
      return (
        <g>
          <Shadow rx={30} />
          <path d="M60 8 108 64 60 120 12 64Z" fill="#5b21b6" transform="translate(0 3)" />
          <path d="M60 12 102 62 60 112 18 62Z" fill="#a78bfa" stroke="#6d28d9" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M60 30 84 58 60 52 36 58Z" fill="#fff" opacity="0.4" />
        </g>
      );

    /* ---------------- VEHICLES ---------------- */
    case "kendaraan-mobil":
      return (
        <g>
          <Shadow rx={34} />
          <path d="M12 82c0-8 5-14 13-16l11-16c2-3 6-5 10-5h25c4 0 8 2 10 5l12 16h7c6 0 10 5 10 11v11c0 4-3 6-7 6H19c-4 0-7-3-7-7V82Z" fill="#ef4444" stroke="#991b1b" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M40 50h16v18H29l11-18Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2" strokeLinejoin="round" />
          <path d="M61 50h14c2 0 4 1 5 3l8 13V68H61V50Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2" strokeLinejoin="round" />
          <path d="M18 84h82l4 8H14l4-8Z" fill="#fca5a5" opacity="0.5" />
          <path d="M12 84h14M82 84h18" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          <circle cx="37" cy="98" r="13" fill="#1e293b" stroke="#0f172a" strokeWidth="2.4" />
          <circle cx="85" cy="98" r="13" fill="#1e293b" stroke="#0f172a" strokeWidth="2.4" />
          <circle cx="37" cy="98" r="6" fill="#cbd5e1" />
          <circle cx="85" cy="98" r="6" fill="#cbd5e1" />
          <rect x="94" y="74" width="12" height="7" rx="3" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
          <rect x="12" y="74" width="8" height="6" rx="3" fill="#fecaca" stroke="#b91c1c" strokeWidth="1.8" />
        </g>
      );
    case "kendaraan-sepeda":
      return (
        <g>
          <Shadow rx={38} />
          <circle cx="30" cy="80" r="20" fill="none" stroke="#334155" strokeWidth="6" />
          <circle cx="92" cy="80" r="20" fill="none" stroke="#334155" strokeWidth="6" />
          <circle cx="30" cy="80" r="4" fill="#94a3b8" />
          <circle cx="92" cy="80" r="4" fill="#94a3b8" />
          <path d="M30 80 54 46l18 34M54 46h20l18 34M38 46h30M72 46l-8-12M64 34h12" fill="none" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M48 80h20" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
          <circle cx="58" cy="80" r="5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.8" />
          <path d="M50 34h12" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          <path d="M78 44h10" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          <path d="M40 22c8-5 16-4 20 1" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        </g>
      );
    case "kendaraan-bus":
      return (
        <g>
          <Shadow rx={36} />
          <rect x="12" y="26" width="96" height="72" rx="14" fill="#facc15" stroke="#a16207" strokeWidth="2.6" />
          <rect x="22" y="36" width="24" height="22" rx="4" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2" />
          <rect x="51" y="36" width="24" height="22" rx="4" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2" />
          <rect x="80" y="36" width="20" height="22" rx="4" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2" />
          <path d="M12 68h96v10H12z" fill="#f59e0b" />
          <rect x="80" y="36" width="20" height="42" rx="4" fill="#0ea5e9" opacity="0.85" />
          <path d="M84 70h12" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" />
          <circle cx="34" cy="98" r="13" fill="#1e293b" stroke="#0f172a" strokeWidth="2.4" />
          <circle cx="86" cy="98" r="13" fill="#1e293b" stroke="#0f172a" strokeWidth="2.4" />
          <circle cx="34" cy="98" r="5.5" fill="#cbd5e1" />
          <circle cx="86" cy="98" r="5.5" fill="#cbd5e1" />
          <rect x="12" y="48" width="4" height="18" rx="2" fill="#ef4444" />
          <ellipse cx="38" cy="33" rx="14" ry="4" fill="#fff" opacity="0.4" />
        </g>
      );
    case "kendaraan-pesawat":
      return (
        <g transform="rotate(8 60 60)">
          <Shadow rx={30} cy={112} />
          <path d="M60 10 104 78 60 66 16 78 60 10Z" fill="#38bdf8" stroke="#0369a1" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M60 84 88 104 60 98 32 104 60 84Z" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M60 8c9 0 14 8 14 18v58c0 8-6 14-14 14s-14-6-14-14V26c0-10 5-18 14-18Z" fill="#f8fafc" stroke="#475569" strokeWidth="2.6" />
          <path d="M60 8c-5 0-9 3-11 8h22c-2-5-6-8-11-8Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
          <ellipse cx="60" cy="30" rx="8" ry="11" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2" />
          <ellipse cx="58" cy="26" rx="3" ry="4" fill="#e0f2fe" opacity="0.8" />
          <path d="M52 52h16M52 62h16M52 72h16" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="40" r="2.4" fill="#f59e0b" />
        </g>
      );
    case "kendaraan-kapal":
      return (
        <g>
          <path d="M8 96c6-6 12-6 18 0s12 6 18 0 12-6 18 0 12 6 18 0 12-6 18 0 12 6 18 0" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
          <path d="M16 72h90l-11 27H27L16 72Z" fill="#ef4444" stroke="#991b1b" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M22 80h78l-3 8H25l-3-8Z" fill="#fca5a5" opacity="0.65" />
          <rect x="32" y="46" width="34" height="26" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="2.4" />
          <rect x="38" y="52" width="8" height="8" rx="2" fill="#38bdf8" stroke="#0369a1" strokeWidth="1.6" />
          <rect x="50" y="52" width="8" height="8" rx="2" fill="#38bdf8" stroke="#0369a1" strokeWidth="1.6" />
          <rect x="72" y="34" width="12" height="38" rx="3" fill="#f59e0b" stroke="#b45309" strokeWidth="2.2" />
          <rect x="70" y="30" width="16" height="7" rx="3" fill="#334155" />
          <path d="M66 50c6-8 6-14 0-20M66 34l14 6-14 5" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="82" cy="82" r="7" fill="none" stroke="#f8fafc" strokeWidth="4" />
        </g>
      );
    case "kendaraan-kereta":
      return (
        <g>
          <Shadow rx={34} />
          <path d="M10 108h100" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
          <path d="M16 108h100M20 114l10-6M44 114l10-6M68 114l10-6M92 114l10-6" stroke="#94a3b8" strokeWidth="2" />
          <g fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2">
            <circle cx="22" cy="30" r="8" />
            <circle cx="12" cy="18" r="6" />
            <circle cx="30" cy="14" r="5" />
          </g>
          <rect x="26" y="26" width="16" height="24" rx="4" fill="#334155" />
          <rect x="28" y="18" width="12" height="10" rx="3" fill="#334155" />
          <rect x="18" y="46" width="66" height="42" rx="10" fill="#ef4444" stroke="#991b1b" strokeWidth="2.6" />
          <path d="M60 30h30v30H60z" fill="#fbbf24" stroke="#b45309" strokeWidth="2.4" />
          <rect x="66" y="37" width="18" height="14" rx="3" fill="#bae6fd" stroke="#0369a1" strokeWidth="1.8" />
          <circle cx="46" cy="52" r="10" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="46" cy="52" r="4" fill="#fff7cc" />
          <path d="M20 66h60" stroke="#fca5a5" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <rect x="86" y="52" width="14" height="8" rx="3" fill="#fde047" stroke="#ca8a04" strokeWidth="1.8" />
          <circle cx="32" cy="92" r="11" fill="#1e293b" stroke="#0f172a" strokeWidth="2.4" />
          <circle cx="70" cy="92" r="11" fill="#1e293b" stroke="#0f172a" strokeWidth="2.4" />
          <circle cx="32" cy="92" r="4.6" fill="#cbd5e1" />
          <circle cx="70" cy="92" r="4.6" fill="#cbd5e1" />
        </g>
      );
    case "kendaraan-roket":
      return (
        <g>
          <Shadow rx={24} cy={114} />
          <path d="M60 6c12 14 19 32 19 52v26H41V58c0-20 7-38 19-52Z" fill="#f8fafc" stroke="#475569" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M60 6c12 14 19 32 19 52H41c0-20 7-38 19-52Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M41 68H24l10 20 7-6V68ZM79 68h17l-10 20-7-6V68Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2.4" strokeLinejoin="round" />
          <circle cx="60" cy="44" r="11" fill="#38bdf8" stroke="#0369a1" strokeWidth="2.4" />
          <circle cx="57" cy="40" r="3.6" fill="#e0f2fe" opacity="0.85" />
          <path d="M46 58h28" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 88h20l-4 10H54l-4-10Z" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          <path d="M56 96c0 9 4 14 4 20 0-6 4-11 4-20-3 2-5 2-8 0Z" fill="#fb923c" stroke="#ea580c" strokeWidth="2" />
          <path d="M60 98c0 6 2 9 2 13 0-4 2-7 2-13-1 1-3 1-4 0Z" fill="#fde047" />
        </g>
      );
    case "kendaraan-helikopter":
      return (
        <g>
          <Shadow rx={30} />
          <path d="M22 28h66" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          <path d="M55 28v10" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="72" cy="26" rx="42" ry="4" fill="#94a3b8" opacity="0.5" />
          <ellipse cx="54" cy="66" rx="31" ry="23" fill="#fbbf24" stroke="#a16207" strokeWidth="2.6" />
          <path d="M78 64c8-2 16-4 24-6" stroke="#ca8a04" strokeWidth="8" strokeLinecap="round" />
          <path d="M100 52v16M94 60h14" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <path d="M70 50c8 0 15 5 18 12-6 5-18 6-24 2-3-6 0-13 6-14Z" fill="#38bdf8" stroke="#0369a1" strokeWidth="2.2" />
          <path d="M28 62c4-9 14-14 23-14-8 6-13 12-14 20-4 0-8-2-9-6Z" fill="#fde047" opacity="0.6" />
          <path d="M34 84 26 96M70 84l8 12M24 96h16M62 96h18" fill="none" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          <circle cx="44" cy="72" r="4.4" fill="#26313f" />
          <circle cx="45.4" cy="70.6" r="1.5" fill="#fff" />
          <circle cx="54" cy="66" r="3" fill="#b45309" />
        </g>
      );
    default:
      return (
        <g>
          <Shadow />
          <circle cx="60" cy="62" r="34" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2.4" />
          <path d="M46 60h28M46 70h20" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        </g>
      );
  }
}

export function ItemArt({ art, className }: ItemArtProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={art.replace(/-/g, " ")}>
      {renderArt(art)}
    </svg>
  );
}
