import { useState, useCallback } from "react";
import useSound from "use-sound";
import attackedSound from "/public/audio/attacked.mp3";

const useAttackedSound = () => {
	const [playAttackedSound] = useSound(attackedSound, { volume: 1 });

	const playSound = useCallback(
		(effect) => {
			if (effect === "attackedSound") {
				playAttackedSound();
			} else {
				console.log("Unknown sound effect");
			}
		},
		[playAttackedSound]
	);

	return [playSound];
};

export default useAttackedSound;
