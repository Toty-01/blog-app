import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"

const TopBar = () => {
  const user = false;
  return (
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className='topListItem'><Link className='link' to={"/"}>Accueil</Link></li>
            <li className='topListItem'>About</li>
            <li className='topListItem'>Contact</li>
            <li className='topListItem'><Link className='link' to={"/write"}>Ecrire</Link></li>
            <li className='topListItem'>{ user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          { user ? 
          (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to="/login">
                  Connexion
                </Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to="/register">
                  S'inscrire
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
  )
}

export default TopBar