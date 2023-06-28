import React, { useState } from "react";
import connexion from "../services/connexion";

function Signin() {
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const signin = await connexion.post("/signin", userSignin);
      console.info(signin);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form>
        <input
          type="email"
          value={userSignin.email}
          onChange={(event) => handleUser(event)}
          name="email"
          required
        />
        <label htmlFor="email">Email</label>

        <input
          type="password"
          value={userSignin.password}
          onChange={(event) => handleUser(event)}
          name="password"
          required
        />
        <label htmlFor="password">Password</label>

        <button type="button" onClick={(event) => login(event)}>
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;
