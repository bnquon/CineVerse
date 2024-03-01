import React, { useEffect } from 'react'
import "./Reviews.css"
import { Card } from './Card/Card.jsx'
import placeholder from "../../../assets/inception.jpg"

export const Reviews = () => {
  const userID = sessionStorage.getItem('userID');

  useEffect(() => {
    const getUserReviews = async () => {
      try {
        const response = await fetch(`/api/getUserReviews?userID=${userID}`, {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);

        } else {
          console.error('Failed to fetch user reviews: ', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user reviews: ', error.message);
      }
    }

    getUserReviews();
  }, []);

  return (
    <div className='review-container'>
      <h1 id="title">Reviews</h1>

        <div className="review-grid">
          <Card poster = {placeholder}/>
          {/* <Card poster = {placeholder}/>
          <Card poster = {placeholder}/>
          <Card poster = {placeholder}/>
          <Card poster = {placeholder}/> */}
        </div>

    </div>
  );
}
