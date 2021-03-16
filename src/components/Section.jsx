import React from "react";
import "../assets/styles/components/Section.scss";
import PokeItem from "./PokeItem";

const Section = ({ title, pokemon }) => {
  return (
    <div className="col-sm-12 custom-section">
      <h3>{title}</h3>
      <hr />
      <div className="row custom-section__items">
        {pokemon.map((item, index) => (
          <PokeItem key={index} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
