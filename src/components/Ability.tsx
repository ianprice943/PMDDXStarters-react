import { AbilityProps } from 'PokemonTypes';
import "./Ability.css";

const Ability: React.FC<AbilityProps> = (props) => {
    return (
        <div id="ability">
            <div>
                <h3>Ability</h3>
            </div>
            <div id="ability-box">
                <div className="ability-title">
                    {props.name}
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Ability;