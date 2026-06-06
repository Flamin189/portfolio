import React from 'react';


const Home = () => {
  return (
    <section id="home" className="section">
      <h1>Hi, I'm Flamin David</h1>
      
      <img
  src="/WhatsApp Image 2024-10-05 at 08.46.17_caeb1b6a.jpg"
  alt="Flamin David"
  style={{
    width: '100px',
    height: '120px',
    objectFit: 'cover',
    border: '2px solid #333',
    borderRadius: '4px',
    display: 'block',
    margin: '0 auto'
  }}
/>
      <p>
        <strong>Full Stack Developer | Problem Solver | Tech Enthusiast</strong>
      </p>
      <p style={{ marginBottom: '10px', fontSize: '0.95em', color: '#fff' }}>
        📍 Chennai, India | ☎️ +91 8015373067 | 📧 flamin2004@gmail.com
      </p>
      <p>
        B.E in Computer Science & Engineering from St. Joseph's College of Engineering (CGPA: 8.3)
      </p>
      <p>
        I'm a passionate Full Stack Developer with expertise in building scalable, user-friendly applications using modern technologies including React, Spring Boot, Python, and MySQL. With 1800+ coding problems solved across LeetCode, GeeksforGeeks, and Skillrack, I have strong foundations in Data Structures, Algorithms, and Object-Oriented Programming.
      </p>
      <p>
        I'm open to internship, freelance, or collaboration opportunities where I can apply my technical skills, solve meaningful problems, and continue growing as a developer.
      </p>
    </section>
  );
};

export default Home;
