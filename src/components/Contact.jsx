import { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin,FaGithub,FaFilePdf, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <h2 className="contact-title">Get in touch</h2>
        <h2 className="contact-title">with me</h2>
        <p className="contact-description">
          I’m always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
        <button className="contact-button" onClick={() => setShowModal(true)}>
          Contact Me
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content expanded">
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
            <h3 className="modal-title">Contact Info</h3>
            <ul className="modal-list">
              <li><FaPhone /> +963 964 718 061 </li>
              <li>
                <FaEnvelope /> thuryaamen@gmail.com
              </li>
              <li>
                <FaLinkedin /> 
                <a href="https://www.linkedin.com/in/thuraya-aldj-0a2615331"
                  target="_blank">
                  {" "}
                  LinkedIn
                </a>
              </li>
              <li>
                <FaGithub />
                <a href="https://github.com/thuryaaldj" target="_blank">
                  {" "}
                  GitHub
                </a>
              </li>
              <li>
                <FaFilePdf />
                <a href="/ThurayaAldj-Front-End" target="_blank" download>
                  {" "}
                  Download My CV </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
