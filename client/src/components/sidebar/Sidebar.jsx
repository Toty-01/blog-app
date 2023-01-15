import { useContext } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { Context } from "../../context/Context";
import img from "../img/img(21).jpg"

export default function Sidebar() {

  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Mon espace</span>
        <div className="settingsPP">
        {user ? (
          <Link to="/settings">
            <img className="SidImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img src={img}/>
        )}
          </div>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Nous suivre</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}