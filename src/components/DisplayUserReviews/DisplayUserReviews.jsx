import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import "./DisplayUserReviews.css"
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { MovieGraph } from '../MovieGraph/MovieGraph';
import { MovieReviews } from '../MovieReviews/MovieReviews';

export const DisplayUserReviews = (props) => {
    
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await fetch(`/api/getMovieData?movieName=${props.title}`, {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          // const listOfReviews = data.movieInfo;
          // const listOfRatings = [];
          (data.movieInfo).forEach(element => {
            console.log('Trying to iterate through the ratings only: ' , element.rating);
            // listOfRatings.push(element.rating);
          })
        } else console.error('Failed to fetch movie ratings and reviews: ', response.statusText);

      } catch (error) {
        console.error('Error fetching movie data: ', error.message);
      }
    }

    getMovieData();
  }, [])

  const {ref, inView} = useInView({
    threshold: 0.75,
  });

  return (
    <>
      <ArrowIcon state = {inView}/>
      <div ref={ref} id='container'>
        <MovieGraph/>
        <MovieReviews/>
      </div>
    </>
  );
}