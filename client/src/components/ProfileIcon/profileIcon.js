import { Link } from "react-router-dom";
import "./profileicon.css";

function ProfileIcon({ user }) {
  return (
    <div className="profile-image-container">
      <Link to="/Profile" className="profile-image-container">
        <img className="profile-image" src={user.picture} alt={user.name} />
      </Link>
    </div>
  );
}

export default ProfileIcon;
