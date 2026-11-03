import type { CSSProperties } from "react";
import { LEVELS, ROBOTS, type RobotOption } from "../data/gameData";
import { CityBackdrop } from "../components/Arena";
import { BoltIcon, HelpIcon, PlayIcon, SoundOffIcon, SoundOnIcon, SparkIcon, Star } from "../components/Icons";
import { ItemArt } from "../components/ItemArt";
import { Robot, RobotHead } from "../components/Robot";

interface StartScreenProps {
  selected: RobotOption;
  onSelect: (id: string) => void;
  onStart: () => void;
  onHowTo: () => void;
  soundOn: boolean;
  onToggleSound: () => void;
  levelIndex: number;
  onSelectLevel: (index: number) => void;
  starRecord: number[];
}

export function StartScreen({
  selected,
  onSelect,
  onStart,
  onHowTo,
  soundOn,
  onToggleSound,
  levelIndex,
  onSelectLevel,
  starRecord,
}: StartScreenProps) {
  const chosenLevel = LEVELS[levelIndex] ?? LEVELS[0];

  return (
    <div className="no-select relative min-h-[100dvh] w-full overflow-x-hidden overflow-y-auto">
      <CityBackdrop dim />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_0%,rgba(10,50,110,0.15),rgba(2,18,48,0.65))]" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col px-3 pb-24 pt-3 sm:px-6 sm:pb-3 sm:pt-5">
        <header className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-cyan-200/80 bg-[linear-gradient(180deg,#1e7ad6,#082c68)] shadow-[0_0_18px_rgba(90,225,255,0.5)] sm:h-14 sm:w-14">
              <BoltIcon className="h-6 w-6 text-[#ffe071] sm:h-8 sm:w-8" />
            </div>
            <div>
              <p className="font-fun text-lg font-extrabold uppercase leading-none tracking-wide text-white [text-shadow:0_3px_0_#062a63] sm:text-2xl">
                Robo Arena
              </p>
              <p className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.14em] text-cyan-200 sm:text-[11px]">
                Belajar sambil bertarung
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={onToggleSound}
              aria-label={soundOn ? "Matikan suara" : "Nyalakan suara"}
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-white shadow-[0_3px_0_rgba(3,25,60,0.45)] transition active:translate-y-0.5 sm:h-12 sm:w-12 ${
                soundOn
                  ? "border-cyan-100 bg-[linear-gradient(180deg,#52cfff,#1374c5)]"
                  : "border-slate-200 bg-[linear-gradient(180deg,#b8c4d4,#5b6b83)]"
              }`}
            >
              {soundOn ? <SoundOnIcon className="h-5 w-5 sm:h-6 sm:w-6" /> : <SoundOffIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
            <button
              type="button"
              onClick={onHowTo}
              className="flex h-10 items-center gap-1.5 rounded-full border-2 border-cyan-100/80 bg-[linear-gradient(180deg,#1c6cc4,#0a3a80)] px-2.5 font-fun text-xs font-bold text-white shadow-[0_3px_0_rgba(3,25,60,0.45)] transition active:translate-y-0.5 sm:h-12 sm:px-4 sm:text-sm"
            >
              <HelpIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              Cara Main
            </button>
          </div>
        </header>

        <div className="mt-3 grid flex-1 items-center gap-3 sm:mt-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mx-auto flex w-fit items-center gap-1.5 rounded-full border border-cyan-200/50 bg-[#062a63]/70 px-3 py-1 text-[10px] font-bold text-cyan-100 sm:text-xs lg:mx-0">
              <SparkIcon className="h-3.5 w-3.5 text-[#ffe071]" />
              Untuk usia 5–6 tahun • Bisa bersuara
            </div>
            <h1 className="mt-2 font-fun text-2xl font-extrabold leading-[1.05] text-white [text-shadow:0_4px_0_#052456,0_0_26px_rgba(70,215,255,0.45)] sm:text-4xl lg:text-[44px]">
              Pilih Robotmu,
              <br />
              <span className="text-[#ffe071]">Tembak Jawaban Benar!</span>
            </h1>
            <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-[#ffe071]/70 bg-[#041c44]/95 px-3 py-1 font-fun text-[10px] font-extrabold uppercase tracking-wide text-[#ffe071] shadow-[0_2px_0_rgba(2,14,36,0.9)] sm:text-[12px] lg:mx-0">
              <SparkIcon className="h-3 w-3 shrink-0 text-[#ffe071] sm:h-3.5 sm:w-3.5" />
              Created by: Widodo Guru SD
            </p>
            <p className="mx-auto mt-2 max-w-md text-xs font-semibold leading-relaxed text-cyan-50/90 sm:text-sm lg:mx-0">
              Dengarkan nama buah, hewan, warna, bentuk, dan kendaraan. Ketuk gambar yang cocok, lalu robotmu
              menembakkan laser ke robot lawan!
            </p>

            <div className="mt-3 hidden flex-col items-center gap-2 sm:flex sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={onStart}
                className="btn-gold flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl px-6 py-2.5 font-fun text-lg font-extrabold uppercase tracking-wide sm:w-auto sm:text-xl"
              >
                <PlayIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                Mulai Level {chosenLevel.number}
              </button>
              <button
                type="button"
                onClick={onHowTo}
                className="btn-blue flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl px-5 py-2 font-fun text-sm font-bold uppercase tracking-wide sm:w-auto"
              >
                <HelpIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Cara Bermain
              </button>
            </div>
            <p className="mt-2 text-[10px] font-bold text-cyan-100/70 sm:text-xs">
              Level {chosenLevel.number}: {chosenLevel.title} • 10 soal • semua level terbuka
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="glass-panel relative overflow-hidden rounded-[26px] p-2.5 sm:p-4">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />
              <div className="flex items-center justify-between gap-2">
                <p className="font-fun text-sm font-bold text-white sm:text-lg">Pilih Robotmu</p>
                <span className="flex items-center gap-1 rounded-full border border-[#ffe071]/60 bg-[#ffd75e]/15 px-2 py-0.5 text-[9px] font-bold text-[#ffe071] sm:text-[11px]">
                  <Star className="h-3 w-3" />
                  4 Robot Siap
                </span>
              </div>

              <div className="relative mt-1 flex items-end justify-center">
                <div className="relative flex h-[150px] w-[172px] items-end justify-center sm:h-[230px] sm:w-[265px]">
                  <div
                    className="absolute bottom-1 left-1/2 h-5 w-[130%] -translate-x-1/2 rounded-[50%] bg-black/35 blur-md sm:h-7"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-x-[-10%] bottom-0 h-[24%] rounded-[50%] border-2 border-cyan-100/60 bg-[linear-gradient(180deg,rgba(220,250,255,0.75),rgba(80,170,215,0.35))] shadow-[0_0_24px_rgba(90,225,255,0.55)]"
                    aria-hidden="true"
                  />
                  <Robot
                    sprite={selected.id}
                    palette={selected.palette}
                    className="anim-idle relative z-10 h-full w-full drop-shadow-[0_10px_12px_rgba(2,20,50,0.35)]"
                  />
                </div>
                <div className="mb-2 ml-1 min-w-0 text-left sm:ml-3">
                  <p className="hud-label font-bold uppercase tracking-wide text-cyan-200">Robot pilihanmu</p>
                  <p className="font-fun text-base font-extrabold leading-tight text-white sm:text-xl">{selected.name}</p>
                  <p className="mt-0.5 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-cyan-100 sm:text-[11px]">
                    <BoltIcon className="h-3 w-3 text-[#ffe071]" />
                    {selected.trait}
                  </p>
                  <p className="mt-1 hidden text-[9px] font-semibold leading-snug text-cyan-100/70 sm:block">
                    Ketuk robot untuk mengganti warna laser &amp; karakter.
                  </p>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-4 gap-1.5 sm:gap-2">
                {ROBOTS.map((robot) => {
                  const isSelected = robot.id === selected.id;
                  return (
                    <button
                      key={robot.id}
                      type="button"
                      onClick={() => onSelect(robot.id)}
                      aria-pressed={isSelected}
                      aria-label={`Pilih ${robot.name}, warna ${robot.colorName}`}
                      className={`relative flex flex-col items-center gap-0.5 rounded-xl border-2 px-0.5 py-1 transition-all sm:gap-1 sm:py-1.5 ${
                        isSelected
                          ? "border-[#ffe071] bg-white/15 shadow-[0_0_18px_rgba(255,224,113,0.55)] -translate-y-0.5"
                          : "border-cyan-200/30 bg-[#062550]/70 hover:border-cyan-200/80 hover:bg-[#0a3268]/80"
                      }`}
                      style={{ "--robot-color": robot.palette.primary } as CSSProperties}
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 sm:h-12 sm:w-12"
                        style={{
                          borderColor: robot.palette.light,
                          background: `radial-gradient(circle at 50% 35%, ${robot.palette.primary}, ${robot.palette.dark})`,
                        }}
                      >
                        <RobotHead sprite={robot.id} className="h-full w-full" />
                      </span>
                      <span className="text-[9px] font-extrabold leading-tight text-white sm:text-[11px]">
                        {robot.colorName}
                      </span>
                      <span
                        className="h-1 w-5 rounded-full"
                        style={{ backgroundColor: robot.palette.primary }}
                        aria-hidden="true"
                      />
                      {isSelected && (
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-[#2fbf71] text-[9px] font-bold text-white sm:h-5 sm:w-5">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-2 grid grid-cols-3 gap-1.5">
                <div className="rounded-lg border border-cyan-200/25 bg-[#05224f]/70 px-1 py-1 text-center">
                  <p className="text-[8px] font-bold uppercase tracking-wide text-cyan-200">Level</p>
                  <p className="font-fun text-sm font-extrabold leading-none text-white">5</p>
                </div>
                <div className="rounded-lg border border-cyan-200/25 bg-[#05224f]/70 px-1 py-1 text-center">
                  <p className="text-[8px] font-bold uppercase tracking-wide text-cyan-200">Soal / Level</p>
                  <p className="font-fun text-sm font-extrabold leading-none text-white">10</p>
                </div>
                <div className="rounded-lg border border-cyan-200/25 bg-[#05224f]/70 px-1 py-1 text-center">
                  <p className="text-[8px] font-bold uppercase tracking-wide text-cyan-200">Pilihan</p>
                  <p className="font-fun text-sm font-extrabold leading-none text-white">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-3 rounded-2xl border-2 border-cyan-200/45 bg-[#03173c]/95 p-2 shadow-[0_10px_26px_rgba(1,10,30,0.55)] sm:mt-4 sm:p-3">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#ffe071]/70 bg-[#ffd75e]/15">
                <Star className="h-4 w-4" />
              </span>
              <div>
                <p className="font-fun text-sm font-extrabold leading-none text-white sm:text-base">Pilih Level Bermain</p>
                <p className="mt-0.5 text-[9px] font-semibold text-cyan-100/85 sm:text-[11px]">
                  Semua level terbuka — mainkan level mana pun yang kamu suka.
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1 rounded-full border border-emerald-300/70 bg-emerald-400/20 px-2.5 py-1 font-fun text-[9px] font-extrabold uppercase tracking-wide text-emerald-100 sm:text-[11px]">
              <span aria-hidden="true">🔓</span> Bebas Pilih
            </span>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-1.5 min-[430px]:grid-cols-3 sm:grid-cols-5">
            {LEVELS.map((level, index) => {
              const active = index === levelIndex;
              const earned = starRecord[index] ?? 0;
              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => onSelectLevel(index)}
                  aria-pressed={active}
                  aria-label={`Pilih level ${level.number}, ${level.title}, ${earned} dari 3 bintang`}
                  className={`relative flex min-w-0 flex-col gap-1 rounded-xl border-2 px-2 py-1.5 text-left transition-all ${
                    active
                      ? "-translate-y-0.5 border-[#ffe071] bg-[linear-gradient(180deg,#14589f,#0a2f66)] shadow-[0_0_18px_rgba(255,224,113,0.55)]"
                      : "border-cyan-200/30 bg-[#062550]/80 hover:border-cyan-200/80 hover:bg-[#0a3268]"
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-1.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                        active ? "border-[#ffe071]/70 bg-[#ffe071]/20" : "border-cyan-200/30 bg-[#0a2f66]"
                      }`}
                    >
                      <ItemArt art={level.iconArt} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 leading-tight">
                      <p className="text-[8px] font-bold uppercase tracking-wide text-cyan-200 sm:text-[9px]">
                        Level {level.number}
                      </p>
                      <p className="truncate font-fun text-[10px] font-extrabold text-white sm:text-[11px]">
                        {level.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[0, 1, 2].map((slot) => (
                      <Star key={slot} filled={slot < earned} className="h-3 w-3 shrink-0" />
                    ))}
                    <span className="ml-0.5 truncate text-[8px] font-bold text-cyan-100/80 sm:text-[9px]">
                      {earned > 0 ? `${earned}/3` : "Belum dimainkan"}
                    </span>
                  </div>
                  {active && (
                    <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-[#2fbf71] text-[9px] font-bold text-white">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={onStart}
            className="btn-gold mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 font-fun text-base font-extrabold uppercase tracking-wide sm:hidden"
          >
            <PlayIcon className="h-5 w-5" />
            Mulai Level {chosenLevel.number}: {chosenLevel.title}
          </button>
        </section>
      </div>

      {/* tombol mulai lengket di bawah layar ponsel */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-cyan-200/40 bg-[#03173c]/97 px-3 pb-2.5 pt-2 shadow-[0_-8px_22px_rgba(1,10,30,0.6)] sm:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-[9px] font-bold uppercase tracking-wide text-cyan-200">Level terpilih</p>
            <p className="truncate font-fun text-[13px] font-extrabold text-white">
              Level {chosenLevel.number} • {chosenLevel.title}
            </p>
          </div>
          <button
            type="button"
            onClick={onStart}
            className="btn-gold flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2 font-fun text-sm font-extrabold uppercase tracking-wide"
          >
            <PlayIcon className="h-4 w-4" /> Mulai
          </button>
        </div>
      </div>
    </div>
  );
}
