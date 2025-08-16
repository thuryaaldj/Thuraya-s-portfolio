import React from 'react';
import projectsData from '../db.json';
import MyProjectCard from './MyProjectCard';


export default function MyProject() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-description">
          I specialize in crafting fast, accessible, and visually appealing
          websites. Here’s a few of my featured projects:
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.projects.map((project) => (
          
          <MyProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}
