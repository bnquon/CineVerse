import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import "./DisplayUserReviews.css"
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { MovieGraph } from '../MovieGraph/MovieGraph';
import { MovieReviews } from '../MovieReviews/MovieReviews';

export const DisplayUserReviews = (props) => {

  const listOfMovieRatings = {
                              '1': 0,
                              '2': 0,
                              '3': 0,
                              '4': 0,
                              '5': 0,
                              '6': 0,
                              '7': 0,
                              '8': 0,
                              '9': 0,
                              '10': 0
                          };

  const listOfMovieReviews = [];

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await fetch(`/api/getMovieData?movieName=${props.title}`, {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();

          (data.movieInfo).forEach(element => {
            listOfMovieReviews.push([element.rating, element.review]);
            listOfMovieRatings[String(element.rating)]++;
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
        <MovieGraph ratings={listOfMovieRatings} />
        <MovieReviews reviews={listOfMovieReviews} />
      </div>
    </>
  );
}