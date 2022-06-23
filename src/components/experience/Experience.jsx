import React from 'react'
import './experience.css'
import {FaBootstrap, FaReact, FaNode, FaListAlt} from 'react-icons/fa'
import {TbBrandJavascript, TbBrandHtml5, TbBrandCss3} from 'react-icons/tb'
import {SiRedux, SiPython, SiMysql, SiExpress, SiMongodb, SiKubernetes, SiDocker} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
            <div className='experience__content'>

              <article className='experience_details'>
                <TbBrandHtml5 className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Fluent</small>
                </div>
              </article>

              <article className='experience_details'>
                <TbBrandCss3 className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Fluent</small>
                </div>
              </article>

              <article className='experience_details'>
                <TbBrandJavascript className='experience__details-icon'/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <FaReact className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>

              <article className='experience_details'>
                <SiRedux className='experience__details-icon'/>
                <div>
                  <h4>Redux</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <FaBootstrap className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>

        {/* =======END OF FRONTEND=======*/}

        <div className='experience_backend'>
          <h3>Backend Development</h3>
            <div className='experience__content'>

              <article className='experience_details'>
                <SiPython className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <SiMysql className='experience__details-icon'/>
                <div>
                  <h4>Mysql</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <FaNode className='experience__details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <SiMongodb className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <SiExpress className='experience__details-icon'/>
                <div>
                  <h4>Express.js</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <FaListAlt className='experience__details-icon'/>
                <div>
                  <h4>Mongoose</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <SiDocker className='experience__details-icon'/>
                <div>
                  <h4>Docker</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience_details'>
                <SiKubernetes className='experience__details-icon'/>
                <div>
                  <h4>Kubernetes</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>


      </div>
    </section>
  )
}

export default Experience