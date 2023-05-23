import React, { useEffect, useState } from 'react';
import "./MainPage.css";
import axios from 'axios';
import Card from '../../components/Card/Card';


const MainPage = () => {
  const [postData,setPostData]=useState([])
 

  useEffect(()=>{
    axios.get("https://internship-service.onrender.com/videos?page=0")
    .then((res)=>{
      console.log(res.data.data.posts)
      setPostData(res.data.data.posts);
      // console.log(postData);
  })
    },[])
 
  return (
    <div className='mainpage'>
      {
        postData.map((val)=>{
          return(<Card thumbnail={val.submission.thumbnail} pic={val.creator.pic} title={val.submission.title} name={val.creator.name} view={val.reaction.count} video={val.submission.mediaUrl}/>)
        })
      }
       
    </div>
  )
}

export default MainPage