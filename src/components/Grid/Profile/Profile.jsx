import React, { useEffect, useState, useRef } from 'react';
import './Profile.css';
import noPFP from '../../../assets/noPFP.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { SpinningCircles } from 'react-loading-icons'

export const Profile = (props) => {

  const storedUserID = sessionStorage.getItem('userID');

  const [pfpLoaded, isPfpLoaded] = useState(false);
  const [count, setCount] = useState(1);
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const getPFP = async () => {
      try {
        
        const response = await fetch(`/api/pfp?userID=${props.userID}&operation=get`, {
          method: 'GET',
        });
        
        if (response.ok) {
          const data = await response.json();

          const temp = data.retrievedPFP;

          setProfilePicture(temp.pfp);
          isPfpLoaded(true);
        } else console.error('Failed to fetch user pfp:', response.statusText);

      } catch (error) {
        console.error('Error fetching user pfp:', error);
      }
    }
    getPFP();
  }, [props])

  useEffect(() => {
    const setPFP = async () => {
      try {
        await fetch(`/api/pfp?userID=${props.userID}&operation=post`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({newPFP: profilePicture}),
        })
  
      } catch (error) {
        console.error('Error saving user profile picture: ', error.message);
      } 
    }
    setPFP();
  }, [count])

  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    if (props.userID == storedUserID) {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfilePicture(e.target.result);
          console.log(e.target.result);
          setCount(count + 1);
        };
        reader.readAsDataURL(file);
      }
    } else return;
  };

  return (
    <div className="profile-container">
      
      {storedUserID == props.userID ?
        <input
        type="file"
        accept="image/*"
        multiple={false}
        id="pfp"
        ref={imageUploader}
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        /> 
          :
        null
        // <input
        // type="file"
        // accept="image/*"
        // multiple={false}
        // id="pfp"
        // ref={imageUploader}
        // onChange={handleImageUpload}
        // style={{ display: 'none' }}
        // />
      }
      
      <div id="image-container" onClick={() => imageUploader.current.click()}>
        {pfpLoaded ?
          <img src={profilePicture != null ? profilePicture : noPFP} alt="Profile" />
          :
          <div id="pfpLoading">
            <SpinningCircles stroke="#000000" fill='black' strokeWidth={8}/>
          </div>
        }
      </div>

      <div id="username">
        <span><FontAwesomeIcon icon={faIdBadge}/> {props.username}</span>
      </div>
    
    </div>
  );
};
