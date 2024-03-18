import React, { useState, useEffect } from 'react'
import { Header } from "./Header/Header.jsx";
import { Grid } from "./Grid/Grid.jsx";
import { useLocation } from 'react-router-dom';

export const UserPage = () => {

  const location = useLocation();
  const searchedUserData = location.state?.data;
  console.log('SEARCHEDUSERDATA IS', searchedUserData);

  const [key, setKey] = useState(0);
  const storedUsername = sessionStorage.getItem('username');

  useEffect(() => {
    if (searchedUserData) {
      setKey(searchedUserData.userID);
    }
  }, [searchedUserData]);

  return (
    <>         
        <Header username={storedUsername}/>
        <div key={key}>
          <Grid username = {(searchedUserData).username} userID = {(searchedUserData).userID}/> 
        </div>
    </>
  )
}
