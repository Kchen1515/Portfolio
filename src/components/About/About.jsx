import React from 'react'
import './about.css'

import {FaWrench} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaUserGraduate} from 'react-icons/fa'
import Kong from '../../assests/kong.jpg'



const About = () => {
  return (
    <section id="about" >
      
      <h2>ABOUT ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Kong} alt="a" />
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
              <small>Codecademy</small>
              <small>Udemy</small>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Education</h5>
              <small>UB: SPPS, Doctorate of Pharmacy</small>
            </article>

          </div>
          <div className='gap'>
            <p className='community'>
              Hi there! My name is <strong> Kong Yu </strong>, I am a front-end developer who is passionate about creating web applications that enhance the experience of our day to day.
            </p> 
          
            <p className='community'>
              I was always fascinated about turning simple ideas into life changing applications but wasn’t confident in my younger self’s ability to do so. That’s why I went down the road of health care and became a <strong> pharmacist</strong>. Throughout pharmacy school, I fell in love with interacting with the community, participating in wellness clinics, giving presentations at the Boys and Girls Club and overall being a helping hand. However, after I obtained my license and started working, I realized that I was a part of a system that valued the dollar more than the people and decided to make a career change. 
 
            </p>
            <p  className='community'>
              I made the decision to switch into software engineering and dove in head first. I have been self-teaching for a couple of months now and I can confidently say that if nothing else, <strong> "I know how to center a div!".  </strong> All jokes aside, I really enjoy software development. While I don't love spending hours looking for a singular missing comma somewhere, seeing a blank webpage come to life is very rewarding. I started learning front-end development through a company called <strong>Scrimba</strong> that offered a complete Front-End Career Path focusing on the core technologies of HTML, CSS, JavaScript and React. Along the way, I took time to look into other programming languages like Python and delved deeper into other development related topics. 
              The amount of information seems infinite and has honestly kept me up at night but with excitement rather than fear. 
   
            </p>
            <p className='community'>
              <strong>Project-based learning</strong> is an invaluable approach that has helped me apply what I learn as I progress. The projects I built reflect my interest and hobbies which are mainly basketball, fitness, my friends and most of all, Anime! One of my goals as a developer is to eventually curate the skills necessary to create my own anime streaming service!

            </p>
          </div>
          <a href='#contact' className="btn btn-primary" >Let's Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About