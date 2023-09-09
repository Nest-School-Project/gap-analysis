//import logo from './logo.svg';
import './App.css';
import './Grades.css';
import Header from './Components/Header';
//  import { Entry } from './Entry';
import { Login } from './Login';
import { Grades } from './Grades';
import { Student } from './Student';
import { Add } from './Add';

import { Gap_analysis } from './Gap-analysis';

import { Student } from './Student';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gap_analysis } from './Gap-analysis';

import { Class_details } from './Class_details';
import { Themes } from './Themes';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Graph } from './Components/Graph';

function App() {
      return (
            <div className="App">


                  <BrowserRouter>

                        <Routes>

                              <Route path="/" element={<Login />} />
                              <Route path="entry" element={<Entry />} />
                              <Route path="grades" element={<Grades />} />
                              <Route path="tabs" element={<Tabs />} />
                              <Route path="Gap-analysis" element={<Gap_analysis />} />

                              {/* <Route path="entry" element={<Entry/>} /> */}
                              <Route path="Gap-analysis" element={<Gap_analysis />} />
                              <Route path="/grade" element={<Grades />} />

                              <Route path="/Student" element={<Student />} />
                              <Route path="/Add" element={<Add />} />
                              {/*<Route path="/student" element={<Student/>}/>*/}
                        </Routes >
                  </BrowserRouter >
                  <Class_details></Class_details>
                  <Themes></Themes>
            </div >

      );
}

export default App;
