import React from 'react'
import "./Profile.css"
export const Profile = (props) => {
  return (
    <div className="profile-container">
        <img id='profile-pic' src="https://placehold.co/175x175/black/white" alt=""/>
        <h2 id='username'>{props.username}</h2>
    </div>
  )
}
