import React from "react";
import "../assets/styles/components/Footer.scss";
import githublogo from "../assets/static/githublogo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center footer__container">
          <div className="col text-center">
            <img src={githublogo} alt="logo github" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
