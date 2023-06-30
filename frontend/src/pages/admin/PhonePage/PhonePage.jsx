import React, { useState, useEffect } from "react";
import BrandsPost from "../../../components/BrandsPost/BrandsPost";
import BrandsCard from "../../../components/BrandsCard/BrandsCard";
import connexion from "../../../services/connexion";
import "./PhonePage.scss";

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
      <BrandsPost />

      <div className="brandContainer">
        {brands.map((brand) => (
          <BrandsCard brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default PhonePage;
