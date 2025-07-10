import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";

export default function Umowy() {
  return (
    <>
      <Header />
      <main>
        <div className="umowy">
          <p>
            W celu wyeliminowania jakichkolwiek niepewności związanych z zawarciem umowy, warto przed jej podpisaniem poddać ją szczegółowej, profesjonalnej analizie. Dzięki temu można zapewnić sobie spokój na kolejne miesiące lub lata, bez obaw czy w umowie znajdują się jakiekolwiek „kruczki prawne”.
          </p>
          <p>
            Jeżeli samodzielnie chcemy sporządzić umowę, wówczas również warto skonsultować się z osobami, które zajmują się tym zawodowo. Właściwe zabezpieczenie swoich praw, jak również jasne określenie obowiązków jest kluczowe dla skutecznego realizowania i egzekwowania postanowień umownych.
          </p>
          <p class="bottom-text">
            Podczas konsultacji w sprawie przeanalizowania umowy, zwrócę uwagę na najistotniejsze postanowienia, wskażę na ewentualne zagrożenia, jak również odpowiem na wszelkie pytania i wątpliwości. Na życzenie klienta istnieje możliwość sporządzenia opinii prawnej dotyczącej umowy, jak również możliwość sporządzenia całej umowy.
          </p>
        </div>
      </main>   
      <Tiles />
      <Contact />
    </>
  );
}
