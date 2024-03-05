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

  const hardcodedReviews = [
    { rating: 8, review: 'Great movie!', username: 'User1' },
    { rating: 9, review: 'Amazing plot!', username: 'User2' },
    { rating: 7, review: 'Good performances!', username: 'User3' },
    { rating: 10, review: 'Must-watch!', username: 'User4' },
    { rating: 6, review: 'Decent storyline.', username: 'User5' },
    { rating: 8.5, review: 'Impressive direction!', username: 'User6' },
    { rating: 9, review: 'Beautiful cinematography.', username: 'User7' },
    { rating: 7.5, review: 'Interesting characters.', username: 'User8' },
    { rating: 8, review: 'Enjoyed it!', username: 'User9' },
    { rating: 9.5, review: 'Top-notch acting!', username: 'User10' },
  ];

  return (

    <>
      <div id="movieReviewContainer">
        
        <div id="movieReviewTitle">
          <h2>{hardcodedReviews.length} Reviews for this Movie</h2>
        </div>

        <div id='movieReview-Grid' className='movie-review-container'>
            {hardcodedReviews.length > 0 ? 
              hardcodedReviews.map(review => (
                <MovieReviewItem {...review} />
              )) :

              <NoMovieReviews/>
            }
        </div>
      </div>
    </>
  );
};
