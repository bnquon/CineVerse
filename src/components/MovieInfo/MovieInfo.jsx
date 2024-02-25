import React from 'react'
import "./MovieInfo.css"
import poster from "../../assets/drivePoster.jpg"
import backdrop from "../../assets/driveBackdrop.jpg"
export const MovieInfo = () => {
  return (
    <div className="movieinfo-container">

        <div id="movie-title">
            DRIVE
        </div>
        <div id="poster">
            <img src={poster} alt="" />
        </div>
        <div id="backdrop">
            <img src={backdrop} alt="" />
        </div>
        <div id="movie-info">
            <span>
                <h2 id='description'>Released 2011-09-15</h2>
                Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. 
                Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named 
                Irene and her young son, Benicio. When Irene's husband gets out of jail, he enlists Driver's
                help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life 
                to protect Irene and Benicio from the vengeful masterminds behind the robbery. 
            </span>
        </div>
    </div>
  )
}
