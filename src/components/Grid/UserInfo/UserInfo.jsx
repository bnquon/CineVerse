import React from 'react'
import "./UserInfo.css"
export const UserInfo = () => {

  const inputElements = document.getElementsByTagName("input");

  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].placeholder = "Enter Here...";
  }

  return (
    <div className='info-container'>
      <div id="bio-container">
        <h3>Bio</h3>
        <textarea placeholder='Type your bio here'></textarea>
      </div>

      <div id="top3">
        <h3>Top 3 All Time List</h3>
        <ol>
          <li><input type="text" /></li>
          <li><input type="text" /></li>
          <li><input type="text" /></li>
        </ol>
      </div>

      <div id="overrated">
        <h3>Top 3 Overrated List</h3>
        <ol>
          <li><input type="text" /></li>
          <li><input type="text" /></li>
          <li><input type="text" /></li>
        </ol>
      </div>

    </div>
  )
}
