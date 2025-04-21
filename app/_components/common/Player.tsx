"use client"

import { usePlayer } from '@/app/_hooks/usePlayer';
import { secondsToMinutes } from '@/app/_lib/second-to-minutes';
import { cx } from 'class-variance-authority';
import clsx from 'clsx';
import { Maximize2, Minimize2, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import dynamic from 'next/dynamic'
import { ReactPlayerProps } from 'react-player'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface PlayerProps extends ReactPlayerProps {
    aspect?: "square" | "video"
}

export default function Player({ aspect = "video", playing: initialPlaying, muted: initialMuted, ...props }: PlayerProps) {
    const { containerRef, playerRef, playing, muted, played, duration, isFullScreen, handleProgress, handleDuration, handlePlayPause, handleMuted, handleSeekChange, handleSeekMouseDown, handleSeekMouseUp, handleFullscreen } = usePlayer({ playing: initialPlaying, muted: initialMuted });

    const buttonStyle = cx("w-11 h-11 flex items-center justify-center rounded-full bg-[#67675780] outline-[0.8px] outline-[#FFFFFF] -outline-offset-[3px] hover:outline-[#06474C] text-[#FFFFFF] duration-200 transition-all hover:bg-[#FFFFFF] hover:text-[#06474C] cursor-pointer")

    return (
        <div
            ref={containerRef}
            className={clsx(['relative w-full overflow-hidden rounded-4xl', aspect === "video" ? 'aspect-video' : 'aspect-square'])}
        >
            <ReactPlayer
                ref={playerRef}
                playing={playing}
                muted={muted}
                controls={false}
                onProgress={handleProgress}
                onDuration={handleDuration}
                className="[&_video]:m-0"
                width='100%'
                height='100%'
                playsinline
                {...props}
            />

            <div className="absolute bottom-0 left-0 flex flex-col gap-3 bg-linear-to-b px-6 pb-6 py-2 from-transparent to-[#6E6E68]/60 w-full">
                <div className="flex gap-2 justify-between">
                    <div className="flex gap-2">
                        <button onClick={handlePlayPause} className={buttonStyle}>
                            {playing ? <Pause strokeWidth={1} size={16} /> : <Play strokeWidth={1} size={16} />}
                        </button>
                        <span className='h-11 w-[117px] flex items-center justify-center rounded-full bg-[#67675780] text-[#FFFFFF] text-lg'>
                            {secondsToMinutes((played * duration).toFixed(1))} / {secondsToMinutes(duration.toFixed(1))}
                        </span>

                    </div>

                    <div className="flex gap-2">
                        <button onClick={handleMuted} className={buttonStyle}>
                            {muted ? <VolumeX strokeWidth={1} size={16} /> : <Volume2 strokeWidth={1} size={16} />}
                        </button>

                        <button onClick={handleFullscreen} className={buttonStyle}>
                            {isFullScreen ? <Minimize2 strokeWidth={1} size={16} /> : <Maximize2 strokeWidth={1} size={16} />}
                        </button>
                    </div>
                </div>

                <input
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={played}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                    className='appearance-none overflow-hidden cursor-pointer rounded-full [&::-webkit-slider-runnable-track]:bg-[#D4D4C9B2] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-[-1444px_0_0_1440px_#67675780] [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#67675780]'
                />
            </div>
        </div>
    )
}
