import React from 'react'
import './NoUserReviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'

export const NoUserReviews = () => {
  return (
    <div id="noUserReviews">
        <span><FontAwesomeIcon icon={faHand} /> Wait, it appears you have not posted any reviews. Start by searching up any movie at the top and leaving a review on it!</span>
    </div>
  )
}
