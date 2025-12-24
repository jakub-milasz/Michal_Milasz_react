import Header from "../components/Header";
import Tiles from "../components/Tiles";
import Contact from "../components/Contact";

export default function Ofe() {
  return (
    <>
      <Header />
      <main>
        <div className="ofe">
          <h3>Zwrot środków z OFE przekazanych do ZUS – pieniądze Twoich bliskich nie przepadły</h3>
          <p>
            Jeżeli Twój bliski był członkiem Otwartego Funduszu Emerytalnego (OFE) i zmarł przed
            przejściem na emeryturę lub pobierał świadczenie emerytalne nie dłużej niż 3 lata, wówczas
            istnieje szansa na odzyskanie znacznej części środków wpłaconych do OFE.
          </p>
          <p>
            Wielokrotne reformy systemu emerytalnego w Polsce wprowadziły chaos informacyjny i
            niepewność wśród ubezpieczonych. Kluczowym momentem była nowelizacja przepisów z
            2014 roku, w wyniku której znaczna część aktywów zgromadzonych w OFE została
            przekazana do ZUS. Wielu Polaków do dziś żyje w przekonaniu, że środki te bezpowrotnie
            przepadły na rzecz budżetu państwa. Rzeczywistość prawna wygląda jednak inaczej, a nasza
            Kancelaria skutecznie pomaga w odzyskaniu należnych świadczeń.
          </p>
          <h3>Gdzie trafiły pieniądze?</h3>
          <p>
            Środki przetransferowane z OFE do ZUS nie trafiły do tzw. I filaru, lecz zostały zapisane na
            specjalnym, indywidualnym <b>subkoncie ubezpieczonego w ZUS</b>. To fundamentalna różnica.
            Środki zgromadzone na subkoncie – w przeciwieństwie do tych na koncie głównym –
            podlegają <b>dziedziczeniu</b> w przypadku śmierci ubezpieczonego.
            Mimo jasnych przepisów, procedura odzyskiwania tych funduszy przez spadkobierców lub
            osoby uposażone bywa skomplikowana. ZUS nie zawsze z urzędu informuje uprawnionych
            o możliwości wypłaty, a procedury biurokratyczne oraz niejasne terminy przedawnienia
            często skutkują odmową wypłaty należnych pieniędzy.
          </p>
          <h3>Jak pomagamy?</h3>
          <p>
            Nasza Kancelaria specjalizuje się w sprawach z zakresu ubezpieczeń społecznych, ze
            szczególnym uwzględnieniem zwrotu środków z OFE. Oferujemy kompleksową pomoc
            prawną obejmującą:
            <ol>
              <li><b>analizę prawną sytuacji:</b> Weryfikujemy stan subkonta w ZUS oraz historię
              przekazywania składek z OFE. Sprawdzamy, czy wszystkie środki zostały
              prawidłowo zaewidencjonowane i zwaloryzowane.</li>
              <li><b>dochodzenie roszczeń:</b> Reprezentujemy spadkobierców i osoby uposażone w
              procesie o wypłatę środków zgromadzonych na subkoncie zmarłego członka OFE.
              Pomagamy w kompletowaniu dokumentacji i składaniu wniosków o wypłatę tzw.
              kwoty gwarantowanej.</li>
              <li><b>reprezentację procesową:</b> W przypadku wydania przez ZUS decyzji odmownej,
              sporządzamy odpowiednie pisma procesowe oraz reprezentujemy Klienta na każdym
              etapie postępowania sądowego.</li>
            </ol>
          </p>
          <h3>Dlaczego warto działać?</h3>
          <p>
            Środki z OFE przekazane na subkonto w ZUS to realny majątek, który wypracowali Twoi
            bliscy. Często są to kwoty rzędu kilkudziesięciu tysięcy złotych, które niesłusznie pozostają

            w dyspozycji organu rentowego. Przeciętna wypłata wynosi ok. 29 000 złotych.
            Skomplikowany język decyzji administracyjnych nie powinien być przeszkodą w
            dochodzeniu swojej własności.
          </p>
          <p>
            Z uwagi na znaczną liczbę warunków, które muszą być spełnione, aby wystąpić o wypłatę
            środków, zachęcamy do kontaktu, w celu szczegółowego przeanalizowania Państwa sprawy.
          </p>
        </div>
      </main>
      <Tiles />
      <Contact />
    </>
  );
}
