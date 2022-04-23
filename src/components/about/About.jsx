import React from 'react';
import './about.css';
import ME from '../../assets/AvatarMaker.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
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
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>Lorem ipsum dolor</small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFolderOpen className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas id consequuntur voluptatibus fuga necessitatibus quisquam possimus ipsam est omnis, dignissimos officia commodi praesentium, quasi aperiam dolore ipsum soluta aliquam sapiente!</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;