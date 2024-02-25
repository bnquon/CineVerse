import React from 'react'
import "./ArrowIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { arrow } from '@fortawesome/free-solid-svg-icons'

export const ArrowIcon = () => {
  return (
    <>
        <div id='icon'>
            ArrowIcon
            <FontAwesomeIcon icon={arrow} />
        </div>

    </>
  )
}
