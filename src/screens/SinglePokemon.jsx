import React from "react";
import "../assets/styles/screens/SinglePokemon.scss";
import pokeball from "../assets/static/MaskPokeball.svg";

const SinglePokemon = () => {
  return (
    <React.Fragment>
      <div className="container single single__details">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="single__details__card d-flex align-items-center justify-content-center water">
              <img src={pokeball} alt="" className="maskpokeball" />
              <img
                className="single__details__card__image"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
                alt="Pokémon"
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-6 single__details__info">
            <div className="row">
              <div className="col-6 col-md-12">
                <p className="single__details__number">#001</p>
              </div>

              <div className="col-6 col-md-12 single__details__name">
                <p>Bulbasaur</p>
              </div>

              <div className="col-12 col-md-6 d-flex justify-content-between">
                <p className="item__detail">Height:</p>
                <p className="item__value">18</p>
              </div>

              <div className="col-12 col-md-6 d-flex justify-content-between">
                <p className="item__detail">Weight:</p>
                <p className="item__value">18</p>
              </div>

              <div className="col-12">
                <p className="item__detail">Abilities:</p>
                <div className="d-flex flex-wrap justify-content-around">
                  <div className="abiliti_item">
                    <p>shed-skin</p>
                  </div>
                  <div className="abiliti_item">
                    <p>shed-skin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container single single__stats">
        <div className="row">
          <div className="col-12">
            <h3>Stats</h3>
            <hr />
            <div className="row">
              <div className="col-12 col-md-4 d-flex single__stats__stat">
                <p className="item__detail">Hp:</p>
                <p className="item__value">18</p>
              </div>

              <div className="col-12 col-md-4 d-flex single__stats__stat">
                <p className="item__detail">Defense:</p>
                <p className="item__value">18</p>
              </div>

              <div className="col-12 col-md-4 d-flex single__stats__stat">
                <p className="item__detail">Special Attack:</p>
                <p className="item__value">18</p>
              </div>

              <div className="col-12 col-md-4 d-flex single__stats__stat">
                <p className="item__detail">Attack:</p>
                <p className="item__value">18</p>
              </div>

              <div className="col-12 col-md-4 d-flex single__stats__stat">
                <p className="item__detail">Speed:</p>
                <p className="item__value">18</p>
              </div>

              <div className="col-12 col-md-4 d-flex single__stats__stat">
                <p className="item__detail">Special Defense:</p>
                <p className="item__value">18</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container single single__types">
        <div className="row">
          <div className="col-12">
            <h3>Types</h3>
            <hr />

            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="col-12 single__types__type fire">
                  <p>Dragon</p>
                </div>
                <div className="col-12">
                  <p className="item__detail">Damage from:</p>
                  <div className="row">
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <p className="item__detail">Damage to:</p>
                  <div className="row">
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="col-12 single__types__type fire">
                  <p>Dragon</p>
                </div>
                <div className="col-12">
                  <p className="item__detail">Damage from:</p>
                  <div className="row">
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <p className="item__detail">Damage to:</p>
                  <div className="row">
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single__types__type fire">
                        <p>Dragon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container single single__shiny">
        <div className="row">
          <div className="col-12">
            <h3>Shiny</h3>
            <hr />
            <div className="col-12 single__shiny__container">
              <div className="single__shiny__card d-flex justify-content-around align-items-center fire">
                <img src={pokeball} alt="" className="maskpokeball" />
                <img
                  className="single__shiny__image"
                  src=""
                  alt="Pokémon Shiny"
                />
              </div>

              <div className="single__shiny__card d-flex justify-content-around align-items-center fire">
                <img src={pokeball} alt="" className="maskpokeball" />
                <img
                  className="single__shiny__image"
                  src=""
                  alt="Pokémon Shiny"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Section title="Evolution Chain" pokemon={data} /> */}
    </React.Fragment>
  );
};

export default SinglePokemon;
