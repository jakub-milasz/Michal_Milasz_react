import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";
import { useEffect, useRef } from "react";


export default function Bankowe() {
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
        <div className="bankowe">
          <h2>Spory z bankami i ochrona dłużników</h2>
          <h3 className="suptitle">Odzyskaj pieniądze i spokój</h3>
          <p>
            Relacje na linii kredytobiorca–bank czy kredytobiorca–firma pożyczkowa rzadko są
            równorzędne. Instytucje finansowe często wykorzystują swoją pozycję, stosując w umowach
            zapisy niezgodne z prawem. Nasza Kancelaria skutecznie przywraca równowagę,
            reprezentując interesy kredytobiorców w sporach dotyczących kredytów konsumenckich
            złotówkowych, jak i waloryzowanych do waluty obcej.
          </p>
          <div className="row">
            <div className="col">
              <h3 className="header-with-line"><span>Kredyty „frankowe” – aktywne i spłacone</span></h3>
              <p>
                Głównym filarem naszej praktyki jest pomoc tzw. „frankowiczom”. Prowadzimy sprawy
                dotyczące kredytów waloryzowanych do waluty obcej, dążąc do unieważnienia wadliwych
                umów zawierających klauzule niedozwolone. Co istotne, pomoc prawną oferujemy nie tylko
                posiadaczom <b>czynnych kredytów</b>, ale także osobom, które swoje zobowiązanie już <b>całkowicie spłaciły</b> (zamknęły kredyt). W obu przypadkach walczymy o zwrot nienależnie
                pobranych przez bank środków i definitywne uwolnienie Klienta od toksycznego produktu
                finansowego.
              </p>
            </div>
            <div className="col">
              <h3 className="header-with-line"><span>Pożyczki i kredyty konsumenckie</span></h3>
              <p>
                Analizujemy również umowy kredytów gotówkowych i tzw. „chwilówek” pod kątem <b>klauzul abuzywnych</b>. Często zdarza się, że pożyczkodawcy naliczają rażąco wygórowane <b>prowizje</b> oraz inne pozaodsetkowe koszty kredytu, drastycznie zawyżając rzeczywiste
                zadłużenie. W takich sytuacjach dążymy do odzyskania nadpłaconych kwot.
              </p>
              <h3 className="header-with-line"><span>Nakaz zapłaty – skuteczna obrona</span></h3>
              <p>
                Otrzymanie sądowego <b>nakazu zapłaty</b> wymaga natychmiastowej reakcji, bowiem termin
                wynosi zazwyczaj tylko 14 dni. Zapewniamy profesjonalną ochronę procesową osobom
                pozwanym przez banki, firmy pożyczkowe i fundusze sekurytyzacyjne. Terminowo wnosimy
                sprzeciwy, podważając zasadność roszczeń lub wysokość długu, co pozwala zablokować
                egzekucję komorniczą i obronić majątek dłużnika.
              </p>
            </div>
          </div>
          <p>
            Zapraszamy do kontaktu w celu bezpłatnej wstępnej analizy Państwa umowy lub otrzymanego nakazu zapłaty.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}
