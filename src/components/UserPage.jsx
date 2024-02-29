import React from 'react'
import { Header } from "./Header/Header.jsx";
import { FavScroller } from "./FavScroller/FavScroller.jsx";
import { Grid } from "./Grid/Grid.jsx";

export const UserPage = () => {
  const storedUsername = sessionStorage.getItem('username');
  return (
    <>
        <Header username = {storedUsername}/>
        <Grid/>
        <FavScroller/>
    </>
  )
}
