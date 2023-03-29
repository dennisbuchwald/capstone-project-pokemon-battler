import styled from "styled-components";
import Image from "next/image";

const PlayerPokemonContainer = styled.figure`
	position: absolute;
	bottom: 10px;
	left: -20px;
	transform: scale(0.8);
	margin: 0;
`;

const PlayerPokemonCaption = styled.figcaption`
	font-size: 14px;
`;

export default function PlayerPokemon() {
	return (
		<PlayerPokemonContainer>
			<Image
				src="/sprites/starter/charizard-back.gif"
				alt="glurak"
				layout="intrinsic"
				width={240}
				height={240}
			/>
			<PlayerPokemonCaption>Glurak</PlayerPokemonCaption>
		</PlayerPokemonContainer>
	);
}
