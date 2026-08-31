import { motion } from 'framer-motion';
import { DataCard, EASE, KineticWords, SceneFrame, TinyText } from '../ScenePrimitives';

const base = `${import.meta.env.BASE_URL}`;

export function Scene05() {
  return (
    <SceneFrame kicker="Hour six" index="05 / 12" className="bg-[#12171e]">
      <motion.img src={`${base}empty-server-hall.png`} alt="" className="absolute right-0 top-0 h-full w-[59%] object-cover opacity-40" animate={{ x: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 13, ease: 'easeInOut' }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#12171e_22%,rgba(18,23,30,.87)_49%,rgba(18,23,30,.2)_100%)]" />
      <div className="absolute left-[9vw] top-[23vh]">
        <TinyText className="mb-[1.2vw] text-[#ff5b38]">hospitals / emergency response / care</TinyText>
        <KineticWords text="THE COST" className="text-[7.6vw] font-semibold" />
        <KineticWords text="OF WAITING" className="text-[7.6vw] font-semibold text-[#ff5b38]" delay={0.35} />
        <motion.p className="mt-[1.5vw] max-w-[30vw] text-[1.2vw] leading-[1.3] text-[#b2b7be]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.7 }}>
          A hospital network is more than screens. It is schedules, records, specialists, and the next decision.
        </motion.p>
      </div>
      <div className="absolute bottom-[8vh] right-[9vw] flex gap-[2.7vw]">
        <DataCard label="records" value="LOCAL" note="cached / incomplete" color="#f2c14e" delay={0.7} />
        <DataCard label="coordination" value="MANUAL" note="phone trees return" color="#9ad5b0" delay={0.9} />
      </div>
      <motion.div className="absolute left-[9vw] bottom-[9vh] h-[.35vw] w-[22vw] bg-[#ff5b38]" animate={{ scaleX: [0.35, 1, 0.35] }} transition={{ repeat: Infinity, duration: 3.2 }} style={{ transformOrigin: 'left' }} />
    </SceneFrame>
  );
}
