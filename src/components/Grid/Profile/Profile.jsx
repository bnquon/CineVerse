import React, { useRef } from 'react'
import "./Profile.css"
import noPFP from "../../../assets/noPFP.jpg"

export const Profile = (props) => {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const {current} = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
        <input type="file" accept='image/*' multiple={false} id="pfp" ref={imageUploader} onChange={handleImageUpload} style={{display: 'none'}} />
        <div id="image-container" onClick={() => imageUploader.current.click()}>
          <img ref={uploadedImage} src={noPFP} />
        </div>
        <h2 id='username'>{props.username}</h2>
    </div>
  )
}
