import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../../../services/connexion";

function Profil() {
  const params = useParams();
  const [profil, setProfil] = useState([]);

  const getProfil = async () => {
    try {
      const profils = await connexion.get(`/profile/${params.id}`);
      setProfil(profils);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getProfil();
  }, []);

  if (!profil || profil.length === 0) {
    return <p>Chargement en cours...</p>;
  }

  const handleUser = (event) => {
    const updatedProfile = {
      ...profil[0],
      [event.target.name]: event.target.value,
    };
    setProfil([updatedProfile]);
  };

  const UpdateProfil = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/profile/update`, profil);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="profil-container">
      {profil[0].src ? (
        <img src={profil[0].src} alt="profil de l'utilisateur" />
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png"
          alt="profil de l'utilisateur"
        />
      )}
      <form>
        <label htmlFor="firstname" className="label-title">
          Prénom
        </label>
        <input
          type="text"
          value={profil[0]?.firstname || ""}
          onChange={handleUser}
          name="firstname"
          className="basic-input formEntry animated"
          required
        />

        <label htmlFor="lastname" className="label-title">
          Nom
        </label>
        <input
          type="text"
          value={profil[0]?.lastname || ""}
          onChange={handleUser}
          name="lastname"
          className="basic-input formEntry animated"
          required
        />
        <label htmlFor="src" className="label-title">
          Photo de profil
        </label>
        <input
          type="text"
          value={profil[0] ? profil[0].src : ""}
          onChange={handleUser}
          name="src"
          className="basic-input formEntry animated"
          required
        />
        <button
          type="button"
          className="main-btn profil-btn"
          onClick={(event) => UpdateProfil(event)}
        >
          Mettre a jour le profil
        </button>
      </form>
    </div>
  );
}

export default Profil;
