import React from "react";
import imeiHand from "../../assets/ImeiHand.png";
import modelHand from "../../assets/modelHand.png";

function ImeiOrModel({ setWay }) {
  return (
    <div>
      <header>
        <h2>Ensemble trouvons un prix juste</h2>
        <h1>Renseignez les données du téléphone</h1>
      </header>
      <main>
        <section className="imei">
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
        <section className="model">
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
    </div>
  );
}

export default ImeiOrModel;
