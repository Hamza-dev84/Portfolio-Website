
import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>

        <p className="skills-intro">
          I build full-stack web applications using the MERN stack, focusing on
          clean UI design, efficient back-end logic, and scalable solutions.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <FaHtml5 className="skill-icon html" />
            <p>HTML5</p>
          </div>

          <div className="skill-card">
            <FaCss3Alt className="skill-icon css" />
            <p>CSS3</p>
          </div>

          <div className="skill-card">
            <SiJavascript className="skill-icon js" />
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <FaReact className="skill-icon react" />
            <p>React.js</p>
          </div>

          <div className="skill-card">
            <SiNodedotjs className="skill-icon node" />
            <p>Node.js</p>
          </div>

          <div className="skill-card">
            <SiExpress className="skill-icon express" />
            <p>Express.js</p>
          </div>

          <div className="skill-card">
            <SiMongodb className="skill-icon mongo" />
            <p>MongoDB</p>
          </div>

          <div className="skill-card">
            <FaGitAlt className="skill-icon git" />
            <p>Git</p>
          </div>

          <div className="skill-card">
            <FaGithub className="skill-icon github" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
