import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import {useState} from 'react'


const Nav = () => {
  const[active, setActive] = useState("#")
  return (
    <nav>
      <a href="#"  onClick={() => setActive('#')} className={active === "#" ? "active": ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === "#about" ? "active": ''} ><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === "#experience" ? "active": ''}><BiBookOpen/></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={active === "#portfolio" ? "active": ''}><MdOutlineHomeRepairService/></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === "#contact" ? "active": ''}><TiContacts/></a>
    </nav>
  )
}

export default Nav