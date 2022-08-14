import "./navbar.css";
import logo from "../../images/Logo.svg";

import { Link } from "react-router-dom";

function Navbar({ user, isAuthenticated, isLoading }) {
  return (
    <nav class="nav-bar">
      <object
        type={"image/svg+xml"}
        data={logo}
        className="logo"
        aria-label="logo"
      ></object>

      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="title">AmaZoo</div>
      </Link>
      {/* <div className="nav-buttons">
        {isAuthenticated && <ProfileIcon user={user} />}
        {!isAuthenticated && <LoginButton />}

        {isAuthenticated && <LogoutButton />}
      </div> */}
    </nav>
  );
}

export default Navbar;
