import styled from "styled-components";
import Image from "next/image";

export default function Heading() {
	return (
		<Wrapper>
			<HeadingTitel>My Capstone Project:</HeadingTitel>
			<StyledImage
				src="/pokemon-battler-logo.png"
				alt="mewtwo"
				layout="intrinsic"
				width={240}
				height={240}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-bottom: 30px;
`;

const HeadingTitel = styled.h1`
	text-align: center;
`;

const StyledImage = styled(Image)``;
