import React from "react";
import "./ProfilCard.scss";
import { Link } from "react-router-dom";

function ProfilCard({ profil }) {
  return (
    <Link to={`${profil.id}`}>
      <div className="profilCard">
        {profil.src ? (
          <img src={profil.src} alt="profil de l'utilisateur" />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png"
            alt="profil de l'utilisateur"
          />
        )}

        <div>
          <h3>
            {profil.firstname} {profil.lastname}
          </h3>
          <p>{profil.place}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProfilCard;
