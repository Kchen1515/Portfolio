import React from 'react'
import Resume from "../../assests/Resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a  className='btn'  href={Resume} download>Resume</a>
        <a className='btn btn-primary' href="#contact">Contact</a>
    </div>
  )
}

export default CTA