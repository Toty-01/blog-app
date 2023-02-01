import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              ACCUEIL
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              contact
            </Link>
          </li>
          <li className="topListItem">
            {user && 
            <Link className="link" to="/write">
              ECRIRE
            </Link>
            }
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && 
              <Link className="link">
                <i className="fas fa-sign-out-alt"></i>
              </Link>}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Connexion
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}