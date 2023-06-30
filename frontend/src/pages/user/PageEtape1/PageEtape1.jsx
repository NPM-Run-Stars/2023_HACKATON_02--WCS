import React from "react";
import imeiHand from "../../../assets/ImeiHand.png";
import modelHand from "../../../assets/modelHand.png";
import AbbePierre from "../../../assets/abbe-pierre.png";
import TutoIMEI from "../../../assets/Tuto-imei.gif";

function ImeiOrModel({ setWay }) {
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
          <li>Etape 2</li>
          <li>Etape 3</li>
          <li>Etape 4</li>
        </ul>
      </div>
      <header>
        <h2 className="text-script">Ensemble trouvons un prix juste</h2>
        <h1>Renseignez les données du téléphone</h1>
      </header>
      <main className="main-container">
        <section className="imei section-container ">
          <article>
            <img src={imeiHand} alt="imeiHand" />
            <label htmlFor="imei">
              <h3>
                Via <br /> <span>IMEI</span>
                <br /> du téléphone
              </h3>
              <div>
                <input
                  type="radio"
                  id="imei"
                  name="way"
                  value="imei"
                  onClick={(e) => setWay(e.target.value)}
                />
              </div>
            </label>
          </article>
          <figure>Comment trouver l'IMEI d'un téléphone ?</figure>
        </section>
        <section className="model section-container ">
          <article>
            <img src={modelHand} alt="modelHand" />
            <label htmlFor="model">
              <h3>
                Je connais le <br /> <span>modèle</span> du téléphone
              </h3>
              <div>
                <input
                  type="radio"
                  id="model"
                  name="way"
                  value="model"
                  onClick={(e) => setWay(e.target.value)}
                />
              </div>
            </label>
          </article>
          <figure>
            Comment trouver les informations techniques d'un téléphone ?
          </figure>
        </section>
      </main>
      <img className="tutoriel" src={TutoIMEI} alt="Tutoriel" width="600px" />
    </div>
  );
}

export default ImeiOrModel;
