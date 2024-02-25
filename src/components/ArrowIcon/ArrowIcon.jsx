import React from 'react'
import "./ArrowIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

export const ArrowIcon = () => {
  return (
    <>
        <div id='icon'>

            <div id="text">
              User Reviews
            </div>

            <div id="arrowIcon">
              <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x"/>
            </div>

        </div>

    </>
  )
}
