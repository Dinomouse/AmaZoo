import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login" onClick={() => loginWithRedirect()}>
      Sign Up
    </button>
  );
};

export default SignUp;
