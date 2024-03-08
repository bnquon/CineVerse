import React, { useState, useEffect } from 'react';
import "./MovieReviews.css";
import { ReviewModal } from '../ReviewModal/ReviewModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinStars } from '@fortawesome/free-solid-svg-icons'

const MovieReviewItem = ({ rating, review, username }) => {
  return (
    <div className='movie-review-item'>
      <h3>⭐ {rating}/10</h3>
      <h4>Review by: {username}</h4>
      <p>{review}</p>
    </div>
  );
};

const NoMovieReviews= (props) => {
  return (
    <div id="no-review-message">
      <h2>
        There are unfortunately no reviews for {props.title}. Be the first one!
        <FontAwesomeIcon icon={faFaceGrinStars}/>
      </h2>
    </div>
  );
}

export const MovieReviews = (props) => {

  const [modalDisplay, setModalDisplay] = useState(false);
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
  }, [props.title, modalDisplay])

  // const hardcodedReviews = [
  //   { rating: 8, review: 'Great movie!', username: 'User1' },
  //   { rating: 9, review: 'Amazing plot!', username: 'User2' },
  //   { rating: 7, review: 'Good performances!', username: 'User3' },
  //   { rating: 10, review: 'Must-watch!', username: 'User4' },
  //   { rating: 6, review: 'Decent storyline.', username: 'User5' },
  //   { rating: 8.5, review: 'Impressive direction!', username: 'User6' },
  //   { rating: 9, review: 'Beautiful cinematography.', username: 'User7' },
  //   { rating: 7.5, review: 'Interesting characters.', username: 'User8' },
  //   { rating: 8, review: 'Enjoyed it!', username: 'User9' },
  //   { rating: 9.5, review: 'Top-notch acting!', username: 'User10' },
  // ];

  const toggleModal = () => {
    setModalDisplay(!modalDisplay);
    console.log('Modal should be: ', modalDisplay);
  }

  return (

    <>
      <div id="movieReviewContainer">
        
        <div id="movieReviewTitle">
            <h2>{reviews.length} Reviews for this Movie</h2>
            <button onClick={toggleModal}>Add a Review!</button>        
        </div>

        <div id='movieReview-Grid' className='movie-review-container'>
            {reviews.length > 0 ? 
              reviews.map(review => (
                <MovieReviewItem {...review} />
              )) :

              <NoMovieReviews title={props.title}/>
            }
        </div>

        {modalDisplay ? <ReviewModal toggleModal={toggleModal} title={props.title} poster={props.poster}/>: null}    

      </div>
    </>
  );
};
