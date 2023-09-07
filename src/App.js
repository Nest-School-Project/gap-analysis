//import logo from './logo.svg';
import './App.css';
import './Grades.css';
import Header from './Components/Header';
import { Entry } from './Entry';
import { Login } from './Login';
import { Grades } from './Grades';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Tabs} from './Tabs';

function App() {
  return (
    <div className="App">
     
    
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="entry" element={<Entry/>} />
      <Route path="/grade" element={<Grades/>}/>
     </Routes>
     </BrowserRouter>
      {/* <Login></Login> */}
      <Tabs></Tabs>
      
    </div>
  );
}

export default App;
