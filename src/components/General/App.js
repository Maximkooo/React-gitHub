import React from 'react';
import '../../App.css';
import Home from  './Home.js';
import Battle from  '../Battle/index.js';
import Popular from '../Popular/index.js';
import NoMatch from './NoMatch.js';
import Nav from './Nav.js';
import Results from '../Battle/Results';
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
            <Route path="battle/results" element={<Results />} />
            <Route path="popular" element={<Popular />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
