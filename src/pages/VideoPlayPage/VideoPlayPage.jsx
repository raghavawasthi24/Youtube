import React, { useEffect } from 'react';
import "./VideoPlayPage.css";
import { videoContent } from '../../components/Card/Card';
// import { videoContent } from '../../components/Card/Card';

const VideoPlayPage = () => {

    const show=()=>{
        console.log("xcvbnm,")
        console.log(videoContent)

    }
   
  return (
    <div className='videoPlayer'>
        {/* <video src={videoContent}/> */}
        hhhh
        <button onClick={show}>click</button>
    </div>
  )
}

export default VideoPlayPage