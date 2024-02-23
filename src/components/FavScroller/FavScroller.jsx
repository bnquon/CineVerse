import React, { useEffect } from 'react';
import "./FavScroller.css";

export const FavScroller = () => {
    useEffect(() => {
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

        addAnimation();
    }, []); // The empty dependency array ensures that the effect runs once after the initial render

    return (
        <div className="scroller">
            <div className="scroller_inner">
                <img src="https://placehold.co/175x300/orange/white" alt="" />
                <img src="https://placehold.co/175x300/orange/white" alt="" />
                <img src="https://placehold.co/175x300/orange/white" alt="" />
                <img src="https://placehold.co/175x300/orange/white" alt="" />
            </div>
        </div>
    );
};
