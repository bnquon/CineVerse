import React, {useState, useEffect} from 'react'
import "./MovieInfo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as emptyBookmark} from '@fortawesome/free-regular-svg-icons'

export const MovieInfo = (props) => {
    const userID = sessionStorage.getItem('userID');

    const posterURL = "https://image.tmdb.org/t/p/w500" + props.poster;
    const backdropURL = "https://image.tmdb.org/t/p/w500" + props.backdrop;

    let [isFavorite, setFavorite] = useState(false);
    let [isBookmark, setBookmark] = useState(false);
    let [favoriteMsg, setFavoriteMsg] = useState("Add To Favorites");

    useEffect(() => {
        const checkIfFavorite = async () => {
            try {
                const response = await fetch(`/api/checkIfFavorite?userID=${userID}&movieName=${props.title}`, {
                    method: 'GET',
                });
                if (response.ok) {
                    const temp = await response.json();
                    console.log('GET CALL FROM checkIfFavorite is: ', temp);
                    if (temp.isFavorited == 1) {
                        setFavorite(true);
                        setFavoriteMsg("Remove from Favorites");
                    } else {
                        setFavorite(false);
                        setFavoriteMsg("Add To Favorites");
                    }
                }
            } catch (error) {
                console.error('Error checking if movie is favorited: ', error.message);
            }
        }

        checkIfFavorite();
    }, [props.title])

    const toggleFavorite = () => {
        setFavorite(!isFavorite);
        setFavoriteMsg(isFavorite ? "Add To Favorites" : "Remove from Favorites");
        handleFavorites(isFavorite);    
    }

    const handleFavorites = async (add) => {
        var operation = '';

        if (add) {
            operation = 'REMOVE';
        } else operation = 'INSERT';

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

    const toggleBookmark = async () => {
        setBookmark(!isBookmark);
    }

    const favButtonStyles = {
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
                <span>{ isBookmark ? <FontAwesomeIcon icon={solidBookmark} size='xs' onClick={toggleBookmark}/> : <FontAwesomeIcon icon={emptyBookmark} size='xs' onClick={toggleBookmark}/>} {props.title}</span>
                <button onClick={toggleFavorite} style={favButtonStyles}>
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
