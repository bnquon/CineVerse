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

  // // Sample data for testing
  // const reviews = [
  //   { title: 'Review 1', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //   { title: 'Review 2', review: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  //   { title: 'Review 3', review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  //   { title: 'Review 4', review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  //   { title: 'Review 5', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  //   { title: 'Review 6', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  //   { title: 'Review 7', review: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.' },
  //   { title: 'Review 8', review: 'Vivamus non arcu. Nullam risus nisl, iaculis vel, suscipit quis, luctus non, massa.' },
  //   { title: 'Review 9', review: 'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.' },
  //   { title: 'Review 10', review: 'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.' },
  // ];

  return (
    <div id='movieReview-Grid' className='movie-review-container'>
        {reviews.length > 0 ? 
          reviews.map(review => (
            <MovieReviewItem {...review} />
          )) :

          <NoMovieReviews/>
        }
    </div>
  );
};
