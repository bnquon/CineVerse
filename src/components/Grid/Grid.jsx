import React, { useState, useEffect } from 'react'
import { Profile } from './Profile/Profile.jsx'
import { Graph } from './Graph/Graph.jsx'
import { UserInfo } from './UserInfo/UserInfo.jsx'
import { Reviews } from './Reviews/Reviews.jsx'
import { Favorites } from './Favorites/Favorites.jsx'
import { Puff } from 'react-loading-icons'
import "./Grid.css"

export const Grid = (props) => {
  // need userinfo creation and stored
  const [loaded, setLoaded] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {

    const retrieveUserInfo = async () => {
      try {
        
        const response = await fetch(`/api/getUserData?userID=${props.userID}`, {
          method: 'GET',
        });
        
        if (response.ok) {
          const data = await response.json();
          // console.log('BIG DATA CALL FROM GRID IS: ', data);
          setUserData(data);
        } else console.error('Failed to fetch user data:', response.statusText);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    retrieveUserInfo();
  }, [props]);

  useEffect(() => {
    setLoaded(true);
  }, [userData])

  return (
    <div className="grid-container">
        { loaded ? 
          <>
            <Profile username = {props.username} userID = {props.userID}/>
            <Graph distribution = {userData.ratings}/>
            <Favorites userID = {props.userID}/>
            <UserInfo bio = {(userData.bio).bio} userWatchlist = {userData.savedWatchlist} dateJoined = {(userData.dateJoined).datejoined}/>
            <Reviews reviews = {userData.reviews}/> 
          </>
          : 
          (<Puff stroke="#98ff98" speed={.75} />)
        }

    </div>
  );
}
