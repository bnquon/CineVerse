import React, { useState } from 'react'
import './ReviewModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons'

export const ReviewModal = ( {toggleModal , title} ) => {

  const [rating, setRating] = useState();

  const handleRatingClick = (value) => {
    setRating(value);
    console.log(value);
  }

  return (
    <div id="myModal" className='modal'>
        
        <div className="modal-content">

            <div id="modalTitle">
                <h1>Creating Review for {title}</h1>
            </div>

            <div id="modalRating">
                <div onClick={() => handleRatingClick(1)} id="1" style={{backgroundColor: rating === 1 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa1}/></div>
                <div onClick={() => handleRatingClick(2)} id="2" style={{backgroundColor: rating === 2 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa2}/></div>
                <div onClick={() => handleRatingClick(3)} id="3" style={{backgroundColor: rating === 3 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa3}/></div>
                <div onClick={() => handleRatingClick(4)} id="4" style={{backgroundColor: rating === 4 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa4}/></div>
                <div onClick={() => handleRatingClick(5)} id="5" style={{backgroundColor: rating === 5 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa5}/></div>
                <div onClick={() => handleRatingClick(6)} id="6" style={{backgroundColor: rating === 6 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa6}/></div>
                <div onClick={() => handleRatingClick(7)} id="7" style={{backgroundColor: rating === 7 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa7}/></div>
                <div onClick={() => handleRatingClick(8)} id="8" style={{backgroundColor: rating === 8 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa8}/></div>
                <div onClick={() => handleRatingClick(9)} id="9" style={{backgroundColor: rating === 9 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa9}/></div>
                <div onClick={() => handleRatingClick(10)} id="10" style={{backgroundColor: rating === 10 ? 'hsl(17, 83%, 64%)': 'white', transition: '250ms'}}><FontAwesomeIcon icon={fa1}/><FontAwesomeIcon icon={fa0}/></div>
            </div>

            <div id="modalReview">
                <h3>Type Your Review</h3>
                <textarea name="review" id=""></textarea>
            </div>

            <div id="modalButtons">
                <button id='post'>Post</button>
                <button id='cancel' onClick={toggleModal}>Cancel</button>
            </div>

        </div>
    </div>
  )
}
