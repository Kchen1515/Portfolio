import React from 'react' 
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/kongyuchen/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Kchen1515' target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://www.youtube.com/channel/UC2ENhwzCwWMpJhbuAIfXzfg' target="_blank" rel="noreferrer"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials