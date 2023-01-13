import "./header.css";
import img from "../img/img (2).jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My Travel</span>
        <span className="headerTitleLg">Blog Website</span>
      </div>
      <img
        className="headerImg"
        src={img}
        alt=""
      />
    </div>
  );
}