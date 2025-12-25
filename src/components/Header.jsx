import React from 'react';
import logo from '../img/stopka.png'; // Import the logo image

export default function Header() {
  return (
    <>
      <nav className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item"><a href="home">STRONA GŁÓWNA</a></li>
          <li className="nav-item"><a href="#specjalizacje">SPECJALIZACJE</a></li>
          <li className="nav-item"><a href="o-mnie">O MNIE</a></li>
          <li className="nav-item"><a href="#kontakt">KONTAKT</a></li>
        </ul>
      </nav>

      <header className="hero-section">
        <div className="hero-text-wrapper">
          <div className='title-underline'>
            <h1 className="hero-title">Zaufanie. Doświadczenie. Skuteczność.</h1>
            <div className="fading-gold-line"></div>
          </div>
          <p className="hero-subtitle">
            Reprezentujemy Klientów z pełnym zaangażowaniem,<br />
            oferując kompleksową pomoc prawną.
          </p>
        </div>
        <div className="hero-logo-wrapper">
          <img src={logo} alt="Kancelaria Michał Milasz" className="logo-img" />
        </div>
      </header>
    </>
  );
};