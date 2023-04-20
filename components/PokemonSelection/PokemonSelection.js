import styled, { keyframes } from "styled-components";
import Image from "next/image";
import starterPokemons from "../../data/starterPokemons.json";

export default function PokemonSelection({ onSelect }) {
  const handleSelect = (selectedPokemon) => {
    onSelect(selectedPokemon);
  };

  return (
    <SelectionContainer>
      <Title>Waehle dein Pokémon</Title>
      <PokemonList>
        {starterPokemons.map((pokemon, index) => (
          <Pokemon key={index} onClick={() => handleSelect(pokemon)}>
            <StyledImage
              src="/sprites/masterball.png"
              alt={pokemon.name}
              width={80}
              height={80}
            />
            <PokemonName>{pokemon.name}</PokemonName>
          </Pokemon>
        ))}
      </PokemonList>
    </SelectionContainer>
  );
}

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

const PokemonName = styled.p`
  margin-top: 5px;
  font-size: 25px;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 20%;
  font-size: 40px;
`;

const PokemonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin-top: -5%;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const StyledImage = styled(Image)`
  animation: ${bounce} 1s infinite;
`;

const Pokemon = styled.li`
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    transform: scale(1.1);
  }
`;
