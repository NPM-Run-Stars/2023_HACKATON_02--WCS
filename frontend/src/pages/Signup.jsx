import React, { useState } from "react";
import connexion from "../services/connexion";

function Signup() {
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    localisation: "",
  });

  const handleUser = (event) => {
    setUserSignup({ ...userSignup, [event.target.name]: event.target.value });
  };

  const createAccount = async (event) => {
    event.preventDefault();
    try {
      const signup = await connexion.post("/signup", userSignup);
      console.info(signup);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form>
        <input
          type="email"
          value={userSignup.email}
          onChange={(event) => handleUser(event)}
          name="email"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="password"
          value={userSignup.password}
          onChange={(event) => handleUser(event)}
          name="password"
          required
        />
        <label htmlFor="password">Password</label>

        <input
          type="text"
          value={userSignup.firstname}
          onChange={(event) => handleUser(event)}
          name="firstname"
          required
        />
        <label htmlFor="firstname">firstname</label>

        <input
          type="text"
          value={userSignup.lastname}
          onChange={(event) => handleUser(event)}
          name="lastname"
          required
        />
        <label htmlFor="lastname">lastname</label>

        <input
          type="text"
          value={userSignup.localisation}
          onChange={(event) => handleUser(event)}
          name="localisation"
          required
        />
        <label htmlFor="localisation">localisation</label>

        <button type="button" onClick={(event) => createAccount(event)}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
