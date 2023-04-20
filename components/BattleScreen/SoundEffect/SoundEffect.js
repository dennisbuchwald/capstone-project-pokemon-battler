import React, { useState, useCallback } from "react";
import useSound from "use-sound";

import battleMusic0 from "/public/audio/battle_music0.mp3";
import battleMusic1 from "/public/audio/battle_music1.mp3";
import battleMusic2 from "/public/audio/battle_music2.mp3";
import menuSound from "/public/audio/menu.mp3";
import attackedSound from "/public/audio/attacked.mp3";
import healSound from "/public/audio/heal.mp3";
import titleMusic from "/public/audio/title_screen.mp3";
import winMusic from "/public/audio/win.mp3";
import loserMusic from "/public/audio/loser.mp3";

const useSoundEffects = () => {
  const [playBattleMusic0, { stop: stopBattleMusic0 }] = useSound(
    battleMusic0,
    {
      volume: 0.05,
    }
  );

  const [playBattleMusic1, { stop: stopBattleMusic1 }] = useSound(
    battleMusic1,
    {
      volume: 0.05,
    }
  );

  const [playBattleMusic2, { stop: stopBattleMusic2 }] = useSound(
    battleMusic2,
    {
      volume: 0.05,
    }
  );

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
        case "battleMusic0":
          playBattleMusic0();
          break;
        case "battleMusic1":
          playBattleMusic1();
          break;
        case "battleMusic2":
          playBattleMusic2();
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
      playBattleMusic0,
      playBattleMusic1,
      playBattleMusic2,
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
        case "battleMusic0":
          stopBattleMusic0();
          break;
        case "battleMusic1":
          stopBattleMusic1();
          break;
        case "battleMusic2":
          stopBattleMusic2();
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
      stopBattleMusic0,
      stopBattleMusic1,
      stopBattleMusic2,
      stopMenuSound,
      stopTitleMusic,
      stopWinMusic,
      stopLoserMusic,
    ]
  );

  return [playSound, stopSound];
};

export default useSoundEffects;
