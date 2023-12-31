import React, { useState } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
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
      toast.success("Connexion réussie");
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
          navigate("/intro");
        }, 2000);
      } else {
        setUser(profil);
        setTimeout(() => {
          navigate("/intro");
        }, 2000);
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
            MOT DE PASSE
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
            SE CONNECTER
          </button>

          <ToastContainer
            autoClose={2000}
            position="top-center"
            draggable
            transition={Flip}
            toastClassName="custom-toast"
          />
        </div>
      </form>
    </div>
  );
}
export default Signin;
