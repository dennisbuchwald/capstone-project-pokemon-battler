import styled, { keyframes } from "styled-components";
import Image from "next/image";

export default function EnemyPokemon(props) {
	return (
		<EnemyPokemonContainer attacking={props.attacking}>
			{" "}
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

const EnemyPokemonCaption = styled.figcaption`
	font-size: 20px;
`;
