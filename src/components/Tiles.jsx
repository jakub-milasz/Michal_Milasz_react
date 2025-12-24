export default function Tiles() {
  return (
    <>
    <div className="container">
      <div className="heading" id="specjalizacje">
        <h2 className="heading-text">Specjalizacje</h2>
      </div>
      <div className="banner">
        <nav className="tiles">
          <a className="tile" href="bankowe">
            Prawo bankowe
          </a>
          <a className="tile" href="cywilne">
            Prawo cywilne
          </a>
          <a className="tile" href="spadek">
            Prawo spadkowe
          </a>
          <a className="tile" href="gospodarcze">
            Prawo gospodarcze
          </a>
          <a className="tile" href="przesyl">
            Odszkodowania<br />za przesył
          </a>
          <a className="tile" href="ofe">
            Zwrot pieniędzy<br />z OFE
          </a>
        </nav>
      </div>
      <p className="spec-bottom">Zachęcamy do kontaktu także w sprawach spoza wskazanych wyżej dziedzin.</p>
    </div>
    </>
  );
}
