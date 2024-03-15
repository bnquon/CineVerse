import React, { useEffect } from 'react'
import { Profile } from './Profile/Profile.jsx'
import { Graph } from './Graph/Graph.jsx'
import { UserInfo } from './UserInfo/UserInfo.jsx'
import { Reviews } from './Reviews/Reviews.jsx'
import "./Grid.css"

export const Grid = () => {
  // need userinfo creation and stored
  const isSearching = false;

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
        }

      } catch (error) {
        
      }
    }

    retrieveUserInfo();
  }, []);

  return (
    <div className="grid-container">
        <Profile username = {storedUsername} userID={storedUserID}/>
        {/* <Graph/> */}
        <UserInfo/>
        <Reviews/>
    </div>
  );
}
