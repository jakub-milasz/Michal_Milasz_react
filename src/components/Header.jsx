import React from "react";
import logo from "../img/logo.png"; // Import the logo image

export default function Header() {
  return (
    <header className="header">
      <nav className="menu">
        <div className="top-links">
          <a href="#">Strona główna</a>
          <a href="#">Specjalizacje</a>
          <a href="#">O mnie</a>
        </div>
        <div className="bottom-link">
          <a href="#">Kontakt</a>
        </div>
      </nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
}

