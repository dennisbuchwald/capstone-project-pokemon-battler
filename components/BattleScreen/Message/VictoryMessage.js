import styled from "styled-components";
import React, { useEffect } from "react";
import SoundEffects from "../SoundEffect/SoundEffect";

export default function VictoryMessage() {
	const [playSound, stopSound] = SoundEffects();

	useEffect(() => {
		stopSound("backgroundMusic"); // Stop the background music
	}, [stopSound]);

	const handleRestart = () => {
		window.location.reload();
	};

	return (
		<VictoryMessageContainer>
			<VictoryTitle>You won!</VictoryTitle>
			<RestartButton onClick={handleRestart}>Restart</RestartButton>
		</VictoryMessageContainer>
	);
}

const VictoryMessageContainer = styled.section`
	color: #000;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 36px;
`;

const VictoryTitle = styled.h1`
	color: green;
`;

const RestartButton = styled.button`
	margin-top: 30px;
	background-color: green;
	color: white;
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: darkgreen;
	}
`;
