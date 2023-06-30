import React from "react";
import "./Gabarit.scss";

function Gabarit() {
  return (
    <>
      <h1 className="main-titel"> Titre</h1>
      <button type="button" className="main-btn">
        Bouton
      </button>

      <form>
        <div className="form-container">
          <label className="label-title" htmlFor="">
            Titre
            <input
              className="basic-input animated"
              type=""
              required
              minLength={1}
              maxLength={255}
              name="title"
            />
          </label>
          <label htmlFor="" className="label-title">
            Sous-titre
            <input
              className="basic-input formEntry animated"
              type="text"
              required
              minLength={1}
              maxLength={255}
              name="subtitle"
            />
          </label>
          <label htmlFor="" className="label-title">
            Résumé
            <input type="text/" name="resume" className="basic-input" />
          </label>
          <label htmlFor="" className="label-title">
            Source image
            <input
              type="url"
              name="src"
              className="basic-input formEntry animated"
            />
          </label>
          <label htmlFor="" className="label-title">
            Texte alternatif
            <input
              type="text"
              name="alt"
              className="basic-input formEntry animated"
            />
          </label>
          <label htmlFor="" className="label-title">
            Liste de tags
            <input
              type="text"
              name="alt"
              className="basic-input formEntry animated"
            />
          </label>
          <button type="button" className="main-btn">
            Ajouter un article
          </button>
        </div>
      </form>

      <div className="box">
        <select name="" id="" className="label-title">
          <option value="" className="option-list">
            Liste déroulante
          </option>
        </select>
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
    </>
  );
}

export default Gabarit;
