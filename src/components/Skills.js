import React, { useEffect, useState } from 'react';
import './Skills.css';

const technicalSkills = [
  { name: 'Python', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'JavaScript', level: 80 },
  { name: 'MySQL', level: 85 },
  { name: 'HTML', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'React.js', level: 80 },
  { name: 'Spring Boot', level: 80 },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100); // delay for animation
  }, []);

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      
      <div className="skills-container">
        {technicalSkills.map((skill) => (
          <div key={skill.name} className="skill-bar">
            <label>{skill.name}</label>
            <div className="progress-wrapper">
              <div
                className="progress-fill"
                style={{
                  width: visible ? `${skill.level}%` : '0%',
                  transition: 'width 1s ease-in-out',
                }}
              ></div>
            </div>
            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
