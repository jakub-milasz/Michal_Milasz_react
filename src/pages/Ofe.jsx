import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";

export default function Ofe() {
  return (
    <>
      <Header />
      <main>
        <div className="ofe">
          <p>
            Jeżeli Twój bliski był członkiem Otwartego Funduszu Emerytalnego (OFE) i zmarł przed przejściem na emeryturę lub pobierał świadczenie emerytalne nie dłużej niż 3 lata, wówczas istnieje szansa na odzyskanie znacznej części środków wpłaconych do OFE.
          </p>
          <p>
            Przeciętna wypłata to ok. 29 000 zł.
          </p>
          <p>
            Z uwagi na znaczną liczbę warunków, które muszą być spełnione, aby wystąpić o wypłatę środków, zachęcamy do kontaktu, w celu szczegółowego przeanalizowania sprawy.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}
