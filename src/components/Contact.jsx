import React from "react";
import stopka from "../img/stopka.png"; // Import the footer image

export default function Contact() {
  return (
    <>
      <div className="heading" id="kontakt">
        <h2 className="heading-text">Kontakt</h2>
        <img src={stopka} alt="Stopka" className="footer-image" />
        <div className="contact-details">
          <p><strong>Telefon: </strong> <a href="tel:+48123456789">783 273 664</a></p>
          <p><strong>Email: </strong>michal.milasz@adwokatura.pl</p>
          <p><strong>NIP: </strong>8692008386</p>
        </div>
      </div>
    </>
  );
}