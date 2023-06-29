import React from "react";
import imeiHand from "../../assets/ImeiHand.png";

function ImeiOrModel() {
  return (
    <div>
      <h2>Ensemble trouvons un prix juste</h2>
      <h1>Renseignez les données du téléphone</h1>
      <main>
        <section className="imei">
          <article>
            <img src={imeiHand} alt="imeiHand" />
            <h3>
              Via <br /> <span>IMEI</span>
              <br /> du téléphone
            </h3>
            <input type="checkbox" />
          </article>
          <figure>Comment trouver l'IMEI d'un téléphone ?</figure>
        </section>
        <section className="model">
          <article>
            <img src={imeiHand} alt="imeiHand" />
            <h3>
              Je connais le <span>modèle</span> du téléphone
            </h3>
            <input type="checkbox" />
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
