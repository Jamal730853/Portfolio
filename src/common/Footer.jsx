import React from "react";
import './Footer.css'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row align-items-center">

          {/* Logo */}

          <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">

            <h2 className="footer-logo">
              Jamal<span>.</span>
            </h2>

            <p className="footer-text">
              Full Stack Web Developer passionate about creating modern,
              responsive and user-friendly web applications.
            </p>

          </div>

          {/* Links */}

          <div className="col-lg-4 text-center mb-4 mb-lg-0">

            <h5 className="footer-title">
              Quick Links
            </h5>

            <div className="footer-links">

              <a href="#home">Home</a>

              <a href="#about">About</a>

              <a href="#skills">Skills</a>

              <a href="#projects">Projects</a>

              <a href="#contact">Contact</a>

            </div>

          </div>

          {/* Social */}

          <div className="col-lg-4 text-center text-lg-end">

            <h5 className="footer-title">
              Follow Me
            </h5>

            <div className="footer-social">

              <a href="https://github.com/Jamal730853">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/jamal-helal-049194329">
                <FaLinkedin />
              </a>

              <a href="https://www.instagram.com/jamal_dev122/">
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">

          <p>
            © 2026 Jamal Helal. All Rights Reserved.
          </p>

          <a href="#home" className="scroll-top">
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;