import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Information</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p style={{ marginBottom: '10px' }}>
          📧 <strong>Email:</strong>{' '}
          <a href="mailto:flamin2004@gmail.com">
            flamin2004@gmail.com
          </a>
        </p>
        <p style={{ marginBottom: '10px' }}>
          ☎️ <strong>Phone:</strong> +91 8015373067
        </p>
        <p style={{ marginBottom: '10px' }}>
          📍 <strong>Location:</strong> Chennai, India
        </p>
        <p>
          💼 <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/flamin-david-79b610257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my profile
          </a>
        </p>
      </div>

      <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Connect with Me</h3>
      <p style={{ marginBottom: '15px', color: '#666' }}>Follow my coding journey and achievements on these platforms:</p>
      <div className="social-icons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <a
          href="https://github.com/Flamin189"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img src="\Screenshot 2025-06-21 223758.png" alt="GitHub" 
          style={{
            backgroundColor: '#333', 
            padding: '8px',
            borderRadius: '8px',
            width: '40px',
            height: '40px'
          }}/>
        </a>
        <a
          href="https://leetcode.com/u/Flamin_David/"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode - 263+ Problems Solved"
        >
          <img
            src="\Screenshot 2025-06-21 223815.png"  
            alt="LeetCode"
            style={{
              backgroundColor: '#333', 
              padding: '8px',
              borderRadius: '8px',
              width: '40px',
              height: '40px'
            }}
          />
        </a>
        <a
          href="https://www.hackerrank.com/profile/flamin2004"
          target="_blank"
          rel="noopener noreferrer"
          title="HackerRank"
        >
          <img src="\Screenshot 2025-06-21 230001.png" alt="HackerRank" 
          style={{
            backgroundColor: '#333', 
            padding: '8px',
            borderRadius: '8px',
            width: '40px',
            height: '40px'
          }}/>
        </a>
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#888' }}>
        💡 Open to internship, freelance, and collaboration opportunities!
      </p>
    </section>
  );
};

export default Contact;
