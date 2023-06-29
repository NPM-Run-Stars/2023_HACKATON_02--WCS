import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import connexion from "../../services/connexion";
import { useCurrentUser } from "../../contexts/AuthContexts";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useCurrentUser();
  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const notify = (signin) => {
    if (signin.status === 200) {
      toast.success(signin.data.msg);
    } else if (signin.status === 400) {
      toast.warning(signin.data.msg);
    } else if (signin.status === 401) {
      toast.error("Les informations de connexion sont incorrectes");
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const signin = await connexion.post("/signin", userSignin);
      notify(signin);
      const profil = {
        role: signin.data.role,
        id: signin.data.id,
        firstname: signin.data.firstname,
      };

      if (profil.role === "admin") {
        setUser(profil);
        setTimeout(() => {
          navigate("/admin");
        }, 5000);
      } else {
        setUser(profil);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
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

export default Signin;
