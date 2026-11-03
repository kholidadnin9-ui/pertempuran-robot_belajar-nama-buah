import type { GameItem, GameLevel, Question, RobotOption, RobotPalette } from "../data/gameData";
import { ENEMY_LASER, PLAYER_MAX_LIVES } from "../data/gameData";
import { BattleEffects, BattlePlatform, CityBackdrop, type ShotInfo } from "../components/Arena";
import { useMemo, useRef } from "react";
import {
  CheckIcon,
  ClipboardIcon,
  CloseIcon,
  Heart,
  PauseIcon,
  SoundOffIcon,
  SoundOnIcon,
  SparkIcon,
  SpeakerIcon,
  Star,
} from "../components/Icons";
import { ItemArt } from "../components/ItemArt";
import { Robot, RobotHead } from "../components/Robot";
import { SmokeCloud } from "../components/Smoke";

export interface AnswerState {
  optionId: string;
  correct: boolean;
  livesLeft: number;
  chosenName: string;
  correctName: string;
}

interface BattleScreenProps {
  robot: RobotOption;
  enemyPalette: RobotPalette;
  level: GameLevel;
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  lives: number;
  enemyHp: number;
  enemyMaxHp: number;
  score: number;
  answer: AnswerState | null;
  fx: "player" | "enemy" | null;
  enemyDefeated: boolean;
  paused: boolean;
  soundOn: boolean;
  onToggleSound: () => void;
  onAnswer: (item: GameItem) => void;
  onSpeak: () => void;
  onPause: () => void;
}

const praises = ["Hebat!", "Keren!", "Pintar!", "Mantap!", "Luar biasa!"];

function HeartsRow({ lives }: { lives: number }) {
  return (
    <div className="flex items-center gap-[2px] sm:gap-1">
      {Array.from({ length: PLAYER_MAX_LIVES }).map((_, i) => (
        <Heart
          key={i}
          filled={i < lives}
          className={`h-[11px] w-[13px] transition-all sm:h-[19px] sm:w-[21px] ${i >= lives ? "scale-90 opacity-80" : "drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]"}`}
        />
      ))}
    </div>
  );
}

function EnemyHearts({ hp, max }: { hp: number; max: number }) {
  return (
    <div className="flex items-center gap-[1.5px] sm:gap-[3px]">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < hp;
        return (
          <span
            key={i}
            className={`relative block h-[9px] w-[8px] rounded-[2px] transition-all sm:h-[14px] sm:w-[12px] ${
              filled
                ? "bg-gradient-to-b from-[#ff8296] to-[#e11d48] shadow-[0_0_6px_rgba(255,80,110,0.8)]"
                : "bg-[#22345a] ring-1 ring-inset ring-[#3d547e]"
            }`}
            style={{ clipPath: "polygon(50% 100%, 0 42%, 12% 8%, 50% 22%, 88% 8%, 100% 42%)" }}
          />
        );
      })}
    </div>
  );
}

