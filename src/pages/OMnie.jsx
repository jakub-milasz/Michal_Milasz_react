import Header from "../components/Header";
import Contact from "../components/Contact";
import Tiles from "../components/Tiles";
import profilowe from "../img/profilowe.jpg";
import { useEffect, useRef } from "react";

export default function OMnie() {
  return (
    <>
      <Header />
      <main>
        <div className="o-mnie">
          <img src={profilowe} alt="Zdjęcie profilowe" />
          <div className="text">
            <u className="o-mnie-heading">Wykształcenie:</u>
            <p>
              Jestem adwokatem oraz absolwentem prawa Uniwersytetu Jagiellońskiego. Swoją pracę magisterską, tworzoną pod okiem prof. Mirosława Steca, obroniłem w Katedrze Prawa Gospodarczego.
            </p>
            <p>
              Ukończyłem także studia podyplomowe na Uniwersytecie Jagiellońskim z zakresu prawa umów w obrocie konsumenckim i profesjonalnym, które prowadzone były przez uznanych prawników – wykładowców akademickich, adwokatów, sędziów Sądu Najwyższego oraz byłych sędziów Trybunału Konstytucyjnego.
            </p>
            <p>
              Ukończyłem kurs London ICCA Training on Advocacy Skills by Hampel Method, prowadzony przez londyńskich adwokatów, mający na celu doskonalenie umiejętności prawniczych.
            </p>
            <p>
              Ukończyłem także Akademię Prawa Gospodarczego prowadzoną przez znaną
              kancelarię prawną SPCG - T.&nbsp;Studnicki, K.&nbsp;Płeszka,
              Z.&nbsp;Ćwiąkalski, J.&nbsp;Górski sp.k., w której odbywałem również
              praktyki.
            </p>
            <u className="o-mnie-heading">Doświadczenie:</u>
            <p>
              Specjalizuję się w prawie cywilnym, w tym w szczególności prawie
              bankowym i konsumenckim. W swojej dotychczasowej karierze zawodowej
              sporządziłem setki pism procesowych i opinii prawnych w zakresie:
            </p>
            <ul>
              <li>
                stwierdzenia bezskuteczności niedozwolonych postanowień zawartych
                w umowach pożyczek;
              </li>
              <li>
                odzyskiwania zwrotu części prowizji dla konsumenta za wcześniejszą
                spłatę kredytu;
              </li>
              <li>unieważniania tzw. kredytów frankowych;</li>
            </ul>

            <p>
              <b>Doradzam przedsiębiorcom</b> – spółkom kapitałowym i osobowym, jak również jednoosobowym działalnościom gospodarczym, głównie w zakresie:
            </p>
            <ul>
              <li>
                sporządzania regulaminów i polityki prywatności (RODO, pliki cookies);
              </li>
              <li>
                analizy umów z zakresu finansowania inwestycji, m.in. umów kredytowych, umów cesji wierzytelności;
              </li>
              <li>
                prowadzenia działań przedsądowych i sądowych mających na celu odzyskanie środków od dłużników;
              </li>
              <li>zakładania działalności gospodarczej w CEIDG;</li>
              <li>
                zakładania spółki lub zmiany umowy spółki;
              </li>
            </ul>
            <p>
              <b>Doradzam osobom fizycznym</b> – posiadam szerokie doświadczenie w
              zakresie spraw spadkowych, działowych, lokatorskich. Wielokrotnie
              zajmowałem się sprawami dotyczącymi:
            </p>
            <ul>
              <li>stwierdzenia nabycia spadku;</li>
              <li>działu spadku i zniesienia współwłasności;</li>
              <li>zasiedzenia nieruchomości;</li>
              <li>opiniowania i sporządzania umów najmu lokalu, sprzedaży mieszkania;</li>
            </ul>
            <u className="o-mnie-heading">Pozostałe informacje o mnie:</u>
            <ul>
              <li>
                Stypendysta Rektora Uniwersytetu Jagiellońskiego dla najlepszych
                studentów
              </li>
              <li>
                Laureat I miejsca w Ogólnopolskim Konkursie Forum Rynków
                Finansowych: Inwestycje, Bankowość &&nbsp;FinTech 2020
              </li>
              <li>Finalista konkursu podatkowego KPMG Tax’n’You 2022</li>
            </ul>
          </div>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}
