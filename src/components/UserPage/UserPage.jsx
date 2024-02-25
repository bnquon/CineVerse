
import React from 'react';
import Header from '../Header/Header';
import FavScroller from './FavScroller/FavScroller';
import Grid from './Grid/Grid';

function UserPage() {
  return (
    <>
      <Header />
      <Grid />
      <FavScroller />
    </>
  );
}

export default UserPage;