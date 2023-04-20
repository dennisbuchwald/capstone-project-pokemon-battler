import React, { useState, useCallback } from "react";
import useSound from "use-sound";

import battleMusic from "/public/audio/battle_music.mp3";
import menuSound from "/public/audio/menu.mp3";
import attackedSound from "/public/audio/attacked.mp3";
import healSound from "/public/audio/heal.mp3";
import titelMusic from "/public/audio/title_screen.mp3";

const useSoundEffects = () => {
  const [playbattleMusic, { stop: stopbattleMusic }] = useSound(battleMusic, {
    volume: 0.1,
  });

  const [playtitelMusic, { stop: stoptitelMusic }] = useSound(titelMusic, {
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
          playbattleMusic();
          break;
        case "titelMusic":
          playtitelMusic();
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
      playbattleMusic,
      playMenuSound,
      playAttackedSound,
      playHealSound,
      playtitelMusic,
    ]
  );

  const stopSound = useCallback(
    (effect) => {
      switch (effect) {
        case "battleMusic":
          stopbattleMusic();
          break;
        case "titelMusic":
          stoptitelMusic();
          break;
        case "menuSound":
          stopMenuSound();
          break;
        default:
          console.log("Unknown sound effect");
          break;
      }
    },
    [stopbattleMusic, stopMenuSound, stoptitelMusic]
  );

  return [playSound, stopSound];
};

export default useSoundEffects;
