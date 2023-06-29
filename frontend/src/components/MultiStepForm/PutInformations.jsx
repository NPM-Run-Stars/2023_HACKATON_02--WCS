import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";

function PutInformations() {
  const [Brands, setBrands] = useState([]);

  const getBrands = async () => {
    try {
      const brands = await connexion.get("/brands");
      setBrands(brands);
    } catch (err) {
      console.error(err);
    }
  };

  const getModels = async () => {
    try {
      const models = await connexion.get("/models");
      console.info(models);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBrands();
    getModels();
  }, []);
  return (
    <>
      <h1>Renseignez les informations du téléphone</h1>
      <select name="brand" id="">
        <option value="">Selectionnez la marque</option>
        {Brands.map((brand) => (
          <option value={brand.id} key={brand.id}>
            {brand.brand}
          </option>
        ))}
      </select>
    </>
  );
}

export default PutInformations;
