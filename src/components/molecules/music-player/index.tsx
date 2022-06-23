/* eslint-disable react-hooks/exhaustive-deps */
import { IconButton, Slider, Typography } from "@material-ui/core";
import {
  PauseRounded,
  PlayArrowRounded,
  SkipPreviousRounded,
  SkipNextRounded,
} from "@material-ui/icons";
import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
import { musicType, partiesListMock } from "../../../utils";
interface IMusicPlayer {
  musicFixed?: musicType;
  playMusic?: boolean;
}

export const MusicPlayer: React.FC<IMusicPlayer> = ({
  musicFixed,
  playMusic,
}) => {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(true);
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const [currentMusic, setCurrentMusic] = useState<musicType>();
  const [isChangingMusic, setIsChangingMusic] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer = useRef<any>();
  const animationRef = useRef<any>();

  const calculateTime = (secs: number = 0): string => {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = Math.floor(secs % 60) || 0;

    const timeFormatted = `
    ${("00" + minutes).slice(-2)}:
    ${("00" + seconds).slice(-2)}`;
    return timeFormatted;
  };

  const handlePause = (): void => {
    setIsPlaying(false);
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
  };

  const handlePlay = (): void => {
    setIsPlaying(true);
    audioPlayer.current.play();
    updateDuration();
  };

  const togglePlayPause = (): void => {
    if (isPlaying) {
      handlePause();
      return;
    }

    handlePlay();
  };

  const handleChangeMusic = (music: musicType): void => {
    handlePause();
    setIsChangingMusic(false);

    audioPlayer.current!.src = music?.src;
    audioPlayer.current.load();

    setCurrentMusic(music);
    handlePlay();
  };

  const handleNextMusic = (): void => {
    if (musicFixed) {
      handleChangeMusic({ ...musicFixed, index: currentMusic?.index ?? 0 });
      return;
    }

    const currentIndex = currentMusic?.index ?? 0;
    const isLastMusic = currentIndex + 1 === partiesListMock?.length;
    const index = currentMusic && !isLastMusic ? currentIndex + 1 : 0;

    const newMusic = { index, ...partiesListMock[index]?.music };
    handleChangeMusic(newMusic);
  };

  const handlePreviousMusic = (): void => {
    const index = currentMusic ? (currentMusic?.index || 1) - 1 : 0;
    const newMusic = { index, ...partiesListMock[index]?.music };

    handleChangeMusic(newMusic);
  };

  const updateDuration = (): void => {
    cancelAnimationFrame(animationRef.current);

    const time = audioPlayer.current.currentTime;
    const currentDuration = audioPlayer.current.duration;

    setDuration(currentDuration);
    setCurrentTime(time);

    if (time > 0 && calculateTime(time) === calculateTime(currentDuration)) {
      setIsChangingMusic(true);
      return;
    }

    animationRef.current = requestAnimationFrame(updateDuration);
  };

  const handleChangeCurrentTime = (value: number | number[]): void => {
    const newValue = Array.isArray(value) ? 0 : value;
    audioPlayer.current!.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const handleProgressChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ): void => {
    handleChangeCurrentTime(value);
    event.preventDefault();
  };

  useEffect(() => {
    if (playMusic || isChangingMusic) handleNextMusic();
  }, [playMusic, isChangingMusic]);

  useEffect(() => {
    if (musicFixed && currentMusic)
      handleChangeMusic({ ...musicFixed, index: currentMusic?.index ?? 0 });
  }, [musicFixed]);

  return (
    <div
      className={clsx(classes.root, showPlayer && classes.rootOpen)}
      onMouseEnter={() => setShowPlayer(true)}
      onMouseLeave={() => setShowPlayer(false)}
    >
      <audio
        loop={true}
        onLoad={() => setLoading(!loading)}
        ref={audioPlayer}
        preload="metadata"
      ></audio>
      <div>
        <div className={clsx(classes.disc, isPlaying && classes.spinAnimation)}>
          <div />
          <img
            src={currentMusic?.imageSrc || partiesListMock[0]?.music?.imageSrc}
            alt="fundo do disco"
          />
        </div>
      </div>

      <div className={classes.playerBox}>
        <Typography variant="body1">
          {currentMusic?.title}
          {currentMusic?.artist && ` - ${currentMusic.artist}`}
        </Typography>

        <div className={classes.sliderBox}>
          <Slider
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            aria-labelledby="player-slider"
          />
        </div>

        <div className={classes.timeBox}>
          <div className={classes.controlsBox}>
            <IconButton onClick={handlePreviousMusic} disabled={!!musicFixed}>
              <SkipPreviousRounded />
            </IconButton>
            <IconButton onClick={togglePlayPause}>
              {isPlaying ? (
                <PauseRounded fontSize="large" />
              ) : (
                <PlayArrowRounded fontSize="large" />
              )}
            </IconButton>
            <IconButton onClick={handleNextMusic} disabled={!!musicFixed}>
              <SkipNextRounded />
            </IconButton>
          </div>
          <div className={classes.calculateTimeBox}>
            <Typography variant="caption">
              {calculateTime(currentTime)} / {calculateTime(duration)}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
