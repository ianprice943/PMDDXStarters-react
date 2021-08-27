import React from "react";
import pokemonJSON from '../data/pokemon.json';

interface IProps {
  pokemon: string;
}

interface IState {
  pokemon: string;
  type: string[];
  ability: string[];
  moves: string[];
}

const PokemonList = {
  Bulbasaur: "Bulbasaur",
  Charmander: "Charmander",
  Squirtle: "Squirtle",
  Pikachu: "Pickachu",
  Meowth: "Meowth",
  Psyduck: "Psyduck",
  Machop: "Machop",
  Cubone: "Cubone",
  Eevee: "Eevee",
  Chikorita: "Chikorita",
  Cyndaquil: "Cyndaquil",
  Totodile: "Totodile",
  Treecko: "Treecko",
  Torchic: "Torchic",
  Mudkip: "Mudkip",
  Skitty: "Skitty"
}

type PokemonName = keyof typeof PokemonList;

export class Pokemon extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      pokemon: props.pokemon,
      type: [],
      ability: [],
      moves: []
    }
  }

  isValidPokemon(pokemon: string): pokemon is PokemonName {
    return pokemon in PokemonList;
  }

  componentDidMount() {
    let name: PokemonName;
    if(this.isValidPokemon(this.state.pokemon)) {
      name = this.state.pokemon;
      this.setState({
        type: pokemonJSON.pokemon[name].type,
        ability: pokemonJSON.pokemon[name].ability,
        moves: pokemonJSON.pokemon[name].moves
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      pokemon: '',
      type: [],
      ability: [],
      moves: []
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.pokemon}</h2>
        <p>{this.state.type}</p>
        <p>{this.state.ability}</p>
        <p>{this.state.moves}</p>
      </div>
    )
  }
}

export default Pokemon;