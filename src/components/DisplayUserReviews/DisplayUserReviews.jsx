import React from 'react'
import { useInView } from 'react-intersection-observer';
import "./DisplayUserReviews.css"
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { MovieGraph } from '../MovieGraph/MovieGraph';
import { MovieReviews } from '../MovieReviews/MovieReviews';

export const DisplayUserReviews = () => {
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