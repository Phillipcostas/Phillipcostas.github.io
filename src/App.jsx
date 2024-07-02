import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About'
import Navbar from './Navbar';
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Footer from './Footer'

import './App.css';


const App = () => {
  return (
    <>

    <Navbar />
    <h1>Phillip Costas</h1>
        <p>Software Engineer, Front-end & App Developer</p>

    <Routes>
          <Route path="/home" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/Resume" element={ <Resume/> } />
          <Route path="/Skills" element={ <Skills/> } />
          
    </Routes>
    
    <Footer/>
    </>
    ) 
    };

export default App;
