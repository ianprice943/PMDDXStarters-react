import { MoveProps, PokemonMove } from 'PokemonTypes';
import './Moves.css';

const getClassFromType = (type: string): string => {
    let lowerType = type.toLocaleLowerCase();
    return lowerType;
}

const Moves: React.FC<MoveProps> = (props) => {
    return (
        <div id="moves">
            { props.moves.map((move: PokemonMove, index: number) =>
                <div key={index} className={`${getClassFromType(move.type)} box-shadow`}>
                    <div className="move-title">{move.name}</div>
                    <div>{move.description}</div>
                    <div><b>Type:</b> {move.type}</div>
                    <div><b>Powerpoints:</b> {move.powerpoints}</div>
                    <div><b>Category:</b> {move.category}</div>
                    <div><b>Range:</b> {move.range}</div>
                </div>
            ) }
        </div>
    )
}

export default Moves;