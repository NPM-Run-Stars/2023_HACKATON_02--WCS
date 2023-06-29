import React, { useState } from "react";
import connexion from "../../services/connexion";

function Brands({ brands }) {
  const [brand, setBrand] = useState({
    brand: "",
  });

  const handleUser = (event) => {
    setBrand({ brand: event.target.value });
  };

  const postBrand = async (event) => {
    event.preventDefault();
    try {
      const art = await connexion.post("/brands", brand);
      setBrand(art);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Gestion des marques</h3>

      <label htmlFor="brand">Marque</label>
      <input
        type="text"
        value={brands.name}
        onChange={(event) => handleUser(event)}
        name="brand"
        required
      />

      <button type="button" onClick={(event) => postBrand(event)}>
        Signup
      </button>
    </div>
  );
}

export default Brands;
