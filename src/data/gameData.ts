export interface GameItem {
  id: string;
  name: string;
  art: string;
}

export interface GameLevel {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  items: GameItem[];
  iconArt: string;
  questionCount: number;
  color: string;
}

export interface Question {
  key: string;
  answer: GameItem;
  options: GameItem[];
}

export interface RobotPalette {
  primary: string;
  light: string;
  dark: string;
  glow: string;
}

export interface LaserColors {
  /** warna utama sinar */
  core: string;
  /** warna terang di tengah sinar & percikan */
  light: string;
}

export interface RobotOption {
  id: string;
  name: string;
  colorName: string;
  trait: string;
  palette: RobotPalette;
  laser: LaserColors;
}

export const ENEMY_LASER: LaserColors = { core: "#ff8a1f", light: "#ffe3bd" };

export const ROBOTS: RobotOption[] = [
  {
    id: "merah",
    laser: { core: "#ff2f4d", light: "#ffc9d1" },
    name: "Robo Merah",
    colorName: "Merah",
    trait: "Pemberani",
    palette: { primary: "#f43f5e", light: "#fda4af", dark: "#8c0f2d", glow: "#7cf5ff" },
  },
  {
    id: "biru",
    laser: { core: "#2fa9ff", light: "#cdeeff" },
    name: "Robo Biru",
    colorName: "Biru",
    trait: "Pintar",
    palette: { primary: "#2f80f5", light: "#9bdcff", dark: "#0a3b8f", glow: "#5ef2ff" },
  },
  {
    id: "pink",
    laser: { core: "#ff3fa4", light: "#ffd2ea" },
    name: "Robo Pink",
    colorName: "Pink",
    trait: "Ramah",
    palette: { primary: "#f0559e", light: "#ffc2e0", dark: "#97134e", glow: "#8af7ff" },
  },
  {
    id: "ungu",
    laser: { core: "#a066ff", light: "#e8d9ff" },
    name: "Robo Ungu",
    colorName: "Ungu",
    trait: "Kalem",
    palette: { primary: "#8b5cf6", light: "#d8caff", dark: "#42148f", glow: "#7cf5ff" },
  },
];

export const ENEMY_PALETTE: RobotPalette = {
  primary: "#e11d48",
  light: "#fda4af",
  dark: "#6b0f24",
  glow: "#ffd24a",
};

export const ENEMY_PALETTE_ALT: RobotPalette = {
  primary: "#64748b",
  light: "#cbd5e1",
  dark: "#111c33",
  glow: "#ff8a3d",
};

const fruits: GameItem[] = [
  { id: "apel", name: "Apel", art: "apel" },
  { id: "pisang", name: "Pisang", art: "pisang" },
  { id: "jeruk", name: "Jeruk", art: "jeruk" },
  { id: "semangka", name: "Semangka", art: "semangka" },
  { id: "anggur", name: "Anggur", art: "anggur" },
  { id: "stroberi", name: "Stroberi", art: "stroberi" },
  { id: "nanas", name: "Nanas", art: "nanas" },
  { id: "pir", name: "Pir", art: "pir" },
  { id: "mangga", name: "Mangga", art: "mangga" },
  { id: "kiwi", name: "Kiwi", art: "kiwi" },
  { id: "lemon", name: "Lemon", art: "lemon" },
  { id: "blueberry", name: "Blueberry", art: "blueberry" },
];

const animals: GameItem[] = [
  { id: "kucing", name: "Kucing", art: "kucing" },
  { id: "anjing", name: "Anjing", art: "anjing" },
  { id: "kelinci", name: "Kelinci", art: "kelinci" },
  { id: "sapi", name: "Sapi", art: "sapi" },
  { id: "ayam", name: "Ayam", art: "ayam" },
  { id: "ikan", name: "Ikan", art: "ikan" },
  { id: "gajah", name: "Gajah", art: "gajah" },
  { id: "singa", name: "Singa", art: "singa" },
  { id: "monyet", name: "Monyet", art: "monyet" },
  { id: "katak", name: "Katak", art: "katak" },
  { id: "bebek", name: "Bebek", art: "bebek" },
  { id: "kupu-kupu", name: "Kupu-kupu", art: "kupu-kupu" },
];

