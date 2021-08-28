import pokemonJSON from './data/pokemon.json';
import movesJSON from './data/moves.json';
import abilitiesJSON from './data/abilities.json';
import { Pokemon, PokemonMove, PokemonSkeleton, PokemonType } from 'PokemonTypes';

class PokemonService {
  private pokemon: Pokemon[];

  constructor() {
    this.pokemon = [];
    const pokemonObj = pokemonJSON.pokemon as Record<string, Object>;
    for(let i = 0; i < pokemonObj.length; i++) {
      this.pokemon.push(this.getPokemon(pokemonObj[i] as string));
    }
  }

  private isValidPokemon(pokemon: string): boolean {
    if(pokemon in pokemonJSON.pokemon) {
      return true;
    }

    throw new Error(`${pokemon} is not a valid pokemon`);
  }

  private getAbilityDescription(abilityName: string): string {
    if(abilityName in abilitiesJSON.abilities) {
      const abilities = abilitiesJSON.abilities as Record<string, string>
      const abilityDescription = abilities[abilityName];
      return abilityDescription;
    }

    throw new Error(`${abilityName} is not a valid ability`);
  }

  private getMoveSet(moves: string[]): PokemonMove[] {
    const finalMovesArr: PokemonMove[] = [];
    const fullMoveSet = movesJSON.moves as Record <string, Object>
    moves.forEach((move) => {
      if(move in fullMoveSet) {
        const curMove = fullMoveSet[move] as PokemonMove;
        finalMovesArr.push(curMove);
      }
    });
    if(finalMovesArr.length === 4) {
      return finalMovesArr;
    }

    throw new Error(`${moves} is not a valid move set`);
  }

  public getPokemon(pokeName: string): Pokemon {
    let name: string;
    let pokemon: Pokemon = {
      name: '',
      type: ["Grass" as PokemonType],
      ability: {
        name: '',
        description: ''
      },
      moves: []
    };
    if(this.isValidPokemon(pokeName)){
      name = pokeName;
      pokemon.name = pokeName;

      const pokemonObj = pokemonJSON.pokemon as Record<string, Object>;
      const curPokemon:PokemonSkeleton = pokemonObj[name] as PokemonSkeleton;
      pokemon.type = curPokemon.type;

      let abilityDescription = this.getAbilityDescription(curPokemon.ability[0]);
      pokemon.ability = { 
        name: curPokemon.ability[0].replace(/([A-Z])/g, ' $1').trim(), 
        description: abilityDescription
      }

      const movesArr: PokemonMove[] = this.getMoveSet(curPokemon.moves);
      pokemon.moves = movesArr;

      return pokemon;
    }

    throw new Error ("Error fetching pokemon from json file");
  }

}

export default PokemonService;