import React from 'react';
import "./Card.css";
import { useNavigate } from 'react-router-dom';


export let videoContent="";

const Card = (props) => {
  const navigate=useNavigate();
  const playVideo=()=>{
    console.log(props.video)
     videoContent=props.video;
     console.log(videoContent)
    //  navigate("/video")

  }
  return (
    <div className='card'>
        <div className='cardThumbnail' onClick={playVideo}>
          <img src={props.thumbnail}/>
        </div>
        <div className='profile'>
            <div className='profilePhoto'>
            <img src={props.pic}/>
            </div>
            <div className='videoData'>
              <p className='videoTitle'>{props.title}</p>
              <p className='cretorName'>{props.name}</p>
              <p className='viewCount'>{props.view} Views</p>
            </div>
        </div>
    </div>
  )
}

export default Card