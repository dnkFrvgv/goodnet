import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// pages
import Home from '../Pages/Home/Home';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
