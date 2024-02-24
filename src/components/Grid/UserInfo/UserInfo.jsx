import React from 'react'
import "./UserInfo.css"
export const UserInfo = () => {

  return (
    <div className='info-container'>
      <div id="bio-container">
        <h3>Bio</h3>
        <textarea placeholder='Type your bio here'></textarea>
      </div>

      <div id="top3">
        <h3>Top 3 All Time List</h3>
        <ol>
          <li><input type="text" placeholder = "Enter Here..."/></li>
          <li><input type="text" placeholder = "Enter Here..."/></li>
          <li><input type="text" placeholder = "Enter Here..."/></li>
        </ol>
      </div>

      <div id="overrated">
        <h3>Top 3 Overrated List</h3>
        <ol>
          <li><input type="text" placeholder = "Enter Here..."/></li>
          <li><input type="text" placeholder = "Enter Here..."/></li>
          <li><input type="text" placeholder = "Enter Here..."/></li>
        </ol>
      </div>

    </div>
  );
}
