import React, { useState, useEffect } from 'react'
import "./Reviews.css"
import { Card } from './Card/Card.jsx'
import { NoUserReviews } from './NoUserReviews/NoUserReviews.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
// import placeholder from "../../../assets/inception.jpg"

export const Reviews = (props) => {

  const [userReviews, setUserReviews] = useState([]);
  
  useEffect(() => {
    setUserReviews(props.reviews);
  }, [props]);

  return (
    <div className='review-container'>
      <div id="userReview-title">
        <span><FontAwesomeIcon icon={faComments}/> Reviews</span>
      </div>

        <div className="review-grid">

          {userReviews.length > 0 ? userReviews.map(review => (
            <Card movieName={review.moviename} rating={review.rating} text={review.review} poster={review.movieposterurl}></Card>
          )) : 
            <NoUserReviews isMat/>
          }
{/* 
          // {reviews.length > 0 ? 
          //   reviews.map(review => (
          //     <MovieReviewItem {...review} />
          //   )) :

          //   <NoMovieReviews title={props.title}/>
          // } */}

        </div>

    </div>
  );
}
