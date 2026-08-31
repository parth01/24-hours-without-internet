import { VideoPausedContext, useVideoPlayer } from '@/lib/video';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, type ComponentType } from 'react';

import { Scene01 } from './video_scenes/Scene01';
import { Scene02 } from './video_scenes/Scene02';
import { Scene03 } from './video_scenes/Scene03';
import { Scene04 } from './video_scenes/Scene04';
import { Scene05 } from './video_scenes/Scene05';
import { Scene06 } from './video_scenes/Scene06';
import { Scene07 } from './video_scenes/Scene07';
import { Scene08 } from './video_scenes/Scene08';
import { Scene09 } from './video_scenes/Scene09';
import { Scene10 } from './video_scenes/Scene10';
import { Scene11 } from './video_scenes/Scene11';
import { Scene12 } from './video_scenes/Scene12';

export const SCENE_DURATIONS = {
  scene01: 16_000,
  scene02: 22_000,
  scene03: 26_000,
  scene04: 24_000,
  scene05: 26_000,
  scene06: 24_000,
  scene07: 28_000,
  scene08: 24_000,
  scene09: 26_000,
  scene10: 22_000,
  scene11: 28_000,
  scene12: 34_000,
};

const SCENE_COMPONENTS: Record<string, ComponentType> = {
  scene01: Scene01,
  scene02: Scene02,
  scene03: Scene03,
  scene04: Scene04,
  scene05: Scene05,
  scene06: Scene06,
  scene07: Scene07,
  scene08: Scene08,
  scene09: Scene09,
  scene10: Scene10,
  scene11: Scene11,
  scene12: Scene12,
};

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  paused = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  paused?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({
    durations,
    loop,
    paused,
  });
  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const ActiveScene = SCENE_COMPONENTS[baseSceneKey] ?? Scene01;

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  return (
    <VideoPausedContext.Provider value={paused}>
      <div
        className="video-grain relative h-screen w-full overflow-hidden bg-[#0d1117]"
      >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 12% 18%, rgba(255,91,56,.14), transparent 28%), radial-gradient(circle at 88% 84%, rgba(242,193,78,.08), transparent 27%), #0d1117',
            'radial-gradient(circle at 78% 24%, rgba(255,91,56,.11), transparent 28%), radial-gradient(circle at 22% 76%, rgba(154,213,176,.08), transparent 30%), #0d1117',
            'radial-gradient(circle at 35% 82%, rgba(242,193,78,.1), transparent 27%), radial-gradient(circle at 76% 16%, rgba(255,91,56,.1), transparent 29%), #0d1117',
          ],
        }}
        transition={{ repeat: Infinity, duration: 26, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] grid-lines opacity-10" />
      <motion.div
        className="pointer-events-none absolute -left-[15vw] top-[16vh] z-[2] h-[35vw] w-[35vw] rounded-full border border-[#f4f0e8]/10"
        animate={{
          x: sceneIndex % 3 === 0 ? '8vw' : sceneIndex % 3 === 1 ? '24vw' : '42vw',
          y: sceneIndex % 2 === 0 ? '2vh' : '14vh',
          scale: sceneIndex === 11 ? 1.4 : 1,
        }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute right-[7vw] top-[10vh] z-[2] h-[.45vw] w-[.45vw] rounded-full bg-[#ff5b38]"
        animate={{ y: ['0vh', '64vh', '0vh'], opacity: [.3, 1, .3] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute bottom-[4vh] left-[5vw] right-[5vw] z-40 flex items-end justify-between">
        <div className="flex items-center gap-[.8vw]">
          <span className="h-[.45vw] w-[.45vw] rounded-full bg-[#ff5b38]" />
          <span className="mono text-[.6vw] uppercase tracking-[.18em] text-[#707781]">simulation / live render</span>
        </div>
        <div className="flex items-center gap-[1vw]">
          <span className="mono text-[.6vw] uppercase tracking-[.18em] text-[#707781]">{currentSceneKey.replace('scene', 'beat ')}</span>
          <div className="flex gap-[.28vw]">
            {Object.keys(SCENE_DURATIONS).map((key, index) => (
              <motion.span
                key={key}
                className="h-[.22vw] w-[1.05vw]"
                animate={{
                  backgroundColor:
                    index <= sceneIndex
                      ? '#ff5b38'
                      : 'rgba(244,240,232,.2)',
                }}
                transition={{ duration: 0.35 }}
              />
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence mode="sync" initial={false}>
        <ActiveScene key={currentSceneKey} />
      </AnimatePresence>
      </div>
    </VideoPausedContext.Provider>
  );
}
