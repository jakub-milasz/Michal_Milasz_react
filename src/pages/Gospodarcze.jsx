import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";

export default function Gospodarcze() {
  return (
    <>
      <Header />
      <main>
        <div className="gospodarcze">
          <p>
            Od kilku lat doradzam podmiotom gospodarczym w zakresie analizy zawieranych umów, windykowania należności od nierzetelnych kontrahentów czy tworzenia dokumentów (regulaminy, polityka prywatności, RODO, pliki cookies).
          </p>
          <p>
            Doradzam również osobom chcącym założyć działalność gospodarczą. Udzielam wsparcia merytorycznego zarówno w zakresie wyboru formy opodatkowania i możliwości skorzystania z preferencyjnych składek ZUS (ulga na start, mały ZUS), jak również pomagam we właściwym zgłoszeniu działalności w CEIDG lub zakładaniu spółek.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}
