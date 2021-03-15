import React from "react";
import "../assets/styles/components/PokeItem.scss";
import pokeball from "../assets/static/MaskPokeball.png";

const PokeItem = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="poke-card">
        <img src={pokeball} alt="" className="maskpokeball" />
        <div className="col poke-card__number text-right">
          <p>#001</p>
        </div>
        <div className="col poke-card__name">
          <p>Name of Pokémon</p>
        </div>
        <div className="col row">
          <div className="col-sm-12 col-md-6">
            <div className="poke-card__type d-flex align-items-center justify-content-center">Type</div>
            <div className="poke-card__type d-flex align-items-center justify-content-center">Type</div>
          </div>
          <div className="col-sm-12 col-md-6">
            {/* <img src="" alt="Pokémon" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeItem;
