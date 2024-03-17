import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./Favorites.css"

export const Favorites = (props) => {

  const [favoriteList, setFavoriteList] = useState([]);
  const [tempFavList, setTempList] = useState([]);

  const {ref, inView} = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const populateScroller = async () => {
      try {
          const response = await fetch(`/api/getUserFavorites?userID=${props.userID}`, {
              method: 'GET',
          });
          if (response.ok) {
              const data = await response.json();
              const listOfFavorites = (data.listOfFavorites).map(item => item.movieposterurl);
              console.log(listOfFavorites);
  
              setFavoriteList(listOfFavorites);
              setTempList(listOfFavorites);
  
          } else console.error('Failed to fetch favorite movies: ', response.statusText);
      } catch (error) {
          console.error('Error fetching favoritemovies: ', error.message);
      }
  };
  populateScroller();
  }, [props])
  
  useEffect(() => {
    if (inView) {
      tempFavList.forEach((item) => {
        const temp = item.cloneNode(true);
        document.querySelector('#favoriteScroller').append(temp);
      })
    }
  }, [inView]);

  return (
    <div id="favoritesContainer">
      <div id="favoritesTitle">
        <span><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000"}}/> Favorites</span>
      </div>

      <div id="favoriteScroller">
        {favoriteList.map((item, index) => (
          <div className='scrollerItem' key={index}>
            {favoriteList.length === index + 1 ? (
              <img src={item} ref={ref} alt=""/>
            ) : (
              <img src={item} alt=""/>
            )}
          </div>
        ))}
    </div>

    </div>
  )
}
