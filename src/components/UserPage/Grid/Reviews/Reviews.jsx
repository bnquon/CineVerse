import React from 'react';
import "./Reviews.css";
import Card from './Card/Card';
import placeholder from "../../../../assets/inception.jpg";

function Reviews() {

  return (
    <div className='review-container'>
      <h1 id="title">Reviews</h1>

        <div className="review-grid">
          <Card poster = {placeholder}/>
          <Card poster = {placeholder}/>
        </div>

    </div>
  );
}

export default Reviews;