import "./App.css";
import Home from './Pages/Home';
import {  Route, Routes } from "react-router-dom";
import Parametre from './Pages/Parametre'; 
import Utilisateur from "./Pages/Utilisateur";


function App() {
  return (
    <div className="App">
 
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="Parametre" element={<Parametre/>}/>
  <Route path="Utilisateur" element={<Utilisateur/>}/>
  </Routes>
  </div>
  );
}
  
export default App;