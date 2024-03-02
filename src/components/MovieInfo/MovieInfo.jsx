import React, {useState} from 'react'
import "./MovieInfo.css"
import poster from "../../assets/drivePoster.jpg"
import backdrop from "../../assets/driveBackdrop.jpg"


export const MovieInfo = (props) => {

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
        height: '70%',
        transition: '250ms linear',
        backgroundColor: isFavorite ? 'red': '#f5c518',
        border: '2px solid black',
        padding: '0.5rem 1rem',
    };

    return (
        <div className="movieinfo-container">

            <div id="movie-title">
                {props.title}
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
                    <h2 id='description'>Released {props.date}</h2>
                    {props.description}
                </span>
            </div>
        </div>
    )
}
