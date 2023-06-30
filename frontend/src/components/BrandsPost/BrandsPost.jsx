import React, { useState } from "react";
import connexion from "../../services/connexion";

function BrandsPost() {
  const [brand, setBrand] = useState({
    brand: "",
  });

  const handleUser = (event) => {
    setBrand({ brand: event.target.value });
  };

  const postBrand = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/brands", brand);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h3 className="main-titel">Gestion des marques</h3>

      <label className="label-title" htmlFor="brand">
        Marque
      </label>
      <input
        className="basic-input animated"
        type="text"
        onChange={(event) => handleUser(event)}
        name="brand"
        required
      />

      <button
        className="main-btn"
        type="button"
        onClick={(event) => postBrand(event)}
      >
        Ajouter
      </button>
    </div>
  );
}

export default BrandsPost;
