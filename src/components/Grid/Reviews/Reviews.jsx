import React from 'react'
import "./Reviews.css"
import { Card } from './Card/Card.jsx'

export const Reviews = () => {

  return (
    <div className='review-container'>
      <h1 id="title">Reviews</h1>

        <div className="review-grid">
          <Card/>
          <Card/>
        </div>

    </div>
  );
}
