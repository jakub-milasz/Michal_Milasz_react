import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";
import CookieBanner from "../components/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="strona-glowna">
          <b className="header-with-line"><span>Nasza misja</span></b>
          <p className="underline-paragraph">
            Dążymy do zapewnienia naszym Klientom bezpieczeństwa prawnego, klarowności działań oraz skutecznej reprezentacji. Działamy z pełnym poszanowaniem etyki zawodowej, dbając o poufność i interesy każdej osoby, która powierza nam swoją sprawę.
          </p>
          <b className="underline-text">Dlaczego warto nam zaufać?</b>
          <p>
            <ul className="benefits-list">
              <li>Indywidualne podejście do Klienta</li>
              <li>Profesjonalizm i rzetelność</li>
              <li>Transparentność współpracy</li>
              <li>Skuteczność poparta doświadczeniem</li>
            </ul>
          </p>
          <p className="bottom-text">
            <b>Zapraszamy do kontaktu oraz umówienia spotkania w Kancelarii.</b><br />
            Zaufaj prawnikowi, który stawia Twoje interesy na pierwszym miejscu.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
      <CookieBanner />
      <footer className="footer">
        &copy; 2025 Jakub Milasz. Wszelkie prawa zastrzeżone.
      </footer>
    </>
  );
}
