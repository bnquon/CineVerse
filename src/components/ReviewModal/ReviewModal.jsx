import React from 'react'
import './ReviewModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons'

export const ReviewModal = ( {toggleModal} ) => {

  return (
    <div id="myModal" className='modal'>
        
        <div className="modal-content">

            <div id="modalTitle">
                <h2>Review Form for MOVIE TITLE</h2>
            </div>

            <div id="modalRating">
                <FontAwesomeIcon icon={fa1} />
                <FontAwesomeIcon icon={fa2} />
                <FontAwesomeIcon icon={fa3} />
                <FontAwesomeIcon icon={fa4} />
                <FontAwesomeIcon icon={fa5} />
                <FontAwesomeIcon icon={fa6} />
                <FontAwesomeIcon icon={fa7} />
                <FontAwesomeIcon icon={fa8} />
                <FontAwesomeIcon icon={fa9} />
            </div>

            <div id="modalReview">
                <h3>Enter Your Review</h3>
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
