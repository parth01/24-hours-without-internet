import { motion } from 'framer-motion';
import { DataCard, EASE, KineticWords, SceneFrame, TinyText } from '../ScenePrimitives';

export function Scene02() {
  return (
    <SceneFrame kicker="Minute one" index="02 / 12" className="bg-[#121820]">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <motion.div className="absolute left-[57vw] top-[14vh] h-[55vw] w-px bg-[#ff5b38]/30" animate={{ scaleY: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 4.2 }} />
      <div className="absolute left-[9vw] top-[23vh] w-[43vw]">
        <TinyText className="mb-[1.2vw] text-[#f2c14e]">08:00:00 / the first reflex</TinyText>
        <KineticWords text="REFRESH." className="text-[9vw] font-semibold" color="#f2c14e" />
        <motion.p className="mt-[1.7vw] max-w-[31vw] text-[1.25vw] leading-[1.35] text-[#b2b7be]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7, ease: EASE }}>
          Billions of thumbs perform the same tiny ritual. A page spins. A message hangs. We try again.
        </motion.p>
      </div>
      <div className="absolute right-[9vw] top-[22vh] w-[28vw]">
        <motion.div className="border border-[#f4f0e8]/20 bg-[#0d1117]/70 p-[1.6vw] backdrop-blur-sm" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: EASE }}>
          <div className="flex items-center justify-between border-b border-[#f4f0e8]/15 pb-[.8vw]">
            <TinyText>connection status</TinyText><span className="mono text-[.7vw] text-[#ff5b38]">ERROR 503</span>
          </div>
          <div className="mt-[2vw] flex items-center justify-center">
            <motion.div className="h-[8vw] w-[8vw] rounded-full border border-[#ff5b38]/50" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}>
              <div className="h-full w-1/2 origin-right border-r border-[#ff5b38]" />
            </motion.div>
            <div className="absolute text-center"><div className="display text-[2.6vw] text-[#ff5b38]">0%</div><TinyText>reachable</TinyText></div>
          </div>
          <div className="mt-[1.4vw] grid grid-cols-2 gap-[.8vw]">
            <DataCard label="DNS" value="—" note="no answer" color="#ff5b38" delay={0.9} />
            <DataCard label="Wi-Fi" value="—" note="local only" color="#f2c14e" delay={1.05} />
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-[10vh] left-[9vw] right-[9vw] h-px bg-[#f4f0e8]/15" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.1, duration: 1.3, ease: EASE }} />
    </SceneFrame>
  );
}
