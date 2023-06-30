import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import connexion from "../../../services/connexion";

function PutInformations({ handlePhone, handleValue }) {
  const [AllBrands, setAllBrands] = useState([]);
  const [AllModels, setAllModels] = useState([]);
  const [AllRams, setAllRams] = useState([]);
  const [AllStorages, setAllStorages] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});

  const getBrands = async () => {
    try {
      const brands = await connexion.get("/brands");
      setAllBrands(brands);
    } catch (err) {
      console.error(err);
    }
  };

  const getModels = async (brand) => {
    try {
      const models = await connexion.get(`/models?name=${brand}`);
      setAllModels(models);
    } catch (err) {
      console.error(err);
    }
  };

  const getRams = async () => {
    try {
      const rams = await connexion.get("/rams");
      setAllRams(rams);
    } catch (err) {
      console.error(err);
    }
  };

  const getStorages = async () => {
    try {
      const storages = await connexion.get("/storages");
      setAllStorages(storages);
    } catch (err) {
      console.error(err);
    }
  };

  const handleBrand = (brand) => {
    if (brand) {
      setSearchParams({ name: brand });
    } else {
      setSearchParams("");
    }
    getModels(brand);
  };

  useEffect(() => {
    getBrands();
    getRams();
    getStorages();
  }, []);

  return (
    <>
      <h1>Renseignez les informations du téléphone</h1>
      <select
        name="brand"
        onChange={(e) => {
          handleBrand(e.target.value);
          handlePhone(e.target.name, e.target.value);
        }}
      >
        <option value="">Selectionnez la marque</option>
        {AllBrands.map((brand) => (
          <option value={brand.brand} key={brand.id}>
            {brand.brand}
          </option>
        ))}
      </select>

      <select
        name="model"
        onChange={(e) => handlePhone(e.target.name, e.target.value)}
      >
        <option value="">Selectionnez le modèle</option>
        {AllModels.map((model) => (
          <option value={model.model} key={model.id}>
            {model.model}
          </option>
        ))}
      </select>

      <select
        name="value_ram"
        onChange={(e) => handleValue(e.target.name, e.target.value)}
      >
        <option value="">Quelle est la RAM?</option>
        {AllRams.map((ram) => (
          <option value={ram.value_ram} key={ram.id}>
            {ram.property_ram}
          </option>
        ))}
      </select>

      <select
        name="value_storage"
        onChange={(e) => handleValue(e.target.name, e.target.value)}
      >
        <option value="">Quelle est la capacité de la mémoire?</option>
        {AllStorages.map((storage) => (
          <option value={storage.value_storage} key={storage.id}>
            {storage.property_storage}
          </option>
        ))}
      </select>
    </>
  );
}

export default PutInformations;
