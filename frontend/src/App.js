import './App.css';
import BalanceCard from "./containers/home/balance-card";
import DateCard from "./containers/home/date-card";
import CategoryCard from "./containers/home/category-card";
import Collapsible from "./components/collapsible/Collapsible";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
        <div className="cardRow">
            <BalanceCard />
            <DateCard />
        </div>
            <CategoryCard/>
        </div>
      </header>
    </div>
  );
}

export default App;
