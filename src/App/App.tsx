import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// pages
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
import PlansSection from '../Components/PlansSection/PlansSection';


function App() {
  return (
    <Router basename='/goodnet'>
      <Navbar/>

      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/planos' Component={PlansSection}/>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
