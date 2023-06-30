import React, { useState, useEffect } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import connexion from "../../../services/connexion";
import MobilePhone from "../../../assets/mobile-phone_800x800px.png";
import AbbePierre from "../../../assets/abbe-pierre.png";

function PageEtape4({ phoneValue, phone }) {
  const [price, setPrice] = useState(0);
  const [oneBrand, setOneBrand] = useState([]);
  const [oneModel, setOneModel] = useState([]);
  const [oneRam, setOneRam] = useState([]);
  const [oneStorage, setOneStorage] = useState([]);

  const getOneBrand = async () => {
    try {
      const brand = await connexion.get(`/brands/${phone.brand}`);
      setOneBrand(brand);
    } catch (err) {
      console.error(err);
    }
  };

  const getOneModel = async () => {
    try {
      const model = await connexion.get(`/models/${phone.model_id}`);
      setOneModel(model);
    } catch (err) {
      console.error(err);
    }
  };

  const getOneRam = async () => {
    try {
      const ram = await connexion.get(`/rams/${phone.ram_id}`);
      setOneRam(ram);
    } catch (err) {
      console.error(err);
    }
  };

  const getOneStorage = async () => {
    try {
      const storage = await connexion.get(`/storages/${phone.storage_id}`);
      setOneStorage(storage);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setPrice(
      +phoneValue.value_ram +
        +phoneValue.value_storage +
        +phoneValue.value_screen +
        +phoneValue.value_case
    );
    getOneBrand();
    getOneModel();
    getOneRam();
    getOneStorage();
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
          <li className="active">Etape 3</li>
          <li className="active">Etape 4</li>
        </ul>
      </div>
      <div className="model_container">
        <div className="donnes_modele">
          <img
            className="mobile-picture"
            src={MobilePhone}
            alt="Mobile Phone"
            width="100%"
          />
          <div className="texte-container">
            <h3 className="nom-modele">
              <span className="bleu">Modèle : </span>
              {oneModel.model}
            </h3>
            <div className="modele-description">
              <div className="descript-line">
                <BiArrowFromLeft width="0.5em" />{" "}
                <span className="bleu">Marque :</span> {oneBrand.brand}
              </div>
              <div className="descript-line">
                <BiArrowFromLeft /> <span className="bleu">RAM :</span>{" "}
                {oneRam.property_ram} Go
              </div>
              <div className="descript-line">
                <BiArrowFromLeft /> <span className="bleu">Stockage :</span>{" "}
                {oneStorage.property_storage} Go
              </div>
            </div>
          </div>
        </div>
        <div className="etat_container">
          <h2 className="Etat-title">Prix conseillé du téléphone </h2>
          <div className="price">{price} €</div>
        </div>
      </div>
    </div>
  );
}
export default PageEtape4;
