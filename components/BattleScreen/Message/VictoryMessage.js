import styled from "styled-components";
import SoundEffect from "../SoundEffect/SoundEffect";
import { useEffect } from "react";

function WinMusic() {
  const [playSound, stopSound] = SoundEffect();

  useEffect(() => {
    playSound("winMusic");

    return () => {
      stopSound("winMusic");
    };
  }, [playSound, stopSound]);

  return null;
}

export default function VictoryMessage({ resetSelection }) {
  const handleRestart = () => {
    resetSelection();
  };

  return (
    <VictoryMessageContainer>
      <WinMusic />
      <VictoryTitle>Du hast Gewonnen!</VictoryTitle>
      <RestartButton onClick={handleRestart}>Neustart</RestartButton>
    </VictoryMessageContainer>
  );
}

const VictoryMessageContainer = styled.section`
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

const VictoryTitle = styled.h1`
  color: green;
  text-align: center;
  font-size: 40px;
  padding-top: 0px;
  text-transform: uppercase;
`;

const RestartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;

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
