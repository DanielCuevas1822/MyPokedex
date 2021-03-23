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
      <main>
        <Switch>
          <Route path="/pokemon/:nombre" component={SinglePokemon} />
          <Route component={Home} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
