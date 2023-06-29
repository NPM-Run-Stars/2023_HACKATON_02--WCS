import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";

function RecapModel({ phone, handleValue }) {
  const [allScreens, setAllScreens] = useState([]);
  const [allCases, setAllCases] = useState([]);
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
  }, []);

  return (
    <div>
      <h2>{phone.brand} </h2>
      <h2>{phone.model} </h2>
      <h2>{phone.value_ram} </h2>
      <h2>{phone.value_storage} </h2>

      <select
        name="value_screen"
        onChange={(e) => handleValue(e.target.name, e.target.value)}
      >
        <option value="">Quel est l'état de l'écran ?</option>
        {allScreens.map((screen) => (
          <option value={screen.value_screen} key={screen.id}>
            {screen.state_screen}
          </option>
        ))}
      </select>

      <select
        name="value_case"
        onChange={(e) => handleValue(e.target.name, e.target.value)}
      >
        <option value="">Quel est l'état du chassis ?</option>
        {allCases.map((oneCase) => (
          <option value={oneCase.value_case} key={oneCase.id}>
            {oneCase.state_case}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RecapModel;
