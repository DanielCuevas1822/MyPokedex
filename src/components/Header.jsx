import React from "react";
import "../assets/styles/components/Header.scss";
import LedsPokedex from "../assets/static/LedsPokedex.svg";
import Logo from "../assets/static/logo.svg";
import { Link } from "react-router-dom";
import home from "../assets/static/home.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center header__container">
          <div className="col-sm-12 col-md-4 header__container__leds">
            <img src={LedsPokedex} alt="leds Pokédex" />
          </div>
          <div className="col-sm-12 col-md-4 header__container__logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="col-sm-12 col-md-4 header__container__home">
            <Link to="/">
            <img src={home} alt="home" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
