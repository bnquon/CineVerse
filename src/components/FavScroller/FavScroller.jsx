import React, { useState, useEffect } from 'react';
import "./FavScroller.css";
import placeholder from "../../assets/posterPlaceholder.png"

export const FavScroller = (props) => {

    const [favoriteList, setFavoriteList] = useState([]);
    const [differenceList, setDifferenceList] = useState([]);

    const populateScroller = async () => {
        try {
            const response = await fetch(`/api/getUserFavorites?userID=${props.userID}`, {
                method: 'GET',
            });
            if (response.ok) {
                const data = await response.json();
                const listOfFavorites = (data.listOfFavorites).map(item => item.movieposterurl);
                console.log(listOfFavorites);
                
                if (listOfFavorites.length < 4) {
                    for (let i = 0; i < (4-listOfFavorites.length); i++) {
                        listOfFavorites.push(placeholder);
                    }
                }
                setFavoriteList(listOfFavorites);

            } else console.error('Failed to fetch favorite movies: ', response.statusText);
        } catch (error) {
            console.error('Error fetching favoritemovies: ', error.message);
        }
    };

    useEffect(() => {  
        populateScroller();
        
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
        
        addAnimation();
    }, []);

    // useEffect(() => {
    //     if (favoriteList.length < 4) {
    //         const tempDifferences = [];
    //         for (let i = 0; i < (4 - favoriteList.length); i++) {
    //             tempDifferences.push(placeholder);
    //         }
    //         setDifferenceList(tempDifferences);
    //     } else {
    //         setDifferenceList([]);
    //     }
    // }, []);
    
    return (
        <div className="scroller">
            <div className="scroller_inner">
                {favoriteList.map((element, index) => (
                    <img key={index} src={element} alt="" width='175' height='275'/>
                ))}
                {/* {differenceList.map((element, index) => (
                    <img key={index + favoriteList.length} src={element}/>
                ))} */}
            </div>
        </div>
    );
};
