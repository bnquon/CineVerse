import React, { useState, useEffect } from 'react'
import './NoWatchlist.css'

export const NoWatchlist = (props) => {

  const [watchlistMsg, setwatchlistMsg] = useState('');
  useEffect(() => {
      if (props.isUsersPage) {
        setwatchlistMsg('Save a movie to your watchlist!');
      } else {
        setwatchlistMsg('User has no watchlist');
      }
  }, [props])

  return (
    <div id='noWatchList'>
        <span>{watchlistMsg}</span>
    </div>
  )
}
