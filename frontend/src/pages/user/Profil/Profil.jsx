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
      // Gestion des erreurs ici (affichage d'un message d'erreur, etc.)
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

  const login = async (event) => {
    event.preventDefault();
    try {
      //   const updateProfil = await connexion.post("/signin", profil);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <img src={profil.src} alt="profil de l'utilisateur" />

      <form>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          value={profil[0]?.firstname || ""}
          onChange={handleUser}
          name="firstname"
          required
        />

        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          value={profil[0]?.lastname || ""}
          onChange={handleUser}
          name="lastname"
          required
        />
        <label htmlFor="src">Photo de profil</label>
        <input
          type="text"
          value={profil[0] ? profil[0].src : ""}
          onChange={handleUser}
          name="src"
          required
        />

        <button type="button" onClick={(event) => login(event)}>
          Mettre a jour le profil
        </button>
      </form>
    </div>
  );
}

export default Profil;
