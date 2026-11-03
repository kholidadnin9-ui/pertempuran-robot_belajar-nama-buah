import type { GameLevel, RobotOption } from "../data/gameData";
import { CityBackdrop, Confetti } from "../components/Arena";
import {
  ArrowRightIcon,
  CloseIcon,
  Heart,
  HomeIcon,
  PauseIcon,
  PlayIcon,
  RefreshIcon,
  SparkIcon,
  SpeakerIcon,
  Star,
  SoundOffIcon,
  SoundOnIcon,
  TrophyIcon,
} from "../components/Icons";
import { ItemArt } from "../components/ItemArt";
import { Robot, RobotHead } from "../components/Robot";

function Stars({ count, size = "h-10 w-10 sm:h-14 sm:w-14" }: { count: number; size?: string }) {
  return (
    <div className="stars-row flex items-center justify-center gap-1 sm:gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <Star
          key={i}
          filled={i < count}
          className={`${size} ${i < count ? "anim-pop" : "opacity-60"}`}
          style={{ animationDelay: `${i * 110}ms` }}
        />
      ))}
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="rounded-xl border border-cyan-200/25 bg-[#05224f]/80 px-2 py-1.5 text-center">
      <p className="text-[9px] font-bold uppercase tracking-wide text-cyan-200">{label}</p>
      <p className={`font-fun text-lg font-extrabold leading-tight sm:text-xl ${accent ?? "text-white"}`}>{value}</p>
    </div>
  );
}

function ResultLayout({ children, confetti = false }: { children: React.ReactNode; confetti?: boolean }) {
  return (
    <div className="no-select relative flex min-h-[100dvh] w-full items-center justify-center overflow-y-auto">
      <CityBackdrop dim />
      {confetti && <Confetti />}
      <div className="relative z-10 w-full max-w-lg px-3 py-5">{children}</div>
    </div>
  );
}

