import styled from "styled-components";

const AttackMessage = ({ name, attack }) => {
	return (
		<AttackMessageBox>
			<Message>
				{name} setzt {attack} ein.
			</Message>
		</AttackMessageBox>
	);
};

export default AttackMessage;

const AttackMessageBox = styled.section`
	background-image: url("/sprites/attack-box.png");
	background-size: cover;
	background-position: center;

	position: absolute;
	width: 100%;
	height: 79px;
	left: 0%;
	bottom: 0%;
	z-index: 9999;
`;

const Message = styled.p`
	font-size: 20px;
	line-height: 16px;
	position: relative;
	left: 4%;
`;
