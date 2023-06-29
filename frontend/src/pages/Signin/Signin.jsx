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

      if (signin.data.role === "admin") {
        setUser(signin.data.role);
        setTimeout(() => {
          navigate("/admin");
        }, 5000);
      } else {
        setUser(signin.data.role);
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
      <img
        className="logo-connexion"
        src="https://emmaus-connect.org/logo.svg"
        alt="Logo Emmaus Connect"
        width="300px"
      />
      <form>
        <h1 className="main-titel">Connexion</h1>
        <div className="form-container">
          <label htmlFor="email" className="label-title">
            Email
          </label>
          <input
            type="email"
            value={userSignin.email}
            onChange={(event) => handleUser(event)}
            name="email"
            className="basic-input animated"
            required
          />

          <label htmlFor="password" className="label-title">
            Password
          </label>
          <input
            type="password"
            value={userSignin.password}
            onChange={(event) => handleUser(event)}
            name="password"
            className="basic-input-yellow animated"
            required
          />

          <button
            type="button"
            onClick={(event) => login(event)}
            className="main-btn"
          >
            Signin
          </button>

          <ToastContainer
            autoClose={5000}
            position="top-center"
            draggable
            pauseOnHover
          />
        </div>
      </form>
    </div>
  );
}
export default Signin;
