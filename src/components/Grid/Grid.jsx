import React from 'react'
import { Profile } from './Profile/Profile.jsx'
import { Graph } from './Graph/Graph.jsx'
import { UserInfo } from './UserInfo/UserInfo.jsx'
import { Reviews } from './Reviews/Reviews.jsx'
import "./Grid.css"

export const Grid = () => {
  // need userinfo creation and stored
  const storedUsername = sessionStorage.getItem('username');
  const storedUserID = sessionStorage.getItem('userID');

  return (
    <div className="grid-container">
        <Profile username = {storedUsername} userID={storedUserID}/>
        <Graph/>
        <UserInfo/>
        <Reviews/>
    </div>
  );
}