export function LevelCompleteScreen({
  robot,
  level,
  stars,
  correct,
  total,
  score,
  isLast,
  onNext,
  onMenu,
  onReplay,
}: {
  robot: RobotOption;
  level: GameLevel;
  stars: number;
  correct: number;
  total: number;
  score: number;
  isLast: boolean;
  onNext: () => void;
  onMenu: () => void;
  onReplay: () => void;
}) {
  return (
    <ResultLayout confetti>
      <div className="glass-panel anim-pop relative overflow-hidden rounded-[28px] border-[3px] border-cyan-200/70 px-4 pb-4 pt-5 text-center shadow-[0_20px_50px_rgba(1,15,40,0.5)] sm:px-6 sm:pb-6">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl" />
        <span className="inline-flex items-center gap-1 rounded-full border-2 border-[#ffe071] bg-[linear-gradient(180deg,#ffe071,#f5a614)] px-3 py-1 font-fun text-[11px] font-extrabold uppercase tracking-wide text-[#5b2c00] shadow-[0_3px_0_#b96500] sm:text-xs">
          <SparkIcon className="h-3.5 w-3.5" /> Level {level.number} Selesai
        </span>

        <div className="mt-2 flex items-center justify-center gap-3">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-200/70 bg-[radial-gradient(circle_at_50%_30%,#1c72c9,#072355)] sm:h-20 sm:w-20">
            <RobotHead sprite={robot.id} className="h-full w-full p-0.5" />
          </div>
          <TrophyIcon className="anim-bob h-14 w-14 drop-shadow-[0_6px_0_rgba(120,70,0,0.3)] sm:h-16 sm:w-16" />
        </div>

        <h2 className="mt-2 font-fun text-2xl font-extrabold leading-none text-white [text-shadow:0_3px_0_#052456] sm:text-3xl">
          Hebat, {robot.name}!
        </h2>
        <p className="mt-1 text-xs font-semibold text-cyan-100/90 sm:text-sm">
          Kamu menyelesaikan level <span className="font-bold text-white">{level.title}</span>.
        </p>

        <div className="mt-2">
          <Stars count={stars} />
        </div>

        <div className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2">
          <Stat label="Benar" value={`${correct}/${total}`} accent="text-[#8affc0]" />
          <Stat label="Skor" value={`${score}`} accent="text-[#ffe071]" />
          <Stat label="Bintang" value={`${stars}/3`} accent="text-[#ffe071]" />
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={onNext}
            className="btn-gold flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-2.5 font-fun text-base font-extrabold uppercase tracking-wide sm:text-lg"
          >
            {isLast ? "Lihat Kemenangan" : `Lanjut Level ${level.number + 1}`}
            <ArrowRightIcon className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onReplay}
              className="btn-blue flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 font-fun text-xs font-bold uppercase sm:text-sm"
            >
              <RefreshIcon className="h-4 w-4" /> Ulangi
            </button>
            <button
              type="button"
              onClick={onMenu}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-cyan-200/40 bg-[#06244f]/80 px-3 py-2 font-fun text-xs font-bold uppercase text-cyan-100 transition hover:bg-[#0a336b] sm:text-sm"
            >
              <HomeIcon className="h-4 w-4" /> Pilih Level
            </button>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-cyan-100/75 sm:text-xs">
          <ItemArt art={level.iconArt} className="h-5 w-5" />
          {level.subtitle}
        </div>
      </div>
    </ResultLayout>
  );
}

export function VictoryScreen({
  robot,
  totalStars,
  maxStars,
  score,
  onReplay,
  onMenu,
}: {
  robot: RobotOption;
  totalStars: number;
  maxStars: number;
  score: number;
  onReplay: () => void;
  onMenu: () => void;
}) {
  return (
    <ResultLayout confetti>
      <div className="glass-panel anim-pop relative overflow-hidden rounded-[28px] border-[3px] border-[#ffe071]/80 px-4 pb-4 pt-5 text-center shadow-[0_20px_50px_rgba(1,15,40,0.5)] sm:px-6">
        <div className="pointer-events-none absolute -left-14 top-10 h-40 w-40 rounded-full bg-[#ffe071]/20 blur-2xl" />
        <TrophyIcon className="anim-bob mx-auto h-20 w-20 drop-shadow-[0_8px_0_rgba(120,70,0,0.3)] sm:h-24 sm:w-24" />
        <h2 className="mt-1 font-fun text-3xl font-extrabold leading-none text-[#ffe071] [text-shadow:0_4px_0_#7a4300] sm:text-4xl">
          KAMU MENANG!
        </h2>
        <p className="mt-1 text-xs font-semibold text-cyan-50 sm:text-sm">
          Semua robot lawan berhasil dikalahkan. Kamu makin pintar!
        </p>

        <div className="relative mx-auto mt-1 flex h-32 w-44 items-end justify-center sm:h-40 sm:w-52">
          <div className="absolute bottom-0 h-5 w-[120%] rounded-[50%] bg-cyan-300/25 blur-md" />
          <Robot sprite={robot.id} palette={robot.palette} className="anim-idle h-full w-full" />
          <Stars count={3} size="h-8 w-8 sm:h-10 sm:w-10" />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1.5 sm:gap-2">
          <Stat label="Total Bintang" value={`${totalStars}/${maxStars}`} accent="text-[#ffe071]" />
          <Stat label="Skor Akhir" value={`${score}`} accent="text-[#8affc0]" />
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={onReplay}
            className="btn-gold flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-2.5 font-fun text-base font-extrabold uppercase tracking-wide sm:text-lg"
          >
            <PlayIcon className="h-5 w-5" /> Main Lagi
          </button>
          <button
            type="button"
            onClick={onMenu}
            className="btn-blue flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 font-fun text-xs font-bold uppercase sm:text-sm"
          >
            <HomeIcon className="h-4 w-4" /> Pilih Level / Robot
          </button>
        </div>
        <p className="mt-2 text-[10px] font-bold text-cyan-100/70">Lima dunia sudah kamu taklukkan! 🎉</p>
      </div>
    </ResultLayout>
  );
}

export function GameOverScreen({
  robot,
  level,
  score,
  onRetry,
  onMenu,
}: {
  robot: RobotOption;
  level: GameLevel;
  score: number;
  onRetry: () => void;
  onMenu: () => void;
}) {
  return (
    <ResultLayout>
      <div className="glass-panel anim-pop relative overflow-hidden rounded-[28px] border-[3px] border-rose-300/70 px-4 pb-4 pt-5 text-center sm:px-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-rose-200/60 bg-[radial-gradient(circle_at_50%_30%,#7c1d34,#260611)] opacity-90 sm:h-24 sm:w-24">
          <RobotHead sprite={robot.id} className="h-full w-full p-1 grayscale-[35%]" />
        </div>
        <div className="mt-2 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Heart key={i} filled={false} className="h-6 w-7" />
          ))}
        </div>
        <h2 className="mt-2 font-fun text-2xl font-extrabold leading-none text-[#ffd0d8] [text-shadow:0_3px_0_#5a0f1f] sm:text-3xl">
          Energi Habis!
        </h2>
        <p className="mt-1 text-xs font-semibold text-cyan-50/90 sm:text-sm">
          Jangan menyerah! Ayo dengarkan lagi dan coba level ini sekali lagi.
        </p>

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <Stat label="Level" value={`${level.number} • ${level.title}`} />
          <Stat label="Skor" value={`${score}`} accent="text-[#ffe071]" />
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={onRetry}
            className="btn-gold flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-2.5 font-fun text-base font-extrabold uppercase tracking-wide sm:text-lg"
          >
            <RefreshIcon className="h-5 w-5" /> Coba Lagi
          </button>
          <button
            type="button"
            onClick={onMenu}
            className="btn-blue flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 font-fun text-xs font-bold uppercase sm:text-sm"
          >
            <HomeIcon className="h-4 w-4" /> Pilih Level
          </button>
        </div>
      </div>
    </ResultLayout>
  );
}

