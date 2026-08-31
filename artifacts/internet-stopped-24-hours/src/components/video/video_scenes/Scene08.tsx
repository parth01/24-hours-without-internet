import { motion } from 'framer-motion';
import { EASE, KineticWords, RadialChart, SceneFrame, TinyText } from '../ScenePrimitives';

export function Scene08() {
  const nodes = [
    { x: '20%', y: '24%', label: 'undersea cables' },
    { x: '72%', y: '18%', label: 'data centers' },
    { x: '78%', y: '67%', label: 'last mile' },
    { x: '22%', y: '74%', label: 'devices' },
  ];
  return (
    <SceneFrame kicker="The anatomy" index="08 / 12" accent="mint" className="bg-[#10181a]">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute left-[9vw] top-[19vh] w-[30vw]">
        <TinyText className="mb-[1vw] text-[#9ad5b0]">not a switch / a choreography</TinyText>
        <KineticWords text="ONE WEB." className="text-[7.2vw] font-semibold" color="#9ad5b0" />
        <KineticWords text="MANY FAILURES." className="text-[5.1vw] font-semibold" delay={.38} />
        <motion.p className="mt-[1.4vw] max-w-[26vw] text-[1.2vw] leading-[1.35] text-[#b2b7be]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: .7 }}>
          The internet is a stack of agreements: physical cables, names, routes, power, and trust.
        </motion.p>
      </div>
      <div className="absolute right-[9vw] top-[17vh] h-[34vw] w-[38vw]">
        <motion.div className="absolute left-1/2 top-1/2 h-[20vw] w-[20vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9ad5b0]/25" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 26, ease: 'linear' }} />
        <RadialChart color="#9ad5b0" size="18vw" />
        {nodes.map((node, index) => (
          <motion.div key={node.label} className="absolute flex items-center gap-[.5vw]" style={{ left: node.x, top: node.y }} initial={{ opacity: 0, scale: .6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .3 + index * .18, duration: .6, ease: EASE }}>
            <span className="h-[.6vw] w-[.6vw] rounded-full border border-[#9ad5b0] bg-[#9ad5b0]/30" />
            <span className="mono whitespace-nowrap text-[.57vw] uppercase tracking-[.14em] text-[#b2b7be]">{node.label}</span>
          </motion.div>
        ))}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 440">
          <path d="M112 118 L350 90 L390 310 L110 335 Z" fill="none" stroke="#9ad5b0" strokeOpacity=".25" strokeDasharray="7 10">
            <animate attributeName="stroke-dashoffset" from="0" to="-68" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      <div className="absolute bottom-[9vh] left-[9vw] right-[9vw] flex items-center justify-between border-t border-[#f4f0e8]/15 pt-[1vw]">
        <TinyText>resilience is distributed // failure is not</TinyText><span className="mono text-[.62vw] text-[#9ad5b0]">LAYER 04 / ROUTING</span>
      </div>
    </SceneFrame>
  );
}
