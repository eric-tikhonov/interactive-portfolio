import React from "react";
import "./contact-me.css";

function ContactMe() {
  return (
    <section id="contact-me" className="contact-me-section">
      <div className="heading">Get In Touch</div>
      <p className="description">While I’m not actively seeking new opportunities at the moment, my inbox remains open. Feel free to reach out with any questions or just to connect—I’ll do my best to respond promptly!</p>
      <a
        className="email-link"
        href="mailto:erictikhonov@outlook.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
}

export default ContactMe;