export function PauseModal({
  level,
  questionIndex,
  total,
  score,
  soundOn,
  onToggleSound,
  onResume,
  onRestart,
  onMenu,
}: {
  level: GameLevel;
  questionIndex: number;
  total: number;
  score: number;
  soundOn: boolean;
  onToggleSound: () => void;
  onResume: () => void;
  onRestart: () => void;
  onMenu: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#02132e]/75 p-3 backdrop-blur-sm">
      <div className="glass-panel anim-pop w-full max-w-sm rounded-[26px] border-[3px] border-cyan-200/70 p-4 text-center sm:p-5">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/70 bg-[linear-gradient(180deg,#ffc93c,#f5820b)] text-[#5b2c00] shadow-lg">
          <PauseIcon className="h-6 w-6" />
        </div>
        <h2 className="mt-2 font-fun text-2xl font-extrabold text-white [text-shadow:0_3px_0_#052456]">Istirahat Dulu</h2>
        <p className="text-xs font-semibold text-cyan-100/85">Robotmu sedang beristirahat. Lanjutkan kalau sudah siap!</p>

        <div className="mt-3 grid grid-cols-3 gap-1.5">
          <Stat label="Level" value={`${level.number}`} />
          <Stat label="Soal" value={`${questionIndex + 1}/${total}`} />
          <Stat label="Skor" value={`${score}`} accent="text-[#ffe071]" />
        </div>

        <button
          type="button"
          onClick={onToggleSound}
          className="mt-2 flex w-full items-center justify-between gap-2 rounded-xl border border-cyan-200/30 bg-[#05224f]/80 px-3 py-2 text-left transition hover:bg-[#0a336b]"
        >
          <span className="flex items-center gap-2">
            {soundOn ? <SoundOnIcon className="h-5 w-5 text-cyan-200" /> : <SoundOffIcon className="h-5 w-5 text-slate-300" />}
            <span className="font-fun text-sm font-bold text-white">Suara & Narasi</span>
          </span>
          <span
            className={`relative h-6 w-11 rounded-full border transition ${soundOn ? "border-cyan-200 bg-cyan-400" : "border-slate-400 bg-slate-600"}`}
          >
            <span
              className={`absolute top-0.5 h-4.5 w-4.5 rounded-full bg-white shadow transition-all ${soundOn ? "left-[22px]" : "left-0.5"}`}
              style={{ height: 18, width: 18 }}
            />
          </span>
        </button>

        <button
          type="button"
          onClick={onResume}
          className="btn-gold mt-3 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 font-fun text-base font-extrabold uppercase"
        >
          <PlayIcon className="h-5 w-5" /> Lanjut Main
        </button>
        <div className="mt-2 flex gap-2">
          <button
            type="button"
            onClick={onRestart}
            className="btn-blue flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-2 font-fun text-xs font-bold uppercase"
          >
            <RefreshIcon className="h-4 w-4" /> Ulangi Level
          </button>
          <button
            type="button"
            onClick={onMenu}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-cyan-200/40 bg-[#06244f]/80 px-2 py-2 font-fun text-xs font-bold uppercase text-cyan-100 transition hover:bg-[#0a336b]"
          >
            <HomeIcon className="h-4 w-4" /> Pilih Level
          </button>
        </div>
      </div>
    </div>
  );
}

export function HowToModal({ onClose, soundOn, onToggleSound }: { onClose: () => void; soundOn: boolean; onToggleSound: () => void }) {
  const steps = [
    {
      icon: <SpeakerIcon className="h-5 w-5" />,
      title: "Dengarkan soalnya",
      text: "Ketuk tombol pengeras suara untuk mendengar nama buah, hewan, warna, bentuk, atau kendaraan.",
      color: "from-[#1c77d0] to-[#0a3a80]",
    },
    {
      icon: <ItemArt art="apel" className="h-6 w-6" />,
      title: "Pilih gambar yang cocok",
      text: "Ada tiga gambar jawaban. Ketuk gambar yang sesuai dengan kata yang kamu dengar.",
      color: "from-[#2fbf71] to-[#0d6b3f]",
    },
    {
      icon: <SparkIcon className="h-5 w-5" />,
      title: "Laser menembak lawan!",
      text: "Jawaban benar = +10 skor dan laser menembak robot lawan. Jawaban salah = satu hati hilang.",
      color: "from-[#f5a614] to-[#a95300]",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#02132e]/78 p-3 backdrop-blur-sm">
      <div className="glass-panel anim-pop w-full max-w-md rounded-[26px] border-[3px] border-cyan-200/70 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="hud-label font-bold uppercase tracking-wide text-cyan-200">Panduan singkat</p>
            <h2 className="font-fun text-2xl font-extrabold text-white [text-shadow:0_3px_0_#052456]">Cara Bermain</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup panduan"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/60 bg-[#06244f] text-white transition hover:bg-[#0b3572]"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-2 space-y-1.5">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-2 rounded-xl border border-cyan-200/20 bg-[#05224f]/70 p-2">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/30 bg-gradient-to-b text-white ${step.color}`}>
                {step.icon}
              </div>
              <div className="min-w-0">
                <p className="font-fun text-sm font-bold leading-tight text-white">
                  <span className="mr-1 text-[#ffe071]">{i + 1}.</span>
                  {step.title}
                </p>
                <p className="text-[10px] font-semibold leading-snug text-cyan-100/85 sm:text-xs">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2 rounded-xl border border-[#ffe071]/40 bg-[#ffd75e]/10 p-2">
          <TrophyIcon className="h-8 w-8 shrink-0" />
          <p className="text-[10px] font-semibold leading-snug text-cyan-50 sm:text-xs">
            Ada <span className="font-bold text-[#ffe071]">5 level</span> dan 10 soal di setiap level.{" "}
            <span className="font-bold text-emerald-200">Semua level terbuka</span> — pilih level favoritmu. Kalahkan
            robot lawan dan kumpulkan bintang!
          </p>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundOn ? "Matikan suara" : "Nyalakan suara"}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-white ${
              soundOn ? "border-cyan-100 bg-[linear-gradient(180deg,#52cfff,#1374c5)]" : "border-slate-300 bg-[linear-gradient(180deg,#b8c4d4,#5b6b83)]"
            }`}
          >
            {soundOn ? <SoundOnIcon className="h-5 w-5" /> : <SoundOffIcon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-gold flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2 font-fun text-sm font-extrabold uppercase"
          >
            <PlayIcon className="h-4 w-4" /> Mengerti, Ayo Main!
          </button>
        </div>
      </div>
    </div>
  );
}
