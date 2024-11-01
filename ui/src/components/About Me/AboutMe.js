import React from "react";
import "./about-me.css";

function AboutMe() {
  return (
    <section id="about" className="about-me-section">
      <div className="about-me-inner">
        <div className="about-me-heading">
          <h2>About Me</h2>
        </div>
        <div className="about-me-content">
          <div className="about-me-text">
            <div>
              <p>
                Hello! My name is <span className="highlight">Eric</span>, and I
                enjoy creating software that transforms ideas into reality. I
                began my journey in{" "}
                <span className="highlight">software development</span> at the age
                of <span className="highlight">13</span>, creating mods for
                Minecraft. This early experience honed my skills in{" "}
                <span className="highlight">
                  coding, problem-solving, and creativity
                </span>
                .
              </p>
              <div>
                <p>
                  Fast-forward to today, I’ve had the privilege of working in
                  the <span className="highlight">gov tech sector</span>. My main
                  focus these days is building accessible, inclusive products
                  and digital experiences at{" "}
                  <span className="highlight">Tyler Technologies</span> for a
                  variety of clients, including the{" "}
                  <span className="highlight">state of Connecticut</span>.
                </p>
              </div>
              <div>
                <p>
                  I'm currently pursuing a{" "}
                  <span className="highlight">
                    Master of Science in Cybersecurity and Information Assurance
                  </span>{" "}
                  to deepen my expertise in securing digital infrastructures.
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
