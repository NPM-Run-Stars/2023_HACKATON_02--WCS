import React from "react";

function Gabarit() {
  return (
    <>
      <button type="button">Bouton</button>
      <form>
        <label htmlFor="">
          Titre
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="title"
          />
        </label>
        <label htmlFor="">
          Sous-titre
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="subtitle"
          />
        </label>
        <label htmlFor="">
          Résumé
          <input type="text/" name="resume" />
        </label>
        <label htmlFor="">
          Source image
          <input type="url" name="src" />
        </label>
        <label htmlFor="">
          Texte alternatif
          <input type="text" name="alt" />
        </label>
        <label htmlFor="">
          Liste de tags
          <input type="text" name="alt" />
        </label>
        <button type="button">Ajouter un article</button>
      </form>

      <select name="" id="">
        <option value="">Liste déroulante</option>
      </select>

      <fieldset>
        <legend>Etat du téléphone</legend>

        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label htmlFor="huey">Excellent</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label htmlFor="dewey">Très bon</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label htmlFor="louie">Bon</label>
        </div>
      </fieldset>
    </>
  );
}

export default Gabarit;
