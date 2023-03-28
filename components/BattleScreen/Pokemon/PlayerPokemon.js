import styled from "styled-components";

const PlayerPokemonContainer = styled.div`
	position: absolute;
	bottom: 70px;
	left: 10px;
	transform: scale(1.1);
`;

const PlayerPokemonImage = styled.img`
	z-index: 1;
`;

export default function PlayerPokemon() {
	return (
		<PlayerPokemonContainer>
			<PlayerPokemonImage
				src="/sprites/starter/charizard-back.gif"
				alt="glurak"
			/>
		</PlayerPokemonContainer>
	);
}
