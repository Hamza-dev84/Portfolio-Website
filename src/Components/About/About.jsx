
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          Hi, I am <span>Muhammad Hamza</span> <br />
          I am a <b>MERN Stack Developer</b> who enjoys building
          full-stack web applications with a strong focus on performance,
          scalability, and user experience.
        </p>

        <p>
          I work with <b>MongoDB, Express.js, React.js, and Node.js</b> to develop
          complete web applications from responsive front-end interfaces to secure
          and efficient back-end APIs.
        </p>

        <p>
          Currently, I am enhancing my skills by working on real-world MERN
          projects, implementing authentication, RESTful APIs, and database
          management, while staying updated with modern development practices.
        </p>

        <p className="highlight">
          I believe in writing clean and maintainable code, continuous learning,
          and solving real-world problems through technology.
        </p>
      </div>
    </section>
  );
};

export default About;
