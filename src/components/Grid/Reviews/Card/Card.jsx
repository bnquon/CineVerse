import React from 'react'
import "./Card.css"


export const Card = (props) => {
  return (
    <div className='card-container'>
        <div className="poster">
          <img src={props.poster} alt="" />
        </div>
        <div className="text">
          <span>
            <h2>{props.movieName}</h2>
            <h3>⭐{props.rating}/10</h3>
            <p> {props.text}
            </p>
          </span>
        </div>
    </div>
  )
}
