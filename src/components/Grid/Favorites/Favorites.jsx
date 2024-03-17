import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./Favorites.css"

export const Favorites = () => {
  return (
    <div id="favoritesContainer">
      <div id="favoritesTitle">
        <span><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} /><h1> Favorites</h1></span>
      </div>
    </div>
  )
}
