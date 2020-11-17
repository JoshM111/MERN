import logo from './logo.svg';
import './App.css';
import Hook from './Components/hook';

function App() {
  return (
    <div className="App">
      <form>
        First Name <input type="text" value="F_name"></input>
        Last Name <input type="text" value="F_name"></input>
        Email <input type="email" value="email"></input>
        Password <input type="text" value="pword"></input>
        Confirm Password <input type="text" value="cword"></input>
      </form>
      
    </div>
  );
}

export default App;
