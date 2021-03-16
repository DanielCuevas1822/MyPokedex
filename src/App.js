import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.scss";
import bgpokeball from "./assets/static/backgroundpokeball.svg";

function App() {
  return (
    <div className="App">
      <img className="bgpokeball" src={bgpokeball} alt="bgpokeball" />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
