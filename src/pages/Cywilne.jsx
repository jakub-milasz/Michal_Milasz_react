import Header from "../components/Header";
import Contact from "../components/Contact";
import Tiles from "../components/Tiles";import { useEffect, useRef } from "react";

export default function Cywilne() {
  return (
    <>
      <Header />
      <main>
        <div className="cywilne">
          <p>
            Specjalizuję się w szeroko pojętym prawie cywilnym. Poza prawem bankowym, spadkowym czy gospodarczym, prowadzę również sprawy z zakresu:
          </p>
          <ul>
            <li>prawa nieruchomości, w tym m.in. o zasiedzenie i rozgraniczenie;</li>
            <li>prawa rodzinnego, w tym. m.in. o rozwód, o zmianę kontaktów z dzieckiem, o ograniczenie władzy rodzicielskiej;</li>
            <li>prawa konsumenckiego;</li>
            <li>roszczeń o odszkodowanie i zadośćuczynienie;</li>
            <li>roszczeń o ochronę dóbr osobistych;</li>
          </ul>
          <p>
            W celu dokładnej analizy Twojej sprawy, zachęcam do kontaktu.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}
