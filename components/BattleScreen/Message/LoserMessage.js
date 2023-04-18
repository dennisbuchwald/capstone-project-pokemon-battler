import styled from "styled-components";

export default function LoserMessage() {
	const handleRestart = () => {
		window.location.reload();
	};
	return (
		<LoserMessageMessageContainer>
			<LoserTitle>Du hast Verloren!</LoserTitle>
			<RestartButton onClick={handleRestart}>Neustart</RestartButton>
		</LoserMessageMessageContainer>
	);
}

const LoserMessageMessageContainer = styled.section`
	background-color: white;
	background-size: 426px 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 10px;
	max-height: 325px;
	max-width: 426px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
`;

const LoserTitle = styled.h1`
	color: red;
	text-align: center;
	font-size: 40px;
	padding-top: 0px;
`;

const RestartButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	cursor: pointer;

	background-color: red;
	color: white;
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: darkgreen;
`;
