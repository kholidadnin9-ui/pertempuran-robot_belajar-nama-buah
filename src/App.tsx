import { useCallback, useEffect, useMemo, useState } from "react";
import {
  buildQuestions,
  ENEMY_MAX_HP,
  ENEMY_PALETTE,
  ENEMY_PALETTE_ALT,
  LEVELS,
  PLAYER_MAX_LIVES,
  ROBOTS,
  starsFor,
  type GameItem,
  type Question,
} from "./data/gameData";
import { useAudio } from "./hooks/useAudio";
import { BattleScreen, type AnswerState } from "./screens/BattleScreen";
import { GameOverScreen, HowToModal, LevelCompleteScreen, PauseModal, VictoryScreen } from "./screens/GameScreens";
import { StartScreen } from "./screens/StartScreen";

type Phase = "menu" | "battle" | "levelComplete" | "victory" | "gameOver";

const ZERO_STARS = LEVELS.map(() => 0);

export default function App() {
  const { soundOn, toggleSound, speak, sfx } = useAudio();

  const [phase, setPhase] = useState<Phase>("menu");
  const [robotId, setRobotId] = useState("biru");
  const [levelIndex, setLevelIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [lives, setLives] = useState(PLAYER_MAX_LIVES);
  const [enemyHp, setEnemyHp] = useState(ENEMY_MAX_HP);
  const [score, setScore] = useState(0);
  const [baseScore, setBaseScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [starsForLevel, setStarsForLevel] = useState(1);
  const [starRecord, setStarRecord] = useState<number[]>(ZERO_STARS);
  const [answer, setAnswer] = useState<AnswerState | null>(null);
  const [fx, setFx] = useState<"player" | "enemy" | null>(null);
  const [enemyDefeated, setEnemyDefeated] = useState(false);
  const [paused, setPaused] = useState(false);
  const [showHowTo, setShowHowTo] = useState(false);

  const robot = useMemo(() => ROBOTS.find((item) => item.id === robotId) ?? ROBOTS[1], [robotId]);
  const enemyPalette = robot.id === "merah" ? ENEMY_PALETTE_ALT : ENEMY_PALETTE;
  const level = LEVELS[levelIndex];
  const question = questions[questionIndex];
  const totalStars = starRecord.reduce((sum, value) => sum + value, 0);

  const beginLevel = useCallback(
    (index: number, carryScore: number) => {
      setLevelIndex(index);
      setQuestions(buildQuestions(LEVELS[index]));
      setQuestionIndex(0);
      setScore(carryScore);
      setBaseScore(carryScore);
      setLives(PLAYER_MAX_LIVES);
      setEnemyHp(ENEMY_MAX_HP);
      setCorrectCount(0);
      setStarsForLevel(1);
      setAnswer(null);
      setFx(null);
      setEnemyDefeated(false);
      setPaused(false);
      setPhase("battle");
    },
    []
  );

  const handleStart = useCallback(() => {
    sfx.click();
    beginLevel(levelIndex, 0);
  }, [beginLevel, levelIndex, sfx]);

  /* semua level terbuka: pemain bebas memilih level */
  const handleSelectLevel = useCallback(
    (index: number) => {
      if (index < 0 || index >= LEVELS.length) return;
      sfx.click();
      setLevelIndex(index);
    },
    [sfx]
  );

  const handleSelectRobot = useCallback(
    (id: string) => {
      setRobotId(id);
      sfx.click();
      const picked = ROBOTS.find((item) => item.id === id);
      if (picked) speak(`Robo ${picked.colorName}`);
    },
    [sfx, speak]
  );

  const handleAnswer = useCallback(
    (item: GameItem) => {
      if (phase !== "battle" || answer || paused || !question) return;
      const isCorrect = item.id === question.answer.id;
      speak(item.name);

      const isFinalQuestion = questionIndex >= questions.length - 1;

      if (isCorrect) {
        sfx.laser();
        setFx("player");
        setScore((prev) => prev + 10);
        setCorrectCount((prev) => prev + 1);
        setEnemyHp((prev) => Math.max(0, prev - 1));
        if (isFinalQuestion && enemyHp - 1 <= 0) {
          setEnemyDefeated(true);
          sfx.powerDown();
        }
        setAnswer({
          optionId: item.id,
          correct: true,
          livesLeft: lives,
          chosenName: item.name,
          correctName: question.answer.name,
        });
      } else {
        sfx.wrong();
        sfx.enemyLaser();
        if (isFinalQuestion && enemyHp <= 0) {
          setEnemyDefeated(true);
          sfx.powerDown();
        }
        const remaining = Math.max(0, lives - 1);
        setLives(remaining);
        setFx("enemy");
        setAnswer({
          optionId: item.id,
          correct: false,
          livesLeft: remaining,
          chosenName: item.name,
          correctName: question.answer.name,
        });
      }
    },
    [answer, enemyHp, lives, paused, phase, question, questionIndex, questions.length, sfx, speak]
  );

  const handleSpeakQuestion = useCallback(() => {
    if (!question) return;
    sfx.click();
    speak(question.answer.name);
  }, [question, sfx, speak]);

  /* speak each new question aloud */
  useEffect(() => {
    if (phase === "battle" && !paused && question) {
      speak(question.answer.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, levelIndex, questionIndex, paused]);

  /* clear laser effects */
  useEffect(() => {
    if (!fx) return;
    const timer = setTimeout(() => setFx(null), 2400);
    return () => clearTimeout(timer);
  }, [fx]);

  /* advance after an answer */
  useEffect(() => {
    if (!answer || paused) return;
    const isFinalQuestion = questionIndex >= questions.length - 1;
    const delay = isFinalQuestion && enemyDefeated ? 3900 : answer.correct ? 1650 : 2300;
    const timer = setTimeout(() => {
      if (answer.livesLeft <= 0) {
        sfx.gameOver();
        setAnswer(null);
        setFx(null);
        setEnemyDefeated(false);
        setPhase("gameOver");
        return;
      }
      if (questionIndex >= questions.length - 1) {
        const earned = starsFor(correctCount);
        setStarsForLevel(earned);
        setStarRecord((prev) => prev.map((value, idx) => (idx === levelIndex ? Math.max(value, earned) : value)));
        setAnswer(null);
        setFx(null);
        setEnemyDefeated(false);
        sfx.levelUp();
        setPhase("levelComplete");
        return;
      }
      setAnswer(null);
      setQuestionIndex((prev) => prev + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [answer, paused, questionIndex, questions.length, correctCount, levelIndex, enemyDefeated, sfx]);

  const handleNextLevel = useCallback(() => {
    sfx.click();
    if (levelIndex >= LEVELS.length - 1) {
      sfx.win();
      setPhase("victory");
      return;
    }
    beginLevel(levelIndex + 1, score);
  }, [beginLevel, levelIndex, score, sfx]);

  const handleReplayLevel = useCallback(() => {
    sfx.click();
    beginLevel(levelIndex, baseScore);
  }, [baseScore, beginLevel, levelIndex, sfx]);

  const handleReplayGame = useCallback(() => {
    sfx.click();
    setStarRecord(ZERO_STARS);
    beginLevel(0, 0);
  }, [beginLevel, sfx]);

  const handleMenu = useCallback(() => {
    sfx.click();
    setPaused(false);
    setAnswer(null);
    setFx(null);
    setEnemyDefeated(false);
    setPhase("menu");
  }, [sfx]);

  const handlePause = useCallback(() => {
    sfx.click();
    setPaused(true);
  }, [sfx]);

  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden bg-[#062a5c]">
      {phase === "menu" && (
        <StartScreen
          selected={robot}
          onSelect={handleSelectRobot}
          onStart={handleStart}
          levelIndex={levelIndex}
          onSelectLevel={handleSelectLevel}
          starRecord={starRecord}
          onHowTo={() => {
            sfx.click();
            setShowHowTo(true);
          }}
          soundOn={soundOn}
          onToggleSound={toggleSound}
        />
      )}

      {phase === "battle" && question && (
        <BattleScreen
          robot={robot}
          enemyPalette={enemyPalette}
          level={level}
          question={question}
          questionIndex={questionIndex}
          totalQuestions={questions.length}
          lives={lives}
          enemyHp={enemyHp}
          enemyMaxHp={ENEMY_MAX_HP}
          score={score}
          answer={answer}
          fx={fx}
          enemyDefeated={enemyDefeated}
          paused={paused}
          soundOn={soundOn}
          onToggleSound={toggleSound}
          onAnswer={handleAnswer}
          onSpeak={handleSpeakQuestion}
          onPause={handlePause}
        />
      )}

      {phase === "battle" && paused && (
        <PauseModal
          level={level}
          questionIndex={questionIndex}
          total={questions.length}
          score={score}
          soundOn={soundOn}
          onToggleSound={toggleSound}
          onResume={() => {
            sfx.click();
            setPaused(false);
          }}
          onRestart={handleReplayLevel}
          onMenu={handleMenu}
        />
      )}

      {phase === "levelComplete" && (
        <LevelCompleteScreen
          robot={robot}
          level={level}
          stars={starsForLevel}
          correct={correctCount}
          total={questions.length}
          score={score}
          isLast={levelIndex >= LEVELS.length - 1}
          onNext={handleNextLevel}
          onReplay={handleReplayLevel}
          onMenu={handleMenu}
        />
      )}

      {phase === "victory" && (
        <VictoryScreen
          robot={robot}
          totalStars={totalStars}
          maxStars={LEVELS.length * 3}
          score={score}
          onReplay={handleReplayGame}
          onMenu={handleMenu}
        />
      )}

      {phase === "gameOver" && (
        <GameOverScreen
          robot={robot}
          level={level}
          score={score}
          onRetry={handleReplayLevel}
          onMenu={handleMenu}
        />
      )}

      {showHowTo && (
        <HowToModal
          onClose={() => {
            sfx.click();
            setShowHowTo(false);
          }}
          soundOn={soundOn}
          onToggleSound={toggleSound}
        />
      )}
    </div>
  );
}
