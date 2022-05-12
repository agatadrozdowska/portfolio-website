import React from 'react';
import './about.css';
import ME from '../../assets/about-me.png';
import { FaAward } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { AiOutlineFolderOpen } from 'react-icons/ai';


const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="About image" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <GiGraduateCap className='about__icon' />
                            <h5>Education</h5>
                            <small>Master's Degree</small>
                        </article>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFolderOpen className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>Hello, my name is Agata and I am a Fullstack Developer based in Austin, Texas. Learning is my passion and I use it
                        to expand my horizons in Software Engineering. I would be excited to help you build the next Big Thing! Don’t
                        hesitate to contact me today! </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;