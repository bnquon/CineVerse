import React, {useState} from 'react'
import "./MovieInfo.css"
import poster from "../../assets/drivePoster.jpg"
import backdrop from "../../assets/driveBackdrop.jpg"


export const MovieInfo = () => {

    let [isFavorite, setFavorite] = useState(false);
    let [favoriteMsg, setFavoriteMsg] = useState("Add To Favorites");

    const toggleFavorite = () => {
        setFavorite(!isFavorite);
        setFavoriteMsg(isFavorite ? "Add To Favorites" : "Remove from Favorites");
    }

    const buttonStyles = {
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontWeight: 600,
        marginLeft: 'auto',
        height: '80%',
        transition: '250ms linear',
        backgroundColor: isFavorite ? 'red': '#f5c518',
        border: '2px solid black',
        padding: '0.5rem 1rem',
    };

    return (
        <div className="movieinfo-container">

            <div id="movie-title">
                DRIVE
                <button onClick={toggleFavorite} style={buttonStyles}>
                    {favoriteMsg}
                </button>
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
