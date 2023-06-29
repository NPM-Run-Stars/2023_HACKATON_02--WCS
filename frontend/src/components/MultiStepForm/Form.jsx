import React, { useState } from "react";
import ImeiOrModel from "./ImeiOrModel";
import PutInformations from "./PutInformations";
import RecapModel from "./RecapModel";
import PriceModel from "./PriceModel";

import "./Form.scss";

function Form() {
  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return <ImeiOrModel />;
    }
    if (page === 1) {
      return <PutInformations />;
    }
    if (page === 2) {
      return <RecapModel />;
    }
    return <PriceModel />;
  };
  return (
    <div className="form">
      <div className="progressbar">
        <div className="form-container">
          <div className="main-container">{pageDisplay()} </div>
          <div className="button-container">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage(() => page - 1)}
            >
              Prev
            </button>
            <button
              type="button"
              disabled={page === 3}
              onClick={() => setPage(() => page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
