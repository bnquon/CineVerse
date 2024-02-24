import React from 'react'
import { Profile } from './Profile/Profile.jsx'
import { Graph } from './Graph/Graph.jsx'
import { UserInfo } from './UserInfo/UserInfo.jsx'
import { Reviews } from './Reviews/Reviews.jsx'
import "./Grid.css"

export const Grid = () => {
  return (
    <div className="grid-container">
        <Profile/>
        <Graph/>
        <UserInfo/>
        <Reviews/>
    </div>
  );
}
