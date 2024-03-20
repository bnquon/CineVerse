import React, { useState, useEffect } from 'react';
import "./MovieReviews.css";
import { ReviewModal } from '../ReviewModal/ReviewModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinStars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Bar } from "react-chartjs-2";

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
        There are unfortunately no reviews for {props.title}. <br />
        Be the first one! <FontAwesomeIcon icon={faFaceGrinStars} size='1.5x' style={{color: "#74C0FC"}} />
      </h2>
    </div>
  );
}

export const MovieReviews = (props) => {

  const [movieRatingCount, setMovieRatingCount] = useState([]);
  const [averageRating, updateAverageRating] = useState(0);

  const [modalDisplay, setModalDisplay] = useState(false);
  const [reviews, updateReviews] = useState([]);

  useEffect(() => {
    const populateMovieGraph = async () => {
      try {
          const response = await fetch(`/api/getMovieRatings?movieName=${props.title}`, {
              method: 'GET',
          });
          if (response.ok) {
              const data = await response.json();
              const temp = data.movieInfo;
              const movieValuesArray = Object.values(temp);
              setMovieRatingCount(movieValuesArray);
          }
      } catch (error) {
          console.error('Error fetching user ratings: ', error.message);
      }
  }
  populateMovieGraph();

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

  useEffect(() => {
    var numOfReviews = 0;
    var sum = 0;
    for (let i = 0; i < movieRatingCount.length; i++) {
        if (movieRatingCount[i] != 0) {
            numOfReviews += parseInt(movieRatingCount[i]);
            sum += (movieRatingCount[i]*(i+1));
        }
    }
    console.log('Sum: ', sum, ' numOfReviews: ', numOfReviews);

    if (sum === 0) {
        updateAverageRating(0);
    } else {
        var temp = (sum / numOfReviews);
        updateAverageRating(Math.round(temp * 10) / 10)
    }
  }, [movieRatingCount])

  const toggleModal = () => {
    setModalDisplay(!modalDisplay);
    console.log('Modal should be: ', modalDisplay);
  }

  return (

    <>
      <div id="left-cell">

        <div id="average">
            <h2>Average Rating by Users ⭐ {averageRating}/10 </h2>
        </div>
        <div id='graph-Container'>
            <Bar 
                data={{
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    datasets: [
                    {
                        data: movieRatingCount,
                        backgroundColor: 'hsl(17, 83%, 64%)',
                        borderWidth: 3,
                        borderColor: 'hsl(0, 100%, 50%)',
                        barPercentage: 0.7,
                    },
                    ],
                }}
                options={{
                    scales: {
                        x: {                        
                            ticks: {
                                color: 'black', 
                                font: {
                                    size: 18,
                                    weight: 'bold',
                                },
                                display: true,
                            },
                            title: { 
                                display: true,
                                text: 'Rating',
                                color: 'black', 
                                font: {
                                    size: 22,
                                    weight: 'bold',
                                },
                            },
                            grid: {
                                display: false,
                            },
                            border: {
                                display: false,
                            },
                        },
                        y: {
                            title: { 
                                display: true,
                                text: 'Count',
                                color: 'black', 
                                font: {
                                    size: 22,
                                    weight: 'bold',                               
                                },
                            },
                            ticks: {
                                precision: 0,
                                color: 'black',
                                font: {
                                  size: 18,
                                  weight: 'bold',
                                },
                              },
                            grid: {
                                display: false,
                            },
                            border: {
                                display: false,
                            },
                        },
                    },
                    plugins: {
                        legend: {
                        display: false,
                        },
                    }
                }}
            />
        </div>
      </div>
      <div id="movieReviewContainer">
        
        <div id="movieReviewTitle">
            <h2>{reviews.length} Reviews for this Movie</h2>
            <button className='btn' onClick={toggleModal}><FontAwesomeIcon icon={faPlus} /> Add a Review!</button>        
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
