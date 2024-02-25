import React from 'react'
import "./Profile.css"
function Profile() {
  return (
    <div className="profile-container">
        <img id='profile-pic' src="https://placehold.co/175x175/black/white" alt=""/>
        <h2 id='username'>USERNAME</h2>
    </div>
  )
}

export default Profile