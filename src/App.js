import React from 'react';
import './App.css';
import Home from  './components/Home.js';
import Battle from  './components/Battle.js';
import Popular from './components/Popular.js';
import NoMatch from './components/NoMatch.js';
import Nav from './components/Nav.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const  App = () => {
    return (
      <BrowserRouter>
        <div className='container'>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="battle" element={<Battle />} />
            <Route path="popular" element={<Popular />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
