import React from 'react';
import '../CSS/Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <h3>Phillip Costas</h3>
        <p>Software Engineer, Front-end & App Developer</p>
        <p>100 Parkerwood Way Alpharetta, Ga 30022</p>
        <p>Cell: 404-274-2238</p>
        <p>Phillipcostas@gmail.com</p>
        
        <h4>Skills</h4>
        <div className="skills-container">
          <div className="skills-sub-container">
            <h5>Programming Languages</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>EJS</li>
              <li>Mongoose</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skills-sub-container">
            <h5>Management/Leadership Skills</h5>
            <ul>
              <li>Goal-driven leader with emphasis on productivity and positive work environment</li>
              <li>Actively motivates and supports colleagues to achieve high performance standards</li>
              <li>Promotes education and personal growth in workplace</li>
            </ul>
          </div>
          <div className="skills-sub-container">
            <h5>Analytical/Research Skills</h5>
            <ul>
              <li>Highly analytical</li>
              <li>Demonstrates a talent for identifying, scrutinizing, and implementing innovative cooking techniques and philosophies</li>
            </ul>
          </div>
        </div>

        <h4>Experience</h4>
        <div className="experience-container">
          <div className="experience-item">
            <strong>Executive Sous Chef Lazy Betty</strong>
            <p>Atlanta, Ga</p>
            <p>July 7th 2021 - December 20th 2024</p>
            <p>Job responsibilities and achievements...</p>
          </div>
          <div className="experience-item">
            <strong>Mizuna Executive Chef</strong>
            <p>Denver, CO</p>
            <p>September 10th 2019 - March 31st 2021</p>
            <p>Executive Chef of award-winning fine dining restaurant</p>
            <p>Maintained 20-22% food cost</p>
            <p>Despite COVID dining restrictions, increased restaurant profitability by 10%</p>
            <p>Development of a la carte and tasting menus</p>
            <p>Staff Education and Management</p>
          </div>
          <div className="experience-item">
            <strong>Sous Chef Beast and Bottle</strong>
            <p>Denver, CO</p>
            <p>September 1st 2017 - September 1st 2019</p>
            <p>Sous chef of award-winning farm-to-table restaurant</p>
            <p>Education on nose-to-tail butchery and preparation</p>
            <p>Supervisor of fermentation and charcuterie program</p>
            <p>Responsible for organizing and implementing daily prep</p>
            <p>Balanced inventory and invoices</p>
            <p>Menu formatting/ideas</p>
          </div>
        </div>

        <h4>Education</h4>
        <div className="education-container">
          <div className="education-item">
            <strong>Software Engineering</strong>
            <p>General Assembly</p>
            <p>Graduation Date: August 7th 2024</p>
            <p>Details about the education...</p>
          </div>
          <div className="education-item">
            <strong>University of Mississippi</strong>
            <p>B.S in Hospitality Management</p>
            <p>Graduation Date: May 5th 2013</p>
            <p>Details about the education...</p>
          </div>
          <div className="education-item">
            <strong>Auguste Escoffier School of Culinary Arts</strong>
            <p>Culinary Arts Degree</p>
            <p>Graduation Date: September 16 2016</p>
            <p>Details about the education...</p>
          </div>
        </div>

        <h4>Extras</h4>
        <div className="extras-container">
          <div className="extra-item">
            <p>Feature in Denver Life Magazine 2-page article about best dining spots in Denver</p>
          </div>
          <div className="extra-item">
            <p>Denver Milk Market Burrito Project for the homeless</p>
          </div>
          <div className="extra-item">
            <p>Project Open Hands Preparing and serving meals to the less fortunate</p>
          </div>
          <div className="extra-item">
            <p>Worked with Habitat For Humanity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
