//import logo from './logo.svg';
import './App.css';
import './Grades.css';
import Header from './Components/Header';
import { Entry } from './Entry';
import { Login } from './Login';
import { Grades } from './Grades';
import { Student } from './Student';
import { Add } from './Add';
import { Gap_analysis } from './Gap-analysis';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Class_details } from './Class_details';
import { Themes } from './Themes';


import { Graph } from './Components/Graph';
import SideBar from './Components/SideBar';

function App() {
      return (
            <div className="App">
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<Login />} />
                              <Route path="/Entry" element={ <Entry />} />
                              <Route path="/class-details/:classname" element={ <Class_details />} />
                              <Route path="/GapAnalysis/:name" element={<Gap_analysis />} />
                              <Route path="/Grade" element={<Grades />} />
                             <Route path="/Student" element={<Student />} />
                              <Route path="/Add" element={<Add />} />
                              <Route path="/SideBar" element={<SideBar />} />
                          
                        </Routes >
                  </BrowserRouter >
                  <Themes></Themes>
            </div >

      );
}

export default App;