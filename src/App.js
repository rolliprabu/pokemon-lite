import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Components/Home";
import MyPokemon from "./Components/MyPokemon";
import PokemonDetail from "./Components/PokemonDetail";
import NavbarLayout from "./Components/Navbar";

import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarLayout />
        <div className="Main-Container">
          <Switch>
            <Route path="/detail">
              <PokemonDetail />
            </Route>
            <Route path="/mypokemon">
              <MyPokemon />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
