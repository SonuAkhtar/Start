import React, { useRef, useState } from "react";
import "./contact.css";
import Map from "../Map/Map";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyt7jdd",
        "template_m60ts5c",
        formRef.current,
        "MeGh2VAFAQa4tldhu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (err) => {
          console.log(err.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact_container">
        <div className="left">
          <form ref={formRef} className="form" onSubmit={handleSubmit}>
            <h1 className="title">Contact Us</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input"
            />
            <textarea
              rows={10}
              name="message"
              placeholder="message"
              className="textArea"
            ></textarea>
            <button className="btn" type="submit">
              Send
            </button>
            <span className={`successMsg ${success ? "show" : ""}`}>
              Thank you for connecting. We will get back to you soon.
            </span>
          </form>
        </div>
        <div className="right">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
