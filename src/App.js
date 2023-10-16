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
import Signup from './SignUp';
import { Slidelogin } from './Slogin';
import { Ostu } from './Ostu';
import MarkEntry from "./Components/MarkEntry";
import { AddAssmt } from './AddAssmt';
import { AddSub } from './AddSub';
import {Gostu} from "./Gostu";
import { Ouoi } from './Ouoi';

import { UpdateStu } from './UpdateStu';



function App() {
      
      return (
            <div className="App">
                  <BrowserRouter>
                        <Routes>

                              <Route path="/" element={< Slidelogin />} />
                              <Route path="/Entry/:student_name" element={<Entry/>} />
                              <Route path="/class-details/:classname" element={ <Class_details />} />
                              <Route path="/GapAnalysis/:name" element={<Gap_analysis />} />
                              <Route path="/Grade" element={<Grades />} />
                              <Route path="/Student" element={<Student />} />
                              <Route path="/Add" element={<Add />} />
                              <Route path="/SideBar" element={<SideBar />} />
                              <Route path="/Themes" element={<Themes />} />
                              <Route path="/Signup" element={<Signup/>} />
                              <Route path="/Ostu" element={<Ostu/>} />
                              <Route path="/Ouoi" element={<Ouoi/>} />
                              <Route path="/Gostu/:classname/:secname" element={<Gostu/>} />
                              <Route path="/entry/theme/:class_name/:section/:theme_name" element={ <MarkEntry />} />
                              <Route path="/entry/subject/:class_name/:section/:subject_name" element={ <MarkEntry />} />
                              <Route path="/AddAssmt" element={<AddAssmt/>} />
                              <Route path="/AddSub" element={<AddSub/>} />
                              <Route path="/UpdateStu/:student_name" element={<UpdateStu/>} />
                              {/* <Route path="/Slogin" element={<Slidelogin/>} /> */}
                        </Routes >
                  </BrowserRouter >
                  
            </div >

      );
}

export default App;