import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.scss";
import backgroundpokeball from "./assets/static/backgroundpokeball.svg";

function App() {
  return (
    <div className="App">
      <img className="backgroundpokeball" src={backgroundpokeball} alt="backgroundpokeball"/>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
