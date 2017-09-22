export default ({ children }) => (
  <div>
    {children}
    <style jsx global>{`
      @font-face {
        font-family: 'lunar_eclipse';
        src: url("../static/fonts/lunar_eclipse-webfont.woff2") format("woff2"), url("../static/fonts/lunar_eclipse-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }
      * {
        font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
      }
      body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
      }
      button {
        align-items: center;
        border: 0;
        color: white;
        display: flex;
        border-radius: 5px;
      }
      button:active {
        background-color: #1B9DB7;
        transition: background-color .3s
      }
      button:focus {
        outline: none;
      }
    `}</style>
  </div>
)
