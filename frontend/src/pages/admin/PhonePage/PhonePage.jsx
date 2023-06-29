import React, { useState, useEffect } from "react";
import Brands from "../../../components/Brands/Brands";
import connexion from "../../../services/connexion";

function PhonePage() {
  const [brands, setBrands] = useState([]);

  const getProfil = async () => {
    try {
      const allBrands = await connexion.get(`/brands`);
      setBrands(allBrands);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProfil();
  }, []);

  return (
    <div>
      {brands.length > 0 ? <Brands brands={brands} /> : <p>Loading...</p>}
    </div>
  );
}

export default PhonePage;
