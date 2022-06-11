import React from 'react'
import './about.css'
import me from '../../assests/me.jpg'
import {FaWrench} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaUserGraduate} from 'react-icons/fa'



const About = () => {
  return (
    <section id="about" >
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me}alt="a" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaWrench className='about__icon'/>
              <h5>Experience</h5>
              <small>Self Taught</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Programs</h5>
              <small>Scrimba</small>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Education</h5>
              <small>UB: SPPS, Doctorate of Pharmacy</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, enim alias iste minima magnam incidunt eligendi? Quaerat, totam pariatur autem, nostrum rem tempore impedit expedita labore culpa voluptatibus unde numquam!</p>
          <a href='#contact' className="btn btn-primary" >Let's Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About