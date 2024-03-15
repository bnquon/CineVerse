import React, { useState, useEffect } from 'react';
import "./FavScroller.css";
import placeholder from "../../assets/posterPlaceholder.png"

export const FavScroller = (props) => {

    const [favoriteList, setFavoriteList] = useState([]);

    useEffect(() => {
        setFavoriteList([]);
        const populateScroller = async () => {
            try {
                const response = await fetch(`/api/getUserFavorites?userID=${props.userID}`, {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    const listOfFavorites = (data.listOfFavorites).map(item => item.movieposterurl);
                    console.log('List of how many favorites: ',(data.listOfFavorites).length);
                    console.log(listOfFavorites);
                    if ((listOfFavorites).length < 4) {
                        for (let i = 0; i < (4 - (listOfFavorites).length); i++) {
                            listOfFavorites.push(placeholder);
                        }
                    }
                    setFavoriteList(listOfFavorites);
    
                } else console.error('Failed to fetch favorite movies: ', response.statusText);
            } catch (error) {
                console.error('Error fetching favoritemovies: ', error.message);
            }
        };
        populateScroller();
    
    }, [props])

    useEffect(() => {
        runAnimation();
    }, [favoriteList])
    
    
    function addAnimation(scrollers) {
        scrollers.forEach((scroller) => {
          // add data-animated="true" to every `.scroller` on the page
          scroller.setAttribute("data-animated", true);
      
          // Make an array from the elements within `.scroller-inner`
          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);
      
          // For each item in the array, clone it
          // add aria-hidden to it
          // add it into the `.scroller-inner`
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }

    function runAnimation() {
        const scrollers = document.querySelectorAll('.scroller');
        addAnimation(scrollers);
    }
    
    return (
        <div className="scroller">
            <div className="scroller__inner">
                {favoriteList.map((element, index) => (
                    <img key={index} src={element} alt="" width='175' height='275'/>
                ))}
                {/* <img src="https://placehold.co/300x100/orange/white" alt=""/>
                <img src="https://placehold.co/300x100/red/orange" alt="" />
                <img src="https://placehold.co/300x100/black/white" alt=""  /> */}
            </div>
        </div>
    );
};
