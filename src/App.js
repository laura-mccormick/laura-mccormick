import dogBanner from "./assets/dogbanner.gif";
import simpleThings from "./assets/simplethings.gif";
import pixelCoffee from "./assets/pixelcoffee.webp";
import sparkleShortcake from "./assets/sparkleshortcake.gif";
import iLoveMyHusband from "./assets/ilovemyhusband.gif";
import billCypher from "./assets/billcypher.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <header className="App-header">
          <div>
            <a href="/" style={{ textDecoration: "none" }}>
              Nav 1
            </a>{" "}
            <img
              src={pixelCoffee}
              alt=""
              style={{ marginLeft: "3px", marginRight: "5px" }}
            />
            <a href="/" style={{ textDecoration: "none" }}>
              Nav 2
            </a>{" "}
            <img
              src={pixelCoffee}
              alt=""
              style={{ marginLeft: "3px", marginRight: "5px" }}
            />
            <a href="/" style={{ textDecoration: "none" }}>
              Nav 3
            </a>
          </div>
          <img src={dogBanner} alt="Dog running" />
        </header>

        <div className="App-text">
          <h1 style={{ color: "lightsalmon" }}>Laura McCormick</h1>
          <div id="blinkies">
            <img src={simpleThings} alt="It's the simple things" />
            <img src={iLoveMyHusband} alt="I love my husband" />
            <img src={billCypher} alt="Bill Cypher" />
          </div>
          <h2 style={{ color: "darksalmon" }}>Welcome to my page!!</h2>
          <img src={sparkleShortcake} alt="Strawberry Shortcake" />
        </div>
      </div>
    </div>
  );
}

export default App;
