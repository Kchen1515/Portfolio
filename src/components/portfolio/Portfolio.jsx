import React from 'react'
import './portfolio.css'
import ecommerce from '../../assests/vault.PNG'
import poke from '../../assests/pokedex.jpg'
import Rock from '../../assests/Rock.PNG'



const Portfolio = () => {
  return (
    <section id="portfolio">
      
      <h2>PROJECTS</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item' >
          <div className='portfolio__item-image'>
            <img src={ecommerce} alt="ecommerce website"></img>
          </div>
          <h3>Vault KYC</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Kchen1515/rythmn" className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href="http://www.kycvaullt.com/"className='btn btn-primary'  target="_blank"rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' >
          <div className='portfolio__item-image'>
            <img src={poke} alt="pokedex"></img>
          </div>
          <h3>Gotta Catch 'Em All</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary'  target="_blank"rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' >
          <div className='portfolio__item-image'>
            <img src={Rock} alt="ecommerce website"></img>
          </div>
          <h3>Eight Gates Fitness</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Kchen1515/eightgates" className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href="http://www.eightgatesfitness.com/" className='btn btn-primary'  target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio