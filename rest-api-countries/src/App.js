import { useState } from "react";
import "./App.css";
import CountryFilters from "./components/CountryFIlters";
import CountryLists from "./components/CountryLists";
import "./data.json";

function App() {
  const [country, setCountry] = useState([]);
  return (
    <div className="container">
      <nav>
        <h3 className="nav-title">Where in the world?</h3>
        <p>Dark Mode</p>
      </nav>
      <CountryFilters />
      <CountryLists />
    </div>
  );
}

export default App;
