import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jeswer9', 'template_64ws1wr', form.current, 'iKWMRtsI5yodIgvbr')
      
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>2021kucp1046@iiitkota.ac.in</h5>
            <a href='mailto:2021kucp1046@iiitkota.ac.in' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+916396165739</h5>
            <a href='https://api.whatsapp.com/send?phone=+916396165739' target="_blank">Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your message' rows="7"></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact