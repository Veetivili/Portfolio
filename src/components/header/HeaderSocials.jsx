import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        < a href="https://<link-here>" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        < a href="https://<link-here>" rel="noreferrer" target="_blank"><FaGithub/></a>
        < a href="https://<link-here>" rel="noreferrer" target="_blank"><RiInstagramFill/></a>
    </div>
  )
}

export default HeaderSocials