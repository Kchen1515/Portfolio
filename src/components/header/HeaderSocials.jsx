import React from 'react' 
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a className="scale-btn" href='https://www.linkedin.com/in/kongyuchen/' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a className="scale-btn" href='https://github.com/Kchen1515' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a className="scale-btn" href='https://www.youtube.com/channel/UC2ENhwzCwWMpJhbuAIfXzfg' target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials