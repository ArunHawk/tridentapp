import React from 'react'
import './nav.css'
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const navigate = useNavigate();
    const handleRefer =()=>{
        navigate("/refer")
    }
    const handleHow =()=>{
        navigate("/howit")
    }
  return (
    <div className='nav'>
        <div className='navbar'>
            <div className='navList'>
            <button onClick={handleHow}><SlideshowOutlinedIcon/> <span>How it Works?</span></button>       
            </div>
            <div className='navList'>
            <button onClick={handleRefer}><CurrencyRupeeOutlinedIcon/><span>Refer Friends</span></button>
            </div>
            <div className="contact">
            <span>For Booking</span>
            <span>Contact: +91-9176169963</span>
        </div>
        </div>
    </div>
  )
}

export default Nav