//import logo from './logo.svg';
import './App.css';
import './Grades.css';
import Header from './Components/Header';
import { Entry } from './Entry';
import { Login } from './Login';
import { Grades } from './Grades';
import { Student } from './Student';
import { Add } from './Add';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gap_analysis } from './Gap-analysis';
import {Tabs} from './Tabs';

function App() {
  return (
    <div className="App">
     
    
     <BrowserRouter>
     {/* <Gap_analysis></Gap_analysis> */}
     <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="entry" element={<Entry/>} />
      <Route path="Gap-analysis" element={<Gap_analysis />} />
      <Route path="/grade" element={<Grades/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/Add" element={<Add/>}/>
     </Routes>
     </BrowserRouter>
  
      
    </div>
  );
}

export default App;
