import "./index.css";
import { Link } from "react-router-dom";
import zooIcon from "../../images/zooIcon.svg";
import LoginButton from "../LoginButton/loginButton.js";
import ProfileIcon from "../ProfileIcon/profileIcon.js";
import LogoutButton from "../LogoutButton/logoutButton.js";
import Basket from "../Basket";
import About from "../../images/About.svg";

function FootBar({ isAuthenticated, user, myBasket }) {
  return (
    <footer className="foot-bar">
      <div className="nav-buttons-container">
        <Link to="/About" style={{ textDecoration: "none" }}>
          {/* <object
          type={"image/svg+xml"}
          data={About}
          className="zoo-icon"
          aria-label="about"
        ></object> */}{" "}
          <div className="search">About</div>
        </Link>
        <Link to="/Search" style={{ textDecoration: "none" }}>
          <div className="search">Search</div>
        </Link>
        <Link to="/Zoo" style={{ textDecoration: "none" }}>
          <div className="search">My Zoo</div>
        </Link>
      </div>

      <div className="nav-buttons">
        {isAuthenticated && <ProfileIcon user={user} />}

        {isAuthenticated && (
          <Link to="/MyBasket" style={{ textDecoration: "none" }}>
            <Basket myBasket={myBasket} />
          </Link>
        )}
        {!isAuthenticated && <LoginButton />}

        {isAuthenticated && <LogoutButton />}
      </div>
    </footer>
  );
}

export default FootBar;
