import styled from "styled-components";

export default function VictoryMessage() {
	return (
		<VictoryMessageContainer>
			<VictoryTitle>Du hast gewonnen!</VictoryTitle>
		</VictoryMessageContainer>
	);
}

const VictoryMessageContainer = styled.section`
	background-color: #fff;
	color: #000;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 36px;
`;

const VictoryTitle = styled.h1`
	color: red;
`;
