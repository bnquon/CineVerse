import React, {useState} from 'react'
import "./MovieInfo.css"

export const MovieInfo = (props) => {
    const userID = sessionStorage.getItem('username');
    let [isFavorite, setFavorite] = useState(false);
    let [favoriteMsg, setFavoriteMsg] = useState("Add To Favorites");

    const toggleFavorite = () => {
        setFavorite(!isFavorite);
        setFavoriteMsg(isFavorite ? "Add To Favorites" : "Remove from Favorites");
        handleFavorites(isFavorite);    
    }

    const handleFavorites = async (add) => {
        var operation = '';

        if (add) {
            operation = 'INSERT';
        } else operation = 'REMOVE';

        try {
            const response = await fetch (`/api/handleFavorites?userID=${userID}&operation=${operation}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ movieName: props.title, posterURL: posterURL }),
            });

            if (!response.ok) {
                console.error('Failed to add to favorites: ', response.statusText);
              }

        } catch (error) {
            console.error('Error saving bio:', error.message);
        }
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

    const posterURL = "https://image.tmdb.org/t/p/w500" + props.poster;
    const backdropURL = "https://image.tmdb.org/t/p/w500" + props.backdrop;

    return (
        <div className="movieinfo-container">

            <div id="movie-title">
                {props.title}
                <button onClick={toggleFavorite} style={buttonStyles}>
                    {favoriteMsg}
                </button>
            </div>
            <div id="poster">
                <img src={posterURL} alt="" />
            </div>
            <div id="backdrop">
                <img src={backdropURL} alt="" />
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
