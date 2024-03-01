import React, { useState } from 'react';
import './UserInfo.css';

export const UserInfo = () => {
  const [bioValue, setBioValue] = useState('');
  const userID = sessionStorage.getItem('userID');
  const handleBioChange = (event) => {
    setBioValue(event.target.value);
    // console.log(event.target.value);
  };

  const handleBioBlur = async () => {
    alert('Bio changed: ' + bioValue);

    try {
      const response = await fetch(`/api/saveUserBio?userID=${userID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bio: bioValue}),
      });

      if (!response.ok) {
        console.error('Failed to save bio: ', response.statusText);
      }

    } catch (error) {
      console.error('Error saving bio:', error.message);
    }

  };

  return (
    <div className="info-container">
      <div id="bio-container">
        <h3>Bio</h3>
        <textarea
          placeholder="Type your bio here"
          value={bioValue}
          onChange={handleBioChange}
          onBlur={handleBioBlur}
        ></textarea>
      </div>

      <div id="top3">
        <h3>Top 3 All Time List</h3>
        <ol>
          <li><input type="text" placeholder="Enter Here..." /></li>
          <li><input type="text" placeholder="Enter Here..." /></li>
          <li><input type="text" placeholder="Enter Here..." /></li>
        </ol>
      </div>

      <div id="overrated">
        <h3>Top 3 Overrated List</h3>
        <ol>
          <li><input type="text" placeholder="Enter Here..." /></li>
          <li><input type="text" placeholder="Enter Here..." /></li>
          <li><input type="text" placeholder="Enter Here..." /></li>
        </ol>
      </div>
    </div>
  );
};
