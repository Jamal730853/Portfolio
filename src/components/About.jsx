import React, { useEffect } from "react";
import './About.css'
import AOS from "aos";
function About() {
      useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
 <section
  id="about"
  className="py-5 text-white"
  style={{
    background:
      "radial-gradient(circle at top right, #1a1a45 0%, #050816 55%, #05051b 100%)",
  }}
>
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-uppercase text-secondary">Introduction</h6>
        <h1 className="about-title">
  About <span>Me</span>
</h1>
        </div>

        <div className="row align-items-center gy-5">

          {/* Left */}
          <div className="col-lg-6"
             data-aos ="fade-right">

            <h2 className="fw-bold mb-4"
            
            >
              Passionate Full Stack Developer
            </h2>

            <p className="text-light opacity-75 fs-5">
              I'm an Information Engineering student passionate about
              building modern, responsive, and scalable web applications.
              I enjoy transforming ideas into real products using React,
              Laravel, PHP, and MySQL.
            </p>

            <p className="text-light opacity-75">
              I believe in writing clean code, learning continuously,
              and creating digital experiences that users love.
            </p>

            <a href="/CV/Fullstack_web_devloper_cv.pdf"
             download
            
            className="btn btn-primary mt-3 px-4 py-2">
              Download CV
            </a>

          </div>

          {/* Right */}
          <div className="col-lg-6"
          data-aos="fade-left"
          >

            <div className="row g-4">

              <div className="col-6">
                <div className=" service-card text-white p-4 h-100">
                  <h3>💻</h3>
                  <h5>Frontend</h5>
                  <p>React, Bootstrap, JavaScript</p>
                </div>
              </div>

              <div className="col-6">
                <div className=" service-card text-white p-4 h-100">
                  <h3>⚙️</h3>
                  <h5>Backend</h5>
                  <p>Laravel, PHP, MySQL</p>
                </div>
              </div>

              <div className="col-6">
                <div className="  service-card text-white p-4 h-100">
                  <h3>🎨</h3>
                  <h5>UI Design</h5>
                  <p>Modern & Responsive Interfaces</p>
                </div>
              </div>

              <div className="col-6">
                <div className="  service-card text-white p-4 h-100">
                  <h3>🚀</h3>
                  <h5>Performance</h5>
                  <p>Fast & Optimized Applications</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;