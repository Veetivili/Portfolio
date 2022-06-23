import React from 'react'
import './footer.css'
import {RiInstagramFill} from 'react-icons/ri'
import {SiFacebook, SiLinkedin} from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <a href='#home' onClick="" className='footer__logo'>VeetiH</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#feed'>Feed</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com/veetivili'><RiInstagramFill /></a>
        <a href='https://linkedin.com/veetih'><SiLinkedin /></a>
        <a href='https://facebook.com/veeti.hakala.7'><SiFacebook /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Veeti Hakala. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer