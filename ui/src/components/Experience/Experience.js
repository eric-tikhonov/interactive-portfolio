import React, { useState } from "react";
import "../../style.css";
import "./experience.css";

function Experience() {
  const [activeTab, setActiveTab] = useState("TylerTech");

  const experiences = {
    TylerTech: {
      company: "Tyler Technologies",
      role: "Software Developer",
      description: [
        "Designed, developed, and maintained <span class='highlight'>Sitecore sites and applications</span> to enhance business capabilities and eliminate redundancies for the <span class='highlight'>Department of Labor (DOL)</span> of CT.",
        "Upgraded <span class='highlight'>Sitecore CMS</span> to the latest version (10.4), ensuring optimal performance and security.",
        "Performed deployment activities within <span class='highlight'>Azure pipelines</span>, smoke testing, and post-production support.",
        "Transitioned payment processing to an <span class='highlight'>OTC solution</span> for firearm permit fees for the <span class='highlight'>Department of Emergency Services and Public Protection (DESPP)</span> of CT.",
        "Administered and optimized user accounts and roles within <span class='highlight'>Sitecore’s User Manager</span> to enhance security and access control.",
        "Developed a global feedback feature and contributed to the development of a chatbot feature for the <span class='highlight'>Department of Labor (DOL)</span> site."
      ],
    },
    Amerhart: {
      company: "Amerhart",
      role: "Application Developer",
      description: [
        "Developed and tested <span class='highlight'>APIs</span> using <span class='highlight'>Web API, .NET, and C#</span> to build new and existing features on <span class='highlight'>Azure</span>.",
        "Created <span class='highlight'>unit test projects</span> for C# solutions, ensuring functionality across libraries (Global Services, Internal Services, Scheduled Tasks, etc.).",
        "Developed a <span class='highlight'>Single Page Application (SPA)</span> using <span class='highlight'>.NET and React JS</span> to provide analytics and transactional data for the sales team (SIP - Sales Information Portal).",
        "Created reusable <span class='highlight'>UI components</span> and implemented new designs and features using <span class='highlight'>Redux and Webpack</span> with React.",
        "Monitored and addressed <span class='highlight'>IT support tickets</span> from company branches to fix, update, and troubleshoot various applications."
      ],
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-heading">
        <h2>Where I've Worked</h2>
      </div>
      <div className="experience-content">
        <div className="experience-tabs">
          {Object.keys(experiences).map((key) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {experiences[key].company}
            </button>
          ))}
        </div>
        <div className="experience-details">
          <h3>{experiences[activeTab].role} at {experiences[activeTab].company}</h3>
          <ul>
            {experiences[activeTab].description.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
