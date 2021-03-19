import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.scss";
import bgpokeball from "./assets/static/backgroundpokeball.svg";
import SinglePokemon from "./screens/SinglePokemon";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <img className="bgpokeball" src={bgpokeball} alt="bgpokeball" />
      <Header />
      <Switch>
        <Route path="/pokemon/:nombre">
          <SinglePokemon />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
