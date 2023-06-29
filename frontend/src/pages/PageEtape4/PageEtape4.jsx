import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import MobilePhone from "../../assets/mobile-phone_800x800px.png";

function PageEtape4() {
  return (
    <div>
      <div className="containerbar">
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
          <div className="chart_container">
            Etat satisfaisant
            <div className="statChartHolder">
              <div className="progress-pie-chart" data-percent="67">
                <div className="ppc-progress">
                  <div className="ppc-progress-fill" />
                </div>
                <div className="ppc-percents">
                  <div className="pcc-percents-wrapper">
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="Etat-title">Prix conseillé du téléphone </h2>
          <div className="price">80 €</div>
          <button type="button" className="main-btn btnred">
            Envoyer au stock
          </button>
          <div className="btn-container smallbtn-ctn">
            <button type="button" className="main-btn smallbtn">
              Ajouter un autre téléphone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageEtape4;
