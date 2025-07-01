import React from 'react';
import projectsData from '../db.json';


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
        {projectsData.projects.map(({ id, image, title, description, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card block border rounded p-4 hover:shadow-lg transition"
          >
            <img src={image} alt={title} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-bold">{title}</h3>
            <p>{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
