import { motion } from 'framer-motion';
import { EASE, KineticWords, SceneFrame, SignalLine, TinyText } from '../ScenePrimitives';

export function Scene10() {
  return (
    <SceneFrame kicker="Hour twenty three" index="10 / 12" accent="mint" className="bg-[#101719]">
      <motion.div className="absolute inset-y-0 right-0 w-[56%] bg-[radial-gradient(circle_at_40%_48%,rgba(154,213,176,.13),transparent_38%)]" animate={{ opacity: [.65, 1, .65] }} transition={{ repeat: Infinity, duration: 5 }} />
      <div className="absolute left-[9vw] top-[24vh]">
        <TinyText className="mb-[1.2vw] text-[#9ad5b0]">23:47 / an unexpected flicker</TinyText>
        <KineticWords text="THE HANDSHAKE" className="text-[6.8vw] font-semibold" color="#9ad5b0" />
        <motion.p className="mt-[1.4vw] max-w-[32vw] text-[1.25vw] leading-[1.35] text-[#b2b7be]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9, duration: .7 }}>
          Somewhere, a route is accepted. Then another. Recovery is not a light switch. It is a conversation.
        </motion.p>
      </div>
      <div className="absolute right-[10vw] top-[23vh] w-[31vw]">
        <div className="mono mb-[1vw] flex justify-between text-[.63vw] uppercase tracking-[.16em] text-[#8a8c93]"><span>reconnection protocol</span><span className="text-[#9ad5b0]">negotiating</span></div>
        <div className="relative h-[17vw] overflow-hidden border border-[#9ad5b0]/25 bg-[#0d1117]/70 p-[1.4vw]">
          {[0, 1, 2, 3, 4].map((row) => (
            <motion.div key={row} className="mb-[1.15vw] flex items-center gap-[.7vw]" initial={{ x: '-100%' }} animate={{ x: '0%' }} transition={{ delay: .25 + row * .18, duration: .8, ease: EASE }}>
              <span className="h-[.5vw] w-[.5vw] rounded-full bg-[#9ad5b0]" />
              <SignalLine className="flex-1 bg-[#9ad5b0]" delay={.45 + row * .14} />
              <span className="mono text-[.6vw] text-[#9ad5b0]">{['DNS','BGP','TLS','CDN','SYNC'][row]}</span>
            </motion.div>
          ))}
          <TinyText className="absolute bottom-[1vw] left-[1.4vw]">packets detected / 23:59:41</TinyText>
        </div>
      </div>
      <motion.div className="absolute bottom-[8vh] left-[9vw] flex items-center gap-[1vw]" animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.4 }}>
        <span className="h-[.6vw] w-[.6vw] rounded-full bg-[#9ad5b0]" /><TinyText>something is coming back</TinyText>
      </motion.div>
    </SceneFrame>
  );
}
