import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>
        📧 Email:{' '}
        <a href="mailto:flamin2004@gmail.com">
          flamin2004@gmail.com
        </a>
      </p>
      <p>
        💼 LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/flamin-david-79b610257/"
          target="_blank"
          rel="noopener noreferrer"
        >
            Visit my profile
        </a>
      </p>
      <br></br>
      <h2>Visit my profiles</h2>
      <div className="social-icons">
        <a
          href="https://github.com/Flamin189"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\Screenshot 2025-06-21 223758.png" alt="GitHub" 
          style={{
    backgroundColor: 'blue', 
    padding: '8px',
    borderRadius: '8px'
  }}/>
        </a>
        <a
          href="https://leetcode.com/u/Flamin_David/"
          target="_blank"
          rel="noopener noreferrer"
        >
<img
  src="\Screenshot 2025-06-21 223815.png"  
  alt="LeetCode"
  style={{
    backgroundColor: 'blue', 
    padding: '8px',
    borderRadius: '8px'
  }}
/>
        </a>
        <a
          href="https://www.hackerrank.com/profile/flamin2004
"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\Screenshot 2025-06-21 230001.png" alt="HackerRank" 
          style={{
    backgroundColor: 'blue', 
    padding: '8px',
    borderRadius: '8px'
  }}/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
