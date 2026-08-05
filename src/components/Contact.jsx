import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import AOS from "aos";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        "service_177cjnw",
        "template_3y7a48b",
        form.current,
        "x3m8mWA-h5kYy22_K"
      )
      .then(() => {
        setSuccess("✅ Your message has been sent successfully.");
        form.current.reset();

        setTimeout(() => {
          setSuccess("");
        }, 4000);
      })
      .catch((err) => {
        console.error(err);
        setError("❌ Failed to send message. Please try again.");

        setTimeout(() => {
          setError("");
        }, 4000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

   
 

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background:
          "radial-gradient(circle at top right,#1a1a45 0%,#050816 60%,#04030d 100%)",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-uppercase text-secondary">
            Get In Touch
          </h6>

          <h1 className="text-white fw-bold">
            Contact <span className="text-info">Me</span>
          </h1>

          <p className="text-secondary mt-3">
            Feel free to contact me for collaboration or freelance projects.
          </p>
        </div>

        <div className="row g-5"
     
        >

          <div className="col-lg-5">

            <div className="contact-card"
               data-aos="fade-right"
            >

              <h3 className="text-white mb-4">
                Contact Information
              </h3>

              <div className="contact-item"
              
              >
                <FaEnvelope className="contact-icon" />
                <div>
                  <h6>Email</h6>
                  <span>jamalhelal577@gmail.com</span>
                </div>
              </div>

              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <h6>Phone</h6>
                  <span>+963 994808518</span>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h6>Location</h6>
                  <span>Aleppo, Syria</span>
                </div>
              </div>

              <div className="social-icons mt-4">

                <a
                  href="https://github.com/Jamal730853"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/jamal-helal-049194329"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

          <div className="col-lg-7">

            <div className="contact-card"
              data-aos="fade-left"
            >

              <form ref={form} onSubmit={sendEmail}>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <input
                      type="text"
                      name="name"
                      className="form-control contact-input"
                      placeholder="Your Name"
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <input
                      type="email"
                      name="email"
                      className="form-control contact-input"
                      placeholder="Email"
                      required
                    />

                  </div>

                </div>

                <input
                  type="text"
                  name="subject"
                  className="form-control contact-input mb-3"
                  placeholder="Subject"
                  required
                />

                <textarea
                  rows="6"
                  name="message"
                  className="form-control contact-input mb-4"
                  placeholder="Your Message"
                  required
                ></textarea>

                {success && (
                  <div className="alert alert-success">
                    {success}
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-info px-5"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;