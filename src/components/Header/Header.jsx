import React from 'react'
import './Header.css';

// add variable to store username and push through to this div 
// maybe make home nav element
// make icon switcher to search for movies or users

export const Header = () => {
  return (
    <div className="nav-container">
        <div className="left">CINEVERSE</div>
        
        <div className="center">
            ICON HERE
            <input type="text" className="input" placeholder='Search...' />
        </div>
        
        <div className="right">USERNAME</div>
    </div>
  )
}
