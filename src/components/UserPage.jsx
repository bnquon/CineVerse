import React, { useState, useEffect } from 'react'
import { Header } from "./Header/Header.jsx";
import { FavScroller } from "./FavScroller/FavScroller.jsx";
import { Grid } from "./Grid/Grid.jsx";
import { useLocation } from 'react-router-dom';

export const UserPage = () => {

  const [isSearch, setSearch] = useState(false);

  const location = useLocation();
  const searchedUserData = location.state?.data;

  useEffect(() => {
    if (searchedUserData) setSearch(true);
  }, [])

  const storedUsername = sessionStorage.getItem('username');
  const userID = sessionStorage.getItem('userID');
  return (
    <>  
        {isSearch ? 
          <> 
            <Header username={storedUsername}/>
            <Grid username = {(searchedUserData.searchedUser).username} userID = {(searchedUserData.searchedUser).userid}/>
            <FavScroller userID={userID}/>
          </>
          :
          <>
            <Header username={storedUsername}/>
            <Grid username = {storedUsername} userID = {userID}/>
            <FavScroller userID={userID}/>
          </>
        }
    </>
  )
}
