import React from "react";
import "../App.css";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   // e.preventDefault();

  //   emailjs.sendForm('service_vwdp4la', 'template_43yitzb', form.current, 'oYymItkIoREaVvBlM')
  //   alert("thanks!");
  // };
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>email</h4>
            <h5>email.email.com</h5>
            <a href="mailto:me@me.com">send an email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>fb/if messenger</h4>
            <h5>brian's facebook</h5>
            <a href="https://m.me/brian.strout">message me</a>
          </article>
        </div>
        <h2>contact me</h2>
        {/* <h5>get in touch</h5> */}

        {/* <form ref={form} onSubmit={sendEmail}> 
<input type="text" name='name' placeholder='Your Full Name' required/>
<input type="email" name='email' placeholder='you@you.com' required/>
<textarea name="message" id="message" cols="5" rows="10" required></textarea>
<button type='submit' className='btn btn-primary'>Send Mesg</button>
</form> */}
      </div>
    </section>
  );
};

export default Contact;
