import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="strona-glowna">
          <p>
            Pierwszy raz korzystasz z pomocy prawnika? Sprawdź ofertę dla siebie!
          </p>
          <p>
            Masz problem, który chcesz skonsultować z prawnikiem? Nie chcesz
            umawiać się na wizytę w tradycyjnej, stacjonarnej kancelarii? Obawiasz
            się o kwotę, jaką przyjdzie Ci zapłacić po wizycie?
          </p>
          <p>Znalazłem rozwiązanie dla takich osób jak Ty!</p>
          <p>Proponuję rozmowę online! Zasady są proste:</p>
          <ol>
            <li>
              Wysyłasz maila na adres michal.milasz@adwokatura.pl w którym
              opisujesz problem, dołączasz dokumenty, które chcesz abym
              przeanalizował i podajesz dogodny dla Ciebie termin rozmowy.
            </li>
            <li>
              W odpowiedzi prześlę Ci szczegóły dotyczące rozmowy wraz z ceną za
              konsultację, która na pewno nie ulegnie zmianie.
            </li>
            <li>
              Jeśli zaakceptujesz warunki, ja ruszam do pracy! - na podstawie
              otrzymanych od Ciebie informacji i dokumentów przygotowuję się do
              rozmowy tak, aby w trakcie spotkania rozmawiać o samych konkretach!
            </li>
            <li>
              Podczas naszej rozmowy przedstawię sytuację prawną, odpowiem na
              Twoje pytania oraz udzielę Ci informacji jakie dalsze kroki możesz
              podjąć (samodzielnie, z moją pomocą lub z pomocą osób, z którymi
              współpracuję);
            </li>
            <li>Masz problem z głowy!</li>
          </ol>
        </div>
      </main>
      <Tiles />
      <Contact />
      <footer class="footer">
        &copy; 2025 Jakub Milasz. Wszelkie prawa zastrzeżone.
      </footer>
    </>
  );
}
