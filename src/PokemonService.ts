import pokemonJSON from './data/pokemon.json';
import movesJSON from './data/moves.json';
import abilitiesJSON from './data/abilities.json';

enum PokemonType {
  Grass = "Grass",
  Fire = "Fire",
  Water = "Water",
  Electric = "Electric",
  Normal = "Normal",
  Ground = "Ground",
  Fighting = "Fightning",
  Poison = "Poison",
  Dark = "Dark",
  Psychic = "Psychic",
  Rock = "Rock",
  Steel = "Steel",
  Dragon = "Dragon",
  Ice = "Ice",
  Flying = "Flying"
}

interface PokemonAbility {
  name: string;
  description: string;
}

interface PokemonMove {
  category: string,
  description: string,
  name: string,
  powerpoints: string,
  range: string,
  type: PokemonType
}

interface Pokemon {
  name: string;
  type: PokemonType[];
  ability: PokemonAbility;
  moves: PokemonMove[];
}

interface PokemonSkeleton {
  type: PokemonType[];
  ability: string[];
  moves: string[];
}

class PokemonService {

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

  public getPokemon(pokeName: string): Pokemon | undefined {
    let name: string;
    let pokemon: Pokemon = {
      name: '',
      type: [PokemonType.Grass],
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

    return undefined;
  }

}

export default PokemonService;