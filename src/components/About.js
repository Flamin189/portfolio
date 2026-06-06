import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      
      <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Education</h3>
      <p>
        <strong>B.E in Computer Science & Engineering</strong><br />
        St. Joseph's College of Engineering, OMR, Chennai<br />
        CGPA: 8.3 | 2022 - 2026
      </p>
      <p>
        <strong>12th Grade (Higher Secondary):</strong> Laurel CBSE School, Pattukkottai - 93% (2022)<br />
        <strong>10th Grade (Secondary):</strong> Laurel CBSE School, Pattukkottai - 84% with centum in Mathematics (2020)
      </p>
      
      <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Professional Overview</h3>
      <p>
        I'm a Computer Science student with deep expertise in building efficient and scalable full-stack web applications. I've gained hands-on experience with modern technologies including React.js, Spring Boot, Python, and MySQL, demonstrating proficiency across frontend, backend, and database layers.
      </p>
      <p>
        <strong>Coding Achievements:</strong> Solved 1800+ problems across LeetCode (263+), GeeksforGeeks (100+ in DSA challenge), and Skillrack (946+), mastering Data Structures, Algorithms, Dynamic Programming, DFS, BFS, Backtracking, Binary Search, Sliding Window, and Two Pointers.
      </p>
      
      <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Internship Experience</h3>
      <p>
        <strong>Full Stack Developer Intern</strong><br />
        Qualian Technologies, Chennai | Jun 2025 - Jul 2025<br />
        • Developed and enhanced web modules for an enterprise ERP platform<br />
        • Built responsive React components including forms, tables, and dashboards<br />
        • Wrote SQL queries and performed data validation for reporting features<br />
        • Fixed UI/API bugs and optimized features using Git and agile practices
      </p>

      <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Certifications</h3>
      <ul>
        <li>Python Programming - Udemy</li>
        <li>HTML, CSS3 & JavaScript - Udemy</li>
        <li>Data Structures & Algorithms in Java (OOP) - NPTEL</li>
      </ul>
    </section>
  );
};

export default About;
