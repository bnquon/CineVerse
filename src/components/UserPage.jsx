import React from 'react'
import { Header } from "./Header/Header.jsx";
import { FavScroller } from "./FavScroller/FavScroller.jsx";
import { Grid } from "./Grid/Grid.jsx";

export const UserPage = () => {
  const storedValue = sessionStorage.getItem('username');
  console.log(storedValue);
  return (
    <>
        <Header username = {storedValue}/>
        <Grid/>
        <FavScroller/>
    </>
  )
}
