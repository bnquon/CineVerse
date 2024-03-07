import React, { useState } from 'react'
import './ReviewModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons'

export const ReviewModal = ( {toggleModal} ) => {

  const [rating, setRating] = useState();

  return (
    <div id="myModal" className='modal'>
        
        <div className="modal-content">

            <div id="modalTitle">
                <h2>Creating Review for MOVIE TITLE</h2>
            </div>

            <div id="modalRating">
                <div id="1"><FontAwesomeIcon icon={fa1} fa-lg /></div>
                <div id="2"><FontAwesomeIcon icon={fa2} fa-lg/></div>
                <div id="3"><FontAwesomeIcon icon={fa3} fa-lg/></div>
                <div id="4"><FontAwesomeIcon icon={fa4} fa-lg/></div>
                <div id="5"><FontAwesomeIcon icon={fa5} fa-lg/></div>
                <div id="6"><FontAwesomeIcon icon={fa6} fa-lg/></div>
                <div id="7"><FontAwesomeIcon icon={fa7} fa-lg/></div>
                <div id="8"><FontAwesomeIcon icon={fa8} fa-lg/></div>
                <div id="9"><FontAwesomeIcon icon={fa9} fa-lg/></div>
                <div id="10"><FontAwesomeIcon icon={fa1} fa-lg/><FontAwesomeIcon icon={fa0} fa-lg/></div>
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
