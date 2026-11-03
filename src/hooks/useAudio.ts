import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type ToneOptions = {
  freq: number;
  endFreq?: number;
  duration?: number;
  delay?: number;
  volume?: number;
  type?: OscillatorType;
};

export function useAudio() {
  const [soundOn, setSoundOn] = useState(true);
  const soundRef = useRef(true);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    soundRef.current = soundOn;
    if (!soundOn && typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, [soundOn]);

  const getCtx = useCallback((): AudioContext | null => {
    if (typeof window === "undefined") return null;
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    if (!ctxRef.current) ctxRef.current = new Ctor();
    if (ctxRef.current.state === "suspended") void ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  useEffect(() => {
    const unlock = () => {
      getCtx();
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    return () => window.removeEventListener("pointerdown", unlock);
  }, [getCtx]);

  const tone = useCallback(
    ({ freq, endFreq, duration = 0.16, delay = 0, volume = 0.14, type = "sine" }: ToneOptions) => {
      if (!soundRef.current) return;
      const ctx = getCtx();
      if (!ctx) return;
      const start = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);
      if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(30, endFreq), start + duration);
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(volume, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration + 0.05);
    },
    [getCtx]
  );

  const noiseBurst = useCallback(
    (duration = 0.25, volume = 0.1) => {
      if (!soundRef.current) return;
      const ctx = getCtx();
      if (!ctx) return;
      const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i += 1) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 900;
      const gain = ctx.createGain();
      gain.gain.value = volume;
      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      source.start();
    },
    [getCtx]
  );

  const speak = useCallback((text: string) => {
    if (!soundRef.current || typeof window === "undefined" || !window.speechSynthesis) return;
    try {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "id-ID";
      utterance.rate = 0.82;
      utterance.pitch = 1.12;
      utterance.volume = 1;
      const voices = synth.getVoices();
      const indo = voices.find((v) => v.lang?.toLowerCase().startsWith("id"));
      if (indo) utterance.voice = indo;
      synth.speak(utterance);
    } catch {
      // Speech is a bonus, never break the game if it is unavailable.
    }
  }, []);

  const sfx = useMemo(
    () => ({
      click: () => {
        tone({ freq: 620, endFreq: 900, duration: 0.08, volume: 0.08, type: "triangle" });
      },
      laser: () => {
        tone({ freq: 1500, endFreq: 140, duration: 0.32, volume: 0.15, type: "sawtooth" });
        tone({ freq: 900, endFreq: 200, duration: 0.24, volume: 0.09, type: "square" });
        noiseBurst(0.2, 0.08);
      },
      enemyLaser: () => {
        tone({ freq: 620, endFreq: 90, duration: 0.4, volume: 0.16, type: "sawtooth" });
        noiseBurst(0.3, 0.1);
      },
      correct: () => {
        tone({ freq: 784, duration: 0.14, volume: 0.12, type: "triangle" });
        tone({ freq: 1046, duration: 0.18, delay: 0.09, volume: 0.12, type: "triangle" });
      },
      wrong: () => {
        tone({ freq: 240, endFreq: 120, duration: 0.32, volume: 0.13, type: "square" });
      },
      levelUp: () => {
        [523, 659, 784, 1046].forEach((freq, i) =>
          tone({ freq, duration: 0.22, delay: i * 0.11, volume: 0.12, type: "triangle" })
        );
      },
      win: () => {
        [523, 659, 784, 1046, 1318].forEach((freq, i) =>
          tone({ freq, duration: 0.3, delay: i * 0.13, volume: 0.13, type: "triangle" })
        );
      },
      powerDown: () => {
        tone({ freq: 520, endFreq: 60, duration: 0.9, volume: 0.16, type: "sawtooth" });
        tone({ freq: 300, endFreq: 45, duration: 1.1, delay: 0.12, volume: 0.12, type: "square" });
        noiseBurst(0.7, 0.09);
      },
      smoke: () => {
        noiseBurst(0.5, 0.06);
      },
      gameOver: () => {
        [392, 330, 262, 196].forEach((freq, i) =>
          tone({ freq, duration: 0.3, delay: i * 0.15, volume: 0.12, type: "sawtooth" })
        );
      },
    }),
    [noiseBurst, tone]
  );

  const toggleSound = useCallback(() => {
    setSoundOn((prev) => {
      const next = !prev;
      soundRef.current = next;
      if (next) {
        const ctx = getCtx();
        if (ctx) {
          tone({ freq: 660, endFreq: 990, duration: 0.16, volume: 0.1, type: "triangle" });
        }
      } else if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return next;
    });
  }, [getCtx, tone]);

  return { soundOn, toggleSound, speak, sfx };
}

export type GameAudio = ReturnType<typeof useAudio>;
