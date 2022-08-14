import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import ProfilePage from "../ProfilePage";
import HomePage from "../HomePage";
import FootBar from "../FootBar";
import Search from "../Search";
import MyBasket from "../MyBasket";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [myBasket, setMyBasket] = useState([]);

  function animalClick(animal) {
    setMyBasket([...myBasket, animal]);
  }

  return (
    <div className="App">
      <Router>
        <Navbar
          user={user}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage isAuthenticated={isAuthenticated}></HomePage>}
          ></Route>
          <Route path="/About" element={<div>About</div>}></Route>
          <Route path="/Profile" element={<ProfilePage user={user} />}></Route>
          <Route
            path="/MyBasket"
            element={<MyBasket myBasket={myBasket} />}
          ></Route>
          <Route
            path="/Search"
            element={<Search animalClick={animalClick} />}
          ></Route>
          <Route path="/Zoo" element={<div>Zoo</div>}></Route>
        </Routes>
        <FootBar
          isAuthenticated={isAuthenticated}
          user={user}
          myBasket={myBasket}
        ></FootBar>
      </Router>
    </div>
  );
}

export default App;
