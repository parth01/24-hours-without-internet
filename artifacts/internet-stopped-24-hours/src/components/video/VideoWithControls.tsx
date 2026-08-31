import {
  ChevronDown,
  ChevronUp,
  Pause,
  Play,
  Repeat,
} from 'lucide-react';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from 'react';

import VideoTemplate, {
  SCENE_DURATIONS,
} from './VideoTemplate';
import { useSceneControls } from './useSceneControls';

const SCENE_DETAILS: Record<string, { title: string; filePath: string }> = {
  scene01: {
    title: 'The First Minute',
    filePath: 'src/components/video/video_scenes/Scene01.tsx',
  },
  scene02: {
    title: 'The Quiet Failure',
    filePath: 'src/components/video/video_scenes/Scene02.tsx',
  },
  scene03: {
    title: 'The World Goes Offline',
    filePath: 'src/components/video/video_scenes/Scene03.tsx',
  },
  scene04: {
    title: 'Money Stops Moving',
    filePath: 'src/components/video/video_scenes/Scene04.tsx',
  },
  scene05: {
    title: 'Supply Chains Stall',
    filePath: 'src/components/video/video_scenes/Scene05.tsx',
  },
  scene06: {
    title: 'A City Without Signals',
    filePath: 'src/components/video/video_scenes/Scene06.tsx',
  },
  scene07: {
    title: 'The Human Workaround',
    filePath: 'src/components/video/video_scenes/Scene07.tsx',
  },
  scene08: {
    title: 'The Analog Comeback',
    filePath: 'src/components/video/video_scenes/Scene08.tsx',
  },
  scene09: {
    title: 'What Still Works',
    filePath: 'src/components/video/video_scenes/Scene09.tsx',
  },
  scene10: {
    title: 'The Cost of a Day',
    filePath: 'src/components/video/video_scenes/Scene10.tsx',
  },
  scene11: {
    title: 'Recovery Begins',
    filePath: 'src/components/video/video_scenes/Scene11.tsx',
  },
  scene12: {
    title: 'Twenty-Four Hours Later',
    filePath: 'src/components/video/video_scenes/Scene12.tsx',
  },
};

function announceSceneSelection(index: number, sceneKeys: string[]) {
  const key = sceneKeys[index];
  const details = SCENE_DETAILS[key];
  if (!details?.filePath) return;

  window.parent.postMessage(
    {
      type: 'REPLIT_VIDEO_SCENE_SELECTED',
      payload: {
        sceneIndex: index,
        sceneCount: sceneKeys.length,
        sceneTitle: details.title || key,
        filePath: details.filePath,
        lineNumber: 1,
      },
    },
    '*',
  );
}

