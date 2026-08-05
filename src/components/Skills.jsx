import React from "react";
import './Skills.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiLaravel,
  SiMysql,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    level: 95,
    color: "#E34F26",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    level: 90,
    color: "#1572B6",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    level: 90,
    color: "#F7DF1E",
  },
  {
    icon: <FaReact />,
    name: "React",
    level: 90,
    color: "#61DAFB",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
    level: 90,
    color: "#7952B3",
  },
  {
    icon: <FaPhp />,
    name: "PHP",
    level: 85,
    color: "#777BB4",
  },
  {
    icon: <SiLaravel />,
    name: "Laravel",
    level: 80,
    color: "#FF2D20",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    level: 85,
    color: "#00758F",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    level: 80,
    color: "#F05032",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    level: 80,
    color: "#ffffff",
  },
  {
    icon: <SiPostman />,
    name: "REST API",
    level: 85,
    color: "#FF6C37",
  },
  {
    icon: <SiFigma />,
    name: "Figma",
    level: 75,
    color: "#A259FF",
  },
];

function Skills() {
 
 useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);



  return (
    <section
      id="skills"
      className="py-5"
      style={{
        background:
          "radial-gradient(circle at top right,#1a1a45 0%,#050816 60%,#04030d 100%)",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-secondary text-uppercase">
            My Skills
          </h6>

          <h1 className="text-white fw-bold">
            Technical Skills
          </h1>
        </div>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div className="col-lg-4 col-md-6" key={index}
             data-aos="fade-up"
             data-aos-delay={index * 100}
            >

              <div className="skill-card">

                <div
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <h4 style={{color:"whitesmoke"}}>{skill.name}</h4>

                <div className="progress mt-3">

                  <div
                    className="progress-bar"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  >
                    {skill.level}%
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

export default Skills;