function Hud({
  robot,
  level,
  questionIndex,
  totalQuestions,
  lives,
  enemyHp,
  enemyMaxHp,
}: Omit<BattleScreenProps, "onAnswer" | "onSpeak" | "onPause" | "onToggleSound" | "soundOn" | "paused" | "answer" | "fx" | "score" | "question">) {
  return (
    <header className="relative z-30 flex items-stretch justify-between gap-1 sm:gap-2 md:gap-4">
      <div className="hud-panel flex min-w-0 flex-1 items-center gap-1 rounded-xl rounded-tl-[18px] px-1 py-1.5 sm:gap-2.5 sm:px-2.5 sm:py-2">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-cyan-100/90 bg-[radial-gradient(circle_at_50%_35%,#2b7ed6,#08224e)] p-0.5 shadow-[0_0_12px_rgba(90,225,255,0.7)] sm:h-14 sm:w-14">
          <RobotHead sprite={robot.id} className="h-full w-full" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-fun text-[9px] font-bold leading-tight text-white drop-shadow-[0_2px_0_rgba(3,30,70,0.7)] sm:text-base">
            Pemain Hebat
          </p>
          <HeartsRow lives={lives} />
        </div>
      </div>

      <div className="hud-panel flex shrink-0 items-center gap-1 rounded-xl px-1.5 py-1 sm:gap-2.5 sm:px-3 sm:py-1.5">
        <div className="flex items-center gap-1.5 sm:hidden">
          <Star className="h-4 w-4 shrink-0" />
          <span className="font-fun text-xs font-extrabold text-white">{level.number}</span>
          <span className="h-5 w-px bg-cyan-200/40" />
          <ClipboardIcon className="h-4 w-4 shrink-0" />
          <span className="font-fun text-xs font-extrabold text-white">
            {questionIndex + 1}
            <span className="text-cyan-200/80">/{totalQuestions}</span>
          </span>
        </div>
        <div className="hidden items-center gap-1.5 sm:flex">
          <Star className="h-7 w-7 shrink-0" />
          <div className="leading-none">
            <p className="hud-label font-bold uppercase tracking-wide text-cyan-200">Level {level.number}</p>
            <p className="hud-name mt-0.5 max-w-[74px] truncate font-fun font-bold text-white sm:max-w-none">{level.title}</p>
          </div>
        </div>
        <div className="mx-0.5 hidden h-9 w-px bg-cyan-200/40 sm:mx-1 sm:block" />
        <div className="hidden items-center gap-1.5 sm:flex">
          <ClipboardIcon className="h-7 w-7 shrink-0" />
          <div className="leading-none">
            <p className="hud-label font-bold uppercase tracking-wide text-cyan-200">Soal</p>
            <p className="hud-name mt-0.5 font-fun font-bold text-white">
              {questionIndex + 1}
              <span className="text-cyan-200/80">/{totalQuestions}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="hud-panel flex min-w-0 flex-1 items-center justify-end gap-1 rounded-xl rounded-tr-[18px] px-1 py-1.5 sm:gap-2.5 sm:px-2.5 sm:py-2">
        <div className="min-w-0 flex-1 text-right">
          <p className="truncate font-fun text-[9px] font-bold leading-tight text-white drop-shadow-[0_2px_0_rgba(3,30,70,0.7)] sm:text-base">
            Robot Lawan
          </p>
          <div className="flex justify-end">
            <EnemyHearts hp={enemyHp} max={enemyMaxHp} />
          </div>
        </div>
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-rose-200/80 bg-[radial-gradient(circle_at_50%_35%,#7c1d34,#24060f)] p-0.5 shadow-[0_0_12px_rgba(255,90,110,0.65)] sm:h-14 sm:w-14">
          <RobotHead sprite="lawan" variant="enemy" className="h-full w-full" />
        </div>
      </div>
    </header>
  );
}

function QuestionBanner({ text, onSpeak }: { text: string; onSpeak: () => void }) {
  return (
    <div className="relative z-30 mx-auto mt-2 flex w-full max-w-[860px] items-center justify-center sm:mt-3">
      <button
        type="button"
        onClick={onSpeak}
        aria-label="Dengarkan soal"
        className="relative z-10 -mr-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-[linear-gradient(180deg,#5fd3ff,#1876cf)] text-white shadow-[0_4px_0_#0a4f97,0_0_22px_rgba(90,225,255,0.8)] transition active:translate-y-1 sm:-mr-5 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-cyan-300/60 animate-ping" />
        <SpeakerIcon className="h-6 w-6 sm:h-9 sm:w-9" />
      </button>
      <div className="question-panel bevel-soft relative flex min-h-[48px] flex-1 items-center justify-center px-4 py-1 sm:min-h-[78px] sm:px-10">
        <span className="pointer-events-none absolute left-3 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-[#ffe071] shadow-[0_0_10px_#ffe071] sm:block" />
        <span className="pointer-events-none absolute right-3 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-[#ffe071] shadow-[0_0_10px_#ffe071] sm:block" />
        <div className="text-center">
          <p className="font-fun font-extrabold uppercase text-white [text-shadow:0_3px_0_#04265c,0_0_18px_rgba(120,235,255,0.65)] question-text">
            {text}
          </p>
          <p className="hud-label -mt-0.5 font-semibold text-cyan-100/90 sm:mt-0.5">
            Dengarkan, lalu pilih gambar yang benar
          </p>
        </div>
      </div>
    </div>
  );
}

function AnswerCard({
  item,
  index,
  selected,
  answer,
  disabled,
  onPick,
}: {
  item: GameItem;
  index: number;
  selected: boolean;
  answer: AnswerState | null;
  disabled: boolean;
  onPick: () => void;
}) {
  const isCorrectAnswer = answer?.correctName === item.name;
  const showCorrect = Boolean(answer) && isCorrectAnswer;
  const isWrongPick = Boolean(answer) && !answer?.correct && selected;
  const labelClass = showCorrect ? "label-gold" : isWrongPick ? "label-red" : "";
  const letter = ["A", "B", "C"][index];

  return (
    <button
      type="button"
      onClick={onPick}
      disabled={disabled}
      aria-label={`Pilih ${item.name}`}
      className={`answer-card anim-pop h-full ${showCorrect ? "is-correct" : ""} ${isWrongPick ? "is-wrong" : ""}`}
      style={{ animationDelay: `${index * 55}ms` }}
    >
      <span className="absolute left-1.5 top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-sky-200 bg-sky-500/90 font-fun text-[10px] font-bold text-white shadow sm:h-6 sm:w-6 sm:text-xs">
        {letter}
      </span>
      <div className="flex min-h-0 flex-1 items-center justify-center px-1 pt-2">
        <ItemArt art={item.art} className="answer-art w-auto max-w-full drop-shadow-[0_4px_3px_rgba(13,60,100,0.18)]" />
      </div>
      <div
        className={`answer-label relative z-10 -mx-0.5 -mb-0.5 mt-1 flex items-center justify-center rounded-xl px-1 py-1 ${labelClass}`}
      >
        <span className="answer-label-text truncate font-fun font-extrabold leading-none">{item.name}</span>
      </div>
      {showCorrect && <CheckIcon className="absolute -right-2 -top-2 h-8 w-8 drop-shadow-md sm:h-10 sm:w-10" />}
      {isWrongPick && <CloseIcon className="absolute -right-2 -top-2 h-8 w-8 drop-shadow-md sm:h-10 sm:w-10" />}
    </button>
  );
}

function ScorePanel({ score }: { score: number }) {
  return (
    <div className="hud-panel flex items-center gap-2 rounded-xl px-2.5 py-1 sm:px-4 sm:py-1.5">
      <div className="leading-none">
        <p className="hud-label font-bold uppercase tracking-wide text-cyan-200">Skor</p>
        <p className="font-fun text-base font-extrabold leading-tight text-white sm:text-xl">{score}</p>
      </div>
      <Star className="h-6 w-6 sm:h-8 sm:w-8" />
    </div>
  );
}

export function BattleScreen(props: BattleScreenProps) {
  const {
    robot,
    enemyPalette,
    question,
    questionIndex,
    score,
    answer,
    fx,
    enemyDefeated,
    paused,
    soundOn,
    onToggleSound,
    onAnswer,
    onSpeak,
    onPause,
  } = props;

  const praise = praises[questionIndex % praises.length];
  const stageRef = useRef<HTMLDivElement>(null);

  const shot = useMemo<ShotInfo | null>(() => {
    if (fx === "player") {
      return { shooterSprite: robot.id, targetSprite: "lawan", shooterRole: "player", color: robot.laser };
    }
    if (fx === "enemy") {
      return { shooterSprite: "lawan", targetSprite: robot.id, shooterRole: "enemy", color: ENEMY_LASER };
    }
    return null;
  }, [fx, robot]);

  return (
    <div className={`arena-stage no-select relative flex h-[100dvh] w-full flex-col overflow-hidden ${fx === "enemy" ? "fx-screen-shake" : ""}`}>
      <div className="absolute inset-0">
        <CityBackdrop />
      </div>

      <div className="relative z-20 flex min-h-0 flex-1 flex-col px-2 pt-2 lg:px-4 lg:pt-3">
        <Hud {...props} />
        <QuestionBanner text={question.answer.name} onSpeak={onSpeak} />

        <div ref={stageRef} className="relative min-h-0 flex-1">
          {/* player robot */}
          <div data-robot="player" className="robot-size absolute bottom-0 left-[2%] z-20">
            <BattlePlatform glow={robot.palette.glow} />
            <div
              className={`relative h-full origin-bottom ${
                fx === "enemy" ? "anim-hurt" : fx === "player" ? "anim-attack" : "anim-idle"
              }`}
            >
              <Robot sprite={robot.id} palette={robot.palette} className="h-full w-full" />
            </div>
          </div>

          {/* enemy robot */}
          <div data-robot="enemy" className="robot-size absolute bottom-0 right-[2%] z-20">
            <BattlePlatform glow={enemyPalette.glow} mirrored />
            {enemyDefeated && <SmokeCloud mode="defeat" />}
            <div
              className={`relative h-full origin-bottom ${
                enemyDefeated ? "robot-defeat" : fx === "player" ? "anim-hurt" : "anim-idle"
              }`}
            >
              <Robot
                sprite="lawan"
                palette={enemyPalette}
                variant="enemy"
                glow={!enemyDefeated}
                className={`h-full w-full ${enemyDefeated ? "robot-charred" : ""}`}
              />
            </div>
          </div>

          <BattleEffects shot={shot} containerRef={stageRef} />

          {enemyDefeated ? (
            <div className="defeat-banner absolute left-1/2 top-1 z-40 w-[94%] max-w-md -translate-x-1/2">
              <div className="flex items-center gap-2 rounded-2xl border-[3px] border-[#ffb347] bg-[linear-gradient(180deg,#45210b,#1d0d05)] px-3 py-2 shadow-[0_0_26px_rgba(255,138,31,0.55)] sm:gap-3 sm:px-4 sm:py-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ffb347]/60 bg-[#ff8a1f]/20 sm:h-11 sm:w-11">
                  <span className="text-lg sm:text-xl" aria-hidden="true">
                    🔥
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-fun text-sm font-extrabold uppercase leading-tight text-[#ffe071] sm:text-lg">
                    Robot Lawan Kalah!
                  </p>
                  <p className="text-[10px] font-semibold text-[#ffd9b0] sm:text-xs">
                    Gosong dan keluar asap… lalu menghilang. Hebat!
                  </p>
                </div>
              </div>
            </div>
          ) : answer ? (
            <div className="absolute left-1/2 top-1 z-40 w-[92%] max-w-md -translate-x-1/2">
              <div
                className={`anim-pop flex items-center gap-2 rounded-2xl border-[3px] px-3 py-2 shadow-xl sm:gap-3 sm:px-4 sm:py-2.5 ${
                  answer.correct
                    ? "border-[#ffe071] bg-[linear-gradient(180deg,#16794a,#0c5a37)]"
                    : "border-[#ffb4bf] bg-[linear-gradient(180deg,#b02341,#7d1029)]"
                }`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-10 sm:w-10">
                  {answer.correct ? (
                    <SparkIcon className="h-5 w-5 text-[#ffe071] sm:h-6 sm:w-6" />
                  ) : (
                    <Heart filled={false} className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-fun text-sm font-extrabold leading-tight text-white sm:text-lg">
                    {answer.correct ? `${praise} +10` : "Belum tepat, ayo coba lagi!"}
                  </p>
                  <p className="text-[10px] font-semibold text-white/85 sm:text-xs">
                    {answer.correct
                      ? `Robot menembakkan laser! ${answer.chosenName} itu benar.`
                      : `Jawaban yang benar: ${answer.correctName}`}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            questionIndex === 0 &&
            !paused && (
              <div className="pointer-events-none absolute left-1/2 top-3 z-30 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-cyan-200/60 bg-[#062a63]/85 px-3 py-1 text-[10px] font-bold text-cyan-100 shadow-lg [@media(max-height:560px)]:hidden sm:text-xs">
                <SpeakerIcon className="h-3.5 w-3.5 text-[#ffe071]" />
                Ketuk gambar yang benar untuk menembak!
              </div>
            )
          )}
        </div>
      </div>

      <div className="relative z-30 px-2 pb-1.5 lg:px-4">
        <div className="answers-grid">
          {question.options.map((item, index) => (
            <AnswerCard
              key={item.id}
              item={item}
              index={index}
              selected={answer?.optionId === item.id}
              answer={answer}
              disabled={Boolean(answer) || paused}
              onPick={() => onAnswer(item)}
            />
          ))}
        </div>
      </div>

      <div className="relative z-30 flex items-center justify-between px-3 pb-2 pt-1 sm:px-5">
        <ScorePanel score={score} />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundOn ? "Matikan suara" : "Nyalakan suara"}
            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 shadow-[0_3px_0_rgba(4,35,74,0.5)] transition active:translate-y-0.5 sm:h-11 sm:w-11 ${
              soundOn
                ? "border-cyan-100 bg-[linear-gradient(180deg,#59d3ff,#1479c9)] text-white"
                : "border-slate-300 bg-[linear-gradient(180deg,#cbd5e1,#64748b)] text-white"
            }`}
          >
            {soundOn ? <SoundOnIcon className="h-5 w-5" /> : <SoundOffIcon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={onPause}
            aria-label="Jeda permainan"
            className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-[linear-gradient(180deg,#ffc93c,#f5820b)] text-[#5b2c00] shadow-[0_4px_0_#b96500,0_6px_14px_rgba(3,25,60,0.35)] transition active:translate-y-1 sm:h-14 sm:w-14"
          >
            <PauseIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}