const colors: GameItem[] = [
  { id: "warna-merah", name: "Merah", art: "warna-merah" },
  { id: "warna-biru", name: "Biru", art: "warna-biru" },
  { id: "warna-kuning", name: "Kuning", art: "warna-kuning" },
  { id: "warna-hijau", name: "Hijau", art: "warna-hijau" },
  { id: "warna-ungu", name: "Ungu", art: "warna-ungu" },
  { id: "warna-oranye", name: "Oranye", art: "warna-oranye" },
];

const shapes: GameItem[] = [
  { id: "bentuk-lingkaran", name: "Lingkaran", art: "bentuk-lingkaran" },
  { id: "bentuk-persegi", name: "Persegi", art: "bentuk-persegi" },
  { id: "bentuk-segitiga", name: "Segitiga", art: "bentuk-segitiga" },
  { id: "bentuk-bintang", name: "Bintang", art: "bentuk-bintang" },
  { id: "bentuk-hati", name: "Hati", art: "bentuk-hati" },
  { id: "bentuk-belah-ketupat", name: "Belah Ketupat", art: "bentuk-belah-ketupat" },
];

const vehicles: GameItem[] = [
  { id: "kendaraan-mobil", name: "Mobil", art: "kendaraan-mobil" },
  { id: "kendaraan-sepeda", name: "Sepeda", art: "kendaraan-sepeda" },
  { id: "kendaraan-bus", name: "Bus", art: "kendaraan-bus" },
  { id: "kendaraan-pesawat", name: "Pesawat", art: "kendaraan-pesawat" },
  { id: "kendaraan-kapal", name: "Kapal", art: "kendaraan-kapal" },
  { id: "kendaraan-kereta", name: "Kereta", art: "kendaraan-kereta" },
  { id: "kendaraan-roket", name: "Roket", art: "kendaraan-roket" },
  { id: "kendaraan-helikopter", name: "Helikopter", art: "kendaraan-helikopter" },
];

export const LEVELS: GameLevel[] = [
  {
    id: "buah",
    number: 1,
    title: "Nama Buah",
    subtitle: "Ayo kenali buah-buahan",
    items: fruits,
    iconArt: "apel",
    questionCount: 10,
    color: "#ff7a45",
  },
  {
    id: "hewan",
    number: 2,
    title: "Nama Hewan",
    subtitle: "Ayo kenali hewan",
    items: animals,
    iconArt: "kucing",
    questionCount: 10,
    color: "#22b573",
  },
  {
    id: "warna",
    number: 3,
    title: "Nama Warna",
    subtitle: "Ayo kenali warna",
    items: colors,
    iconArt: "warna-merah",
    questionCount: 10,
    color: "#ef4444",
  },
  {
    id: "bentuk",
    number: 4,
    title: "Nama Bentuk",
    subtitle: "Ayo kenali bentuk",
    items: shapes,
    iconArt: "bentuk-bintang",
    questionCount: 10,
    color: "#eab308",
  },
  {
    id: "kendaraan",
    number: 5,
    title: "Nama Kendaraan",
    subtitle: "Ayo kenali kendaraan",
    items: vehicles,
    iconArt: "kendaraan-roket",
    questionCount: 10,
    color: "#38bdf8",
  },
];

export const PLAYER_MAX_LIVES = 5;
export const ENEMY_MAX_HP = 5;

export function shuffle<T>(list: T[]): T[] {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function buildQuestions(level: GameLevel): Question[] {
  const answers: GameItem[] = [];
  while (answers.length < level.questionCount) {
    const round = shuffle(level.items);
    for (const item of round) {
      if (answers.length >= level.questionCount) break;
      const previous = answers[answers.length - 1];
      if (previous && previous.id === item.id && level.items.length > 3) continue;
      answers.push(item);
    }
  }

  return answers.map((answer, index) => {
    const pool = level.items.filter((item) => item.id !== answer.id);
    const distractors = shuffle(pool).slice(0, 2);
    return {
      key: `${level.id}-${index}-${answer.id}`,
      answer,
      options: shuffle([answer, ...distractors]),
    };
  });
}

export function starsFor(correct: number): number {
  if (correct >= 9) return 3;
  if (correct >= 7) return 2;
  return 1;
}
