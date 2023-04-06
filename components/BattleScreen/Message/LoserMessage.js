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
	color: #000;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 36px;
`;

const LoserTitle = styled.h1`
	color: red;
`;

const RestartButton = styled.button`
	margin-top: 30px;
	background-color: red;
	color: white;
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: darkred;
	}
`;
