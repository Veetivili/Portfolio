import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service_list-icon' />
              <p>Design for common devices: desktop, mobile, tablet</p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p>Mockups: for all feature pages</p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p>Consulting: to provide the best UI experience</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service_list-icon' />
              <p>Desing and implement static websites</p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p>Design and implement small sized full-stack web applications</p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p>Hosting websites / services in cloud environment</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services