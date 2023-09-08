//import logo from './logo.svg';
import './App.css';
import './Grades.css';
import Header from './Components/Header';
//  import { Entry } from './Entry';
import { Login } from './Login';
import { Grades } from './Grades';
<<<<<<< HEAD
import { Tabs } from './Tabs';

=======
import { Student } from './Student';
import { Add } from './Add';
>>>>>>> a980d772c4169101647e739bd808878fa930c574

import {Gap_analysis} from './Gap-analysis';
import {Student} from './Student';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Gap_analysis } from './Gap-analysis';

=======
import {Graph} from './Components/Graph';
>>>>>>> a980d772c4169101647e739bd808878fa930c574

function App() {
  return (
    <div className="App">
     
<<<<<<< HEAD
=======
    
>>>>>>> a980d772c4169101647e739bd808878fa930c574
     <BrowserRouter>
     
     <Routes>
     
      <Route path="/" element={<Login/>} />
<<<<<<< HEAD
      <Route path="entry" element={<Entry/>} />
      <Route path="grades" element={<Grades/>} />
      <Route path="tabs" element={<Tabs/>} />
      <Route path="Gap-analysis" element={<Gap_analysis />} />
     
    
=======
      {/* <Route path="entry" element={<Entry/>} /> */}
      <Route path="Gap-analysis" element={<Gap_analysis />} />
      <Route path="/grade" element={<Grades/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/Add" element={<Add/>}/>
>>>>>>> a980d772c4169101647e739bd808878fa930c574
     </Routes>
     </BrowserRouter>
  
      
    </div>
  );
}

export default App;
