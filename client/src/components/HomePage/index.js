import LoginButton from "../LoginButton/loginButton";
import SignUp from "../SignUp";
import "./homepage.css";

function HomePage({ isAuthenticated }) {
  return (
    <div className="home-page-container">
      <h1>Sponsoring animals in need made easy</h1>
      {!isAuthenticated && <h3>Sign up and start saving live today:</h3>}
      {!isAuthenticated && <SignUp></SignUp>}
    </div>
  );
}

export default HomePage;
