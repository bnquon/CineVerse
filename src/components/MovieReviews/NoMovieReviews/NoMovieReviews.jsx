import React from 'react'
import "./NoMovieReviews.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinStars } from '@fortawesome/free-solid-svg-icons'

export const NoMovieReviews = () => {
  return (
    <div>
        THIS IS THE DIV FOR IF THERES NO MOVIE REVIEWS
        <FontAwesomeIcon icon={faFaceGrinStars} style={{color: "#FFD43B",}} />
    </div>
  )
}
