//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Entry } from './Entry';
import { Login } from './Login';

function App() {
  return (
    <div className="App">
     
      <Login></Login>
      <Header></Header>
      <Entry></Entry>
    </div>
  );
}

export default App;
