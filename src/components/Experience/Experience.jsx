import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'


const Experience = () => {
  return (
    <section id="experience" >
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Back End Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Working Knowledge</small>
              </div>
            </article>
            
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience