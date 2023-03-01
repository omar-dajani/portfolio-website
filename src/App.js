import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import Ski from './components/pages/ski/ski';
import Footer from './components/footer/footer.js';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

function App() {
  const sectionRefs = [
    useRef(null), // home
    useRef(null), // experience
    useRef(null), // projects
  ];

  return (
    <div className="App mx-auto">
      <header className="p-0 m-0">
        <Routes>
          <Route path="/" element={<Home sectionRefs={sectionRefs}/>} />
          <Route path="/ski" element={<Ski />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;