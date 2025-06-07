import React, { useEffect, useState } from "react";
import axios from "axios";
import MyProjectCard from "../components/MyProjectCard";

const MyProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/projects")
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch projects");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-description">
          I specialize in crafting fast, accessible, and visually appealing websites. Here’s a few of my featured projects:
        </p>
      </div>

      <div className="projects-grid">
        {projects.map(({ id, image, title, description }) => (
          <MyProjectCard
            key={id}
            image={`/${image}`}  // assuming images are in public folder
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProject;
