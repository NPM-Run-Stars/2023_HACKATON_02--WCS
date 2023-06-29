import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../../../services/connexion";
// import { useCurrentUser } from "../../../contexts/AuthContexts";

function Profil() {
  const params = useParams();
  const [profil, setProfil] = useState({});

  useEffect(() => {
    const getProfil = async () => {
      try {
        const profils = await connexion.get(`/profile/${params.id}`);
        setProfil(profils);
      } catch (err) {
        console.error(err);
      }
    };
    getProfil();
  }, []);

  return (
    <div>
      <h1>Bonjour {profil[0].firstname}</h1>
    </div>
  );
}

export default Profil;
