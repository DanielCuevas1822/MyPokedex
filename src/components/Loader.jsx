import React from "react";
import "../../node_modules/animate.css/animate.css";
import "../assets/styles/components/Loader.scss";

const Loader = () => {
  return (
    <div className="col-sm-12 custom-section">
      <div className="o-pokeball c-loader u-bounce"></div>
    </div>
  );
};

export default Loader;
