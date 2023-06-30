import React from "react";
import { Link } from "react-router-dom";
import Robot from "./assets/robot.png";

function Error() {
  return (
    <div className="error">
      <h1 className="error-title">Je crois qu'il ne passe rien ici ...</h1>
      <img className="robot" src={Robot} alt="" />
      <Link to="/">
        <button className="redirection" type="button">
          {" "}
          Retourner à l'accueil
        </button>
      </Link>
    </div>
  );
}

export default Error;
