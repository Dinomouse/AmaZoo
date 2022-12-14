import SignUp from "../SignUp";
import "./homepage.css";

function HomePage({ isAuthenticated }) {
  return (
    <div className="home-page-container">
      <h1 className="main-title">Adopting animals made easy</h1>
      {!isAuthenticated && <h3>Sign up and start saving lives today:</h3>}
      {!isAuthenticated && <SignUp></SignUp>}
    </div>
  );
}

export default HomePage;
