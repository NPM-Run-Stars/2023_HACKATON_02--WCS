import React from "react";
import AbbePierre from "../../assets/Abbe-Pierre.png";

function PageIntro2() {
  return (
    <div className="intro-container">
      <img
        className="personnage-picture"
        src={AbbePierre}
        alt="Abbe Pierre"
        width="100%"
      />
      <div className="text-container">
        <div className="first-text">
          <p className="intro-script">Bonjour</p>
          <section className="animation">
            <div className="first">
              <div>Cyrielle</div>
            </div>
            <div className="second">
              <div>Thomas</div>
            </div>
            <div className="third">
              <div>Cyrielle</div>
            </div>
          </section>
        </div>

        <div className="css-typing">
          <p>On n’est jamais heureux que</p>
          <p>dans le bonheur qu’on donne.</p>
          <p className="signature">Donner, c’est recevoir.</p>
        </div>
      </div>
    </div>
  );
}
export default PageIntro2;
