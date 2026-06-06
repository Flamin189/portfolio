import React from 'react';
// import './Projects.css'; // Optional for separate styling

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>

      {/* Project: AI-Powered Sales Forecasting Platform */}
      <div className="project-card">
        <h3>📊 AI-Powered Sales Forecasting Platform</h3>
        <p className="project-description">
          An intelligent platform that predicts sales trends and inventory optimization using machine learning models trained on historical weather and sales data.
        </p>

        <div className="project-subsection">
          <h4>🔧 Tech Stack</h4>
          <div className="tech-tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Scikit-learn</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="project-subsection">
          <h4>🧠 Key Features</h4>
          <ul>
            <li>📈 ETL pipelines for preprocessing historical and real-time weather data</li>
            <li>🔎 Random Forest regression for rainfall prediction</li>
            <li>📊 Logistic Regression for severity classification</li>
            <li>📉 Performance dashboards and automated alerts</li>
            <li>💾 Data warehouse in MySQL for analytics</li>
          </ul>
        </div>
      </div>

      {/* Project: AI-Powered Cloudburst Prediction System */}
      <div className="project-card">
        <h3>⚡ AI-Powered Cloudburst Prediction System</h3>
        <p className="project-description">
          A machine learning solution that predicts extreme rainfall events and enables timely decision-making with automated alerts for risk mitigation.
        </p>

        <div className="project-subsection">
          <h4>🔧 Tech Stack</h4>
          <div className="tech-tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
            <span>Scikit-learn</span>
          </div>
        </div>

        <div className="project-subsection">
          <h4>🧠 Key Features</h4>
          <ul>
            <li>🔄 Designed ETL pipelines for retail sales data cleaning and transformation</li>
            <li>⚙️ Optimized data preparation and advanced feature engineering</li>
            <li>📊 Trend analysis reports and stakeholder dashboards</li>
            <li>🔍 Extensive debugging and model tuning</li>
            <li>🚨 Automated alerts for predicted extreme rainfall events</li>
          </ul>
        </div>
      </div>

      {/* Project: SAFARI Bus Tracking Application */}
      <div className="project-card">
        <h3>🚌 SAFARI – Bus Tracking Application</h3>
        <p className="project-description">
          A full-stack real-time bus tracking system with hardware integration, enabling live GPS-based location updates and proximity alerts for users.
        </p>

        <div className="project-subsection">
          <h4>🔧 Tech Stack</h4>
          <div className="tech-tags">
            <span>Spring Boot</span>
            <span>React.js</span>
            <span>Leaflet.js</span>
            <span>MySQL</span>
            <span>WebSockets</span>
            <span>Arduino</span>
            <span>GSM & GPS Modules</span>
          </div>
        </div>

        <div className="project-subsection">
          <h4>🧠 Key Features</h4>
          <ul>
            <li>🏗️ Full-stack architecture with Spring Boot backend and React.js frontend</li>
            <li>🗺️ Interactive Leaflet.js maps with live bus routes, stops, and ETA</li>
            <li>⚡ WebSocket communication for real-time location updates without page reloads</li>
            <li>📍 Proximity alerts using Leaflet's distanceTo() function (1 km radius)</li>
            <li>🔒 Secure user authentication and role-based access (Admin/User)</li>
            <li>🔌 Arduino integration with GSM & GPS modules for live coordinates</li>
            <li>💾 Robust MySQL schema for credentials, routes, and tracking data</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
