import "./FavScroller.css"
// WILL PASS THROUGH JSON LIST OF "FAVOURITE MOVIES" AND THEN WILL USE REACT MORE FOR IT


export const FavScroller = () => {

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
        
    return (
    <div className="scroller">
        <div className="scroller_inner">
            <img src="https://placehold.co/100x200" alt="" />
            <img src="https://placehold.co/100x200" alt="" />
            <img src="https://placehold.co/100x200" alt="" />
            <img src="https://placehold.co/100x200" alt="" />
        </div>
    </div>
  )
}
