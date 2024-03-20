import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//www.linkedin.com/in/brandon-quon
//https://github.com/bnquon

export const Footer = (props) => {

  const { isAbsolute } = props;

  return (
    <div id='footer' style={{ position: isAbsolute ? 'absolute': 'relative',
                              height: isAbsolute ? '6vh': '8vh',
                              fontSize: isAbsolute? '4vh': '6vh' }}> 
      <span>

        <a href="https://github.com/bnquon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{color: '#ffffff'}}/></a>
        &nbsp;
        <a href="www.linkedin.com/in/brandon-quon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{color: '#ffffff'}}/></a>
      </span>
    </div>
  )
}