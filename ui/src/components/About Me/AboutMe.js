import React from "react";
import "../../style.css";
import "./about-me.css";

function AboutMe() {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-inner">
        <div className="about-me-heading">
          <h2>About Me</h2>
        </div>
        <div className="about-me-content">
          <div className="about-me-text">
            <div>
              <p>
              Hello! My name is Eric, and I enjoy creating software that transforms ideas into reality. I began my journey in software development at the age of 13, creating mods for Minecraft. This early experience honed my skills in coding, problem-solving, and creativity.
              </p>
              <div>
                <p>
                  Fast-forward to today, I’ve had the privilege of working in
                  the gov tech sector. My main focus these days is building
                  accessible, inclusive products and digital experiences at
                  Tyler Technologies for a variety of clients, including the
                  state of Connecticut.
                </p>
              </div>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <ul className="skills-list">
              <li>.NET</li>
              <li>Sitecore CMS</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="about-me-img-container">
            <div className="about-me-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;