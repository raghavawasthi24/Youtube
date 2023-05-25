import React, { useEffect, useState } from 'react';
import "./MainPage.css";
import axios from 'axios';
import Card from '../../components/Card/Card';

const MainPage = () => {
  const [postData,setPostData]=useState([])
  const [pagevalue,setPagevalue]=useState(0);

  const decVal=()=>{
    if(pagevalue!==0)
    setPagevalue(pagevalue-1)
  }
 
  const incVal=()=>{
    if(pagevalue<postData.length-1)
    setPagevalue(pagevalue+1)
  }


  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/videos?page=${pagevalue}`)
    .then((res)=>{
      console.log(res.data.data.posts)
      setPostData(res.data.data.posts);
      
      // console.log(postData);
  })
  window.scrollTo(0,0)
  // eslint-disable-next-line
    },[pagevalue])
 
  return (
    <div className='mainpage'>
      <div className="videos">
        {
          postData.map((val)=>{
            return(<Card thumbnail={val.submission.thumbnail} pic={val.creator.pic} title={val.submission.title} name={val.creator.name} view={val.reaction.count} video={val.submission.mediaUrl} desc={val.submission.description}/>)
          })
        }
      </div>

      <div className='pagination'>
       
        <p className='valueChanger' onClick={decVal}>Prev</p>
        <p>{pagevalue} of {postData.length}</p>
        <p className='valueChanger' onClick={incVal}>Next</p>
        
      </div>
       
    </div>
  )
}

export default MainPage;