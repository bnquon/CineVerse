import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./Favorites.css"

export const Favorites = (props) => {

  const [favoriteList, setFavoriteList] = useState([]);
  const lastItemRef = useRef(null);

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
  
          } else console.error('Failed to fetch favorite movies: ', response.statusText);
      } catch (error) {
          console.error('Error fetching favoritemovies: ', error.message);
      }
  };
  populateScroller();
  }, [props])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
        console.log(entry.isIntersecting ,entry.target);
      })
    }, {
      threshold: 0.5
    })

    const lastObserver = new IntersectionObserver(entries => {
      const last = entries[0];
      if (!last.isIntersecting) return;
      loadNewPosters();
      lastObserver.unobserve(last.target);
    });

    if (lastItemRef.current) {
      lastObserver.observe(lastItemRef.current);
    }

    const scrollerItems = document.querySelectorAll('.scrollerItem');
    scrollerItems.forEach(item => {
        observer.observe(item);
    });

  }, [favoriteList])

  function loadNewPosters() {
    favoriteList.forEach((item) => {
      const temp = document.createElement('div');
      temp.classList.add('scrollerItem');
      const img = document.createElement('img');
      img.src = item;
      temp.appendChild(img);
      document.querySelector('#favoriteScroller').appendChild(temp);
    });
  }

  return (
    <div id="favoritesContainer">
      <div id="favoritesTitle">
        <span><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000"}}/> Favorites</span>
      </div>

      <div id="favoriteScroller">
        {favoriteList.map((item, index) => (
          <div className='scrollerItem' key={index}>
            <img src={item} alt="" srcset="" ref={index === favoriteList.length - 1 ? lastItemRef : null}/>
          </div>
        ))}
    </div>

    </div>
  )
}
