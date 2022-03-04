import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zzxbcvr', 'template_9uknfds', form.current, '5_iLLucZYB7xF1vKW')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>collinstshuma@gmail.com</h5>
              <a href='mailto:collinstshuma@gmail.com' target='_blank'>Send a message</a>
            </article>

            <article className="contact_option">
              <BsWhatsapp className='contact_option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+27655384860</h5>
              <a href='http://api.whatsapp.com/send?phone=+27655384860' target='_blank'>Send a message</a>
            </article>

            <article className="contact_option">
              <RiMessengerLine className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>Collins Tshuma</h5>
              <a href='http://m.me/collins.tshuma' target='_blank'>Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
       </div>
    </section>
  )
}

export default Contact