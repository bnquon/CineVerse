import React, { useState, useEffect } from 'react'
import './NoUserReviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'

export const NoUserReviews = (props) => {

  const [reviewMsg, setReviewMsg] = useState('');
  useEffect(() => {
      if (props.isUsersPage) {
        setReviewMsg('Wait, It appears you have not posted any reviews. \nStart by searching up any movie at the top and leaving a review on it!');
      } else {
        setReviewMsg('User has no reviews');
      }
  }, [props])

  return (
    <div id="noUserReviews" style={props.isUsersPage ? {}: {textAlign: 'center'} }>
        <span>{reviewMsg}</span>
    </div>
  )
}
