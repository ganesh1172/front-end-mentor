import CountryFilters from "./components/CountryFilters";
import CountryLists from "./components/CountryLists";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-DARKEBONYCLAY">
      <div className="w-full min-h-screen">
        <NavBar />
        <CountryFilters />
        <CountryLists />
      </div>
    </div>
  );
}

export default App;
