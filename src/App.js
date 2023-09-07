//import logo from './logo.svg';
import './App.css';
import './Grades.css';
import Header from './Components/Header';
import { Login } from './Login';
import { Grades } from './Grades';


function App() {
  return (
    <div className="App">
     
      <Login></Login>
      <Grades></Grades>
    </div>
  );
}

export default App;
