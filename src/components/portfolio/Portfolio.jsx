import React from 'react'
import './portfolio.css'
import ecommerce from '../../assests/vault.PNG'
import Rock from '../../assests/Rock.PNG'



const Portfolio = () => {
  return (
    <section id="portfolio">
      
      <h2>PROJECTS</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item' >
          <div className='portfolio__item-image'>
            <img src={ecommerce}  alt="ecommerce website"></img>
          </div>
          <h3>Vault KYC</h3>
          <p>Full Stack E-commerce application built with Sanity and Stripe.js</p>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Kchen1515/rythmn" className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href="http://www.kycvaullt.com/"className='btn btn-primary'  target="_blank"rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        
        <article className='portfolio__item' >
          <div className='portfolio__item-image '>
            <img className="lop" src={Rock} alt="ecommerce website"></img>
          </div>
          <h3>Eight Gates Fitness</h3>
          <p>Fitness app built with React.js and RapidAPI</p>
          <div className='portfolio__item-cta nlop'>
            <a href="https://github.com/Kchen1515/eightgates" className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href="http://www.eightgatesfitness.com/" className='btn btn-primary'  target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio