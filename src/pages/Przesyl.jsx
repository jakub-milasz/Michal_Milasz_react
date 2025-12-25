import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";
import { useEffect, useRef } from "react";

export default function Przesyl() {
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
        <div className="przesyl">
          <h2>Infrastruktura przesyłowa na Twoim gruncie – zadbaj o należne wynagrodzenie</h2>
          <p>
            Przez wiele prywatnych posesji przebiegają linie energetyczne, gazociągi, wodociągi czy
            kable telekomunikacyjne. Choć infrastruktura ta jest niezbędna społecznie, dla właściciela
            działki stanowi realne obciążenie – obniża wartość nieruchomości, utrudnia zabudowę, a
            czasem wręcz uniemożliwia swobodne korzystanie z terenu. Wielu właścicieli nie jest
            świadomych, że za obecność tych urządzeń przysługuje im rekompensata finansowa. Nasza
            Kancelaria skutecznie pomaga w wyegzekwowaniu należnych kwot od przedsiębiorstw
            przesyłowych (zakłady energetyczne, gazownie, wodociągi).
          </p>
          <h3>Wynagrodzenie za bezumowne korzystanie (za przeszłość)</h3>
          <p>
            Jeżeli urządzenia zostały posadowione na Państwa działce bez zgody lub bez ważnej decyzji
            administracyjnej, a przedsiębiorstwo nie płaciło czynszu dzierżawnego, mogą Państwo żądać
            pieniędzy za okres wsteczny. Pomagamy w dochodzeniu <b>wynagrodzenia za bezumowne
            korzystanie z nieruchomości</b>, które zazwyczaj obejmuje okres do 10 lat wstecz (w
            niektórych przypadkach 6 lat).
          </p>
          <h3>Ustanowienie służebności przesyłu (na przyszłość)</h3>
          <p>
            Drugim filarem naszych działań jest uregulowanie stanu prawnego na przyszłość poprzez <b>ustanowienie służebności przesyłu</b>. Dążymy do zawarcia umowy (lub uzyskania orzeczenia
            sądowego), na mocy której przedsiębiorca uzyskuje prawo dostępu do urządzeń, ale w
            zamian ma obowiązek wypłacić właścicielowi <b>odpowiednie wynagrodzenie</b> (jednorazowe
            lub okresowe). Kwota ta ma rekompensować trwale ograniczone prawo własności i obniżoną
            wartość rynkową działki.
          </p>
          <h3>Skuteczna walka z monopolem</h3>
          <p>
            Przedsiębiorstwa przesyłowe często odmawiają wypłat, powołując się na zasiedzenie
            służebności. Nasza Kancelaria przeprowadza szczegółową analizę historyczno-prawną, by
            podważyć te twierdzenia. Współpracujemy z rzeczoznawcami majątkowymi, aby precyzyjnie
            wyliczyć kwoty, o które warto walczyć. Reprezentujemy Klientów w negocjacjach
            ugodowych oraz w sporach sądowych.
          </p>
          <p>
            Nie warto godzić się, by słupy czy rury na działce generowały straty. Zapraszamy do kontaktu w celu analizy sprawy.
          </p>
        </div>
      </main>   
      <Tiles />
      <Contact />
    </>
  );
}
