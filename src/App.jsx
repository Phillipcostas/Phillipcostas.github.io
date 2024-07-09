import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'

import './CSS/App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Phillip Costas</h1>
            <p className="hero-subtitle">Software Engineer, Front-end & App Developer</p>
          </div>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
        <div className="additional-content">
          <h2>What I Do</h2>
          <p className="description">I specialize in building high-quality web and mobile applications...</p>
          <div className="services">
            <div className="service">
              <h3>Web Development</h3>
              <p>Creating responsive and modern web applications...</p>
            </div>
            <div className="service">
              <h3>Mobile Apps</h3>
              <p>Developing user-friendly and functional mobile applications...</p>
            </div>
            <div className="service">
              <h3>UI/UX Design</h3>
              <p>Designing intuitive and beautiful user interfaces...</p>
            </div>
          </div>
        </div>
      </section>
     
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
