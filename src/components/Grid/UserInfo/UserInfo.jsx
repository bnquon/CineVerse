import React, { useState, useEffect } from 'react';
import './UserInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faCalendar, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import placeholder from '../../../assets/posterPlaceholder.png'
import { NoWatchlist } from './NoWatchlist/NoWatchlist';

export const UserInfo = (props) => {  

  const storedUserID = sessionStorage.getItem('userID');
  const [matchingID, setMatchingID] = useState(false);
  const [bioValue, setBioValue] = useState('');
  const [watchlist, setWatchlist] = useState([]);
  const [dateJoined, setDatejoined] = useState('');

  useEffect(() => {
    setBioValue(props.bio || '');
    setDatejoined(props.dateJoined);
    const temp = (props.userWatchlist).map(item => item.movieposterurl);
    setWatchlist(temp);
    if (props.userID === storedUserID) setMatchingID(true);
    console.log('DOES PROPS.USERID MATCH STORED USER ID: ', props.userID, storedUserID, props.userID==storedUserID);
  }, [props]);

  const handleBioChange = (event) => {
    setBioValue(event.target.value);
    // console.log(event.target.value);
  };

  const handleBioBlur = async () => {
    try {
      const response = await fetch(`/api/saveUserBio?userID=${storedUserID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bio: bioValue }),
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

        {!matchingID ? 
          <textarea
          placeholder="User has no bio"
          value={bioValue}
          readOnly
          onClick={(e) => e.preventDefault()}
          ></textarea>
          :
          <textarea
          placeholder="Type your bio here"
          value={bioValue}
          onChange={handleBioChange}
          onBlur={handleBioBlur}
          ></textarea>
        }

      </div>

      <div id="watchlist">
        <div className="userInfoTitles">
          <span><FontAwesomeIcon icon={faTicket}/> Watchlist</span>
        </div>
        <div id="watchlistGrid">
          {watchlist.length > 0 ? 
            watchlist.map((element, index) => (
              <img key={index} src={element} alt="" className='tempGridItem'/>
            ))
            :
            <NoWatchlist isUsersPage = {matchingID}/>
          }

        </div>
      </div>

    </div>
  );
};
