import styled from "styled-components";
import Image from "next/image";

const EnemyPokemonContainer = styled.figure`
	position: absolute;
	right: -10px;
	top: 20px;
	transform: scale(0.6);
	margin: 0;
`;

const EnemyPokemonCaption = styled.figcaption`
	font-size: 20px;
`;

export default function EnemyPokemon() {
	return (
		<EnemyPokemonContainer>
			<Image
				src="/sprites/opponent/hard/mewtwo.gif"
				alt="mewtwo"
				layout="intrinsic"
				width={240}
				height={240}
			/>
			{/* <EnemyPokemonCaption>Mewtwo</EnemyPokemonCaption> */}
		</EnemyPokemonContainer>
	);
}
