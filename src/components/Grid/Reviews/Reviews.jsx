import React, { useState, useEffect } from 'react'
import "./Reviews.css"
import { Card } from './Card/Card.jsx'
import { NoUserReviews } from './NoUserReviews/NoUserReviews.jsx'
// import placeholder from "../../../assets/inception.jpg"

export const Reviews = () => {

  const userID = sessionStorage.getItem('userID');
  const [userReviews, setUserReviews] = useState([]);
  useEffect(() => {
    const getUserReviews = async () => {
      try {
        const response = await fetch(`/api/getUserReviews?userID=${userID}`, {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data.reviews);
          setUserReviews(data.reviews);
        } else console.error('Failed to fetch user reviews: ', response.statusText);
          
      } catch (error) {
        console.error('Error fetching user reviews: ', error.message);
      }
    }

    getUserReviews();
  }, []);

  return (
    <div className='review-container'>
      <h1 id="title">Reviews</h1>

        <div className="review-grid">

          {userReviews.length > 0 ? userReviews.map(review => (
            <Card movieName={review.moviename} rating={review.rating} text={review.review} poster={review.movieposterurl}></Card>
          )) : 
            <NoUserReviews/>
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
