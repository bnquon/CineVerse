import React from 'react'
import { Header } from "./Header/Header.jsx";
import { Grid } from "./Grid/Grid.jsx";
import { useLocation } from 'react-router-dom';

export const UserPage = () => {

  const location = useLocation();
  const searchedUserData = location.state?.data;
  console.log('SEARCHEDUSERDATA IS', searchedUserData);

  const storedUsername = sessionStorage.getItem('username');

  return (
    <>         
        <Header username={storedUsername}/>
        <Grid username = {(searchedUserData).username} userID = {(searchedUserData).userID}/>
    </>
  )
}
