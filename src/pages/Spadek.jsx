import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";
import { useEffect, useRef } from "react";


export default function Spadek() {
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
     <Header/>
      <main ref={mainRef}>
        <div className="spadek">
          <h2>Sprawy spadkowe – bezpieczeństwo prawne i wsparcie w
              trudnym czasie</h2>
          <p>
            Śmierć bliskiej osoby to zawsze trudne doświadczenie. Niestety, jest to również moment, w
            którym konieczne staje się dopełnienie wielu formalności prawnych. Przepisy prawa
            spadkowego bywają skomplikowane, a emocje towarzyszące sprawom rodzinnym często
            utrudniają racjonalne decyzje. Nasza Kancelaria oferuje kompleksową pomoc prawną,
            przejmując na siebie ciężar prowadzenia spraw urzędowych i sądowych, co pozwala
            Klientom skupić się na tym, co najważniejsze.
          </p>
          <h3>Uporządkowanie spraw po zmarłym</h3>
          <p>
            Pomagamy w podstawowych procedurach związanych z potwierdzeniem praw do spadku.
            Reprezentujemy Klientów w postępowaniach o <b>stwierdzenie nabycia spadku</b> przed sądem
            oraz asystujemy przy uzyskiwaniu notarialnego <b>aktu poświadczenia dziedziczenia</b>.
          </p>
          <p>
            Kluczowym aspektem naszej pracy jest dbałość o bezpieczeństwo finansowe spadkobierców.
            Doradzamy, w jakiej formie przyjąć spadek (wprost czy z dobrodziejstwem inwentarza), a w
            przypadku zadłużenia zmarłego – pomagamy w terminowym <b>odrzuceniu spadku</b>, chroniąc
            majątek prywatny Klienta przed wierzycielami.
          </p>
          <h3>Zachowek i dział spadku</h3>
          <p>
            Wiele spraw spadkowych wiąże się z konfliktami rodzinnymi. Specjalizujemy się w
            dochodzeniu roszczeń o <b>zachowek</b> – instytucji chroniącej bliskich pominiętych w
            testamencie. Obliczamy wysokość należnego świadczenia i skutecznie egzekwujemy je od
            spadkobierców testamentowych. Równie często prowadzimy sprawy o <b>dział spadku</b>. Kiedy
            współwłaściciele nie mogą dojść do porozumienia co do podziału majątku (nieruchomości,
            oszczędności), dążymy do wypracowania ugody lub reprezentujemy interesy Klienta w
            sądzie, walcząc o sprawiedliwe rozliczenie nakładów i podział aktywów.
          </p>
          <h3>Testamenty i planowanie spadkowe</h3>
          <p>
            Działamy również prewencyjnie. Doradzamy, jak sporządzić ważny i skuteczny <b>testament</b>,
            w tym testament z zapisami windykacyjnymi czy wydziedziczeniem, aby wola spadkodawcy
            została w przyszłości w pełni uszanowana.
          </p>
          <p>
            Zapraszamy do kontaktu. Gwarantujemy dyskrecję, taktowne podejście i pełne zaangażowanie w każdą powierzoną sprawę.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}