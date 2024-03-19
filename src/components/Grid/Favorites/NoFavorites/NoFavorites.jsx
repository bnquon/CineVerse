import React, { useState, useEffect } from 'react'
import './NoFavorites.css'

export const NoFavorites = (props) => {

  const [favoriteMsg, setFavoriteMsg] = useState('');

  useEffect(() => {
    console.log('Nowatchlist called');
      if (props.isUsersPage) {
        setFavoriteMsg('Save a movie to your favorites!');
      } else {
        setFavoriteMsg('User has no favorites');
      }
  }, [props])

  return (
    <div id='NoFavorites'><span>{favoriteMsg}</span></div>
  )
}
