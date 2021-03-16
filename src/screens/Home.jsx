import React from "react";
import Section from "../components/Section";
import "../assets/styles/screens/Home.scss";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const [nextdata, setNextData] = useState("");
  const [searchResults, setsearchResults] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=18")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
        setNextData(responseData.next);
      });
  }, []);

  const handleShowMore = () => {
    fetch(nextdata)
      .then((response) => response.json())
      .then((responseData) => {
        setData((prevState) => [...prevState, ...responseData.results]);
        setNextData(responseData.next);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 poke-search d-flex justify-content-center">
          <input
            className="search"
            type="text"
            placeholder="Search a Pokémon"
          />
        </div>

        {searchResults.length > 0 ? (
          <Section title="Results" pokemon={searchResults} />
        ) : null}

        {data.length > 0 ? (
          <React.Fragment>
            <Section title="All Pokémon" pokemon={data} />

            <div className="col-sm-12 poke-button d-flex justify-content-center">
              <button onClick={handleShowMore}>Show More</button>
            </div>
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Home;
