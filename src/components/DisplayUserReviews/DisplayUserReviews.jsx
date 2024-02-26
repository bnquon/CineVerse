import React from 'react'
import { useInView } from 'react-intersection-observer';
import "./DisplayUserReviews.css"
import { ArrowIcon } from '../ArrowIcon/ArrowIcon';

export const DisplayUserReviews = () => {
  const {ref, inView, entry} = useInView({
    threshold: 0.75,
  });

  return (
    <>
      <ArrowIcon state = {inView}/>
      <div ref={ref} id='container'>
        <h2>{`Header inside viewport: ${inView}`}</h2>
      </div>
    </>
  );
}