import React from 'react'
import "./ArrowIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

export const ArrowIcon = (props) => {
  
  const arrowClick = () => {
    if (props.state) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }

  const divStyle = {
    flexDirection: props.state ? 'column-reverse': 'column',
    backgroundColor: props.state ? '#B9BBB6': '#EFEFEF',
  }
  
  return (
    <>
        <div id='icon' style={divStyle}>

            <div id="text">
              {props.state ? "Movie Overview" : "User Reviews"}
            </div>

            <div id="arrowIcon" onClick={arrowClick}>
              {props.state ? 
                <FontAwesomeIcon icon={faArrowAltCircleUp} size='3x'/>:              
                <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x"/>
              }
            </div>

        </div>

    </>
  )
}
