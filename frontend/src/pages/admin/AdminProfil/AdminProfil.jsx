import React, { useEffect, useState } from "react";
import Signup from "../../../components/Signup/Signup";
import connexion from "../../../services/connexion";
import ProfilCard from "../../../components/ProfilCard/ProfilCard";
import "./AdminProfil.scss";

function AdminProfil() {
  const [profils, setProfils] = useState([]);

  const getProfil = async () => {
    try {
      const profilsGet = await connexion.get(`/profile`);
      setProfils(profilsGet);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProfil();
  }, []);

  return (
    <div>
      <h3 className="main-titel">Gestion des utilisateurs</h3>

      <Signup />

      <div className="Card">
        {profils.map((profil) => (
          <ProfilCard key={profil.id} profil={profil} />
        ))}
      </div>
    </div>
  );
}

export default AdminProfil;
