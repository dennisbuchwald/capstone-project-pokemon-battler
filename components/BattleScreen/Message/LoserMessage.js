import styled from "styled-components";

export default function LoserMessage() {
	return (
		<LoserMessageMessageContainer>
			<LoserTitle>Du hast verloren!</LoserTitle>
		</LoserMessageMessageContainer>
	);
}

const LoserMessageMessageContainer = styled.section`
	background-color: #fff;
	color: #000;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 36px;
`;

const LoserTitle = styled.h1`
	color: red;
`;
