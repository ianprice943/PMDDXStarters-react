import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const title = "Pokemon Mystery Dungeon Rescue Team DX Starters";

const Header: React.FC = () => {
  return (
    <header>
      <h1 id="title"> {title} </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button aria-haspopup="true" aria-label="hover to reveal the rest of the nav">Navigation</button>
            <ul className="dropDown-content" aria-label="submenu">
              <li>
                <Link to="/Bulbasaur">Bulbasaur</Link>
              </li>
              <li>
                <Link to="/Charmander">Charmander</Link>
              </li>
              <li>
                <Link to="/Squirtle">Squirtle</Link>
              </li>
              <li>
                <Link to="/Pikachu">Pikachu</Link>
              </li>
              <li>
                <Link to="/Meowth">Meowth</Link>
              </li>
              <li>
                <Link to="/Psyduck">Psyduck</Link>
              </li>
              <li>
                <Link to="/Machop">Machop</Link>
              </li>
              <li>
                <Link to="/Cubone">Cubone</Link>
              </li>
              <li>
                <Link to="/Eevee">Eevee</Link>
              </li>
              <li>
                <Link to="/Chikorita">Chikorita</Link>
              </li>
              <li>
                <Link to="/Cyndaquil">Cyndaquil</Link>
              </li>
              <li>
                <Link to="/Totodile">Totodile</Link>
              </li>
              <li>
                <Link to="/Treecko">Treecko</Link>
              </li>
              <li>
                <Link to="/Mudkip">Mudkip</Link>
              </li>
              <li>
                <Link to="/Skitty">Skitty</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;