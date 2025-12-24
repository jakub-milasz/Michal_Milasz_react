import React from 'react';
import logo from '../img/stopka.png'; // Import the logo image

export default function Header() {
  return (
    <>
      {/* Navbar jako osobny element - teraz będzie sticky na całej stronie */}
      <nav className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item"><a href="home">STRONA GŁÓWNA</a></li>
          <li className="nav-item"><a href="#specjalizacje">SPECJALIZACJE</a></li>
          <li className="nav-item"><a href="o-mnie">O MNIE</a></li>
          <li className="nav-item"><a href="#kontakt">KONTAKT</a></li>
        </ul>
      </nav>

      {/* Sekcja Hero - tło i napisy */}
      <header className="hero-section">
        <div className="hero-column hero-left">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">Zaufanie. Doświadczenie. Skuteczność.</h1>
            <div className="fading-gold-line"></div>
            <p className="hero-subtitle">
              Reprezentujemy Klientów z pełnym zaangażowaniem,<br />
              oferując kompleksową pomoc prawną.
            </p>
          </div>
        </div>
        
        <div className="hero-column hero-right">
          <div className="hero-logo-wrapper">
            <img src={logo} alt="Kancelaria Michał Milasz" className="logo-img" />
          </div>
        </div>
      </header>
    </>
  );
};