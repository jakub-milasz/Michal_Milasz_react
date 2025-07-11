import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";

export default function Spadek() {
  return (
    <>
     <Header/>
      <main>
        <div className="spadek">
          <p>Postępowanie dotyczące majątku spadkowego co do zasady można podzielić na dwa etapy:</p>
          <ol>
            <u><li>Stwierdzenie nabycia spadku</li></u>
            <p>Postępowanie o stwierdzenie nabycia spadku ma na celu ustalenie kto dziedziczy po zmarłym i w jakiej części. Na tym etapie Sąd bada też ważność testamentu, jeżeli takowy został sporządzony. Sąd co do zasady nie ustala w tym postępowaniu, co wchodzi w skład majątku spadkowego.</p>
            <p>Sprawa kończy się wydaniem postanowienia o stwierdzeniu nabycia spadku. Jest to dokument konieczny między innymi, aby dokonać zmian w księdze wieczystej, sprzedać samochód lub nieruchomość.</p>
            <p>Zamiast drogi sądowej można wybrać drogę notarialną. Notariusz, podobnie jak sąd, ustali spadkobierców i ich udziały, a następnie sporządzi akt poświadczenia dziedziczenia. Moc prawna takiego aktu jest równa mocy postanowienia sądu o stwierdzeniu nabycia spadku.</p>
            <p>Po uzyskaniu postanowienia o stwierdzeniu nabycia spadku lub aktu poświadczenia dziedziczenia konieczne jest dokonanie zgłoszenia w urzędzie skarbowym.</p>
            <u><li>Dział spadku</li></u>
            <p>Jeżeli spadek dziedziczy więcej niż jedna osoba, często konieczne jest dokonanie również działu spadku. Celem tego postępowania jest ustalenie co wchodzi w skład spadku (np. ruchomości, nieruchomości, przedsiębiorstwo, prawa autorskie), a następnie jego podział stosownie do udziałów poszczególnych spadkobierców.</p>
            <p>Sprawa kończy się wydaniem postanowienia o dziale spadku. Dokument ten wyraźnie opisuje, co otrzymuje każdy ze spadkobierców.</p>
            <p>Również w tej sprawie można udać się do notariusza w celu sporządzenia odpowiedniej umowy. Z takiej możliwości mogą skorzystać tylko spadkobiercy, którzy są zgodni co do podziału majątku spadkowego. W przypadku, gdy istnieją jakiekolwiek spory, właściwym trybem jest wyłącznie tryb sądowy.</p>
          </ol>
          <p className="bottom-text">Podczas naszej rozmowy doradzę, która droga będzie najlepsza z punktu widzenia Twojej sprawy. Przedstawię cały proces, wysokość opłat sądowych i szacowany czas rozstrzygnięcia.</p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}