import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import MobilePhone from "../../assets/mobile-phone_800x800px.png";

function PageEtape3() {
  return (
    <div>
      <div className="containerbar">
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
        <h1 className="Etat-title">Quel est l’état du téléphone ? </h1>
        <div className="radio_box">
          <div className="radio-container">
            <fieldset>
              <legend className="radio-legende">Etat du téléphone</legend>

              <div className="radio-label">
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                  className="radio-list"
                />
                <label htmlFor="huey">Excellent</label>
              </div>

              <div className="radio-label">
                <input
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="dewey"
                  className="radio-list"
                />
                <label htmlFor="dewey">Très bon</label>
              </div>

              <div className="radio-label">
                <input
                  type="radio"
                  id="louie"
                  name="drone"
                  value="louie"
                  className="radio-list"
                />
                <label htmlFor="louie">Bon</label>
              </div>
            </fieldset>
          </div>
          <div className="radio-container">
            <fieldset>
              <legend className="radio-legende">Etat du téléphone</legend>

              <div className="radio-label">
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                  className="radio-list"
                />
                <label htmlFor="huey">Excellent</label>
              </div>

              <div className="radio-label">
                <input
                  type="radio"
                  id="dewey"
                  name="drone"
                  value="dewey"
                  className="radio-list"
                />
                <label htmlFor="dewey">Très bon</label>
              </div>

              <div className="radio-label">
                <input
                  type="radio"
                  id="louie"
                  name="drone"
                  value="louie"
                  className="radio-list"
                />
                <label htmlFor="louie">Bon</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="btn-container">
          <button type="button" className="main-btn">
            Precedent
          </button>
          <button type="button" className="main-btn">
            suivant
          </button>
        </div>
      </div>
    </div>
  );
}
export default PageEtape3;
