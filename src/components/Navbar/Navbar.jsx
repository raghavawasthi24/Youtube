import React from 'react';
import "./Navbar.css";
import YTlogo from "../../assests/images/ytlogo.png";
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={YTlogo} alt='logo'/>
      <div className='searchbar'>
      <input placeholder='Search'/>
       <SearchIcon sx={{paddingLeft:"2px",color:"gray"}}/>
      </div>
      <div className='userData'>
       <AccessibilityIcon/>
       <NotificationsActiveIcon/>
       <img src='https://content-uploads-staging.s3.ap-south-1.amazonaws.com/3e7f4ad1c192_1656761968708.png' alt='profile'/>
      </div>
      
    </div>
  )
}

export default Navbar