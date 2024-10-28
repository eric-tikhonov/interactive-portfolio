import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../style.css";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo" role="img" aria-label="Home">
          <a href="/"><i className="fas fa-code"></i></a>
        </div>
        <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={handleToggle}>
          {isOpen ? (
            <i className="fas fa-times close-icon"></i>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
        <div className={`links ${isOpen ? "active" : ""}`}>
          <ol>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#jobs">Experience</a>
            </li>
            <li>
              <a href="/#projects">Work</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ol>
          <div className="resume-button">
            <a href="https://resume.erictikhonov.com/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
