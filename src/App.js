//import logo from './logo.svg';
import './App.css';
import './Grades.css';
import Header from './Components/Header';
import { Entry } from './Entry';
import { Login } from './Login';
import { Grades } from './Grades';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Gap_analysis } from './Gap-analysis';
=======
import {Tabs} from './Tabs';
>>>>>>> bccd6227b95facd9cf27f8b03043eff310b00fec

function App() {
  return (
    <div className="App">
     
<<<<<<< HEAD
=======
    
>>>>>>> bccd6227b95facd9cf27f8b03043eff310b00fec
     <BrowserRouter>
     {/* <Gap_analysis></Gap_analysis> */}
     <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="entry" element={<Entry/>} />
<<<<<<< HEAD
      <Route path="Gap-analysis" element={<Gap_analysis />} />
=======
      <Route path="/grade" element={<Grades/>}/>
>>>>>>> bccd6227b95facd9cf27f8b03043eff310b00fec
     </Routes>
     </BrowserRouter>
  
      
    </div>
  );
}

export default App;
