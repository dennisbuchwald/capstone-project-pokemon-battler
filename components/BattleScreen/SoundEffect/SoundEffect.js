import React, { useState, useCallback } from "react";
import useSound from "use-sound";

import backgroundMusic from "/public/audio/battle_music.mp3"; // Ändere den Pfad zur tatsächlichen Datei

const SoundEffects = () => {
	const [playBackgroundmusic] = useSound(backgroundMusic);
	// Füge weitere playEffect-Hooks für zusätzliche Soundeffekte hinzu

	const playSound = useCallback(
		(effect) => {
			switch (effect) {
				case "backgroundMusic":
					playBackgroundmusic();
					break;

				// Füge zusätzliche Soundeffekte-Fälle hinzu
				default:
					console.log("Unbekannter Soundeffekt");
			}
		},
		[playBackgroundmusic]
	); // Füge weitere playEffect-Abhängigkeiten für zusätzliche Soundeffekte hinzu

	return [playSound];
};

export default SoundEffects;
