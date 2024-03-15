import React, { useState, useEffect } from 'react'
import { Profile } from './Profile/Profile.jsx'
import { Graph } from './Graph/Graph.jsx'
import { UserInfo } from './UserInfo/UserInfo.jsx'
import { Reviews } from './Reviews/Reviews.jsx'
import "./Grid.css"

export const Grid = () => {
  // need userinfo creation and stored
  const isSearching = false;
  const [userData, setUserData] = useState({});
  const storedUsername = sessionStorage.getItem('username');
  const storedUserID = sessionStorage.getItem('userID');

  useEffect(() => {

    const retrieveUserInfo = async () => {
      try {
        
        const response = await fetch(`/api/getUserData?userID=${storedUserID}`, {
          method: 'GET',
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserData(data);
        } else console.error('Failed to fetch user data:', response.statusText);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    retrieveUserInfo();
  }, []);

  return (
    <div className="grid-container">
        <Profile username = {storedUsername} userID={storedUserID}/>
        <Graph distribution = {userData.ratings}/>
        <UserInfo/>
        <Reviews/>
    </div>
  );
}
