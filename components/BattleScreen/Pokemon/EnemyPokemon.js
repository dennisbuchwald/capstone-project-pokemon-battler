import styled from "styled-components";

const EnemyPokemonContainer = styled.div`
	position: absolute;
	right: 35px;
	top: 50px;
	transform: scale(1);
`;

const EnemyPokemonImage = styled.img`
	z-index: 1;
`;

export default function EnemyPokemon() {
	return (
		<EnemyPokemonContainer>
			<EnemyPokemonImage src="/sprites/opponent/hard/mewtwo.gif" alt="mewtwo" />
		</EnemyPokemonContainer>
	);
}
