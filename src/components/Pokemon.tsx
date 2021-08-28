import React from "react";
import PokemonService from "../PokemonService";
import Picture, { PictureProps } from "./Picture";
import './Pokemon.css';

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
  }

  return (
    <div id="pokemon">
      <h2>{pokemon}</h2>
      <Picture {...pictureProps} />
      <p>{serviceRef.current.getPokemon(pokemon).ability.name}</p>
      <p>{serviceRef.current.getPokemon(pokemon).moves.map(move => <span>{move.name}</span>)}</p>
    </div>
  )
}

export default Pokemon;