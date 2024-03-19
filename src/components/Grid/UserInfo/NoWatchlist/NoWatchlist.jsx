import React, { useState } from 'react'
import './NoWatchlist.css'

export const NoWatchlist = (props) => {

  const [watchlistMsg, setwatchlistMsg] = useState('');
  if (props.isUsersPage) {
    setwatchlistMsg('Save a movie to your watchlist!');
  } else {
    setwatchlistMsg('User has no watchlist');
  }

  return (
    <div id='noWatchList'>
        <span>{watchlistMsg}</span>
    </div>
  )
}
