import React from "react";
import PokemonService from "../PokemonService";
import './Pokemon.css';
import Picture from "./Picture";
import Ability from "./Ability";
import Moves from "./Moves";
import { AbilityProps, MoveProps, PictureProps } from "PokemonTypes";

interface Props {
  pokemon: string
}

const Pokemon: React.FC<Props> = ({ pokemon }) => {
  // const [pokemonObj, setPokemonObj] = React.useState("");
  const serviceRef = React.useRef(new PokemonService());
  const curPokemon = serviceRef.current.getPokemon(pokemon);
  const pictureProps: PictureProps = {
    name: curPokemon.name,
    types: curPokemon.type as string[]
  };
  const abilityProps: AbilityProps = {
    name: curPokemon.ability.name,
    description: curPokemon.ability.description
  };
  const moveProps: MoveProps = {
    moves: curPokemon.moves
  }

  return (
    <div id="pokemon">
      <h2>{pokemon}</h2>
      <Picture {...pictureProps} />
      <Ability {...abilityProps} />
      <Moves {...moveProps} />
    </div>
  )
}

export default Pokemon;