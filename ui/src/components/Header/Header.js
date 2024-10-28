import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../style.css";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const offset = 50;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    handleCloseMenu();
  };

  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo" role="img" aria-label="Home">
          <a href="#home"><i className="fas fa-code"></i></a>
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
            <li onClick={(e) => handleScroll(e, "#about")}>
              <a href="#about">About</a>
            </li>
            <li onClick={(e) => handleScroll(e, "#experience")}>
              <a href="#experience">Experience</a>
            </li>
            <li onClick={(e) => handleScroll(e, "#work")}>
              <a href="#work">Work</a>
            </li>
            <li onClick={(e) => handleScroll(e, "#contact-me")}>
              <a href="#contact-me">Contact</a>
            </li>
          </ol>
          <div className="resume-button" onClick={handleCloseMenu}>
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
