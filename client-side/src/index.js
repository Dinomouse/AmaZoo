import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.js";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-7iel9e31.eu.auth0.com"
    clientId="sNaPlSpNxIuZZ9BKIapypVYhXD7W2eK9"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
