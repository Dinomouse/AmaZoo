import "./index.css";
import { Link } from "react-router-dom";

import LoginButton from "../LoginButton/loginButton.js";
import ProfileIcon from "../ProfileIcon/profileIcon.js";
import LogoutButton from "../LogoutButton/logoutButton.js";
import Basket from "../Basket";

function FootBar({ isAuthenticated, user, myBasket }) {
  return (
    <footer className="foot-bar">
      <div className="nav-buttons-container">
        <Link to="/About" style={{ textDecoration: "none" }}>
          <button className="about-search-learn">About</button>
        </Link>
        <Link to="/Search" style={{ textDecoration: "none" }}>
          <button className="about-search-learn">Search</button>
        </Link>
        <Link to="/Learn" style={{ textDecoration: "none" }}>
          <button className="about-search-learn">Learn</button>
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
