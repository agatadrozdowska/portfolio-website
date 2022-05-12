import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import DEMO1 from '../../assets/demo1.gif';
import DEMO3 from '../../assets/demo3.gif';


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Hogwartsy Retail Store',
        github: 'https://github.com/Etsy-FEC',
        demo: DEMO1
    },
    {
        id: 2,
        image: IMG2,
        title: 'Retail Store Data Migration',
        github: 'https://github.com/SDC-Saskatchewanazon-TJTMAD',
        demo: ''
    },
    {
        id: 3,
        image: IMG3,
        title: 'Quality Of Life Comparator',
        github: 'https://github.com/agatadrozdowska/MVP',
        demo: DEMO3
    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: 'Placeholder for project name',
    //     github: '',
    //     demo: ''
    // },
    // {
    //     id: 5,
    //     image: IMG5,
    //     title: 'Placeholder for project name',
    //     github: '',
    //     demo: ''
    // },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: 'Placeholder for project name',
    //     github: '',
    //     demo: ''
    // }
]


const Portfolio = () => {

    return (
        <section id='portfolio'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} target="_blank" className='btn'>Github</a>
                                <a href={demo} target="_blank" className={demo ? 'btn btn__primary' : 'btn__hidden'}>Live Demo</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;