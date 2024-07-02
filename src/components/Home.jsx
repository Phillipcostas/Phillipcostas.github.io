import React from 'react';
import '../Home.css';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Phillip Costas</h1>
        <p>Software Engineer, Front-end & App Developer</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
      <div className="additional-content">
        <h2>What I Do</h2>
        <p>I specialize in building high-quality web and mobile applications...</p>
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
  );
};

export default Home;
