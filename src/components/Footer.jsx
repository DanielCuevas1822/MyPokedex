import React from "react";
import "../assets/styles/components/Footer.scss";
import githublogo from "../assets/static/githublogo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center footer__container">
          <div className="col text-center">
            <a href="https://github.com/DanielCuevas1822">
              <img src={githublogo} alt="logo github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
