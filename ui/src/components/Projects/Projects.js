import React, { useEffect, useState } from "react";
import "../../style.css";
import "./projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const urls = [
        "https://picsum.photos/200/200?random=1",
        "https://picsum.photos/200/200?random=2",
        "https://picsum.photos/200/200?random=3",
      ];

      const projectData = urls.map((url, index) => ({
        image: url,
        title: `Project ${index + 1}`,
        description: `This is a brief description of Project ${index + 1}.`,
        technologies: ["React", "Node.js", "CSS"]
      }));

      setProjects(projectData);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">Some Things I've Built</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-description">
            <h3>Featured Project</h3>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

//export default Projects;
export default () => null;

  
