import React, { useState, useEffect } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import MobilePhone from "../../../assets/mobile-phone_800x800px.png";
import AbbePierre from "../../../assets/abbe-pierre.png";

function PageEtape4({ phoneValue }) {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(
      +phoneValue.value_ram +
        +phoneValue.value_storage +
        +phoneValue.value_screen +
        +phoneValue.value_case
    );
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
              Iphone 6
            </h3>
            <div className="modele-description">
              <div className="descript-line">
                <BiArrowFromLeft width="0.5em" />{" "}
                <span className="bleu">Marque :</span> Apple
              </div>
              <div className="descript-line">
                <BiArrowFromLeft /> <span className="bleu">RAM :</span> Apple
              </div>
              <div className="descript-line">
                <BiArrowFromLeft /> <span className="bleu">Stockage :</span>{" "}
                Apple
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
