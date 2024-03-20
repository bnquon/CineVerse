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
        <FontAwesomeIcon icon={faGithub}/>
        <FontAwesomeIcon icon={faLinkedin}/>
      </span>
    </div>
  )
}
