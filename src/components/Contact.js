import React from "react";
import { useRef } from "react";
import "../App.css";
import "./contact.css";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

// import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm(
      "service_vwdp4la",
      "template_43yitzb",
      form.current,
      "oYymItkIoREaVvBlM"
    );
    alert("thanks!");
  };
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact_hi">
          <h2>contact me</h2>
          <br />
          <h5>get in touch</h5>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <RiMessengerLine />
            <h4>fb/if messenger</h4>
            <h5>brian's facebook</h5>
            <a href="https://m.me/brian.strout">message me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="you@you.com" required />
          <textarea
            name="message"
            id="message"
            placeholder="Your kindest message"
            cols="5"
            rows="10"
            required
          ></textarea>
          <button id="subButton" type="submit" className="btn btn-primary">
            Send Mesg
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
