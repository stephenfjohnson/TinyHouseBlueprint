export default () => (
  <section className="search">
    <div className="wrapper">
      <div className="card-wrapper">
        <div className="card" id="contemporary">
          <div className="card-title-wrapper">
            <h3>Contemporary</h3>
          </div>
        </div>
        <div className="card" id="modern">
          <div className="card-title-wrapper">
            <h3>Modern</h3>
          </div>
        </div>
        <div className="card" id="rustic">
          <div className="card-title-wrapper">
            <h3>Rustic</h3>
          </div>
        </div>
    </div>
  </div>
    <style jsx>{`
      section.search {
        position: relative;
        margin-top: -150px;
      }
      .wrapper {
  max-width: 1020px;
  width: 100%;
  margin: 0 auto; }
  .wrapper .card-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; }
    .wrapper .card-wrapper .card {
      position: relative;
      display: flex;
      align-items: flex-end;
      flex: 1 100%;
      box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.09);
      max-width: 300px;
      width: 100%;
      height: 300px;
      background: white;
      color: black;
      border-radius: 5px;
      margin-bottom: 60px; }
      .wrapper .card-wrapper .card#contemporary {
        background: url(../static/contemporary-1.jpg) no-repeat center center;
        background-size: cover; }
      .wrapper .card-wrapper .card#modern {
        background: url(../static/modern-2.jpg) no-repeat center center;
        background-size: cover; }
      .wrapper .card-wrapper .card#rustic {
        background: url(../static/rustic-1.jpg) no-repeat center center;
        background-size: cover; }
      .wrapper .card-wrapper .card .card-title-wrapper {
        width: 100%;
        background-image: radial-gradient(50% 100%, #414141 0%, #000000 100%);
        padding: 20px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        color: #FFF; }
        .wrapper .card-wrapper .card .card-title-wrapper h3 {
          font-weight: 400;
          letter-spacing: 2px;
          margin: 0; }
    `}</style>
  </section>
)
