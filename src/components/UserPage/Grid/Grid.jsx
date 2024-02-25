import React from 'react';
import { Profile } from './Profile/Profile';
import { Graph } from './Graph/Graph';
import { UserInfo } from './UserInfo/UserInfo';
import { Reviews } from './Reviews/Reviews';
import "./Grid.css";

function Grid() {
  return (
    <div className="grid-container">
        <Profile />
        <Graph />
        <UserInfo />
        <Reviews />
    </div>
  );
}

export default Grid;
