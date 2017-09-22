export default () => (
  <section className="search-buttons">
    <div className="wrapper">
      <div className="buttons">
        <h3>Filters:</h3>
        <button>🌴Contemporary</button>
        <button>🌲Rustic</button>
        <button>🍸Modern</button>
      </div>
      <hr/>
      <div className="buttons">
        <h3>Sort By:</h3>
        <button>📘Blueprint</button>
        <button>🏡Inspiration</button>
      </div>
    </div>
    <style jsx>{`
      section.search-buttons {
  position: relative;
  margin-bottom: 60px; }
  section.search-buttons .wrapper {
    max-width: 1020px;
    width: 100%;
    margin: 0 auto;
    background-color: #FBFBFB;
    border: 1px solid #EDEDED;
    border-radius: 5px; }
    section.search-buttons .wrapper h3 {
      font-size: 1.2rem;
      letter-spacing: 1px;
      font-weight: 400; }
    section.search-buttons .wrapper .buttons {
      display: flex;
      align-items: center;
      margin: 10px 20px; }
      section.search-buttons .wrapper .buttons button {
        background: #FFF;
        border: 1px solid #EDEDED;
        border-radius: 5px;
        margin: 0 10px;
        color: #000;
        letter-spacing: 4px;
        text-transform: capitalize;
        padding: 10px 20px;
        font-size: 14px; }
        section.search-buttons .wrapper .buttons button:hover {
          background-color: #f2f2f2; }
    section.search-buttons .wrapper hr {
      width: 80%;
      margin: 0 auto;
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #EDEDED;
      padding: 0; }
    `}</style>
  </section>
)
