import { useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

export const usePlayer = ({ ...props }: ReactPlayerProps) => {
  const { playing: initialPlaying, muted: initialMuted } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<ReactPlayer | null>(null);

  const [playing, setPlaying] = useState(initialPlaying);
  const [muted, setMuted] = useState(initialMuted);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  const handleMuted = () => {
    setMuted((prev) => !prev);
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    setSeeking(false);
    playerRef.current?.seekTo(parseFloat(e.currentTarget.value));
  };

  const handleProgress = (state: { played: number }) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = (dur: number) => {
    setDuration(dur);
  };

  const handleFullscreen = () => {
    if (!isFullScreen && containerRef.current) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen((prev) => !prev);
  };

  return {
    containerRef,
    playerRef,
    playing,
    muted,
    played,
    duration,
    isFullScreen,
    handlePlayPause,
    handleMuted,
    handleSeekChange,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleProgress,
    handleDuration,
    handleFullscreen,
  };
};
