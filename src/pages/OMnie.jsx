import Header from "../components/Header";
import Contact from "../components/Contact";
import Tiles from "../components/Tiles";
import profilowe from "../img/profilowe.jpg";
import { useEffect, useRef } from "react";

export default function OMnie() {
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, []);
  return (
    <>
      <Header />
      <main ref={mainRef}>
        <div className="o-mnie">
          <img src={profilowe} alt="Zdjęcie profilowe" />
          <div className="text">
            <b className="o-mnie-heading header-with-line"><span>Wykształcenie</span></b>
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
            <b className="o-mnie-heading header-with-line"><span>Doświadczenie</span></b>
            <p>
              Moja praktyka zawodowa koncentruje się wokół szeroko pojętego prawa cywilnego. Nie jestem teoretykiem – doświadczenie buduję na sali sądowej i w codziennej pracy z dokumentacją prawną. W dotychczasowej karierze sporządziłem tysiące pism procesowych i opinii prawnych, co pozwala mi precyzyjnie formułować argumenty i przewidywać ruchy strony przeciwnej. Setki razy reprezentowałem Klientów przed sądami, skutecznie walcząc o ich interesy w skomplikowanych sporach cywilnych i gospodarczych.
            </p>
            <p>
              Równolegle od 5 lat sprawuję nadzór merytoryczny nad działami prawnymi spółek kapitałowych. Odpowiedzialność ta nauczyła mnie łączyć rygorystyczne wymogi prawne z realiami prowadzenia biznesu. Dzięki temu moi Klienci otrzymują wsparcie, które jest nie tylko zgodne z literą prawa, ale przede wszystkim skuteczne i użyteczne biznesowo.
            </p>
            <b className="o-mnie-heading header-with-line"><span>Pozostałe informacje o mnie</span></b>
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
