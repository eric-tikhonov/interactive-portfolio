import React from "react";
import "./projects.css";
import kitchenAIdeImage from "../../images/KitchenAIde.png";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">Some Things I've Built</h2>
      <div key={1} className="project">
        <a
          href="https://kitchenaide.erictikhonov.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={kitchenAIdeImage}
            alt={"KitchenAIde"}
            className="project-image"
          />
        </a>
        <div className="project-description">
          <h3>Featured Project</h3>
          <h4>{"KitchenAIde"}</h4>
          <p>
            {
              "A dynamic, responsive app for managing ingredients and suggesting ingredients and recipes based on input using Claude 2.0 AI with AWS Bedrock, Lambda, DynamoDB, and Amplify."
            }
          </p>
          <div className="project-technologies">
            <span key={1} className="tech-pill">
              {"AWS"}
            </span>
            <span key={1} className="tech-pill">
              {"Claude 2.0"}
            </span>
            <span key={1} className="tech-pill">
              {"React"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
