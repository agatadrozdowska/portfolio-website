import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import AvatarMaker from '../../assets/AvatarMaker.png';



const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello, I am</h5>
                <h1>Agata Drozdowska</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={AvatarMaker} alt="agata" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>

        </header>
    )
}

export default Header;