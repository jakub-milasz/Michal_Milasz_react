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
          <div className="row">
            <div className="col">
              <b className="header-with-line"><span>Nasza misja</span></b>
              <p>
                Dążymy do zapewnienia naszym Klientom bezpieczeństwa prawnego oraz skutecznej reprezentacji. Działamy z pełnym poszanowaniem etyki zawodowej, dbając o poufność i interesy każdej osoby, która powierza nam swoją sprawę.
              </p>
            </div>
            <div className="col">
              <b className="header-with-line"><span>Dlaczego warto nam zaufać?</span></b>
              <p>
                <ul className="benefits-list">
                  <li>Indywidualne podejście do Klienta</li>
                  <li>Profesjonalizm i rzetelność</li>
                  <li>Transparentność współpracy</li>
                  <li>Skuteczność poparta doświadczeniem</li>
                </ul>
              </p>
            </div>
          </div>
          <p className="bottom-text">
            <b>Zapraszamy do kontaktu oraz umówienia spotkania w Kancelarii.</b><br />
            Zaufaj prawnikowi, który stawia Twoje interesy na pierwszym miejscu.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
      <CookieBanner />
    </>
  );
}
