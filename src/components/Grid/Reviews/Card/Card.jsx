import React from 'react'
import "./Card.css"


export const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={props.poster} alt="" />    
    </div>
  )
}
