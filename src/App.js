
import './App.css';
import React from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact'
import {BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    
     <Router>
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/contact' element ={<Contact />}/>
      </Routes>
     </Router>
    
  );
}

export default App;
