import { useEffect } from "react";

export default function Preload({ onPreloaded }) {
  useEffect(() => {
    const imagesToPreload = [
      "/sprites/arrow.png",
      "/sprites/cursor.png",
      "/background/background0.png",
      "/background/background1.png",
      "/background/background2.png",
      // Weitere Bilder hier hinzufügen
    ];

    const audioToPreload = [
      "/audio/title_screen.mp3",
      "/audio/menu.mp3",

      // Weitere Audiodateien hier hinzufügen
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
