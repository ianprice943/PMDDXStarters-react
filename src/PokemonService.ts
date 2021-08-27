import pokemonJSON from './data/pokemon.json';
import movesJSON from './data/moves.json';
import abilitiesJSON from './data/abilities.json';

enum PokemonType {
  Grass,
  Fire,
  Water,
  Electric,
  Normal,
  Ground,
  Fighting,
  Poison,
  Dark,
  Psychic,
  Rock,
  Steel,
  Dragon,
  Ice,
  Flying
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

enum PokemonList {
  Bulbasaur,
  Charmander,
  Squirtle,
  Pikachu,
  Meowth,
  Psyduck,
  Machop,
  Cubone,
  Eevee,
  Chikorita,
  Cyndaquil,
  Totodile,
  Treecko,
  Torchic,
  Mudkip,
  Skitty
}

enum AbilityList {
  Adaptability,
  Blaze,
  CloudNine,
  CuteCharm,
  Guts,
  LightningRod,
  Overgrow,
  PickUp,
  Static,
  Torrent
}

enum MoveList {
  Absorb,
  AncientPower,
  Bite,
  BoneClub,
  BrickBreak,
  BrutalSwing,
  BulletPunch,
  ChargeBeam,
  Confusion,
  DoubleKick,
  DragonBreath,
  DragonRage,
  EchoedVoice,
  ElectroBall,
  Ember,
  Facade,
  FakeOut,
  FlameBurst,
  FoulPlay,
  GrassKnot,
  Headbutt,
  IceFang,
  IronTail,
  KarateChop,
  LowKick,
  MetalClaw,
  MudBomb,
  MudSlap,
  Peck,
  RazorLeaf,
  QuickAttack,
  Scratch,
  SeedBomb,
  Sludge,
  Strength,
  Swift,
  Tackle,
  VineWhip,
  WaterGun,
  ZenHeadbutt
}

type PokemonName = keyof typeof PokemonList;
type PokemonTypeName = keyof typeof PokemonType;
type AbilityName = keyof typeof AbilityList;
type PokemonMoveName = keyof typeof MoveList;

class PokemonService {

  private isValidPokemon(pokemon: string): pokemon is PokemonName {
    return pokemon in PokemonList;
  }

  private isValidType(type: string): type is PokemonTypeName {
    return type in PokemonType;
  }

  private isAbilityName(ability: string): ability is AbilityName {
    return ability in AbilityList;
  }

  private isMoveName(move: string): move is PokemonMoveName {
    return move in MoveList;
  }

  getPokemon(pokeName: string): Pokemon | undefined {
    let name: PokemonName;
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
      pokemon.name = name;

      const types: PokemonType[] = [];
      const curPokemon = pokemonJSON.pokemon[name];
      curPokemon.type.forEach((type: string) => {
        if(this.isValidType(type)) {
          types.push(PokemonType[type]);
        }
      })
      pokemon.type = types;

      let abilityDescription = "";
      if(this.isAbilityName(curPokemon.ability[0])) {
        let abilityName: AbilityName = curPokemon.ability[0];
        abilityDescription = abilitiesJSON.abilities[abilityName];
      }
      pokemon.ability = { 
        name: curPokemon.ability[0].replace(/([A-Z])/g, ' $1').trim(), 
        description: abilityDescription
      }

      const movesArr = [];
      curPokemon.moves.forEach((move: string) => {
        if(this.isMoveName(move)) {
          let curMove = move;
          movesArr.push(movesJSON.moves[curMove]);
        }
      });

      return pokemon;
    }

    return undefined;
  }

}

export default PokemonService;