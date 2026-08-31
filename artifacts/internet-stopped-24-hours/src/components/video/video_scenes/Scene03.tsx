import { motion } from 'framer-motion';
import { DataCard, EASE, KineticWords, SceneFrame, TapeLabel, TinyText } from '../ScenePrimitives';

const base = `${import.meta.env.BASE_URL}`;

export function Scene03() {
  return (
    <SceneFrame kicker="Hour one" index="03 / 12" className="bg-[#151a22]">
      <motion.img src={`${base}atlas-network.png`} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" animate={{ scale: [1.04, 1, 1.04] }} transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0d1117_8%,transparent_65%,#0d1117_100%)]" />
      <div className="absolute left-[9vw] top-[23vh] max-w-[52vw]">
        <TapeLabel>the invisible checkout line</TapeLabel>
        <KineticWords text="MONEY STOPS" className="mt-[1.4vw] text-[7.3vw] font-semibold" delay={0.25} />
        <KineticWords text="MOVING" className="text-[7.3vw] font-semibold text-[#ff5b38]" delay={0.42} />
        <motion.p className="mt-[1.5vw] max-w-[35vw] text-[1.25vw] leading-[1.3] text-[#b2b7be]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 0.7 }}>
          Card terminals can still light up. The authorization that makes a purchase real cannot.
        </motion.p>
      </div>
      <div className="absolute bottom-[10vh] right-[9vw] flex gap-[3vw]">
        <DataCard label="global payments" value="$10.4T" note="processed / day" color="#f2c14e" delay={0.8} />
        <DataCard label="without a network" value="$0" note="authorization layer" color="#ff5b38" delay={1} />
      </div>
      <motion.div className="absolute right-[11vw] top-[18vh] h-[11vw] w-[11vw] rounded-full border border-[#f2c14e]/30" animate={{ scale: [1, 1.18, 1], rotate: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
      <TinyText className="absolute bottom-[5vh] left-[9vw]">cash registers remember // banks cannot confirm</TinyText>
    </SceneFrame>
  );
}
