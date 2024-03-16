import React, { useEffect, useState, useRef } from 'react';
import './Profile.css';
import noPFP from '../../../assets/noPFP.jpg';

export const Profile = (props) => {

  const storedUserID = sessionStorage.getItem('userID');

  console.log('props.userpfp in the profile.jsx is: ', props.userPFP);
  const [profilePicture, setProfilePicture] = useState(props.userPFP);

  useEffect(() => {
    const setPFP = async () => {
      try {
        const response = await fetch(`/api/pfp?userID=${storedUserID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({newPFP: profilePicture}),
        })
        
        if (response.ok) {
          console.log('pfp successfully saved!');
        }
  
      } catch (error) {
        console.error('Error saving user profile picture: ', error.message);
      } 
    }
    setPFP();
  }, [profilePicture])

  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    if (props.userID == storedUserID) {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfilePicture(e.target.result);
          console.log(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else return;
  };

  return (
    <div className="profile-container">
      <input
        type="file"
        accept="image/*"
        multiple={false}
        id="pfp"
        ref={imageUploader}
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <div id="image-container" onClick={() => imageUploader.current.click()}>
        <img src={profilePicture ? profilePicture : noPFP} alt="Profile" />
      </div>
      <h2 id="username">{props.username}</h2>
    </div>
  );
};
