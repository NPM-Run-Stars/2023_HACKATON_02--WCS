import React from "react";
import { useNavigate } from "react-router-dom";
import AbbePierre from "../../assets/abbe-pierre.png";
import { useCurrentUser } from "../../contexts/AuthContexts";

function PageIntro2() {
  const navigate = useNavigate();
  const { user } = useCurrentUser();

  setTimeout(() => {
    navigate("/form");
  }, 5000);

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
              <div>Bienvenue</div>
            </div>
            <div className="second">
              <div>{user.firstname}</div>
            </div>
            <div className="third">
              <div>Bienvenue</div>
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
