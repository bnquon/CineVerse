import React, { useState, useEffect } from 'react';
import "./FavScroller.css";
import placeholder from "../../assets/posterPlaceholder.png"

export const FavScroller = (props) => {

    const [favoriteList, setFavoriteList] = useState([]);

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
                console.error('Error fetching favorite movies: ', error.message);
            }
        };

        // This code will run after the component has been mounted
        const scrollers = document.querySelectorAll(".scroller");

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroller_inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicateItem = item.cloneNode(true);
                    duplicateItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicateItem);
                });
            });
        }
        populateScroller();
        addAnimation();
    }, []); // The empty dependency array ensures that the effect runs once after the initial render

    const difference = favoriteList.length; 
    
    return (
        <div className="scroller">
            <div className="scroller_inner">
                {favoriteList.map((element, index) => (
                    <img key={index} src={element} alt="" width='175' height='275'/>
                ))}
                <img src={placeholder} alt="" />
                <img src={placeholder} alt="" />
                <img src={placeholder} alt="" />
            </div>
        </div>
    );
};
