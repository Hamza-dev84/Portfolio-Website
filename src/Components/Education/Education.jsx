import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="edu-card">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>Government College University, Faisalabad</p>
          <span className="year">2021 – 2025</span>
        </div>
        <div className="edu-card">
          <h3>Intermediate in Computer Science</h3>
          <p>Govt Shalimar Postgraduate College, Lahore</p>
          <span className="year">2019 – 2021</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
