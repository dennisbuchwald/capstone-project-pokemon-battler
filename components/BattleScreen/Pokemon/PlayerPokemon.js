import { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import useAttackedSound from "../SoundEffect/useAttackedSound";

export default function PlayerPokemon({
  attacking,
  isDamaged,
  selectedPokemon,
}) {
  const [playSound] = useAttackedSound();

  useEffect(() => {
    if (isDamaged) {
      playSound("attackedSound");
    }
  }, [isDamaged, playSound]);

  const scaleFactor = getScaleFactor(selectedPokemon.name);

  return (
    <BlinkingPokemonContainer isDamaged={isDamaged}>
      <PlayerPokemonContainer attacking={attacking}>
        <StyledImage
          src={selectedPokemon.image}
          alt={selectedPokemon.name}
          layout="intrinsic"
          width={200 * scaleFactor}
          height={200 * scaleFactor}
        />
      </PlayerPokemonContainer>
    </BlinkingPokemonContainer>
  );
}

function getScaleFactor(pokemonName) {
  switch (pokemonName) {
    case "Bisaflor":
      return 0.65;
    case "Turtok":
      return 0.65;
    case "Glurak":
      return 0.8;
    default:
      return 1;
  }
}

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const BlinkingPokemonContainer = styled.figure`
  position: absolute;
  bottom: 15%;
  left: 5%;
  transform: scale(1);

  margin: 0;
  animation: ${({ isDamaged }) =>
    isDamaged
      ? css`
          ${damageAnimation} 0.25s
        `
      : "none"};
`;

const PlayerPokemonContainer = styled.figure`
  position: relative;
  margin: 0;
  animation: ${({ attacking }) => (attacking ? attackAnimation : "none")} 0.5s;
`;

const attackAnimation = keyframes`
	0% {
		transform: translate(0, 0) scale(1);
	}
	50% {
		transform: translate(40px, -40px) scale(1);
	}
	100% {
		transform: translate(0, 0) scale(1);
	}
`;

const damageAnimation = keyframes`
	0% { opacity: 1; }
	10% { opacity: 0.1; }
	20% { opacity: 1; }
	30% { opacity: 0.1; }
	40% { opacity: 1; }
	50% { opacity: 0.1; }
	60% { opacity: 1; }
	70% { opacity: 0.1; }
	80% { opacity: 1; }
	90% { opacity: 0.1; }
	100% { opacity: 1; }
`;
