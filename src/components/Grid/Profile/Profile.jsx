import React, { useEffect, useState, useRef } from 'react';
import './Profile.css';
import noPFP from '../../../assets/noPFP.jpg';

export const Profile = (props) => {

  const userID = sessionStorage.getItem('userID');

  const [profilePicture, setProfilePicture] = useState(noPFP);
  const imageUploader = useRef(null);

  // useEffect(() => {
  //   const getUserPFP = async () => {
  //     try {
  //       const response = await fetch(`/api/getUserPFP?userID=${userID}`, {
  //         method: 'GET',
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data);
  //         if (data.profilePicture != null) {
  //           setProfilePicture(data.profilePicture);
  //         }

  //       } else {
  //         console.error('Failed to fetch user profile picture: ', response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user profile picture: ', error.message);
  //     }
  //   };

  //   getUserPFP();
  // }, [props.userID]);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);
    }
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
        <img src={profilePicture} alt="Profile" />
      </div>
      <h2 id="username">{props.username}</h2>
    </div>
  );
};
