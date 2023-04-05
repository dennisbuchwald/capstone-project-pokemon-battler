import React, { useState, useCallback } from "react";
import useSound from "use-sound";

import backgroundMusic from "/public/audio/battle_music.mp3";

const SoundEffects = () => {
	const [playBackgroundMusic, { stop: stopBackgroundMusic }] = useSound(
		backgroundMusic,
		{ volume: 0.1 }
	);

	const playSound = useCallback(
		(effect) => {
			switch (effect) {
				case "backgroundMusic":
					playBackgroundMusic();
					break;
				default:
					console.log("Unbekannter Soundeffekt");
			}
		},
		[playBackgroundMusic]
	);

	const stopSound = useCallback(
		(effect) => {
			switch (effect) {
				case "backgroundMusic":
					stopBackgroundMusic();
					break;
				default:
					console.log("Unbekannter Soundeffekt");
			}
		},
		[stopBackgroundMusic]
	);

	return [playSound, stopSound];
};

export default SoundEffects;
