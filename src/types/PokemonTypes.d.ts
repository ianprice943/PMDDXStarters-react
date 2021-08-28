declare module 'PokemonTypes' {

    export const enum PokemonType {
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
    
    export interface PokemonAbility {
      name: string;
      description: string;
    }
    
    export interface PokemonMove {
      category: string,
      description: string,
      name: string,
      powerpoints: string,
      range: string,
      type: PokemonType
    }
    
    export interface Pokemon {
      name: string;
      type: PokemonType[];
      ability: PokemonAbility;
      moves: PokemonMove[];
    }
    
    export interface PokemonSkeleton {
      type: PokemonType[];
      ability: string[];
      moves: string[];
    }
    
    export interface PictureProps {
        name: string,
        types: string[]
    }
    
    export interface AbilityProps {
        name: string;
        description: string;
    }
    
    export interface MoveProps {
        moves: PokemonMove[];
    }
}