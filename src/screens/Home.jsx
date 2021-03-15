import React from "react";
import Section from "../components/Section";
import "../assets/styles/screens/Home.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 poke-search d-flex justify-content-center">
          <input
            className="searchpokemon"
            type="text"
            name="searchpokemon"
            id="searchpokemon"
            placeholder="Search a Pokémon"
          />
        </div>
        <Section title="Results" />
        <Section title="All Pokémon" />
        <div className="col-sm-12 poke-button d-flex justify-content-center">
          <button>Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
