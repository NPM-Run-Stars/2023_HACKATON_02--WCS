import React from "react";

function ProgressBar() {
  return (
    <div className="containerbar">
      <ul className="progressbar">
        <li>Etape 1</li>
        <li className="active">Etape 2</li>
        <li>Etape 3</li>
        <li>Etape 4</li>
      </ul>
    </div>
  );
}

export default ProgressBar;
