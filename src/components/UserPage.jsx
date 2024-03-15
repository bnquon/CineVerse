import React, { useState, useEffect } from 'react'
import { Header } from "./Header/Header.jsx";
import { FavScroller } from "./FavScroller/FavScroller.jsx";
import { Grid } from "./Grid/Grid.jsx";
import { useLocation } from 'react-router-dom';

export const UserPage = () => {

  const location = useLocation();
  const searchedUserData = location.state?.data;
  console.log('SEARCHEDUSERDATA IS', searchedUserData);

  return (
    <>         
        <Header username={storedUsername}/>
        <Grid username = {(searchedUserData).username} userID = {(searchedUserData).userid}/>
        <FavScroller userID={userID}/>
    </>
  )
}
