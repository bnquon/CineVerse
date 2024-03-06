import React from 'react'
import './ReviewModal.css'

export const ReviewModal = ( {toggleModal} ) => {

  return (
    <div id="myModal" className='modal'>
        
        <div className="modal-content">

            <div id="modalTitle">
                Review Form for MOVIE TITLE
            </div>

            <div id="modalRating">
                <select id="ratingSelect">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div id="modalReview">
                Enter Your Review
                <textarea name="review" id="" cols="30" rows="10" maxLength="300"></textarea>
            </div>

            <div id="modalButtons">
                <button onClick={toggleModal}>Cancel</button>
                <button>Post</button>
            </div>

        </div>
    </div>
  )
}
