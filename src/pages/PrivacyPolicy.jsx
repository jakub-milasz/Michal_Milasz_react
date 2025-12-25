import React from 'react';


export default function PrivacyPolicy() {
  return (
    <main>
      <div className="privacy-policy">
        <h3>Polityka prywatności</h3>
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
          przekazywanych przez Użytkowników w związku z korzystaniem ze strony internetowej
          dostępnej pod adresem https://michalmilasz.netlify.app/.
        </p>
        <ol type='I'>
          <li>Administrator Danych Osobowych</li>
          <p>
            Administratorem danych osobowych zawartych w serwisie jest: Michał Milasz, prowadzący
            działalność gospodarczą pod firmą Kancelaria Adwokacka Michał Milasz, NIP: 8692008386,
            adres siedziby: ul. Piłkarska 25, 32-800 Bucze, adres e-mail: michal.milasz@adwokatura.pl,
            numer telefonu: +48 783 273 664.
            (dalej zwany: „Administratorem”).
          </p>
          <li>Cele i podstawy przetwarzania danych</li>
          <p>Administrator przetwarza dane osobowe Użytkowników w następujących celach:</p>
          <ol>
            <li>Obsługa zapytań przez formularz kontaktowy:</li>
            <ul>
              <li>
                Zakres danych: imię, nazwisko, adres e-mail, numer telefonu, treść wiadomości.
              </li>
              <li>
                Podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes
                Administratora polegający na konieczności ustosunkowania się do przesłanej
                wiadomości) lub art. 6 ust. 1 lit. b RODO (podjęcie działań na żądanie osoby,
                której dane dotyczą, przed zawarciem umowy).
              </li>
            </ul>
            <li>Cele analityczne i statystyczne:</li>
            <ul>
              <li>
                Zakres danych: adres IP, czas wizyty, informacje o systemie operacyjnym i przeglądarce (dane zbierane automatycznie poprzez pliki cookies).
              </li>
              <li>
                Podstawa prawna: Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes
                Administratora polegający na prowadzeniu statystyk strony w celu jej
                optymalizacji).
              </li>
            </ul>
            <li>Dochodzenie roszczeń i obrona przed roszczeniami:</li>
            <ul>
              <li>
                Podstawa prawna: Art. 6 ust. 1 lit. f RODO.
              </li>
            </ul>
          </ol>
          <li>Odbiorcy danych</li>
          <p>
            Dane osobowe Użytkowników mogą być przekazywane podmiotom przetwarzającym je na zlecenie Administratora, m.in.:
          </p>
          <ol>
            <li>
              Dostawcom usług hostingowych i technicznych (w tym dostawcy infrastruktury strony).
            </li>
            <li>
              Dostawcom usług poczty elektronicznej (w celu prowadzenia korespondencji).
            </li>
            <li>
              Podmiotom świadczącym usługi księgowe lub prawne,z którymi Administrator współpracuje.
            </li>
          </ol>
          <p>
            Administrator informuje, że w związku z korzystaniem z usług dostawców technicznych (np.
            hosting), dane mogą być przekazywane do państw trzecich (poza EOG), jednak odbywa się

            to przy zapewnieniu odpowiednich zabezpieczeń prawnych (np. standardowe klauzule
            umowne).
          </p>
          <li>Okres przechowywania danych</li>
          <ol>
            <li>
              Dane przesłane w formularzu kontaktowym będą przetwarzane przez okres niezbędny
              do udzielenia odpowiedzi na zapytanie, a po tym czasie mogą być archiwizowane
              przez okres przedawnienia ewentualnych roszczeń (zazwyczaj 3 lub 6 lat).
            </li>
            <li>
              W przypadku zawarcia umowy o świadczenie usług prawnych, dane będą
              przetwarzane przez okres wymagany przepisami prawa podatkowego oraz
              korporacyjnego (adwokackiego).
            </li>
          </ol>
          <li>Prawa Użytkownika</li>
          <p>
            Użytkownikowi przysługują następujące prawa związane z przetwarzaniem danych osobowych:
          </p>
          <ol>
            <li>Prawo dostępu do treści swoich danych.</li>
            <li>Prawo do sprostowania danych.</li>
            <li>Prawo do usunięcia danych („prawo do bycia zapomnianym”).</li>
            <li>Prawo do ograniczenia przetwarzania.</li>
            <li>Prawo do wniesienia sprzeciwu.</li>
            <li>Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uzna, że przetwarzanie narusza przepisy RODO.</li>
          </ol>
          <li>Pliki Cookies (Ciasteczka)</li>
          <ol>
            <li>
              Strona internetowa wykorzystuje pliki cookies (tzw. „ciasteczka”), które są zapisywane na urządzeniu końcowym Użytkownika.
            </li>
            <li>
              Stosowane wyłącznie pliki cookies niezbędne, tj. konieczne do prawidłowego funkcjonowania strony (utrzymanie sesji, bezpieczeństwo). Strona nie wykorzystuje plików cookies w celach marketingowych ani śledzących.
            </li>
            <li>
              Użytkownik ma możliwość ograniczenia lub wyłączenia dostępu plików cookies do
              swojego urządzenia za pomocą ustawień przeglądarki internetowej. Ograniczenie
              stosowania plików cookies może jednak wpłynąć na niektóre funkcjonalności
              dostępne na stronie.
            </li>
            <li>
              Więcej informacji na temat zarządzania plikami cookies można znaleźć w sekcji „Pomoc” w menu przeglądarki internetowej.
            </li>
          </ol>
          <li>Postanowienia końcowe</li>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności w
            przypadku zmian przepisów prawa lub zmian w funkcjonowaniu serwisu. Data ostatniej
            aktualizacji: 1.01.2026 r.
          </p>
        </ol>
        <a className="policy-return-link" href="/">Powrót do strony głównej</a>
      </div>
    </main>
  );
}