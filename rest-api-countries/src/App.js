import CountryFilters from "./components/CountryFilters";
import CountryLists from "./components/CountryLists";

function App() {
  return (
    <div className="App">
      <nav>
        <h3>Where in the world?</h3>
        <h5>Dark Mode</h5>
      </nav>
      <CountryFilters />
      <CountryLists />
    </div>
  );
}

export default App;
