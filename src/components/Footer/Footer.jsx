import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//www.linkedin.com/in/brandon-quon
//https://github.com/bnquon

export const Footer = () => {
  return (
    <div id='footer'> 
      <span>

        <a href="https://github.com/bnquon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{color: '#ffffff'}}/></a>
        &nbsp;
        <a href="www.linkedin.com/in/brandon-quon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{color: '#ffffff'}}/></a>
      </span>
    </div>
  )
}