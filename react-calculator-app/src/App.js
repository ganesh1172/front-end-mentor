import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="result">
        <h1>3444</h1>
      </div>
      <div className="main">
        <div className="row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>DEL</button>
        </div>
        <div className="row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div className="row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div className="row">
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>x</button>
        </div>
        <div className="row">
          <button>RESET</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
