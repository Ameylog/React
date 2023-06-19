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

import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Checkhushar/> */}
      {/* <ButtonOperation/> */}
       {/* <HookForm/> */}

    {/* <PropsDemoCheck/> */}
    {/* <ButtonClickPrintDataIntoTable/> */}
    
    <ul>
       <li><a href="/home">Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="/services">Services</a></li>

    </ul>

<BrowserRouter>
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