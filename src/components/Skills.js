import React, { useEffect, useState } from 'react';
import './Skills.css';

const skills = [
  { name: 'Python', level: 75 },
  { name: 'Java', level: 70 },
  { name: 'HTML', level: 70 },
  { name: 'CSS', level: 65 },
  { name: 'JavaScript', level: 65 },
  { name: 'React.js', level: 65 },
  { name: 'Node.js', level: 50 },
  { name: 'Spring Boot', level: 65 },
  { name: 'MySQL', level: 80 },
  { name: 'MongoDB', level: 50 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Postman', level: 75 },
  { name: 'VS Code', level: 80 },
  { name: 'Figma', level: 65 },];

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100); // delay for animation
  }, []);

  return (
    <section id="skills" className="section">
      <h2>Skillset</h2>
      <div className="skills-container">
        {skills.map((skill) => (
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
