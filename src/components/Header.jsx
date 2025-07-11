import React from "react";
import logo from "../img/stopka.png"; // Import the logo image


export default function Header() {
  return (
    <header className="header">
      <nav className="menu">
        <div className="top-links">
          <a href="home">Strona główna</a>
          <a href="#specjalizacje">Specjalizacje</a>
          <a href="o-mnie">O mnie</a>
        </div>
        <div className="bottom-link">
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
}

