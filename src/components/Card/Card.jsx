import React from 'react';
import "./Card.css";
import { useNavigate } from 'react-router-dom';


export let videoContent={
  video:"",
  profilePhoto:"",
  title:"",
  name:"",
  description:"",
};

const Card = (props) => {
  const navigate=useNavigate();
  const playVideo=()=>{
    console.log(props.video)
     videoContent.video=props.video;
     videoContent.title=props.title;
     videoContent.profilePhoto=props.pic;
     videoContent.name=props.name;
     videoContent.description=props.desc;
     console.log(videoContent)
     navigate("/video")

  }
  return (
    <div className='card'>
        <div className='cardThumbnail' onClick={playVideo}>
          <img src={props.thumbnail} alt='thumbnail'/>
        </div>
        <div className='profile'>
            <div className='profilePhoto'>
            <img src={props.pic} alt='pic'/>
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