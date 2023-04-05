import React, { useState, useCallback } from "react";
import useSound from "use-sound";

import backgroundMusic from "/public/audio/battle_music.mp3";
import menuSound from "/public/audio/menu.mp3";

const SoundEffects = () => {
	const [playBackgroundMusic, { stop: stopBackgroundMusic }] = useSound(
		backgroundMusic,
		{ volume: 0.1 }
	);

	const [playMenuSound, { stop: stopMenuSound }] = useSound(menuSound, {
		volume: 0.1,
	});

	const playSound = useCallback(
		(effect) => {
			switch (effect) {
				case "backgroundMusic":
					playBackgroundMusic();
					break;
				case "menuSound":
					playMenuSound();
					break;
				default:
					console.log("Unknown sound effect");
					break;
			}
		},
		[playBackgroundMusic, playMenuSound]
	);

	const stopSound = useCallback(
		(effect) => {
			switch (effect) {
				case "backgroundMusic":
					stopBackgroundMusic();
					break;
				case "menuSound":
					stopMenuSound();
					break;
				default:
					console.log("Unknown sound effect");
					break;
			}
		},
		[stopBackgroundMusic, stopMenuSound]
	);

	return [playSound, stopSound];
};

export default SoundEffects;
