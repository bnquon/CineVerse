import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./Favorites.css"

export const Favorites = (props) => {

  const [favoriteList, setFavoriteList] = useState([]);
  // const [lastItem, setLastItem] = useState(null);

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
      })
    }, {
      threshold: 0.5
    })

    const lastObserver = new IntersectionObserver(entries => {
      const last = entries[0];
      if (!last.isIntersecting) return
      loadNewPosters();
      lastObserver.unobserve(last.target)
      lastObserver.observe(document.querySelector('.scrollerItem:last-child'))
    })

    lastObserver.observe(document.querySelector('.scrollerItem:last-child'))

    const tempList = document.querySelectorAll('.scrollerItem');
    tempList.forEach(item => {
      observer.observe(item);
    })

    function loadNewPosters() {
      favoriteList.forEach((item) => {
        const temp = document.createElement('div');
        temp.classList.add('scrollerItem');
        const img = document.createElement('img');
        img.src = item;
        temp.appendChild(img);
        document.querySelector('#favoriteScroller').appendChild(temp);
      })
    }

  }, [])

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
