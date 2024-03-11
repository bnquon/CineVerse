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
                    setFavoriteList(listOfFavorites);
    
                } else console.error('Failed to fetch favorite movies: ', response.statusText);
            } catch (error) {
                console.error('Error fetching favoritemovies: ', error.message);
            }
        };
        populateScroller();
    }, [props.userID])

    useEffect(() => {
        if (favoriteList.length < 4) {
            const temp = [...favoriteList];
            for (let i = 0; i < (4-temp.length); i++) {
                temp.push(placeholder);
            }
            console.log('TEMP IS IN FavScroller.jsx: ', temp);
            setFavoriteList(temp);
        }

    }, [favoriteList])
    
    function addAnimation() {
        const scrollers = document.querySelectorAll(".scroller");
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            
            const scrollerInner = scroller.querySelector(".scroller_inner");
            const scrollerContent = Array.from(scrollerInner.children);
            
            scrollerContent.forEach((item) => {
                const duplicateItem = item.cloneNode(true);
                console.log('Duplicate: ', duplicateItem);
                duplicateItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicateItem);
            });
        });
    }

    useEffect(() => {
        addAnimation();
    }, [])
    
    return (
        <div className="scroller">
            <div className="scroller_inner">
                {favoriteList.map((element, index) => (
                    <img key={index} src={element} alt="" width='175' height='275'/>
                ))}
            </div>
        </div>
    );
};
