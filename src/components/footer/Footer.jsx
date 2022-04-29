import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className='footer__logo'>AGATA DROZDOWSKA</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.facebook.com/agata.walus" target='_blank'>
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/drozdowska.agata/" target='_blank'>
                    <FaInstagram />
                </a>
                <a href="#footer">
                    <AiOutlineTwitter />
                </a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Agata Drozdowska. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;