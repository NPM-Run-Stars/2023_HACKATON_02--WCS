import React, { useState } from "react";
import ImeiOrModel from "./ImeiOrModel";
import PutInformations from "./PutInformations";
import RecapModel from "./RecapModel";
import PriceModel from "./PriceModel";
import ImeiInformations from "./ImeiInformations";

import "./Form.scss";

function Form() {
  const [page, setPage] = useState(0);
  const [way, setWay] = useState("");

  const pageDisplay = () => {
    if (page === 0) {
      return <ImeiOrModel setWay={setWay} />;
    }
    if (page === 1 && way === "model") {
      return <PutInformations />;
    }
    if (page === 1 && way === "imei") {
      return <ImeiInformations />;
    }
    if (page === 2) {
      return <RecapModel />;
    }
    return <PriceModel />;
  };
  return (
    <div className="form">
      <div className="progressbar">
        <h2>Progress Bar</h2>
        <div className="form-container">
          <div className="main-container">{pageDisplay()} </div>
          <div className="button-container">
            {way && (
              <>
                {" "}
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
