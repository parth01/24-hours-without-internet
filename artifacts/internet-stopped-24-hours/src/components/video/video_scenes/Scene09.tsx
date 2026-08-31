import { motion } from 'framer-motion';
import { DataCard, EASE, KineticWords, SceneFrame, TinyText } from '../ScenePrimitives';

export function Scene09() {
  return (
    <SceneFrame kicker="Hour twenty one" index="09 / 12" accent="yellow" className="bg-[#15191e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_68%,rgba(242,193,78,.15),transparent_36%)]" />
      <div className="absolute left-[9vw] top-[21vh]">
        <TinyText className="mb-[1vw] text-[#f2c14e]">the old tools return</TinyText>
        <KineticWords text="OFFLINE" className="text-[10vw] font-semibold text-[#f2c14e]" />
        <div className="mt-[1.5vw] flex items-end gap-[1.2vw]">
          <KineticWords text="IS NOT" className="text-[4.3vw] font-semibold" delay={.35} />
          <KineticWords text="EMPTY." className="text-[4.3vw] font-semibold text-[#ff5b38]" delay={.48} />
        </div>
        <motion.p className="mt-[1.7vw] max-w-[31vw] text-[1.24vw] leading-[1.35] text-[#b2b7be]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8, duration: .7, ease: EASE }}>
          Libraries, radios, paper maps, cash, neighbors. A day without the cloud reveals how much still lives on the ground.
        </motion.p>
      </div>
      <div className="absolute right-[9vw] top-[21vh] w-[28vw]">
        <motion.div className="border border-[#f4f0e8]/20 bg-[#0d1117]/55 p-[1.5vw]" initial={{ opacity: 0, rotate: 3, y: 20 }} animate={{ opacity: 1, rotate: -2, y: 0 }} transition={{ delay: .55, duration: .8, ease: EASE }}>
          <TinyText className="mb-[1.3vw]">improvised network / 21:14</TinyText>
          <div className="space-y-[1vw]">
            {['community radio', 'printed route map', 'shared phone tree', 'cash drawer'].map((item, i) => (
              <div key={item} className="flex items-center justify-between border-b border-[#f4f0e8]/10 pb-[.8vw]">
                <span className="text-[1.05vw] text-[#f4f0e8]">{item}</span><span className="mono text-[.65vw] text-[#9ad5b0]">{['ON AIR', 'MARKED', 'ACTIVE', 'OPEN'][i]}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="mt-[2vw] flex justify-between">
          <DataCard label="distance" value="LOCAL" note="signal radius" color="#9ad5b0" delay={1.1} />
          <DataCard label="speed" value="SLOW" note="not silent" color="#f2c14e" delay={1.25} />
        </div>
      </div>
    </SceneFrame>
  );
}
