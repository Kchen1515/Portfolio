import React from 'react'
import './experience.css'

import {IoLogoCss3} from 'react-icons/io'
import {GiCommercialAirplane } from 'react-icons/gi'
import {FaReact, FaHtml5, FaCcStripe} from 'react-icons/fa'
import {SiPython, SiNextdotjs, SiJavascript, SiMaterialui} from 'react-icons/si'



const Experience = () => {
  return (
    <section id="experience" >
     
      <h2>SKILLS</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML5</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Back End / Libraries / Frameworks </h3>
          <div className="experience__content">
          <article className='experience__details'>
            <SiPython className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
            </div>
          </article>
          <article className='experience__details'>
            <SiMaterialui className='experience__details-icon'/>
            <div>
              <h4>Material Ui</h4>
            </div>
          </article>
          <article className='experience__details'>
            <SiNextdotjs className='experience__details-icon'/>
            <div>
              <h4>Next.js</h4>
            </div>
          </article>
          <article className='experience__details'>
            <FaCcStripe className='experience__details-icon'/>
            <div>
              <h4>Stripe.js</h4>
            </div>
          </article>
            
          <article className='experience__details'>
            <GiCommercialAirplane className='experience__details-icon'/>
            <div>
              <h4>Sanity</h4>
            </div>
          </article>
            
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience