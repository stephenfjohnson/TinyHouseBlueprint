export default () => (
  <div className="card">
    <div className="card-title-wrapper">
      <h3>Test</h3>
    </div>
    <style jsx>{`
      .card {
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
      .card .card-title-wrapper h3 {
          font-weight: 400;
          letter-spacing: 2px;
          margin: 0; }
        .card-wrapper .card.ad {
        border: 1px solid #EDEDED;
        align-items: center; }
        .card.ad a {
          padding: 1rem;
          font-size: 1.2rem;
          letter-spacing: 4px;
          color: #000;
          text-align: center;
          text-decoration: none; }
          .card.ad a:hover {
            text-decoration: line-through; }
    `}</style>
  </div>
)
