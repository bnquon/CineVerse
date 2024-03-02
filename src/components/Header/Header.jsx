import React, { useState } from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

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

    const search = async () => {
      const item = document.getElementById('searchBar').value;
      if (searchType === 'movie') {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${item}&api_key=221c1bc4eb253a3e2e281a0820503ced` , {
            method: 'GET',
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data.results[0]);
            // useNavigate('./movie')
          } else console.error('Failed to fetch search results: ', response.statusText);
        } catch (error) {
          console.error('Error fetching search results: ', error.message);
        }
      }
    }

  return (
    <div className="nav-container">
        <div className="left">CINEVERSE</div>
        
        <div className="center">
            <FontAwesomeIcon onClick={movieClick} id='searchMovie' icon={faFilm} style={{ opacity: searchType === 'movie' ? "1" : "0.3" }}/>
            <FontAwesomeIcon onClick={userClick} id='searchUser' icon={faUsers}  style={{ opacity: searchType === 'user' ? "1" : "0.3" }} />
            <input type="text" id='searchBar' className="input" placeholder={searchType === 'movie' ? "Search Movies..." : "Search Users..."} />
            <FontAwesomeIcon id='searchIcon' icon={faSearch} onClick={search} />
        </div>
        
        <div className="right">Logged in as:&nbsp;<span style={{fontWeight:"700"}}>{props.username}</span></div>
    </div>
  )
}
