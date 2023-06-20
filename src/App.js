import React from 'react';
import './App.css';
// import ButtonOperation from './components/homepage/ButtonOperation';
import HookForm from './components/homepage/HookForm'
import ButtonClickPrintDataIntoTable from './components/homepage/ButtonClickPrintDataIntoTable'
import Checkhushar from './components/homepage/Checkhushar';
import PropsDemoCheck from './components/PropsDemoCheck';
import Services from './react-router/Services';
import Home from './react-router/Home';
import About from './react-router/About';


import { BrowserRouter,Routes, Route ,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Checkhushar/> */}
      {/* <ButtonOperation/> */}
      {/* <HookForm/> */}
      {/* <PropsDemoCheck/> */}
      {/* <PropsDemoCheck/> */}
      {/* <ButtonClickPrintDataIntoTable/> */}
    
    

    <BrowserRouter>
    <ul>
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><Link to="/services">Services</Link></li>

    </ul>
      <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/services" element={<Services/>}/>
      </Routes>
    </BrowserRouter>
    

    
    </div>
  );
}

export default App