//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Entry } from './Entry';
import { Login } from './Login';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes><Route path="/" element={<Login/>} /></Routes>
     </BrowserRouter>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
