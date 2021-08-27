import React from "react";
import PokemonService from "../PokemonService";

interface Props {
  pokemon: string
}

const Pokemon: React.FC<Props> = ({ pokemon }) => {
  // const [pokemonObj, setPokemonObj] = React.useState("");
  const serviceRef = React.useRef(new PokemonService());

  return (
    <div>
      <h2>{pokemon}</h2>
      <p>{serviceRef.current.getPokemon(pokemon).type.map(t => <span>{t}</span>)}</p>
      <p>{serviceRef.current.getPokemon(pokemon).ability.name}</p>
      <p>{serviceRef.current.getPokemon(pokemon).moves.map(move => <span>{move.name}</span>)}</p>
    </div>
  )
}

export default Pokemon;