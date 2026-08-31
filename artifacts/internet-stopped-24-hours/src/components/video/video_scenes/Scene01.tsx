import { motion } from 'framer-motion';
import { CornerMark, EASE, KineticWords, SceneFrame, SignalLine, TinyText } from '../ScenePrimitives';

export function Scene01() {
  return (
    <SceneFrame kicker="A thought experiment" index="01 / 12" className="bg-[#0d1117]">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <motion.div
        className="absolute -right-[12vw] top-[15vh] h-[44vw] w-[44vw] rounded-full border border-[#ff5b38]/30"
        animate={{ rotate: 360, scale: [1, 1.03, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 38, ease: 'linear' }, scale: { repeat: Infinity, duration: 6 } }}
      />
      <motion.div className="absolute right-[9vw] top-[37vh] h-[18vw] w-[18vw] rounded-full bg-[#ff5b38]/10 blur-[1px]" animate={{ scale: [1, 1.14, 1] }} transition={{ repeat: Infinity, duration: 4.5 }} />
      <CornerMark className="bottom-[9vh] right-[6vw] rotate-180" />
      <div className="absolute left-[9vw] top-[25vh] max-w-[65vw]">
        <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: EASE }}>
          <TinyText className="mb-[1.4vw] text-[#ff5b38]">Thursday / 08:00 UTC / all systems normal</TinyText>
        </motion.div>
        <KineticWords text="NO SIGNAL" className="text-[11vw] font-semibold" delay={0.25} />
        <SignalLine className="mt-[2vw] w-[25vw]" delay={0.8} />
        <motion.p
          className="mt-[1.2vw] max-w-[38vw] text-[1.35vw] leading-[1.25] text-[#b2b7be]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7, ease: EASE }}
        >
          At 08:00, every connection on Earth goes quiet.
          <span className="text-[#f4f0e8]"> Not slow. Not broken. Gone.</span>
        </motion.p>
      </div>
      <motion.div className="absolute bottom-[9vh] left-[9vw] flex items-center gap-[1vw]" animate={{ opacity: [0.35, 0.85, 0.35] }} transition={{ repeat: Infinity, duration: 3 }}>
        <span className="h-[.45vw] w-[.45vw] rounded-full bg-[#ff5b38]" />
        <TinyText>Signal lost // day 01</TinyText>
      </motion.div>
    </SceneFrame>
  );
}
