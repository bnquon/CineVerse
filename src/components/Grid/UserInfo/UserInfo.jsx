import React, { useState, useEffect } from 'react';
import './UserInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import placeholder from '../../../assets/posterPlaceholder.png'

export const UserInfo = () => {
  const userID = sessionStorage.getItem('userID');

  const [bioValue, setBioValue] = useState('');
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const getUserBio = async () => {
        try {
          const response = await fetch(`/api/getUserBio?userID=${userID}`, {
            method: 'GET',
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data.bio);
            console.log('Users watchlist is: ', data.savedWatchlist);
            setBioValue(data.bio);
          } else {
            console.error('Failed to fetch user bio: ', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching user bio: ', error.message);
        }
      }

    getUserBio();
  }, []);

  const handleBioChange = (event) => {
    setBioValue(event.target.value);
    // console.log(event.target.value);
  };

  const handleBioBlur = async () => {
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

      <div id="date-joined">
        <span><h3>Date Joined: INSERT DATE HERE</h3></span>
      </div>

      <div id="bio-container">
        <h3>Bio</h3>
        <textarea
          placeholder="Type your bio here"
          value={bioValue}
          onChange={handleBioChange}
          onBlur={handleBioBlur}
        ></textarea>
      </div>

      <div id="watchlist">
        <h3>Watchlist</h3>
        <div id="watchlistGrid">
          <div className="tempGridItem"><img src="https://image.tmdb.org/t/p/w500/lkZ9gqCEjzX85lKR6Jjd1uGAXNp.jpg" alt="" /></div>
          <div className="tempGridItem"><img src={placeholder} alt="" /></div>
          <div className="tempGridItem"><img src={placeholder} alt="" /></div>
        </div>
      </div>

    </div>
  );
};
