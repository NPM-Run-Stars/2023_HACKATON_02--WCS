import React, { useState, useEffect } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import connexion from "../../../services/connexion";
import MobilePhone from "../../../assets/mobile-phone_800x800px.png";
import AbbePierre from "../../../assets/abbe-pierre.png";

function PageEtape3({ phone, setPhoneValue, phoneValue }) {
  const [allScreens, setAllScreens] = useState([]);
  const [allCases, setAllCases] = useState([]);
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
      await setPhoneValue({ ...phoneValue, value_ram: ram.value_ram });
    } catch (err) {
      console.error(err);
    }
  };

  const getOneStorage = async () => {
    try {
      const storage = await connexion.get(`/storages/${phone.storage_id}`);
      setOneStorage(storage);
      await setPhoneValue({
        ...phoneValue,
        value_storage: storage.value_storage,
      });
    } catch (err) {
      console.error(err);
    }
  };

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
              <span className="bleu">Modèle : </span> {oneModel.model}
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
                      name="value_screen"
                      value={screen.value_screen}
                      checked={screen.value_screen === phoneValue.value_screen}
                      className="radio-list"
                      onChange={() =>
                        setPhoneValue({
                          ...phoneValue,
                          value_screen: screen.value_screen,
                        })
                      }
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
                      name="value_case"
                      checked={oneCase.value_case === phoneValue.value_case}
                      value={oneCase.id}
                      className="radio-list"
                      onChange={() =>
                        setPhoneValue({
                          ...phoneValue,
                          value_case: oneCase.value_case,
                        })
                      }
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
