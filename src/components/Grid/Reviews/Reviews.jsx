import React from 'react'
import "./Reviews.css"
import { Card } from './Card/Card.jsx'
import placeholder from "../../../assets/inception.jpg"

export const Reviews = () => {

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
