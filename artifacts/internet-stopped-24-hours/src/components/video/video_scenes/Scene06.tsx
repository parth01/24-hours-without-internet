import { motion } from 'framer-motion';
import { EASE, KineticWords, SceneFrame, TinyText } from '../ScenePrimitives';

export function Scene06() {
  const bars = [82, 56, 74, 38, 62, 27, 44, 18];
  return (
    <SceneFrame kicker="Hour twelve" index="06 / 12" accent="yellow" className="bg-[#17171b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(242,193,78,.14),transparent_33%)]" />
      <div className="absolute left-[9vw] top-[24vh] w-[43vw]">
        <TinyText className="mb-[1.2vw] text-[#f2c14e]">work / school / attention</TinyText>
        <KineticWords text="WE ADAPT" className="text-[8.8vw] font-semibold text-[#f2c14e]" />
        <motion.p className="mt-[1.4vw] max-w-[30vw] text-[1.3vw] leading-[1.3] text-[#b2b7be]" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7, ease: EASE }}>
          The first panic burns off. Whiteboards fill. Doors open. People start asking the person beside them.
        </motion.p>
      </div>
      <div className="absolute right-[10vw] top-[24vh] w-[27vw]">
        <div className="mono mb-[1vw] flex justify-between text-[.65vw] uppercase tracking-[.18em] text-[#8a8c93]"><span>workarounds / 12:00</span><span>live</span></div>
        <div className="flex h-[24vw] items-end gap-[1.1vw] border-b border-l border-[#f4f0e8]/25 px-[1.2vw] pb-[1vw]">
          {bars.map((height, index) => (
            <motion.div key={height} className="relative flex-1 bg-[#f2c14e]" initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: 0.2 + index * 0.11, duration: 0.6, ease: EASE }}>
              <span className="mono absolute -top-[1.1vw] left-1/2 -translate-x-1/2 text-[.52vw] text-[#8a8c93]">{height}</span>
            </motion.div>
          ))}
        </div>
        <TinyText className="mt-[.8vw]">offline solutions / relative signal</TinyText>
      </div>
      <motion.div className="absolute bottom-[8vh] left-[9vw] right-[9vw] flex items-center justify-between border-t border-[#f4f0e8]/15 pt-[1vw]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <TinyText>no notification is a kind of notification</TinyText>
        <span className="mono text-[.65vw] text-[#f2c14e]">12:00:00</span>
      </motion.div>
    </SceneFrame>
  );
}
