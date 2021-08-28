import './Picture.css';

export interface PictureProps {
    name: string,
    types: string[]
}

const getPokemonURL = (pokemonName: string): string => {
    return process.env.PUBLIC_URL + `/assets/${pokemonName}.png`;
}

const getTypeURL = (pokemonType: string): string => {
    return process.env.PUBLIC_URL + `/assets/${pokemonType}.gif`;
}

const Picture: React.FC<PictureProps> = (props) => {
    return (
        <div id="picture">
            <div className="pokemon-picture">
                <figure>
                    <img src={getPokemonURL(props.name)} alt={props.name} aria-label={`a picture of ${props.name}`} />
                </figure>
            </div>
            <div className="type-picture-col">
                <div className="type-picture-row">
                   { props.types.map((type: string, index: number) => 
                   <figure key={index}>
                       <img src={getTypeURL(type)} alt={type} aria-label={`a picture that says ${type}`} />
                   </figure>
                   ) } 
                </div>
            </div>
        </div>
    )
}

export default Picture;