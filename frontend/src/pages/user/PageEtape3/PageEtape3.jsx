import React, { useState, useEffect } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import connexion from "../../../services/connexion";
import MobilePhone from "../../../assets/mobile-phone_800x800px.png";
import AbbePierre from "../../../assets/abbe-pierre.png";

function PageEtape3({ phone, handleValue }) {
  const [allScreens, setAllScreens] = useState([]);
  const [allCases, setAllCases] = useState([]);
  const getScreens = async () => {
    try {
      const screens = await connexion.get("/screens");
      setAllScreens(screens);
    } catch (err) {
      console.error(err);
    }
  };
  const getCases = async () => {
    try {
      const cases = await connexion.get("/cases");
      setAllCases(cases);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getScreens();
    getCases();
  }, []);

  console.info(handleValue);

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
          <li>Etape 4</li>
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
              <span className="bleu">Modèle : </span> {phone.model}
            </h3>
            <div className="modele-description">
              <div className="descript-line">
                <BiArrowFromLeft width="0.5em" />{" "}
                <span className="bleu">Marque :</span> {phone.brand}
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
        <h1 className="Etat-title">Quel est l’état du téléphone ? </h1>
        <div className="radio_box">
          <div className="radio-container">
            <fieldset>
              <legend className="radio-legende">Etat de l'écran</legend>
              {allScreens.map((screen) => {
                return (
                  <div className="radio-label">
                    <input
                      type="radio"
                      id={screen.id}
                      name="screen_id"
                      value={screen.value_screen}
                      checked
                      className="radio-list"
                    />
                    <label htmlFor={screen.id}>{screen.state_screen}</label>
                  </div>
                );
              })}
            </fieldset>
          </div>
          <div className="radio-container">
            <fieldset>
              <legend className="radio-legende">Etat du chassis</legend>

              {allCases.map((oneCase) => {
                return (
                  <div className="radio-label">
                    <input
                      type="radio"
                      id={oneCase.id}
                      name="case_id"
                      value={oneCase.value_oneCase}
                      checked
                      className="radio-list"
                    />
                    <label htmlFor={oneCase.id}>{oneCase.state_case}</label>
                  </div>
                );
              })}
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageEtape3;
