import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card'>
        <div className='cardThumbnail'>
          <img src={props.thumbnail}/>
        </div>
        <div className='profile'>
            <div className='profilePhoto'></div>
            <div className='videoData'>
              <p className='videoTitle'></p>
            </div>
        </div>
    </div>
  )
}

export default Card