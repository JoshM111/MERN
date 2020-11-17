import logo from './logo.svg';
import PersonCard from './Components/big_inversion'
import './App.css';

function App() {
  return (
<div className="App">
      <div className="App">
        <PersonCard
          lastName={"Marson"}
          firstName={"Josh"}
          age={30}
          hair={"black"}
        />
        <PersonCard
          lastName={"West"}
          firstName={"Adam"}
          age={57}
          hair={"none"}
        />
        <PersonCard
          lastName={"Man"}
          firstName={"Bat"}
          age={42}
          hair={"black"}
        />
        <PersonCard
          lastName={"Woman"}
          firstName={"Wonder"}
          age={203}
          hair={"black"}
        />
      </div>
    </div>
  );
}

export default App;
