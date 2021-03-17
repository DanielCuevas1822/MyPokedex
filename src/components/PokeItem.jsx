import React, { useEffect, useState } from "react";
import "../assets/styles/components/PokeItem.scss";
import pokeball from "../assets/static/MaskPokeball.svg";

const PokeItem = ({ info }) => {
  const [pokemonData, setpokemonData] = useState({
    namepokemon: "",
    number: "",
    types: [{ type: { name: "" } }, { type: { name: "" } }],
    image: "",
  });

  useEffect(() => {
    fetch(info.url)
      .then((response) => response.json())
      .then((responseData) => {
        setpokemonData({
          namepokemon: responseData.name,
          number: responseData.id,
          types: responseData.types,
          image: responseData.sprites.other.dream_world.front_default,
        });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
      {pokemonData ? (
        <div className="poke-card">
          <img src={pokeball} alt="" className="maskpokeball" />

          <div className="col poke-card__number text-right">
            <p>#{pokemonData.number}</p>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="col poke-card__name">
                <p>{pokemonData.namepokemon}</p>
              </div>

              {pokemonData.types.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="poke-card__type d-flex align-items-center justify-content-center"
                  >
                    {item.type.name}
                  </div>
                );
              })}
            </div>

            <div className="col-6 d-flex align-items-center justify-content-center">
              <img
                className="poke-card__image"
                src={pokemonData.image}
                alt="Pokémon"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PokeItem;
