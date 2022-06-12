import React from 'react'
import './portfolio.css'
import ecommerce from '../../assests/ecommerce.png'
import poke from '../../assests/pokedex.jpg'



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item' >
          <div className='portfolio__item-image'>
            <img src={ecommerce} alt="ecommerce website"></img>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'  target="_blank" rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary'  target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' >
          <div className='portfolio__item-image'>
            <img src={poke} alt="pokedex"></img>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'  target="_blank" rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary'  target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' >
          <div className='portfolio__item-image'>
            <img src={ecommerce} alt="ecommerce website"></img>
          </div>
          <h3>This is portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'  target="_blank" rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary'  target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio