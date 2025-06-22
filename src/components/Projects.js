import React from 'react';
// import './Projects.css'; // Optional for separate styling

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      {/* Project: College Bus Tracking System */}
      <div className="project-card">
        <h3>🚌 SAFARI </h3>
        <p className="project-description">
          A real-time web application that helps students and admins track college buses live on an interactive map.
        </p>

        <div className="project-subsection">
          <h4>🔧 Tech Stack</h4>
          <div className="tech-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Leaflet API</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>Google Maps API</span>
          </div>
        </div>

        <div className="project-subsection">
          <h4>🧠 Key Features</h4>
          <ul>
            <li>🔐 Separate login for Admin and Users</li>
            <li>🗺️ Live route display with bus position and stops</li>
            <li>📍 User location marker with “You are here” popup</li>
            <li>🛠️ Admin control to add/remove buses and routes</li>
            <li>🔔 Proximity alerts and ETA calculation</li>
            <li>🤖 Chatbot for live assistance</li>
          </ul>
        </div>
      </div>

      {/* Project: Blockbuster */}
      <div className="project-card">
        <h3>🎬 BLOCKBUSTER </h3>
        <p className="project-description">
          A full-stack streaming platform clone where users can explore, preview, and interact with curated movie content.
        </p>

        <div className="project-subsection">
          <h4>🔧 Tech Stack</h4>
          <div className="tech-tags">
            <span>React.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>YouTube Data API v3</span>
          </div>
        </div>

        <div className="project-subsection">
          <h4>🧠 Key Features</h4>
          <ul>
            <li>🎞️ Movie catalog (Trending, Action, Originals, etc.)</li>
            <li>🔍 Search with live filtering</li>
            <li>📽️ Embedded YouTube trailers and public domain films using the YouTube iFrame Player API</li>
            <li>🔐 User authentication (Sign In/Sign Out)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
