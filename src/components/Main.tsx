import './Main.css';
import Pokemon from './Pokemon';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Bulbasaur">
          <Pokemon pokemon="Bulbasaur" />
        </Route>
        <Route exact path="/Charmander">
          <Pokemon pokemon="Charmander" />
        </Route>
        <Route exact path="/Squirtle">
          <Pokemon pokemon="Squirtle" />
        </Route>
        <Route exact path="/Pikachu">
          <Pokemon pokemon="Pikachu" />
        </Route>
        <Route exact path="/Meowth">
          <Pokemon pokemon="Meowth" />
        </Route>
        <Route exact path="/Psyduck">
          <Pokemon pokemon="Psyduck" />
        </Route>
        <Route exact path="/Machop">
          <Pokemon pokemon="Machop" />
        </Route>
        <Route exact path="/Cubone">
          <Pokemon pokemon="Cubone" />
        </Route>
        <Route exact path="/Eevee">
          <Pokemon pokemon="Eevee" />
        </Route>
        <Route exact path="/Chikorita">
          <Pokemon pokemon="Chikorita" />
        </Route>
        <Route exact path="/Cyndaquil">
          <Pokemon pokemon="Cyndaquil" />
        </Route>
        <Route exact path="/Totodile">
          <Pokemon pokemon="Totodile" />
        </Route>
        <Route exact path="/Treecko">
          <Pokemon pokemon="Treecko" />
        </Route>
        <Route exact path="/Torchic">
          <Pokemon pokemon="Torchic" />
        </Route>
        <Route exact path="/Mudkip">
          <Pokemon pokemon="Mudkip" />
        </Route>
        <Route exact path="/Skitty">
          <Pokemon pokemon="Skitty" />
        </Route>
      </Switch>
    </main>
  )
}

export default Main;