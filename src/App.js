//import logo from './logo.svg';
import './App.css';
import './Grades.css';
import Header from './Components/Header';
import { Entry } from './Entry';
import { Login } from './Login';
import { Grades } from './Grades';
import { Tabs } from './Tabs';



import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gap_analysis } from './Gap-analysis';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     {/* <Gap_analysis></Gap_analysis> */}
     <Routes>
     
      <Route path="/" element={<Login/>} />
      <Route path="entry" element={<Entry/>} />
      <Route path="grades" element={<Grades/>} />
      <Route path="tabs" element={<Tabs/>} />
      <Route path="Gap-analysis" element={<Gap_analysis />} />
     
    
     </Routes>
     </BrowserRouter>
  
      
    </div>
  );
}

export default App;
