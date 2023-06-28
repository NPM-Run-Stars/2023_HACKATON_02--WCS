import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import connexion from "../services/connexion";
import "react-toastify/dist/ReactToastify.css";

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

  const notify = (signup) => {
    if (signup.status === 201) {
      toast.success(signup.data.msg);
    } else if (signup.status === 400) {
      toast.warning(signup.data.msg);
    } else if (signup.status === 409) {
      toast.error("l'email existe déjà");
    }
  };

  const createAccount = async (event) => {
    event.preventDefault();
    try {
      const signup = await connexion.post("/signup", userSignup);
      notify(signup);
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
        <ToastContainer
          autoClose={5000}
          position="top-center"
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
}

export default Signup;
