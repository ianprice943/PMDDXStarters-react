import React from "react";
import PokemonService from "../PokemonService";

interface Props {
  onChange?: (pokemon: string) => void
}

const Pokemon: React.FC<Props> = ({ onChange }) => {
  const [pokemon, setPokemon] = React.useState("");
  

  return (
    <div>
      <h2></h2>
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}

export default Pokemon;