function formatPlaybackTime(durationMs: number): string {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function PlaybackStatus({
  sceneKeys,
  activeIndex,
  activeDuration,
  activeStartTime,
  totalDuration,
  tick,
  paused,
  onJumpTo,
}: {
  sceneKeys: string[];
  activeIndex: number;
  activeDuration: number;
  activeStartTime: number;
  totalDuration: number;
  tick: number;
  paused: boolean;
  onJumpTo: (index: number) => void;
}) {
  const [elapsed, setElapsed] = useState(0);
  const elapsedBaseRef = useRef(0);

  useEffect(() => {
    setElapsed(0);
    elapsedBaseRef.current = 0;
  }, [tick]);

  useEffect(() => {
    if (paused) return;

    const startedAt = performance.now();
    const timerId = window.setInterval(() => {
      setElapsed(
        elapsedBaseRef.current + (performance.now() - startedAt),
      );
    }, 60);

    return () => {
      window.clearInterval(timerId);
      elapsedBaseRef.current += performance.now() - startedAt;
    };
  }, [paused, tick]);

  const progress =
    activeDuration > 0 ? Math.min(1, elapsed / activeDuration) : 0;
  const totalElapsed = Math.min(
    totalDuration,
    activeStartTime + Math.min(elapsed, activeDuration),
  );

  return (
    <>
      <div className="flex min-w-0 flex-1 items-center gap-[.35vw]">
        {sceneKeys.map((key, index) => {
          const isActive = index === activeIndex;
          const fill = isActive ? progress * 100 : index < activeIndex ? 100 : 0;

          return (
            <button
              key={key}
              onClick={() => onJumpTo(index)}
              className="relative h-[.55vw] min-h-[7px] flex-1 cursor-pointer overflow-hidden rounded-full bg-white/15 transition-all hover:h-[.75vw] hover:bg-white/25"
              aria-label={`Jump to scene ${index + 1}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-[#ff5b38]"
                style={{ width: `${fill}%` }}
              />
            </button>
          );
        })}
      </div>

      <span className="mono shrink-0 text-[.75vw] tabular-nums text-white/60">
        {activeIndex + 1}/{sceneKeys.length}
      </span>
      <span
        className="mono min-w-[8.5vw] shrink-0 text-right text-[.75vw] tabular-nums text-white/70"
        role="timer"
        aria-label={`Playback time ${formatPlaybackTime(totalElapsed)} of ${formatPlaybackTime(totalDuration)}`}
      >
        {formatPlaybackTime(totalElapsed)} / {formatPlaybackTime(totalDuration)}
      </span>
    </>
  );
}

function ControlBar({
  visible,
  collapsed,
  locked,
  paused,
  sceneKeys,
  activeIndex,
  activeDuration,
  activeStartTime,
  totalDuration,
  tick,
  onTogglePause,
  onToggleLock,
  onJumpTo,
  onToggleCollapsed,
}: {
  visible: boolean;
  collapsed: boolean;
  locked: boolean;
  paused: boolean;
  sceneKeys: string[];
  activeIndex: number;
  activeDuration: number;
  activeStartTime: number;
  totalDuration: number;
  tick: number;
  onTogglePause: () => void;
  onToggleLock: () => void;
  onJumpTo: (index: number) => void;
  onToggleCollapsed: () => void;
}) {
  return (
    <div
      className={`flex items-center gap-[.7vw] border-t border-white/10 bg-[#0d1117]/85 px-[1.2vw] py-[.75vw] backdrop-blur-md transition-all duration-200 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-full opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <button
        onClick={onTogglePause}
        className="flex h-[2.5vw] w-[2.5vw] shrink-0 items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-white"
        title={paused ? 'Play' : 'Pause'}
        aria-label={paused ? 'Play' : 'Pause'}
      >
        {paused ? <Play className="h-[1.1vw] w-[1.1vw]" /> : <Pause className="h-[1.1vw] w-[1.1vw]" />}
      </button>

      <button
        onClick={onToggleLock}
        className={`flex h-[2.5vw] w-[2.5vw] shrink-0 items-center justify-center rounded-full transition-colors ${
          locked
            ? 'bg-[#ff5b38]/20 text-[#ff8b72]'
            : 'text-white/65 hover:bg-white/10 hover:text-white'
        }`}
        title={locked ? 'Loop current scene: on' : 'Loop current scene: off'}
        aria-label={locked ? 'Loop current scene: on' : 'Loop current scene: off'}
        aria-pressed={locked}
      >
        <Repeat className="h-[1.1vw] w-[1.1vw]" />
      </button>

      <div className="h-[1.5vw] w-px shrink-0 bg-white/15" aria-hidden="true" />

      <PlaybackStatus
        sceneKeys={sceneKeys}
        activeIndex={activeIndex}
        activeDuration={activeDuration}
        activeStartTime={activeStartTime}
        totalDuration={totalDuration}
        tick={tick}
        paused={paused}
        onJumpTo={onJumpTo}
      />

      <button
        onClick={onToggleCollapsed}
        className="flex h-[2.5vw] w-[2.5vw] shrink-0 items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-white"
        title={collapsed ? 'Show controls' : 'Hide controls'}
        aria-label={collapsed ? 'Show controls' : 'Hide controls'}
        aria-expanded={!collapsed}
      >
        {collapsed ? <ChevronUp className="h-[1.2vw] w-[1.2vw]" /> : <ChevronDown className="h-[1.2vw] w-[1.2vw]" />}
      </button>
    </div>
  );
}

export default function VideoWithControls() {
  const isIframed =
    typeof window !== 'undefined' && window.self !== window.top;

  const {
    sceneKeys,
    activeIndex,
    locked,
    paused,
    mountKey,
    tick,
    durations,
    activeDuration,
    activeStartTime,
    totalDuration,
    onSceneChange,
    jumpTo,
    toggleLock,
    togglePause,
  } = useSceneControls(SCENE_DURATIONS);
  const [collapsed, setCollapsed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [tapPinned, setTapPinned] = useState(false);
  const sensorRef = useRef<HTMLDivElement | null>(null);

  const handleJumpTo = useCallback(
    (index: number) => {
      jumpTo(index);
      announceSceneSelection(index, sceneKeys);
    },
    [jumpTo, sceneKeys],
  );

  useEffect(() => {
    if (!paused) return;

    const animations = document
      .getAnimations()
      .filter((animation) => animation.playState === 'running');
    animations.forEach((animation) => animation.pause());

    return () => animations.forEach((animation) => animation.play());
  }, [paused]);

  useEffect(() => {
    if (!(collapsed && tapPinned)) return;

    const handlePointerDown = (event: globalThis.PointerEvent) => {
      if (event.pointerType === 'mouse') return;
      const sensor = sensorRef.current;
      if (sensor && !sensor.contains(event.target as Node)) {
        setTapPinned(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [collapsed, tapPinned]);

  const handlePointerEnter = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') setHovering(true);
  }, []);

  const handlePointerLeave = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') setHovering(false);
  }, []);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType !== 'mouse' && collapsed) setTapPinned(true);
    },
    [collapsed],
  );

  const handleToggleCollapsed = useCallback(() => {
    setCollapsed((value) => {
      if (!value) {
        setHovering(false);
        setTapPinned(false);
      }
      return !value;
    });
  }, []);

  if (!isIframed) return <VideoTemplate />;

  const barVisible = !collapsed || hovering || tapPinned;

  return (
    <div className="relative h-screen w-full">
      <VideoTemplate
        key={mountKey}
        durations={durations}
        loop
        paused={paused}
        onSceneChange={onSceneChange}
      />
      <div
        ref={sensorRef}
        className="absolute bottom-0 left-0 right-0 z-50 flex flex-col justify-end"
        style={{ height: '25%' }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
      >
        <div className="w-full flex-1" aria-hidden="true" />
        <ControlBar
          visible={barVisible}
          collapsed={collapsed}
          locked={locked}
          paused={paused}
          sceneKeys={sceneKeys}
          activeIndex={activeIndex}
          activeDuration={activeDuration}
          activeStartTime={activeStartTime}
          totalDuration={totalDuration}
          tick={tick}
          onTogglePause={togglePause}
          onToggleLock={toggleLock}
          onJumpTo={handleJumpTo}
          onToggleCollapsed={handleToggleCollapsed}
        />
      </div>
    </div>
  );
}