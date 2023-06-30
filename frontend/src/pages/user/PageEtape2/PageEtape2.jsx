import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import connexion from "../../../services/connexion";
import AbbePierre from "../../../assets/abbe-pierre.png";

function PutInformations({ handlePhone }) {
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
    <div>
      <div className="containerbar width-bar">
        <img
          className="personnage-picture thumbnail-picture"
          src={AbbePierre}
          alt="Abbe Pierre"
          width="50px"
        />
        <ul className="progressbar">
          <li className="active">Etape 1</li>
          <li className="active">Etape 2</li>
          <li>Etape 3</li>
          <li>Etape 4</li>
        </ul>
      </div>
      <div>
        <div className="brandname-cont">
          <h1 className="brand-title">
            Renseignez les informations du téléphone
          </h1>
          <div className="select-cont">
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
              name="model_id"
              onChange={(e) => handlePhone(e.target.name, +e.target.value)}
            >
              <option value="">Selectionnez le modèle</option>
              {AllModels.map((model) => (
                <option value={model.id} key={model.id}>
                  {model.model}
                </option>
              ))}
            </select>

            <select
              name="ram_id"
              onChange={(e) => handlePhone(e.target.name, +e.target.value)}
            >
              <option value="">Quelle est la RAM?</option>
              {AllRams.map((ram) => (
                <option value={ram.id} key={ram.id}>
                  {ram.property_ram}
                </option>
              ))}
            </select>

            <select
              name="storage_id"
              onChange={(e) => handlePhone(e.target.name, +e.target.value)}
            >
              <option value="">Quelle est la capacité de la mémoire?</option>
              {AllStorages.map((storage) => (
                <option value={storage.id} key={storage.id}>
                  {storage.property_storage}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PutInformations;
