import { motion } from 'framer-motion';
import { DataCard, EASE, KineticWords, SceneFrame, TinyText } from '../ScenePrimitives';

const base = `${import.meta.env.BASE_URL}`;

export function Scene11() {
  return (
    <SceneFrame kicker="Hour twenty four" index="11 / 12" accent="orange" className="bg-[#121820]">
      <motion.img src={`${base}city-window-grid.png`} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" animate={{ scale: [1.04, 1, 1.04] }} transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#121820_8%,rgba(18,24,32,.76)_55%,rgba(18,24,32,.2))]" />
      <div className="absolute left-[9vw] top-[24vh]">
        <TinyText className="mb-[1.2vw] text-[#ff5b38]">24:00 / the lights return</TinyText>
        <KineticWords text="BACK ONLINE." className="text-[7.6vw] font-semibold" color="#ff5b38" />
        <motion.p className="mt-[1.4vw] max-w-[32vw] text-[1.25vw] leading-[1.35] text-[#b2b7be]" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .85, duration: .7, ease: EASE }}>
          The first notification feels like a tiny miracle. The next thousand feel like weather.
        </motion.p>
      </div>
      <div className="absolute right-[10vw] top-[22vh] w-[27vw]">
        <div className="border border-[#f4f0e8]/20 bg-[#0d1117]/75 p-[1.6vw] backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-[#f4f0e8]/15 pb-[.9vw]"><TinyText>aftershock / inbox</TinyText><span className="mono text-[.6vw] text-[#f2c14e]">SYNCING</span></div>
          <div className="my-[1.8vw] flex items-center gap-[1.2vw]"><motion.div className="h-[4.6vw] w-[4.6vw] rounded-full border-[.35vw] border-[#ff5b38] border-r-transparent" animate={{ rotate: [0, 270, 360] }} transition={{ repeat: Infinity, duration: 2.7, ease: 'easeInOut' }} /><div><div className="display text-[2.5vw] font-semibold">47,291</div><TinyText>queued messages</TinyText></div></div>
          <div className="grid grid-cols-2 gap-[1.2vw]"><DataCard label="devices" value="63%" note="reconnected" color="#9ad5b0" delay={.8} /><DataCard label="latency" value="+88ms" note="and climbing" color="#f2c14e" delay={1} /></div>
        </div>
      </div>
    </SceneFrame>
  );
}
