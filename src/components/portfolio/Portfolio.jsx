import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
{
  id: 1,
  image: IMG1,
  title: 'Project1',
  github: 'https://<link-to-project>',
  demo: 'https://<link-to-project>'
},
{
  id: 2,
  image: IMG2,
  title: 'Project2',
  github: 'https://<link-to-project>',
  demo: 'https://<link-to-project>'
},
{
  id: 3,
  image: IMG3,
  title: 'Project3',
  github: 'https://<link-to-project>',
  demo: 'https://<link-to-project>'
}
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                  </div>
                </article>
              )
            })
          }  
      </div>
    </section>
  )
}

export default Portfolio