import React from 'react'
import { useInView } from 'react-intersection-observer';
import "./DisplayUserReviews.css"

export const DisplayUserReviews = () => {
  const {ref, inView, entry} = useInView({
    threshold: 0.5,
  });

  return (
    <div ref={ref} id='container'>
      <h2>{`Header inside viewport: ${inView}`}</h2>
    </div>
  );
}