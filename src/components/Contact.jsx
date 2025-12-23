import React from "react";
import stopka from "../img/stopka.png"; // Import the footer image

export default function Contact() {
  return (
    <>
      <div className="heading" id="kontakt">
        <h2 className="heading-text">Kontakt</h2>
        <div className="contact-and-form">
          <div class="form-container">
            <h2>Formularz kontaktowy</h2>
            <form action="https://formsubmit.co/michal.milasz@adwokatura.pl" method="post">
              <div class="form-group">
                <div>
                  <label for="fname">Imię:</label>
                  <input type="text" id="fname" name="fname" required/>
                </div>
                <div>
                  <label for="lname">Nazwisko:</label>
                  <input type="text" id="lname" name="lname" required/>
                </div>
              </div>
              <div class="form-group">
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

              <button type="submit">Wyślij</button>
            </form>
          </div>
          <div className="contact-info">
            <img src={stopka} alt="Stopka" className="footer-image" />
            <div className="contact-details">
              <p><strong>Telefon: </strong>783 273 664</p>
              <p><strong>E-mail: </strong>michal.milasz@adwokatura.pl</p>
              <p><strong>NIP: </strong>8692008386</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}