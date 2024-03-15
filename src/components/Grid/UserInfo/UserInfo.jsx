import React, { useState, useEffect } from 'react';
import './UserInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faCalendar, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import placeholder from '../../../assets/posterPlaceholder.png'

export const UserInfo = (props) => {
  const userID = sessionStorage.getItem('userID');
  console.log('PROPS IN USERINFO.jsx: ', props);
  const [bioValue, setBioValue] = useState('');
  const [watchlist, setWatchlist] = useState([]);
  const [dateJoined, setDatejoined] = useState('');

  useEffect(() => {

    setBioValue('props.bio');
    setDatejoined('props.dateJoined');
    const temp = (props.userWatchlist).map(item => item.movieposterurl);
    setWatchlist(temp);
         
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
        <span><FontAwesomeIcon icon={faCalendar}/> Joined on: {dateJoined}</span>
      </div>

      <div id="bio-container">
        <div className="userInfoTitles">
          <span><FontAwesomeIcon icon={faPenToSquare}/> Bio</span>
        </div>
        <textarea
          placeholder="Type your bio here"
          value={bioValue}
          onChange={handleBioChange}
          onBlur={handleBioBlur}
        ></textarea>
      </div>

      <div id="watchlist">
        <div className="userInfoTitles">
          <span><FontAwesomeIcon icon={faTicket}/> Watchlist</span>
        </div>
        <div id="watchlistGrid">
          {watchlist.map((element, index) => (
            <img key={index} src={element} alt="" className='tempGridItem'/>
          ))}
          {/* <div className="tempGridItem"><img src="https://image.tmdb.org/t/p/w500/lkZ9gqCEjzX85lKR6Jjd1uGAXNp.jpg" alt="" /></div>
          <div className="tempGridItem"><img src={placeholder} alt="" /></div>
          <div className="tempGridItem"><img src={placeholder} alt="" /></div> */}
        </div>
      </div>

    </div>
  );
};
