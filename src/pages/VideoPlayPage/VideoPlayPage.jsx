import React from "react";
import "./VideoPlayPage.css";
import { videoContent } from "../../components/Card/Card";
// import { videoContent } from '../../components/Card/Card';

const VideoPlayPage = () => {


  return (
    <div className="videoPlayer">
      <video width="750" height="500" controls>
        <source src={videoContent.video} type="video/mp4" />
      </video>
    <div className="videoTut">
      <div className="videotitle">{videoContent.title}</div>
      <div className="creatorDetails">
      <img  className="profilePhoto" src={videoContent.profilePhoto} alt="profile"/>
      <p className="creatorName">{videoContent.name}</p>
      </div>
    </div>
    <h4 style={{marginTop:"1rem"}}>Description</h4>
    <div className="description">{videoContent.description}</div>
    </div>
  );
};

export default VideoPlayPage;
