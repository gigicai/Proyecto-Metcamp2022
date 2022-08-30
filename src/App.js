import './App.css';
import Home from "./pages/home" ;
import Game from "./pages/game";
import 'bulma/css/bulma.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/game" element={<Game/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
