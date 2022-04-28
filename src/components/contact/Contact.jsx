import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vf1tyqj', 'template_mxn5hfe', form.current, '5Hy76oj2auzNVgX3b');
        e.target.reset();
    }
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>agatadrozdowska.us@gmail.com</h5>
                        <a href="mailto:agatadrozdowska.us@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Agata Drozdowska</h5>
                        <a href="https://m.me/agata.walus" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlineWhatsApp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+15129712151</h5>
                        <a href="https://api.whatsapp.com/send?phone=15129712151" target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='subject' placeholder='Your Subject' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;