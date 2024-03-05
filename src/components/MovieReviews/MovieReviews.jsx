import React, { useState, useEffect } from 'react';
import "./MovieReviews.css";
import { NoMovieReviews } from './NoMovieReviews/NoMovieReviews';

const MovieReviewItem = ({ rating, review, username }) => {
  return (
    <div className='movie-review-item'>
      <h3>⭐ {rating}/10</h3>
      <h4>Review by: {username}</h4>
      <p>{review}</p>
    </div>
  );
};

export const MovieReviews = (props) => {

  const [reviews, updateReviews] = useState([]);

  useEffect(() => {
    const populateMovieReviews = async () => {
      try {
          const response = await fetch(`/api/getMovieReviews?movieName=${props.title}`, {
              method: 'GET',
          });
          if (response.ok) {
              const data = await response.json();
              const temp = data.listOfReviews;
              updateReviews(temp);
              console.log('GET CALL FROM MovieReviews.jsx: ', temp);
          }
      } catch (error) {
          console.error('Error fetching movie reviews: ', error.message);
      }
  }
  populateMovieReviews();
  }, [props.title])

  return (

    <>
      <div>
        Total Reviews for this Movie: {reviews.length}
      </div>
      <div id='movieReview-Grid' className='movie-review-container'>
          {reviews.length > 0 ? 
            reviews.map(review => (
              <MovieReviewItem {...review} />
            )) :

            <NoMovieReviews/>
          }
      </div>
    </>
  );
};
