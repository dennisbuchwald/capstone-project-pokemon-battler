import styled, { keyframes } from "styled-components";
import Image from "next/image";
import opponents from "../../data/opponents.json";

export default function OpponentSelection({ onSelect }) {
  const handleSelect = (selectedOpponent, index) => {
    onSelect(selectedOpponent.pokemons, index);
  };

  return (
    <SelectionContainer>
      <Title>Waehle deinen Gegner</Title>
      <OpponentList>
        {opponents.map((opponent, index) => (
          <Opponent key={opponent.id}>
            <Button onClick={() => handleSelect(opponent, index)}>
              <StyledImage
                src={`/sprites/character/${opponent.id}.png`}
                alt={opponent.name}
                width={80}
                height={80}
              />
              <OpponentName>{opponent.name}</OpponentName>
              <OpponentLevel>{opponent.difficultyLevel}</OpponentLevel>
            </Button>
          </Opponent>
        ))}
      </OpponentList>
    </SelectionContainer>
  );
}

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const StyledImage = styled(Image)`
  animation: ${bounce} 1s infinite;
`;

const Button = styled.button`
  all: unset;
`;

const SelectionContainer = styled.div`
  background-color: white;
  background-size: 426px 250px;
  display: block;
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

const Title = styled.h2`
  text-align: center;
  margin-top: 15%;
  font-size: 40px;
  margin-block-start: none;
  margin-block-end: none;
  margin-inline-start: none;
  margin-inline-end: none;
  font-weight: regular !important;
`;

const OpponentList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin-top: -5%;
`;

const Opponent = styled.li`
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

const OpponentName = styled.p`
  margin-top: 5px;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
`;

const OpponentLevel = styled.p`
  margin-top: -30px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`;
