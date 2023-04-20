import React, { useState, useCallback } from "react";
import useSound from "use-sound";

import battleMusic from "/public/audio/battle_music.mp3";
import menuSound from "/public/audio/menu.mp3";
import attackedSound from "/public/audio/attacked.mp3";
import healSound from "/public/audio/heal.mp3";
import titleMusic from "/public/audio/title_screen.mp3";
import winMusic from "/public/audio/win.mp3";
import loserMusic from "/public/audio/loser.mp3";

const useSoundEffects = () => {
  const [playBattleMusic, { stop: stopBattleMusic }] = useSound(battleMusic, {
    volume: 0.05,
  });

  const [playTitleMusic, { stop: stopTitleMusic }] = useSound(titleMusic, {
    volume: 0.1,
  });

  const [playLoserMusic, { stop: stopLoserMusic }] = useSound(loserMusic, {
    volume: 0.1,
  });

  const [playWinMusic, { stop: stopWinMusic }] = useSound(winMusic, {
    volume: 0.1,
  });

  const [playMenuSound, { stop: stopMenuSound }] = useSound(menuSound, {
    volume: 0.3,
  });

  const [playAttackedSound] = useSound(attackedSound, { volume: 0.4 });

  const [playHealSound] = useSound(healSound, { volume: 0.4 });

  const playSound = useCallback(
    (effect) => {
      switch (effect) {
        case "loserMusic":
          playLoserMusic();
          break;
        case "battleMusic":
          playBattleMusic();
          break;
        case "winMusic":
          playWinMusic();
          break;
        case "titleMusic":
          playTitleMusic();
          break;
        case "menuSound":
          playMenuSound();
          break;
        case "attackedSound":
          playAttackedSound();
          break;
        case "healSound":
          playHealSound();
          break;
        default:
          console.log("Unknown sound effect");
          break;
      }
    },
    [
      playBattleMusic,
      playMenuSound,
      playAttackedSound,
      playHealSound,
      playTitleMusic,
      playWinMusic,
      playLoserMusic,
    ]
  );

  const stopSound = useCallback(
    (effect) => {
      switch (effect) {
        case "loserMusic":
          stopLoserMusic();
          break;
        case "battleMusic":
          stopBattleMusic();
          break;
        case "winMusic":
          stopWinMusic();
          break;
        case "titleMusic":
          stopTitleMusic();
          break;
        case "menuSound":
          stopMenuSound();
          break;
        default:
          console.log("Unknown sound effect");
          break;
      }
    },
    [
      stopBattleMusic,
      stopMenuSound,
      stopTitleMusic,
      stopWinMusic,
      stopLoserMusic,
    ]
  );

  return [playSound, stopSound];
};

export default useSoundEffects;
