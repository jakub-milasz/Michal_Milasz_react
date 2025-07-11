import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="strona-glowna">
          <b>
            Zaufanie. Doświadczenie. Skuteczność.
          </b>
          <p>
            W prowadzonej przeze mnie Kancelarii Adwokackiej łączymy wiedzę prawniczą z indywidualnym podejściem do każdej sprawy. Reprezentujemy Klientów z pełnym zaangażowaniem, oferując kompleksową pomoc prawną w zakresie prawa cywilnego, karnego, rodzinnego, gospodarczego oraz administracyjnego.
          </p>
          <b>Nasza misja</b>
          <p>
            Dążymy do zapewnienia naszym Klientom bezpieczeństwa prawnego, klarowności działań oraz skutecznej reprezentacji. Działamy z pełnym poszanowaniem etyki zawodowej, dbając o poufność i interesy każdej osoby, która powierza nam swoją sprawę.
          </p>
          <b>Dlaczego warto nam zaufać?</b>
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
      <footer class="footer">
        &copy; 2025 Jakub Milasz. Wszelkie prawa zastrzeżone.
      </footer>
    </>
  );
}
