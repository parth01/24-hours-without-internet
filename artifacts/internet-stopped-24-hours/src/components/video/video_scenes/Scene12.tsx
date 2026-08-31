import { motion } from 'framer-motion';
import { CornerMark, EASE, KineticWords, SceneFrame, TinyText } from '../ScenePrimitives';

export function Scene12() {
  return (
    <SceneFrame kicker="The question after" index="12 / 12" accent="yellow" className="bg-[#17181d]">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <motion.div className="absolute left-[52vw] top-[4vh] h-[56vw] w-[56vw] rounded-full border border-[#f2c14e]/25" animate={{ scale: [1, 1.05, 1], rotate: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }} />
      <motion.div className="absolute left-[58vw] top-[16vh] h-[35vw] w-[35vw] rounded-full bg-[#f2c14e]/10 blur-[1px]" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 6 }} />
      <CornerMark className="bottom-[9vh] right-[7vw] rotate-180" />
      <div className="absolute left-[9vw] top-[23vh] max-w-[68vw]">
        <TinyText className="mb-[1.4vw] text-[#f2c14e]">a day later / nothing is the same</TinyText>
        <KineticWords text="WE WERE" className="text-[8.2vw] font-semibold" />
        <KineticWords text="NEVER OFFLINE." className="text-[8.2vw] font-semibold text-[#f2c14e]" delay={.3} />
        <motion.p className="mt-[1.7vw] max-w-[39vw] text-[1.35vw] leading-[1.35] text-[#b2b7be]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: .75, ease: EASE }}>
          We were connected to a system we had stopped noticing.
        </motion.p>
      </div>
      <motion.div className="absolute bottom-[9vh] left-[9vw] flex items-center gap-[1vw]" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, .45, 1] }} transition={{ delay: 1.4, duration: 2.2 }}>
        <span className="mono text-[.68vw] uppercase tracking-[.2em] text-[#f2c14e]">internet / 24 hours / end of transmission</span>
      </motion.div>
      <div className="absolute right-[9vw] bottom-[9vh] text-right"><TinyText>an imagined timeline</TinyText><div className="mono mt-[.3vw] text-[.7vw] text-[#8a8c93]">05:00 — 05:00 / LOOP</div></div>
    </SceneFrame>
  );
}
