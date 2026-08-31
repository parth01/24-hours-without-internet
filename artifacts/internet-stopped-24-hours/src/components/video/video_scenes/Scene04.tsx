import { motion } from 'framer-motion';
import { EASE, KineticWords, SceneFrame, SignalLine, TinyText } from '../ScenePrimitives';

export function Scene04() {
  return (
    <SceneFrame kicker="Hour three" index="04 / 12" className="bg-[#10151d]">
      <div className="absolute inset-0 grid-lines opacity-25" />
      <motion.div className="absolute -right-[3vw] bottom-[-14vw] h-[43vw] w-[43vw] rounded-full border border-[#9ad5b0]/20" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }} />
      <div className="absolute left-[9vw] top-[20vh] w-[38vw]">
        <TinyText className="mb-[1.3vw] text-[#9ad5b0]">supply chain / air traffic / dispatch</TinyText>
        <KineticWords text="THE PAUSE" className="text-[8vw] font-semibold" color="#9ad5b0" />
        <motion.div className="mt-[2vw] flex items-center gap-[1vw]" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.7, ease: EASE }}>
          <SignalLine className="w-[8vw]" delay={1} />
          <span className="text-[1.15vw] text-[#b2b7be]">becomes a queue</span>
        </motion.div>
      </div>
      <div className="absolute right-[10vw] top-[20vh] w-[34vw]">
        <div className="mono mb-[.8vw] flex justify-between text-[.63vw] uppercase tracking-[.16em] text-[#707781]"><span>route monitor</span><span>offline mode</span></div>
        <div className="relative h-[20vw] border border-[#f4f0e8]/15 bg-[#0d1117]/70 p-[1.2vw]">
          <svg viewBox="0 0 480 260" className="h-full w-full">
            <path d="M18 216 C 105 184, 108 60, 195 110 S 292 210, 360 130 S 416 45, 462 20" fill="none" stroke="#f4f0e8" strokeOpacity=".17" strokeWidth="1" />
            <path d="M18 216 C 105 184, 108 60, 195 110 S 292 210, 360 130" fill="none" stroke="#9ad5b0" strokeWidth="3" strokeDasharray="16 12">
              <animate attributeName="stroke-dashoffset" from="0" to="-56" dur="2s" repeatCount="indefinite" />
            </path>
            {[['18','216'],['108','85'],['195','110'],['292','170'],['360','130'],['462','20']].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="5" fill={i < 4 ? '#9ad5b0' : '#ff5b38'} />)}
          </svg>
          <TinyText className="absolute bottom-[1vw] left-[1vw]">route 07 // last sync 07:59:58</TinyText>
        </div>
      </div>
      <motion.p className="absolute bottom-[9vh] left-[9vw] max-w-[45vw] text-[1.3vw] leading-[1.3] text-[#f4f0e8]" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.7, ease: EASE }}>
        The physical world keeps moving. Its coordination layer does not.
      </motion.p>
    </SceneFrame>
  );
}
