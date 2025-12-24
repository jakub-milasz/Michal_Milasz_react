import React, { useState } from "react";
import stopka from "../img/stopka.png"; // Import the footer image

export default function Contact() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsAccepted(e.target.checked);
  };

  const handleSubmit = (e) => {
    if (!isAccepted) {
      alert("Musisz zaakceptować politykę prywatności!");
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="heading" id="kontakt">
        <h2 className="heading-text">Kontakt</h2>
        <div className="contact-and-form">
          <div className="form-container">
            <h2>Formularz kontaktowy</h2>
            <form action="https://formsubmit.co/michal.milasz@adwokatura.pl" method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <div>
                  <label for="fname">Imię:</label>
                  <input type="text" id="fname" name="fname" required/>
                </div>
                <div>
                  <label for="lname">Nazwisko:</label>
                  <input type="text" id="lname" name="lname" required/>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label for="phone">Numer telefonu:</label>
                  <input type="tel" id="phone" name="phone" pattern="[0-9+ ]+" required/>
                </div>
                <div>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required/>
                </div>
              </div>

              <label for="message">Wiadomość:</label>
              <textarea id="message" name="message" required></textarea>
              <div className="acceptance">
                <input type="checkbox" id="consent" name="consent" onChange={handleCheckboxChange} checked={isAccepted} required/>
                <label for="consent">Wyrażam zgodę na przetwarzanie moich danych osobowych (imię, nazwisko, e-mail, nr telefonu) przez Administratora w celu udzielenia odpowiedzi na moje zapytanie przesłane przez formularz kontaktowy. Zapoznałem/am się z <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">Polityką Prywatności</a>.</label>
              </div>
              <button type="submit">Wyślij</button>
            </form>
          </div>
          <div className="contact-info">
            <img src={stopka} alt="Stopka" className="footer-image" />
            <div className="contact-details">
              <p><strong>Telefon: </strong>783 273 664</p>
              <p><strong>E-mail: </strong>michal.milasz@adwokatura.pl</p>
              <p><strong>NIP: </strong>8692008386</p>
              <p><strong>Adres</strong><br/>ul. Miodowa 26 lok. 1.4<br/>31-055 Kraków</p>
              <p>Filia Kancelarii ul. Piłkarska 25<br/>32-800 Brzesko (Bucze)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}