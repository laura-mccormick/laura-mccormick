import dogBanner from "./assets/dogbanner.gif";
import simpleThings from "./assets/simplethings.gif";
import pixelCoffee from "./assets/pixelcoffee.webp";
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
          <img src={simpleThings} alt="It's the simple things" />
          <h2 style={{ color: "darksalmon" }}>Welcome to my page!!</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
