import styled, { keyframes } from "styled-components";
import BattleScreen from "../BattleScreen/BattleScreen";
import { useState, useEffect, useRef } from "react";
import Preload from "../Preload/Preload";
import SoundEffect from "../BattleScreen/SoundEffect/SoundEffect";

function GameboyOverlay() {
  const [ledOn, setLedOn] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [appStarted, setAppStarted] = useState(false);
  const [preloaded, setPreloaded] = useState(false);
  const [titleMusicPlaying, setTitleMusicPlaying] = useState(false);
  const videoRef = useRef(null);
  const [playSound, stopSound] = SoundEffect();
  const [inBattle, setInBattle] = useState(false);

  useEffect(() => {
    if (ledOn) {
      const toggleLED = () => {
        setLedOn(false);
        setTimeout(() => setLedOn(true), 75);
      };

      const randomTimeout = Math.random() * 12000 + 8000;
      const timeoutId = setTimeout(toggleLED, randomTimeout);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [ledOn]);

  const startApp = () => {
    setAppStarted(true);
    setLedOn(true);
    setVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const onVideoEnded = () => {
    setVideoPlaying(false);
    setTitleMusicPlaying(true);
  };

  useEffect(() => {
    if (titleMusicPlaying && !inBattle) {
      playSound("titleMusic");

      return () => {
        stopSound("titleMusic");
      };
    }
  }, [titleMusicPlaying, inBattle, playSound, stopSound]);

  const onPreloaded = () => {
    setPreloaded(true);
  };

  return (
    <OverlayContainer>
      {!preloaded && <Preload onPreloaded={onPreloaded} />}{" "}
      <BattleScreenWrapper>
        {!appStarted ? (
          <>
            <StartText>Klicke auf Start, um das Spiel zu spielen.</StartText>
          </>
        ) : videoPlaying ? (
          <VideoPlayer
            ref={videoRef}
            src="/startscreen.mp4"
            autoPlay
            playsInline
            onEnded={onVideoEnded}
          />
        ) : (
          <BattleScreen setInBattle={setInBattle} />
        )}
      </BattleScreenWrapper>
      <OverlayImage>
        {!appStarted && (
          <>
            <ArrowSprite src="/sprites/arrow.png" />
            <StartButton onClick={startApp} />
          </>
        )}
      </OverlayImage>
      {ledOn && <LED />}
    </OverlayContainer>
  );
}

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StartButton = styled.button`
  position: absolute;
  left: 54%;
  top: 90%;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  pointer-events: auto;
`;

const StartText = styled.p`
  position: absolute;
  left: 50%;
  top: 40%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ArrowSprite = styled.img`
  position: absolute;
  left: 49%;
  top: 94%;
  width: 25px;
  height: 25px;
  z-index: 2;
  animation: ${bounce} 1s infinite;
`;

const OverlayContainer = styled.section`
  background-color: 7C8479;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 1000px;
  max-width: 550px;
  max-height: 1000px;
  position: relative;
  margin: 0 auto;
`;

const BattleScreenWrapper = styled.section`
  position: absolute;
  left: 50%;
  top: 22%;
  transform: translate(-50%, -50%);
  width: 390px;
  height: 280px;
  overflow: hidden;
  z-index: 1;
`;

const OverlayImage = styled.figure`
  background-image: url("/gba-sp-overlay.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  pointer-events: none;
`;

const LED = styled.div`
  width: 20px;
  height: 8px;
  background-color: limegreen;
  position: absolute;
  left: 92.9%;
  top: 57.8%;
  z-index: 3;
  border-radius: 2px;
  box-shadow: 0 0 5px limegreen;
`;

export default GameboyOverlay;
