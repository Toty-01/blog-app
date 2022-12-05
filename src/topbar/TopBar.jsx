import React from 'react'
import "./topbar.css"

const TopBar = () => {
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className='topListItem'>Home</li>
            <li className='topListItem'>About</li>
            <li className='topListItem'>Contact</li>
            <li className='topListItem'>Write</li>
            <li className='topListItem'>Logout</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  )
}

export default TopBar