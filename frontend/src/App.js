import './App.css';
import BalanceCard from "./containers/home/balance-card";
import DateCard from "./containers/home/date-card";
import GoalsCard from "./containers/home/goals-card";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
        <div className="cardRow">
            <BalanceCard />
            <DateCard />
        </div>
            <div className={"rightAlign"}>
                <GoalsCard />
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
