import React, { useState, useCallback } from "react";
import useSound from "use-sound";

import battleMusic from "/public/audio/battle_music.mp3";
import menuSound from "/public/audio/menu.mp3";
import attackedSound from "/public/audio/attacked.mp3";
import healSound from "/public/audio/heal.mp3";
import titleMusic from "/public/audio/title_screen.mp3";
import winMusic from "/public/audio/win.mp3";

const useSoundEffects = () => {
  const [playBattleMusic, { stop: stopBattleMusic }] = useSound(battleMusic, {
    volume: 0.1,
  });

  const [playTitleMusic, { stop: stopTitleMusic }] = useSound(titleMusic, {
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
        case "battleMusic":
          playBattleMusic();
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
    ]
  );

  const stopSound = useCallback(
    (effect) => {
      switch (effect) {
        case "battleMusic":
          stopBattleMusic();
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
    [stopBattleMusic, stopMenuSound, stopTitleMusic]
  );

  return [playSound, stopSound];
};

export default useSoundEffects;
