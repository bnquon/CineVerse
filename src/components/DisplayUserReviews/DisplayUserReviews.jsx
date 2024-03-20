import React from 'react'
import { useInView } from 'react-intersection-observer';
import "./DisplayUserReviews.css"
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';
import { MovieReviews } from '../MovieReviews/MovieReviews';

export const DisplayUserReviews = (props) => {

  const {ref, inView} = useInView({
    threshold: 0.75,
  });

  return (
    <>
      <ArrowIcon state = {inView}/>
      <div ref={ref} id='container'>
        <MovieReviews title={props.title} poster={props.poster} />
      </div>
    </>
  );
}