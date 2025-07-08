export default function Tiles() {
  return (
    <>
    <div className="container">
      <div className="heading" id="specjalizacje">
        <h2 className="heading-text">Specjalizacje</h2>
      </div>
      <div className="banner">
        <nav className="tiles">
          <a className="tile" href="spadek">
            Prawo bankowe
          </a>
          <a className="tile" href="rozwod">
            Prawo cywilne
          </a>
          <a className="tile" href="kredyty">
            Prawo spadkowe<br />i pożyczki
          </a>
          <a className="tile" href="umowy">
            Prawo umów
          </a>
          <a className="tile" href="firma">
            Prawo gospodarcze
          </a>
          <a className="tile" href="inne">
            Inne sprawy
          </a>
        </nav>
      </div>
    </div>
    </>
  );
}
