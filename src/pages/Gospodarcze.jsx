import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";
import { useEffect, useRef } from "react";


export default function Gospodarcze() {
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
        <div className="gospodarcze">
          <h2>Kompleksowe wsparcie prawne dla biznesu – od startu po rozwój</h2>
          <p>
            Prowadzenie firmy w gąszczu dynamicznie zmieniających się przepisów wymaga solidnego
            zaplecza merytorycznego. Nasza Kancelaria od kilku lat jest zaufanym partnerem dla
            podmiotów gospodarczych, zapewniając bezpieczeństwo prawne i stabilność niezbędną do
            rozwoju przedsiębiorstwa. Oferujemy kompleksową obsługę, dostosowaną zarówno do
            potrzeb doświadczonych firm, jak i osób dopiero wkraczających na rynek.
          </p>
          <h3>Bezpieczeństwo umów i dokumentacji (RODO, E-commerce)</h3>
          <p>
            Fundamentem naszej działalności jest doradztwo w zakresie bieżącego funkcjonowania
            firmy. Doskonale wiemy, że dobrze skonstruowany kontrakt to podstawa udanej współpracy,
            dlatego przeprowadzamy szczegółową <b>analizę zawieranych umów</b>, eliminując ryzyka i
            niekorzystne klauzule.
          </p>
          <p>
            Wspieramy przedsiębiorców w spełnianiu wymogów formalnych – tworzymy i wdrażamy <b>regulaminy</b> świadczenia usług, <b>polityki prywatności</b> oraz pełną dokumentację z zakresu
            ochrony danych osobowych <b>(RODO)</b> i plików cookies. Gdy pojawiają się zatory płatnicze,
            działamy stanowczo – zajmujemy się skuteczną <b>windykacją należności</b> od nierzetelnych
            kontrahentów, dbając o płynność finansową naszych Klientów.
          </p>
          <h3>Wsparcie na starcie – zakładanie działalności</h3>
          <p>
            Ze szczególną uwagą podchodzimy do osób planujących założenie własnego biznesu.
            Pomagamy podjąć kluczowe decyzje na samym początku drogi. Udzielamy wsparcia
            merytorycznego przy wyborze <b>formy opodatkowania</b> najlepiej dopasowanej do specyfiki
            planowanej działalności. Analizujemy możliwości optymalizacji kosztów, wskazując, kiedy
            warto skorzystać z preferencyjnych składek ZUS, takich jak <b>„ulga na start”</b> czy <b>„mały
            ZUS”</b>.
          </p>
          <p>
            Przeprowadzamy Klienta przez proces formalny – pomagamy we właściwym zgłoszeniu
            działalności w <b>CEIDG</b>, a w przypadku większych przedsięwzięć kompleksowo zajmujemy
            się procedurą <b>zakładania i rejestracji spółek</b> prawa handlowego.
          </p>
          <h3>Reprezentacja sądowa</h3>
          <p>
            Jesteśmy z naszymi Klientami także w sytuacjach konfliktowych. Kiedy negocjacje nie
            przynoszą rezultatu, zapewniamy profesjonalną <b>reprezentację firm w sporach sądowych</b>,
            broniąc interesów przedsiębiorstwa na każdym etapie postępowania.
          </p>
          <p>Zapraszamy do kontaktu – powierz prawne aspekty swojego biznesu profesjonalistom.</p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}
