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
            <h2>float float float float float float</h2>
            <h3>⭐10/10</h3>
            <p>float float float float float floatfloat float floatfloat float 
              floatfloat float floatfloat float floatfloat float floatfloat 
              float floatfloat float floatfloat float floatfloat float floatfloat 
              float floatfloat float floatfloat float floatfloat float floatfloat 
              float floatfloat float floatfloat float floatfloat float floatfloat 
              float floatfloat float floatfloat float floatfloat float floatfloat 
              float floatfloat float floatfloat float floatfloat floatfloat floatfloat float floatfloat float floatfloat float floatfloat 
              float floatfloat float floatfloat float floatfloat float floatfloat 
              float floatfloat float floatfloat float floatfloat float floatfloat 
              float floatfloat float floatfloat float floatfloat float
            </p>
          </span>
        </div>
    </div>
  )
}
