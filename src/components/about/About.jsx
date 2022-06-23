import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import {FaPuzzlePiece} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About' />
                    </div>
                </div>
            

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaGraduationCap className='about__icon' />
                            <h5>Studies</h5>
                            <small>97 / 240 ETCS<br/> ICT-Engineering: <br/>Software Engineer</small>
                        </article>

                        <article className='about__card'>
                            <MdWork className='about__icon' />
                            <h5>Experience</h5>
                            <small>Current position: <br/>Team leader, <br/> Junior Developer</small>
                        </article>

                        <article className='about__card'>
                            <FaPuzzlePiece className='about__icon' />
                            <h5>Current Project</h5>
                            <small>Forum Website<br/> #react, #redux, #javascript, #mongodb, #Node.js, #Express</small>
                        </article>
                    </div>

                    <p>
                    I've completed my first year studies in ICT-Engineering. I aim to graduate in 2,5 years, specializing in software engineering.
                    During my studies, I've developed an interest in project management and agile development. I enjoy working in leadership roles because I am detail-oriented and enjoy keeping track of the finer details in projects in which I am involved. 
                    Being in leadership roles allows me to interact with people on more personal level, which is something I enjoy. I study fullstack development but my interest and passion is more in the frontend.
                     <br/><span className='notice'> I'm looking for intership jobs for summer 2023.</span>
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
                </div>
            </div>
        </section>
    )
}

export default About