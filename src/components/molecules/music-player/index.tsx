import { Fade, IconButton, Slider, Typography } from "@mui/material";
import {
  PauseRounded,
  PlayArrowRounded,
  SkipPreviousRounded,
  SkipNextRounded,
} from "@mui/icons-material";
import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./styles";
import clsx from "clsx";

export const MusicPlayer = () => {
  const classes = useStyles();

  // state
  const [loading, setLoading] = useState<boolean>(true);
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  // references
  const audioPlayer = useRef<any>(); // reference our audio component
  const progressBar = useRef<any>(); // reference our progress bar
  const animationRef = useRef<any>(); // reference the animation

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = (value: number | number[]) => {
    // audioPlayer.current.currentTime = progressBar.current.value;
    audioPlayer.current.currentTime = value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    const newTime = Number(progressBar.current.value) - 30;
    progressBar.current.value = newTime;
    changeRange(newTime);
  };

  const forwardThirty = () => {
    const newTime = Number(progressBar.current.value) + 30;
    progressBar.current.value = newTime;
    changeRange(newTime);
  };

  const handleProgressChange = (e: any, value: any) => {
    audioPlayer.current!.currentTime = value;
    e.preventDefault();
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    loading,
  ]);

  useEffect(() => {
    if (!isPlaying) {
      // audioPlayer.current.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div
      className={clsx(classes.root, showPlayer && classes.rootOpen)}
      onMouseEnter={() => setShowPlayer(true)}
      onMouseLeave={() => setShowPlayer(false)}
    >
      <audio
        onLoad={() => setLoading(!loading)}
        ref={audioPlayer}
        src="/sounds/acorda-pedrinho.mp3"
        preload="metadata"
      ></audio>
      <div>
        <div className={clsx(classes.disc, isPlaying && classes.spinAnimation)}>
          <div />
          <img src="/images/banner1.jpg" alt="fundo do disco" />
        </div>
      </div>

      <div className={classes.timeBox}>
        <div>
          <IconButton onClick={backThirty}>
            <SkipPreviousRounded />
          </IconButton>
          <IconButton onClick={togglePlayPause}>
            {isPlaying ? <PauseRounded /> : <PlayArrowRounded />}
          </IconButton>
          <IconButton onClick={forwardThirty}>
            <SkipNextRounded />
          </IconButton>
        </div>
        <div className={classes.sliderBox}>
          {/* <Slider
            ref={progressBar}
            aria-label="Volume"
            max={duration}
            value={currentTime}
            onChange={(_, value) => changeRange(value)}
            onChangeCommitted={(e, v) => console.log({ e, v })}
          /> */}
          <Slider
            ref={progressBar}
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            aria-labelledby="continuous-slider"
          />
        </div>
        <div className={classes.calculateTimeBox}>
          <Typography variant="caption">
            {calculateTime(currentTime)}
          </Typography>
        </div>
      </div>
    </div>
  );
};
