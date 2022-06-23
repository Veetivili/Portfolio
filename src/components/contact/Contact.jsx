import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {SiDiscord} from 'react-icons/si'
import {SiLinkedin} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const notify = () => toast.success('Email Sent!',{
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_id', 'template_id', form.current, 'user_id')
    e.target.reset()
  
    

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>email@email.com</h5>
            <a href="mailto:<email-here>" rel="noreferrer" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <SiDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>username</h5>
            <a href="https://<link-here>" rel="noreferrer" target="_blank">Send friend request</a>
          </article>

          <article className='contact__option'>
            <SiLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>username</h5>
            <a href="https://<link-here>" rel="noreferrer" target="_blank">Connect with me</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary' onClick={notify}>Send Message</button>
        </form>
        <ToastContainer theme="dark" className="success" />
      </div>
    </section>
  )
}

export default Contact