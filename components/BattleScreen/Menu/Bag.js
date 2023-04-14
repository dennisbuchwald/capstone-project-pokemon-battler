import styled from "styled-components";

const BagContainer = styled.div``;

const PotionButton = styled.button``;

export default function Bag({ onPotionUse, onClose }) {
	return (
		<BagContainer>
			<PotionButton onClick={onPotionUse}>Trank</PotionButton>
			<button onClick={onClose}>Schließen</button>
		</BagContainer>
	);
}
