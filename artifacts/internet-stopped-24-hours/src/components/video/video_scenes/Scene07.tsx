import { motion } from 'framer-motion';
import { EASE, KineticWords, SceneFrame, TapeLabel, TinyText } from '../ScenePrimitives';

const posts = [
  ['12:48', 'is anyone else seeing this?'],
  ['13:02', 'radio says it is worldwide'],
  ['13:11', 'meet me at the café. no apps.'],
];

export function Scene07() {
  return (
    <SceneFrame kicker="Hour sixteen" index="07 / 12" accent="orange" className="bg-[#0e141c]">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute right-0 top-0 h-full w-[48%] bg-[radial-gradient(circle_at_50%_46%,rgba(255,91,56,.12),transparent_44%)]" />
      <div className="absolute left-[9vw] top-[24vh] w-[42vw]">
        <TinyText className="mb-[1.2vw] text-[#ff5b38]">news / trust / the room next door</TinyText>
        <KineticWords text="NO FEED." className="text-[9.3vw] font-semibold" color="#ff5b38" />
        <motion.p className="mt-[1.3vw] max-w-[28vw] text-[1.27vw] leading-[1.35] text-[#b2b7be]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85, duration: .7 }}>
          Rumor moves faster than evidence. Then, without an algorithm to carry it, conversation becomes local again.
        </motion.p>
      </div>
      <div className="absolute right-[8vw] top-[17vh] w-[31vw] rotate-[2deg]">
        <TapeLabel className="mb-[.7vw]">field notes / recovered</TapeLabel>
        <div className="border border-[#f4f0e8]/20 bg-[#151a22] p-[1.4vw] shadow-[1vw_1vw_0_rgba(0,0,0,.18)]">
          <div className="mb-[1.2vw] flex items-center justify-between"><TinyText>the local timeline</TinyText><span className="mono text-[.6vw] text-[#9ad5b0]">analog relay</span></div>
          {posts.map(([time, post], index) => (
            <motion.div key={time} className="flex gap-[1vw] border-t border-[#f4f0e8]/10 py-[1vw]" initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .55 + index * .23, duration: .55, ease: EASE }}>
              <span className="mono text-[.65vw] text-[#ff5b38]">{time}</span><span className="text-[1vw] text-[#f4f0e8]">{post}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <TinyText className="absolute bottom-[9vh] left-[9vw]">the signal did not disappear // it changed scale</TinyText>
    </SceneFrame>
  );
}
