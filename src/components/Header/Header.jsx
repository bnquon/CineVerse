import React, { useState } from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons'

// add variable to store username and push through to this div 
// maybe make home nav element
// make icon switcher to search for movies or users

export const Header = (props) => {

    const [searchType, setSearchType] = useState("movie");

    const userClick = () => {
      setSearchType("user");
    }

    const movieClick = () => {
      setSearchType("movie");
    }

  return (
    <div className="nav-container">
        <div className="left">CINEVERSE</div>
        
        <div className="center">
            <FontAwesomeIcon onClick={movieClick} id='searchMovie' icon={faFilm} style={{ opacity: searchType === 'movie' ? "1" : "0.3" }}/>
            <FontAwesomeIcon onClick={userClick} id='searchUser' icon={faUsers}  style={{ opacity: searchType === 'user' ? "1" : "0.3" }} />
            <input type="text" className="input" placeholder={searchType === 'movie' ? "Search Movies..." : "Search Users..."} />
            <FontAwesomeIcon id='searchIcon' icon={faSearch} />
        </div>
        
        <div className="right">{props.username}</div>
    </div>
  )
}
