import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const EASE = [0.16, 1, 0.3, 1] as const;

export function SceneFrame({
  children,
  kicker,
  index,
  accent = 'orange',
  className = '',
}: {
  children: ReactNode;
  kicker: string;
  index: string;
  accent?: 'orange' | 'yellow' | 'mint';
  className?: string;
}) {
  const accentColor =
    accent === 'yellow' ? '#f2c14e' : accent === 'mint' ? '#9ad5b0' : '#ff5b38';
  return (
    <motion.section
      className={`absolute inset-0 overflow-hidden ${className}`}
      initial={{ opacity: 0, clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 10%)' }}
      animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)' }}
      exit={{ opacity: 0, clipPath: 'polygon(0 0, 92% 0, 100% 12%, 100% 100%, 0 100%)' }}
      transition={{ duration: 0.82, ease: EASE }}
    >
      <div className="absolute left-[5vw] top-[5vh] z-30 flex items-center gap-[1vw]">
        <span className="mono text-[.7vw] uppercase tracking-[.28em]" style={{ color: accentColor }}>
          {kicker}
        </span>
        <span className="h-px w-[5vw] bg-current opacity-30" />
        <span className="mono text-[.65vw] tracking-[.22em] text-[#8a8c93]">{index}</span>
      </div>
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.section>
  );
}

export function KineticWords({
  text,
  className = '',
  delay = 0.15,
  color = '#f4f0e8',
}: {
  text: string;
  className?: string;
  delay?: number;
  color?: string;
}) {
  return (
    <h1 className={`display flex flex-wrap gap-x-[.22em] leading-[.86] tracking-[-.055em] ${className}`} style={{ color }}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="inline-flex overflow-hidden">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              initial={{ y: '115%', opacity: 0, rotate: charIndex % 2 ? 6 : -6 }}
              animate={{ y: '0%', opacity: 1, rotate: 0 }}
              transition={{ delay: delay + (index * word.length + charIndex) * 0.035, duration: 0.55, ease: EASE }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export function TinyText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`mono text-[.72vw] uppercase leading-[1.45] tracking-[.16em] text-[#8a8c93] ${className}`}>{children}</p>;
}

export function SignalLine({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`h-px origin-left bg-[#ff5b38] ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: [0, 0.95, 0.35] }}
      transition={{ delay, duration: 1.1, ease: EASE }}
    />
  );
}

export function CornerMark({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute h-[3.5vw] w-[3.5vw] border-l border-t border-[#f4f0e8]/20 ${className}`}>
      <span className="absolute -left-px -top-px h-[.4vw] w-[.4vw] bg-[#ff5b38]" />
    </div>
  );
}

export function DataCard({
  label,
  value,
  note,
  color = '#f4f0e8',
  delay = 0,
}: {
  label: string;
  value: string;
  note: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="border-l border-[#f4f0e8]/20 pl-[1vw]"
      initial={{ opacity: 0, x: 22 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.65, ease: EASE }}
    >
      <div className="mono text-[.65vw] uppercase tracking-[.18em] text-[#8a8c93]">{label}</div>
      <div className="display mt-[.35vw] text-[2.6vw] font-semibold tracking-[-.06em]" style={{ color }}>
        {value}
      </div>
      <div className="mono text-[.58vw] uppercase tracking-[.12em] text-[#707781]">{note}</div>
    </motion.div>
  );
}

export function RadialChart({ color = '#ff5b38', size = '22vw' }: { color?: string; size?: string }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.div
        className="absolute inset-0 rounded-full border border-[#f4f0e8]/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[13%] rounded-full border border-dashed border-[#f4f0e8]/20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      />
      <div className="absolute left-1/2 top-1/2 h-[76%] w-px origin-bottom bg-[#f4f0e8]/15" style={{ transform: 'translate(-50%, -100%) rotate(42deg)' }} />
      <div className="absolute left-1/2 top-1/2 h-[.5vw] w-[.5vw] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: color, boxShadow: `0 0 0 1vw ${color}16` }} />
      <span className="mono absolute left-[4%] top-[46%] text-[.56vw] tracking-[.15em] text-[#707781]">NODE / 07</span>
      <span className="mono absolute bottom-[7%] right-[12%] text-[.56vw] tracking-[.15em] text-[#707781]">LAT 37.77</span>
    </div>
  );
}

export function TapeLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`inline-flex rotate-[-2deg] bg-[#f2c14e] px-[.6vw] py-[.3vw] text-[.72vw] font-semibold uppercase tracking-[.12em] text-[#0d1117] ${className}`}>
      {children}
    </div>
  );
}
