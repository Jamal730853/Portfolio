import React, { useEffect } from "react";
import portfolio from "../images/img2.png";
import clinic from '../images/clinic.png'
import ecom from '../images/ecommere.png'
import "./Project.css"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import AOS from "aos";
const projects = [
  {
    id: 1,
    title: "Clinic Management System",
    description:
      "A complete clinic management system built with React, Laravel, and MySQL.",
    image: clinic,
    tech: ["React", "php", "MySQL", "Bootstrap"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "Modern online store with authentication, dashboard and payment integration.",
    image: ecom,
    tech: ["React", "Laravel","bootstrap"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio showcasing my skills, projects and experience.",
    image: portfolio,
    tech: ["React", "Bootstrap", "CSS"],
    github: "#",
    live: "#",
  },
];

function Projects() {
       useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  return (
    <section
      id="projects"
      className="py-5 text-white"
      style={{
        background:
          "radial-gradient(circle at top right,#1a1a45 0%,#050816 60%,#04030d 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-uppercase text-secondary">
            Portfolio
          </h6>

          <h1 className="fw-bold display-5">
            My <span className="text-info">Projects</span>
          </h1>

          <p className="text-secondary mt-3">
            Here are some of the projects I have built using modern web
            technologies.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
          <div className="col-lg-4 col-md-6" key={project.id}>
  <div className="project-card h-100"
   data-aos="fade-up"

  >

    <div className="project-image">
      <img src={project.image} alt={project.title} />
    </div>

    <div className="project-content">

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tech">
        {project.tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className="project-buttons">
      <a href={project.live} className="btn btn-primary">
    <FiExternalLink className="me-2"/>
    Live Demo
</a>

<a href={project.github} className="btn btn-outline-light">
    <FaGithub className="me-2"/>
    GitHub
</a>
      </div>

    </div>

  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;