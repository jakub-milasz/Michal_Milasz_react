import Header from "../components/Header";
import Contact from "../components/Contact";
import Tiles from "../components/Tiles";import { useEffect, useRef } from "react";

export default function Cywilne() {
  return (
    <>
      <Header />
      <main>
        <div className="cywilne">
          <h2>Prawo Cywilne – wszechstronna pomoc w sprawach codziennych i majątkowych</h2>
          <p>
            Prawo cywilne to najszersza dziedzina prawa, regulująca relacje, z  którymi stykamy się
            każdego dnia – od życia rodzinnego, przez sprawy własnościowe, aż po sytuacje kryzysowe
            wymagające naprawienia szkody. Poza szczególnie ważnymi dla nas obszarami prawa
            cywilnego takimi jak: prawo spadkowe, bankowe czy gospodarcze, zapewniamy
            profesjonalne wsparcie prawne także w innych kluczowych obszarach, reprezentując
            Klientów zarówno na etapie przedsądowym, jak i na sali rozpraw.
          </p>
          <h3>Nieruchomości i prawa konsumenta</h3>
          <p>
            Ważnym filarem naszej działalności jest <b>prawo nieruchomości</b>. Pomagamy uregulować
            skomplikowane stany prawne gruntów i budynków. Prowadzimy postępowania o
            <b>zasiedzenie</b>, pozwalające usankcjonować wieloletnie posiadanie nieruchomości, oraz sprawy
            o <b>rozgraniczenie</b>, gdy przebieg granic działki jest sporny.
          </p>
          <p>
            Stoimy również na straży praw słabszych uczestników rynku. W ramach <b>prawa konsumenckiego</b> doradzamy w sporach z nieuczciwymi sprzedawcami i usługodawcami,
            analizując umowy pod kątem klauzul niedozwolonych i dochodząc roszczeń z tytułu rękojmi
            czy gwarancji.
          </p>
          <h3>Rodzina, odszkodowania i dobra osobiste</h3>
          <p>
            Rozumiemy, jak delikatnej materii dotyka <b>prawo rodzinne</b>. Z empatią i dyskrecją
            przeprowadzamy Klientów przez sprawy o <b>rozwód</b>, dążąc do zabezpieczenia ich interesów
            majątkowych i osobistych. Pomagamy uregulować kwestie <b>władzy rodzicielskiej</b> oraz
            ustalić lub zmienić zasady <b>kontaktów z dzieckiem</b>, zawsze mając na uwadze dobro
            małoletnich.
          </p>
          <p>
            Skutecznie walczymy także o rekompensatę za doznane krzywdy. Prowadzimy sprawy o
            wypłatę <b>odszkodowania</b> (za szkody majątkowe) i <b>zadośćuczynienia</b> (za krzywdy
            niemajątkowe, np. błędy w sztuce lekarskiej, wypadki). Ponadto, w dobie powszechnego
            przepływu informacji, zapewniamy wsparcie w zakresie <b>ochrony dóbr osobistych</b>, reagując
            na naruszenia dobrego imienia, czci czy prywatności.
          </p>
          <p>
            Zapraszamy do kontaktu w celu omówienia Państwa sprawy.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}
