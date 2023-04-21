import { useEffect } from "react";

export default function Preload({ onPreloaded }) {
  useEffect(() => {
    const imagesToPreload = [
      "/sprites/arrow.png",
      "/sprites/cursor.png",
      "/sprites/masterball.png",

      "/background/background0.png",
      "/background/background1.png",
      "/background/background2.png",

      "/sprites/character/0.png",
      "/sprites/character/1.png",
      "/sprites/character/2.png",

      "/sprites/opponent/Aerodactyl.gif",
      "/sprites/opponent/Garados.gif",
      "/sprites/opponent/Gengar.gif",
      "/sprites/opponent/Kadabra.gif",
      "/sprites/opponent/Maschock.gif",
      "/sprites/opponent/Menki.gif",
      "/sprites/opponent/Mewtwo.gif",
      "/sprites/opponent/Pikachu.gif",
      "/sprites/opponent/Taubsi.gif",

      "/sprites/starter/blastoise-back.gif",
      "/sprites/starter/charizard-back.gif",
      "/sprites/starter/venusaur-back.gif",

      "/sprites/attack-box.png",
      "/sprites/menu-options-box.png",
      "/sprites/text-box.png",

      "/sprites/statusbar-player.png",
      "/sprites/statusbar-opponent.png",
    ];

    const audioToPreload = [
      "/audio/title_screen.mp3",
      "/audio/menu.mp3",

      "audio/battle_music0.mp3",
      "audio/battle_music1.mp3",
      "audio/battle_music2.mp3",

      "audio/win.mp3",
      "audio/loser.mp3",
    ];

    const loadImages = async () => {
      const imagePromises = imagesToPreload.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
          })
      );

      const audioPromises = audioToPreload.map(
        (src) =>
          new Promise((resolve) => {
            const audio = new Audio();
            audio.src = src;
            audio.oncanplaythrough = () => resolve();
          })
      );

      await Promise.all([...imagePromises, ...audioPromises]);
      onPreloaded();
    };

    loadImages();
  }, [onPreloaded]);

  return null;
}
