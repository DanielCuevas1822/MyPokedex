import React from "react";
import Section from "../components/Section";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "../components/SearchBar";
import ButtonMore from "../components/ButtonMore";

const Home = () => {
  const [data, setData] = useState([]);
  const [nextdata, setNextData] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState("");
  const [issearching, setIsSearching] = useState(false);

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
    setSearchResults([]);
    setSearching("");

    fetch(`https://pokeapi.co/api/v2/pokemon/${searching.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) throw Error(response.status);
        return response.json();
      })
      .then((responseData) => {
        setIsSearching(true);
        setSearchResults([
          {
            name: responseData.name,
            url: `https://pokeapi.co/api/v2/pokemon/${responseData.id}/`,
          },
        ]);        
      })
      .catch((error) => {
        setIsSearching(false);
        alert("Pokémon not found " + error);
      });
  };

  return (
    <div className="container home">
      <div className="row">
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          searching={searching}
        />

        {issearching === true ? (
          searchResults.length > 0 ? (<Section title="Results" pokemon={searchResults} />):(<Loader/>)
        ) : null}        

        {data.length > 0 ? (
          <React.Fragment>
            <Section title="All Pokémon" pokemon={data} />
            <ButtonMore handleShowMore={handleShowMore} />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Home;
