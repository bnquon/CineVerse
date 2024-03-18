import React, { useState, useEffect } from 'react'
import { Profile } from './Profile/Profile.jsx'
import { Graph } from './Graph/Graph.jsx'
import { UserInfo } from './UserInfo/UserInfo.jsx'
import { Reviews } from './Reviews/Reviews.jsx'
import { Favorites } from './Favorites/Favorites.jsx'
import { ThreeDots } from 'react-loading-icons'
import "./Grid.css"

export const Grid = (props) => {
  // need userinfo creation and stored
  const [loading, setLoaded] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log('PROPS IN GRID IS ',props);
    const retrieveUserInfo = async () => {
      try {
        
        const response = await fetch(`/api/getUserData?userID=${props.userID}`, {
          method: 'GET',
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserData(data);

          setLoaded(true);

        } else console.error('Failed to fetch user data:', response.statusText);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    retrieveUserInfo();
  }, [props]);

  

  return (
    <div className="grid-container">
        { loading ? 
        <>
        <Profile username = {props.username} userID = {props.userID}/>
        <Graph distribution = {userData.ratings}/>
        <Favorites userID = {props.userID}/>
        <UserInfo bio = {userData.bio ? (userData.bio).bio : null} userWatchlist = {userData.savedWatchlist} dateJoined = {(userData.dateJoined).datejoined} userID = {props.userID}/>
        <Reviews reviews = {userData.reviews}/> 
        </>
        :
        <div id="loadingIcon">
          <ThreeDots stroke="#000000" fill='black' strokeWidth={7.5}/>
        </div>
        }
        
    </div>
  );
}
