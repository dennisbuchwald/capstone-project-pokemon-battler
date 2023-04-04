import styled, { keyframes } from "styled-components";
import Image from "next/image";

export default function EnemyPokemon({ attacking, pokemon, level }) {
	return (
		<EnemyPokemonContainer attacking={attacking}>
			<Image
				src={`/sprites/opponent/hard/${pokemon}.gif`} // Use curly braces instead of forward slashes
				alt={pokemon}
				layout="intrinsic"
				width={240}
				height={240}
			/>
			<EnemyPokemonCaption>{`${pokemon} Lv. ${level}`}</EnemyPokemonCaption>
		</EnemyPokemonContainer>
	);
}

const attackAnimation = keyframes`
    0% {
        transform: translate(0, 0) scale(0.6);
    }
    50% {
        transform: translate(-30px, 30px) scale(0.6);
    }
    100% {
        transform: translate(0, 0) scale(0.6);
    }
`;

const EnemyPokemonContainer = styled.figure`
	position: absolute;
	right: -10px;
	top: 20px;
	transform: scale(0.6);
	margin: 0;
	animation: ${({ attacking }) => (attacking ? attackAnimation : "none")} 1s;
`;

const EnemyPokemonCaption = styled.figcaption` font-size: 20px; position: absolute; bottom: 0px; left: 0px; z - index: 1; text - shadow: 1px 1px 0px #b7b7b7; background - color: rgba(0, 0, 0, 0.8); color: #ffffff; padding: 2px 5px;
`;
