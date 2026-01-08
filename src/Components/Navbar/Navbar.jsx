
import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Hamza's Portfolio
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="nav-links"
              activeClass="active-link"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="nav-links"
              activeClass="active-link"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="nav-links"
              activeClass="active-link"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="nav-links"
              activeClass="active-link"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="nav-links"
              activeClass="active-link"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="education"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="nav-links"
              activeClass="active-link"
            >
              Education
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
