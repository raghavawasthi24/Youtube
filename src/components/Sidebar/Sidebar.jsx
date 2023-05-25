import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='icon home'>
           <HomeIcon/>
           <p>Home</p>
        </div>
        <div className='icon subscription'>
            <SubscriptionsIcon/>
            <p>Subscription</p>
        </div>
        <div className='icon library'>
            <LibraryAddIcon/>
            <p>Library</p>
        </div>
        <div className='icon download'>
            <ArrowDownwardIcon/>
            <p>Download</p>
        </div>
    </div>
  )
}

export default Sidebar