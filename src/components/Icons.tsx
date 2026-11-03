import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function Heart({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 32 30" {...props} aria-hidden="true">
      <path
        d="M16 27.5C13.4 25.4 2.5 18.2 2.5 10.4 2.5 5.7 5.9 2.8 9.8 2.8c2.6 0 4.9 1.4 6.2 3.6 1.3-2.2 3.6-3.6 6.2-3.6 3.9 0 7.3 2.9 7.3 7.6 0 7.8-10.9 15-13.5 17.1Z"
        fill={filled ? "#ff3d5e" : "#26385c"}
        stroke={filled ? "#b3122f" : "#41557c"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {filled ? (
        <path d="M8.4 7.4c1.2-1.1 3-1.2 4.1-.4-1.2-.1-2.4.3-3.4 1.1-.8.7-1.4 1.7-1.6 2.8-.7-1.4.1-2.8.9-3.5Z" fill="#fff" opacity=".75" />
      ) : (
        <path d="M16 23.4C12.7 20.8 6.2 16 6.2 11.1c0-2.4 1.7-4 3.8-4 1.5 0 2.9 1 3.4 2.4h5.2c.5-1.4 1.9-2.4 3.4-2.4 2.1 0 3.8 1.6 3.8 4 0 4.9-6.5 9.7-9.8 12.3Z" fill="#34486f" />
      )}
    </svg>
  );
}

export function Star({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 32 30" {...props} aria-hidden="true">
      <path
        d="M16 1.6 20.3 10l9.3 1.4-6.7 6.5 1.6 9.2-8.5-4.5-8.5 4.5 1.6-9.2L2.4 11.4 11.7 10 16 1.6Z"
        fill={filled ? "#ffcf3d" : "#2c3f66"}
        stroke={filled ? "#ff9d00" : "#4c638f"}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {filled && <path d="M16 5.6 18.8 11.6 21.6 12.1 17 14.9 18 19.6 16 18.2 14 19.6 15 14.9 10.4 12.1 13.2 11.6 16 5.6Z" fill="#fff2ae" />}
    </svg>
  );
}

export function SpeakerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props} aria-hidden="true">
      <path d="M4.5 12.5h4.2L16.5 6v20L8.7 19.5H4.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M21.5 10.5c2 1.4 3.2 3.4 3.2 5.7 0 2.3-1.2 4.3-3.2 5.7M25.6 6.6c3 2.3 4.8 5.4 4.8 9.1 0 3.7-1.8 6.8-4.8 9.1" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <rect x="5.5" y="4" width="4.6" height="16" rx="2" />
      <rect x="13.9" y="4" width="4.6" height="16" rx="2" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M7.5 4.7c0-1.2 1.3-1.9 2.3-1.3l11 7.3c.9.6.9 2 0 2.6l-11 7.3c-1 .7-2.3 0-2.3-1.2V4.7Z" />
    </svg>
  );
}

export function SoundOnIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" fill="currentColor" stroke="none" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

export function SoundOffIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" fill="currentColor" stroke="none" />
      <path d="m16 9.5 5 5M21 9.5l-5 5" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden="true">
      <rect x="4" y="4" width="16" height="17" rx="3" fill="#eaf9ff" stroke="#0d6aae" strokeWidth="1.6" />
      <rect x="8" y="2" width="8" height="5" rx="2" fill="#23a9e6" stroke="#0d6aae" strokeWidth="1.4" />
      <path d="m8 12 2.4 2.4L16 9" stroke="#1db35d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 17.5h6" stroke="#7fb7d8" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#2fbf71" stroke="#fff" strokeWidth="2.4" />
      <path d="m6.6 12.4 3.5 3.5 7.3-8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#f43f5e" stroke="#fff" strokeWidth="2.4" />
      <path d="m8 8 8 8M16 8l-8 8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props} aria-hidden="true">
      <path d="M18 8h28v13c0 9-6.3 16-14 16s-14-7-14-16V8Z" fill="#ffc93c" stroke="#c17c00" strokeWidth="3" />
      <path d="M18 11H9v6c0 7 4.5 12 12 12M46 11h9v6c0 7-4.5 12-12 12" stroke="#ffc93c" strokeWidth="5" strokeLinecap="round" />
      <path d="M27 36h10v9H27z" fill="#e69c00" />
      <path d="M20 45h24l3 10H17l3-10Z" fill="#ffd968" stroke="#c17c00" strokeWidth="3" strokeLinejoin="round" />
      <path d="m32 14 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L32 14Z" fill="#fff6c9" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function RefreshIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <path d="M20 11a8 8 0 1 0-2.3 6.3M20 4.5V11h-6.5" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <path d="m3.5 10.5 8.5-7 8.5 7V20a1.5 1.5 0 0 1-1.5 1.5h-4.5V14h-5v7.5H5A1.5 1.5 0 0 1 3.5 20v-9.5Z" />
    </svg>
  );
}

export function HelpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9.5 9a2.6 2.6 0 1 1 3.7 2.4c-.8.4-1.2 1-1.2 1.9" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props} aria-hidden="true">
      <path d="m16 1 3.2 8.9L29 13.2l-8 5.7 2.4 9.5-7.4-5.1-7.4 5.1 2.4-9.5-8-5.7 9.8-3.3L16 1Z" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M13.7 1.5 4 14h6.2l-1.4 8.5L19.5 9h-6.3l.5-7.5Z" />
    </svg>
  );
}
