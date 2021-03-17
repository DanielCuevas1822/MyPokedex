import React from "react";
import Section from "../components/Section";
import "../assets/styles/screens/Home.scss";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [nextdata, setNextData] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState("");

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

  const handleChange = (event) => {
    setSearching(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${searching.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) throw Error(response.status);
        return response.json();
      })
      .then((responseData) => {
        setSearching("");
        setSearchResults([]);
        setSearchResults([
          {
            name: responseData.name,
            url: `https://pokeapi.co/api/v2/pokemon/${responseData.id}/`,
          },
        ]);
      })
      .catch((error) => {
        setSearching("");
        alert("Not Found");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 poke-search d-flex justify-content-center">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-9">
              <input
                className="search"
                type="text"
                placeholder="Search a Pokémon"
                onChange={handleChange}
                value={searching}
              />
            </div>

            <div className="col-3">
              <button type="submit" className="btn poke__btn mb-3">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
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
