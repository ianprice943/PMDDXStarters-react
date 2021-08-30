import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const title = "Pokemon Mystery Dungeon Rescue Team DX Starters";

const ScrollRight = (): void => {
  const scrollArea = document.querySelector('nav > ul');
  if(scrollArea?.scrollLeft || scrollArea?.scrollLeft === 0) {
    const clientWidth = scrollArea.clientWidth;
    let curPosition = scrollArea.scrollLeft;
    let count = 0;
    let animate = setInterval(() => {
      curPosition = (curPosition + clientWidth/10);
      scrollArea.scrollLeft = curPosition;
      count++;
      if(scrollArea.scrollLeft >= scrollArea.scrollWidth - clientWidth) {
        clearInterval(animate);
      }
      if(count >= 10) {
        clearInterval(animate);
      }
    }, 14.667);
  }
}

const ScrollLeft = (): void => {
  const scrollArea = document.querySelector('nav > ul');
  if(scrollArea?.scrollLeft) {
    const clientWidth = scrollArea.clientWidth;
    let curPosition = scrollArea.scrollLeft;
    let count = 0;
    let animate = setInterval(() => {
      curPosition = (curPosition - clientWidth/10);
      scrollArea.scrollLeft = curPosition;
      count++;
      if(scrollArea.scrollLeft <= 0) {
        clearInterval(animate);
      }
      if(count >= 10) {
        clearInterval(animate);
      }
    }, 14.667);
  }
}

const Header: React.FC = () => {
  return (
    <header>
      <h1 id="title"> {title} </h1>
      <nav>
        <button id="left-arrow" className="desktop-hide" onClick={ScrollLeft} aria-label="scroll navigation slider to the left">&#8249;</button>
        <button id="right-arrow" className="desktop-hide" onClick={ScrollRight} aria-label="scroll navigation slider to the right">&#8250;</button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </nav>
    </header>
  )
}

export default Header;