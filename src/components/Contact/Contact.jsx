import React, { useRef, useState } from "react";
import "./contact.css";
import Map from "../Map/Map";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current.name.value === "") {
      return setNameError(true);
    } else {
      setNameError(false);
    }

    if (formRef.current.email.value === "") {
      return setEmailError(true);
    } else {
      setEmailError(false);
    }

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
            <div className="input_wrapper">
              <span className={`error_msg ${nameError ? "show" : ""}`}>
                Please provide your name
              </span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input"
              />
            </div>
            <div className="input_wrapper">
              <span className={`error_msg ${emailError ? "show" : ""}`}>
                Please provide your email
              </span>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input"
              />
            </div>
            <div className="input_wrapper">
              <textarea
                rows={10}
                name="message"
                placeholder="message"
                className="textArea"
              ></textarea>
            </div>
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
